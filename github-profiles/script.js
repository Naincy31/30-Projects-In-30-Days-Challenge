const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
   try {
        const { data } = await axios(APIURL + username)
        createCard(data)
        getRepos(username)
   } catch (error) {
        if(error.response.status == 404){
            createErrorCard('No profile with this username')
        }
   }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        addReposToCard(data)
   } catch (error) {
        createErrorCard('Problem Fetching Repositories')
   }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = search.value
    if(user){
        getUser(user)
        search.value = ''
    }
    
})

function createCard(data){
    main.innerHTML = `
    <div class="card">
        <div>
            <img src=${data.avatar_url} alt=${data.name} id="avatar">
        </div>
        <div class="user-info">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>
            <ul>
                <li>${data.followers} <strong>Followers</strong></li>
                <li>${data.following} <strong>Following</strong></li>
                <li>${data.public_repos} <strong>Repos</strong></li>
            </ul>
            <div id="repos"></div>
        </div>
    </div>`
}

function createErrorCard(msg){
    const cardHTML = `
    <div class="card">
    <h2>${msg}</h2>
    </div>`

    main.innerHTML = cardHTML
}

function addReposToCard(repos){
    const reposEl = document.getElementById('repos')

    repos.slice(0, 5).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    })
}



