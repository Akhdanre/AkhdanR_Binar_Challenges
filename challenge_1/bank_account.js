let userName = window.prompt("hello, whats your name")

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
    showMessage("increase", value)
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
        showMessage("decrease", value)
    }
}

function getBalanceText() {
    return "Your balance now Rp." + saldo + "\n"
}


function showMessage(category, value) {
    alert(`${category} balance Rp. ${value} Success, your balance now Rp.${saldo}`)
}


if (userName != "" && userName != null) {
    let valid = true
    while (valid) {
        let option = window.prompt(`Hallo ${userName} \n${getBalanceText()} \nchoose your option \ntype 1 if you want to increase saldo \ntype 2 if your want to decrease \ntype 99 to exit`)

        switch (parseInt(option)) {
            case 1:
                tambahSaldo()
                break
            case 2:
                kurangiSaldo()
                break
            case 99:
                let isContinue = window.prompt(`Hallo ${userName} \n${getBalanceText()} \n Are your sure want to exit \ntype y to continue \ntype n to back`)
                if (isContinue == "y") {
                    alert(`thank you ${userName}, your account will reset`)
                    saldo = 0
                    valid = false
                    break
                } else {
                    continue
                }
            default:
                alert("option not found")
                continue
        }

    }
} else {
    alert("you dont register yet")
}






