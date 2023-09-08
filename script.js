function updatePartecipantiCards(data) {
  const partecipantiContainer = document.getElementById(
    "partecipanti-container"
  );
  partecipantiContainer.innerHTML = ""; // Pulisce il contenuto del contenitore

  const row = document.createElement("div");
  row.className = "row";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card rounded-circle custom-card";

    const col = document.createElement("div");
    col.className = "col-md-4 col-xl-4";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const icon = document.createElement("i");
    icon.className = item.iconClass; // Aggiungi la classe iconClass specificata nell'array
    cardBody.appendChild(icon);

    const nome = document.createElement("h5");
    nome.className = "card-title";
    nome.textContent = item.nome; // Nome del partecipante
    cardBody.appendChild(nome);

    const quota = document.createElement("p");
    quota.className = "card-text";
    quota.innerHTML = `<i class="fas fa-euro-sign"></i> ${item.quota}`; // Icona dell'euro prima della quota
    cardBody.appendChild(quota);

    card.appendChild(cardBody);
    partecipantiContainer.appendChild(card);
  });
}

// Funzione per aggiornare la tabella delle spese
function updateSpeseCards(data) {
  const speseContainer = document.getElementById("spese-container");
  speseContainer.innerHTML = ""; // Pulisce il contenuto del contenitore

  const row = document.createElement("div");
  row.className = "row";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card rounded-pill custom-card";

    const col = document.createElement("div");
    col.className = "col-md-4 col-xl-4";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const icon = document.createElement("i");
    icon.className = item.iconClass; // Aggiungi la classe iconClass specificata nell'array
    cardBody.appendChild(icon);

    const descrizione = document.createElement("h5");
    descrizione.className = "card-title";
    descrizione.textContent = item.nome; // Descrizione della spesa
    cardBody.appendChild(descrizione);

    const quota = document.createElement("p");
    quota.className = "card-text";
    quota.innerHTML = `<i class="fas fa-euro-sign"></i> ${item.quota}`; // Icona dell'euro prima della quota
    cardBody.appendChild(quota);

    card.appendChild(cardBody);
    speseContainer.appendChild(card);
  });
}

// Esempio dati per le tabelle (sostituisci con i tuoi dati reali)
const partecipantiData = [
  {
    nome: "Utente1",
    iconClass: "fa-sharp fa-solid fa-person-biking fa-beat",
    iconaEuro: "€",
    quota:0,
  },
  {
    nome: "Utente2",
    iconClass: "fa-sharp fa-solid fa-person-biking fa-beat",
    iconaEuro: "€",
    quota:0,
  },
  {
    nome: "Utente3",
    iconClass: "fa-sharp fa-solid fa-person-biking fa-beat",
    iconaEuro: "€",
    quota: 90,
  },
  {
    nome: "Utente4",
    iconClass: "fa-sharp fa-solid fa-person-biking fa-beat",
    iconaEuro: "€",
    quota: 0,
  },
  {
    nome: "Utente5",
    iconClass: "fa-sharp fa-solid fa-person-biking fa-beat",
    iconaEuro: "€",
    quota: 0,
  },
  {
    nome: "Utente6",
    iconClass: "fa-sharp fa-solid fa-person-biking fa-beat",
    iconaEuro: "€",
    quota: 0,
  },
  {
    nome: "Utente7",
    iconClass: "fa-sharp fa-solid fa-person-biking fa-beat",
    iconaEuro: "€",
    quota: 0,
  },
  {
    nome: "Utente8",
    iconClass: "fa-sharp fa-solid fa-person-biking fa-beat",
    iconaEuro: "€",
    quota: 0,
  },
  {
    nome: "Utente9",
    iconClass: "fa-sharp fa-solid fa-person-biking fa-beat",
    iconaEuro: "€",
    quota: 0,
  },
{
    nome: "Utente10",
    iconClass: "fa-sharp fa-solid fa-person-biking fa-beat",
    iconaEuro: "€",
    quota: 0,
  },
];

const speseData = [
  { nome: "Albergo", iconClass: "fas fa-hotel", iconaEuro: "€", quota: 0 },
  {
    nome: "Ristorante",
    iconClass: "fas fa-utensils",
    iconaEuro: "€",
    quota: 0,
  },
  { nome: "Bar", iconClass: "fas fa-coffee", iconaEuro: "€", quota: 0 },
  { nome: "Benzina", iconClass: "fas fa-gas-pump", iconaEuro: "€", quota: 0 },
  { nome: "Varie", iconClass: "fas fa-shopping-bag", iconaEuro: "€", quota: 0 },
  // Aggiungi altre spese qui...
];

// Aggiorna le tabelle con i dati
updatePartecipantiCards(partecipantiData);
updateSpeseCards(speseData);

function calcolaTotale() {
  const partecipantiContainer = document.getElementById(
    "partecipanti-container"
  );
  const speseContainer = document.getElementById("spese-container");

  const partecipantiCards = partecipantiContainer.querySelectorAll(".card");
  const speseCards = speseContainer.querySelectorAll(".card");

  let totaleQuotePartecipanti = 0;
  let totaleSpese = 0;

  partecipantiCards.forEach((card) => {
    const quota = parseFloat(
      card
        .querySelector(".card-text")
        .textContent.replace("Quota: €", "")
        .trim()
    );
    totaleQuotePartecipanti += quota;
  });

  speseCards.forEach((card) => {
    const quota = parseFloat(
      card
        .querySelector(".card-text")
        .textContent.replace("Quota: €", "")
        .trim()
    );
    totaleSpese += quota;
  });

  const totaleDisponibile = totaleQuotePartecipanti - totaleSpese;
  const totalMoneyElement = document.getElementById("total-money");
  totalMoneyElement.textContent = `€ ${totaleDisponibile.toFixed(2)}`;
}

// Chiama la funzione al caricamento della pagina per inizializzare il totale
calcolaTotale();