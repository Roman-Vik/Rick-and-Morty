import {card} from "./card.js";
import {list} from "../main.js";
import {searchSelect} from "../main.js";
import {cards} from "../main.js";
import {input} from "../main.js";

export function search(){
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
