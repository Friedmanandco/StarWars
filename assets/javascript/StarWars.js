  // variables
   // set variables for characters (attacker)
   // array of all other content (remaining characters)
   // set variables for opponets  (defender)

   $(document).ready(function() { 
  	


  	var DarthVader =  {
   	// use objects to group related variables and functions
   			characterName: "DarthVader",
   			healthPower: 280,
   			attackPower: 40,
   			counterAttackPower: 50,
   			imageSrc:"assets/images/Darthvader.png",
   }

    var DarthMaul =  {
   	// use objects to group related variables and functions
   			characterName: "DarthMaul",
   			healthPower: 400,
   			attackPower: 55,
   			counterAttackPower: 60 ,
   			imageSrc:"assets/images/DarthMaul.png"

   }

    var LukeSkywalker =  {
   	// use objects to group related variables and functions
   			characterName: "LukeSkywalker",
   			healthPower: 250,
   			attackPower: 60,
   			counterAttackPower: 70,
   			imageSrc:"assets/images/Lukesky.png"

   }

    var R2D2 =  {
   	// use objects to group related variables and functions
   			characterName: "R2D2",
   			healthPower: 150,
   			attackPower: 25,
   			counterAttackPower: 40,
   			imageSrc:"assets/images/r2.png"
   }
    var ObiWan =  {
   	// use objects to group related variables and functions
   			characterName: "ObiWan",
   			healthPower: 300,
   			attackPower: 45,
   			counterAttackPower: 60 ,
   			imageSrc:"assets/images/Obiwan.png"
   }
    var Yoda =  {
   	// use objects to group related variables and functions
   			characterName: "Yoda",
   			healthPower: 300,
   			attackPower: 50,
   			counterAttackPower: 60,
   			imageSrc:"assets/images/yoda.png"
   }
    var Chewbacca =  {
   	// use objects to group related variables and functions
   			characterName: "Chewbacca",
   			healthPower: 220,
   			attackPower: 30,
   			counterAttackPower: 55,
   			imageSrc: "assets/images/Chewie.png"
   }
	var C3PO =  {
	   	// use objects to group related variables and functions
	   			characterName: "C-3PO",
	   			healthPower: 200,
	   			attackPower: 35,
	   			counterAttackPower: 45,
	   			imageSrc: "assets/images/C3PO-icon.png"
	   		}

// var characterDiv = $('<div>');
// var image = $('<img>');
// image.addClass("imagesize");
// image.attr('src', DarthVader.imageSrc);
// characterDiv.append(image);
// var nameh3 = $('<h3>');
// nameh3.text(Darthvader.characterName);
// characterDiv.append(nameh3);
// characterDiv.attr('data-health-power', Darthvader.healthPower);
// characterDiv.attr('data-attack-power', Darthvader.attackPower);
// characterDiv.attr('data-counter-attack-power', Darthvader.counterAttackPower);
// characterDiv.on('click', addToAttacker);
// $("#Characters").append(characterDiv);
var characterDiv = $('<div>');
var image = $('<img>');
image.addClass("imagesize");
image.attr('src', DarthVader.imageSrc);
characterDiv.append(image);
var nameh3 = $('<h3>');
nameh3.text(DarthVader.characterName);
characterDiv.append(nameh3);
characterDiv.attr('data-health-power', DarthVader.healthPower);
characterDiv.attr('data-attack-power', DarthVader.attackPower);
characterDiv.attr('data-counter-attack-power', DarthVader.counterAttackPower);
characterDiv.on('click', addToAttacker);
$("#Characters").append(characterDiv);





var characterDiv = $('<div>');
var image1 = $('<img>');
image1.addClass("imagesize");
image1.attr('src', DarthMaul.imageSrc);
characterDiv.append(image1);
var nameh3 = $('<h3>');
nameh3.text(DarthMaul.characterName);
characterDiv.append(nameh3);
characterDiv.attr('data-health-power', DarthMaul.healthPower);
characterDiv.attr('data-attack-power', DarthMaul.attackPower);
characterDiv.attr('data-counter-attack-power', DarthMaul.counterAttackPower);
characterDiv.on('click', addToAttacker);
$("#Characters").append(characterDiv);


var characterDiv = $('<div>');
var image2 = $('<img>');
image2.addClass("imagesize");
image2.attr('src', LukeSkywalker.imageSrc);
characterDiv.append(image2);
var nameh3 = $('<h3>');
nameh3.text(LukeSkywalker.characterName);
characterDiv.append(nameh3);
characterDiv.attr('data-health-power', LukeSkywalker.healthPower);
characterDiv.attr('data-attack-power', LukeSkywalker.attackPower);
characterDiv.attr('data-counter-attack-power', LukeSkywalker.counterAttackPower);
characterDiv.on('click', addToAttacker);
$("#Characters").append(characterDiv);

var characterDiv = $('<div>');
var image3 = $('<img>');
image3.addClass("imagesize");
image3.attr('src', R2D2.imageSrc);
characterDiv.append(image3);
var nameh3 = $ ('<h3>');
nameh3.text(R2D2.characterName);
characterDiv.append(nameh3);
characterDiv.attr('data-health-power', R2D2.healthPower);
characterDiv.attr('data-attack-power', R2D2.attackPower);
characterDiv.attr('data-counter-attack-power', R2D2.counterAttackPower);characterDiv.on('click', addToAttacker);
$("#Characters").append(characterDiv);




var image4 = $('<img>');
var characterDiv = $('<div>');
var image4 = $('<img>');
image4.addClass("imagesize");
image4.attr('src', ObiWan.imageSrc);
characterDiv.append(image4);
var nameh3 = $('<h3>');
nameh3.text(ObiWan.characterName);
characterDiv.append(nameh3);
characterDiv.attr('data-health-power', ObiWan.healthPower);
characterDiv.attr('data-attack-power', ObiWan.attackPower);
characterDiv.attr('data-counter-attack-power', ObiWan.counterAttackPower);
characterDiv.on('click', addToAttacker);
$("#Characters").append(characterDiv);
 

var image5 = $('<img>');
var characterDiv = $('<div>');
var image5 = $('<img>');
image5.addClass("imagesize");
image5.attr('src', Yoda.imageSrc);
characterDiv.append(image5);
var nameh3 = $('<h3>');
nameh3.text(Yoda.characterName);
characterDiv.append(nameh3);
characterDiv.attr('data-health-power', Yoda.healthPower);
characterDiv.attr('data-attack-power', Yoda.attackPower);
characterDiv.attr('data-counter-attack-power', Yoda.counterAttackPower);
characterDiv.on('click', addToAttacker);
$("#Characters").append(characterDiv);
  

var image6 = $('<img>');
var characterDiv = $('<div>');
var image6 = $('<img>');
image6.addClass("imagesize");
image6.attr('src', Chewbacca.imageSrc);
characterDiv.append(image6);
var nameh3 = $('<h3>');
nameh3.text(Chewbacca.characterName);
characterDiv.append(nameh3);
characterDiv.attr('data-health-power', Chewbacca.healthPower);
characterDiv.attr('data-attack-power', Chewbacca.attackPower);
characterDiv.attr('data-counter-attack-power', Chewbacca.counterAttackPower);
characterDiv.on('click', addToAttacker);
$("#Characters").append(characterDiv);

var image7 = $('<img>');
image7.attr('src', C3PO.imageSrc);
var characterDiv = $('<div>');
var image7 = $('<img>');
image7.addClass("imagesize");
image7.attr('src', C3PO.imageSrc);
characterDiv.append(image7);
var nameh3 = $('<h3>');
nameh3.text(C3PO.characterName);
characterDiv.append(nameh3);
characterDiv.attr('data-health-power', C3PO.healthPower);
characterDiv.attr('data-attack-power', C3PO.attackPower);
characterDiv.attr('data-counter-attack-power', C3PO.counterAttackPower);
characterDiv.on('click', addToAttacker);


$("#Characters").append(characterDiv);


console.log($("#Characters"));

	

var defender = [];

  var selectChar =[Chewbacca, DarthVader, DarthMaul, LukeSkywalker, C3PO, Yoda, ObiWan, R2D2, ]; 

});




// main functions 


function addToAttacker() {
  // this is the clicked div
  // take this element into the attackers area
  $('#attacker-area').append(this);
  // move all character divs to the defenders area
  // $("#defender-area").append(this);
        
  // debugger;
  // this element will be the attacker  // the rest will be defenders
}

  function addToDefender() {

$('#defender-area').append(this);
stop();






  }

// Main processes 
 // Choose a character (.onclick a character and that will trigger a function that moves selected character)
 // Move selected character into attacker area
 // Return to postition
 // Move all remaining characters back into list 
 // I pick defending character 
 // Defenders character moves into defender area
 // Game begins
 // When game begins you attack or defend 
 // When you attack opponents energy decreases 
 // 

//  how to add object with start function
// var myobj= {
// 	start:function() {...}, // this is object that is being called 
// 	name: "Fido"
// }; 

// myobj.start;
// ^^^^^^^^^this runs whatever code is in curly brackets


// Method is function in object you call it by calling method.function(name), 
// Think of functions as tasks (sub-code)















