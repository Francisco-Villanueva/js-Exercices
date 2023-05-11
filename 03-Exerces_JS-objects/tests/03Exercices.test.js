"use strict";

const { callBack, depositProfit, findTheMax } = require("../main");

describe("EXERCICE 1 => CB funciton", () => {
  it("Should return a function ", () => {
    const suma = (a, b) => {
      return a + b;
    };
    const res = callBack(suma);

    expect(typeof res).toBe("function");
  });
  it("Should return the sum of 2 numbers", () => {
    const suma = (a, b) => {
      return a + b;
    };
    const res = callBack(suma);

    expect(res(4, 5)).toBe(9);
    expect(res(10, 5)).toBe(15);
    expect(res(-12, 12)).toBe(0);
    expect(res(130, 20)).toBe(150);
  });
  it("Should return the subtraction of 2 numbers", () => {
    const dif = (a, b) => {
      return a - b;
    };
    const res = callBack(dif);

    expect(res(4, 5)).toBe(-1);
    expect(res(10, 5)).toBe(5);
    expect(res(-12, 12)).toBe(-24);
    expect(res(130, 20)).toBe(110);
  });
  it("Should return the product of 2 numbers", () => {
    const product = (a, b) => {
      return a * b;
    };
    const res = callBack(product);

    expect(res(4, 5)).toBe(4 * 5);
    expect(res(10, 5)).toBe(50);
    expect(res(-12, 12)).toBe(-12 * 12);
    expect(res(130, 20)).toBe(130 * 20);
  });
});

describe("EXERCICE 2 => Deposit Profit", () => {
  it("Should return a number", () => {
    const res = depositProfit(100, 3, 20);
    expect(typeof res).toBe("number");
  });

  it("should return how long it would take for the balance to pass de threshold", () => {
    expect(depositProfit(100, 20, 170)).toBe(3);
    expect(depositProfit(100, 1, 101)).toBe(1);
    expect(depositProfit(1, 100, 64)).toBe(6);
    expect(depositProfit(50, 25, 100)).toBe(4);
  });
});

describe("EXERCICE 3 => Find the max depending the param", () => {
  const alumnos = [
    { nombre: "Juan", edad: 23, promedio: 9.7, materias: 3 },
    { nombre: "Martin", edad: 29, promedio: 9.5, materias: 6 },
    { nombre: "Raul", edad: 19, promedio: 8.7, materias: 7 },
  ];

  it("should return a string", () => {
    const res = findTheMax(alumnos, "nombre");
    expect(typeof res).toBe("string");
  });

  it('Should return Juan, for "promedio" as param ', () => {
    expect(findTheMax(alumnos, "promedio")).toBe("Juan");
  });
  it('Should return Martin, for "edad" as param ', () => {
    expect(findTheMax(alumnos, "edad")).toBe("Martin");
  });
  it('Should return Raul, for "materias" as param ', () => {
    expect(findTheMax(alumnos, "materias")).toBe("Raul");
  });
});
