/* Dom
createAccount
deleteAccount
nameOfPerson
balance
transactions
deposit
withdraw
*/
let accountCreated = false;
let balance = 0;

const createAccount = document.getElementById('createAccount');
const deleteAccount = document.getElementById('deleteAccount');
const nameOfPerson = document.getElementById('nameOfPerson');
const transactions = document.getElementById('transactions');
const balanceDiv = document.getElementById('balance')
const depositBtn = document.getElementById('deposit');
const withdrawDiv = document.getElementById('withdraw');


const hasAccount = () => {
    if (accountCreated) {
        return true
    }
    transactions.innerText = `You need to create an account before proceeding.`
    return false;
}

const changeBalance = () => {
    let balance = Number(document.getElementById('balance').innerText);
    return balance;
}

const changeBalanceDepo = (amount) => {
    let balance = Number(document.getElementById('balance').innerText);
    balanceDiv.innerText = balance + Number(amount);
}

const changeBalanceWithdraw = (amount) => {
    let balance = Number(document.getElementById('balance').innerText);
    balanceDiv.innerText = balance - Number(amount);

}

const accountCreating = () => {
    if (accountCreated) {
        transactions.innerText = `You already created an account`;
    } else if ( accountCreated == false) {
        const username = prompt('What\'s your name?')
        if (username.trim().length === 0) {
            transactions.innerText = `You didn't enter your name.`;
        } else {
        nameOfPerson.innerText = `${username}`;
        balanceDiv.innerText = `${balance}`
        transactions.innerText = `Account "${username}" created successfully.`
        accountCreated = true;
        }
    }
}

const accountDeleting = () => {
    if (hasAccount()) {
    accountCreated = false;
    nameOfPerson.innerText = '';
    balanceDiv.innerText = '';
    transactions.innerText = 'Account deleted successfully.'
    }
}

const amountDeposit = () => {
    if (hasAccount()){
    const amount = prompt('How much you want to deposit?');
    if (isNaN(amount)) {
        transactions.innerText = `Invalid amount.`;
    } else {
    changeBalanceDepo(amount);
    transactions.innerText = `Deposited: ₹${amount}`;
    }
}
}

const amountWithraw = () => {
    if (hasAccount()) {
    const amount = prompt('How much you want to withdraw?');
    if (isNaN(amount)) {
        transactions.innerText = `Invalid amount.`
    } else {
    if (amount - changeBalance() > 0) {
        transactions.innerText = 'You can\'t withdraw more than your balance.'
    } else {
    changeBalanceWithdraw(amount);
    transactions.innerText = `Withdrawn: ₹${amount}`
    }
}
    }
}

createAccount.onclick = () => accountCreating();
deleteAccount.onclick = () => accountDeleting();
withdrawDiv.onclick = () => amountWithraw();
depositBtn.onclick = () => amountDeposit();
