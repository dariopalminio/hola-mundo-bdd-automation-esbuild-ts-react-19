# Hola Mundo BDD Automation
Hola Mundo de una automatización BDD con cypress y cucumber

Node v20.19.2
npx 10.8.2
React 19.1.0
    


#  Característica Gherkin implementada

```
Característica: Mostrar página principal

  Escenario: Mostrar página de bienvenida
    Dado que estoy en la página principal
    Cuando la página carga
    Entonces debería ver la página principal
    Y debería ver el título "Hola Mundo"
```

#  Instalar
```
npm install
npx cypress install
```

#  Ejecutar prueba

Ejecutar en una terminal:
```
npm run dev
```

Ejecutar en otra terminal:
```
npm run test:e2e:open
npm run test:e2e 
```

![Screenshot cypress](doc/img/screenshot_cypress_node20.png)

References: \
- https://cucumber.io/docs/gherkin/reference \
- https://filiphric.com/cucumber-in-cypress-a-step-by-step-guide#adding-parameters-to-step-definitions
- https://github.com/eccanto/base-cypress-cucumber-typescript/blob/master/tsconfig.json



