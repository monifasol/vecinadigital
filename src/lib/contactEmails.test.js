import assert from "node:assert/strict";
import test from "node:test";
import { ownerNotificationEmail, visitorConfirmationEmail } from "./contactEmails.js";

function images(html) {
  return html.match(/<img\b[^>]*>/g) || [];
}

function firstBodyElement(html) {
  const body = html.slice(html.indexOf("<body"));
  return body.slice(body.indexOf(">") + 1).trimStart();
}

test("inbox preview is hidden and comes before the logo", () => {
  const owner = ownerNotificationEmail({
    email: 'ana"taller"<a@b.com>',
    message: "Hola",
  });
  const visitor = visitorConfirmationEmail({ message: "Hola" });

  assert.match(firstBodyElement(owner), /^<div style="display:none;/);
  assert.match(firstBodyElement(visitor), /^<div style="display:none;/);
  assert.match(owner, /Nuevo mensaje de ana&quot;taller&quot;&lt;a@b.com&gt;/);
  assert.match(visitor, /He recibido tu mensaje\. Te respondo lo antes posible\./);
});

test("image tags stay on one line so Gmail cannot leak attributes into the snippet", () => {
  const owner = ownerNotificationEmail({ email: "ana@b.com", message: "Hola" });
  const visitor = visitorConfirmationEmail({ message: "Hola" });

  for (const html of [owner, visitor]) {
    const imgs = images(html);
    assert.ok(imgs.length > 0);
    for (const img of imgs) {
      assert.equal(img.includes("\n"), false);
    }
  }

  assert.equal(images(visitor).length, 2);
});

test("the visible card is unchanged", () => {
  const owner = ownerNotificationEmail({ email: "ana@b.com", message: "Quiero una página." });
  const visitor = visitorConfirmationEmail({ message: "Quiero una página." });

  assert.match(owner, /Nuevo mensaje/);
  assert.match(owner, /width="400"/);
  assert.match(owner, /width:400px;max-width:100%/);
  assert.match(owner, /border-radius:18px;overflow:hidden/);
  assert.match(owner, /Quiero una página\./);

  assert.match(visitor, /Gracias por escribir/);
  assert.match(visitor, /Estás en casa!/);
  assert.match(visitor, /width="140"/);
  assert.match(visitor, /linear-gradient\(90deg,#c56a3a,#e6b59b,#6f7f5c\)/);
});
