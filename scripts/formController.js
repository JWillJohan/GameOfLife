var infoIndex = 0;
var day = 0;
var daysLeft = 0;
var totDays = 0;
var pList = [];
var tod = 0;
var quit = false;
var index = 0;
var propsList = [];

var BUSINESS_EDU = 400;
var CULINARY_EDU = 100;
var LAWENF_EDU = 200;
var EDUCATION_EDU = 400;
var AERO_EDU = 300;
var SPORTS_EDU = 300;
var MEDIC_EDU = 500;
var SPEECH_EDU = 100;
var COMP_EDU = 300;

var SOME = 0.3;
var MOST = 0.7;

function onPageLoad()
{
    document.getElementById('nextBtn').onclick = onNextBtnClicked;
    document.getElementById('prevBtn').onclick = onPrevBtnClicked;
    document.getElementById('skipBtn').onclick = onSkipBtnClicked;
    document.getElementById('nextStepBtn').onclick = onNextStepBtnClicked;
    document.getElementById('playBtn').onclick = onPlayBtnClicked;

    clearCenterBox();

    var message = setInfoMsgAt(0);
    
    document.getElementById('infoMsg').innerHTML = message;
    document.getElementById('centerHeader').innerHTML = "Getting Started";
    document.getElementById('centerMsg').innerHTML = "This game supports up to eight players. Please select your colors.";
    document.getElementById('gameOverviewArrow').style.visibility = "hidden";
    document.getElementById('playerInfoArrow').style.visibility = "hidden";

    document.getElementById('blackCharCheck').style.visibility = "hidden";
    document.getElementById('redCharCheck').style.visibility = "hidden";
    document.getElementById('blueCharCheck').style.visibility = "hidden";
    document.getElementById('greenCharCheck').style.visibility = "hidden";
    document.getElementById('yellowCharCheck').style.visibility = "hidden";
    document.getElementById('pinkCharCheck').style.visibility = "hidden";
    document.getElementById('purpleCharCheck').style.visibility = "hidden";
    document.getElementById('orangeCharCheck').style.visibility = "hidden";

    document.getElementById('blackChar').style.cursor = "pointer";
    document.getElementById('redChar').style.cursor = "pointer";
    document.getElementById('blueChar').style.cursor = "pointer";
    document.getElementById('greenChar').style.cursor = "pointer";
    document.getElementById('yellowChar').style.cursor = "pointer";
    document.getElementById('pinkChar').style.cursor = "pointer";
    document.getElementById('purpleChar').style.cursor = "pointer";
    document.getElementById('orangeChar').style.cursor = "pointer";

    document.getElementById('townhallIcon').style.cursor = "pointer";
    document.getElementById('policeIcon').style.cursor = "pointer";
    document.getElementById('bankIcon').style.cursor = "pointer";
    document.getElementById('sportsIcon').style.cursor = "pointer";
    document.getElementById('schoolIcon').style.cursor = "pointer";
    document.getElementById('newsIcon').style.cursor = "pointer";
    document.getElementById('realtorIcon').style.cursor = "pointer";
    document.getElementById('apartmentIcon').style.cursor = "pointer";
    document.getElementById('insurCompIcon').style.cursor = "pointer";
    document.getElementById('suburbsIcon').style.cursor = "pointer";
    document.getElementById('techCompIcon').style.cursor = "pointer";
    document.getElementById('templeIcon').style.cursor = "pointer";
    document.getElementById('restaurantIcon').style.cursor = "pointer";
    document.getElementById('mallIcon').style.cursor = "pointer";
    document.getElementById('airportIcon').style.cursor = "pointer";
    document.getElementById('hospitalIcon').style.cursor = "pointer";

    document.getElementById('blackChar').onclick = function() { onCharSelect('black') };
    document.getElementById('redChar').onclick = function() { onCharSelect('red') };
    document.getElementById('blueChar').onclick = function() { onCharSelect('blue') };
    document.getElementById('greenChar').onclick = function() { onCharSelect('green') };
    document.getElementById('yellowChar').onclick = function() { onCharSelect('yellow') };
    document.getElementById('pinkChar').onclick = function() { onCharSelect('pink') };
    document.getElementById('purpleChar').onclick = function() { onCharSelect('purple') };
    document.getElementById('orangeChar').onclick = function() { onCharSelect('orange') };

    document.getElementById('gettingStarted1').style.display = "block";
}

function onNextBtnClicked()
{
    if(infoIndex < 4)
    {
        ++infoIndex;
        var message = setInfoMsgAt(infoIndex);
        document.getElementById('infoMsg').innerHTML = message;
        if(infoIndex == 4){
            document.getElementById('skipBtn').style.visibility = "hidden";
        }
    }
}

function onPrevBtnClicked()
{
    if(infoIndex > 0 && infoIndex <= 4)
    {
        --infoIndex;
        var message = setInfoMsgAt(infoIndex);
        document.getElementById('infoMsg').innerHTML = message;
        if(infoIndex != 4){
            document.getElementById('skipBtn').style.visibility = "visible";
        }
    }
}

function onSkipBtnClicked()
{
    infoIndex = 4;
    var message = setInfoMsgAt(infoIndex);
    document.getElementById('infoMsg').innerHTML = message;
    document.getElementById('skipBtn').style.visibility = "hidden";
}

function onCharSelect(color)
{
    document.getElementById(color + 'CharCheck').style.visibility = "visible";
    createPlayer(color);
    document.getElementById(color + 'Char').onclick = function () { onCharDeselect(color) };
}

function onCharDeselect(color)
{
    document.getElementById(color + 'CharCheck').style.visibility = "hidden";
    deletePlayer(color);
    document.getElementById(color + 'Char').onclick = function () { onCharSelect(color) };
}

function onNextStepBtnClicked()
{
    var counter = 0;
    var players = getPlayerList();

    for(x in players){
        if(players[x].exist == true){
            ++counter;
        }
    }

    if(counter == 0){
        document.getElementById('centerError').innerHTML = "You did not select any players!";
        return;
    }
    else{
        document.getElementById('centerError').innerHTML = "";
        document.getElementById('totalPlayers').innerHTML = "" + counter;

        clearCenterBox();
        document.getElementById('gettingStarted2').style.display = "block";
        document.getElementById('centerMsg').innerHTML = "How long would you like the game to last?"
    }
}

function clearCenterBox()
{
    document.getElementById('gettingStarted1').style.display = "none";
    document.getElementById('gettingStarted2').style.display = "none";
    document.getElementById('townhallIconCenter1').style.display = "none";
    document.getElementById('townhallIconCenter2').style.display = "none";
    document.getElementById('townhallIconCenter2-1').style.display = "none";
    document.getElementById('townhallWorkBox').style.display = "none";
    document.getElementById('policeIconCenter1').style.display = "none";
    document.getElementById('policeIconCenter2').style.display = "none";
    document.getElementById('policeIconCenter2-1').style.display = "none";
    document.getElementById('policeIconCenter2-2').style.display = "none";
    document.getElementById('policeWorkBox').style.display = "none";
    document.getElementById('bankIconCenter1').style.display = "none";
    document.getElementById('bankIconCenter2').style.display = "none";
    document.getElementById('bankIconCenter2-1').style.display = "none";
    document.getElementById('bankIconCenter2-3').style.display = "none";
    document.getElementById('bankWorkBox').style.display = "none";
    document.getElementById('sportsIconCenter1').style.display = "none";
    document.getElementById('sportsIconCenter2').style.display = "none";
    document.getElementById('sportsIconCenter2-1').style.display = "none";
    document.getElementById('sportsIconCenter2-2').style.display = "none";
    document.getElementById('sportsIconCenter2-3').style.display = "none";
    document.getElementById('sportsWorkBox').style.display = "none";
    document.getElementById('schoolIconCenter1').style.display = "none";
    document.getElementById('schoolIconCenter2').style.display = "none";
    document.getElementById('schoolIconCenter3').style.display = "none";
    document.getElementById('schoolIconCenter4').style.display = "none";
    document.getElementById('schoolIconCenter4-1').style.display = "none";
    document.getElementById('schoolIconCenter4-2').style.display = "none";
    document.getElementById('schoolWorkBox').style.display = "none";
    document.getElementById('newsIconCenter1').style.display = "none";
    document.getElementById('newsIconCenter2').style.display = "none";
    document.getElementById('newsIconCenter2-1').style.display = "none";
    document.getElementById('newsIconCenter2-2').style.display = "none";
    document.getElementById('newsIconCenter2-3').style.display = "none";
    document.getElementById('newsWorkBox').style.display = "none";
    document.getElementById('realtorIconCenter1').style.display = "none";
    document.getElementById('realtorIconCenter1-1').style.display = "none";
    document.getElementById('apartmentIconCenter1').style.display = "none";
    document.getElementById('apartmentIconCenter2').style.display = "none";
    document.getElementById('apartmentIconCenter3').style.display = "none";
    document.getElementById('insurCompIconCenter1').style.display = "none";
    document.getElementById('insurCompIconCenter2').style.display = "none";
    document.getElementById('insurCompIconCenter2-1').style.display = "none";
    document.getElementById('insurCompIconCenter2-2').style.display = "none";
    document.getElementById('insurWorkBox').style.display = "none";
    document.getElementById('techCompIconCenter1').style.display = "none";
    document.getElementById('techCompIconCenter2').style.display = "none";
    document.getElementById('techCompIconCenter2-1').style.display = "none";
    document.getElementById('techCompIconCenter2-2').style.display = "none";
    document.getElementById('techWorkBox').style.display = "none";
    document.getElementById('suburbsIconCenter1').style.display = "none";
    document.getElementById('suburbsIconCenter3').style.display = "none";
    document.getElementById('techCompIconCenter1').style.display = "none";
    document.getElementById('templeIconCenter1').style.display = "none";
    document.getElementById('restaurantIconCenter1').style.display = "none";
    document.getElementById('restaurantIconCenter2').style.display = "none";
    document.getElementById('restaurantIconCenter2-1').style.display = "none";
    document.getElementById('restaurantIconCenter2-2').style.display = "none";
    document.getElementById('restWorkBox').style.display = "none";
    document.getElementById('mallIconCenter1').style.display = "none";
    document.getElementById('mallIconCenter2').style.display = "none";
    document.getElementById('mallIconCenter2-1').style.display = "none";
    document.getElementById('mallIconCenter2-3').style.display = "none";
    document.getElementById('mallWorkBox').style.display = "none";
    document.getElementById('airportIconCenter1').style.display = "none";
    document.getElementById('airportIconCenter2').style.display = "none";
    document.getElementById('airportIconCenter2-1').style.display = "none";
    document.getElementById('airportIconCenter2-2').style.display = "none";
    document.getElementById('airportIconCenter2-3').style.display = "none";
    document.getElementById('airportWorkBox').style.display = "none";
    document.getElementById('hospitalIconCenter1').style.display = "none";
    document.getElementById('hospitalIconCenter2').style.display = "none";
    document.getElementById('hospitalIconCenter2-1').style.display = "none";
    document.getElementById('hospitalIconCenter2-2').style.display = "none";
    document.getElementById('hospitalWorkBox').style.display = "none";
}

function onPlayBtnClicked()
{
    var players = getPlayerList();
    var pCounter = 0;
    var order = "";
    var form = document.forms['gameLengthForm'];

    if(form.short.checked == false && form.medium.checked == false && form.long.checked == false && form.unlimited.checked == false){
        document.getElementById('centerError').innerHTML = "Please select one of the following.";
    }
    else{
        document.getElementById('centerError').innerHTML = "";
        day = 0;
        daysLeft = calcDaysLeft();
        totDays = daysLeft;

        if(daysLeft == -2){
            var temp = "Unlimited";
        }
        else{
            var temp = daysLeft;
        }

        document.getElementById('totalDays').innerHTML = "" + day;
        document.getElementById('daysLeft').innerHTML = "" + temp;
        
        for(x in players){
            if(players[x].exist == true){
                pList[pCounter] = players[x];
                ++pCounter;
            }
        }

        for(x in pList){
            order = order + pList[x].color + ", ";
        }

        document.getElementById('playerOrder').innerHTML = order;
        document.getElementById('endTurnBtn').onclick = onEndTurnBtnClicked;
        propsList = getPropertyList();

        playGame();
    }
}

function playGame()
{
    if(tod == 6 || quit == true){
        if(index == pList.length - 1){
            ++day;
            --daysLeft;
            document.getElementById('totalDays').innerHTML = day;
            if(totDays != -2){
                document.getElementById('daysLeft').innerHTML = daysLeft;
            }
            tod = 0;
            updateClock();
            randomizePropertyPrice();
            index = 0;
            activateTurn(pList[index]);
        }
        else{
            tod = 0;
            updateClock();
            ++index;
            activateTurn(pList[index]);
        }
    }
    else{
        updateClock();
        randomizePropertyPrice();
        updatePlayerInfo(pList[index]);
        activateTurn(pList[index]);
    }
}

