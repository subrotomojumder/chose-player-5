// work-1
// player name to show in selection list
const playersNames = [];

const playerSelectionElement =  document.getElementById('select-player');
function showSelectionList(namesArray) {
    playerSelectionElement.innerHTML = '';

    for (const name of namesArray) {
        const nameList = name;
        const li = document.createElement('li');
        li.classList.add('h5');
        li.innerText = nameList;
        playerSelectionElement.appendChild(li);
    }
}

function addBtn(event) {   
    const playerName = event.target.parentNode.children[0].innerText;
    if (playersNames.length < 5) {
        playersNames.push(playerName);
    }
    else{
        alert('Sorry!! you can select maximum five members');
        return;
    }
    showSelectionList(playersNames);

    // do button disabled
    const selectBtn = event.target;
    selectBtn.setAttribute('disabled', true);    
}

// work-2
// calculate total expenses part
function getInputValueById(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputValue = parseInt(inputElement.value);
    return inputValue;
}
function setElementTextById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}

document.getElementById('sub-calculate-btn').addEventListener('click', function () {
    // calculate sub total
    const numberOfPlayer = playersNames.length; 
    const perPlayerExpense = getInputValueById('per-player');
    if (isNaN(perPlayerExpense) || perPlayerExpense < 0) {
        alert('Please enter the positive numbers!');
        return;
    }
    const totalPlayerExpenses = perPlayerExpense * numberOfPlayer;
    setElementTextById('player-expense-total', totalPlayerExpenses);
})
document.getElementById('final-total-btn').addEventListener('click', function () {
    // calculate final total 
    const playersExpensesElement = document.getElementById('player-expense-total');
    const totalPlayerExpenses = parseInt(playersExpensesElement.innerText);
    const managerExpense = getInputValueById('manager-salary');
    const coachExpense = getInputValueById('coach-salary');
    if (isNaN( managerExpense) || managerExpense < 0 && isNaN(coachExpense) || coachExpense < 0) {
        alert('Please enter the positive numbers!');
        return;
    }
    const totalExpenses = totalPlayerExpenses + managerExpense + coachExpense;
    setElementTextById('total-expenses', totalExpenses);
})