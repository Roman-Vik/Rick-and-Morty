export  async function data() {
    const URL = 'https://rickandmortyapi.com/api/character'
    let promise = await fetch(URL)
    let d = await promise.json()
    return d.results
}