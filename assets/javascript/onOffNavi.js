// on off menubar 
// đặt biến lấy ra giá trị của header 
var header = document.getElementById("header");
// đặt biến lấy ra giá trị của nút menu-mobile 
var mobile = document.getElementById("menu-mobile");

// đặt biến lấy được giá trị của chiều cao header bằng thuộc tính clientHeight
var navigationHeight = header.clientHeight;

// lấy sự kiện click bằng thuộc tính onclick với function
mobile.onclick = function() {
    // đặt biến cho nó bằng với chiều cao của header và so sánh nó với biến lấy dc giá trị chiều cao của 
    // header phía trên
    var isClose = header.clientHeight === navigationHeight;
    
    if(isClose) {
        // nếu biến này được so sánh bằng với chiều cao mặc định của header
        // thì chiều cao sẽ auto bao chọn các element con dc header chứa  
        header.style.height = "auto";
    }
    else {
        // còn nếu ko phải thì ko hiện ra 
        header.style.height = null;
    }
}

// auto hide menubar
// đặt biến lấy được tất cả các sự kiện của selector 
var menuItems = document.querySelectorAll(".js-navi-hide-menu")

// dùng for lặp và lấy các selector cụ thể 
for (var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    
    // sử dụng onclick để nhận diện user nhấn vào selector. Sau đó sử dụng function để thực hiện 
    // hide
    menuItem.onclick = function(event) {
        // chúng ta đặt điều kiện cho biến isParent bằng nextElementSibling(anh em ruột kế tiếp)
        // xét xem thằng sub-nav có phài là anh em với thằng a này hay ko chúng ta làm thêm 1 điều kiện so
        // sánh nữa là trong cái classist của thằng anh em ruột này thì có đúng tên là sub-nav hay ko cho chắc
        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains("sub-nav")
        // đặt câu điều kiện để lọc ra thằng a chứa more ko bị ẩn đi
        if (isParent){
            // nếu là isParent thỏa mãn đằng sau là thằng sub-nav thì ko bị ẩn 
            event.preventDefault();
            // event là parameter truyền vào để thực thi hàm preventDefault() (bỏ đi hết các giá trị default)
        }
        else {
            // còn nếu ko thì sẽ bị ẩn 
            header.style.height = null;
        }  
    }
}


