const images = document.querySelectorAll('img')
document.querySelector('.clear').addEventListener('click', ()=>{
    for(let i = 0; i < images.length; i++){
        images[i].style.width = '0px'

    }
})


document.querySelector('.s-button').addEventListener('click',()=>{
    const searchInput = document.querySelector('input').value


    document.querySelector('#result-pic').src = `images/${searchInput}.png`
})

document.querySelector('#catch-button').addEventListener('click', ()=>{
    const newList = document.createElement('li')
    newList.innerText = document.querySelector('input').value
    document.querySelector('.caught-list').appendChild(newList)
})