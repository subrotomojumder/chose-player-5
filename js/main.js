// player name to show in selection list
const playersName = [];

const playerSelectionElement =  document.getElementById('select-player');
function showSelectionList(namesArray) {
    playerSelectionElement.innerHTML = '';

    for (const name of namesArray) {
        const nameList = name;
        const li = document.createElement('li');
        li.classList.add('h5')
        li.innerText = nameList;
        playerSelectionElement.appendChild(li);
    }
}

function addBtn(event) {
    const playerName = event.target.parentNode.children[0].innerText;
    playersName.push(playerName);

    showSelectionList(playersName)
}



