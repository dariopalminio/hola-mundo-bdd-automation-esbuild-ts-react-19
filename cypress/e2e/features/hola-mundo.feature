# language: es


Característica: Mostrar página principal

  @smoke
  Escenario: Mostrar página de bienvenida
    Dado que estoy en la página principal
    Cuando la página carga
    Entonces debería ver la página principal

  @regression
  Escenario: Mostrar título de página de bienvenida
    Dado que estoy en la página principal
    Cuando la página carga
    Entonces debería ver el título "Hola Mundo"

