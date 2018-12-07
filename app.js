// LEARNED PIXI.JS AND HEXI.JS https://github.com/kittykatattack/hexi

let base = hexi(800, 400, setup);
base.border = "6px #003449 solid";
base.backgroundColor = "0x007bb8";
base.scaleToWindow();

base.start();

function load() {

}

function setup() {
    //Default Ocean
    /*let oceanBase = base.sprite("images/main-template.svg");
    oceanBase.x = 150;
    oceanBase.scale.set(3.1, 2.7);

    //green panel
    let backBox = base.rectangle(
        150, base.canvas.height, 0x017301, 0x017301, 1, 0, 0);*/

    //New approach to ocean
    //Make the entire background image a background sprite
    let ocean, defaultOcean, trashPollution, oilSpill, chemSpill;

    //default ocean scene
    ocean = base.sprite("images/main-template.svg");
    ocean.scale.set(3, 2.7);

    //same as default sprite
    defaultOcean = base.sprite("images/default.svg");
    defaultOcean.scale.set(3, 2.7);
    defaultOcean.visible = false;

    //trash pollution ocean scene
    trashPollution = base.sprite("images/trash-pollute.svg");
    trashPollution.scale.set(3, 2.7);
    trashPollution.visible = false;

    //oil spill ocean scene
    oilSpill = base.sprite("images/oil-pollute.svg");
    oilSpill.scale.set(3, 2.7);
    oilSpill.visible = false;

    //chemical spill ocean scene
    chemSpill = base.sprite("images/chem-pollute.svg");
    chemSpill.scale.set(3, 2.7);
    chemSpill.visible = false;


    //----------TRASH ICON---------------
    let trash = base.sprite("images/trashbag.svg");
    trash.anchor.x = 0.5;
    trash.anchor.y = 0.5;
    ocean.putTop(trash, 80, 70);
    trash.scale.set(0.6, 0.6);
    //makes trash interactive
    trash.interact = true;

    //-----------OIL ICON---------------
    let oil = base.sprite("images/oil.svg");
    oil.anchor.x = 0.5;
    oil.anchor.y = 0.5;
    ocean.putTop(oil, 80, 210);
    oil.scale.set(0.6, 0.6);
    //makes oil interactive
    oil.interact = true;

    //-----------CHEMICAL ICON---------------
    let chem = base.sprite("images/tank.svg");
    chem.anchor.x = 0.5;
    chem.anchor.y = 0.5;
    ocean.putTop(chem, 85, 340);
    chem.scale.set(0.5, 0.5);
    //makes tank interactive
    chem.interact = true;

    //-----------BUTTON ICON---------------
    let clean = base.sprite("images/button.svg");
    clean.anchor.x = 0.5;
    clean.anchor.y = 0.5;
    clean.scale.set(0.4, 0.4);
    ocean.putTop(clean, 300, 30);
    //makes boat interactive
    clean.interact = true;
    clean.visible = false;

    //-----------BOAT ICON---------------
    let boat = base.sprite("images/boat.svg");
    boat.anchor.x = 0.5;
    boat.anchor.y = 0.5;
    ocean.putTop(boat, 646, 90);
    //makes boat interactive
    boat.interact = true;

    //-----------KELP ICON---------------
    let kelp = base.sprite("images/kelp.svg");
    kelp.anchor.x = 0.5;
    kelp.anchor.y = 0.5;
    ocean.putBottom(kelp, 680, 320);
    //makes kelp interactive
    kelp.interact = true;

    //-----------FISH ICON---------------
    let fish = base.sprite("images/chester-fish.svg");
    fish.anchor.x = 0.5;
    fish.anchor.y = 0.5;
    fish.scale.set(0.5, 0.5);
    ocean.putCenter(fish, 300, 200);
    //makes fish interactive
    fish.interact = true;

    //let mainScene = base.group(trash, oil, chem, boat, kelp, fish);

    //----------SCENE CHANGES--------------

    //Clean up the ocean button makes the screen reset to main ocean
    clean.press = () => {
        ocean = defaultOcean;
        trashPollution.visible = false;
        oilSpill.visible = false;
        chemSpill.visible = false;
        clean.visible = false;
        ocean.visible = true;

    }
    //makes scene show trash pollution
    trash.press = () => {
        ocean = trashPollution;
        ocean.visible = true;
        clean.visible = true;
    }

    //makes scene show oil spill
    oil.press = () => {
        ocean = oilSpill;
        ocean.visible = true;
        clean.visible = true;
    }

    //makes scene show chemical spill
    chem.press = () => {
        ocean = chemSpill;
        ocean.visible = true;
        clean.visible = true;
    }

    //----------POPUP WINDOWS--------------
    // Used tutorial from W3Schools https://www.w3schools.com/howto/howto_css_modals.asp
    var popup = document.getElementById('myPopUp');
    var span = document.getElementsByClassName("close")[0];
    var popText = document.getElementById('popup-text');

    /* FISH POPUP */
    fish.press = () => {
        if (ocean == trashPollution) {
            popText.innerHTML = "Oh no! I thought I was eating food, but it was plastic! Did you know that the trash you throw in the water gets mistaken for food all the time by the animals in the ocean? If this keeps happening, there will be no more of us.";
        } else if (ocean == oilSpill) {
            popText.innerHTML = "Yuck! There's oil in the water. My friend B.T. Dolphin got very sick because of this. When he went up to breathe air, he inhaled a whole bunch of oil. It may not seem like it, but the oil can seep down deeper into the water and make it hard for everyone here to live. Where do we go?";
        } else if (ocean == chemSpill) {
            popText.innerHTML = "What just happened? The chemicals that were dumped into the water are changing the way things are supposed to be. And when things change, it messes up everyone! It's really hard for us to adapt."
        } else {
            popText.innerHTML = "Hello! My name is Chester. I represent all of the animals of the sea. I love my home! It's so clean and full of love.";
        }
        popup.style.display = "block";
    }

    /* KELP POPUP */
    kelp.press = () => {
        if (ocean == trashPollution) {
            popText.innerHTML = "Ah! I'm being squished! Your trash might seem light to you, but it crushes me and makes it impossible for me to survive. The only thing I can do is hope that a fish swims by and knocks it off of me.";
        } else if (ocean == oilSpill) {
            popText.innerHTML = "Umm... did anyone see where the sun went? When oil spills happen, oil sits on top of the water and blocks out the sun. That means no food for us!";
        } else if (ocean == chemSpill) {
            popText.innerHTML = "Huh, something tastes fishy to me. Since I absorb the nutrients from the bottom of the sea, any chemicals that get mixed into the water and abosrbed end up in my food. This hurts my diet a lot."
        } else {
            popText.innerHTML = "I'm just some kelp. I represent all of the plant life in the ocean. We're mean, green, and love being clean!";
        }
        popup.style.display = "block";
    }

    /* HOOMANS POPUP */
    boat.press = () => {
        if (ocean == trashPollution) {
            popText.innerHTML = "The plastic water bottles we throw into the ocean can come back to haunt ua. The toxins in the plastic we use affects our health and can cause cancer.";
        } else if (ocean == oilSpill) {
            popText.innerHTML = "Oh no! There goes our food. When oil spills happen, we can't go fishing because the fish are all gone. A lot of the population relies on fish for their food. What are we supposed to do?";
        } else if (ocean == chemSpill) {
            popText.innerHTML = "Something tastes wrong with our food! When chemicals seep into the ocean, the plant and animal life we eat gets into our diet and our bodies."
        } else {
            popText.innerHTML = "Hello! I'm a man-made boat. I represent all of us on planet Earth.";
        }
        popup.style.display = "block";
    }
    span.onclick = function () {
        popup.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

}

function play() {

}
