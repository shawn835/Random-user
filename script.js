const textInput = document.getElementById('text-input')
const searchButton = document.getElementById('search-btn')
const containerEl = document.querySelector('.showcase')
const randomUser = "https://randomuser.me/api/?results=500"


const fetchUsers = async () => {
    try {
        const res = await fetch(randomUser)
        const data = await res.json()
        getUserInfo(data)
    } catch (e) {
        console.log(e.message)
    }

}

fetchUsers()
const getUserInfo = (data) => {
    const { results } = data

    const userData = results.map(user => {
        return `
       
        <div class="person-info">
       <div class="image"><img src="${user.picture.medium}" alt="${user.picture.thumbnail}"></div>
        <ul class="list-items">
            <li>${user.name.first} ${user.name.last}</li>
            <li>${user.location.city}, ${user.location.country}</li>
        </ul>
    </div>
            
       `
    }).join('');

    containerEl.innerHTML = userData

    const listItems = document.querySelectorAll('.person-info')



    textInput.addEventListener("input", (e) => {
        const searchedWord = e.target.value.toLowerCase()
        listItems.forEach((list) => {

            console.log(list)
            if (list.innerText.toLowerCase().includes(searchedWord)) {
                list.style.display = "block"
            } else {
                list.style.display = "none"
            }
        })
    })
}


