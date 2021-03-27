// створити масив та вивести його в консоль:
//    - з 5 числових значень
let mass = [1 , 2 , 3 , 4 , 5];
for (let numbers of mass){
    console.log(numbers);
}
//    - з 5 стічкових значень
let mass1 = ['a' , 'b' , 'c' , 'd' , 'e'];
for (let str of mass1){
    console.log(str);
}
//    - з 5 значень стрічкового, числового та булевого типу
let mass2 = [1 , 'b' , 3 , true , false];
for (let mix of mass2){
    console.log(mix);
}
//
//  Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArray = [];

emptyArray[2] = 'aaaaa'
emptyArray[8] = true
emptyArray[6] = 'bbbb'
emptyArray[1] = 123456
console.log(emptyArray);

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
 for (let i = 0; i < 10; i++) {
    document.write('<div>Lorem ipsum dolo suscipit, vero sboriosam, possimus</div>');

}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Box ${i}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20){
    document.write('<h1>AA</h1>')
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let a = 0;
while (a < 20){
    document.write(`<h1>AAAA ${a}</h1>`);
    a++;
}

// + Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrayNum = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < arrayNum.length; i++) {
    console.log(arrayNum[i]);
}
// + Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrayStr = ['a','b','c','d','e','f','g','h','i','j'];
for (let i = 0; i < arrayStr.length;i++){
    console.log(arrayStr[i]);
}
// + Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrayMix = ['q','w','1',21,33,true,false,'true','5',123];
for (let i = 0; i < arrayMix.length;i++){
    console.log(arrayMix[i]);
}
// + Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrayMix2 = ['q','w','1',21,33,true,false,'true','5',123];
 for (let i = 0; i < arrayMix2.length;i++){
    if (typeof arrayMix2[i] === 'boolean'){
         console.log(arrayMix2[i]);
     }
 }
// + Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arrayMix3 = ['q', 'w', '1', 21, 33, true, false, 'true', '5', 123];
for (let i = 0; i < arrayMix3.length; i++) {
    if (typeof arrayMix3[i] === 'number') {
        console.log(arrayMix3[i]);
    }
}
// + Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arrayMix4 = ['q', 'w', '1', 21, 33, true, false, 'true', '5', 123];
for (let i = 0; i < arrayMix4.length; i++) {
    if (typeof arrayMix4[i] === 'string') {
        console.log(arrayMix4[i]);
    }
}
// + Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArray2 = [];
emptyArray2[0]= 1;
emptyArray2[1]= 2;
emptyArray2[2]= 'vvv';
emptyArray2[3]= 54;
emptyArray2[4]= true;
emptyArray2[5]= true;
emptyArray2[6]= 'qqqq';
emptyArray2[7]= 322;
emptyArray2[8]= 1123;
emptyArray2[9]= false;
for (let i = 0; i < 10; i++) {
    console.log(emptyArray2[i]);
}



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0;i<10;i++){
    console.log(i);
    document.write(i);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=0;i<100;i++){
    console.log(i);
    document.write(i);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i=0;i<100;i+=2){
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 2; i < 100;i+=2){
    console.log(i);
    document.write(i);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log(1);
for (let i=1;i<100;i+=2){
    console.log(i+2);
}





































