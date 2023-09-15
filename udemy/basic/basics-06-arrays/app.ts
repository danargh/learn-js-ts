// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
   name: 'Maximilian',
   age: 30,
   hobbies: ['Sports', 'Cooking'],
};

let favoriteActivities: Array<string> = ['Sports', 'Cooking'];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
   console.log(hobby.toLowerCase());
   // console.log(hobby.map()); // !!! ERROR !!!
}
