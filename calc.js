function writeNumber(elementId){
  var outputValueTo = document.getElementById('field1');

  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error'){
    outputValueTo.value = elementId.textContent;
  }else{
    outputValueTo.value += elementId.textContent;
  }
}

function cleartxt(){
  document.getElementById('field1').value = '0';
  document.getElementById('dec').disabled = false;
}

function setOperator(elementId){
  var outputValueTo = document.getElementById('field1');

  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error'){
    outputValueTo.value = '0';
  }else{
    outputValueTo.value += elementId.textContent;
    document.getElementById('dec').disabled = false;
  }
}

function setDecimal(elementId, status){
  var outputValueTo = document.getElementById('field1');
  outputValueTo.value += elementId.textContent;
  document.getElementById('dec').disabled = status;
}

function calculate(){
  try{
    var field1txt = document.getElementById('field1');
    if (field1txt.value != ''){
      var calculateResult = eval(field1txt.value);
      field1txt.value = calculateResult;
    }
  }catch(err){
    field1txt.value = 'Syntax error';
  }
}

function removeLastNumber(){
  var field1txt = document.getElementById('field1');
  if (field1txt.value.lenght == 1 || field1txt.value == '0' || field1txt.value == 'Syntax error'){
    field1txt.value == '0';
    document.getElementById('dec').disabled = false;
  }else{
    field1txt.value = field1txt.value.substring(0, field1txt.value.lenght - 1);
  }
}

////////////////////////////////

function calcular(){
  var formulario = document.getElementById("formulario");

  var kilos = +formulario.kilos.value;
  var metros = +formulario.metros.value;
  var centimetros = +formulario.centimetros.value;

  var altura = (metros * 100 + centimetros) / 100;

  var imc = kilos / (altura * altura);

  formulario.imc.value = imc.toFixed(2);

  if(imc < 29){
    alert ('Você está abaixo do peso!');
  }else if (imc > 20 && imc <= 25){
    alert ("Pesoa ideal");
  }else if (imc >25 && imc <= 30){
    alert ("Sobrepeso");
  }else if (imc >30 && imc <= 35){
    alert ("Obesidade Moderada");
  }else if (imc >35 && imc <= 40){
    alert ("Obesidade Severa.");
  }else if (imc >40 && imc <= 50){
    alert ("Obesidade Morbida");
  }else{
    alert ('Gordo');
  }
}