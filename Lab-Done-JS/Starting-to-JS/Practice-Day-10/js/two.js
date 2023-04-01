function them(button) {
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0]; btnXoa.innerText
        = "Xóa";
    btnXoa.setAttribute('onclick', 'xoa(this)');
    document.getElementById("cart").appendChild(row);
    tongtien();
}
function xoa(button) {
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row); 
    tongtien();
}
function tongtien() {
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("tr");
    var tong = 0;
    // Chức năng này tính giá của tất cả các ô trong bảng
    for (var i = 0; i < rows.length; i++) {
        var tong = 0;
        for (var i = 0; i < rows.length; i++) {
            var cells = rows[i].getElementsByTagName("td");
            var price = cells[2].innerText.substr(0);
            tong += 1 * price;
            console.log(cells);
            console.log(price);
            console.log(tong);
        }
    }
    document.getElementById("tong").innerText = tong.toLocaleString() + ",000" + " VND";
    // document.getElementById("tong").innerText = tong + " VND";
}
