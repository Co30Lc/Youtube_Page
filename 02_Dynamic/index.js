
//Place older for Header.html

//first option bigger
// document.addEventListener("DOMContentLoaded", function () {
//     fetch('header.html')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error("Erreur lors du chargement du header");
//         }
//         return response.text();
//       })
//       .then(html => {
//         document.getElementById('cont-header').innerHTML = html;
//       })
//       .catch(error => {
//         console.error("Erreur :", error);
//       });
//   });
  
document.addEventListener('DOMContentLoaded', function (){
    document.querySelectorAll('[data-include]').forEach(element => {
        fetch(element.getAttribute('data-include'))
        .then(res => res.text())
        .then(html => element.innerHTML = html);
    });


})