const menus = document.querySelectorAll('.title');
const openText = document.querySelector('.myText');
menus.forEach((el) => {
    el.addEventListener('click', () => {
        console.log(el.nextElementSibling);
        remover();
        el.nextElementSibling.classList.toggle('active');
    });
})
function remover() {
    menus.forEach((el) => {
        el.nextElementSibling.classList.remove('active');
    })
}