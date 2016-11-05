// var arr = ['Андрей', 'Николай', 'Антон', 'Алексей', 'Дмитрий']

//     var a = prompt("Введите имя ...");

// for (var i = 4; i < arr.length; i++);


// i = 1;


// if (a == arr[i]) {
//     alert( a + ' вы успешно вошли!' );
// } else{
//     alert('Ошибка');
// }

function name() {
var arr=[];
for (var i=0; i<5; i++) {
var name = prompt("Введите имя для заполнения массива");
arr.push(name);
}
return arr;
}
var result = name();
var name = prompt("Введите имя для входа");
console.log(result.indexOf(name))
if (result.indexOf(name) === -1) {
alert("Имя не найдено");
} else {
alert(name+', вы успешно вошли!')
}