document.querySelector('.s-button').addEventListener('click',()=>{
    const searchInput = document.querySelector('input').value
    

    document.querySelector('#result-pic').src = `images/${searchInput}`
})

document.querySelector('#catch-button').addEventListener('click', ()=>{
    const newList = document.createElement('li')
    newList.innerText = document.querySelector('input').value
    document.querySelector('.caught-list').appendChild(newList)
})