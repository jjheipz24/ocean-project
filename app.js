 let base = hexi(800, 400, setup);
 base.border = "6px #003449 solid";
 base.backgroundColor = "0x007bb8";
 base.scaleToWindow();

 base.start();

 function load() {

 }

 function setup() {

     //green panel
     let backBox = base.rectangle(
         150, base.canvas.height, 0x017301, 0x017301, 1, 0, 0);
     //trash icon
     let trash = base.sprite("trashbag.svg");
     trash.anchor.x = 0.5;
     trash.anchor.y = 0.5;
     backBox.putTop(trash, 0, -trash.y);
     trash.scale.set(0.5, 0.5);
     let trashText = base.text("Trash", "12px Nunito", "white");
     trash.putCenter(trashText, 0, 20);
 }

 function play() {

 }