function updatePlayerInfo(player)
{
    document.getElementById('playerImg').innerHTML = "<img src='img/" + player.color + "Char.png' id='" + player.color + "CharImg'>";
    document.getElementById('playerColor').innerHTML = player.color;
    document.getElementById('playerMoney').innerHTML = player.money;
    document.getElementById('playerJob').innerHTML = player.employ;
    document.getElementById('playerWage').innerHTML = player.wage;
    document.getElementById('playerMarital').innerHTML = (player.married ? "Married" : "Single");
    document.getElementById('playerChild').innerHTML = player.kids;
    document.getElementById('playerIncome').innerHTML = player.income;
    document.getElementById('playerExpense').innerHTML = player.expense;

    if(player.energy == 1){
        alert("Be careful! If you don't get sleep soon, you'll pass out and your turn will be skipped!");
    }
    else if(player.energy <= 0){
        alert("You passed out from exhaustion. Your next turn will be skipped.");
        player.skip = true;
        player.energy = 10;
    }
    else if(player.energy > 10){
        player.energy = 10;
    }
}

function activateTurn(player)
{
    quit = false;

    if(day >= totDays && totDays != -2){
        endGame();
    }
    else if(player.skip == true){
        player.skip = false;
        onEndTurnBtnClicked();
    }
    else{
        updatePlayerInfo(player);

        document.getElementById('townhallIcon').onclick = function () { onTownhallIconClicked(player) };
        document.getElementById('policeIcon').onclick = function () { onPoliceIconClicked(player) };
        document.getElementById('bankIcon').onclick = function () { onBankIconClicked(player) };
        document.getElementById('sportsIcon').onclick = function () { onSportsIconClicked(player) };
        document.getElementById('schoolIcon').onclick = function () { onSchoolIconClicked(player) };
        document.getElementById('newsIcon').onclick = function () { onNewsIconClicked(player) };
        document.getElementById('realtorIcon').onclick = function () { onRealtorIconClicked(player) };
        document.getElementById('apartmentIcon').onclick = function () { onApartmentIconClicked(player) };
        document.getElementById('insurCompIcon').onclick = function () { onInsurCompIconClicked(player) };
        document.getElementById('suburbsIcon').onclick = function () { onSuburbsIconClicked(player) };
        document.getElementById('techCompIcon').onclick = function () { onTechCompIconClicked(player) };
        document.getElementById('templeIcon').onclick = function () { onTempleIconClicked(player) };
        document.getElementById('restaurantIcon').onclick = function () { onRestaurantIconClicked(player) };
        document.getElementById('mallIcon').onclick = function () { onMallIconClicked(player) };
        document.getElementById('airportIcon').onclick = function () { onAirportIconClicked(player) };
        document.getElementById('hospitalIcon').onclick = function () { onHospitalIconClicked(player) };

        clearCenterBox();
        document.getElementById('centerHeader').innerHTML = "";
        document.getElementById('centerMsg').innerHTML = "";
        document.getElementById('centerError').innerHTML = "";
    }
}

function onEndTurnBtnClicked()
{
    quit = true;
    playGame();
}

function updateClock()
{
    switch(tod){
        case 0:
            document.getElementById('clock').innerHTML = "<b>Early Morning</b>";
            break;
        case 1:
            document.getElementById('clock').innerHTML = "<b>Morning</b>";
            break;
        case 2:
            document.getElementById('clock').innerHTML = "<b>Afternoon</b>";
            break;
        case 3:
            document.getElementById('clock').innerHTML = "<b>Evening</b>";
            break;
        case 4:
            document.getElementById('clock').innerHTML = "<b>Night</b>";
            break;
        case 5:
            document.getElementById('clock').innerHTML = "<b>Late Night</b>";
            break;
    }
}

function randomizePropertyPrice()
{
    for(x in propsList){
        var p = (Math.random() * 200000).toFixed(0);
        while(p < 95000){
            p = (Math.random() * 200000).toFixed(0);
        }
        propsList[x].price = p;
    }
}

function checkTOD()
{
    updateClock();
    if(tod == 6){
        playGame();
        return true;
    }
}

function endGame()
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "The End";
    document.getElementById('centerMsg').innerHTML = "Thanks for playing!!!!";
    document.getElementById('totalDays').innerHTML = totDays;
    document.getElementById('daysLeft').innerHTML = "" + 0;
}

function onTownhallIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Town Hall";
    document.getElementById('centerMsg').innerHTML = "I'm not a crook";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('townhallIconCenter1').style.display = "block";

    if(checkTownhallEmployment(player)){
        document.getElementById('townhallClockinBtn').style.display = "block";
        document.getElementById('townhallClockinBtn').onclick = function () { onTownhallWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('townhallClockinBtn').style.display = "none";
    }
    
    document.getElementById('townhallHireBtn').onclick = function () { onTownhallHireBtnClicked(player) };
}

function checkTownhallEmployment(player)
{
    if( player.employ == "Secretary at Town Hall" ||
        player.employ == "Campaign Manager at Town Hall" ||
        player.employ == "Treasurer at Town Hall" ||
        player.employ == "Mayor"){

            return true;
    }
    else{
        return false;
    }
}

function onTownhallHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Town Hall Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('townhallIconCenter2').style.display = "block";

    document.getElementById('townhallJobBtn').onclick = function () { onTownhallJobBtnClicked(player) };
}

function onTownhallJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Finance Experience: " + player.experience.finance + "  Public Sp. Exp.: " + player.experience.speech +
                                "  Management Exp.: " + player.experience.admin + "<br>Education Public Sp.: " + player.education.speechM + 
                                "  Education Business: " + player.education.businessM;
    document.getElementById('townhallIconCenter2-1').style.display = "block";

    document.getElementById('townhallSecre').style.cursor = "pointer";
    document.getElementById('townhallCamp').style.cursor = "pointer";
    document.getElementById('townhallTrea').style.cursor = "pointer";
    document.getElementById('townhallMayor').style.cursor = "pointer";

    document.getElementById('townhallSecre').onclick = function onTownhallSecreClicked()
    {
        if(player.experience.speech >= (100 * SOME)){
            player.employ = "Secretary at Town Hall";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }    
    };

    document.getElementById('townhallCamp').onclick = function onTownhallCampClicked()
    {
        if(player.experience.admin >= (100 * SOME) && player.education.businessM >= (MOST * BUSINESS_EDU)){
            player.employ = "Campaign Manager at Town Hall";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('townhallTrea').onclick = function onTownhallTreaClicked()
    {
        if(player.experience.finance >= 100 && player.education.businessM >= BUSINESS_EDU && player.experience.admin >= 100){
            player.employ = "Treasurer at Town Hall";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('townhallMayor').onclick = function onTownhallMayorClicked()
    {
        if(player.education.speechM >= SPEECH_EDU && player.experience.speech >= 200){
            player.employ = "Mayor";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onTownhallWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Public Speaking Experience: " + player.experience.speech + "<br>Finance Experience: " + player.experience.finance;
    document.getElementById('townhallWorkBox').style.display = "block";

    document.getElementById('townhallWorkBtn').onclick = function onTownhallWorkBtnClicked()
    {
        if( player.employ == "Campaign Manager at Town Hall" ||
            player.employ == "Treasurer at Town Hall" ||
            player.employ == "Mayor"){

            player.experience.admin += 1;

            if(player.employ == "Treasurer at Town Hall"){
                player.experience.finance += 1;
            }
            else if(player.employ == "Mayor"){
                player.experience.speech += 1;
            }
        }
        else{
            player.experience.speech += 1;
        }

        player.money += player.wage;
        --player.energy;
        updatePlayerInfo(player);
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false)
            onTownhallWorkerBtnClicked(player);
        else {
            onEndTurnBtnClicked();
        }
    };
}

function onPoliceIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Police Station";
    document.getElementById('centerMsg').innerHTML = "What you say can and will be held against you in a court of law";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('policeIconCenter1').style.display = "block";

    if(checkPoliceEmployment(player)){
        document.getElementById('policeClockinBtn').style.display = "block";
        document.getElementById('policeClockinBtn').onclick = function () { onPoliceWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('policeClockinBtn').style.display = "none";
    }
    
    document.getElementById('policeHireBtn').onclick = function () { onPoliceHireBtnClicked(player) };
}

function checkPoliceEmployment(player)
{
    if( player.employ == "Deputy at the Police Station" ||
        player.employ == "Sergeant at the Police Station" ||
        player.employ == "Lieutenant at the Police Station" ||
        player.employ == "Captain at the Police Station" ||
        player.employ == "Accountant at the Police Station" ||
        player.employ == "Office Admin at the Police Station" ||
        player.employ == "Assistant Director at the Police Station" ||
        player.employ == "Department Director at the Police Station"){

            return true;
    }
    else{
        return false;
    }
}

function onPoliceHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Police Station Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('policeIconCenter2').style.display = "block";

    document.getElementById('policeJobBtn').onclick = function () { onPoliceJobBtnClicked(player) };
    document.getElementById('policeAdminBtn').onclick = function () { onPoliceAdminBtnClicked(player) };
}

function onPoliceJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in the industry: " + player.experience.law;
    document.getElementById('policeIconCenter2-1').style.display = "block";

    document.getElementById('policeDep').style.cursor = "pointer";
    document.getElementById('policeSrg').style.cursor = "pointer";
    document.getElementById('policeLtn').style.cursor = "pointer";
    document.getElementById('policeCpt').style.cursor = "pointer";

    document.getElementById('policeDep').onclick = function onPoliceDepClicked()
    {
        if(player.education.lawEnfM >= (SOME * LAWENF_EDU) || player.experience.law >= 30){
            player.employ = "Deputy at the Police Station";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }    
    };

    document.getElementById('policeSrg').onclick = function onPoliceSrgClicked()
    {
        if(player.experience.law >= 100 || player.education.lawEnfM >= (MOST * LAWENF_EDU)){
            player.employ = "Sergeant at the Police Station";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('policeLtn').onclick = function onPoliceLtnClicked()
    {
        if(player.education.lawEnfM >= LAWENF_EDU && player.experience.lawEnfM >= 100){
            player.employ = "Lieutenant at the Police Station";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('policeCpt').onclick = function onPoliceCptClicked()
    {
        if(player.education.lawEnfM >= LAWENF_EDU && player.experience.lawEnfM >= 200){
            player.employ = "Captain at the Police Station";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onPoliceAdminBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in management: " + player.experience.admin + 
            "<br>Your experience in the industry: " + player.experience.law +
            "<br>Your education in Business: " + player.education.businessM;
    document.getElementById('policeIconCenter2-2').style.display = "block";

    document.getElementById('policeAcc').style.cursor = "pointer";
    document.getElementById('policeAdmin').style.cursor = "pointer";
    document.getElementById('policeAss').style.cursor = "pointer";
    document.getElementById('policeDir').style.cursor = "pointer";

    document.getElementById('policeAcc').onclick = function onPoliceAccClicked()
    {
        if(player.education.businessM >= (BUSINESS_EDU * MOST)){
            player.employ = "Accountant at the Police Station";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('policeAdmin').onclick = function onPoliceAdminClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU || (player.education.businessM >= (EDUCATION_EDU * MOST) && player.experience.law >= (100 * SOME))){
            player.employ = "Office Admin at the Police Station";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('policeAss').onclick = function onPoliceAssClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && (player.experience.law >= (100 * SOME) || player.ecperience.admin >= 200)){
            player.employ = "Assistant Director at the Police Station";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('policeDir').onclick = function onPoliceDirClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && player.experience.law >= 100 && player.experience.admin >= 200){
            player.employ = "Department Director at the Police Station";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onPoliceWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Experience: " + player.experience.law;
    document.getElementById('policeWorkBox').style.display = "block";

    document.getElementById('policeWorkBtn').onclick = function onPoliceWorkBtnClicked()
    {
        if( player.employ == "Sergeant at the Police Station" ||
            player.employ == "Lieutenant at the Police Station" ||
            player.employ == "Captain at the Police Station" ||
            player.employ == "Accountant at the Police Station" ||
            player.employ == "Office Admin at the Police Station" ||
            player.employ == "Assistant Director at the Police Station" ||
            player.employ == "Department Director at the Police Station"){

                player.experience.admin += 1;
        }

        player.money += player.wage;
        player.experience.law += 1;
        --player.energy;
        updatePlayerInfo(player);
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false)
            onPoliceWorkerBtnClicked(player);
        else {
            onEndTurnBtnClicked();
        }
    };
}

function onBankIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Bank";
    document.getElementById('centerMsg').innerHTML = "Welcome to the bank, may I take your money?";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('bankIconCenter1').style.display = "block";

    if(checkBankEmployment(player)){
        document.getElementById('bankClockinBtn').style.display = "block";
        document.getElementById('bankClockinBtn').onclick = function () { onBankWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('bankClockinBtn').style.display = "none";
    }
    
    document.getElementById('bankHireBtn').onclick = function () { onBankHireBtnClicked(player) };
}

function checkBankEmployment(player)
{
    if( player.employ == "Teller at the Bank" ||
        player.employ == "Financial Advisor at the Bank" ||
        player.employ == "Finance Director at the Bank" ||
        player.employ == "Bank Manager" ||
        player.employ == "Security Guard at the Bank" ||
        player.employ == "Head of Security at the Bank"){

            return true;
    }
    else{
        return false;
    }
}

function onBankHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "News Station Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('bankIconCenter2').style.display = "block";

    document.getElementById('bankJobBtn').onclick = function () { onBankJobBtnClicked(player) };
    document.getElementById('bankSecBtn').onclick = function () { onBankSecBtnClicked(player) };
}

function onBankJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in the industry: " + player.experience.finance;
    document.getElementById('bankIconCenter2-1').style.display = "block";

    document.getElementById('bankTell').style.cursor = "pointer";
    document.getElementById('bankAdvisor').style.cursor = "pointer";
    document.getElementById('bankDir').style.cursor = "pointer";
    document.getElementById('bankMan').style.cursor = "pointer";

    document.getElementById('bankTell').onclick = function onBankTellClicked()
    {
        player.employ = "Teller at the Bank";
        player.wage = 10;
        updatePlayerInfo(player);
        document.getElementById('centerError').style.color = "green";
        document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('bankAdvisor').onclick = function onBankAdvisorClicked()
    {
        if(player.experience.finance >= (100 * SOME) && player.education.businessM >= (SOME * BUSINESS_EDU)){
            player.employ = "Financial Advisor at the Bank";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('bankDir').onclick = function onBankDirClicked()
    {
        if(player.experience.finance >= 100 && player.education.businessM >= (MOST * BUSINESS_EDU)){
            player.employ = "Finance Director at the Bank";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('bankMan').onclick = function onBankManClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && player.experience.finance >= 100){
            player.employ = "Bank Manager";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onBankSecBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in Law Enforcement: " + player.experience.law;
    document.getElementById('bankIconCenter2-3').style.display = "block";

    document.getElementById('bankGuard').style.cursor = "pointer";
    document.getElementById('bankSecur').style.cursor = "pointer";

    document.getElementById('bankGuard').onclick = function onBankGuardClicked()
    {
        player.employ = "Security Guard at the Bank";
        player.wage = 10;
        updatePlayerInfo(player);
        document.getElementById('centerError').style.color = "green";
        document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('bankSecur').onclick = function onBankSecurClicked()
    {
        if(player.experience.law >= 100){
            player.employ = "Head of Security at the Bank";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onBankWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Experience: " + player.experience.finance;
    document.getElementById('bankWorkBox').style.display = "block";

    document.getElementById('bankWorkBtn').onclick = function onBankWorkBtnClicked()
    {
        if( player.employ == "Finance Director at the Bank" ||
            player.employ == "Bank Manager" ||
            player.employ == "Head of Security at the Bank"){

                player.experience.admin += 1;
        }

        if(player.employ == "Security Guard at the Bank" ||
            player.employ == "Head of Security at the Bank"){
                player.experience.law += 1;
        }

        player.money += player.wage;
        player.experience.finance += 1;
        --player.energy;
        updatePlayerInfo(player);
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false)
            onBankWorkerBtnClicked(player);
        else {
            onEndTurnBtnClicked();
        }
    };
}

function onSportsIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Sports Center";
    document.getElementById('centerMsg').innerHTML = "Faster, stronger, better. Are you a sportsball fanatic?";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('sportsIconCenter1').style.display = "block";

    if(checkSportsEmployment(player)){
        document.getElementById('sportsClockinBtn').style.display = "block";
        document.getElementById('sportsClockinBtn').onclick = function () { onSportsWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('sportsClockinBtn').style.display = "none";
    }
    
    document.getElementById('sportsHireBtn').onclick = function () { onSportsHireBtnClicked(player) };
}

function checkSportsEmployment(player)
{
    if( player.employ == "Fanatic at the Sports Center" ||
        player.employ == "Semi-Pro Player at the Sports Center" ||
        player.employ == "Pro Player at the Sports Center" ||
        player.employ == "Coach at the Sports Center" ||
        player.employ == "Fan-Club Manager at the Sports Center" ||
        player.employ == "Team Admin at the Sports Center" ||
        player.employ == "Team Manager at the Sports Center" ||
        player.employ == "Sports Center Chairman" ||
        player.employ == "Security Guard at the Sports Center" ||
        player.employ == "Head of Security at the Sports Center"){

            return true;
    }
    else{
        return false;
    }
}

function onSportsHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Sports Center Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('sportsIconCenter2').style.display = "block";

    document.getElementById('sportsJobBtn').onclick = function () { onSportsJobBtnClicked(player) };
    document.getElementById('sportsAdminBtn').onclick = function () { onSportsAdminBtnClicked(player) };
    document.getElementById('sportsSecBtn').onclick = function () { onSportsSecBtnClicked(player) };
}

function onSportsJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in the industry: " + player.experience.athletic;
    document.getElementById('sportsIconCenter2-1').style.display = "block";

    document.getElementById('sportsFan').style.cursor = "pointer";
    document.getElementById('sportsSemi').style.cursor = "pointer";
    document.getElementById('sportsPro').style.cursor = "pointer";
    document.getElementById('sportsCoach').style.cursor = "pointer";

    document.getElementById('sportsFan').onclick = function onSportsFanClicked()
    {
            player.employ = "Fanatic at the Sports Center";
            player.wage = 0;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('sportsSemi').onclick = function onSportsSemiClicked()
    {
        if(player.experience.athletic >= (100 * SOME)){
            player.employ = "Semi-Pro Player at the Sports Center";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('sportsPro').onclick = function onSportsProClicked()
    {
        if(player.experience.athletic >= 200){
            player.employ = "Pro Player at the Sports Center";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('sportsCoach').onclick = function onSportsCoachClicked()
    {
        if(player.education.sportM >= SPORTS_EDU && player.experience.athletic >= 100){
            player.employ = "Coach at the Sports Center";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onSportsAdminBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in management: " + player.experience.admin + 
            "<br>Your experience in the industry: " + player.experience.athletic +
            "<br>Your education in Business: " + player.education.businessM;
    document.getElementById('newsIconCenter2-2').style.display = "block";

    document.getElementById('sportsClub').style.cursor = "pointer";
    document.getElementById('sportsAdmin').style.cursor = "pointer";
    document.getElementById('sportsMan').style.cursor = "pointer";
    document.getElementById('sportsChair').style.cursor = "pointer";

    document.getElementById('sportsClub').onclick = function onSportsClubClicked()
    {
        if(player.education.businessM >= (BUSINESS_EDU * MOST)){
            player.employ = "Fan-Club Manager at the Sports Center";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('sportsAdmin').onclick = function onSportsAdminClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU || (player.education.businessM >= (EDUCATION_EDU * MOST) && player.experience.athletic >= (100 * SOME))){
            player.employ = "Team Admin at the Sports Center";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('sportsMan').onclick = function onSportsManClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && (player.experience.athletic >= (100 * SOME) || player.ecperience.admin >= 200)){
            player.employ = "Team Manager at the Sports Center";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('sportsChair').onclick = function onSportsChairClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && player.experience.athletic >= 100 && player.experience.admin >= 200){
            player.employ = "Sports Center Chairman";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onSportsSecBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in Law Enforcement: " + player.experience.law;
    document.getElementById('sportsIconCenter2-3').style.display = "block";

    document.getElementById('sportsGuard').style.cursor = "pointer";
    document.getElementById('sportsSecur').style.cursor = "pointer";

    document.getElementById('sportsGuard').onclick = function onSportsGuardClicked()
    {
        player.employ = "Security Guard at the Sports Center";
        player.wage = 10;
        updatePlayerInfo(player);
        document.getElementById('centerError').style.color = "green";
        document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('sportsSecur').onclick = function onSportsSecurClicked()
    {
        if(player.experience.law >= 100){
            player.employ = "Head of Security at the Sports Center";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onSportsWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Experience: " + player.experience.athletic;
    document.getElementById('sportsWorkBox').style.display = "block";

    document.getElementById('sportsWorkBtn').onclick = function onSportsWorkBtnClicked()
    {
        if( player.employ == "Coach at the Sports Center" ||
            player.employ == "Fan-Club Manager at the Sports Center" ||
            player.employ == "Team Admin at the Sports Center" ||
            player.employ == "Team Manager at the Sports Center" ||
            player.employ == "Sports Center Chairman" ||
            player.employ == "Head of Security at the Sports Center"){

                player.experience.admin += 1;
        }

        if(player.employ == "Security Guard at the Sports Center" ||
            player.employ == "Head of Security at the Sports Center"){
                player.experience.law += 1;
        }

        player.money += player.wage;
        player.experience.athletic += 1;
        --player.energy;
        updatePlayerInfo(player);
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false)
            onSportsWorkerBtnClicked(player);
        else {
            onEndTurnBtnClicked();
        }
    };
}

function onSchoolIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "University";
    document.getElementById('centerMsg').innerHTML = "Choose your major and begin your studies. Knowledge is Power!";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('schoolIconCenter1').style.display = "block";

    if(player.education.major == true){
        document.getElementById('classBtn').style.display = "block";
        document.getElementById('chooseMajorLabel').innerHTML = "Change Major";
        document.getElementById('classBtn').onclick = function () { onClassBtnClicked(player) };
    }
    else{
        document.getElementById('classBtn').style.display = "none";
        document.getElementById('chooseMajorLabel').innerHTML = "Choose Major";
    }

    if(checkSchoolEmployment(player)){
        document.getElementById('schoolClockinBtn').style.display = "block";
        document.getElementById('schoolClockinBtn').onclick = function () { onSchoolWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('schoolClockinBtn').style.display = "none";
    }

    document.getElementById('schoolHireBtn').onclick = function () { onSchoolHireBtnClicked(player) };
    document.getElementById('chooseMajorBtn').onclick = function () { onChooseMajorBtnClicked(player) };
}

function checkSchoolEmployment(player)
{
    if(player.employ == "Teaching Aid at the University" ||
        player.employ == "Tutor at the University" ||
        player.employ == "Professor at the University" ||
        player.employ == "Department Head at the University" ||
        player.employ == "Accountant at the University" ||
        player.employ == "Department Administrator at the University" ||
        player.employ == "Board Member at the University" ||
        player.employ == "President of the University"){

            return true;
    }
    else{
        return false;
    }
}

function onSchoolHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "University Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('schoolIconCenter4').style.display = "block";

    document.getElementById('schoolJobBtn').onclick = function () { onSchoolJobBtnClicked(player) };
    document.getElementById('schoolAdminBtn').onclick = function () { onSchoolAdminBtnClicked(player) };
}

function onSchoolJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in the industry: " + player.experience.educate + 
            "<br>Your education in the industry: " + player.education.educationM;
    document.getElementById('schoolIconCenter4-1').style.display = "block";

    document.getElementById('schoolAid').style.cursor = "pointer";
    document.getElementById('schoolTutor').style.cursor = "pointer";
    document.getElementById('schoolProf').style.cursor = "pointer";
    document.getElementById('schoolHead').style.cursor = "pointer";

    document.getElementById('schoolAid').onclick = function onSchoolAidClicked()
    {
        if(player.education.educationM >= (EDUCATION_EDU * SOME)){
            player.employ = "Teaching Aid at the University";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('schoolTutor').onclick = function onSchoolTutorClicked()
    {
        if(player.education.educationM >= (EDUCATION_EDU * MOST) || (player.education.educationM >= (EDUCATION_EDU * SOME) && player.experience.educate >= (100 * SOME))){
            player.employ = "Tutor at the University";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('schoolProf').onclick = function onSchoolProfClicked()
    {
        if(player.education.educationM >= EDUCATION_EDU && player.experience.educate >= (100 * SOME)){
            player.employ = "Professor at the University";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('schoolHead').onclick = function onSchoolHeadClicked()
    {
        if(player.education.educationM >= EDUCATION_EDU && player.experience.educate >= 100){
            player.employ = "Department Head at the University";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onSchoolAdminBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in management: " + player.experience.admin + 
            "<br>Your experience in the industry: " + player.experience.educate +
            "<br>Your education in Business: " + player.education.businessM;
    document.getElementById('schoolIconCenter4-2').style.display = "block";

    document.getElementById('schoolAcc').style.cursor = "pointer";
    document.getElementById('schoolDepAdmin').style.cursor = "pointer";
    document.getElementById('schoolBoard').style.cursor = "pointer";
    document.getElementById('schoolPres').style.cursor = "pointer";

    document.getElementById('schoolAcc').onclick = function onSchoolAccClicked()
    {
        if(player.education.businessM >= (BUSINESS_EDU * MOST)){
            player.employ = "Accountant at the University";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('schoolDepAdmin').onclick = function onSchoolDepAdminClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU || (player.education.businessM >= (EDUCATION_EDU * MOST) && player.experience.educate >= (100 * SOME))){
            player.employ = "Department Administrator at the University";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('schoolBoard').onclick = function onSchoolBoardClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && (player.experience.educate >= (100 * SOME) || player.experience.admin >= 200)){
            player.employ = "Board Member at the University";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('schoolPres').onclick = function onSchoolPresClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && player.experience.educate >= 100 && player.experience.admin >= 200){
            player.employ = "President of the University";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onSchoolWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Experience: " + player.experience.educate;
    document.getElementById('schoolWorkBox').style.display = "block";

    document.getElementById('schoolWorkBtn').onclick = function onSchoolWorkBtnClicked()
    {
        if( player.employ == "Accountant at the University" ||
            player.employ == "Department Administrator at the University" ||
            player.employ == "Board Member at the University" ||
            player.employ == "President of the University" ||
            player.employ == "Professor at the University" ||
            player.employ == "Department Head at the University"){

                player.experience.admin += 1;
        }

        player.money += player.wage;
        player.experience.educate += 1;
        --player.energy;
        updatePlayerInfo(player);
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false)
            onSchoolWorkerBtnClicked(player);
        else {
            onEndTurnBtnClicked();
        }
    };
}

function onClassBtnClicked(player)
{
    clearCenterBox();
    switch(player.education.stringMajor){
        case 'business':
            document.getElementById('centerHeader').innerHTML = "Business/Finance Major";
            if(player.education.businessM < BUSINESS_EDU){
            document.getElementById('centerMsg').innerHTML = "Progress: " + player.education.businessM + " hours<br><br>Hours left: " + (BUSINESS_EDU - player.education.businessM) +
                        "<button type='button' id='studyBtn'>Study</button>";
            document.getElementById('studyBtn').onclick = function onStudyBtnClicked() { player.education.businessM+=4; --player.energy; updatePlayerInfo(player); ++tod; if(checkTOD()){return;} if(player.skip == false){ onClassBtnClicked(player); } else{ onEndTurnBtnClicked(); } };
            }
            else{
                document.getElementById('centerMsg').innerHTML = "CONGRATS!!! You've graduated with this major!";
            }
            break;
        case 'culinary':
            document.getElementById('centerHeader').innerHTML = "Culinary Arts Major";
            if(player.education.culinaryM < CULINARY_EDU){
            document.getElementById('centerMsg').innerHTML = "Progress: " + player.education.culinaryM + " hours<br><br>Hours left: " + (CULINARY_EDU - player.education.culinaryM) +
                        "<button type='button' id='studyBtn'>Study</button>";
            document.getElementById('studyBtn').onclick = function onStudyBtnClicked() { player.education.culinaryM+=4; --player.energy; updatePlayerInfo(player); ++tod; if(checkTOD()){return;} if(player.skip == false){ onClassBtnClicked(player); } else{ onEndTurnBtnClicked(); } };
            }
            else{
                document.getElementById('centerMsg').innerHTML = "CONGRATS!!! You've graduated with this major!";
            }
            break;
        case 'lawEnf':
            document.getElementById('centerHeader').innerHTML = "Law Enforcement Major";
            if(player.education.lawEnfM < LAWENF_EDU){
            document.getElementById('centerMsg').innerHTML = "Progress: " + player.education.lawEnfM + " hours<br><br>Hours left: " + (LAWENF_EDU - player.education.lawEnfM) +
                        "<button type='button' id='studyBtn'>Study</button>";
            document.getElementById('studyBtn').onclick = function onStudyBtnClicked() { player.education.lawEnfM+=4; --player.energy; updatePlayerInfo(player); ++tod; if(checkTOD()){return;} if(player.skip == false){ onClassBtnClicked(player); } else{ onEndTurnBtnClicked(); } };
            }
            else{
                document.getElementById('centerMsg').innerHTML = "CONGRATS!!! You've graduated with this major!";
            }
            break;
        case 'education':
            document.getElementById('centerHeader').innerHTML = "Education Major";
            if(player.education.educationM < EDUCATION_EDU){
            document.getElementById('centerMsg').innerHTML = "Progress: " + player.education.educationM + " hours<br><br>Hours left: " + (EDUCATION_EDU - player.education.educationM) +
                        "<button type='button' id='studyBtn'>Study</button>";
            document.getElementById('studyBtn').onclick = function onStudyBtnClicked() { player.education.educationM+=4; --player.energy; updatePlayerInfo(player); ++tod; if(checkTOD()){return;} if(player.skip == false){ onClassBtnClicked(player); } else{ onEndTurnBtnClicked(); } };
            }
            else{
                document.getElementById('centerMsg').innerHTML = "CONGRATS!!! You've graduated with this major!";
            }
            break;
        case 'sports':
            document.getElementById('centerHeader').innerHTML = "Sports Major";
            if(player.education.sportM < SPORTS_EDU){
            document.getElementById('centerMsg').innerHTML = "Progress: " + player.education.sportM + " hours<br><br>Hours left: " + (SPORTS_EDU - player.education.sportM) +
                        "<button type='button' id='studyBtn'>Study</button>";
            document.getElementById('studyBtn').onclick = function onStudyBtnClicked() { player.education.sportM+=4; --player.energy; updatePlayerInfo(player); ++tod; if(checkTOD()){return;} if(player.skip == false){ onClassBtnClicked(player); } else{ onEndTurnBtnClicked(); } };
            }
            else{
                document.getElementById('centerMsg').innerHTML = "CONGRATS!!! You've graduated with this major!";
            }
            break;
        case 'aero':
            document.getElementById('centerHeader').innerHTML = "Aeronautics Major";
            if(player.education.aeroM < AERO_EDU){
            document.getElementById('centerMsg').innerHTML = "Progress: " + player.education.aeroM + " hours<br><br>Hours left: " + (AERO_EDU - player.education.aeroM) +
                        "<button type='button' id='studyBtn'>Study</button>";
            document.getElementById('studyBtn').onclick = function onStudyBtnClicked() { player.education.aeroM+=4; --player.energy; updatePlayerInfo(player); ++tod; if(checkTOD()){return;} if(player.skip == false){ onClassBtnClicked(player); } else{ onEndTurnBtnClicked(); } };
            }
            else{
                document.getElementById('centerMsg').innerHTML = "CONGRATS!!! You've graduated with this major!";
            }
            break;
        case 'medical':
            document.getElementById('centerHeader').innerHTML = "Medical Major";
            if(player.education.medicM < MEDIC_EDU){
            document.getElementById('centerMsg').innerHTML = "Progress: " + player.education.medicM + " hours<br><br>Hours left: " + (MEDIC_EDU - player.education.medicM) +
                        "<button type='button' id='studyBtn'>Study</button>";
            document.getElementById('studyBtn').onclick = function onStudyBtnClicked() { player.education.medicM+=4; --player.energy; updatePlayerInfo(player); ++tod; if(checkTOD()){return;} if(player.skip == false){ onClassBtnClicked(player); } else{ onEndTurnBtnClicked(); } };
            }
            else{
                document.getElementById('centerMsg').innerHTML = "CONGRATS!!! You've graduated with this major!";
            }
            break;
        case 'speak':
            document.getElementById('centerHeader').innerHTML = "Public Speaking Major";
            if(player.education.speechM < SPEECH_EDU){
            document.getElementById('centerMsg').innerHTML = "Progress: " + player.education.speechM + " hours<br><br>Hours left: " + (SPEECH_EDU - player.education.speechM) +
                        "<button type='button' id='studyBtn'>Study</button>";
            document.getElementById('studyBtn').onclick = function onStudyBtnClicked() { player.education.speechM+=4; --player.energy; updatePlayerInfo(player); ++tod; if(checkTOD()){return;} if(player.skip == false){ onClassBtnClicked(player); } else{ onEndTurnBtnClicked(); } };
            }
            else{
                document.getElementById('centerMsg').innerHTML = "CONGRATS!!! You've graduated with this major!";
            }
            break;
        case 'computer':
            document.getElementById('centerHeader').innerHTML = "Computer Science Major";
            if(player.education.compSciM < COMP_EDU){
            document.getElementById('centerMsg').innerHTML = "Progress: " + player.education.compSciM + " hours<br><br>Hours left: " + (COMP_EDU - player.education.compSciM) +
                        "<button type='button' id='studyBtn'>Study</button>";
            document.getElementById('studyBtn').onclick = function onStudyBtnClicked() { player.education.compSciM+=4; --player.energy; updatePlayerInfo(player); ++tod; if(checkTOD()){return;} if(player.skip == false){ onClassBtnClicked(player); } else{ onEndTurnBtnClicked(); } };
            }
            else{
                document.getElementById('centerMsg').innerHTML = "CONGRATS!!! You've graduated with this major!";
            }
            break;
    }
}

function onChooseMajorBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Majors";
    document.getElementById('centerMsg').innerHTML = "This is the first day of the rest of your life.";
    document.getElementById('schoolIconCenter2').style.display = "block";

    document.getElementById('businessLink').style.cursor = "pointer";
    document.getElementById('culinaryLink').style.cursor = "pointer";
    document.getElementById('policeLink').style.cursor = "pointer";
    document.getElementById('educationLink').style.cursor = "pointer";
    document.getElementById('sportsLink').style.cursor = "pointer";
    document.getElementById('aeroLink').style.cursor = "pointer";
    document.getElementById('medicalLink').style.cursor = "pointer";
    document.getElementById('speakLink').style.cursor = "pointer";
    document.getElementById('computerLink').style.cursor = "pointer";

    document.getElementById('businessLink').onclick = function () { onBusinessLink(player) };
    document.getElementById('culinaryLink').onclick = function () { onCulinaryLink(player) };
    document.getElementById('policeLink').onclick = function () { onPoliceLink(player) };
    document.getElementById('educationLink').onclick = function () { onEducationLink(player) };
    document.getElementById('sportsLink').onclick = function () { onSportsLink(player) };
    document.getElementById('aeroLink').onclick = function () { onAeroLink(player) };
    document.getElementById('medicalLink').onclick = function () { onMedicalLink(player) };
    document.getElementById('speakLink').onclick = function () { onSpeakLink(player) };
    document.getElementById('computerLink').onclick = function () { onComputerLink(player) };
}

function onBusinessLink(player)
{
    var major = "business";
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Business/Finance Major";
    document.getElementById('centerMsg').innerHTML = "This special major allows you to get a job in almost any business.";
    document.getElementById('schoolIconCenter3').innerHTML = "<button type='button' id='chooseBtn'>Choose</button><button type='button' id='backBtn'>&lt;&lt; Back</button>";
    document.getElementById('schoolIconCenter3').style.display = "block";

    document.getElementById('chooseBtn').onclick = function () { onChooseBtnClicked(player, major) };
    document.getElementById('backBtn').onclick = function onBackBtnClicked() { onChooseMajorBtnClicked(player); };
}

function onCulinaryLink(player)
{
    var major = "culinary";
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Culinary Arts Major";
    document.getElementById('centerMsg').innerHTML = "This major is for those who love to cook";
    document.getElementById('schoolIconCenter3').innerHTML = "<button type='button' id='chooseBtn'>Choose</button><button type='button' id='backBtn'>&lt;&lt; Back</button>";
    document.getElementById('schoolIconCenter3').style.display = "block";

    document.getElementById('chooseBtn').onclick = function () { onChooseBtnClicked(player, major) };
    document.getElementById('backBtn').onclick = function onBackBtnClicked() { onChooseMajorBtnClicked(player); };
}

function onPoliceLink(player)
{
    var major = "lawEnf";
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Law Enforcement Major";
    document.getElementById('centerMsg').innerHTML = "This major is for the tough and burly";
    document.getElementById('schoolIconCenter3').innerHTML = "<button type='button' id='chooseBtn'>Choose</button><button type='button' id='backBtn'>&lt;&lt; Back</button>";
    document.getElementById('schoolIconCenter3').style.display = "block";

    document.getElementById('chooseBtn').onclick = function () { onChooseBtnClicked(player, major) };
    document.getElementById('backBtn').onclick = function onBackBtnClicked() { onChooseMajorBtnClicked(player); };
}

function onEducationLink(player)
{
    var major = "education";
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Education Major";
    document.getElementById('centerMsg').innerHTML = "This major is for those who can't do.";
    document.getElementById('schoolIconCenter3').innerHTML = "<button type='button' id='chooseBtn'>Choose</button><button type='button' id='backBtn'>&lt;&lt; Back</button>";
    document.getElementById('schoolIconCenter3').style.display = "block";

    document.getElementById('chooseBtn').onclick = function () { onChooseBtnClicked(player, major) };
    document.getElementById('backBtn').onclick = function onBackBtnClicked() { onChooseMajorBtnClicked(player); };
}

function onSportsLink(player)
{
    var major = "sports";
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Athletics Major";
    document.getElementById('centerMsg').innerHTML = "This major is for the most athletic among you";
    document.getElementById('schoolIconCenter3').innerHTML = "<button type='button' id='chooseBtn'>Choose</button><button type='button' id='backBtn'>&lt;&lt; Back</button>";
    document.getElementById('schoolIconCenter3').style.display = "block";

    document.getElementById('chooseBtn').onclick = function () { onChooseBtnClicked(player, major) };
    document.getElementById('backBtn').onclick = function onBackBtnClicked() { onChooseMajorBtnClicked(player); };
}

function onAeroLink(player)
{
    var major = "aero";
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Aeronautics Major";
    document.getElementById('centerMsg').innerHTML = "This major is for the fleeting souls";
    document.getElementById('schoolIconCenter3').innerHTML = "<button type='button' id='chooseBtn'>Choose</button><button type='button' id='backBtn'>&lt;&lt; Back</button>";
    document.getElementById('schoolIconCenter3').style.display = "block";

    document.getElementById('chooseBtn').onclick = function () { onChooseBtnClicked(player, major) };
    document.getElementById('backBtn').onclick = function onBackBtnClicked() { onChooseMajorBtnClicked(player); };
}

function onMedicalLink(player)
{
    var major = "medical";
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Medical Major";
    document.getElementById('centerMsg').innerHTML = "This major is for the ones who don't faint when they see blood";
    document.getElementById('schoolIconCenter3').innerHTML = "<button type='button' id='chooseBtn'>Choose</button><button type='button' id='backBtn'>&lt;&lt; Back</button>";
    document.getElementById('schoolIconCenter3').style.display = "block";

    document.getElementById('chooseBtn').onclick = function () { onChooseBtnClicked(player, major) };
    document.getElementById('backBtn').onclick = function onBackBtnClicked() { onChooseMajorBtnClicked(player); };
}

function onSpeakLink(player)
{
    var major = "speak";
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Public Speaking Major";
    document.getElementById('centerMsg').innerHTML = "This major is for the ones without stage fright";
    document.getElementById('schoolIconCenter3').innerHTML = "<button type='button' id='chooseBtn'>Choose</button><button type='button' id='backBtn'>&lt;&lt; Back</button>";
    document.getElementById('schoolIconCenter3').style.display = "block";

    document.getElementById('chooseBtn').onclick = function () { onChooseBtnClicked(player, major) };
    document.getElementById('backBtn').onclick = function onBackBtnClicked() { onChooseMajorBtnClicked(player); };
}

function onComputerLink(player)
{
    var major = "computer";
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Computer Science Major";
    document.getElementById('centerMsg').innerHTML = "This major is for the smartest of all";
    document.getElementById('schoolIconCenter3').innerHTML = "<button type='button' id='chooseBtn'>Choose</button><button type='button' id='backBtn'>&lt;&lt; Back</button>";
    document.getElementById('schoolIconCenter3').style.display = "block";

    document.getElementById('chooseBtn').onclick = function () { onChooseBtnClicked(player, major) };
    document.getElementById('backBtn').onclick = function onBackBtnClicked() { onChooseMajorBtnClicked(player); };
}

function onChooseBtnClicked(player, major)
{
    player.education.major = true;
    player.education.stringMajor = major;
    onSchoolIconClicked(player);
}

function onNewsIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "News Station";
    document.getElementById('centerMsg').innerHTML = "Your mom's fake news";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('newsIconCenter1').style.display = "block";

    if(checkNewsEmployment(player)){
        document.getElementById('newsClockinBtn').style.display = "block";
        document.getElementById('newsClockinBtn').onclick = function () { onNewsWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('newsClockinBtn').style.display = "none";
    }
    
    document.getElementById('newsHireBtn').onclick = function () { onNewsHireBtnClicked(player) };
}

function checkNewsEmployment(player)
{
    if( player.employ == "Intern at the News Station" ||
        player.employ == "Forecaster at the News Station" ||
        player.employ == "Sportscaster at the News Station" ||
        player.employ == "Anchor at the News Station" ||
        player.employ == "Accountant at the News Station" ||
        player.employ == "Financial Manager at the News Station" ||
        player.employ == "Executive at the News Station" ||
        player.employ == "CEO at the News Station" ||
        player.employ == "Security Guard at the News Station" ||
        player.employ == "Head of Security at the News Station"){

            return true;
    }
    else{
        return false;
    }
}

function onNewsHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "News Station Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('newsIconCenter2').style.display = "block";

    document.getElementById('newsJobBtn').onclick = function () { onNewsJobBtnClicked(player) };
    document.getElementById('newsAdminBtn').onclick = function () { onNewsAdminBtnClicked(player) };
    document.getElementById('newsSecBtn').onclick = function () { onNewsSecBtnClicked(player) };
}

function onNewsJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in the industry: " + player.experience.speech;
    document.getElementById('newsIconCenter2-1').style.display = "block";

    document.getElementById('newsIntern').style.cursor = "pointer";
    document.getElementById('newsFore').style.cursor = "pointer";
    document.getElementById('newsSports').style.cursor = "pointer";
    document.getElementById('newsAnchor').style.cursor = "pointer";

    document.getElementById('newsIntern').onclick = function onNewsInternClicked()
    {
        if(player.education.speechM > 1 && player.education.speechM < SPEECH_EDU){
            player.employ = "Intern at the News Station";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }    };

    document.getElementById('newsFore').onclick = function onNewsForeClicked()
    {
        if(player.experience.speech >= (100 * SOME) && player.education.speechM >= (MOST * SPEECH_EDU)){
            player.employ = "Forecaster at the News Station";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('newsSports').onclick = function onNewsSportsClicked()
    {
        if(player.experience.athletic >= 100 || player.education.speechM >= SPEECH_EDU){
            player.employ = "Sportscaster at the News Station";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('newsAnchor').onclick = function onNewsAnchorClicked()
    {
        if(player.education.speechM >= SPEECH_EDU && player.experience.speech >= 100){
            player.employ = "Anchor at the News Station";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onNewsAdminBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in management: " + player.experience.admin + 
            "<br>Your experience in the industry: " + player.experience.speech +
            "<br>Your education in Business: " + player.education.businessM;
    document.getElementById('newsIconCenter2-2').style.display = "block";

    document.getElementById('newsAcc').style.cursor = "pointer";
    document.getElementById('newsFin').style.cursor = "pointer";
    document.getElementById('newsExec').style.cursor = "pointer";
    document.getElementById('newsCeo').style.cursor = "pointer";

    document.getElementById('newsAcc').onclick = function onNewsAccClicked()
    {
        if(player.education.businessM >= (BUSINESS_EDU * MOST)){
            player.employ = "Accountant at the News Station";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('newsFin').onclick = function onNewsFinClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU || (player.education.businessM >= (EDUCATION_EDU * MOST) && player.experience.speech >= (100 * SOME))){
            player.employ = "Financial Manager at the News Station";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('newsExec').onclick = function onNewsExecClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && (player.experience.speech >= (100 * SOME) || player.ecperience.admin >= 200)){
            player.employ = "Executive at the News Station";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('newsCeo').onclick = function onNewsCeoClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && player.experience.speech >= 100 && player.experience.admin >= 200){
            player.employ = "CEO at the News Station";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onNewsSecBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in Law Enforcement: " + player.experience.law;
    document.getElementById('newsIconCenter2-3').style.display = "block";

    document.getElementById('newsGuard').style.cursor = "pointer";
    document.getElementById('newsSecur').style.cursor = "pointer";

    document.getElementById('newsGuard').onclick = function onNewsGuardClicked()
    {
        player.employ = "Security Guard at the News Station";
        player.wage = 10;
        updatePlayerInfo(player);
        document.getElementById('centerError').style.color = "green";
        document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('newsSecur').onclick = function onNewsSecurClicked()
    {
        if(player.experience.law >= 100){
            player.employ = "Head of Security at the News Station";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onNewsWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Experience: " + player.experience.speech;
    document.getElementById('newsWorkBox').style.display = "block";

    document.getElementById('newsWorkBtn').onclick = function onNewsWorkBtnClicked()
    {
        if( player.employ == "Accountant at the News Station" ||
            player.employ == "Financial Manager at the News Station" ||
            player.employ == "Executive at the News Station" ||
            player.employ == "CEO at the News Station" ||
            player.employ == "Head of Security at the News Station"){

                player.experience.admin += 1;
        }

        if(player.employ == "Security Guard at the News Station" ||
            player.employ == "Head of Security at the News Station"){
                player.experience.law += 1;
        }

        player.money += player.wage;
        player.experience.speech += 1;
        --player.energy;
        updatePlayerInfo(player);
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false)
            onNewsWorkerBtnClicked(player);
        else {
            onEndTurnBtnClicked();
        }
    };
}

function onRealtorIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Realtor";
    document.getElementById('centerMsg').innerHTML = "Here you can purchase a property and sell it for profit. Buy low, Sell high!";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('realtorIconCenter1').style.display = "block";

    document.getElementById('propertyInc').onclick = function () { onPropertyIncBtnClicked(player) };
}

function onPropertyIncBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Here are the list of properties:";
    document.getElementById('centerHeader').innerHTML = "Buy/Sell Properties";
    document.getElementById('realtorIconCenter1-1').style.display = "block";

    document.getElementById('prop0check').style.display = "none";
    document.getElementById('prop1check').style.display = "none";
    document.getElementById('prop2check').style.display = "none";
    document.getElementById('prop3check').style.display = "none";
    document.getElementById('prop4check').style.display = "none";
    document.getElementById('prop5check').style.display = "none";
    document.getElementById('prop6check').style.display = "none";

    for(var x = 0; x < 7; ++x){
        if(propsList[x].owner == player.color){
            document.getElementById('prop' + x + 'check').style.display = "inline";
        }
    }

    document.getElementById('propAprice').innerHTML = "" + propsList[0].price;
    document.getElementById('propBprice').innerHTML = "" + propsList[1].price;
    document.getElementById('propCprice').innerHTML = "" + propsList[2].price;
    document.getElementById('propDprice').innerHTML = "" + propsList[3].price;
    document.getElementById('propEprice').innerHTML = "" + propsList[4].price;
    document.getElementById('propFprice').innerHTML = "" + propsList[5].price;
    document.getElementById('propGprice').innerHTML = "" + propsList[6].price;

    document.getElementById('propertyBuyA').onclick = function ()
    {
        if(propsList[0].price > player.money){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You can't afford this!";
        }
        else if(propsList[0].owner != player.color && propsList[0].owner != ""){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "Another player already owns this property";
        }
        else if(propsList[0].owner == player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this property";
        }
        else{
            propsList[0].owner = player.color;
            player.money -= propsList[0].price;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "Congrats on the new property!";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertyBuyB').onclick = function ()
    {
        if(propsList[1].price > player.money){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You can't afford this!";
        }
        else if(propsList[1].owner != player.color && propsList[1].owner != ""){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "Another player already owns this property";
        }
        else if(propsList[1].owner == player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this property";
        }
        else{
            propsList[1].owner = player.color;
            player.money -= propsList[1].price;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "Congrats on the new property!";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertyBuyC').onclick = function ()
    {
        if(propsList[2].price > player.money){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You can't afford this!";
        }
        else if(propsList[2].owner != player.color && propsList[2].owner != ""){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "Another player already owns this property";
        }
        else if(propsList[2].owner == player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this property";
        }
        else{
            propsList[2].owner = player.color;
            player.money -= propsList[2].price;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "Congrats on the new property!";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertyBuyD').onclick = function ()
    {
        if(propsList[3].price > player.money){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You can't afford this!";
        }
        else if(propsList[3].owner != player.color && propsList[3].owner != ""){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "Another player already owns this property";
        }
        else if(propsList[3].owner == player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this property";
        }
        else{
            propsList[3].owner = player.color;
            player.money -= propsList[3].price;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "Congrats on the new property!";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertyBuyE').onclick = function ()
    {
        if(propsList[4].price > player.money){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You can't afford this!";
        }
        else if(propsList[4].owner != player.color && propsList[4].owner != ""){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "Another player already owns this property";
        }
        else if(propsList[4].owner == player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this property";
        }
        else{
            propsList[4].owner = player.color;
            player.money -= propsList[4].price;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "Congrats on the new property!";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertyBuyF').onclick = function ()
    {
        if(propsList[5].price > player.money){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You can't afford this!";
        }
        else if(propsList[5].owner != player.color && propsList[5].owner != ""){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "Another player already owns this property";
        }
        else if(propsList[5].owner == player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this property";
        }
        else{
            propsList[5].owner = player.color;
            player.money -= propsList[5].price;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "Congrats on the new property!";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertyBuyG').onclick = function ()
    {
        if(propsList[6].price > player.money){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You can't afford this!";
        }
        else if(propsList[6].owner != player.color && propsList[6].owner != ""){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "Another player already owns this property";
        }
        else if(propsList[6].owner == player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this property";
        }
        else{
            propsList[6].owner = player.color;
            player.money -= propsList[6].price;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "Congrats on the new property!";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertySellA').onclick = function ()
    {
        if(propsList[0].owner != player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You don't own this property";
        }
        else{
            propsList[0].owner = "";
            player.money += parseInt(propsList[0].price);
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You've successfully sold this property";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertySellB').onclick = function ()
    {
        if(propsList[1].owner != player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You don't own this property";
        }
        else{
            propsList[1].owner = "";
            player.money += parseInt(propsList[1].price);
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You've successfully sold this property";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertySellC').onclick = function ()
    {
        if(propsList[2].owner != player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You don't own this property";
        }
        else{
            propsList[2].owner = "";
            player.money += parseInt(propsList[2].price);
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You've successfully sold this property";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertySellD').onclick = function ()
    {
        if(propsList[3].owner != player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You don't own this property";
        }
        else{
            propsList[3].owner = "";
            player.money += parseInt(propsList[3].price);
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You've successfully sold this property";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertySellE').onclick = function ()
    {
        if(propsList[4].owner != player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You don't own this property";
        }
        else{
            propsList[4].owner = "";
            player.money += parseInt(propsList[4].price);
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You've successfully sold this property";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertySellF').onclick = function ()
    {
        if(propsList[5].owner != player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You don't own this property";
        }
        else{
            propsList[5].owner = "";
            player.money += parseInt(propsList[5].price);
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You've successfully sold this property";
        }
        onPropertyIncBtnClicked(player);
    };

    document.getElementById('propertySellG').onclick = function ()
    {
        if(propsList[6].owner != player.color){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You don't own this property";
        }
        else{
            propsList[6].owner = "";
            player.money += parseInt(propsList[6].price);
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You've successfully sold this property";
        }
        onPropertyIncBtnClicked(player);
    };
}

function onApartmentIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Apartment Building";
    document.getElementById('centerMsg').innerHTML = "Lease our apartments today!";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('apartmentIconCenter1').style.display = "block";

    if(player.home <= 3){
        document.getElementById('homeBtn').style.display = "block";
        document.getElementById('homeBtn').onclick = function () { onHomeBtnClicked(player) };
    }
    else{
        document.getElementById('homeBtn').style.display = "none";
    }

    document.getElementById('leaseBtn').onclick = function () { onLeaseBtnClicked(player) };
}

function onHomeBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Home Sweet Home";
    document.getElementById('centerMsg').innerHTML = "Time to relax";
    document.getElementById('apartmentIconCenter2').style.display = "block";
    document.getElementById('wifeBtn').style.display = "none";
    document.getElementById('kidsBtn').style.display = "none";

    if(player.married == true){
        document.getElementById('wifeBtn').style.display = "block";
        document.getElementById('wifeBtn').onclick = function () { onWifeBtnClicked(player) };
    }

    if(player.kids > 0){
        document.getElementById('kidsBtn').style.display = "block";
        document.getElementById('kidsBtn').onclick = function ()
        {

        };
    }

    document.getElementById('sleepBtn').onclick = function ()
    {
        player.energy += 5;
        updatePlayerInfo(player);
        ++tod;
        checkTOD();
    };
}

function onLeaseBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Apartments for Lease";
    document.getElementById('centerMsg').innerHTML = "Here are the available apartments:";
    document.getElementById('apartmentIconCenter3').style.display = "block";

    document.getElementById('oneBed').style.cursor = "pointer";
    document.getElementById('twoBed').style.cursor = "pointer";
    document.getElementById('threeBed').style.cursor = "pointer";

    document.getElementById('oneBed').onclick = function () {
        if(player.home == 1){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this apartment";
        }
        else{
            if(player.money < 100){
                document.getElementById('centerError').style.color = "red";
                document.getElementById('centerError').innerHTML = "You can't afford this apartment";
            }
            else{
                player.home = 1;
                player.money -= 100;
                updatePlayerInfo(player);
                document.getElementById('centerError').style.color = "green";
                document.getElementById('centerError').innerHTML = "Congrats on the new apartment!";
            }
        }
    };

    document.getElementById('twoBed').onclick = function () {
        if(player.home == 2){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this apartment";
        }
        else{
            if(player.money < 200){
                document.getElementById('centerError').style.color = "red";
                document.getElementById('centerError').innerHTML = "You can't afford this apartment";
            }
            else{
                player.home = 2;
                player.money -= 200;
                updatePlayerInfo(player);
                document.getElementById('centerError').style.color = "green";
                document.getElementById('centerError').innerHTML = "Congrats on the new apartment!";
            }
        }
    };

    document.getElementById('threeBed').onclick = function () {
        if(player.home == 3){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this apartment";
        }
        else{
            if(player.money < 300){
                document.getElementById('centerError').style.color = "red";
                document.getElementById('centerError').innerHTML = "You can't afford this apartment";
            }
            else{
                player.home = 3;
                player.money -= 300;
                updatePlayerInfo(player);
                document.getElementById('centerError').style.color = "green";
                document.getElementById('centerError').innerHTML = "Congrats on the new apartment!";
            }
        }
    };
}

function onInsurCompIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Insurance Company";
    document.getElementById('centerMsg').innerHTML = "Forget the geckos! The only way you can be Progressive is by choosing us!";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('insurCompIconCenter1').style.display = "block";

    if(checkInsurEmployment(player)){
        document.getElementById('insurClockinBtn').style.display = "block";
        document.getElementById('insurClockinBtn').onclick = function () { onInsurWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('insurClockinBtn').style.display = "none";
    }
    
    document.getElementById('insurHireBtn').onclick = function () { onInsurHireBtnClicked(player) };
}

function checkInsurEmployment(player)
{
    if( player.employ == "Sales Rep at Insurance Comp." ||
        player.employ == "Adv. Sales at Insurance Comp." ||
        player.employ == "Supervisor at Insurance Comp." ||
        player.employ == "Head of Sales at Insurance Comp." ||
        player.employ == "Accountant at Insurance Comp." ||
        player.employ == "Financial Manager at Insurance Comp." ||
        player.employ == "Executive at Insurance Comp." ||
        player.employ == "CEO at Insurance Comp."){

            return true;
    }
    else{
        return false;
    }
}

function onInsurHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Insurance Company Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('insurCompIconCenter2').style.display = "block";

    document.getElementById('insurJobBtn').onclick = function () { onInsurJobBtnClicked(player) };
    document.getElementById('insurAdminBtn').onclick = function () { onInsurAdminBtnClicked(player) };
}

function onInsurJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in the industry: " + player.experience.sales;
    document.getElementById('insurCompIconCenter2-1').style.display = "block";

    document.getElementById('insurRep').style.cursor = "pointer";
    document.getElementById('insurAdv').style.cursor = "pointer";
    document.getElementById('insurSup').style.cursor = "pointer";
    document.getElementById('insurHead').style.cursor = "pointer";

    document.getElementById('insurRep').onclick = function onInsurRepClicked()
    {
        player.employ = "Sales Rep at Insurance Comp.";
        player.wage = 10;
        updatePlayerInfo(player);
        document.getElementById('centerError').style.color = "green";
        document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('insurAdv').onclick = function onInsurAdvClicked()
    {
        if(player.experience.sales >= (100 * SOME)){
            player.employ = "Adv. Sales at Insurance Comp.";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('insurSup').onclick = function onInsurSupClicked()
    {
        if(player.experience.sales >= 100){
            player.employ = "Supervisor at Insurance Comp.";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('insurHead').onclick = function onInsurHeadClicked()
    {
        if((player.education.educationM >= EDUCATION_EDU || player.education.businessM >= BUSINESS_EDU || player.education.culinaryM >= CULINARY_EDU ||
            player.education.lawEnfM >= LAWENF_EDU || player.education.aeroM >= AERO_EDU || player.education.sportM >= SPORTS_EDU ||
            player.education.medicM >= MEDIC_EDU || player.education.speechM >= SPEECH_EDU || player.education.compSciM >= COMP_EDU) && player.experience.sales >= 100){
            player.employ = "Head of Sales at Insurance Comp.";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onInsurAdminBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in management: " + player.experience.admin + 
            "<br>Your experience in the industry: " + player.experience.sales +
            "<br>Your education in Business: " + player.education.businessM;
    document.getElementById('insurCompIconCenter2-2').style.display = "block";

    document.getElementById('insurAcc').style.cursor = "pointer";
    document.getElementById('insurFin').style.cursor = "pointer";
    document.getElementById('insurExec').style.cursor = "pointer";
    document.getElementById('insurCeo').style.cursor = "pointer";

    document.getElementById('insurAcc').onclick = function onInsurAccClicked()
    {
        if(player.education.businessM >= (BUSINESS_EDU * MOST)){
            player.employ = "Accountant at Insurance Comp.";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('insurFin').onclick = function onInsurFinClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU || (player.education.businessM >= (EDUCATION_EDU * MOST) && player.experience.sales >= (100 * SOME))){
            player.employ = "Financial Manager at Insurance Comp.";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('insurExec').onclick = function onInsurExecClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && (player.experience.sales >= (100 * SOME) || player.ecperience.admin >= 200)){
            player.employ = "Executive at Insurance Comp.";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('insurCeo').onclick = function onInsurCeoClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && player.experience.sales >= 100 && player.experience.admin >= 200){
            player.employ = "CEO at Insurance Comp.";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onInsurWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Experience: " + player.experience.sales;
    document.getElementById('insurWorkBox').style.display = "block";

    document.getElementById('insurWorkBtn').onclick = function onInsurWorkBtnClicked()
    {
        if( player.employ == "Supervisor at Insurance Comp." ||
            player.employ == "Head of Sales at Insurance Comp." ||
            player.employ == "Accountant at Insurance Comp." ||
            player.employ == "Financial Manager at Insurance Comp." ||
            player.employ == "Executive at Insurance Comp." ||
            player.employ == "CEO at Insurance Comp."){

                player.experience.admin += 1;
        }

        player.money += player.wage;
        player.experience.sales += 1;
        --player.energy;
        updatePlayerInfo(player);
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false){
            onInsurWorkerBtnClicked(player);
        }
        else{
            onEndTurnBtnClicked();
        }
    };
}

function onSuburbsIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Suburbs";
    document.getElementById('centerMsg').innerHTML = "Buy a new home today!";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('suburbsIconCenter1').style.display = "block";

    if(player.home > 3){
        document.getElementById('homeSubBtn').style.display = "block";
        document.getElementById('homeSubBtn').onclick = function () { onHomeBtnClicked(player) };
    }
    else{
        document.getElementById('homeSubBtn').style.display = "none";
    }

    document.getElementById('buyHouseBtn').onclick = function () { onBuyHouseBtnClicked(player) };
}

function onBuyHouseBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Homes For Sale";
    document.getElementById('centerMsg').innerHTML = "Here are the available homes:";
    document.getElementById('suburbsIconCenter3').style.display = "block";

    document.getElementById('smallHouse').style.cursor = "pointer";
    document.getElementById('medHouse').style.cursor = "pointer";
    document.getElementById('bigHouse').style.cursor = "pointer";

    document.getElementById('smallHouse').onclick = function () {
        if(player.home == 4){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this house";
        }
        else{
            if(player.money < 5000){
                document.getElementById('centerError').style.color = "red";
                document.getElementById('centerError').innerHTML = "You can't afford this house";
            }
            else{
                player.home = 4;
                player.money -= 5000;
                updatePlayerInfo(player);
                document.getElementById('centerError').style.color = "green";
                document.getElementById('centerError').innerHTML = "Congrats on the new house!";
            }
        }
    };

    document.getElementById('medHouse').onclick = function () {
        if(player.home == 5){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this house";
        }
        else{
            if(player.money < 10000){
                document.getElementById('centerError').style.color = "red";
                document.getElementById('centerError').innerHTML = "You can't afford this house";
            }
            else{
                player.home = 5;
                player.money -= 10000;
                updatePlayerInfo(player);
                document.getElementById('centerError').style.color = "green";
                document.getElementById('centerError').innerHTML = "Congrats on the new house!";
            }
        }
    };

    document.getElementById('bigHouse').onclick = function () {
        if(player.home == 6){
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You already own this house";
        }
        else{
            if(player.money < 20000){
                document.getElementById('centerError').style.color = "red";
                document.getElementById('centerError').innerHTML = "You can't afford this house";
            }
            else{
                player.home = 6;
                player.money -= 20000;
                updatePlayerInfo(player);
                document.getElementById('centerError').style.color = "green";
                document.getElementById('centerError').innerHTML = "Congrats on the new house!";
            }
        }
    };
}

function onTechCompIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Tech Company";
    document.getElementById('centerMsg').innerHTML = "Do you wanna be the very best like no one ever was? Work for us!";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('techCompIconCenter1').style.display = "block";

    if(checkTechEmployment(player)){
        document.getElementById('techClockinBtn').style.display = "block";
        document.getElementById('techClockinBtn').onclick = function () { onTechWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('techClockinBtn').style.display = "none";
    }
    
    document.getElementById('techHireBtn').onclick = function () { onTechHireBtnClicked(player) };
}

function checkTechEmployment(player)
{
    if( player.employ == "Tech Support at Tech Comp." ||
        player.employ == "Programmer at Tech Comp." ||
        player.employ == "Senior Developer at Tech Comp." ||
        player.employ == "Head Developer at Tech Comp." ||
        player.employ == "Accountant at Tech Comp." ||
        player.employ == "Financial Manager at Tech Comp." ||
        player.employ == "Executive at Tech Comp." ||
        player.employ == "CEO at Tech Comp."){

            return true;
    }
    else{
        return false;
    }
}

function onTechHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Tech Company Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('techCompIconCenter2').style.display = "block";

    document.getElementById('techJobBtn').onclick = function () { onTechJobBtnClicked(player) };
    document.getElementById('techAdminBtn').onclick = function () { onTechAdminBtnClicked(player) };
}

function onTechJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in the industry: " + player.experience.tech +
    "<br>Your education in the industry: " + player.education.compSciM;
    document.getElementById('techCompIconCenter2-1').style.display = "block";

    document.getElementById('techTech').style.cursor = "pointer";
    document.getElementById('techProg').style.cursor = "pointer";
    document.getElementById('techDev').style.cursor = "pointer";
    document.getElementById('techHead').style.cursor = "pointer";

    document.getElementById('techTech').onclick = function onTechTechClicked()
    {
        player.employ = "Tech Support at Tech Comp.";
        player.wage = 10;
        updatePlayerInfo(player);
        document.getElementById('centerError').style.color = "green";
        document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('techProg').onclick = function onTechProgClicked()
    {
        if((player.education.compSciM >= (COMP_EDU * SOME) && player.experience.tech >= (100 * SOME)) || player.education.compSciM >= COMP_EDU){
            player.employ = "Programmer at Tech Comp.";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('techDev').onclick = function onTechDevClicked()
    {
        if((player.education.compSciM >= (COMP_EDU * MOST) && player.experience.tech >= 100) || (player.education.compSciM >= COMP_EDU && player.experience.tech >= (100 * SOME))){
            player.employ = "Senior Developer at Tech Comp.";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('techHead').onclick = function onTechHeadClicked()
    {
        if(player.education.compSciM >= COMP_EDU && player.experience.tech >= 100){
            player.employ = "Head Developer at Tech Comp.";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onTechAdminBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in management: " + player.experience.admin + 
            "<br>Your experience in the industry: " + player.experience.tech +
            "<br>Your education in Business: " + player.education.businessM;
    document.getElementById('techCompIconCenter2-2').style.display = "block";

    document.getElementById('techAcc').style.cursor = "pointer";
    document.getElementById('techFin').style.cursor = "pointer";
    document.getElementById('techExec').style.cursor = "pointer";
    document.getElementById('techCeo').style.cursor = "pointer";

    document.getElementById('techAcc').onclick = function onTechAccClicked()
    {
        if(player.education.businessM >= (BUSINESS_EDU * MOST)){
            player.employ = "Accountant at Tech Comp.";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('techFin').onclick = function onTechFinClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU || (player.education.businessM >= (EDUCATION_EDU * MOST) && player.experience.tech >= (100 * SOME))){
            player.employ = "Financial Manager at Tech Comp.";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('techExec').onclick = function onTechExecClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && (player.experience.tech >= (100 * SOME) || player.experience.admin >= 200)){
            player.employ = "Executive at Tech Comp.";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('techCeo').onclick = function onTechCeoClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && player.experience.tech >= 100 && player.experience.admin >= 200){
            player.employ = "CEO at Tech Comp.";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onTechWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Experience: " + player.experience.tech;
    document.getElementById('techWorkBox').style.display = "block";

    document.getElementById('techWorkBtn').onclick = function onTechWorkBtnClicked()
    {
        if( player.employ == "Senior Developer at Tech Comp." ||
            player.employ == "Head Developer at Tech Comp." ||
            player.employ == "Accountant at Tech Comp." ||
            player.employ == "Financial Manager at Tech Comp." ||
            player.employ == "Executive at Tech Comp." ||
            player.employ == "CEO at Tech Comp."){

            player.experience.admin+=1;
        }

        player.money += player.wage;
        player.experience.tech += 1;
        --player.energy;
        updatePlayerInfo(player);
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false)
            onTechWorkerBtnClicked(player);
        else {
            onEndTurnBtnClicked();
        }
    };
}

function onTempleIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Temple";
    document.getElementById('centerMsg').innerHTML = "Where senior citizens can still serve a purpose";
    document.getElementById('centerError').innerHTML = "";

    document.getElementById('templeIconCenter1').style.display = "block";
    
    document.getElementById('marriageBtn').onclick = function onMarriageBtnClicked() {
        if(player.married == true){
            document.getElementById('centerError').style.color = "red";
            document.getElementById("centerError").innerHTML = "Polygamy isn't cool here";
            return;
        }
        player.married = true;
        player.income += 200;
        document.getElementById('centerError').style.color = "green";
        document.getElementById("centerError").innerHTML = "I hear wedding bells!";
        updatePlayerInfo(player);
    };
}

function onRestaurantIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Restaurant";
    document.getElementById('centerMsg').innerHTML = "Gordon Ramsey isn't here right now.";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('restaurantIconCenter1').style.display = "block";

    if(checkRestEmployment(player)){
        document.getElementById('restClockinBtn').style.display = "block";
        document.getElementById('restClockinBtn').onclick = function () { onRestWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('restClockinBtn').style.display = "none";
    }
    
    document.getElementById('restHireBtn').onclick = function () { onRestHireBtnClicked(player) };
}

function checkRestEmployment(player)
{
    if( player.employ == "Waiter at the Restaurant" ||
        player.employ == "Line Cook at the Restaurant" ||
        player.employ == "Chef at the Restaurant" ||
        player.employ == "Master Chef at the Restaurant" ||
        player.employ == "Manager at the Restaurant" ||
        player.employ == "Restaurant Chain Regional Manager" ||
        player.employ == "Restaurant Chain Executive" ||
        player.employ == "Restaurant Chain CEO"){

            return true;
    }
    else{
        return false;
    }
}

function onRestHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Restaurant Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('restaurantIconCenter2').style.display = "block";

    document.getElementById('restJobBtn').onclick = function () { onRestJobBtnClicked(player) };
    document.getElementById('restAdminBtn').onclick = function () { onRestAdminBtnClicked(player) };
}

function onRestJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in the industry: " + player.experience.culinary +
    "<br>Your education in the industry: " + player.education.culinaryM;
    document.getElementById('restaurantIconCenter2-1').style.display = "block";

    document.getElementById('restWait').style.cursor = "pointer";
    document.getElementById('restCook').style.cursor = "pointer";
    document.getElementById('restChef').style.cursor = "pointer";
    document.getElementById('restMaster').style.cursor = "pointer";

    document.getElementById('restWait').onclick = function onRestWaitClicked()
    {
        player.employ = "Waiter at the Restaurant";
        player.wage = 10;
        updatePlayerInfo(player);
        document.getElementById('centerError').style.color = "green";
        document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('restCook').onclick = function onRestCookClicked()
    {
        if(player.education.culinaryM >= (CULINARY_EDU * SOME) || player.experience.culinary >= (100 * SOME)){
            player.employ = "Line Cook at the Restaurant";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('restChef').onclick = function onRestChefClicked()
    {
        if(player.experience.culinary >= 100 || (player.education.culinaryM >= (CULINARY_EDU * MOST) && player.experience.culinary >= (100 * SOME))){
            player.employ = "Chef at the Restaurant";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('restMaster').onclick = function onRestMasterClicked()
    {
        if(player.education.culinaryM >= CULINARY_EDU && player.experience.culinary >= 100){
            player.employ = "Master Chef at the Restaurant";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onRestAdminBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in management: " + player.experience.admin + 
            "<br>Your experience in the industry: " + player.experience.culinary +
            "<br>Your education in Business: " + player.education.businessM;
    document.getElementById('restaurantIconCenter2-2').style.display = "block";

    document.getElementById('restMan').style.cursor = "pointer";
    document.getElementById('restReg').style.cursor = "pointer";
    document.getElementById('restExec').style.cursor = "pointer";
    document.getElementById('restCeo').style.cursor = "pointer";

    document.getElementById('restMan').onclick = function onRestManClicked()
    {
        if(player.education.businessM >= (BUSINESS_EDU * MOST)){
            player.employ = "Manager at the Restaurant";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('restReg').onclick = function onRestRegClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU || (player.education.businessM >= (EDUCATION_EDU * MOST) && player.experience.culinary >= (100 * SOME))){
            player.employ = "Restaurant Chain Regional Manager";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('restExec').onclick = function onRestExecClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && (player.experience.culinary >= 100 || player.experience.admin >= 200)){
            player.employ = "Restaurant Chain Executive";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('restCeo').onclick = function onRestCeoClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && player.experience.culinary >= 100 && player.experience.admin >= 200){
            player.employ = "Restaurant Chain CEO";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onRestWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Experience: " + player.experience.culinary;
    document.getElementById('restWorkBox').style.display = "block";

    document.getElementById('restWorkBtn').onclick = function onRestWorkBtnClicked()
    {
        if( player.employ == "Chef at the Restaurant" ||
            player.employ == "Master Chef at the Restaurant" ||
            player.employ == "Manager at the Restaurant" ||
            player.employ == "Restaurant Chain Regional Manager" ||
            player.employ == "Restaurant Chain Executive" ||
            player.employ == "Restaurant Chain CEO"){

            player.experience.admin+=1;
        }

        player.money += player.wage;
        player.experience.culinary += 1;
        --player.energy;
        updatePlayerInfo(player);
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false)
            onRestWorkerBtnClicked(player);
        else {
            onEndTurnBtnClicked();
        }
    };
}

function onMallIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Shopping Mall";
    document.getElementById('centerMsg').innerHTML = "So many choices, shop here or shop there.";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('mallIconCenter1').style.display = "block";

    if(checkMallEmployment(player)){
        document.getElementById('mallClockinBtn').style.display = "block";
        document.getElementById('mallClockinBtn').onclick = function () { onMallWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('mallClockinBtn').style.display = "none";
    }
    
    document.getElementById('mallHireBtn').onclick = function () { onMallHireBtnClicked(player) };
}

function checkMallEmployment(player)
{
    if( player.employ == "Cashier at the Mall" ||
        player.employ == "Supervisor at the Mall" ||
        player.employ == "Shop Manager at the Mall" ||
        player.employ == "Mall Manager" ||
        player.employ == "Security Guard at the Mall" ||
        player.employ == "Head of Security at the Mall"){

            return true;
    }
    else{
        return false;
    }
}

function onMallHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Mall Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('mallIconCenter2').style.display = "block";

    document.getElementById('mallJobBtn').onclick = function () { onMallJobBtnClicked(player) };
    document.getElementById('mallSecBtn').onclick = function () { onMallSecBtnClicked(player) };
}

function onMallJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in the industry: " + player.experience.admin +
    "<br>Your education in the industry: " + player.education.businessM;
    document.getElementById('mallIconCenter2-1').style.display = "block";

    document.getElementById('mallCash').style.cursor = "pointer";
    document.getElementById('mallSup').style.cursor = "pointer";
    document.getElementById('mallShop').style.cursor = "pointer";
    document.getElementById('mallMan').style.cursor = "pointer";

    document.getElementById('mallCash').onclick = function onMallCashClicked()
    {
        player.employ = "Cashier at the Mall";
        player.wage = 10;
        updatePlayerInfo(player);
        document.getElementById('centerError').style.color = "green";
        document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('mallSup').onclick = function onMallSupClicked()
    {
        if(player.experience.admin >= (100 * SOME) || player.education.businessM >= (BUSINESS_EDU * SOME)){
            player.employ = "Supervisor at the Mall";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('mallShop').onclick = function onMallShopClicked()
    {
        if((player.experience.admin >= 100 && player.education.businessM >= (BUSINESS_EDU * SOME)) || player.education.businessM >= BUSINESS_EDU){
            player.employ = "Shop Manager at the Mall";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('mallMan').onclick = function onMallManClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && player.experience.admin >= 100){
            player.employ = "Mall Manager";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onMallSecBtnClicked(player)

{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in Law Enforcement: " + player.experience.law;
    document.getElementById('mallIconCenter2-3').style.display = "block";

    document.getElementById('mallGuard').style.cursor = "pointer";
    document.getElementById('mallSecur').style.cursor = "pointer";

    document.getElementById('mallGuard').onclick = function onMallGuardClicked()
    {
        player.employ = "Security Guard at the Mall";
        player.wage = 10;
        updatePlayerInfo(player);
        document.getElementById('centerError').style.color = "green";
        document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('mallSecur').onclick = function onMallSecurClicked()
    {
        if(player.experience.law >= 100){
            player.employ = "Head of Security at the Mall";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onMallWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Experience: " + player.experience.admin;
    document.getElementById('mallWorkBox').style.display = "block";

    document.getElementById('mallWorkBtn').onclick = function onMallWorkBtnClicked()
    {
        if(player.employ == "Security Guard at the Mall" ||
            player.employ == "Head of Security at the Mall"){
                player.experience.law += 1;
        }

        player.money += player.wage;
        player.experience.admin += 1;
        --player.energy;
        updatePlayerInfo(player);
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false)
            onMallWorkerBtnClicked(player);
        else {
            onEndTurnBtnClicked();
        }
    };
}

function onAirportIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Airport";
    document.getElementById('centerMsg').innerHTML = "Fly with me, let\'s fly let\'s fly away!";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('airportIconCenter1').style.display = "block";

    if(checkAirportEmployment(player)){
        document.getElementById('airportClockinBtn').style.display = "block";
        document.getElementById('airportClockinBtn').onclick = function () { onAirportWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('airportClockinBtn').style.display = "none";
    }
    
    document.getElementById('airportHireBtn').onclick = function () { onAirportHireBtnClicked(player) };
}

function checkAirportEmployment(player)
{
    if( player.employ == "Baggage Loader at the Airport" ||
        player.employ == "Air Traffic Dir. at the Airport" ||
        player.employ == "Mail Carrier Pilot" ||
        player.employ == "Airline Pilot" ||
        player.employ == "Accountant at the Airport" ||
        player.employ == "Airline Financial Manager" ||
        player.employ == "Airline Executive" ||
        player.employ == "Airline Manager" ||
        player.employ == "Security Guard at the Airport" ||
        player.employ == "Head of Security at the Airport"){

            return true;
    }
    else{
        return false;
    }
}

function onAirportHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Airport Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('airportIconCenter2').style.display = "block";

    document.getElementById('airportJobBtn').onclick = function () { onAirportJobBtnClicked(player) };
    document.getElementById('airportAdminBtn').onclick = function () { onAirportAdminBtnClicked(player) };
    document.getElementById('airportSecBtn').onclick = function () { onAirportSecBtnClicked(player) };
}

function onAirportJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in the industry: " + player.experience.pilot +
    "<br>Your education in the industry: " + player.education.aeroM;
    document.getElementById('airportIconCenter2-1').style.display = "block";

    document.getElementById('airBag').style.cursor = "pointer";
    document.getElementById('airTraf').style.cursor = "pointer";
    document.getElementById('airCar').style.cursor = "pointer";
    document.getElementById('airPilot').style.cursor = "pointer";

    document.getElementById('airBag').onclick = function onAirBagClicked()
    {
        player.employ = "Baggage Loader at the Airport";
        player.wage = 10;
        updatePlayerInfo(player);
        document.getElementById('centerError').style.color = "green";
        document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('airTraf').onclick = function onAirTrafClicked()
    {
        if(player.education.aeroM >= (AERO_EDU * SOME) || player.experience.pilot >= (100 * SOME)){
            player.employ = "Air Traffic Dir. at the Airport";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('airCar').onclick = function onAirCarClicked()
    {
        if(player.education.aeroM >= AERO_EDU || (player.education.aeroM >= (AERO_EDU * MOST) && player.experience.pilot >= (100 * SOME))){
            player.employ = "Mail Carrier Pilot";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('airPilot').onclick = function onAirPilotClicked()
    {
        if(player.education.aeroM >= AERO_EDU && player.experience.pilot >= 100){
            player.employ = "Airline Pilot";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onAirportAdminBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in management: " + player.experience.admin + 
            "<br>Your experience in the industry: " + player.experience.pilot +
            "<br>Your education in Business: " + player.education.businessM;
    document.getElementById('airportIconCenter2-2').style.display = "block";

    document.getElementById('airAcc').style.cursor = "pointer";
    document.getElementById('airFin').style.cursor = "pointer";
    document.getElementById('airExec').style.cursor = "pointer";
    document.getElementById('airMan').style.cursor = "pointer";

    document.getElementById('airAcc').onclick = function onAirAccClicked()
    {
        if(player.education.businessM >= (BUSINESS_EDU * MOST)){
            player.employ = "Accountant at the Airport";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('airFin').onclick = function onAirFinClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU || (player.education.businessM >= (EDUCATION_EDU * MOST) && player.experience.pilot >= (100 * SOME))){
            player.employ = "Airline Financial Manager";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('airExec').onclick = function onAirExecClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && (player.experience.culinary >= 100 || player.experience.admin >= 200)){
            player.employ = "Airline Executive";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('airMan').onclick = function onAirManClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && player.experience.pilot >= 100 && player.experience.admin >= 200){
            player.employ = "Airline Manager";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onAirportSecBtnClicked(player)

{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in Law Enforcement: " + player.experience.law;
    document.getElementById('airportIconCenter2-3').style.display = "block";

    document.getElementById('airportGuard').style.cursor = "pointer";
    document.getElementById('airportSecur').style.cursor = "pointer";

    document.getElementById('airportGuard').onclick = function onAirportGuardClicked()
    {
        player.employ = "Security Guard at the Airport";
        player.wage = 10;
        updatePlayerInfo(player);
        document.getElementById('centerError').style.color = "green";
        document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
    };

    document.getElementById('airportSecur').onclick = function onAirportSecurClicked()
    {
        if(player.experience.law >= 100){
            player.employ = "Head of Security at the Airport";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onAirportWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Experience: " + player.experience.pilot;
    document.getElementById('airportWorkBox').style.display = "block";

    document.getElementById('airportWorkBtn').onclick = function onAirportWorkBtnClicked()
    {
        if( player.employ == "Airline Pilot" ||
            player.employ == "Accountant at the Airport" ||
            player.employ == "Airline Financial Manager" ||
            player.employ == "Airline Executive" ||
            player.employ == "Airline Manager" ||
            player.employ == "Head of Security at the Airport"){

            player.experience.admin += 1;
        }

        if(player.employ == "Security Guard at the Airport" ||
            player.employ == "Head of Security at the Airport"){
                player.experience.law += 1;
        }

        player.money += player.wage;
        player.experience.pilot += 1;
        updatePlayerInfo(player);
        --player.energy;
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false)
            onAirportWorkerBtnClicked(player);
        else {
            onEndTurnBtnClicked();
        }
    };
}

function onHospitalIconClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Hospital";
    document.getElementById('centerMsg').innerHTML = "Some people say we're fake healers, what a bunch of bull crap!";
    document.getElementById('centerError').innerHTML = "";
    document.getElementById('hospitalIconCenter1').style.display = "block";

    if(checkHospitalEmployment(player)){
        document.getElementById('hospitalClockinBtn').style.display = "block";
        document.getElementById('hospitalClockinBtn').onclick = function () { onHospitalWorkerBtnClicked(player) };
    }
    else{
        document.getElementById('hospitalClockinBtn').style.display = "none";
    }
    
    document.getElementById('hospitalHireBtn').onclick = function () { onHospitalHireBtnClicked(player) };
}

function checkHospitalEmployment(player)
{
    if( player.employ == "Nurse at the Hospital" ||
        player.employ == "Physical Therpaist at the Hospital" ||
        player.employ == "Doctor at the Hospital" ||
        player.employ == "Head Doctor at the Hospital" ||
        player.employ == "Hospital Supervisor" ||
        player.employ == "Hospital Manager" ||
        player.employ == "Hospital Director" ||
        player.employ == "Hospital Administrator"){

            return true;
    }
    else{
        return false;
    }
}

function onHospitalHireBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = "Hospital Jobs";
    document.getElementById('centerMsg').innerHTML = "What kind of job are you looking for?";
    document.getElementById('hospitalIconCenter2').style.display = "block";

    document.getElementById('hospitalJobBtn').onclick = function () { onHospitalJobBtnClicked(player) };
    document.getElementById('hospitalAdminBtn').onclick = function () { onHospitalAdminBtnClicked(player) };
}

function onHospitalJobBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in the industry: " + player.experience.medical +
    "<br>Your education in the industry: " + player.education.medicM + "<br>Your education in Athletics: " + player.education.sportM;
    document.getElementById('hospitalIconCenter2-1').style.display = "block";

    document.getElementById('hospitalNur').style.cursor = "pointer";
    document.getElementById('hospitalTher').style.cursor = "pointer";
    document.getElementById('hospitalDoc').style.cursor = "pointer";
    document.getElementById('hospitalHead').style.cursor = "pointer";

    document.getElementById('hospitalNur').onclick = function onHospitalNurClicked()
    {
        if(player.education.medicM >= (MEDIC_EDU * MOST)){
            player.employ = "Nurse at the Hospital";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }    };

    document.getElementById('hospitalTher').onclick = function onHospitalTherClicked()
    {
        if(player.education.medicM >= MEDIC_EDU || player.education.sportM >= SPORTS_EDU){
            player.employ = "Physical Therpaist at the Hospital";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('hospitalDoc').onclick = function onHospitalDocClicked()
    {
        if(player.education.medicM >= MEDIC_EDU && player.experience.medical >= (100 * SOME)){
            player.employ = "Doctor at the Hospital";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('hospitalHead').onclick = function onHospitalHeadClicked()
    {
        if(player.education.medicM >= MEDIC_EDU && player.experience.medical >= 100){
            player.employ = "Head Doctor at the Hospital";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onHospitalAdminBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerMsg').innerHTML = "Your experience in management: " + player.experience.admin + 
            "<br>Your experience in the industry: " + player.experience.tech +
            "<br>Your education in Business: " + player.education.businessM;
    document.getElementById('hospitalIconCenter2-2').style.display = "block";

    document.getElementById('hospitalSup').style.cursor = "pointer";
    document.getElementById('hospitalMan').style.cursor = "pointer";
    document.getElementById('hospitalDir').style.cursor = "pointer";
    document.getElementById('hospitalAdmin').style.cursor = "pointer";

    document.getElementById('hospitalSup').onclick = function onHospitalSupClicked()
    {
        if(player.education.businessM >= (BUSINESS_EDU * MOST)){
            player.employ = "Hospital Supervisor";
            player.wage = 10;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('hospitalMan').onclick = function onHospitalManClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU || (player.education.businessM >= (EDUCATION_EDU * MOST) && player.experience.medical >= (100 * SOME))){
            player.employ = "Hospital Manager";
            player.wage = 20;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('hospitalDir').onclick = function onHospitalDirClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && (player.experience.medical >= (100 * SOME) || player.experience.admin >= 200)){
            player.employ = "Hospital Director";
            player.wage = 30;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };

    document.getElementById('hospitalAdmin').onclick = function onTechCeoClicked()
    {
        if(player.education.businessM >= BUSINESS_EDU && player.experience.medical >= 100 && player.experience.admin >= 200){
            player.employ = "Hospital Administrator";
            player.wage = 40;
            updatePlayerInfo(player);
            document.getElementById('centerError').style.color = "green";
            document.getElementById('centerError').innerHTML = "You're hired! Click on the icon again to start working.";
        }
        else{
            document.getElementById('centerError').style.color = "red";
            document.getElementById('centerError').innerHTML = "You do not meet the qualifications";
        }
    };
}

function onHospitalWorkerBtnClicked(player)
{
    clearCenterBox();
    document.getElementById('centerHeader').innerHTML = player.employ;
    document.getElementById('centerMsg').innerHTML = "Experience: " + player.experience.medical;
    document.getElementById('hospitalWorkBox').style.display = "block";

    document.getElementById('hospitalWorkBtn').onclick = function onHospitalWorkBtnClicked()
    {
        if( player.employ == "Nurse at the Hospital" ||
            player.employ == "Physical Therpaist at the Hospital" ||
            player.employ == "Doctor at the Hospital" ||
            player.employ == "Head Doctor at the Hospital" ||
            player.employ == "Hospital Supervisor" ||
            player.employ == "Hospital Manager" ||
            player.employ == "Hospital Director" ||
            player.employ == "Hospital Administrator"){

            player.experience.admin += 1;
        }

        player.money += player.wage;
        player.experience.medical += 1;
        --player.energy;
        updatePlayerInfo(player);
        ++tod;
        if(checkTOD()){
            return;
        }
        if(player.skip == false)
            onHospitalWorkerBtnClicked(player);
        else {
            onEndTurnBtnClicked();
        }
    };
}