*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body{
    font-family: 'Poppins', sans-serif;
    background: #050816;
    color: white;
    overflow-x: hidden;
}

/* --- PRELOADER --- */
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #050816;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.6s ease, transform 0.6s ease;
}

#preloader.fade-out {
    opacity: 0;
    transform: translateY(-100vh);
    pointer-events: none;
}

.solar-system {
    position: relative;
    width: 260px;
    height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transform: rotateX(65deg) rotateY(-15deg);
}

.sun {
    position: absolute;
    width: 35px;
    height: 35px;
    background: radial-gradient(circle, #ffea4a 20%, #ff7b00 100%);
    border-radius: 50%;
    box-shadow: 0 0 30px #ffaa00;
    transform: rotateX(-65deg);
}

.orbit {
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.planet { position: absolute; border-radius: 50%; }
.orbit-1 { width: 100px; height: 100px; animation: orbit-rotate 3s linear infinite; }
.planet-1 { top: 0; width: 8px; height: 8px; background: #58d7ff; }
.orbit-2 { width: 170px; height: 170px; animation: orbit-rotate 6s linear infinite; }
.planet-2 { top: 6px; width: 12px; height: 12px; background: #ff5e97; }
.orbit-3 { width: 240px; height: 240px; animation: orbit-rotate 12s linear infinite; }
.planet-3 { top: 15px; width: 16px; height: 16px; background: #7b3cff; }

@keyframes orbit-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* --- SFONDO INTERATTIVO --- */
#stars{
    position: fixed;
    width: 110%;
    height: 110%;
    top: -5%;
    left: -5%;
    background: radial-gradient(white 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: .3;
    z-index: -2;
    transition: transform 0.1s ease-out;
}

.shooting-stars-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
}

.shooting-star {
    position: absolute;
    height: 2px;
    background: linear-gradient(-45deg, #58d7ff, rgba(0, 0, 255, 0));
    border-radius: 999px;
    animation: tail 3000s ease-in-out infinite, shooting 3000ms ease-in-out infinite;
}

@keyframes tail { 0% { width: 0; } 30% { width: 80px; } 100% { width: 0; } }
@keyframes shooting { 0% { transform: translateX(0) translateY(0) rotate(-45deg); } 100% { transform: translateX(-300px) translateY(300px) rotate(-45deg); } }

/* --- STRUTTURA ADATTIVA (PC) --- */
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    background: rgba(5, 8, 22, 0.85);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.logo{
    height: 60px;
    width: auto;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
}

nav a{
    color: white;
    text-decoration: none;
    margin-left: 25px;
    font-weight: 500;
    transition: color 0.3s;
}

nav a:hover { color: #58d7ff; }

.hero{
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
}

.hero h1{
    font-family: 'Orbitron', sans-serif;
    font-size: clamp(2.2rem, 7vw, 4.5rem); /* Si adatta allo schermo */
    color: #58d7ff;
    text-shadow: 0 0 20px rgba(88, 215, 255, 0.3);
}

.hero p{
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    margin: 15px 0 35px 0;
    opacity: 0.85;
}

.btn{
    background: #7b3cff;
    padding: 14px 32px;
    border-radius: 30px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(123, 60, 255, 0.4);
}

section{
    padding: 60px 5%;
    max-width: 1200px;
    margin: 0 auto;
}

h2{
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 25px;
    color: #58d7ff;
    font-size: clamp(1.6rem, 4vw, 2.2rem);
}

.intro-text {
    font-size: 1.05rem;
    line-height: 1.7;
    opacity: 0.9;
}

/* --- CONTATORI --- */
.counters-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
}

.counter-box {
    text-align: center;
    background: rgba(255,255,255,0.02);
    padding: 25px;
    border-radius: 15px;
    border: 1px solid rgba(255,255,255,0.05);
    flex: 1 1 250px; /* Molto flessibile */
}

.counter {
    font-family: 'Orbitron', sans-serif;
    font-size: 2.2rem;
    color: #58d7ff;
    font-weight: bold;
}

/* --- SEZIONE APOD NASA --- */
.apod-container {
    background: rgba(255,255,255,0.03);
    border-radius: 16px;
    padding: 20px;
    border: 1px solid rgba(255,255,255,0.05);
}

.apod-loading { text-align: center; padding: 20px; }

.apod-content {
    display: flex;
    flex-direction: column; /* Default verticale per mobile */
    gap: 20px;
}

#apod-img {
    width: 100%;
    max-height: 350px;
    object-fit: cover;
    border-radius: 10px;
}

.apod-details h3 { margin-bottom: 10px; color: #58d7ff; font-family: 'Orbitron', sans-serif; }
.apod-details p { font-size: 0.95rem; line-height: 1.6; opacity: 0.8; }

/* --- STRUTTURA EVENTI --- */
.eventi-wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.table-responsive {
    width: 100%;
    overflow-x: auto; /* Permette lo swipe della tabella su smartphone piccoli */
}

.events-table {
    width: 100%;
    min-width: 500px;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.events-table th, .events-table td {
    padding: 14px;
    text-align: left;
    font-size: 0.95rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.events-table th { background: rgba(123, 60, 255, 0.15); color: #58d7ff; }

.moon-widget-box {
    background: rgba(123, 60, 255, 0.08);
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    border: 1px solid rgba(123, 60, 255, 0.2);
}

/* --- CARDS ARGOMENTI --- */
.cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 20px;
}

.card{
    background: rgba(255, 255, 255, .04);
    padding: 25px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

form{ display: flex; flex-direction: column; gap: 15px; max-width: 600px; width: 100%; }
input, textarea{
    padding: 14px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.04);
    color: white;
    width: 100%;
}

button[type="submit"]{
    padding: 14px;
    border: none;
    background: #7b3cff;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

footer{ text-align: center; padding: 30px; background: #03050d; color: rgba(255, 255, 255, 0.5); font-size: 0.85rem; }

/* --- RESPONSIVE ADAPTATION (TABLET & PC MODERNI) --- */
@media (min-width: 769px) {
    header { padding: 15px 8%; }
    .apod-content { flex-direction: row; } /* Foto affiancata al testo su PC */
    #apod-img { width: 45%; }
    .apod-details { width: 55%; }
    .eventi-wrapper { flex-direction: row; } /* Tabella affiancata alla luna su PC */
    .table-responsive { flex: 2; }
    .moon-widget-box { flex: 1; }
}

/* --- RESPONSIVE ADAPTATION (SMARTPHONE MOBILE) --- */
@media (max-width: 768px) {
    .menu-toggle {
        display: block; /* Mostra le barrette del menu */
    }
    
    .nav-menu {
        display: none; /* Nasconde la barra di navigazione standard */
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #050816;
        padding: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .nav-menu.active {
        display: flex; /* Mostra il menu quando cliccato */
    }
    
    nav a {
        margin: 12px 0;
        font-size: 1.1rem;
    }
    
    /* Disattiva l'inclinazione del sistema solare per non appesantire i telefoni */
    .solar-system { transform: none; height: auto; width: auto; }
    .orbit { display: none; }
    .sun { position: relative; transform: none; animation: orbit-rotate 2s linear infinite; margin: 0 auto; }
}
 