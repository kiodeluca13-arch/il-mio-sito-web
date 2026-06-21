<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Astronomia Avanzata | L'universo alla portata di tutti</title>
    <link href="https://googleapis.com" rel="stylesheet">
    <link rel="stylesheet" href="https://cloudflare.com">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Preloader: Sistema Solare (gira su PC, si semplifica su mobile per non rallentare) -->
<div id="preloader">
    <div class="solar-system">
        <div class="sun"></div>
        <div class="orbit orbit-1"><div class="planet planet-1"></div></div>
        <div class="orbit orbit-2"><div class="planet planet-2"></div></div>
        <div class="orbit orbit-3"><div class="planet planet-3"></div></div>
    </div>
</div>

<!-- Sfondi Stellati -->
<div id="stars"></div>
<div class="shooting-stars-container" id="shooting-stars"></div>

<header>
    <img src="logo.png" alt="Astronomia Avanzata" class="logo">
    <!-- Pulsante Menu per Smartphone -->
    <button class="menu-toggle" aria-label="Apri menu">☰</button>
    <nav class="nav-menu">
        <a href="#chi-siamo">Chi siamo</a>
        <a href="#argomenti">Argomenti</a>
        <a href="#nasa-apod">Foto del Giorno</a>
        <a href="#eventi">Eventi</a>
        <a href="#contatti">Contatti</a>
    </nav>
</header>

<section class="hero">
    <h1>Astronomia Avanzata</h1>
    <p>L'universo alla portata di tutti</p>
    <a href="#argomenti" class="btn">Esplora il Cosmo</a>
</section>

<section id="chi-siamo">
    <h2>Chi siamo</h2>
    <p class="intro-text">
        Astronomia Avanzata nasce con l'obiettivo di rendere l'astronomia
        accessibile a tutti attraverso articoli, guide, osservazioni e
        approfondimenti scientifici.
    </p>

    <div class="counters-container">
        <div class="counter-box">
            <div class="counter" data-target="10000">0</div>
            <p>Appassionati nella Community</p>
        </div>
        <div class="counter-box">
            <div class="counter" data-target="24">0</div>
            <p>Ore di Monitoraggio Cosmo</p>
        </div>
        <div class="counter-box">
            <div class="counter" data-target="150">0</div>
            <p>Articoli e Guide Scientifiche</p>
        </div>
    </div>
</section>

<section id="argomenti">
    <h2>Esplora l'Universo</h2>
    <div class="cards">
        <div class="card">
            <h3>🌍 Sistema Solare</h3>
            <p>Pianeti, lune e missioni spaziali.</p>
        </div>
        <div class="card">
            <h3>⭐ Stelle</h3>
            <p>Nascita, evoluzione e morte delle stelle.</p>
        </div>
        <div class="card">
            <h3>🌌 Galassie</h3>
            <p>Alla scoperta della Via Lattea e oltre.</p>
        </div>
        <div class="card">
            <h3>🕳️ Buchi Neri</h3>
            <p>I misteri più affascinanti del cosmo.</p>
        </div>
    </div>
</section>

<section id="nasa-apod">
    <h2>Foto Astronomica del Giorno</h2>
    <p style="margin-bottom: 30px;">Ogni giorno un'immagine diversa del nostro affascinante universo direttamente dai server NASA.</p>
    <div class="apod-container">
        <div class="apod-loading">Caricamento dell'immagine dallo spazio...</div>
        <div class="apod-content">
            <img id="apod-img" src="" alt="NASA APOD">
            <div class="apod-details">
                <h3 id="apod-title"></h3>
                <p id="apod-explanation"></p>
            </div>
        </div>
    </div>
</section>

<section id="eventi">
    <h2>Eventi Astronomici 2026</h2>
    <p style="margin-bottom: 25px;">Segui i principali appuntamenti celesti visibili nei prossimi mesi:</p>
    
    <div class="eventi-wrapper">
        <div class="table-responsive">
            <table class="events-table">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Fenomeno Astronomico</th>
                        <th>Visibilità in Italia</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>12 Agosto 2026</strong></td>
                        <td>Eclissi Solare Totale</td>
                        <td>Parziale (fino al 90% al Nord-Ovest)</td>
                    </tr>
                    <tr>
                        <td><strong>12-13 Agosto 2026</strong></td>
                        <td>Meteore Perseidi</td>
                        <td>Ottima (Luna favorevole)</td>
                    </tr>
                    <tr>
                        <td><strong>2 Ottobre 2026</strong></td>
                        <td>Eclissi Solare Anulare</td>
                        <td>Non visibile dall'Italia</td>
                    </tr>
                    <tr>
                        <td><strong>17 Novembre 2026</strong></td>
                        <td>Meteore Leonidi</td>
                        <td>Buona prima dell'alba</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="moon-widget-box">
            <h3><i class="fa-solid fa-moon"></i> Fase Lunare Oggi</h3>
            <iframe src="https://moonconnection.com" style="border:none; overflow:hidden; width:150px; height:170px; margin: 20px auto; display:block;" scrolling="no"></iframe>
            <p style="font-size:0.85rem; text-align:center; opacity:0.7;">Aggiornato in tempo reale</p>
        </div>
    </div>
</section>

<section id="contatti">
    <h2>Contattaci</h2>
    <form id="contact-form">
        <input type="text" placeholder="Nome" required>
        <input type="email" placeholder="Email" required>
        <textarea placeholder="Messaggio" rows="5" required></textarea>
        <button type="submit">Invia</button>
    </form>
</section>

<footer>
    <p>© 2026 Astronomia Avanzata</p>
</footer>

<script src="script.js"></script>
</body>
</html>
