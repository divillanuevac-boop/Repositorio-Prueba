const { sumar, restar, dividir, esPar } = require("../src/calculadora");

describe("Calculadora", () => {
  
  test("suma dos números", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test("resta dos números", () => {
    expect(restar(5, 3)).toBe(2);
  });

  test("divide dos números", () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test("lanza error al dividir por cero", () => {
    expect(() => dividir(1, 0)).toThrow("No se puede dividir por cero");
  });

  test("detecta si un número es par (falla a propósito)", () => {
    expect(esPar(3)).toBe(true);
  });

});
