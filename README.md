Repositorio-Prueba: Pruebas unitarias y análisis de seguridad

Evaluación Parcial 2, AUY1102 Ciclo de vida del Software I
Caso: Integration Solutions
Integrantes: Diego Villanueva, Fernando Gallegos

1. Descripción

Proyecto en Node.js con una calculadora simple (`src/calculadora.js`) y sus pruebas unitarias con Jest (`tests/calculadora.test.js`). Sobre él se aplican pruebas unitarias con cobertura y análisis de seguridad y calidad con SonarCloud, Snyk, `npm audit` y GitHub Advanced Security.

2. Parte 1: Pruebas unitarias y cobertura

Para ejecutar las pruebas en Windows (CMD):

    run-tests.bat

El script muestra por pantalla:
- cada prueba con su resultado y el detalle de las que fallan,
- el porcentaje de cobertura (Stmts, Branch, Funcs, Lines),
- las líneas sin cubrir (columna "Uncovered Line #s").

Resultados obtenidos:
- Cobertura: [X]% de líneas.
- Prueba que falla: [nombre de la prueba y por qué falla, por ejemplo la de `esPar`, dejada así a propósito para demostrar el reporte de fallos].
- Código sin cubrir: [por ejemplo la función `factorial`, que no tiene pruebas].

3. Parte 2: Análisis de seguridad y calidad

Herramienta | Qué analiza | Cómo se configuró | Resultado |

SonarCloud | Calidad y seguridad del código sin ejecutarlo (análisis estático) | GitHub Actions + `sonar-project.properties` + secreto `SONAR_TOKEN` | [Quality Gate, bugs, vulnerabilidades, code smells, cobertura] |
Snyk | Vulnerabilidades en las dependencias | Integración con GitHub e importación del repo | 0 críticas, 0 altas, 0 medias, 0 bajas |
npm audit - Vulnerabilidades de las dependencias de `package.json` | Comando `npm audit` | [resultado] |
GitHub Advanced Security | Dependencias (Dependabot) y secretos expuestos | Settings → Advanced Security | [qué se activó y qué mostró la pestaña Security] |

4. Análisis de conceptos 

- Prueba unitaria:con tus palabras: verifica una función aislada. En este proyecto, Jest sobre las funciones de la calculadora
- Calidad de código estático:revisa el código sin ejecutarlo. Aquí lo hace SonarCloud
- Calidad de código dinámico:revisa el comportamiento al ejecutar el código. Aquí, las pruebas de Jest
- Análisis de seguridad y vulnerabilidades:qué son y qué herramienta las detecta aquí: Snyk, npm audit, Dependabot, secret scanning
- Pruebas de integración:verifican que varios módulos funcionen juntos. No se implementan en este trabajo
- Pruebas de estrés:miden el comportamiento bajo carga alta. No se implementan en este trabajo
- Pruebas de regresión:comprueban que lo que funcionaba sigue funcionando tras un cambio. Las pruebas de Jest ejecutadas en cada push cumplen este rol

Cómo contribuyen a la calidad del producto final: [2 o 3 líneas propias].

#5. Evaluación de las herramientas (IE3.2.1)

- est y cobertura:qué errores detectó, qué dejó ver la cobertura, limitaciones
- sonarCloud:qué hallazgos mostró, cómo ayudaría a reducir deuda técnica, limitaciones
- Snyk y npm audit:qué revisan, diferencia entre ambos, qué significa un resultado en cero
- GitHub Advanced Security:qué riesgos cubre, por qué conviene tenerlo activo desde el inicio
- GitHub Actions: automatiza el análisis en cada push

Limitaciones y observaciones: por ejemplo, que 0 vulnerabilidades no significa que el código sea seguro
