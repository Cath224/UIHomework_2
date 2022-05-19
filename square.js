
function solution(a, b, c) {
    var D , x1 , x2 ;
    resultEquation = {};
	if (a == 0) {
        resultEquation.answer =  "Коэффициент а не может равняться 0 \n\nРешений нет";
    }else{

        D = Math.pow(b,2) - 4*a*c; 
        resultEquation.d =" D = " + D;

        if (D > 0) {
		x1 = (-b+Math.sqrt(D)) / (a*2);
        resultEquation.x1 = x1;
		x2 =(-b-Math.sqrt(D)) / (a*2);
        resultEquation.x2 = x2;
		resultEquation.answer = "Ваши коэффициенты:\na = "+ a +"\nb = " + b + "\nc = " + c + "\n\nДискриминант = " + D +"\n\nКорни уравнения: x1=" + x1 + " , x2=" + x2 ;
	} else if (D == 0){
		x = -b / (2 * a);
		resultEquation.answer = "Ваши коэффициенты:\na = "+ a +"\nb = " + b + "\nc = " + c + "\n\nДискриминант = " + D +"\n\nКорни уравнения: x=" + x ;
	} else if (D < 0){
        resultEquation.answer = "Ваши коэффициенты:\na = "+ a +"\nb = " + b + "\nc = " + c + "\n\nДискриминант = " + D +"\n\nК сожалению, корней нет. Дискриминант не может быть меньше 0";
    }
}
return resultEquation;
}


function answerEquation(result){
    var d,x1,x2 ; 
    var table = document.getElementById('quadraticEquation');
    var row = table.insertRow();

    answer = row.insertCell();
    D = row.insertCell();
    x1 = row.insertCell();
    x2 = row.insertCell();

    answer.appendChild(document.createTextNode(resultEquation.answer));
    D.appendChild(document.createTextNode(resultEquation.d));
    x1.appendChild(document.createTextNode(resultEquation.x1));
    x2.appendChild(document.createTextNode(resultEquation.x2));

    answer.addEventListener("click", c =>{answer.remove()});
    D.addEventListener("click", c =>{d.remove();});
    x1.addEventListener("click", c =>{x1.remove();});
    x2.addEventListener("click", c =>{x2.remove();});
}

function validate(){
    var a,b,c ;

    a = coefficients.a.value;
    b = coefficients.b.value;
    c = coefficients.c.value;



    if (!isNaN(a) || !isNaN(b) || !isNaN(c)){
        var result =  solution(a,b,c);
        console.log(result);
        answerEquation(result);
    } else {
         console.log("Должно быть числовое значение");
    }
}
