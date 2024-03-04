const sum = (a: number, b: number): number => {
  return a + b;
};

const handleLogs = (message: string): void => {
  console.log(">>> message: ", message);
};

const getMessages = (message: string): string => {
  return message;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};
