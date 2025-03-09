// declare and set
var locationObj = { lat: 1, lng: 2 };
console.log(locationObj);
var displayUser = function (user) {
    console.log("".concat(user.name, " is ").concat(user.age, " years old."));
};
displayUser({
    name: "John",
    age: 10,
});
