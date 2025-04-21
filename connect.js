import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDX32Bso72IsnnBUeV-jxUGDNTZ9pQdlMo",
    authDomain: "khatwatest.firebaseapp.com",
    databaseURL: "https://khatwatest-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "khatwatest",
    storageBucket: "khatwatest.firebasestorage.app",
    messagingSenderId: "560211899183",
    appId: "1:560211899183:web:9280567812cbef272967da"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const cue = document.querySelector("#adr_login");
const pass_e = document.querySelector("#pass_login");
const login_btn = document.querySelector("#recherche");

login_btn.addEventListener('click', function(event) {
    event.preventDefault();
    FindData();
});
function FindData() {
    const dbRef = ref(db, "entreprise/" + cue.value);
    const wrapper=document.querySelector('.wrapper');
    get(dbRef)
    .then((snapshot) => {
        if (snapshot.exists()) {
            const userData = snapshot.val();
            if(userData.pass==pass_e.value){
                ifr.src="entreprise.html";
                wrapper.classList.remove('entreprise');
            }else{
                alert("Mot de pass incorrect!!!");
            }
        } else {
            alert("No data found!");
        }
    })
    .catch((error) => {
        alert("Error fetching data: " + error.message);
    });
}

const mf = document.querySelector("#mf");
const rc = document.querySelector("#rc");
const cue_reg = document.querySelector("#cue");
const cnss = document.querySelector("#cnss");
const tel = document.querySelector("#tel");
const fax = document.querySelector("#fax");
const adr_reg = document.querySelector("#adr_register");
const pass_reg = document.querySelector("#pass_register");
const insert_btn = document.querySelector("#insert");

insert_btn.addEventListener('click', function(event) {
    event.preventDefault();
    InsertData();
});

function InsertData() {
    const wrapper=document.querySelector('.wrapper');
    set(ref(db, "entreprise/" + cue_reg.value), {
        nom: mf.value,
        reg: rc.value,
        code: cue_reg.value,
        cns: cnss.value,
        tele: tel.value,
        fa: fax.value,
        adr: adr_reg.value,
        pass: pass_reg.value
    })
    .then(() => {
        alert("L'entreprise " + mf.value + " est enregistrée!");
        wrapper.classList.remove('active');
    })
    .catch((error) => {
        console.error("Error inserting data: ", error);
        alert("Error: " + error.message);
    });
}

const code_client = document.querySelector("#code_client");
const client_btn = document.querySelector("#cherche");

client_btn.addEventListener('click', function(event) {
    event.preventDefault();
    ifr.src="client.html";
    alert("Login client");
});
function moncompte(){
    if( ifr.src=="entreprise.html"){
        ifr.src="moncompte.html";
    }
}