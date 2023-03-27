function them(button) {
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0]; btnXoa.innerText
        = "Xóa";
    btnXoa.setAttribute('onclick', 'xoa(this)');
    document.getElementById("cart").appendChild(row);
    tongtien();
}
function xoa(button) {
    button.parentElement.parentElement.remove();
    document.getElementById("cart").removeChild(button.parentElement.parentElement);
    tongtien();
}
function tongtien() {
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("tr");
    var tong = 0;
    // Chức năng này tính giá của tất cả các ô trong bảng
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var price = cells[2].innerText.substr(0, cells[2].innerText.length);
        console.log(price);
        tong += 1 * price;
        Number(tong)
    }
    document.getElementById("tong").innerText = tong + ".000" + " VND"; 
}
