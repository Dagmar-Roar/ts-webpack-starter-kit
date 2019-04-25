import { Greet } from './component/greet';

const hello: Greet = new Greet("hello");
const sayHello: string = hello.greeting();
console.log(sayHello);

