import {card} from "./module/card.js";
import {search} from "./module/search.js";
import {data} from "./module/data.js";

export let list = await data()
export const cards = document.querySelector('.cards')

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
export const searchSelect = document.querySelector('.search__selector')
export const input = document.querySelector('.search__name')

const listStatus = list.map(el => el.status)
const unicListStatus = [...new Set(listStatus)]

unicListStatus.forEach((el, i) => {
    let option = document.createElement('option')
    option.textContent = el
    searchSelect.append(option)
})

searchSelect.addEventListener('click', search)
input.addEventListener('input', search)











