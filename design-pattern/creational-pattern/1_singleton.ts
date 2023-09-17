/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export {};

class Singleton {
   private static instance: Singleton;

   public name: string;

   /**
    * The Singleton's constructor should always be private to prevent direct
    * construction calls with the `new` operator.
    */
   private constructor(name: string) {
      this.name = name;
   }

   /**
    * The static method that controls the access to the singleton instance.
    *
    * This implementation let you subclass the Singleton class while keeping
    * just one instance of each subclass around.
    */
   public static getInstance(data: string): Singleton {
      if (!Singleton.instance) {
         Singleton.instance = new Singleton(data);
      }

      return Singleton.instance;
   }

   /**
    * Finally, any singleton should define some business logic, which can be
    * executed on its instance.
    */
   public someBusinessLogic() {
      // ...
   }
}

/**
 * The client code.
 */
function clientCode() {
   const s1 = Singleton.getInstance('Hello');
   const s2 = Singleton.getInstance('World');

   // testing
   s2.name = 'Hello World';
   console.log(s1); // Hello World

   if (s1 === s2) {
      console.log('Singleton works, both variables contain the same instance.');
   } else {
      console.log('Singleton failed, variables contain different instances.');
   }
}

clientCode();
