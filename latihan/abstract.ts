namespace Abstract {
   abstract class Animal {
      abstract getName(): string;
      printName() {
         console.log('Hello, ' + this.getName());
      }
   }

   class Dog extends Animal {
      getName(): string {
         return 'Dog';
      }
   }

   let dog = new Dog();
   dog.printName();
}
