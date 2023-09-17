var add = function (a, b) { return a + b; };
var printOutput = function (output) { return console.log(output); };
// printOutput(add(5, 2));
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toLocaleDateString(), "!"));
}
greet('Maddison', new Date());
