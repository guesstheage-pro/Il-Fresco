:root {
    --primary-color: #2c3e50;
    --text-color: #333;
    --bg-color: #f9f9f9;
    --card-bg: #ffffff;
    --border-color: #eee;
    --accent-color: #00bcd4;
    --hover-color: #0097a7;
    --success-color: #2e7d32;
    --closed-color: #757575;
    --shadow-soft: 0 4px 15px rgba(0,0,0,0.03);
    --shadow-hard: 0 8px 25px rgba(0,0,0,0.07);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    height: 100vh; /* Blocca l'altezza alla finestra del dispositivo */
    overflow: hidden; /* Evita lo scroll dell'intera pagina */
}

/* Header & Status (Molto più compatti) */
header {
    background: var(--card-bg);
    padding: 10px 15px 10px 15px; /* Padding ridotto drasticamente */
    box-shadow: 0 3px 15px rgba(0,0,0,0.03);
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 3px solid var(--accent-color);
    text-align: center;
    flex: 0 0 auto;
}

#main-logo {
    max-height: 50px; /* Limita l'altezza del logo */
    width: auto;
    display: block;
    margin: 0 auto 5px auto;
}

#address, #phone {
    font-size: 11px; /* Font rimpicciolito */
    color: #888;
    margin-top: 2px; /* Margini ridotti */
    font-weight: 500;
}

#status-bar {
    display: inline-block;
    font-size: 10px; /* Font rimpicciolito */
    font-weight: 700;
    margin: 4px 0; /* Margini ridotti */
    padding: 2px 10px;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.status-active { background-color: #e8f5e9; color: var(--success-color); border: 1px solid #c3e6cb; }
.status-inactive { background-color: #f5f5f5; color: var(--closed-color); border: 1px solid #ddd; }

.hub-actions {
    display: flex;
    gap: 10px; /* Gap ridotto */
    margin-top: 10px; /* Margine ridotto */
    justify-content: center;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.hub-btn {
    flex: 1;
    padding: 8px 0; /* Padding ridotto */
    font-size: 12px; /* Font rimpicciolito */
    font-weight: 600;
    border-radius: 8px;
    text-decoration: none;
    color: #fff;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: var(--shadow-soft);
}
.hub-btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-hard); }

.call-btn { background: linear-gradient(135deg, var(--primary-color), #405c78); }
.maps-btn { background: linear-gradient(135deg, var(--accent-color), var(--hover-color)); }

/* Main Container */
main {
    flex: 1;
    padding: 15px 15px 20px 15px; /* Padding ridotto */
    max-width: 650px;
    margin: 0 auto;
    width: 100%;
    overflow-y: auto; /* Permette lo scroll SOLO in quest'area (utile per i menù) */
}

.loading-spinner { text-align: center; color: #888; margin-top: 20px; font-size: 14px; }

/* Home State (Hub) */
.hub-grid {
    display: flex;
    flex-direction: column;
    gap: 12px; /* Gap tra sezioni ridotto */
}

.hub-title {
    font-size: 14px; /* Rimpicciolito */
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: 8px; /* Margine ridotto */
    text-align: center;
}

/* 1. Menu Nav Section */
.menu-nav {
    display: flex;
    flex-direction: column;
    gap: 6px; /* Gap ridotto */
}

.nav-btn {
    background: var(--card-bg);
    border: 1px solid #e0e0e0;
    color: var(--primary-color);
    padding: 12px 20px; /* Padding ridotto */
    border-radius: 10px;
    font-size: 14px; /* Font ridotto */
    font-weight: 600;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
    box-shadow: var(--shadow-soft);
}
.nav-btn:hover {
    background-color: #fafafa;
    border-color: var(--accent-color);
    box-shadow: var(--shadow-hard);
}
.nav-btn .btn-arrow { color: var(--accent-color); font-size: 16px; font-weight: 700; transition: transform 0.2s;}
.nav-btn:hover .btn-arrow { transform: translateX(5px); }

/* 2. Orari Section (Compattata) */
.orari-card {
    background: var(--card-bg);
    padding: 12px; /* Padding ridotto */
    border-radius: 10px;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-soft);
}
.orari-list { font-size: 11px; color: #666; display: flex; flex-direction: column; gap: 3px; }
.orari-day { display: flex; justify-content: space-between; padding: 2px 0; }
.orari-day.current { font-weight: 700; color: var(--success-color); background-color: #f1f8e9; border-radius: 4px; padding-left: 5px; padding-right: 5px; }

/* Menu States (Restano standard per la lettura) */
.category-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    color: var(--primary-color);
    margin: 25px 0 10px 0;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 6px;
}

.menu-item {
    background: var(--card-bg);
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--border-color);
    box-shadow: 0 2px 5px rgba(0,0,0,0.01);
}

.item-info { flex: 1; padding-right: 15px; }
.item-name { font-weight: 700; font-size: 14px; color: var(--primary-color); }
.item-desc { font-size: 11px; color: #777; margin-top: 2px; font-weight: 400; font-style: italic; }
.item-price { font-weight: 700; color: var(--accent-color); margin-left: 5px; font-size: 15px; white-space: nowrap; }

.back-container { margin-bottom: 15px; text-align: center;}
.back-btn {
    background: var(--card-bg);
    border: 1px solid #ddd;
    padding: 8px 20px;
    border-radius: 20px;
    color: var(--primary-color);
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
}
