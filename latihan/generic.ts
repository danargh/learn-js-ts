namespace Generic {
   class Box<T> {
      private _content: T;

      constructor(content: T) {
         this._content = content;
      }

      public get content(): T {
         return this._content;
      }
   }

   let box = new Box<string>('Hello, world!');
   console.log(box.content);
}
