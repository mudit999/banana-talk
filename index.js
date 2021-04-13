
var btnTranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector('#textarea-translate');
var output = document.querySelector('#output');

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log('Error occoured', error);
    alert("Something went wrong, please try after some time");
}

function clickEventHandler(){
    var inputText = textArea.value; // taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json =>{
            
            var translatedText = json.contents.translated;
            output.innerText = translatedText;         // getting output
            // console.log(json.contents.translated)
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler)