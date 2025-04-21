import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDX32Bso72IsnnBUeV-jxUGDNTZ9pQdlMo",
  authDomain: "khatwatest.firebaseapp.com",
  databaseURL: "https://khatwatest-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "khatwatest",
  storageBucket: "khatwatest.firebasestorage.app",
  messagingSenderId: "560211899183",
  appId: "1:560211899183:web:6b4112b4c09f29d32967da"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const ajout = document.querySelector('#ajout');
const first_ajout = document.querySelector('#first_ajout');
const bodyScroll = document.querySelector('#body-scroll');

let i = 0;
get(ref(db, "counter"))
  .then((snapshot) => {
    if (snapshot.exists()) {
      i = snapshot.val();
    }
  })
  .catch((error) => {
    console.error("Error retrieving counter: ", error);
  });


ajout.addEventListener('click', () => {
  createNewWrapper();
  first_ajout.remove();
});

function createNewWrapper() {
  const newWrapper = document.createElement('div');
  newWrapper.className = 'wrapper';

  const newCommandes = document.createElement('div');
  newCommandes.className = 'les_commandes';

  newCommandes.innerHTML = `
    <div class="form-scroll">
      <h2>Commande </h2>
      <div class="input-box">
          <input class="ent_idcl" type="text" required>
          <label>Id Client</label>
      </div>
      <div class="input-box">
          <input class="ent_emcl" type="text" required>
          <label>Email Client</label>
      </div>
      <div class="input-box">
          <input class="ent_telcl" type="text" required>
          <label>Telephone Client</label>
      </div>
      <div class="input-box">
          <input class="ent_refcom" type="text" required>
          <label>Referance Commande</label>
      </div>
      <div class="input-box">
          <input class="ent_etat" type="text" required>
          <label>Etat du commande</label>
      </div>
      <button class="insertcom">Ajouter</button>
    </div>
  `;

  newWrapper.appendChild(newCommandes);
  bodyScroll.appendChild(newWrapper);

  const newInsertComButton = newWrapper.querySelector('.insertcom');
  newInsertComButton.addEventListener('click', () => {
    const ent_idcl = newWrapper.querySelector('.ent_idcl');
    const ent_emcl = newWrapper.querySelector('.ent_emcl');
    const ent_telcl = newWrapper.querySelector('.ent_telcl');
    const ent_refcom = newWrapper.querySelector('.ent_refcom');
    const ent_etat = newWrapper.querySelector('.ent_etat');

    set(ref(db, "lescommandes/" + ent_refcom.value), {
      id_client: ent_idcl.value,
      email_client: ent_emcl.value,
      tel_client: ent_telcl.value,
      ref_commande: ent_refcom.value,
      etat: ent_etat.value,
    })
      .then(() => {
        if (ent_refcom.disabled == true) {
          set(ref(db, "lescommandes/" + ent_refcom.value), {
            id_client: ent_idcl.value,
            email_client: ent_emcl.value,
            tel_client: ent_telcl.value,
            ref_commande: ent_refcom.value,
            etat: ent_etat.value,
          })
            .then(() => {
              alert("La commande a été modifiée");
            })
            .catch((error) => {
              console.error("Error updating data: ", error);
              alert("Error: " + error.message);
            });
        } else {
          alert("La commande est ajoutée avec succès");
          newInsertComButton.textContent = "Update";
          newInsertComButton.classList.replace('insertcom', 'update');
          createNewWrapper();
          ent_refcom.disabled = true;
        }
      })
      .catch((error) => {
        console.error("Error inserting data: ", error);
        alert("Error: " + error.message);
      });
  });
}