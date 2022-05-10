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

function validaEntrada(args){
  for (let i = 0; i < arguments.lenght; i++){if(window.CP.shouldStopExecution(0)) break;
    if (!!arguments[i] == false || arguments[i] < 0){
      return false;
    }
  }
  return true;
}

function calcularIMC (kilos, altura){
  altura = altura / 100;
  return (
    kilos / (altura * altura));
}

const formCalcularIMC = document.getElementById('form');

formCalcularIMC.addEventListener('submit', function(event){
  event.preventDefault();
  const kilos = parseFloat(document.getElementById('kilos').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (validaEntrada(kilos, altura)){
    const imc = calcularIMC(kilos, altura);
    document.getElementById('imc').value = parseFloat(imc).toFixed(2);
    verificarIMC(imc);
  }else{
    document.getElementById('imc').value = "## ERROR ##";
  }
});

function verificarIMC(imc){
  if (imc < 17){
    createMessage ("Muito abaixo do peso", "alert")
  }else if (imc >= 17 && imc <= 18.49){  
    createMessage("Abaixo do peso", "warning")
  }else if (imc >= 18.5 && imc <= 24.99){
    createMessage("Peso normal", "sucess")
  }else if (imc >= 25 && imc <= 29.99){
    createMessage("Acima do peso", "warning")
  }else if (imc >= 30 && imc <= 34.99){
    createMessage("Obesidade I", "alert")
  }else{
    createMessage("Obesidade II", "danger")
  }
}

function createMessage(msg, type){
  document
    .querySelector("body")
    .insertAdjacentHTML("beforebegin", `<div class='message ${type}'>${msg}</div>`);
  
  setTimeout(function(){
    deleteMessage();
  }, 3000);
}

function deleteMessage(){
  const list = document.querySelectorAll(".message");
  for (const item of list){
    item.remove();
  }
}
