const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhM9ftVb7Q4acHrZzSHOwP7IZBLKG5tZp2lwUZORv7HSFCg1aAMdJY0giRPMxa7uMXVKabtHtkqbPM/pub?output=csv';

const openingSchedule = [
    { day: 1, name: "Lunedì", slots: [[390, 720]] }, // 6:30 - 12:00
    { day: 2, name: "Martedì", slots: [[390, 1350]] }, // 6:30 - 22:30
    { day: 3, name: "Mercoledì", slots: [[390, 1350]] },
    { day: 4, name: "Giovedì", slots: [[390, 1350]] },
    { day: 5, name: "Venerdì", slots: [[390, 1380]] }, // 6:30 - 23:00
    { day: 6, name: "Sabato", slots: [[420, 1380]] }, // 7:00 - 23:00
    { day: 0, name: "Domenica", slots: [[420, 1350]] } // 7:00 - 22:30
];

function checkOpenStatus() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentTimeMinutes = now.getHours() * 60 + now.getMinutes();

    const currentSchedule = openingSchedule.find(s => s.day === currentDay);
    let isOpen = false;

    if (currentSchedule) {
        for (const slot of currentSchedule.slots) {
            if (currentTimeMinutes >= slot[0] && currentTimeMinutes < slot[1]) {
                isOpen = true;
                break;
            }
        }
    }

    const statusBar = document.getElementById('status-bar');
    if (!statusBar) return;

    if (isOpen) {
        statusBar.textContent = "● Aperto ora 🌿";
        statusBar.className = "status-active";
    } else {
        statusBar.textContent = "○ Chiuso ora 🌙";
        statusBar.className = "status-inactive";
    }
}

function loadHomePage() {
    d3.select('#main-header').style('display', 'block');
    const container = d3.select('#app-container');
    container.html(''); // Pulisci area principale

    const hubGrid = container.append('div').attr('class', 'hub-grid');

    // SCAMBIO POSIZIONE: 1. Sezione Navigazione Menù (Ora PRIMA)
    const menuNav = hubGrid.append('div').attr('class', 'menu-nav');
    menuNav.append('h2').attr('class', 'hub-title').text('🌿 Scopri i nostri Menù');

    const menuOptions = [
        { key: 'Caffetteria', name: 'Caffetteria / Colazione ☕' },
        { key: 'Drinks', name: 'Drinks e altro 🍹' },
        { key: 'Pranzo', name: 'Menù pranzo 🍔' },
        { key: 'Cena', name: 'Menù cena 🍽️' }
    ];

    menuOptions.forEach(opt => {
        const btn = menuNav.append('button')
            .attr('class', 'nav-btn')
            .on('click', () => loadMenuPage(opt.key));
        
        btn.append('span').text(opt.name);
        btn.append('span').attr('class', 'btn-arrow').text('→');
    });

    // SCAMBIO POSIZIONE: 2. Sezione Orari (Ora SECONDA)
    const orariCard = hubGrid.append('div').attr('class', 'orari-card');
    orariCard.append('h2').attr('class', 'hub-title').text('🕒 I Nostri Orari');
    const orariList = orariCard.append('div').attr('class', 'orari-list');

    const now = new Date();
    openingSchedule.forEach(s => {
        const row = orariList.append('div').attr('class', 'orari-day');
        if (s.day === now.getDay()) row.classed('current', true);
        
        row.append('span').text(s.name + ":");
        const hoursString = s.slots.map(slot => {
            const startH = Math.floor(slot[0] / 60);
            const startM = slot[0] % 60;
            const endH = Math.floor(slot[1] / 60);
            const endM = slot[1] % 60;
            return `${startH}:${startM.toString().padStart(2, '0')} - ${endH}:${endM.toString().padStart(2, '0')}`;
        }).join(', ');
        row.append('span').text(hoursString);
    });

    checkOpenStatus(); // Aggiorna stato al caricamento
}

async function loadMenuPage(menuKey) {
    // Nascondi Header durante la visualizzazione menù per focus
    d3.select('#main-header').style('display', 'none');
    
    const container = d3.select('#app-container');
    container.html(''); // Pulisci area principale hub

    // Tasto Indietro con Emoji
    container.append('div').attr('class', 'back-container')
        .append('button')
        .attr('class', 'back-btn')
        .text('🔙 Torna Indietro')
        .on('click', loadHomePage);

    // Placeholder titolo menù basato sulla chiave
    let pageTitle = '';
    switch(menuKey) {
        case 'Caffetteria': pageTitle = '☕ Caffetteria & Colazione'; break;
        case 'Drinks': pageTitle = '🍹 Drinks & Aperitivi'; break;
        case 'Pranzo': pageTitle = '🍔 Menù Pranzo'; break;
        case 'Cena': pageTitle = '🍽️ Menù Cena'; break;
    }
    container.append('h1').text(pageTitle).style('text-align', 'center').style('margin-bottom', '20px').style('font-family', "'Playfair Display', serif").style('color', 'var(--primary-color)');

    // Caricamento Dati
    try {
        const response = await fetch(SHEET_URL);
        const csvData = await response.text();
        
        // Parsing intelligente con regex per gestire virgole nelle descrizioni
        const data = d3.csvParse(csvData);

        const filteredData = data.filter(d => d.MenuType === menuKey && d.Disponibile === 'SI');

        if (filteredData.length === 0) {
            container.append('p').text('Al momento non ci sono articoli disponibili per questo menù.').style('text-align', 'center').style('color', '#888');
            return;
        }

        // Raggruppa per Categoria
        const nestedData = d3.groups(filteredData, d => d.Categoria);

        nestedData.forEach(([category, items]) => {
            // Aggiungi Titolo Categoria
            container.append('h2').attr('class', 'category-title').text(category);
            
            items.forEach(item => {
                const menuItem = container.append('div').attr('class', 'menu-item');
                const info = menuItem.append('div').attr('class', 'item-info');
                info.append('div').attr('class', 'item-name').text(item['Nome Articolo']);
                if (item['Descrizione']) info.append('div').attr('class', 'item-desc').text(item['Descrizione']);
                menuItem.append('div').attr('class', 'item-price').text('€' + item['Prezzo']);
            });
        });

    } catch (e) {
        console.error(e);
        container.append('p').text('Oops! Errore nel caricamento del menù. Riprovare tra un momento. 😅').style('text-align', 'center').style('color', '#d32f2f');
    }
}

// Avvio applicazione
document.addEventListener('DOMContentLoaded', loadHomePage);
