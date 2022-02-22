const updateMovie = async () => {
    let dataObj = new Object
    dataObj.id = parseInt(document.querySelector('th').id)
    document.getElementById('title').value === '' ? dataObj.title = document.getElementById('title').placeholder : dataObj.title = document.getElementById('title').value
    document.getElementById('director').value === '' ? dataObj.director = document.getElementById('director').placeholder : dataObj.director = document.getElementById('director').value
    document.getElementById('runtime').value === '' ? dataObj.runtime = parseInt(document.getElementById('runtime').placeholder) : dataObj.runtime = parseInt(document.getElementById('runtime').value)
    document.getElementById('rating').value === '' ? dataObj.rating = parseFloat(document.getElementById('rating').placeholder) : dataObj.rating = parseFloat(document.getElementById('rating').value)
    document.getElementById('description').value === '' ? dataObj.description = document.getElementById('description').placeholder : dataObj.description = document.getElementById('description').value

    console.log('!@-------form data-------@!')
    console.log(dataObj)

   fetch("http://localhost:3001/movies/update-movie", {
        method: 'PUT',
        mode: 'cors',
        headers:{          
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
        body: JSON.stringify(dataObj)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status code: ${response.status}`)
        } else {
            return response.text()
        }
    })
    .then(res => {
        console.log('!@-------Response OK-------@!')
        console.log(res);
        document.querySelector('#responseH2').innerHTML = res
    })
    .catch(error => {
        console.log(error)
        return false
    })

    return false;
  }

  const editMovie = (param) => {
      fetch("http://localhost:3001/movies/get-one-movie", {
        method: 'POST',
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
        let data = JSON.parse(res)
        document.querySelector('th').id = data.id
        document.getElementById('title').placeholder = data.title
        document.getElementById('director').placeholder = data.director,
        document.getElementById('runtime').placeholder = data.runtime,
        document.getElementById('rating').placeholder = data.rating,
        document.getElementById('description').placeholder = data.description
    })
    .catch(error => {
        console.log(error)
        return false
    })
  }

  const getMovieList = async () => {

    fetch("http://localhost:3001/movies/get-all-movies")
     .then(response => {
         if (!response.ok) {
             throw new Error(`HTTP error! status code: ${response.status}`)
         } else {
             return response.json()
         }
     })
     .then(res => {
         document.querySelector('#movielist').innerHTML = res.map(e => {
             return `<button onclick="editMovie(${e.id})">${e.title}</button>`
         })
     })
     .catch(error => {
         console.log(error)
         return false
     })
 
   }