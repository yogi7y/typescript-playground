interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 10, y: 20 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickName: string;

  sayHi: () => string;
}

const john: Person = {
  id: 1,
  first: "John",
  last: "Doe",
  nickName: "J",
  sayHi: () => {
    return "Hello";
  },
};
