let pgTheme = document.querySelector('nav')
let themeBtn = document.querySelector('#themeBtn')

// console.log(pgTheme)  // <nav> ... </nav>
const changeTheme = () => {
    console.log("Function")
    if (pgTheme.dataset.theme === "dark"){
        console.log("dark")
        pgTheme.dataset.theme = "light"
        pgTheme.className = 'navbar navbar-expand-sm navbar-light bg-light'
        document.querySelector('body').className = "bg-body text-dark"
        themeBtn.className="btn btn-light order-2 order-sm-3"
        themeBtn.innerText="Light Mode"
    } else if (pgTheme.dataset.theme === "light"){
        console.log("light");
        pgTheme.dataset.theme = "dark"
        pgTheme.className = 'navbar navbar-expand-sm navbar-dark bg-dark'
        document.querySelector('body').className = "bg-secondary text-light"
        themeBtn.className="btn btn-dark order-2 order-sm-3"
        themeBtn.innerText="Dark Mode"
    }

}
themeBtn.onclick = changeTheme

const deleteMovie = async (param) => {

    fetch("http://localhost:3001/movies/delete-movie", {
        method: 'DELETE',
        mode: 'cors',
        headers:{          
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
        body: JSON.stringify({id: param})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status code: ${response.status}`)
        } else {
            return response.text()
        }
    })
    .then(res => {
        document.getElementById(param).innerHTML = res

    })
    .catch(error => {
        console.log(error)
        return false
    })

}

const getAllMovies = async () => {

   fetch("http://localhost:3001/movies/get-all-movies")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status code: ${response.status}`)
        } else {
            return response.json()
        }
    })
    .then(res => {
        document.querySelector('#moviesDiv').innerHTML = res.map(el => {
            return `<div id=${el.id}><p> <strong>Title:</strong> ${el.title} <br>
            <strong>Director:</strong> ${el.director} <br>
            <strong>Runtime:</strong> ${el.runtime} <br>
            <strong>Rating:</strong> ${el.rating} <br>
            <strong>Description:</strong> ${el.description}
        </p>
        <button onclick="deleteMovie(${el.id})">Delete ${el.title}</button>
        </div>`
        }).join('<hr>')
    })
    .catch(error => {
        console.log(error)
        return false
    })

  }

