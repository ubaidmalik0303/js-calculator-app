

function getNumber (num){
    var result = document.getElementById('result');
    result.value += num;
}

function clearResult(){
    var result = document.getElementById('result');
    result.value = "";
}

function getResult(){
    var result = document.getElementById('result');
    result.value = eval(result.value);
}

function backNumber(){
    var result = document.getElementById('result');
    var back = "" + result.value;
    back = back.split("").slice(0 , back.length - 1).join("");
    result.value = back;
}

function ON(){
    document.getElementById('btn-on').style.color = 'green';
    document.getElementById('btn-off').style.color = 'white';
    document.getElementById('btn-1').disabled = false;
    document.getElementById('btn-2').disabled = false;
    document.getElementById('btn-3').disabled = false;
    document.getElementById('btn-4').disabled = false;
    document.getElementById('btn-5').disabled = false;
    document.getElementById('btn-6').disabled = false;
    document.getElementById('btn-7').disabled = false;
    document.getElementById('btn-8').disabled = false;
    document.getElementById('btn-9').disabled = false;
    document.getElementById('btn-10').disabled = false;
    document.getElementById('btn-11').disabled = false;
    document.getElementById('btn-12').disabled = false;
    document.getElementById('btn-13').disabled = false;
    document.getElementById('btn-14').disabled = false;
    document.getElementById('btn-15').disabled = false;
    document.getElementById('btn-16').disabled = false;
    document.getElementById('btn-17').disabled = false;
    document.getElementById('btn-18').disabled = false;
    document.getElementById('btn-19').disabled = false;
    document.getElementById('result').disabled = false;
}

function OFF(){
    document.getElementById('btn-on').style.color = 'white';
    document.getElementById('btn-off').style.color = 'green';
    document.getElementById('btn-1').disabled = true;
    document.getElementById('btn-2').disabled = true;
    document.getElementById('btn-3').disabled = true;
    document.getElementById('btn-4').disabled = true;
    document.getElementById('btn-5').disabled = true;
    document.getElementById('btn-6').disabled = true;
    document.getElementById('btn-7').disabled = true;
    document.getElementById('btn-8').disabled = true;
    document.getElementById('btn-9').disabled = true;
    document.getElementById('btn-10').disabled = true;
    document.getElementById('btn-11').disabled = true;
    document.getElementById('btn-12').disabled = true;
    document.getElementById('btn-13').disabled = true;
    document.getElementById('btn-14').disabled = true;
    document.getElementById('btn-15').disabled = true;
    document.getElementById('btn-16').disabled = true;
    document.getElementById('btn-17').disabled = true;
    document.getElementById('btn-18').disabled = true;
    document.getElementById('btn-19').disabled = true;
    document.getElementById('result').disabled = true;
    var result = document.getElementById('result');
    result.value = "";
}

onload()