(function() {
    //console.log("vive la boite modale");
    let boitemodale = document.querySelector(".boite__modale");
    let coursdescouvrir = document.querySelectorAll('.cours__des__couvrir');
    let boitemodaletext = document.querySelector(".boite__modale__texte");
    //console.log(coursdescouvrir.length);

    for (const bout of coursdescouvrir) {
        //console.log(bout.tagName)
        bout.addEventListener('mousedown', function(){
            //console.log(this.parentNode.parentNode.className)
            boitemodale.classList.add('ouvrir')
            //console.log(boitemodale.classList)
            boitemodaletext.innerHTML = this.parentNode.parentNode.children[0].innerHTML
        })
    }
    const btnFermerModal = document.querySelector('.boite__modale__fermeture');
        btnFermerModal.addEventListener('mousedown', () => boitemodale.classList.remove('ouvrir'));
})()