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
