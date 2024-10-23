// This is a JavaScript file

$(document).on("click","#alerta",function(){
    
    function retorno(){
    }
    navigator.notification.alert("minha Mensagem", retorno, "Aviso!", "Aceito");
});
$(document).on("click","#confirm",function(){
    function confirma(buttonIndex){
        if(buttonIndex == "1"){
            navigator.notification.alert("Escolheu a opção A");
           }else{
            navigator.notification.alert("Escolheu a opção B");
            }
        }
        navigator.notification.confirm("Escolha A ou B", confirma, "Escolha:",['B','A']);
});
$(document).on("click","#beep",function(){
    navigator.notification.beep(4);
});
$(document).on("click","#vibrar",function(){
    navigator.vibration(3000);
});
