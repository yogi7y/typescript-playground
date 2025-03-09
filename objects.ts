// declare and set
let locationObj: { lat: number; lng: number } = { lat: 1, lng: 2 };

console.log(locationObj);

type User = {
  readonly id: number;
  name: string;
  age: number;
  work: {
    role: string;
    company: string;
    yearsOfExperience?: number;
  };
};

const displayUser = (user: User) => {
  console.log(`${user.name} is ${user.age} years old.`);
  console.log(
    `${user.name} works as a ${user.work.role} at ${user.work.company} with ${user.work.yearsOfExperience} years of experience.`
  );
};

displayUser({
  id: 1,
  name: "John",
  age: 10,
  work: {
    role: "Software Engineer",
    company: "Abc corp.",
    yearsOfExperience: 6,
  },
});
