
function getAdvice() {
    console.log("youre in ")
    let request = new XMLHttpRequest();
    request.open('GET',"https://api.adviceslip.com/advice");
    request.responseType ='json';
    request.send();
    request.onload = function(){
        let response = request.response
        document.getElementById("ID").innerHTML = response.slip.id
        document.getElementById("Quote").innerHTML=response.slip.advice
    
    }
    
}