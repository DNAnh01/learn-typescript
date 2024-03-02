### Typescript basic (Youtube Channel: Hỏi Dân IT)

<details>
  <summary>Tài liệu tham khảo</summary>
  <ul>
    <li><a href="https://www.youtube.com/playlist?list=PLncHg6Kn2JT5emvXmG6kgeGkrQjRqxsb4">Full playlist here</a></li>
    <li><a href="https://drive.google.com/file/d/1fSByxnd8dHwaCM48zmh80iSRObVx2xin/view">Document</a></li>
    <li><a href="https://www.youtube.com/watch?v=E6k6R4PnLV0">How to install NVM on Windows 11</a></li>
  </ul>
</details>

#### 4 Why TypeScript

TS với hệ thống

Types => hạn chế bugs khi khối lượng codebase lớn (các project lớn, nhiều members)

##### 4.1. Dynamic types với javascript

- Javascript là ngôn ngữ với 'type' động, có nghĩa là chúng ta có thể thay đổi "datatype" - kiểu dữ liệu
- Ví dụ:

```Typescript
let name = 'abc'; typeof === string
name = 35; typeof === number
name = false; typeof === boolean
```

- Dynamic types (type động) mang tới sự freedom, tuy nhiên, tự do quá thì...

##### 4.2. Vấn đề với Dynamic types

- Cho ra sai kết quả (nếu truyền vào sai type) => cần code bổ sung validate => typescript sinh ra để khắc phục nhược điểm trên.

#### 5 TypeScript Types

##### 5.1. Type là gì ?

Type gồm 2 loại:
keyword 'type' và data-types (kiểu dữ liệu)

Ở đây, chúng ta sẽ đề cập tới 'data-types: kiểu dữ liệu
Việc định nghĩa kiểu dữ liệu (data-types), sẽ nói cho chúng ta biết,
biến số (variable) có những thuộc tính và functions nào

Ví dụ:

```Typescript
const name = "Hello";
```

Khi nhìn vào value 'Hello', chúng ta sẽ nghĩ nó là string. (data-type === String)

Một vài thuộc tính và function của string:

```Typescript
console.log('Hello'.length); //5 => property: length (có thuộc tính length)
console.log('Hello'.toUpperCase()); // HELLO => có functions
```

=> dựa vào type (data-types), trình compiler sẽ biết được 1 tham số (variable/value)
sẽ có những thuộc tính (property) và phương thức (functions) nào.

##### 5.2. Các loại data-types với Typescript

Tương tự như javascript, TS datatype bao gồm:

- Dữ liệu nguyên thủy
- Dữ liệu tham chiếu

- Primitive data- types:
  String, number, boolean, null, undefined, symbol, bigint

- References dataTypes: Objects, Array, Functions..
