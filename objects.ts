// declare and set
let locationObj: { lat: number; lng: number } = { lat: 1, lng: 2 };

console.log(locationObj);

type User = {
  name: string;
  age: number;
};

const displayUser = (user: User) => {
  console.log(`${user.name} is ${user.age} years old.`);
};

displayUser({
  name: "John",
  age: 10,
});
