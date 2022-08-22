function selectedFive(elementId, fullName) {
    const selectedFive = document.getElementById(elementId);
    if (selectedFive.childElementCount >= 5) {
        alert("You can not add player more than Five");
        return;
    }
    else {
        const five = document.createElement('li');
        five.innerText = fullName;
        selectedFive.appendChild(five);
    }
    return selectedFive.childElementCount;
}

function disableBtn(elementId) {
    const disable = document.getElementById(elementId);
    disable.setAttribute('disabled', true);
}

document.getElementById('first-card-btn').addEventListener('click', function (event) {
    const name = document.getElementById('first-card-name');
    const fullName = name.innerText;

    selectedFive('selected-five', fullName);
    disableBtn('first-card-btn');
});

document.getElementById('second-card-btn').addEventListener('click', function (event) {
    const name = document.getElementById('second-card-name');
    const fullName = name.innerText;

    selectedFive('selected-five', fullName);
    disableBtn('second-card-btn');
});

document.getElementById('third-card-btn').addEventListener('click', function (event) {
    const name = document.getElementById('third-card-name');
    const fullName = name.innerText;

    selectedFive('selected-five', fullName);
    disableBtn('third-card-btn');
});

document.getElementById('fourth-card-btn').addEventListener('click', function (event) {
    const name = document.getElementById('fourth-card-name');
    const fullName = name.innerText;

    selectedFive('selected-five', fullName);
    disableBtn('fourth-card-btn');
});

document.getElementById('five-card-btn').addEventListener('click', function (event) {
    const name = document.getElementById('five-card-name');
    const fullName = name.innerText;

    selectedFive('selected-five', fullName);
    disableBtn('five-card-btn');
});

document.getElementById('six-card-btn').addEventListener('click', function (event) {
    const name = document.getElementById('six-card-name');
    const fullName = name.innerText;

    selectedFive('selected-five', fullName);
    disableBtn('six-card-btn');
});

document.getElementById('seven-card-btn').addEventListener('click', function (event) {
    const name = document.getElementById('seven-card-name');
    const fullName = name.innerText;

    selectedFive('selected-five', fullName);
    disableBtn('seven-card-btn');
});

document.getElementById('eight-card-btn').addEventListener('click', function (event) {
    const name = document.getElementById('eight-card-name');
    const fullName = name.innerText;

    selectedFive('selected-five', fullName);
    disableBtn('eight-card-btn');
});

document.getElementById('nine-card-btn').addEventListener('click', function (event) {
    const name = document.getElementById('nine-card-name');
    const fullName = name.innerText;

    selectedFive('selected-five', fullName);
    disableBtn('nine-card-btn');
});

//costing cal
function newCostPerPlayer(perPlayerCostvalue, selectedFivePlayerCount) {
    const newCost = perPlayerCostvalue * selectedFivePlayerCount;

    const playerExpense = document.getElementById('player-expense');
    playerExpense.innerText = newCost;

    //manager cost
    const managerCost = document.getElementById('manager-cost');
    const managerCostString = managerCost.value;
    const managerCostValue = parseInt(managerCostString);

    //coach cost
    const coachCost = document.getElementById('coach-cost');
    const coachCostString = coachCost.value;
    const coachCostValue = parseInt(coachCostString);

    const totalCost = newCost + managerCost + coachCost;
    return totalCost;
}

//calculate player cost
document.getElementById('calculate').addEventListener('click', function () {
    const selectedFivePlayer = document.getElementById('selected-five');
    const selectedFivePlayerCount = selectedFivePlayer.childElementCount;

    const perPlayerCost = document.getElementById('per-player-cost');
    const perPlayerCostString = perPlayerCost.value;
    const perPlayerCostvalue = parseInt(perPlayerCostString);
    if (isNaN(perPlayerCostvalue)) {
        alert("Please enter a valid number");
        return;
    }
    newCostPerPlayer(perPlayerCostvalue, selectedFivePlayerCount);
});


//total cost
document.getElementById('total-all-cost').addEventListener('click', function () {
    const calculateTotal = document.getElementById('calculate-total-cost');
    const totalCost = newCostPerPlayer();
    calculateTotal.innerText = totalCost;
});