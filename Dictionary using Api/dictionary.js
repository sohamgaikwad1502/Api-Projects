let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.querySelector('.result');


const meaning =  document.querySelector('.word-meaning');

const example = document.querySelector('.word-example');

const sound = document.querySelector('.sound');

const button = document.querySelector('.search-button');

const inpBox = document.querySelector('.search-area');


inpBox.addEventListener('keyup',function(event)
{
    if (event.keyCode === 13) {
        
        callDictionary();
    }

});

button.addEventListener('click' , callDictionary); 


function callDictionary()
{
    let inpword = document.querySelector('.search-area').value;
    result.innerHTML = "";
    
    fetch(`${url} ${inpword}`)
    .then((response) => response.json())
    .then((data) =>
    {
        
        
        result.innerHTML = `
            <div class="word">
                <h3>${inpword}</h3>
                <button style="cursor: pointer;"  onclick = "playSound()"><i class="fa-solid fa-volume-high">
                </i></button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetics[0].text}/</p>
            </div>
            <p class="word-meaning">    
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
                ${data[0].meanings[0].definitions[0].example}
            </p>
        `;
        

        sound.setAttribute("src",`${data[0].phonetics[0].audio}`); 
    }
    );
};

function playSound()
{
    sound.play();
}


