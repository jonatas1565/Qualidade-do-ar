const url = "http://api.airvisual.com/v2/countries?key=bd7c2b51-85c9-4406-b7f7-76bfe8292790"

function getUser(){
    axios.get(url)
    .then(response => {
       const data = response.data
       teste.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

// getUser()


