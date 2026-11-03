import assert from "node:assert/strict";
import test from "node:test";
import {
  decideContactPost,
  isProbeEmail,
  isProbeMessage,
  signFormToken,
} from "./contactGate.js";

const SECRET = "test-secret";

function readyBody(overrides = {}) {
  const now = 1_700_000_000_000;
  return {
    now,
    body: {
      email: "ana.taller@gmail.com",
      message: "Hola, quiero una página para el taller.",
      vd_hp: "",
      formToken: signFormToken(SECRET, now - 10_000),
      ...overrides,
    },
  };
}

test("the two probes that arrived are probe emails", () => {
  assert.equal(isProbeEmail("hu.r.e.z.i.mab83@gmail.com"), true);
  assert.equal(isProbeEmail("r.ed.le.ihc.v129@gmail.com"), true);
  assert.equal(isProbeEmail("ana.taller@gmail.com"), false);
  assert.equal(isProbeEmail("juan.carlos.perez@gmail.com"), false);
});

test("the two probe bodies are tokens, a real note is not", () => {
  assert.equal(isProbeMessage("JabWkUanoKoFFiay"), true);
  assert.equal(isProbeMessage("DSSnLrFfpjgbtZloiyyjSD"), true);
  assert.equal(isProbeMessage("Hola, quiero una página para el taller."), false);
  assert.equal(isProbeMessage("Hola"), false);
});

test("a probe does not send, even with a valid form token", () => {
  const first = readyBody({
    email: "hu.r.e.z.i.mab83@gmail.com",
    message: "JabWkUanoKoFFiay",
  });
  const second = readyBody({
    email: "r.ed.le.ihc.v129@gmail.com",
    message: "DSSnLrFfpjgbtZloiyyjSD",
  });

  for (const sample of [first, second]) {
    const decision = decideContactPost(sample.body, SECRET, sample.now);
    assert.equal(decision.send, false);
    assert.equal(decision.status, 400);
    assert.equal(decision.error, "rejected");
  }
});

test("a filled honeypot does not send", () => {
  const { body, now } = readyBody({ vd_hp: "https://spam.example" });
  const decision = decideContactPost(body, SECRET, now);
  assert.equal(decision.send, false);
  assert.equal(decision.reason, "honeypot");
});

test("a direct post without the page token does not send", () => {
  const { body, now } = readyBody({ formToken: "" });
  const decision = decideContactPost(body, SECRET, now);
  assert.equal(decision.send, false);
  assert.equal(decision.reason, "missing");
});

test("a token just issued does not send", () => {
  const now = 1_700_000_000_000;
  const decision = decideContactPost(
    {
      email: "ana.taller@gmail.com",
      message: "Hola, quiero una página para el taller.",
      formToken: signFormToken(SECRET, now),
    },
    SECRET,
    now
  );
  assert.equal(decision.send, false);
  assert.equal(decision.reason, "too_fast");
});

test("a normal note with a token from the open page may send", () => {
  const { body, now } = readyBody();
  const decision = decideContactPost(body, SECRET, now);
  assert.equal(decision.send, true);
  assert.equal(decision.email, "ana.taller@gmail.com");
  assert.equal(decision.message, "Hola, quiero una página para el taller.");
});
