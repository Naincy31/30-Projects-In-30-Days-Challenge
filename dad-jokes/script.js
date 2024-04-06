const btn = document.querySelector('.btn')
const jokeEle = document.getElementById('joke')

generateJoke()

btn.addEventListener('click', generateJoke)

async function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    try {
        const res = await fetch('https://icanhazdadjoke.com/', config)
        const data = await res.json()
        jokeEle.innerHTML = data.joke
    } catch (error) {
        jokeEle.innerHTML = error.message
    }
}