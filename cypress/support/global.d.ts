declare namespace Mocha {
    interface Test {
      title: string; // Define explícitamente el título de la prueba
    }
    interface Context {
      currentTest?: Test; // Agrega el contexto de la prueba actual
    }
  }