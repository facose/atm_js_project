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

// Validating Data

const invalidInfo = () => {

    const para = document.createElement("p");
    para.classList.add("invalid");
    const text = document.createTextNode("Informacion invalida, intente de nuevo.");
    para.appendChild(text);

    const body = document.body;
    body.insertBefore(para, body.childNodes[2]);
}

const authenticate = () => {

    const user = document.getElementById("username").value.toLowerCase();
    const pass = document.getElementById("password").value.toLowerCase();

    if (user === account1.username && pass === account1.password ) {


    } else if (user === account2.username && pass === account2.password) {


    } else if (user === account3.username && pass === account3.password) {


    } else {
        invalidInfo();
    }
}



