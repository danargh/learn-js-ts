const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = (output) => console.log(output);

// printOutput(add(5, 2));

function greet(person: string, date: Date) {
   console.log(`Hello ${person}, today is ${date.toLocaleDateString()}!`);
}

greet('Maddison', new Date());
