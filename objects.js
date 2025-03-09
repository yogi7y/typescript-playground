// declare and set
var locationObj = { lat: 1, lng: 2 };
console.log(locationObj);
var displayUser = function (user) {
    console.log("".concat(user.name, " is ").concat(user.age, " years old."));
    console.log("".concat(user.name, " works as a ").concat(user.work.role, " at ").concat(user.work.company, " with ").concat(user.work.yearsOfExperience, " years of experience."));
};
displayUser({
    name: "John",
    age: 10,
    work: {
        role: "Software Engineer",
        company: "Abc corp.",
        yearsOfExperience: 6,
    },
});
