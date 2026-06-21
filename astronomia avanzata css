document.addEventListener("DOMContentLoaded", () => {
    console.log("Astronomia Avanzata online!");

    // 1. Rimozione Preloader
    window.addEventListener("load", () => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.classList.add("fade-out");
        }
    });

    // 2. Parallasse Interattivo del Sfondo con Mouse
    const starsBackground = document.getElementById("stars");
    if (starsBackground) {
        window.addEventListener("mousemove", (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 45;
            const y = (window.innerHeight / 2 - e.pageY) / 45;
            starsBackground.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

    // 3. Chiamata API alla Foto del Giorno della NASA (APOD)
    const fetchNasaApod = async () => {
        const loadingEl = document.querySelector(".apod-loading");
        const contentEl = document.querySelector(".apod-content");
        
        try {
            const response = await fetch("https://nasa.gov");
            if (!response.ok) throw new Error("Errore nel caricamento");
            const data = await response.json();
            
            document.getElementById("apod-img").src = data.url;
            document.getElementById("apod-title").innerText = data.title;
            document.getElementById("apod-explanation").innerText = data.explanation;
            
            loadingEl.style.display = "none";
            contentEl.style.display = "flex";
        } catch (error) {
            loadingEl.innerText = "Impossibile caricare la foto dallo spazio in questo momento. Riprova più tardi.";
            console.error(error);
        }
    };
    fetchNasaApod();

    // 4. Contatori Numerici Animati con Scroll Sentry
    const counters = document.querySelectorAll(".counter");
    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = target / 60;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target.toLocaleString() + (target > 100 ? "+" : "");
                }
            };
            updateCount();
        });
    };

    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const chiSiamoSection = document.getElementById("chi-siamo");
    if (chiSiamoSection && counters.length > 0) observer.observe(chiSiamoSection);

    // 5. Generatore Intelligente di Stelle Cadenti
    const initShootingStars = () => {
        const container = document.getElementById("shooting-stars");
        if (!container) return;

        const createStar = () => {
            const star = document.createElement("div");
            star.classList.add("shooting-star");

            const randomTop = Math.random() * 60; 
            const randomLeft = Math.random() * 50 + 30; 
            const randomDuration = Math.random() * 2000 + 1500; 
            const randomDelay = Math.random() * 4000; 

            star.style.top = `${randomTop}%`;
            star.style.left = `${randomLeft}%`;
            star.style.animationDuration = `${randomDuration}ms`;
            star.style.animationDelay = `${randomDelay}ms`;

            container.appendChild(star);

            setTimeout(() => {
                star.remove();
            }, randomDuration + randomDelay);
        };

        setInterval(createStar, 1200);
    };
    initShootingStars();

    // 6. Gestione Menu Mobile
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // 7. Gestione Form Contatti
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Grazie per averci contattato! Ti risponeremo al più presto.");
            contactForm.reset();
        });
    } 
});
