function selecionarOperacao(){
    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById('number2').value;
     var res = document.getElementById('res');
    var resulEnd = document.getElementById('operacoes').value;
debugger
    if(resulEnd == "somar +"){
        res.value = "Resultado: " + (Number(n1) + Number(n2));
    }
    if(resulEnd == "subtrair -"){
        res.value = 'Resultado: ' + (Number(n1) - Number(n2));
    }
    if(resulEnd == "multiplicar x"){
        res.value = 'Resultado: ' + (Number(n1) * Number(n2));
    }
     if(resulEnd == "divisão /"){
        res.value = 'Resultado: ' + (Number(n1) / Number(n2));
    
    }
};


function FuncaoNovaGitTeste(){
    console.log("Ola Git");
}