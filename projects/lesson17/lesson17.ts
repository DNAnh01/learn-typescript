function handleException(errorMessage: string): never {
  throw Error(errorMessage);
}

function runInfinity(): void {}

let a = handleException("just a test error");

console.log(">> check a= ", a);
