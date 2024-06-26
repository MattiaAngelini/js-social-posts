const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


//BONUS
//1. Formattare le date in formato italiano (gg/mm/aaaa)
//2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
//3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


//START:
// Stampo i 5 template per cominciare a visualizzarli.
// inserisco la stampa del template in una function

const mainContainer = document.querySelector('#container');
    generateSingleTemplate();

//**** FUNCTIONS ****/
function generateSingleTemplate (){
    posts.forEach((post) => {
        // Estrapolo le proprietà dall'oggetto post con metodo per destrutturare
        const { id, content, media, author, likes } = post;
        const { name, image } = author;
        //inserisco chiavi nel template (nei backtick)
        const postTemplate = `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${image}" alt="${name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${name}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${content}</div>
                <div class="post__image">
                    <img src="${media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="${id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>`;
    
        mainContainer.innerHTML += postTemplate;
    });
}

//Milestone 2 - Se clicchiamo sul tasto "Mi Piace" : 
// - cambiamo il colore al testo del bottone e
// - incrementiamo il counter dei likes relativo.
//Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

//seleziono il bottone
const btnsLikes = document.querySelectorAll('.like-button');
//seleziono il counter
const counterLikes = document.querySelector('.js-likes-counter');
//creo array che salverà il numero dei likes
const numbersOfLikes = [];
// Itera su tutti i pulsanti di "like"
btnsLikes.forEach((likeButton, index) => {
    
    // Ottengo il pulsante di "like" corrente
    const currentLikeButton = btnsLikes[index];
    
    currentLikeButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        // Aggiunge la classe CSS per cambiare colore al button
        this.classList.add('like-button--liked');
        
        // Identifica l'ID del post associato al pulsante di "like" e lo aggiungo all'array 'numbersOfLikes'
        const thisId = this.dataset.postid;
        numbersOfLikes.push(thisId);

        // Incremento il contatore dei likes associato al post corrente di 1
        const counter = document.querySelector(`#like-counter-${thisId}`);
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    });
});

    
console.log(numbersOfLikes)

