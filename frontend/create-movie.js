const createMovie = async () => {

    let dataObj = {
        "title": document.getElementById('title').value,
        "director": document.getElementById('director').value,
        "runtime": parseInt(document.getElementById('runtime').value),
        "rating": parseFloat(document.getElementById('rating').value),
        "description": document.getElementById('description').value
    }
    console.log('!@-------form data-------@!')
    console.log(dataObj)
    
   
   fetch("http://localhost:3001/movies/create-movie", {
        method: 'POST',
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