import { Greet } from './component/greet';

const hello: Greet = new Greet("hi");
const sayHello: string = hello.greeting();
console.log(sayHello);

