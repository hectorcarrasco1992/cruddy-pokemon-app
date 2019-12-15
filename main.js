document.querySelector('.s-button').addEventListener('click',()=>{
    const searchInput = document.querySelector('input').value
    // const newSrc = `./images/Pikachu`
    // let resultImage = document.querySelector('.result')

    // resultImage.src= `${newSrc}`

    document.querySelector('#result-pic').src = `images/${searchInput}`
})