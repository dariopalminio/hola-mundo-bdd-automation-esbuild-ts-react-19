# language: es

Característica: Mostrar página principal

  @Regression @Smoke
  Escenario: Mostrar página de bienvenida
    Dado que estoy en la página principal
    Cuando la página carga
    Entonces debería ver la página principal

  @Regression
  Escenario: Mostrar título de página de bienvenida
    Dado que estoy en la página principal
    Cuando la página carga
    Entonces debería ver el título "Hola Mundo"

