const mainSpan=document.querySelector('.mainSpan');
console.log(mainSpan);
const mainForm= document.forms.main;
console.log(mainForm);
const mainInput=mainForm.main__text;
console.log(mainInput);
const mainPlaceholder=mainInput.placeholder;
const mainSelect=mainForm.main_select;
const textarea=mainForm.main__textarea;
const sendingText=document.querySelector('.sending');
const mainBtn=mainForm.main_btn;

const mainTextarea=mainForm.main__textarea;
console.log(mainTextarea);
const mainTextLimit=mainTextarea.getAttribute('maxlength');
console.log(mainTextLimit);
console.log(textarea);
console.log(mainSelect);
mainTextarea.addEventListener('input', function(){
   let limitedText=mainTextLimit-mainTextarea.value.length;
mainSpan.innerHTML=limitedText;

});

mainInput.addEventListener('focus', function(){
    mainInput.placeholder='';
});
mainInput.addEventListener('blur', function(){
    mainInput.placeholder=mainPlaceholder;
});
let newOption= new Option('50','4',false,false);
mainSelect.append(newOption);
mainBtn.addEventListener('click', function(e){
    mainForm.addEventListener('submit', function(e){
        sendingText.innerHTML='malumot junatimoqda...';
        console.log('junatimoqda...');
        })
})
console.log(sendingText);
console.log(mainBtn);
