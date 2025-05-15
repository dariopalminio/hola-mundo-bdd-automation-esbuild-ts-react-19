# language: es

@Regression @Smoke
Característica: Mostrar página principal

  Escenario: Mostrar página de bienvenida
    Dado que estoy en la página principal
    Cuando la página carga
    Entonces debería ver la página principal
    Y debería ver el título "Hola Mundo"
