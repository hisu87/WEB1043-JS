// Cach 1
var iPhone9 =  {
    name: 'iPhone 9',
    price: 1000,
}
const person = {
    fname: 'John',
    lname: 'Doe',
    age: 25,
    id: 5566,
    fullName: function() {
        return this.fname + ' ' + this.lname;
    }
}
alert(person.fullName());

function oke() {
    console.log('oke');
    document.getElementById('name').innerHTML = iPhone9.name;
    let price = document.getElementById('amount').value * iPhone9.price;
    console.log(price);
    document.getElementById('price').innerHTML = price;
}

// Cach 2
/*

function display(){
            console.log('oke');
            var pro = document.getElementById("pro");
            var qty = document.getElementById("qty");
            var name = pro.innerText;
            var price = pro.getAttribute("data-price");
            var quantity = qty.value;
            var amount = price * quantity;
            document.getElementById("name").innerText = name;
            document.getElementById("amount").innerText = amount;
        } 
*/