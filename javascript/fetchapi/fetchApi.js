fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if(!response.ok){
            throw new Error("Network response error", response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("Users :", data);
    })
    .catch(error => {
        console.log("Error :", error);
    });

async function addUser(){
    const user = {
        name: "Sravani",
        email: "sravani@gmail.com",
        city: "Hyderabad"
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        heders: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();
    console.log("Created User: ", data);
}

addUser();

