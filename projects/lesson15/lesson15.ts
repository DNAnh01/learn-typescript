let address: any = "Da Nang"; // any everywhere
address = true;

console.log(">>> address = ", address);

/**
     * Trong TypeScript, kiểu dữ liệu "any" đại diện cho bất kỳ kiểu dữ liệu nào. Khi một biến được khai báo với kiểu "any", nó có thể chứa bất kỳ giá trị nào từ bất kỳ kiểu dữ liệu nào mà không cần kiểm tra kiểu.

    Kiểu "any" được sử dụng khi chúng ta không biết trước kiểu dữ liệu chính xác của một biến hoặc khi chúng ta muốn cho phép các kiểu dữ liệu khác nhau trong cùng một biến. Điều này có thể hữu ích trong một số trường hợp như khi làm việc với dữ liệu động hoặc khi chúng ta chưa xác định được kiểu dữ liệu cụ thể.

    Tuy nhiên, việc sử dụng kiểu "any" có thể làm mất đi tính an toàn kiểu dữ liệu của TypeScript. Khi một biến có kiểu "any" được sử dụng, TypeScript sẽ không kiểm tra kiểu dữ liệu của biến đó và không cung cấp các tính năng như gợi ý kiểu, kiểm tra lỗi kiểu và tự động hoàn thành mã.
 */
