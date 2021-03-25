// Declaring class and instantiating objects
class Account{
    constructor(username, password, balance) {
        this.username = username;
        this.password = password;
        this.balance = balance;
    }

    transfer(amount, destinationAcc) {
        this.balance -= amount;
        destinationAcc.balance += amount;
        console.log("Transferencia exitosa")
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposito realizado con exito.");
    }

    withdraw(amount) {
        this.balance -= amount;
        console.log("Retiro exitoso.")
    }
}

const account1 = new Account("maui", "maui123", 500);
const account2 = new Account("dany", "dany123", 800);
const account3 = new Account("gus", "gus123", 1000);

// Getting autentication params from query string

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const username = urlParams.get("username").toLowerCase();
const password = urlParams.get("password").toLowerCase();

// Validating Data

const home = () => {
    window.location = "./home.html";
}

const invalidInfo = () => {

    const para = document.createElement("p");
    para.classList.add("invalid");
    const text = document.createTextNode("Informacion invalida, intente de nuevo.");
    para.appendChild(text);

    const body = document.body;
    body.insertBefore(para, body.childNodes[2]);
}

const authenticate = () => {
    if (username === account1.username && password === account1.password || username === account2.username && password === account2.password || username === account3.username && password === account3.password) {
        home();
    } else if (username && password){
        invalidInfo();

        const uri = window.location.toString();

        if (uri.indexOf("?") > 0) {
        const clean_uri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, clean_uri);
}
    }
}

// Calling function to authenticate

authenticate()



