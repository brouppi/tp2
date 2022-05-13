(function() {
    //console.log("vive la boite modale");
    let boite__caroussel = document.querySelector(".boite__caroussel");
    
    
    
let boite__caroussel__navigation = document.querySelector(".boite__caroussel__navigation")
let boite__caroussel__img = document.querySelector(".boite__caroussel__img")
    let galerie__img = document.querySelectorAll(".galerie img");
    console.log("galerie__img" + galerie__img.length);

    
    let index = 0;
    for (const img of galerie__img) {
        //console.log(bout.tagName)
        let bouton = document.createElement('input')
        bouton.setAttribute('type', 'radio')
        bouton.setAttribute('checked', '')
        bouton.setAttribute('name', 'bouton')
        bouton.setAttribute('class', 'bouton')
        bouton.dataset.index = index
        boite__caroussel__navigation.append(bouton)
        let elmImg = document.createElement('img')

        elmImg.setAttribute("src", img.getAttribute('src'))
        boite__caroussel__img.append(elmImg)
        

        bouton.addEventListener('change', function(e){
            e.preventDefault
            boite__caroussel__img.children[this.dataset.index].classList.remove('img--ouvrir')
            boite__caroussel__img.children[this.dataset.index].classList.add('img--ouvrir')
            //elmImg.setAttribute('src', galerie__img[this.dataset.index].getAttribute('src'))

        })

        img.addEventListener('mousedown', function(){
           
            
            //console.log(this.parentNode.parentNode.className)
            boite__caroussel.classList.add('ouvrir');
            //console.log(boitemodale.classList)
            
            elmImg.setAttribute('src', this.getAttribute("src"));

            
        })
        index++
    }
    const btn__Fermer__Modal = document.querySelector('.boite__caroussel__fermeture');
        btn__Fermer__Modal.addEventListener('mousedown', () => boite__caroussel.classList.remove('ouvrir'));
})()