export function card (obj){
    const {name, status, species, image, gender  } = obj

    const item = document.createElement('div')
    const imgWrap = document.createElement('div')
    const img = document.createElement('img')
    const textWrapper= document.createElement('div')
    const textName = document.createElement('h4')
    const textSpecies = document.createElement('p')
    const textStatus = document.createElement('p')
    const textGender = document.createElement('p')

    item.className = 'cards__item rgb'
    imgWrap.className = 'cards__wraperImg'
    img.className = 'cards__img'
    textWrapper.className = "cards__textWrapper"
    textName.className = "cards__name"
    textSpecies.className = "cards__species"
    textStatus.className = "cards__status"
    textGender.className = "cards__gender"
    //append
    item.append(imgWrap)
    imgWrap.append(img)
    item.append(textWrapper)
    textWrapper.append(textStatus, textName, textSpecies, textGender)
    //атрибуты
    img.setAttribute('src', `${image}`)
    img.setAttribute('alt', 'name')

    textName.textContent = name
    textSpecies.textContent = species
    textStatus.textContent = status
    textGender.textContent = gender

    return item
}