  // variables
   // set variables for characters (attacker)
   // array of all other content (remaining characters)
   // set variables for opponets  (defender)

   $(document).ready(function() { 
  	


  	var DarthVader = 
     {
   	// use objects to group related variables and functions

        graphic: $("<div>").attr(

          { class: "charbox",
          id: "Vader",
          }),

        characterName: "DarthVader",
   			healthPower: 280,
   			attackPower: 40,
   			counterAttackPower: 50,
        healthPowerDisplay: ""
   }

    var DarthMaul = 
     {

          graphic: $("<div>").attr(

          { class: "charbox",
          id: "Maul",
          }),
   	// use objects to group related variables and functions
   			characterName: "DarthMaul",
   			healthPower: 400,
   			attackPower: 55,
   			counterAttackPower: 60 ,
        healthPowerDisplay: ""
   }

    var LukeSkywalker = 
     {
       graphic: $("<div>").attr(

          { class: "charbox",
          id: "Luke",
          }),
   	// use objects to group related variables and functions
   			characterName: "LukeSkywalker",
   			healthPower: 250,
   			attackPower: 60,
   			counterAttackPower: 70,
         healthPowerDisplay: ""
   }

    var R2D2 = 
     {
     graphic: $("<div>").attr(

          { class: "charbox",
          id: "R2D",
          }),
   	// use objects to group related variables and functions
   			characterName: "R2D2",
   			healthPower: 150,
   			attackPower: 25,
   			counterAttackPower: 40,
         healthPowerDisplay: ""
   }
    var ObiWan =  {
         graphic: $("<div>").attr(

          { class: "charbox",
          id: "Obi",
          }),
   	// use objects to group related variables and functions
   			characterName: "ObiWan",
   			healthPower: 300,
   			attackPower: 45,
   			counterAttackPower: 60 ,
        healthPowerDisplay: ""
   }
    var Yoda =
      {
             graphic: $("<div>").attr(

          { class: "charbox",
          id: "Yo",
          }),
   	// use objects to group related variables and functions
   			characterName: "Yoda",
   			healthPower: 300,
   			attackPower: 50,
   			counterAttackPower: 60,
        healthPowerDisplay: ""
   }
    var Chewbacca =  
    {   

       graphic: $("<div>").attr(

          { class: "charbox",
          id: "Chewy",
          }),
   	// use objects to group related variables and functions
   			characterName: "Chewbacca",
   			healthPower: 220,
   			attackPower: 30,
   			counterAttackPower: 55,
        healthPowerDisplay: "" 
   }
	var C3PO =  
  {

          graphic: $("<div>").attr(

          { class: "charbox",
          id: "C3P",
          }), 
	   	// use objects to group related variables and functions
	   			characterName: "C-3PO",
	   			healthPower: 200,
	   			attackPower: 35,
	   			counterAttackPower: 45,
          healthPowerDisplay: ""
	   		}


        var player;
        var enemy;



       $(function()
            {

            $("<div>").attr(
            {

              class: "col-md-12",
              id: "charwrapper"
            }).appendTo("#choose");
            $("<div>").attr(
            {
              class: "col-md-1",
              id: "Vader-col"
            }).appendTo("#charwrapper");
            DarthVader.graphic.appendTo("#Vader-col");
            $("<p>Darth Vader</p>").prependTo("#Vader");
            $("<img>").attr(
            { 
              id: "Vader_image",
              alt: "Darth Vader",
              src: "assets/images/Darthvader.png",
              width: "200",
              height: "200"
            }).appendTo("#Vader");
            DarthVader.healthPowerDisplay = $("<p></p>").text(DarthVader.healthPower).attr(
            {
              class: "healthPower",
              id: "Vader_healthPower",
            }).appendTo("#Vader");

            $("<div>").attr(
            {

              class: "col-md-12",
              id: "charwrapper"
            }).appendTo("#choose");
            $("<div>").attr(
            {
              class: "col-md-1",
              id: "Maul-col"
            }).appendTo("#charwrapper");
            DarthMaul.graphic.appendTo("#Maul-col");
            $("<p>Darth Maul</p>").prependTo("#Maul");
            $("<img>").attr(
            { 
              id: "Maul_image",
              alt: "Darth Maul",
              src: "assets/images/DarthMaul.png",
              width: "200",
              height: "200"
            }).appendTo("#Maul");
            DarthMaul.healthPowerDisplay = $("<p></p>").text(DarthMaul.healthPower).attr(
            {
              class: "healthPower",
              id: "Maul_healthPower",
            }).appendTo("#Maul");

            $("<div>").attr(
            {

              class: "col-md-12",
              id: "charwrapper"
            }).appendTo("#choose");
            $("<div>").attr(
            {
              class: "col-md-2",
              id: "Luke-col"
            }).appendTo("#charwrapper");
            LukeSkywalker.graphic.appendTo("#Luke-col");
            $("<p>Luke Skywalker</p>").prependTo("#Luke");
            $("<img>").attr(
            { 
              id: "Luke_image",
              alt: "Luke Skywalker",
              src: "assets/images/Lukesky.png",
              width: "200",
              height: "200"
            }).appendTo("#Luke");
            LukeSkywalker.healthPowerDisplay = $("<p></p>").text(LukeSkywalker.healthPower).attr(
            {
              class: "healthPower",
              id: "Luke_healthPower",
            }).appendTo("#Luke");

            $("<div>").attr(
            {

              class: "col-md-12",
              id: "charwrapper"
            }).appendTo("#choose");
            $("<div>").attr(
            {
              class: "col-md-1",
              id: "R2D-col"
            }).appendTo("#charwrapper");
            R2D2.graphic.appendTo("#R2D-col");
            $("<p>R2D2</p>").prependTo("#R2D");
            $("<img>").attr(
            { 
              id: "RD2_image",
              alt: "R2D2",
              src: "assets/images/r2.png",
              width: "200",
              height: "200"
            }).appendTo("#R2D");
            R2D2.healthPowerDisplay = $("<p></p>").text(R2D2.healthPower).attr(
            {
              class: "healthPower",
              id: "RD2_healthPower",
            }).appendTo("#R2D");

            $("<div>").attr(
            {

              class: "col-md-8",
              id: "charwrapper"
            }).appendTo("#choose");
            $("<div>").attr(
            {
              class: "col-md-2",
              id: "Obi-col"
            }).appendTo("#charwrapper");
            ObiWan.graphic.appendTo("#Obi-col");
            $("<p>Obi wan</p>").prependTo("#Obi");
            $("<img>").attr(
            { 
              id: "Obi_image",
              alt: "Obi wan",
              src: "assets/images/Obiwan.png",
              width: "200",
              height: "200"
            }).appendTo("#Obi");
            ObiWan.healthPowerDisplay = $("<p></p>").text(ObiWan.healthPower).attr(
            {
              class: "healthPower",
              id: "Obi_healthPower",
            }).appendTo("#Obi");

            $("<div>").attr(
            {

              class: "col-md-12",
              id: "charwrapper"
            }).appendTo("#choose");
            $("<div>").attr(
            {
              class: "col-md-2",
              id: "Yo-col"
            }).appendTo("#charwrapper");
           Yoda.graphic.appendTo("#Yo-col");
            $("<p>Master Yoda</p>").prependTo("#Yo");
            $("<img>").attr(
            { 
              id: "Yo_image",
              alt: "Master Yoda",
              src: "assets/images/yoda.png",
              width: "200",
              height: "200"
            }).appendTo("#Yo");
            Yoda.healthPowerDisplay = $("<p></p>").text(Yoda.healthPower).attr(
            {
              class: "healthPower",
              id: "Yo_healthPower",
            }).appendTo("#Yo");

            $("<div>").attr(
            {

              class: "col-md-12",
              id: "charwrapper"
            }).appendTo("#choose");
            $("<div>").attr(
            {
              class: "col-md-2",
              id: "Chewy-col"
            }).appendTo("#charwrapper");
            Chewbacca.graphic.appendTo("#Chewy-col");
            $("<p>Chewbacca</p>").prependTo("#Chewy");
            $("<img>").attr(
            { 
              id: "Chewy_image",
              alt: "Chewbacca",
              src: "assets/images/Chewie.png",
              width: "200",
              height: "200"
            }).appendTo("#Chewy");
            Chewbacca.healthPowerDisplay = $("<p></p>").text(Chewbacca.healthPower).attr(
            {
              class: "healthPower",
              id: "Chewy_healthPower",
            }).appendTo("#Chewy");

            $("<div>").attr(
            {

              class: "col-md-12",
              id: "charwrapper"
            }).appendTo("#choose");
            $("<div>").attr(
            {
              class: "col-md-1",
              id: "C3P-col"
            }).appendTo("#charwrapper");
            C3PO.graphic.appendTo("#C3P-col");
            $("<p> C3PO</p>").prependTo("#C3P");
            $("<img>").attr(
            { 
              id: "C3P_image",
              alt: "C3PO",
              src: "assets/images/C3PO-icon.png",
              width: "200",
              height: "200"
            }).appendTo("#C3P");
            C3PO.healthPowerDisplay = $("<p></p>").text(C3PO.healthPower).attr(
            {
              class: "healthPower",
              id: "C3P_healthPower",
            }).appendTo("#C3P");

            $(".charbox").click(function()
  {
    if ($("#char-col").find(".charbox").length == 0)
    {
      $(this).parent().detach();
      $(this).parent().appendTo("#char-col");
      $("#charwrapper").appendTo("#remainingVictims");
      if ($("#char-col").find("#Vader").length == 1)
        player = DarthVader;
      if ($("#char-col").find("#Maul").length == 1)
        player = DarthMaul;
      if ($("#char-col").find("#Luke").length == 1)
        player = LukeSkywalker;
      if ($("#char-col").find("#R2D").length == 1)
        player = R2D2;
      if ($("#char-col").find("#Obi").length == 1)
        player = ObiWan;
      if ($("#char-col").find("#Yo").length == 1)
        player = Yoda;
      if ($("#char-col").find("#Chewy").length == 1)
        player = Chewbacca;
      if ($("#char-col").find("#C3P").length == 1)
        player = C3PO;
    }
    else if ($("#char-col").find(".charbox").length == 1 && $("#defender").find(".charbox").length == 0)
    {
      $(this).parent().detach();
      $(this).parent().appendTo("#defender");
      if ($("#defender").find("#Vader").length == 1)
        enemy = DarthVader;
      if ($("#defender").find("#Maul").length == 1)
        enemy = DarthMaul;
      if ($("#defender").find("#Luke").length == 1)
        enemy = LukeSkywalker;
      if ($("#defender").find("#R2D").length == 1)
        enemy = R2D2;
      if ($("#defender").find("#Obi").length == 1)
        enemy = ObiWan;
      if ($("#defender").find("#Yo").length == 1)
        enemy = Yoda;
      if ($("#defender").find("#Chewy").length == 1)
        enemy = Chewbacca;
      if ($("#defender").find("#C3P").length == 1)
        enemy = C3PO;
      play(player, enemy);
    
    }

      function play(player, enemy)
{
  if ($("#fightSect").find("#ft-btnRow").length == 0)
  {
    $("<div>").attr(
    {
      class: "row",
      id: "ft-btnRow"
    }).appendTo("#fightSect");
      $("<div>").attr(
      {
        class: "col-md-12",
        id: "fight-col",
      }).appendTo("#ft-btnRow");
        $("<img>").attr(
        {
          id: "lightsaber",
          alt: "Fight!",
          src: "assets/images/attack-button.jpg",
          width: "75",
          height: "75"
        }).appendTo("#fight-col");

          $("<div>").attr(
          {
            class: "row",
            id: "textRow"
          }).appendTo("#fightSect");
            $("<p>").attr(
            {
              id: "youdamage"
            }).appendTo("#textRow");
              $("<p>").attr(
              {
                id: "foedamage"
              }).appendTo("#textRow");

      $("<div>").attr(
      {
        class: "row",
        id: "resetrow"
      }).appendTo("#fightSect");
        $("<div>").attr(
        {
          class: "col-md-12",
          id: "reset-col"
        }).appendTo("#resetrow");
          $("<img>").attr(
          {
            id: "resetButton",
            alt: "RESET",
            src: "assets/images/reset1.jpg",
            width: "75",
            height: "75"
          }).appendTo("#reset-col");
  }
  $("#lightsaber").click(function()
  {
    if (enemy.hp > 0 && player.hp > 0)
    {
      enemy.hp -= player.atk;
      $(enemy.hpDisplay).text(enemy.hp);
      $("#youdamage").text(player.name + " attacks " + enemy.name + " for " + player.atk + " damage.");
      player.atk += player.initAtk;
      if (enemy.hp > 0)
      {
        $("#foedamage").text(enemy.name + " counters " + player.name + ", dealing " + enemy.ctr + " damage.");
        player.hp -= enemy.ctr;
        $(player.hpDisplay).text(player.hp);
        if (player.hp <= 0)
        {
          $("#char-col").html("");
          $("#youdamage").html("");
          $("#foedamage").html("You are defeated. Click the Reset button to play again");
        }
      }
      else if (enemy.hp <= 0)
      {
        $("#defender").html("");
        $("#foedamage").html("");
        $("#youdamage").html(enemy.name + " defeated!");
        if ($("#remainingVictims").find(".col-md-3").length == 0)
        {
          alert("You win!");
          location.reload(true);
        }
      }
    }
    else if (enemy.hp <= 0)
    {
      $("#youdamage").html("There is no enemy here.");
    }
    else if (player.hp <= 0)
    {
      $("#foedamage").html("You are still dead. Press the Reset button to play again.");
    }
  });

$("#resetButton").click(function()
{
  if ($("#char-col").find(".col-md-3").length > 0)
  {
    var r = confirm("Are you sure?");
    if (r == true)
      location.reload(true);
    else
      return;
  }
  else
    location.reload(true);
})


      }  });
         });
          });




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
                                  // var characterDiv = $('<div>');
                                  // var image = $('<img>');
                                  // image.addClass("imagesize");
                                  // image.attr('src', DarthVader.imageSrc);
                                  // characterDiv.append(image);
                                  // var nameh3 = $('<h3>');
                                  // nameh3.text(DarthVader.characterName);
                                  // characterDiv.append(nameh3);
                                  // characterDiv.attr('data-health-power', DarthVader.healthPower);
                                  // characterDiv.attr('data-attack-power', DarthVader.attackPower);
                                  // characterDiv.attr('data-counter-attack-power', DarthVader.counterAttackPower);
                                  // characterDiv.on('click', addToAttacker);
                                  // $("#Characters").append(characterDiv);





                                  // var characterDiv = $('<div>');
                                  // var image1 = $('<img>');
                                  // image1.addClass("imagesize");
                                  // image1.attr('src', DarthMaul.imageSrc);
                                  // characterDiv.append(image1);
                                  // var nameh3 = $('<h3>');
                                  // nameh3.text(DarthMaul.characterName);
                                  // characterDiv.append(nameh3);
                                  // characterDiv.attr('data-health-power', DarthMaul.healthPower);
                                  // characterDiv.attr('data-attack-power', DarthMaul.attackPower);
                                  // characterDiv.attr('data-counter-attack-power', DarthMaul.counterAttackPower);
                                  // characterDiv.on('click', addToAttacker);
                                  // $("#Characters").append(characterDiv);


                                  // var characterDiv = $('<div>');
                                  // var image2 = $('<img>');
                                  // image2.addClass("imagesize");
                                  // image2.attr('src', LukeSkywalker.imageSrc);
                                  // characterDiv.append(image2);
                                  // var nameh3 = $('<h3>');
                                  // nameh3.text(LukeSkywalker.characterName);
                                  // characterDiv.append(nameh3);
                                  // characterDiv.attr('data-health-power', LukeSkywalker.healthPower);
                                  // characterDiv.attr('data-attack-power', LukeSkywalker.attackPower);
                                  // characterDiv.attr('data-counter-attack-power', LukeSkywalker.counterAttackPower);
                                  // characterDiv.on('click', addToAttacker);
                                  // $("#Characters").append(characterDiv);

                                  // var characterDiv = $('<div>');
                                  // var image3 = $('<img>');
                                  // image3.addClass("imagesize");
                                  // image3.attr('src', R2D2.imageSrc);
                                  // characterDiv.append(image3);
                                  // var nameh3 = $ ('<h3>');
                                  // nameh3.text(R2D2.characterName);
                                  // characterDiv.append(nameh3);
                                  // characterDiv.attr('data-health-power', R2D2.healthPower);
                                  // characterDiv.attr('data-attack-power', R2D2.attackPower);
                                  // characterDiv.attr('data-counter-attack-power', R2D2.counterAttackPower);characterDiv.on('click', addToAttacker);
                                  // $("#Characters").append(characterDiv);




                                  // var image4 = $('<img>');
                                  // var characterDiv = $('<div>');
                                  // var image4 = $('<img>');
                                  // image4.addClass("imagesize");
                                  // image4.attr('src', ObiWan.imageSrc);
                                  // characterDiv.append(image4);
                                  // var nameh3 = $('<h3>');
                                  // nameh3.text(ObiWan.characterName);
                                  // characterDiv.append(nameh3);
                                  // characterDiv.attr('data-health-power', ObiWan.healthPower);
                                  // characterDiv.attr('data-attack-power', ObiWan.attackPower);
                                  // characterDiv.attr('data-counter-attack-power', ObiWan.counterAttackPower);
                                  // characterDiv.on('click', addToAttacker);
                                  // $("#Characters").append(characterDiv);
                                   

                                  // var image5 = $('<img>');
                                  // var characterDiv = $('<div>');
                                  // var image5 = $('<img>');
                                  // image5.addClass("imagesize");
                                  // image5.attr('src', Yoda.imageSrc);
                                  // characterDiv.append(image5);
                                  // var nameh3 = $('<h3>');
                                  // nameh3.text(Yoda.characterName);
                                  // characterDiv.append(nameh3);
                                  // characterDiv.attr('data-health-power', Yoda.healthPower);
                                  // characterDiv.attr('data-attack-power', Yoda.attackPower);
                                  // characterDiv.attr('data-counter-attack-power', Yoda.counterAttackPower);
                                  // characterDiv.on('click', addToAttacker);
                                  // $("#Characters").append(characterDiv);
                                    

                                  // var image6 = $('<img>');
                                  // var characterDiv = $('<div>');
                                  // var image6 = $('<img>');
                                  // image6.addClass("imagesize");
                                  // image6.attr('src', Chewbacca.imageSrc);
                                  // characterDiv.append(image6);
                                  // var nameh3 = $('<h3>');
                                  // nameh3.text(Chewbacca.characterName);
                                  // characterDiv.append(nameh3);
                                  // characterDiv.attr('data-health-power', Chewbacca.healthPower);
                                  // characterDiv.attr('data-attack-power', Chewbacca.attackPower);
                                  // characterDiv.attr('data-counter-attack-power', Chewbacca.counterAttackPower);
                                  // characterDiv.on('click', addToAttacker);
                                  // $("#Characters").append(characterDiv);

                                  // var image7 = $('<img>');
                                  // image7.attr('src', C3PO.imageSrc);
                                  // var characterDiv = $('<div>');
                                  // var image7 = $('<img>');
                                  // image7.addClass("imagesize");
                                  // image7.attr('src', C3PO.imageSrc);
                                  // characterDiv.append(image7);
                                  // var nameh3 = $('<h3>');
                                  // nameh3.text(C3PO.characterName);
                                  // characterDiv.append(nameh3);
                                  // characterDiv.attr('data-health-power', C3PO.healthPower);
                                  // characterDiv.attr('data-attack-power', C3PO.attackPower);
                                  // characterDiv.attr('data-counter-attack-power', C3PO.counterAttackPower);
                                  // characterDiv.on('click', addToAttacker);


                                  // $("#Characters").append(characterDiv);


                                  // console.log($("#Characters"));

                                  	

                                  // var defender = [];

                                  //   var selectChar =[Chewbacca, DarthVader, DarthMaul, LukeSkywalker, C3PO, Yoda, ObiWan, R2D2, ]; 

                                  // });




                                  // // main functions 


                                  // function addToAttacker() {
                                  //   // this is the clicked div
                                  //   // take this element into the attackers area
                                  //   $('#attacker-area').append(this);
                                  //   // move all character divs to the defenders area
                                  //   // $("#defender-area").append(this);
                                          
                                  //   // debugger;
                                  //   // this element will be the attacker  // the rest will be defenders
                                  // }

                                  //   function addToDefender() {

                                  // $('#defender-area').append(this);
                                  // stop();






                                  //   }

                                  // // Main processes 
                                  //  // Choose a character (.onclick a character and that will trigger a function that moves selected character)
                                  //  // Move selected character into attacker area
                                  //  // Return to postition
                                  //  // Move all remaining characters back into list 
                                  //  // I pick defending character 
                                  //  // Defenders character moves into defender area
                                  //  // Game begins
                                  //  // When game begins you attack or defend 
                                  //  // When you attack opponents energy decreases 
                                  //  // 

                                  // //  how to add object with start function
                                  // // var myobj= {
                                  // // 	start:function() {...}, // this is object that is being called 
                                  // // 	name: "Fido"
// }; 

// myobj.start;
// ^^^^^^^^^this runs whatever code is in curly brackets


// Method is function in object you call it by calling method.function(name), 
// Think of functions as tasks (sub-code)















