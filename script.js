function updatePartecipantiTable(data) {
    const partecipantiTable = document.getElementById("partecipanti-table");
    const tbody = partecipantiTable.querySelector("tbody");
    tbody.innerHTML = ""; // Pulisce il contenuto della tabella

    data.forEach((item, index) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = index + 1; // Numero di partecipante
        cell2.textContent = item.nome; // Nome del partecipante
        cell3.textContent = item.quota; // Quota del partecipante
    });
}

// Funzione per aggiornare la tabella delle spese
function updateSpeseTable(data) {
    const speseTable = document.getElementById("spese-table");
    const tbody = speseTable.querySelector("tbody");
    tbody.innerHTML = ""; // Pulisce il contenuto della tabella

    data.forEach((item, index) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = index + 1; // Numero di spesa
        cell2.textContent = item.nome; // Nome della spesa
        cell3.textContent = item.quota; // Quota della spesa
    });
}

// Esempio dati per le tabelle (sostituisci con i tuoi dati reali)
const partecipantiData = [
    { nome: "Pasquale", quota:100 +50 },
    { nome: "Jacob", quota: 150},
   
];

const speseData = [
    { nome: "Benzina", quota: 50 +20+30 },
    { nome: "Albergo", quota: 20+20,5 },
    { nome:"Bar", quota: 20}
    // Altre spese...
];

// Aggiorna le tabelle con i dati
updatePartecipantiTable(partecipantiData);
updateSpeseTable(speseData);

function calcolaTotale() {
    const partecipantiTable = document.getElementById("partecipanti-table");
    const speseTable = document.getElementById("spese-table");

    const partecipantiRows = partecipantiTable.querySelectorAll("tbody tr");
    const speseRows = speseTable.querySelectorAll("tbody tr");

    let totaleQuotePartecipanti = 0;
    let totaleSpese = 0;

    partecipantiRows.forEach((row) => {
        const quota = parseFloat(row.cells[2].textContent.replace("€", "").trim());
        totaleQuotePartecipanti += quota;
    });

    speseRows.forEach((row) => {
        const quota = parseFloat(row.cells[2].textContent.replace("€", "").trim());
        totaleSpese += quota;
    });

    const totaleDisponibile = totaleQuotePartecipanti - totaleSpese;
    const totalMoneyElement = document.getElementById("total-money");
    totalMoneyElement.textContent = `€ ${totaleDisponibile.toFixed(2)}`;
}

// Chiama la funzione al caricamento della pagina per inizializzare il totale
calcolaTotale();