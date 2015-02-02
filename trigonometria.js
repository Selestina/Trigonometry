//перевод в градусы, минуты, секунды и вывод
function answer(x,k) {
	g=x-(x%1);
    m1=(x%1)*60;
    s1=(m1%1)*60;
    s=Math.abs(s1-(s1%1));
    m=Math.abs(m1-(m1%1));
 document.getElementById("output").innerHTML+=g+"°"+m+"`"+s+"``+"+k+"k(k∈Ꮓ)<br>";
}
//функция вычисления синуса
function sin() {
    if ((a>=-1) && (a<=1)) {
        if (a==1) {
            answer((90-b)/c,k1);    
		}
        else if (a==-1) {
            answer((270-b)/c,k1);
		}
        else if (a==0) {
            answer((0-b)/c,k2);
            
		}
        else {
            answer((57.3*Math.asin(a)-b)/c,k1);
            answer(((180-57.3*Math.asin(a))-b)/c,k1);
        }
	}
	else {
		document.getElementById("output").innerHTML="нет корней";
	}
}
//функция вычисления косинуса
function cos() {
    if ((a>=-1) && (a<=1)) {
        if (a==1) {
            answer((0-b)/c,k1);
			}
        else if (a==-1) {
            answer((180-b)/c,k1);
            }
        else if (a==0) {                
            answer((90-b)/c,k2);
            }
        else {               
            answer((57.3*Math.acos(a)-b)/c,k1);
            answer((-57.3*Math.acos(a)-b)/c,k1);
		}
    }
	 else {
        document.getElementById("output").innerHTML="нет корней";
    }
}
//функция вычисления тангенса
function tg() {
    answer((57.3*Math.atan(a)-b)/c,k2);
}
////функция вычисления котангенса
function ctg() {
    answer((57.3*((Math.PI/2)-Math.atan(a))-b)/c,k2);
}
function Start() {
	document.getElementById("output").innerHTML="";
	input = document.getElementById("input").value;
	fun_trig=/(.*)\(/.exec(input)[1];
	a=eval(/=(.*)/.exec(input)[1]);
	b=eval(/x(.*)\)/.exec(input)[1]);
   c=eval(/\((.*)x/.exec(input)[1]);
	if (isNaN(b)) b=0;
  if (isNaN(c)) c=1;
	k1=360/c;
    k2=180/c;
    if (fun_trig=='sin') { //считает синус
		sin();
	}
	if (fun_trig=='cos') { //считает косинус
		cos();
	}			
	if (fun_trig=='tg') { //считает тангенс
		tg(); 
	}
	if (fun_trig=='ctg') { //считает котангенс
		ctg();
	}
}