function echo(arg) {
  return arg;
}

const result = echo(123);   // 这里的 result 变成了 any 类型，失去了我们原本想要的它的类型。

// 为了解决这个问题，就要用到泛型了 。
// 泛型可以看做一个占位符，等我们要使用的时候才动态的填入确定的类型。
// 下面这个函数就使用了泛型来确定了返回值的类型。
function echoGenerice<T>(arg: T): T {
  return arg;
}

const resultTwo = echoGenerice(123)

// 约束泛型的使用：当我们想约束一下传入的类型时就可以用约束泛型了。
// 写死类型约束泛型
function echoWithArray<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const array = echoWithArray(['jingjing', 'haohao']);

// 使用接口约束泛型
interface array {
  length: number;
}

function echoWithImplement<T extends array>(arg:T): T {
  return arg;
}

const str = echoWithImplement('jingjing');
const arr = echoWithImplement([5,2,0]);
const obj = echoWithImplement({length: 920});