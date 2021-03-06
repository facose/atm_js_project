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

    const account = {};
    const user = document.getElementById("username").value.toLowerCase();
    const pass = document.getElementById("password").value.toLowerCase();

    if (user === account1.username && pass === account1.password ) {
        home();
        return account = account1

    } else if (user === account2.username && pass === account2.password) {
        home();
        return account = account2

    } else if (user === account3.username && pass === account3.password) {
        home();
        return account = account3

    } else {
        invalidInfo();
    }
}


const home = () => {

    window.location.href = "home.html";

    
    // const body = document.body;

    // form = body.childNodes[5];
    // form.remove();

    // const div = document.createElement("DIV");
    // div.classList.add("home");
    
    // const btn1 = document.createElement("BUTTON");
    // btn1.innerHTML = "Consulta";
    // btn1.classList.add("button");
    // btn1.setAttribute("id", "balance");

    // const btn2 = document.createElement("BUTTON");
    // btn2.innerHTML = "Retiro";
    // btn2.classList.add("button");
    // btn2.setAttribute("id", "withdraw");
    
    // const btn3 = document.createElement("BUTTON");
    // btn3.innerHTML = "Deposito";
    // btn3.classList.add("button");
    // btn3.setAttribute("id", "deposit");

    // div.append(btn1, btn2, btn3)
    // body.insertBefore(div, body.childNodes[4]);

    // addEvents(account);
}

const balance = () => {
    console.log(account.username)
}

const withdraw = () => {

}

const deposit = () => {

}

