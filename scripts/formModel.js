var infoList = [];

infoList[0] = "<p>Hello and welcome to the NEW Game of Life. The following is a tutorial meant to show you how the game " +
                "is played as well as some of the features that are included.</p>";
infoList[1] = "This is the second slide of the tutorial";
infoList[2] = "This is the third slide of the tutorial";
infoList[3] = "This is the fourth slide of the tutorial";
infoList[4] = "This is the fifth slide of the tutorial";

var playerList = [];

playerList[0] = new Player('black', 500, false, new Experience(), new Education(), false, 0, 0, 0, "Unemployed", 0, 1, 10, false);
playerList[1] = new Player('red', 500, false, new Experience(), new Education(), false, 0, 0, 0, "Unemployed", 0, 1, 10, false);
playerList[2] = new Player('blue', 500, false, new Experience(), new Education(), false, 0, 0, 0, "Unemployed", 0, 1, 10, false);
playerList[3] = new Player('green', 500, false, new Experience(), new Education(), false, 0, 0, 0, "Unemployed", 0, 1, 10, false);
playerList[4] = new Player('yellow', 500, false, new Experience(), new Education(), false, 0, 0, 0, "Unemployed", 0, 1, 10, false);
playerList[5] = new Player('pink', 500, false, new Experience(), new Education(), false, 0, 0, 0, "Unemployed", 0, 1, 10, false);
playerList[6] = new Player('purple', 500, false, new Experience(), new Education(), false, 0, 0, 0, "Unemployed", 0, 1, 10, false);
playerList[7] = new Player('orange', 500, false, new Experience(), new Education(), false, 0, 0, 0, "Unemployed", 0, 1, 10, false);

var properties = [];

properties[0] = new PropertyA();
properties[1] = new PropertyB();
properties[2] = new PropertyC();
properties[3] = new PropertyD();
properties[4] = new PropertyE();
properties[5] = new PropertyF();
properties[6] = new PropertyG();

function setInfoMsgAt(index)
{
    return infoList[index];
}

function GetInfoList()
{
    return infoList;
}

function Player(color, money, exist, experience, education, married, kids, expense, income, employ, wage, home, energy, skip)
{
    this.color = color;
    this.money = money;
    this.exist = exist;
    this.experience = experience;
    this.education = education;
    this.married = married;
    this.kids = kids;
    this.expense = expense;
    this.income = income;
    this.employ = employ;
    this.wage = wage;
    this.home = home;
    this.energy = energy;
    this.skip = skip;
}

function createPlayer(color)
{
    switch(color){
        case 'black':
            playerList[0].exist = true;
            break;
        case 'red':
            playerList[1].exist = true;
            break;
        case 'blue':
            playerList[2].exist = true;
            break;
        case 'green':
            playerList[3].exist = true;
            break;
        case 'yellow':
            playerList[4].exist = true;
            break;
        case 'pink':
            playerList[5].exist = true;
            break;
        case 'purple':
            playerList[6].exist = true;
            break;
        case 'orange':
            playerList[7].exist = true;
            break;
    }
}

function deletePlayer(color)
{
    switch(color){
        case 'black':
            playerList[0].exist = false;
            break;
        case 'red':
            playerList[1].exist = false;
            break;
        case 'blue':
            playerList[2].exist = false;
            break;
        case 'green':
            playerList[3].exist = false;
            break;
        case 'yellow':
            playerList[4].exist = false;
            break;
        case 'pink':
            playerList[5].exist = false;
            break;
        case 'purple':
            playerList[6].exist = false;
            break;
        case 'orange':
            playerList[7].exist = false;
            break;
    }
}

function getPlayer(color)
{
    switch(color){
        case 'black':
            return playerList[0];
        case 'red':
            return playerList[1];
        case 'blue':
            return playerList[2];
        case 'green':
            return playerList[3];
        case 'yellow':
            return playerList[4];
        case 'pink':
            return playerList[5];
        case 'purple':
            return playerList[6];
        case 'orange':
            return playerList[7];
    }
}

function getPlayerList()
{
    return playerList;
}

function calcDaysLeft()
{
    var days;
    var form = document.forms['gameLengthForm'];

    if(form.short.checked){
        days = 25;
    }
    else if(form.medium.checked){
        days = 50;
    }
    else if(form.long.checked){
        days = 100;
    }
    else{
        days = -2;
    }

    return days;
}

function Experience()
{
    this.sales = 0;
    this.tech = 0;
    this.admin = 0;
    this.athletic = 0;
    this.speech = 0;
    this.medical = 0;
    this.pilot = 0;
    this.culinary = 0;
    this.educate = 0;
    this.finance = 0;
    this.law = 0;
}

function Education()
{
    this.businessM = 0;//400;
    this.culinaryM = 0;//100;
    this.lawEnfM = 0;//200;
    this.educationM = 0;//400;
    this.aeroM = 0;//300;
    this.sportM = 0;//300;
    this.medicM = 0;//500;
    this.speechM = 0;//100;
    this.compSciM = 0;//300;

    this.major = false;

    this.stringMajor = "";
}

function PropertyA()
{
    this.price = 0;
    this.owner = "";
}
function PropertyB()
{
    this.price = 0;
    this.owner = "";
}
function PropertyC()
{
    this.price = 0;
    this.owner = "";
}
function PropertyD()
{
    this.price = 0;
    this.owner = "";
}
function PropertyE()
{
    this.price = 0;
    this.owner = "";
}
function PropertyF()
{
    this.price = 0;
    this.owner = "";
}
function PropertyG()
{
    this.price = 0;
    this.owner = "";
}

function getPropertyList()
{
    return properties;
}
