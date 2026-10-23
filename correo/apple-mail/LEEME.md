# Correo personal en Apple Mail

Tres piezas para escribir desde `hola@vecinadigital.com`, con la identidad del aviso automático «Gracias por escribir». El aviso del formulario no se toca: sigue en `src/lib/contactEmails.js`.

Mail 16 en macOS Sequoia no importa plantillas HTML ni tiene Stationery. La carta se reutiliza como un mensaje guardado. La firma se pega en Ajustes.

Si el Mac está en inglés, los menús equivalentes son Settings, Signatures, Mailbox > New Mailbox, On My Mac, File > Save, Drafts, Message > Send Again y Signature > None.

## Qué abrir

- `plantilla.html` es la carta, con fondo beige. Sirve para el primer correo a una clienta, una propuesta o el aviso de que la web ya está.
- `correo.html` es el correo de cada día: tarjeta blanca centrada, logo pequeño y la firma. Sirve para respuestas y mensajes cortos. El fondo de fuera es blanco.
- `firma.html` es solo el cierre, por si escribes un correo sin plantilla.

Las imágenes de estas plantillas están recortadas al tamaño al que se ven. Si el archivo fuera más grande, al responder Gmail lo muestra a tamaño real y el logo sale enorme.

- https://www.vecinadigital.com/assets/email/logo-carta.png
- https://www.vecinadigital.com/assets/email/logo-correo.png
- https://www.vecinadigital.com/assets/email/casa-firma.png

El texto del enlace dice `vecinadigital.com`. El destino es `https://www.vecinadigital.com`, que es la dirección canónica: la otra redirige ahí.

## Carta

1. En Mail: Buzón > Buzón nuevo. Ubicación: En mi Mac. Nombre: `Plantillas`.
2. Abre `plantilla.html` en Safari. Clic en la página, Comando + A, Comando + C.
3. Mensaje nuevo. En De, elige `hola@vecinadigital.com`. En el menú Firma, elige Ninguna. Clic en el cuerpo y Comando + V.
4. Deja Para vacío. Asunto: `PLANTILLA — carta Vecina Digital`.
5. Archivo > Guardar. Cierra la ventana. En Borradores, arrastra ese mensaje al buzón Plantillas.

Para escribir:

1. Abre Plantillas y selecciona la carta con un clic, sin abrirla.
2. Mensaje > Enviar de nuevo. Mail abre una copia.
3. Sustituye solo el texto de ejemplo, desde «Hola Ana,» hasta «Un abrazo,». Escribe encima de cada párrafo, sin borrar el logo, la casita ni el cierre.
4. Pon la destinataria y el asunto. Mira el final: si Mail ha añadido otra firma debajo de la tarjeta, bórrala en esa copia. La carta ya termina con la misma firma.
5. Envía la copia. El mensaje del buzón Plantillas no se envía y no cambia.

No abras la plantilla con doble clic para escribirla y enviarla: estarías gastando el original. Si el diseño se rompe en una copia, ciérrala sin guardar y vuelve a Enviar de nuevo. Para cambiar el diseño, repite el pegado desde Safari, guarda, mueve el borrador a Plantillas y borra la plantilla vieja.

## Firma

1. Mail > Ajustes > Firmas.
2. En la columna izquierda, selecciona la cuenta `hola@vecinadigital.com` antes de crear la firma. Si la creas en Todas las firmas, arrástrala después encima de esa cuenta.
3. Pulsa + y nómbrala `Vecina Digital`.
4. Desmarca «Hacer coincidir siempre con el tipo de letra de mensaje predeterminado».
5. Abre `firma.html` en Safari, Comando + A, Comando + C, y pégala en el recuadro de la firma.
6. Abajo, en Elegir firma, selecciona `Vecina Digital` para esa cuenta.

Así sale sola en las respuestas cotidianas. En la carta completa, quítala si aparece debajo.

Para que Mail no la simplifique al reiniciar:

1. Comprueba que se ve bien en Ajustes.
2. Cierra Mail con Comando + Q.
3. En Finder: Ir > Ir a la carpeta… y pega `~/Library/Mail`.
4. Entra en la carpeta `V` de número más alto, luego `MailData/Signatures`. En Sequoia suele ser `V10`.
5. Ordena por fecha de modificación. El `.mailsignature` más reciente es el que acabas de pegar.
6. Obtener información y marca Bloqueado.
7. Abre Mail y revisa la firma. Si ha vuelto el texto provisional, desbloquéala, pégala otra vez, cierra Mail y vuelve a bloquearla.

No edites ese archivo a mano para meter el HTML: en Sequoia Mail a menudo no conserva ese cambio. El bloqueo solo protege lo que Mail ya aceptó al pegar.

La firma vive en este Mac. No viaja sola al iPhone.

## Prueba

Envía la copia de la carta a otra cuenta tuya, y un mensaje corto con la firma. Ábrelos en el móvil, o estrecha la ventana de Mail.

- El logo y la casita se ven. Si el cliente pide cargar contenido remoto, acéptalo una vez: las imágenes están en la web, no dentro del mensaje.
- Los enlaces abren https://www.vecinadigital.com y un mensaje a hola@vecinadigital.com.
- La tarjeta cabe en la pantalla estrecha, con la franja terracota, rosa y oliva arriba.
- En la carta no aparece la firma compacta duplicada debajo.

## Qué Mail no va a conservar siempre

Al pegar, Mail se queda con tablas, colores de fondo, imágenes remotas y enlaces. Puede ignorar la esquina redondeada, el recorte de la franja o la consulta de pantalla estrecha del `<style>`. Por eso la franja es una fila de tres celdas con color sólido, no el degradado CSS del aviso automático, y los textos usan Georgia y las tipografías de sistema, que no hace falta descargar.

El texto nuevo a veces hereda la letra predeterminada de Mail. Si pasa, selecciona solo ese párrafo y vuelve a escribir encima del texto que ya tenía el estilo, en lugar de borrar la celda entera.
