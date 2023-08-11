document.addEventListener('DOMContentLoaded', function() {
    const berechnenButton = document.getElementById('berechnen');
    const loeschenButton = document.getElementById('loeschen'); // Neuer Button
    const ergebnisDiv = document.getElementById('ergebnis');
    
    berechnenButton.addEventListener('click', function() {
      const kapital = parseFloat(document.getElementById('kapital').value.replace(/\s/g, '').replace(',', '.'));
      const zinssatz = parseFloat(document.getElementById('zinssatz').value.replace(/\s/g, '').replace(',', '.'));
      const zeit = parseFloat(document.getElementById('zeit').value.replace(/\s/g, '').replace(',', '.'));
    
      if (isNaN(kapital) || isNaN(zinssatz) || isNaN(zeit)) {
        ergebnisDiv.textContent = 'Bitte geben Sie gültige Zahlen ein.';
      } else {
        const zins = (kapital * zinssatz * zeit) / 36000;
        ergebnisDiv.textContent = `Der Zins beträgt: ${zins.toFixed(2)} EUR`;
      }
    });
  
    loeschenButton.addEventListener('click', function() {
      document.getElementById('kapital').value = '';
      document.getElementById('zinssatz').value = '';
      document.getElementById('zeit').value = '';
      ergebnisDiv.textContent = '';
    });
  });
  