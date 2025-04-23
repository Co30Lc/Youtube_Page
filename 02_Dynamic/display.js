document.addEventListener('DOMContentLoaded', function (){
    const link = document.querySelector('.cont-video');

    // Pour chaque div, ajoute un écouteur de clic
      link.addEventListener('click', () => {
        const url = this.dataset.url;
        if (url) {
            window.open(url, "_blank");
        }
        else {
            alert ('Aucun lien defini!');
        }
      });

});