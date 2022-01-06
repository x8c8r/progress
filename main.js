const wait = (time) => new Promise(res => window.setTimeout(res, time));
window.setInterval(function () { updateUI(); checkProgress(); }, 50);

clicks = 0;
forClick = 1;
state = 0;

var bgCol = 1;

var canClick = false;

async function checkProgress() {
  if (clicks == 25) click25();
  if (clicks == 50) click50();
  if (clicks == 100) click100();
}

async function updateUI() {
  if(canClick) { document.getElementById('b').textContent = "Clicks: " + clicks; }
}

/*---
States
---*/
async function intro() {

  changeTitle("There is nothing here...yet");
  await wait(5000);

  narrator("It's getting a bit boring just staring at a blank screen huh?");
  changeTitle("Is anyone there?");

  await wait(2000);

  var butQ = confirm("Is it?")
  if (butQ) getButton();
  else {
    narrator("I insist!");
    await wait(1000);
    var butQQ = confirm("IS IT?");
    if (butQQ) getButton();
    else {
      narrator("Poor choice!");
      window.location.reload();
    }

  }
}

async function getButton() {
  document.getElementById("b").style.visibility = "visible";
  narrator("Here, have a button.");
  changeTitle("Nice, a button!");

  await wait(10000);

  narrator("Oh, you have nothing to do with it.");

  await wait(2000);

  narrator("You can have this counter. I don't really need it anyways");
  changeTitle("Is this another Cookie Clicker copy?");

  canClick = true;

  await wait(5000)
  clearText();
}


/*---
Click related monologues
---*/
async function click25() {
  if (clicks >= 25 && clicks < 50) {
    narrator("Hey, I see you are having a lot of fun clicking that button!");
    await wait(2000);
    narrator("So much fun, in fact, that you clicked it 25 times already.");
  }
}

async function click50() {
  if (clicks >= 50) {
    narrator("*thinks* Oh wow, they are really enthusiastic about this button!");
  }
}

async function click100(){
  narrator("Hey, you are doing great!");
  await wait(3000);
  narrator("You really like this damn button...");
  await wait(4000);
  narrator("So, I thought, maybe you want to speed up the clicking.");
  await wait(5000);
  narrator("Don't mind if I move all this stuff a bit?");
  moveButton();
  await wait(2000);
  //narrator("Lemme, add this. And, yep! Here are the upgrades!");
  document.getElementById("nar").textContent = "Flip: I have yet to add stuff like upgrades, so enjoy clicking, and suggesting ideas, by sending them in DMs, idk.";
  addUpgrades();
}

async function moveButton(){
  document.getElementById("b").style.marginLeft = "5%";
  document.getElementById("counter").style.width = "35%";
}


async function addUpgrades(){

}


/*---
Misc
---*/

async function doClick() {
  if (canClick) {
    clicks += forClick;
  }
}

async function narrator(toSay) { document.getElementById("nar").textContent = "Narrator: " + toSay; }

async function clearText() { document.getElementById("nar").textContent = ""; }

function changeTitle(toChange) { document.title = "Progress: " + toChange; }

async function changeTheme(){
  switch(bgCol){
    case 1:
      bgCol = 0;
      document.getElementById("bod").style.backgroundColor = "#121212";
      document.getElementById("nar").style.color = "#FFFFFF";
      document.getElementById("counter").style.color = "#FFFFFF";
      document.getElementById("b").backgroundColor = "#121212";
      break;
      case 0:
        bgCol = 1;
        document.getElementById("bod").style.backgroundColor = "#FFFFFF";
        document.getElementById("nar").style.color = "#000000";
        document.getElementById("counter").style.color = "#000000";
        document.getElementById("b").style.backgroundColor = "#FFFFFF";
        break;
  }

}

