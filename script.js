document.querySelectorAll('input:not(#pwd):not(#confirm_pwd)').forEach(input => { /*to exclude all except pwd input*/
    input.addEventListener('blur',() => { /* the blur event, which fires when an element has lost focus.*/
        input.classList.add('is-invalid');
    });
});


document.getElementById('form_inscription').addEventListener('input', function () {
    const pwdElement = document.getElementById('pwd');
    const confirmPwdElement = document.getElementById('confirm_pwd');
    const password1 = pwdElement.value;
    const password2 = confirmPwdElement.value;

    // Efface les icônes précédentes
    pwdElement.nextElementSibling.textContent = '';
    confirmPwdElement.nextElementSibling.textContent = '';

    // Vérifie si les deux champs sont remplis
    //.nextElementSibling est une propriété qui permet d'accéder au prochain élément frère dans le DOM par rapport à l'élément courant. Dans ce cas, 
    //cela fait référence au <span> qui suit immédiatement l'élément input de votre mot de passe dans le HTML.
    if (password1 && password2) {
        if (password1 === password2) {
            // Les mots de passe correspondent
            pwdElement.nextElementSibling.innerHTML = '&#x2714;'; // Flèche verte
            confirmPwdElement.nextElementSibling.innerHTML = '&#x2714;'; // Flèche verte
            pwdElement.nextElementSibling.style.color = 'green';
            confirmPwdElement.nextElementSibling.style.color = 'green';
        } else {
            // Les mots de passe ne correspondent pas
            pwdElement.nextElementSibling.innerHTML = '&#x2718;'; // Croix rouge
            confirmPwdElement.nextElementSibling.innerHTML = '&#x2718;'; // Croix rouge
            pwdElement.nextElementSibling.style.color = 'red';
            confirmPwdElement.nextElementSibling.style.color = 'red';
        }
    }
});
