const input = document.getElementById('input');
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

function disabledBtn(){
    button.disabled = !button.disabled;
}


function tellMe(str){
    VoiceRSS.speech({
        key: apiKey,
        src: str.trim(),
        hl: 'pl-pl',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}



function getText(){
    if(input.value) {
        let msg = input.value;
        tellMe(msg);
        disabledBtn();
        input.value = "";
    } else {
        window.alert("Alert! Empty Field");
        //tellMe('Empty field. Please enter text'); only in en-us english mode;
    }
}


button.addEventListener('click', getText);
audioElement.addEventListener('ended', disabledBtn);