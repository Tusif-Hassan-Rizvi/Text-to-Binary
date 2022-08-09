let takeinput = document.getElementById('input-text');
let output = document.getElementById("outputcontainer")
let btn = document.getElementById('btn-convert');


btn.addEventListener('click', () => {

    let textValue = takeinput.value;
    let index = 0;
    let html="";
    for (let i = 0; i < textValue.length; i++) {

        let AsciiValue = textValue.charCodeAt(i);
        // valuearr.push(AsciiValue);
        html+=`${AsciiValue.toString(2)} `;
    }
  

    output.innerText=html;
   

})
