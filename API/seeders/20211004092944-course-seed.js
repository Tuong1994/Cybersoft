"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Courses",
      [
        {
          id: "DS01",
          tenKhoaHoc: "Phân tích UI/UX",
          biDanh: "UI/UX - Design",
          moTa: "UI UX là cách gọi tắt của User Interface (giao diện người dùng) và User Experience (trải nghiệm người dùng). Đây là 2 yếu tố rất quan trọng trong việc thiết kế 1 website. Developer phải coi mỗi sản phẩm như đứa con của mình và dành cho nó những điều tốt đẹp nhất. […]chăm chút từ lúc mang thai cho nó khỏe mạnh. Nó ra đời vẫn phải chăm sóc để nó nhìn sạch sẽ, cư xử với người khác lễ phép. Cũng giống như từ khâu code đã phải clean, làm ra sản phẩm phải có UI tốt, UX tốt, ít bug, ít crash.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "thietke",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "DS02",
          tenKhoaHoc: "Làm giao diện website với HTML/CSS",
          biDanh: "HTML/CSS - Design",
          moTa: "HTML, HyperText Markup Language, cung cấp cấu trúc nội dung và ý nghĩa bằng cách xác định nội dung đó, ví dụ như tiêu đề, đoạn văn hoặc hình ảnh. CSS, hay Cascading Style Sheets, là ngôn ngữ trình bày được dùng để tạo kiểu cho sự xuất hiện của nội dung sử dụng, ví dụ như phông chữ hoặc màu sắc. Hai ngôn ngữ HTML và CSS độc lập với nhau và vẫn giữ nguyên như vậy. CSS không nên được viết bên trong một tài liệu HTML và ngược lại. Theo quy định, HTML sẽ luôn đại diện cho nội dung và CSS sẽ luôn thể hiện sự xuất hiện của nội dung đó.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "thietke",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "DS03",
          tenKhoaHoc: "Thiết kế web với Photoshop",
          biDanh: "Photoshop - Design",
          moTa: "Adobe Photoshop (thường được gọi là Photoshop) là một phần mềm chỉnh sửa đồ họa được phát triển và phát hành bởi hãng Adobe Systems ra đời vào năm 1988 trên hệ máy Macintosh. Photoshop được đánh giá là phần mềm dẫn đầu thị trường về sửa ảnh bitmap và được coi là chuẩn cho các ngành liên quan tới chỉnh sửa ảnh. Từ phiên bản Photoshop 7.0 ra đời năm 2002, Photoshop đã làm lên một cuộc cách mạng về ảnh bitmap. Phiên bản mới nhất hiện nay là Adobe Photoshop CC. Ngoài khả năng chính là chỉnh sửa ảnh cho các ấn phẩm, Photoshop còn được sử dụng trong các hoạt động như thiết kế trang web, vẽ các loại tranh (matte painting và nhiều thể loại khác), vẽ texture cho các chương trình 3D... gần như là mọi hoạt động liên quan đến ảnh bitmap.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "thietke",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Front End
        {
          id: "FE01",
          tenKhoaHoc: "Phân tích UI/UX",
          biDanh: "UI/UX - FrontEnd",
          moTa: "UI UX là cách gọi tắt của User Interface (giao diện người dùng) và User Experience (trải nghiệm người dùng). Đây là 2 yếu tố rất quan trọng trong việc thiết kế 1 website. Developer phải coi mỗi sản phẩm như đứa con của mình và dành cho nó những điều tốt đẹp nhất. […]chăm chút từ lúc mang thai cho nó khỏe mạnh. Nó ra đời vẫn phải chăm sóc để nó nhìn sạch sẽ, cư xử với người khác lễ phép. Cũng giống như từ khâu code đã phải clean, làm ra sản phẩm phải có UI tốt, UX tốt, ít bug, ít crash.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "FE02",
          tenKhoaHoc: "Làm giao diện website với HTML/CSS",
          biDanh: "HTML/CSS - FrontEnd",
          moTa: "HTML, HyperText Markup Language, cung cấp cấu trúc nội dung và ý nghĩa bằng cách xác định nội dung đó, ví dụ như tiêu đề, đoạn văn hoặc hình ảnh. CSS, hay Cascading Style Sheets, là ngôn ngữ trình bày được dùng để tạo kiểu cho sự xuất hiện của nội dung sử dụng, ví dụ như phông chữ hoặc màu sắc. Hai ngôn ngữ HTML và CSS độc lập với nhau và vẫn giữ nguyên như vậy. CSS không nên được viết bên trong một tài liệu HTML và ngược lại. Theo quy định, HTML sẽ luôn đại diện cho nội dung và CSS sẽ luôn thể hiện sự xuất hiện của nội dung đó.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "FE03",
          tenKhoaHoc: "Lập trinh Javasript",
          biDanh: "Javascipt - FrontEnd",
          moTa: "JavaScript, theo phiên bản hiện hành, là một ngôn ngữ lập trình thông dịch được phát triển từ các ý niệm nguyên mẫu. Ngôn ngữ này được dùng rộng rãi cho các trang web (phía người dùng) cũng như phía máy chủ (với Nodejs). Nó vốn được phát triển bởi Brendan Eich tại Hãng truyền thông Netscape với cái tên đầu tiên Mocha, rồi sau đó đổi tên thành LiveScript, và cuối cùng thành JavaScript. Giống Java, JavaScript có cú pháp tương tự C, nhưng nó gần với Self hơn Java. .js là phần mở rộng thường được dùng cho tập tin mã nguồn JavaScript. Phiên bản mới nhất của JavaScript là ECMAScript 7[3]. ECMAScript là phiên bản chuẩn hóa của JavaScript. Trình duyệt Mozilla phiên bản 1.8 beta 1 có hỗ trợ không đầy đủ cho E4X - phần mở rộng cho JavaScript hỗ trợ làm việc với XML, được chuẩn hóa trong ECMA-357.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "FE04",
          tenKhoaHoc: "Lập trình web với ReactJs",
          biDanh: "ReactJs - FrontEnd",
          moTa: "React là thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng (UI). Nó cho tốc độ phản hồi tuyệt vời khi user nhập liệu bằng cách sử dụng phương pháp mới để render trang web.Components của công cụ này được phát triển bởi Facebook. Nó được ra mắt như một công cụ JavaScript mã nguồn mở vào năm 2013. Hiện tại, nó đã đi trước các đối thủ chính như Angular và Bootstrap, hai thư viện JavaScript bán chạy nhất thời bấy giờ",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "FE05",
          tenKhoaHoc: "Lập trình web với Angular",
          biDanh: "Angular - FrontEnd",
          moTa: "Angular được xem là một open source (mã nguồn mở) hay frameworks miễn phí chuyên dụng cho công việc thiết kế web. Angular được phát triển từ những năm 2009 và được duy trì bởi Google. Frameworks này được xem là frameworks front end mạnh mẽ nhất chuyên dụng bởi các lập trình viên cắt HTML cao cấp. Angular được ứng dụng rộng rãi với mục đích xây dựng project Single Page Application (SPA). Hiện tại, Version stable của Angular là Angular 9 (released on February 7, 2020) với TypeScript 3.6 và 3.7.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "FE06",
          tenKhoaHoc: "Lập trình web với VueJs",
          biDanh: "VueJs - BackEnd",
          moTa: "Vuejs được gọi tắt là Vue (được phát âm là /vjuː/, nó giống như từ view trong tiếng Anh). Vue.js là một framework rất linh động được dùng phổ biến để xây dựng nên các giao diện người dùng. Hoàn toàn khác với các framework nguyên khối thì Vue thường sở hữu thiết kế từ đầu theo những hướng cho phép cũng như khuyến khích làm việc để phát triển dễ dàng hơn các ứng dụng theo từng bước một. Một  khi đã phát triển lớp giao diện (view layer) thì người dùng chỉ cần sử dụng loại thư viện lõi của Vue. Ngoài ra, nếu như bạn kết hợp với các kỹ thuật thiên hướng hiện đại thì Vue cũng có thể đáp ứng được dễ dàng mọi nhu cầu xây dựng ứng dụng của một trang với độ phức tạp cao hơn.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "frontEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // BackEnd
        {
          id: "BE01",
          tenKhoaHoc: "PHP",
          biDanh: "PHP - BackEnd",
          moTa: "PHP: Hypertext Preprocessor, thường được viết tắt thành PHP là một ngôn ngữ lập trình kịch bản hay một loại mã lệnh chủ yếu được dùng để phát triển các ứng dụng viết cho máy chủ, mã nguồn mở, dùng cho mục đích tổng quát. Nó rất thích hợp với web và có thể dễ dàng nhúng vào trang HTML. Do được tối ưu hóa cho các ứng dụng web, tốc độ nhanh, nhỏ gọn, cú pháp giống C và Java, dễ học và thời gian xây dựng sản phẩm tương đối ngắn hơn so với các ngôn ngữ khác nên PHP đã nhanh chóng trở thành một ngôn ngữ lập trình web phổ biến nhất thế giới.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "BE02",
          tenKhoaHoc: "MySQL - Database",
          biDanh: "MySQL - BackEnd",
          moTa: "MySQL là hệ quản trị cơ sở dữ liệu tự do nguồn mở phổ biến nhất thế giới và được các nhà phát triển rất ưa chuộng trong quá trình phát triển ứng dụng. Vì MySQL là hệ quản trị cơ sở dữ liệu tốc độ cao, ổn định và dễ sử dụng, có tính khả chuyển, hoạt động trên nhiều hệ điều hành cung cấp một hệ thống lớn các hàm tiện ích rất mạnh. Với tốc độ và tính bảo mật cao, MySQL rất thích hợp cho các ứng dụng có truy cập CSDL trên internet. Người dùng có thể tải về MySQL miễn phí từ trang chủ. MySQL có nhiều phiên bản cho các hệ điều hành khác nhau: phiên bản Win32 cho các hệ điều hành dòng Windows, Linux, Mac OS X, Unix, FreeBSD, NetBSD, Novell NetWare, SGI Irix, Solaris, SunOS,..",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "BE03",
          tenKhoaHoc: "NodeJs",
          biDanh: "NodeJs - BackEnd",
          moTa: "Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web.[1] Chương trình được viết bằng JavaScript, sử dụng kỹ thuật điều khiển theo sự kiện, nhập/xuất không đồng bộ để tối thiểu tổng chi phí và tối đa khả năng mở rộng.[2] Node.js bao gồm có V8 JavaScript engine của Google, libUV, và vài thư viện khác.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "BE04",
          tenKhoaHoc: "Quản trị hệ cơ sở dữ liệu",
          biDanh: "DBMS - BackEnd",
          moTa: "Hệ quản trị cơ sở dữ liệu (DBMS) là một gói phần mềm được thiết kế để xác định, thao tác, truy xuất và quản lý dữ liệu trong cơ sở dữ liệu. DBMS thường thao tác với dữ liệu của chính nó. Định dạng dữ liệu, tên field, cấu trúc bản record và cấu trúc file",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "BE05",
          tenKhoaHoc: "Lập trình dữ liệu SQL",
          biDanh: "sql - BackEnd",
          moTa: "SQL là gì? SQL là viết tắt của Structured Query Language, nghĩa là ngôn ngữ truy vấn dữ liệu. Có thể coi ngôn ngữ SQL là ngôn ngữ chung mà bất cứ hệ thống cơ sở dữ liệu quan hệ (RDBMS) nào cũng phải đáp ứng, điển hình như: Oracle Database, SQL Server, MySQL. Bất kì công ty nào lớn cũng cần xây dựng một hệ thống để lưu trữ cơ sở dữ liệu. Mọi thứ trong cơ sở dữ liệu này sẽ được quy ra thành nhiều bảng, có mối quan hệ với nhau. SQL giúp quản lý hiệu quả và truy vấn thông tin nhanh hơn, giúp bảo trì thông tin dễ dàng hơn.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "BE06",
          tenKhoaHoc: "Swift OS",
          biDanh: "Swift_OS - BackEnd",
          moTa: "Swift là một ngôn ngữ lập trình hướng đối tượng dành cho việc phát triển iOS và macOS, watchOS, tvOS, Linux, và z/OS. được giới thiệu bởi Apple tại hội nghị WWDC 2014. Swift được mong đợi sẽ tồn tại song song cùng Objective-C, ngôn ngữ lập trình hiện tại dành cho các hệ điều hành của Apple",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "BE07",
          tenKhoaHoc: "Lập trình C++",
          biDanh: "C++ - BackEnd",
          moTa: "C++ (C Plus Plus, IPA: /siː pləs pləs/) là một loại ngôn ngữ lập trình bậc trung (middle-level). Đây là ngôn ngữ lập trình đa năng được tạo ra bởi Bjarne Stroustrup như một phần mở rộng của ngôn ngữ lập trình C, hoặc 'C với các lớp Class', Ngôn ngữ đã được mở rộng đáng kể theo thời gian và C ++ hiện đại có các tính năng: lập trình tổng quát, lập trình hướng đối tượng, lập trình thủ tục, ngôn ngữ đa mẫu hình tự do có kiểu tĩnh, dữ liệu trừu tượng, và lập trình đa hình, ngoài ra còn có thêm các tính năng, công cụ để thao tác với bộ nhớ cấp thấp. Từ thập niên 1990, C++ đã trở thành một trong những ngôn ngữ thương mại ưa thích và phổ biến của lập trình viên.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "BE08",
          tenKhoaHoc: "Lập trình Ruby",
          biDanh: "Ruby - BackEnd",
          moTa: "]Ruby là một ngôn ngữ lập trình hướng đối tượng, có khả năng phản ứng. Theo tác giả, Ruby chịu ảnh hưởng bởi Perl, Smalltalk, Eiffel, Ada và Lisp. Ruby là ngôn ngữ thông dịch và hướng đối tượng.Ruby cung cấp nhiều mẫu hình lập trình, bao gồm lập trình hàm, hướng đối tượng, mệnh lệnh, phản xạ. Nó sử dụng hệ thống kiểu biến động và tự động quản lý bộ nhớ tự động.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "BE09",
          tenKhoaHoc: "Lập trình Next-JS",
          biDanh: "NextJs - BackEnd",
          moTa: "Trở lại giữa những năm 2000, khi web còn non trẻ và đang phát triển, các nhà phát triển mới bắt đầu chuyển từ các trang HTML tĩnh sang các trang web động. Đó là thời hoàng kim của ngôn ngữ lập trình hướng đối tượng như PHP (Server render HTML). Sau đó là thời đại JavaScript. Mọi người bắt đầu nhận ra rằng ngôn ngữ này được hỗ trợ cho web và có thể được sử dụng rất nhiều. Bạn có thể submit form động, requests HTTP, tạo ra các hiệu ứng cuộn đẹp mắt và thậm chí tạo trang web nhanh chóng. Sự gia tăng của JavaScript và các thư viện như jQuery cho phép các nhà phát triển web tạo ra các giao diện đẹp có thể tùy chỉnh hoàn toàn bằng JavaScript. Chẳng bao lâu, mọi nhà phát triển web bắt đầu đẩy ngày càng nhiều JavaScript xuống cho client web. Chắc chắn, công nghệ phát triển, điện thoại di động và PC trở nên tốt hơn với nhiều RAM và lõi hơn, nhưng JavaScript bắt đầu phát triển nhanh hơn.  Nhiều chức năng hơn, nhiều tính năng hơn và nhiều frameworks hơn có nghĩa là trải nghiệm người dùng tốt hơn và khả năng tạo cảm giác giống như ứng dụng trên web. Nhưng điều này cũng có nghĩa là ngày càng đẩy nhiều JavaScript xuống thiết bị di động, và các thiết bị đó không thể theo kịp các giới hạn JavaScript đang phát triển.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "BE10",
          tenKhoaHoc: "Lập trình Java",
          biDanh: "Java - BackEnd",
          moTa: "Java là một ngôn ngữ lập trình hướng đối tượng, dựa trên lớp được thiết kế để có càng ít phụ thuộc thực thi càng tốt. Nó là ngôn ngữ lập trình có mục đích chung cho phép các nhà phát triển ứng dụng viết một lần, chạy ở mọi nơi (WORA), nghĩa là mã Java đã biên dịch có thể chạy trên tất cả các nền tảng hỗ trợ Java mà không cần biên dịch lại.[10] Các ứng dụng Java thường được biên dịch thành bytecode có thể chạy trên bất kỳ máy ảo Java (JVM) nào bất kể kiến trúc máy tính bên dưới. Cú pháp của Java tương tự như C và C++, nhưng có ít cơ sở cấp thấp hơn các ngôn ngữ trên. Java runtime cung cấp các khả năng động (chẳng hạn như phản ánh và sửa đổi mã thời gian chạy) thường không có sẵn trong các ngôn ngữ biên dịch truyền thống. Tính đến năm 2019 Java là một trong những ngôn ngữ lập trình phổ biến nhất được sử dụng theo GitHub, đặc biệt cho các ứng dụng web máy khách-máy chủ, với 9 triệu nhà phát triển đã được báo cáo.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "backEnd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Fullstack
        {
          id: "FE",
          tenKhoaHoc: "Lập trình Front End",
          biDanh: "FrontEnd",
          moTa: "Front End của một trang web là phần tương tác với người dùng. Tất cả mọi thứ bạn nhìn thấy khi điều hướng trên Internet, từ các font chữ, màu sắc cho tới các menu xổ xuống và các thanh trượt, là một sự kết hợp của HTML, CSS, và JavaScript được điều khiển bởi trình duyệt máy tính của bạn. Các lập trình viên front-end chịu trách nhiệm cho giao diện của một trang web và kiến trúc những trải nghiệm của người dùng. Để thực hiện được những mục tiêu đó, các lập trình viên front-end phải tinh thông 3 ngôn ngữ chính: HTML, CSS, và ngôn ngữ lập trình JavaScript.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "fullStack",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "BE",
          tenKhoaHoc: "Lập trình Back End",
          biDanh: "BackEnd",
          moTa: "Back End của một trang web bao gồm một máy chủ, một ứng dụng, và một cơ sở dữ liệu. Một lập trình viên back-end xây dựng và duy trì công nghệ mà sức mạnh của những thành phần đó, cho phép phần giao diện người dùng của trang web có thể tồn tại được. Để khiến cho máy chủ, ứng dụng, và cơ sở dữ liệu có thể giao tiếp được với nhau, các lập trình viên back-end sử dụng các ngôn ngữ server-side như PHP, Ruby, Python, Java, và .Net để xây dựng một ứng dụng, và các công cụ như MySQL, Oracle, và SQL Server để tìm kiếm, lưu trữ, hoặc thay đổi dữ liệu và phục vụ trở lại tới người dùng trong phần front-end. Các công việc tuyển dụng lập trình viên back-end cũng thường yêu cầu kinh nghiệm về các framework PHP như Zend, Symfony, và CakePHP; có kinh nghiệm với các phần mềm quản lý phiên bản như SVN, CVS, hoặc Git; và kinh nghiệm với Linux trong việc phát triển và triển khai hệ thống.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "fullStack",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Mobile
        {
          id: "andriod",
          tenKhoaHoc: "Lập trình Andriod",
          biDanh: "Andriod - Mobile",
          moTa: "Android là một hệ điều hành dựa trên nền tảng Linux được thiết kế dành cho các thiết bị di động có màn hình cảm ứng như điện thoại thông minh và máy tính bảng. Ban đầu, Android được phát triển bởi Android, Inc. với sự hỗ trợ tài chính từ Google và sau này được chính Google mua lại vào năm 2005. Android ra mắt vào năm 2007 cùng với tuyên bố thành lập Liên minh thiết bị cầm tay mở: một hiệp hội gồm các công ty phần cứng, phần mềm, và viễn thông với mục tiêu đẩy mạnh các tiêu chuẩn mở cho các thiết bị di động. Chiếc điện thoại đầu tiên chạy Android được bán vào năm 2008.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "diDong",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "ios",
          tenKhoaHoc: "Lập trình IOS",
          biDanh: "IOS - Mobile",
          moTa: "iOS (trước đây là iPhone OS) là hệ điều hành trên các thiết bị di động của Apple. Đây là hệ điều hành chạy trên các sản phẩm iPhone, iPad, và iPod Touch và là hệ điều hành phổ biến thứ 2 trên toàn cầu, sau Android của Google. Ban đầu hệ điều hành này chỉ được phát triển để chạy trên iPhone (gọi là iPhone OS), nhưng sau đó được mở rộng để chạy trên các thiết bị khác của Apple như iPod Touch (tháng 9 năm 2007) và máy tính bảng iPad (tháng 1 năm 2010). Tính đến tháng 1 năm 2017, App Store trên iOS chứa khoảng 2.2 triệu ứng dụng, 1 triệu trong số đó là ứng dụng chỉ dành cho iPad và được tải về tổng cộng khoảng 130 tỷ lần. Trong quý 4 năm 2010, có khoảng 26% điện thoại thông minh chạy hệ điều hành iOS, xếp sau về thị phần so với Android của Google và Symbian của Nokia.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "diDong",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // Tư duy lập trình
        {
          id: "oops",
          tenKhoaHoc: "Lập trình hướng đối tượng",
          biDanh: "OOPs - Tư Duy",
          moTa: "Lập trình hướng đối tượng (tiếng Anh: Object-oriented programming, viết tắt: OOP) là một mẫu hình lập trình dựa trên khái niệm 'công nghệ đối tượng', mà trong đó, đối tượng chứa đựng các dữ liệu, trên các trường, thường được gọi là các thuộc tính; và mã nguồn, được tổ chức thành các phương thức. Phương thức giúp cho đối tượng có thể truy xuất và hiệu chỉnh các trường dữ liệu của đối tượng khác, mà đối tượng hiện tại có tương tác (đối tượng được hỗ trợ các phương thức 'this' hoặc 'self'). Trong lập trình hướng đối tượng, chương trình máy tính được thiết kế bằng cách tách nó ra khỏi phạm vi các đối tượng tương tác với nhau. Ngôn ngữ lập trình hướng đối tượng khá đa dạng, phần lớn là các ngôn ngữ lập trình theo lớp, nghĩa là các đối tượng trong các ngôn ngữ này được xem như thực thể của một lớp, được dùng để định nghĩa một kiểu dữ liệu.",
          luotXem: 200,
          danhGia: 0,          
          hinhAnh: "",
          nguoiTao: null,
          soLuongHocVien: null,
          categoryId: "tuDuy",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Courses', null, {});
  },
};
