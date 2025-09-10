document.addEventListener('DOMContentLoaded', function() {
    // Seleziona tutti i link che puntano a un ID (link interni)
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Aggiungi event listener a ciascun link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previeni il comportamento predefinito del link
            e.preventDefault();
            
            // Ottieni l'ID di destinazione dal href del link
            const targetId = this.getAttribute('href');
            
            // Salta se il link è solo '#'
            if (targetId === '#') return;
            
            // Seleziona l'elemento di destinazione
            const targetElement = document.querySelector(targetId);
            
            // Verifica che l'elemento esista
            if (targetElement) {
                // Esegui lo scroll con animazione fluida
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Il componente React è caricato tramite iframe
});
