
const wrapper=document.querySelector('.wrapper');
const wrapperclient=document.querySelector('.wrapper-client');
const loginLink=document.querySelector('.entreprise-link');
const registerLink=document.querySelector('.register-link');
const btnentreprise=document.querySelector('.btnentreprise-popup');
const btnclient=document.querySelector('.btnclient-popup');
const btnclientins=document.querySelector('.client-link');
const btnclientinsc=document.querySelector('.client-link.c');
const btnentreprisecl=document.querySelector('.entreprise2-link');
const icclose=document.querySelector('.icon-close');
const icclosec=document.querySelector('.icon-close.c');
const vision=document.querySelector('#vision');
const visionr=document.querySelector('#visionr');
vision.addEventListener('click',()=>{
    if(document.getElementById('pass_login').type==='password'){
        document.getElementById('pass_login').type='text';
        vision.querySelector('ion-icon').setAttribute('name', 'eye');
    }else{
        document.getElementById('pass_login').type='password';
        vision.querySelector('ion-icon').setAttribute('name', 'eye-off');
    }
    
});
visionr.addEventListener('click',()=>{
    if(document.getElementById('pass_register').type==='password'){
        document.getElementById('pass_register').type='text';
        visionr.querySelector('ion-icon').setAttribute('name', 'eye');
    }else{
        document.getElementById('pass_register').type='password';
        visionr.querySelector('ion-icon').setAttribute('name', 'eye-off');
    }
});
icclosec.addEventListener('click',()=>{
    wrapperclient.classList.remove('client');
    wrapper.classList.remove('entreprise');
});
icclose.addEventListener('click',()=>{
    wrapperclient.classList.remove('client');
    wrapper.classList.remove('entreprise');
});
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnentreprise.addEventListener('click',()=>{
    wrapper.classList.add('entreprise');
    wrapperclient.classList.remove('client');
});
btnclient.addEventListener('click',()=>{
    wrapperclient.classList.add('client');
    wrapper.classList.remove('entreprise');
});
btnentreprisecl.addEventListener('click',()=>{
    wrapper.classList.add('entreprise');
    wrapperclient.classList.remove('client');
});
btnclientins.addEventListener('click',()=>{
    wrapperclient.classList.add('client');
    wrapper.classList.remove('entreprise');
});
btnclientinsc.addEventListener('click',()=>{
    wrapperclient.classList.add('client');
    wrapper.classList.remove('entreprise');
});
