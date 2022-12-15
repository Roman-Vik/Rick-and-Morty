import {card} from "./module/card.js";
import {search} from "./module/search.js";


async function data() {
    const URL = 'https://rickandmortyapi.com/api/character'
    let promise = await fetch(URL)
    let d = await promise.json()
    return d.results
}
export let list  =  await data()

export const cards = document.querySelector('.cards')

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

export const input = document.querySelector('.search__name')


/*3 слова*/
const listStatus = list.map(el => el.status)
const unicListStatus = [...new Set(listStatus)]
/*-------Узел добавдения options------*/
export const searchSelect = document.querySelector('.search__selector')

/*Добавил options*/
unicListStatus.forEach((el,i) => {
    let option = document.createElement('option')
    option.textContent = el
    searchSelect.append(option)
})

searchSelect.addEventListener('click', search)
input.addEventListener('input', search )











