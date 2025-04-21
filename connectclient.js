import { getDatabase, ref, query, orderByChild, equalTo, get } from "firebase/database";

  const db = getDatabase();

  async function getCommandesForClient() {
    const clientId = localStorage.getItem("clientId");
    alert("Client ID: " + clientId);

    const commandesRef = ref(db, "lescommandes");
    const q = query(commandesRef, orderByChild("id_client"), equalTo(clientId));

    try {
      const snapshot = await get(q);
      const commandes = [];

      if (snapshot.exists()) {
        snapshot.forEach((childSnapshot) => {
          commandes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        alert("Commandes trouvées: " + JSON.stringify(commandes));
      } else {
        alert("Aucune commande trouvée pour ce client.");
      }

      return commandes;
    } catch (error) {
      console.error("Erreur lors de la récupération des commandes:", error);
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    getCommandesForClient();
  });