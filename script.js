function getTotalNumberOfDraws() {
    //let numberOfPeriods = Number(document.getElementById('numberof').value);
    let numberOfPeriods = parseInt(document.getElementById('numberof').value, 10);
    console.log(typeof numberOfPeriods);
    let radios = document.getElementsByName('timespan');
    let partialNumberOfDraws;
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            partialNumberOfDraws = radios[i].value;
            break;
        }
    }
    return numberOfPeriods * partialNumberOfDraws;
}

function singleLotteryDraw() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let drawResultFinal;
    const drawResultInitial = getRandomIntInclusive(1, 13983816);
    if (drawResultInitial === 1) {
        drawResultFinal = 6;
    } 
    else if (drawResultInitial > 1 && drawResultInitial <= 259) {
        drawResultFinal = 5;
    }
    else if (drawResultInitial > 259 && drawResultInitial <= 13804) {
        drawResultFinal = 4;
    }
    else if (drawResultInitial > 13804 && drawResultInitial <= 260624) {
        drawResultFinal = 3;
    }
    else {
        drawResultFinal = 0;
    }
    return drawResultFinal;
}


function lotterySimulation (numberOfDraws) {
    let financialResult = 0;
    let threes = 0;
    let fours = 0;
    let fives = 0;
    let wins = 0;
    const drawCost = 3;
    let i;
    for (i = 0; i < numberOfDraws; i++) {
        financialResult-=drawCost;
        let result = singleLotteryDraw();
        switch (result) {
            case 0:
                break;
            case 3:
                financialResult+=24;
                threes+=1;
                break;
            case 4:
                financialResult+=171.16;
                fours+=1;
                break;
            case 5:
                financialResult+=5490.49;
                fives+=1;
                break;
            case 6:
                financialResult+=2000000;
                wins+=1;
                break;
        }
    }
    finalStatement = `Zagrałeś na loterii ${numberOfDraws} razy. Przez ten czas wygrałeś trójkę ${threes} razy, czwórkę ${fours} razy, piątkę ${fives} razy i szóstkę ${wins} razy. Ostatecznie Twój wynik finansowy to ${financialResult} zł.`
    return finalStatement;
}