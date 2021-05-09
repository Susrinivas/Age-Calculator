let div1 = document.createElement('div');
div1.setAttribute('id','divid')

let div2 = document.createElement('input');
div2.type='date';
div2.setAttribute('id','id1');



let button = document.createElement('button');
button.tye='button';
button.innerText = "submit";
button.setAttribute('onclick','display()');


let  p = document.createElement('p');
p.setAttribute('id','p1');
div1.append(div2,button,p);
document.body.append(div1);

function display(){
    let input = document.getElementById('id1').value;
    if(Date.parse(input)){
        let datele = new Date(input);
        let currentdate = new Date();
        let millisecdiff = parseInt(currentdate.getTime())-parseInt(datele.getTime()) 
        let seconddiff = mathfloorval(millisecdiff,1000);
        let minutediff = mathfloorval(seconddiff,60);
        let hourdiff = mathfloorval(minutediff,60);
        let daydiff = mathfloorval(hourdiff,24);
        let monthdiff = getmonthdiff(currentdate,datele);
        let yeardiff = getyeardiff(currentdate,datele)
        let data = document.getElementById('p1');
        data.innerHTML = `Given input date ${input} <br>
                          current Date ${currentdate} <br>
                milli second difference ${millisecdiff} <br>
                second difference ${seconddiff} <br>
                minute difference ${minutediff} <br>
                hour difference ${hourdiff} <br>
                Day difference ${daydiff} <br>
                month difference ${monthdiff} <br>
                Exact Difference in years ${monthdiff/12} <br>
                year difference ${yeardiff}`
        
    }
}

function mathfloorval(value1,value2){
    return Math.floor(value1/value2);
}

function getyeardiff(value1,value2){
    let res=value1.getFullYear()-value2.getFullYear();
    return res;
}

function getmonthdiff(value1,value2){
    let year = getyeardiff(value1,value2);
    let month = year*12 + (value1.getMonth()-value2.getMonth())
    return month;
}
