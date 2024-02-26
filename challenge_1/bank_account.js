let userName = window.prompt("hello, whats your name ")

/*
    Deklarasikan variabel "saldo" dengan nilai awal
    (misalnya, 0) di dalam file tersebut.
*/
//global
var saldo = 0

/*
    Implementasikan fungsi "tambahSaldo()" yang
    akan menggunakan window.prompt() untuk
    meminta pengguna memasukkan jumlah saldo
    yang ingin ditambahkan.
*/
function tambahSaldo() {
    let value = window.prompt(getBalanceText() + "insert your value to increase balance")
    saldo += parseInt(value)
    showMessage("increase")
}

/*
    Implementasikan fungsi "kurangiSaldo()" yang
    akan menggunakan window.prompt() untuk
    meminta pengguna memasukkan jumlah saldo
    yang ingin dikurangi.
*/
function kurangiSaldo() {
    let value = window.prompt(getBalanceText() + "insert your value to decrease balance")
    if (value > saldo) {
        alert("sorry your balance now Rp." + saldo + " less than Rp." + value)
    } else {
        saldo -= parseInt(value)
        showMessage("decrease")
    }
}

function getBalanceText() {
    return "Your balance now Rp." + saldo + "\n"
}


function showMessage(category) {
    alert(`${category} done, your balance now Rp.${saldo}`)
}


if (userName != "" && userName != null) {

    let valid = true
    while (valid) {
        let option = window.prompt(`Hallo ${userName} \n${getBalanceText()} \nchoose your option \ntype 1 if you want to increase saldo \ntype 2 if your want to decrease`)

        switch (parseInt(option)) {
            case 1:
                tambahSaldo()
                break
            case 2:
                kurangiSaldo()
                break
            default:
                alert("option not found")
                valid = false
                continue
            // break
        }
        let isContinue = window.prompt(`Hallo ${userName} \n${getBalanceText()} \nwant to continue \ntype y to continue \ntype n to stop`)

        if (isContinue == "y") {
            continue
        } else {
            alert(`thank you ${userName}, your account will reset`)
            valid = false
            saldo = 0
        }
    }
} else {
    alert("you dont register yet")
}






