let mang1 = new Array(4);
let mang2 = new Array(4);
for (let i = 0; i < 4; i++) {
    mang1[i] = prompt("Nhập giá trị cho phần tử " + (i + 1) + " của mảng 1:");
    mang2[i] = prompt("Nhập giá trị cho phần tử " + (i + 1) + " của mảng 2:");
}
console.log(`Mảng ${mang1[0]} + ${mang2[0]} Có các phần tử: ${mang1[0] + mang2[0]}`);
console.log(`Mảng ${mang1[1]} + ${mang2[1]} Có các phần tử: ${mang1[1] + mang2[1]}`);
console.log(`Mảng ${mang1[2]} + ${mang2[2]} Có các phần tử: ${mang1[2] + mang2[2]}`);
console.log(`Mảng ${mang1[3]} + ${mang2[3]} Có các phần tử: ${mang1[3] + mang2[3]}`);