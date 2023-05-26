const gamesData = [
    {
        id: 1,
        name: 'God of War Ragnarok (PS4)',
        platform: 'PS4',
        genre:'Adventures',
        price: 139.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1684786748/Games/god-of-war-ragnarok-ps4-30_uxqyos.jpg',
      
    },
    {
        id: 2,
        name: "Marvel's Spider-Man (PS4)",
        platform: 'PS4',
        genre: 'Action-Adventure',
        price: 69.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1685133215/81PB33IQ3KL._AC_UF1000_1000_QL80__ht5zoy.jpg',
       
      
    },
    {
        id: 3,
        name: "Hogwarts Legacy (PS4)",
        platform: 'PS4',
        genre: 'Adventures',
        price: 139.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1684786748/Games/hogwarts-legacy-ps4-30_vhqu3o.jpg',
      
       
    },
    {
        id: 4,
        name: "Need For Speed: Heat (PS4)",
        platform: 'PS4',
        genre: 'Racing',
        price: 49.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1685133216/heat_ldofll.png',
     
        
    },
    {
        id:5,
        name: "Death Stranding (PS4)",
        platform: 'PS4',
        genre: 'Horror',
        price: 79.99,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1685133446/Games/death_wgwlwl.png',
    },
    {
        id: 6,
        name: "Grand Theft Auto V - Premium Edition (PS4)",
        platform: 'PS4',
        genre: 'Action',
        price: 39.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1684786911/Games/grand-theft-auto-v---premium-edition-ps4-30_vcxubz.jpg',
       
      
    },
    {
        id: 7,
        name: "Marvel's Spider-Man: Miles Morales (PS5)",
        platform: 'PS5',
        genre: 'Action-Adventure',
        price: 179.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1684787182/Games/marvel-s-spider-man--miles-morales-ps5-31_sxivkk.png',
     
      
    },
    {
        id: 8,
        name: "Ratchet & Clank: Rift Apart (PS5)",
        platform: 'PS5',
        genre: 'Action-Adventure',
        price: 159.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1684786749/Games/ratchet-and-clank--rift-apart-ps5-30_hqbmxc.jpg',
      
       
    },
    {
        id: 9,
        name: "Dead Space (PS5)",
        platform: 'PS5',
        genre: 'Horror',
        price: 149.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1685133676/Games/dead_space_xt2ege.png',
     
      
    },
    {
        id: 10,
        name: "Far Cry 6 (PS5)",
        platform: 'PS5',
        genre: 'Open-World',
        price: 119.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1685133675/Games/far_cry_6_cb5tkw.png',
       
       
    },
    {
        id: 11,
        name: "Need for Speed Unbound (PS5)",
        platform: 'PS5',
        genre: 'Racing',
        price: 90.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1684786750/Games/need-for-speed-unbound-ps5-30_t8schu.jpg',
      
        
    },
    {
        id: 12,
        name: "Red Dead Redemption 2 (PC)",
        platform: 'PC',
        genre: 'Open-World',
        price: 80.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1685133953/Games/red_dead_mapasr.png',
       
    
    },
    {
        id: 13,
        name: "Dead Space (PC)",
        platform: 'PC',
        genre: 'Horror',
        price: 45.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1684786749/Games/dead-space---kod-v-kutiya-pc-30_gow0lo.jpg',
     
      
    },
    {
        id: 14,
        name: "Star Wars Jedi: Survivor (PC)",
        platform: 'PC',
        genre: 'Action-Adventure',
        price: 65.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1684786749/Games/star-wars-jedi--survivor-pc---kod-v-kutiya-30_rh1ocg.jpg',
      
      
    }, 
     {
        id: 15,
        name: "FIFA 23 (PC)" ,
        platform: 'PC',
        genre: 'Sport',
        price: 59.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1684786750/Games/fifa-23---kod-v-kutiya-pc-30_makoix.jpg',

    },
    {
        id: 16,
        name: "NBA 2K23 (PC)",
        platform: 'PC',
        genre: 'Sport',
        price: 79.00,
        imgUrl: 'https://res.cloudinary.com/dcdmmuhf2/image/upload/v1685134075/Games/nba_nedbjl.png',
    }

]



$gameList = $('#games-list');

function render(){
    $gameList.empty();
    gamesData.forEach(game => {
        const $template = template(game);
        $gameList.append($template);
    })
}

function template(game){
    const templateSelector = $(`#games-list-template`);
    const $template = $($(templateSelector).html());
    const gamePoster = game.imgUrl;

    $template.find('.game-title').text(game.name);
    $template.find('.game-genre').text(game.genre);
    $template.find('.game-platform').text(game.platform);
    $template.find('.game-price').text(game.price.toFixed(2));
    $template.find('.game-img').attr('src', gamePoster);
    return $template;
}


/*Filtering*/
const buttonValue = document.querySelectorAll("#filter");

function logData(buttonClicked) {
    $gameList.empty();

    const genreSelected = buttonClicked.value;

    const filterGenres = gamesData.filter(game => game.genre.includes(genreSelected) || game.platform.includes(genreSelected));

    filterGenres.forEach(game => {
        const $template = template(game);
        $gameList.append($template);
    })

}

function filterByName() {
    $gameList.empty();
    const searchValue = document.querySelector("#search-value").value;

    const filterName = gamesData.filter(game => game.name.includes(searchValue)); 

    filterName.forEach(game => {
        const $template = template(game);
        $gameList.append($template);
    })
}


buttonValue.forEach(buttonClicked => {
    buttonClicked.addEventListener('click', () => {
        logData(buttonClicked)
    })
})

render();