function zadanie1() {
    alert('Вас приветствует учебный центр');
    let x=prompt('Введите имя:', 'Имя');
    alert('Добро пожаловать на курсы, '+ x);  
    if (confirm ('Хотите стать Web-дизайнером?')) {
        alert ("Учите стили CSS и JavaScript!");
    } else {
        alert ("Упускаете время!");}
   }
   function zadanie2() {
    var x1 = 10;
    var x2 = 5;
    document.write(x1 + x2 + ' ');
    var s1 = '10';
    var s2 = '5';
    document.write(s1 + s2 + ' ');
    var y1 = 22;
    document.write(y1 + s2 + ' ');
    var y2 = '22';
    document.write(y2 + x2 + ' ');
    alert("Результатом сложения строки и числа всегда будет ...");
   }
   function zadanie3() {
    var x = 111, y = 13;
    a = (35 * y - 25 * x) / 5 + 232;
    b = (8 * y / x + 5 * x / y - 43) * 7;
    document.write('a=' + a + '; ' + 'b=' + b + '; ');
    document.write(' oстаток от деления 1-го числа на 2-е = ' + a % b);
    alert('a=' + a + '; ' + 'b=' + b + ';' + ' oстаток от деления 1-го числа на 2-е = ' + a % b);
    }
   function zadanie4() {
    x=prompt('Введите число:', 'Число');
    if(x < 20 || x > 40 && x != 15 && x % 5 == 0) {
    document.write('Вы выбрали правильное значение!');
    } else {
    document.write('Не правильное значение');
    }
   }
   function zadanie5() {
    x=prompt('Введите 1-е число:', 'Число');
    y=prompt('Введите 2-е число:', 'Число');
    alert('Вы ввели числа: '+ x + ' и ' + y);
    if (x > y){
    document.write('Первое число больше второго');
    } else if (y > x) {
    document.write('Второе число больше первого');
    } else{  
    document.write('Числа равны');
    }
   }
   function zadanie6() {
    let x=prompt('Введите число от 1 до 7:');
    switch(x)
    {
    case '1': document.write('Понедельник');
    break;
    case '2': document.write('Вторник');
    break;
    case '3': document.write('Среда');
    break;
    case '4': document.write('Четверг');
    break;
    case '5': document.write('Пятница');
    break;
    case '6': document.write('Суббота');
    break;
    case '7': document.write('Воскресенье');
    break;
    }
   }
   function zadanie7() {
    let x=prompt('Введите число:');
    try{
    let a = 13 / x;
    alert(jgjg);
    }
    catch(error){
    alert('Произошла ошибка');
    }
   }