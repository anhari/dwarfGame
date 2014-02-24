var user = prompt("Welcome to an adventure game by northfurr! Play by entering one of the words you see in capital letters as your answer to each question! \n\nYou are walking along a stone path when all of a sudden one of the stones springs from the ground in the form of a dwarf! Do you QUESTION him, KILL him, or RUN away?").toUpperCase();

switch(user) {
    case "QUESTION": 
        var logicalChoice = prompt("What a logical choice! Do you want to ask the dwarf for his NAME, his INTENTIONS, or for an EXPLANATION as to what the hell he is?!").toUpperCase();
            if (logicalChoice === "NAME") {
                var askFriends = prompt("The dwarf states 'My name is Bobo, son of Magsoud! Let's be friends!' Do you want to be friends? YES or NO?").toUpperCase();
                var askForDrinks = prompt("Either way, the dwarf asks you to accept the challenge of outdrinking him. Do you accept the challenge? YES or NO?").toUpperCase();
                var answerYes = "YES";
                var answerNo = "NO";
                askFriends;
                	if (askFriends === answerYes || askFriends === answerNo) {
                		askForDrinks;
                			if (askFriends === answerYes && askForDrinks === answerYes) {
                				alert("The dwarf looks excited and says, 'Lets go friend! I'll buy first round!'");
                			} else if (askFriends === answerNo && askForDrinks === answerYes) {
                				alert("The dwarf shrugs off you declining his friendship and says, 'Everyone who drinks with me becomes my friend! You'll see!'");
                			} else if (askForDrinks === answerNo) {
                				alert("The dwarf shakes his head as he hears your nonsense. 'Oh, come on! I'm buying... Don't be such a deadfish!'");
                			} else {
                				alert("Confused by what you just said, the dwarf tries to understand what you just said. He has an aneurysm and collapses.");
                			}
                	} else {
                		alert("You just stare blankly at the dwarf making both of you uncomfortable. He decides to slowly slip pass you and mutters something to himself in disbelief. You hear something regarding how strange humans can be.")
                	}
                
                }
                
             else if (logicalChoice === "INTENTIONS"){
                var askIntentions = "I'm on a noble quest! I just fell asleep among the stones. I'm sorry that I've frighened you but I mean you no harm!";
                alert(askIntentions);
            } else if (logicalChoice === "EXPLANATION") {
                var askExplanation = "The dwarf is shocked. 'I'm a dwarf of course! Have you never met one? I know the number of my people have dwindled as of late, but to have never heard of a dwarf? Well, it's a pleasure to be the first dwarf you've come across I must say. Walk with me if you'd like. Let's grab an ale!'";
                alert(askExplanation);
            } else {
                var genFeedback = "You and the dwarf stare at each other confused. Apparently he only speaks Dwarvish. You break eye contact and move along...";
                alert(genFeedback);
            }
    break;
    case "KILL": 
        var crazyChoice = prompt("Are you crazy?! Okay, have it your way. Do you want to use your SWORD, BOW, or BARE HANDS to end the life of this poor and unfortunate dwarf?").toUpperCase();
        if (crazyChoice === "SWORD") {
            var useSword = "You attempt to stab the dwarf. As your blade nears his belly he turns to stone and your sword shatters. He returns to life and looks deeply into your eyes with an expression of disappointment on his face."; 
            alert(useSword); }
            else if (crazyChoice === "BOW") {
                var useBow = "You grab the first arrow in your quiver that your fingers can clasp and quickly fire it directly at the dwarf's head. As the arrow travels toward the dwarf, he quickly lifts his axe in front of his face and your arrow shatters on the blade. His neutral demeanor has changed. \n\nYou mutter to yourself 'I've made a huuuge mistake.'"
                alert(useBow);
            } else if (crazyChoice === "BARE HANDS"){
                var useBareHands = "You punch the dwarf in the face and break every single bone in your hand. He says 'Come at me bro.'"
                alert(useBareHands);
            } else {
                var genFeedback = "Clearly you don't know how to fight. The dwarf suggests that you sign up for a self-defense class.";
                alert(genFeedback);
            }
    break;
    case "RUN": 
        var cowardlyChoice = prompt("Just because he's a dwarf doesn't mean you should be afraid! Fine, fine fine... have it your way! Do you want to LOOK back after you reached a safe distance or just keep your head down and WALK back the way you came?").toUpperCase();
        if (cowardlyChoice === "LOOK") {
            var lookBack = "You stop and look back at the dwarf in the distance. His head is down and he is sobbing. You've clearly upset a harmless creature.";
            alert(lookBack);
        } else if (cowardlyChoice === "WALK") {
            var walkAway = "You run away without looking back. What a coward!";
            alert(walkAway);
        } else {
            var tripDude = "You're so frightened by the dwarf's beard you've forgotten how to run! As a result you trip over your own feet and get scraped up by the stones! You contemplate if being antisocial is really worth it...";
            alert(tripDude);
        }
    break;
    default: alert("Make sure to enter QUESTION, KILL, or RUN. Reading comprehension, tsk tsk... \n\nClick the Play Again! button.");
}

