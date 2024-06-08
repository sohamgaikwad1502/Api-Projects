// let meme_image = document.querySelector('.meme-image');
// let meme_content = document.querySelector('.meme-content');

let url = "https://meme-api.com/gimme";

let subreddits = ['catmemes','wholesomemes','dogmemes','me_irl'];

let getMeme = ()=>
{
    let randomSubredit = subreddits[Math.floor(Math.random() * subreddits.length)]  ;

    console.log(randomSubredit);
}


