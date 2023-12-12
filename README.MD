### ENCRYPT

- Software diseñado para brindar un campo mas de seguridad a las contraseñas y permitiendo que asi sean mas seguras para proteger informacion o cuentas valiosas, este proyecto fue desarrollado como ejemplo de la libreria bcrypt. para fortalecer los conociminetos e ir ampliando la logica de programacion.

el script main llamado app se encarga de llamar a las funciones encargadas de generar el hash y desencriptar como lo es  una de ellas createHasTable(), este crea una hash por cada letra del abecedario en minuscula, mayuscula, numero o simbolo, luego esta
encript(password), esta funcion resive una contraseña y se encarga de generar un hash totalmente diferente cada vez que se ejecute la funcion, asi permite que cada clave sea unica, por ultimo tenemos a desencript(hash), esta resive el hash devuelto por encript y valida el hash para verificar si coincide o no con algun hash que pudo haber generado.
