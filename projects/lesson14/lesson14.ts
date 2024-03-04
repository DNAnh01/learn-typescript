enum API_STATUS {
  PENDING,
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
}

let a1 = API_STATUS.PENDING;
let a2 = API_STATUS.FULFILLED;

console.log(">>> a1 = ", a1, " a2 = ", a2);

enum Color {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
}

let c1 = Color.RED;
let c2 = Color.GREEN;

console.log(">>> c1 = ", c1, " c2 = ", c2);
console.log(">>> c1 = ", Color[c1], " c2 = ", Color[c2]);
