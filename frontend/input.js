const postUser = async () => {

    let dataObj = {
        "fname": document.getElementById('fname').value,
        "lname": document.getElementById('lname').value,
        "email": document.getElementById('email').value,
        "password": document.getElementById('pwd').value
    }
    console.log('!@-------form data-------@!')
    console.log(dataObj)
    
   
   fetch("http://localhost:3001/users/name", {
        method: 'POST',
        mode: 'cors', // this cannot be 'no-cors'
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
      
 
   
    // (C) PREVENT HTML FORM SUBMIT
    return false;
  }