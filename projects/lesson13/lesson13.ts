let skills: (string | number)[] = ["Hỏi Dân IT", 25];
skills.push("coding");
skills.push(69);

//tuple: dataType/size/order
let skills2: [string, number] = ["Hỏi Dân IT", 25];

let skills3: [boolean, string, number?, number?];

skills3 = [true, "Eric", 1, 2];

console.log(skills3);
console.log(typeof skills3);
