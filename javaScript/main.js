import {card} from "./module/card.js";



async function data() {
    const URL = 'https://rickandmortyapi.com/api/character'
    let promise = await fetch(URL)
    let d = await promise.json()
    return d.results
}
let list  =  await data()




const cards = document.querySelector('.cards')

/*========цикл========*/
list.forEach(el => {
    let person = {
        name: el.name,
        status: el.status,
        species: el.species,
        image: el.image,
        gender: el.gender
    }
    cards.append(card(person))
})

const input = document.querySelector('.search__name')


/*3 слова*/
const listStatus = list.map(el => el.status)
const unicListStatus = [...new Set(listStatus)]
/*-------Узел добавдения options------*/
const searchSelect = document.querySelector('.search__selector')

/*Добавил options*/
unicListStatus.forEach((el,i) => {
    let option = document.createElement('option')
    option.textContent = el

    searchSelect.append(option)
})

function search(){
    console.log(searchSelect.value)
    if(searchSelect.value === 'Species'){
        const select =  searchSelect.value
        const changeList = list.filter((elem)=>{
            return  elem.name.toLowerCase().includes(input.value.toLowerCase())
        })

        cards.innerHTML = ''
        changeList.forEach( el => {
            let person = {
                name: el.name,
                status: el.status,
                species: el.species,
                image: el.image,
                gender: el.gender
            }
            cards.append(card(person))
        })

    } else {
        const selectList = list.filter((elem)=>{
            return  elem.status === searchSelect.value
        })
        cards.innerHTML = ''
        selectList.forEach( el => {
            let person = {
                name: el.name,
                status: el.status,
                species: el.species,
                image: el.image,
                gender: el.gender
            }
            cards.append(card(person))
        })

        const searchInput = selectList.filter((elem)=>{
            return  elem.name.toLowerCase().includes(input.value.toLowerCase())
        })
        cards.innerHTML = ''
        searchInput.forEach( el => {
            let person = {
                name: el.name,
                status: el.status,
                species: el.species,
                image: el.image,
                gender: el.gender
            }

            cards.append(card(person))
        })
    }

}
searchSelect.addEventListener('click', search)
input.addEventListener('input', search )











