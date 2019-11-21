/* Calls the array of cards used to populate memory game table. 
Each card has front, back & id attributes. */

function getArray() {
    return (arrayOfCards = [
    card1 = {
    front: 'ajax_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 1,
    },

    card2 = {
    front: 'ajax_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 2,
    },

    card3 = {
    front: 'angularJS_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 3,
    },

    card4 = {
    front: 'angularJS_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 4,
    },

    card5 = {
    front: 'bootstrap_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 5,
    },


    card6 = {
    front: 'bootstrap_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 6,
    },

    card7 = {
    front: 'css_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 7,
    },

    card8 = {
    front: 'css_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 8,
    },

    card9 = {
    front: 'html_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 9,
    },

    card10 = {
    front: 'html_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 10,
    },

    card11 = {
    front: 'itil_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 11,
    },

    card12 = {
    front: 'itil_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 12,
    },

    card13 = {
    front: 'JavaScript_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 13,
    },

    card14 = {
    front: 'JavaScript_logo.png',   
    back: 'ilovecode_logo.jpg', 
    id: 14,
    },

    card15 = {
    front: 'json_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 15,
    },


    card16 = {
    front: 'json_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 16,
    },

    card17 = {
    front: 'revature_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 17,
    },

    card18 = {
    front: 'revature_logo.png',
    back: 'ilovecode_logo.jpg', 
    id: 18,
    },

    card19 = {
    front: 'servicenow_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 19,
    },

    card20 = {
    front: 'servicenow_logo.jpg',
    back: 'ilovecode_logo.jpg', 
    id: 20,
    }
] )
}

/* 
Creates the table to hold cards in array (x & y are the axis of the table).
*/

function setDimensions(x, y) {
    
    // initiates table 
    var mytable = document.getElementsByTagName("table")[0];
    mytable.innerHTML = "" 
    iterator = 1;
    //for loop to iterate through dimensions based on user difficulty choice (easy, medium or hard)
    for (var i=0; i < x; i++) {
        var temp = mytable.insertRow(i);
        for(var j=0; j < y; j++) {
            c = temp.insertCell(j);
            c.innerHTML = iterator; 
            c.setAttribute("id", "cell" + iterator);
            iterator++;     
        }
    
    }

    console.log("your cards have been set");
    shuffleAndAssign(iterator,getArray()); 
    showFace(); 
}

/* 
Function to assign all cards to table.
*/

function assignCards(card, cellid) {
    var elem = document.createElement("img");
    elem.setAttribute("src", "photos/"+card.back);
    elem.setAttribute("fsrc", "photos/"+card.front);
    elem.setAttribute("id", "card"+card.id);
    elem.setAttribute("isup", "false");
    var temp = document.getElementById(cellid);
    temp.innerHTML = "";
    temp.appendChild(elem);
}

/*
Calls shuffle function and applies it to arrayOfCards
& then calls assignCards function to insert cards into table. 
*/
function shuffleAndAssign(iterator,arrayOfCards){
    loc = iterator - 1;
    tot = 20-loc
    arrayOfCards.splice(loc, tot);
    shuff = shuffleSomething(arrayOfCards); 
    for (b = 0; b < loc; b++) { 
        assignCards(shuff[b], "cell"+(b+1));
    }
} 

/*
Shuffles an array.
*/
function shuffleSomething(myCards) {
    
    var objtoShuffle = myCards.length, g, s;
    while (objtoShuffle) { //while there is still un-shuffled objects
  
      // Randomly pick something to shuffle
      s = Math.floor(Math.random() * objtoShuffle--);
  
      // Swap it with current object
      g = myCards[objtoShuffle];
      myCards[objtoShuffle] = myCards[s];
      myCards[s] = g;
    }
    return myCards;
  }

/*
Calls the function to turn card over. 
*/

function turnMe() {
    isClicked(this);
 
}

/* 
Loops through cards so when card is clicked, card is turned over 
*/

function showFace(){
    len = document.getElementsByTagName("td").length;
    for (num = 1; num< len+1;num++){
        document.getElementById("card"+num).onclick = turnMe;
    }
}

clicked = "";
id = "";
currentScore = 0;

/* 
Gets "id" attribute from card & changes the card to show front face image when clicked.
*/

function isClicked(aCard) {
    winScore = ((iterator-1)/2);
    el = document.getElementById(aCard.getAttribute("id"));
    if (clicked == "" & aCard.getAttribute("isup") == "false") {
        clicked = aCard.getAttribute("fsrc");
        el.setAttribute("src", aCard.getAttribute("fsrc"));
        el.setAttribute("isup", "true");
        id = aCard.getAttribute("id");
        return; 
    }     

/*
If a first card has been clicked, when second card is turned over, "its a match" is printed to console 
& current score of matched cards is incremented. 

When all cards have been matched, game is complete and alert "You won" runs. 
*/
    if (clicked != "" & aCard.getAttribute("isup") == "false") {
        aCard.setAttribute("isup", "true");
        if (aCard.getAttribute("fsrc")==clicked){
            el.setAttribute("src", aCard.getAttribute("fsrc"));
            el.setAttribute("isup", "true");
            clicked = ""; // is set to nothing, because if card file path matches, can move onto check next crds.
            console.log("Its a match!");
            currentScore++; // increments score of matched cards
            if (currentScore == winScore) {
                setTimeout(() => { // delays the alert to allow last card to be turned over and shown to user.
                alert("You won")}, 150)
           
            return;
        }}
        else{ //if match is not detected after second card is turned, cards are unflipped to original position.
            el2 = document.getElementById(id);
            el.setAttribute("src", el.getAttribute("fsrc"));
            el.setAttribute("isup", "true");
            unflip(el, el2);

            clicked = "";
            id = "";
        }
    } 
}

/*
flip cards back to original state (resetting to backsrcimg), set isup=false, continue.
*/

function unflip(el, el2){
    setTimeout(() => {
        el.setAttribute("src", "photos/ilovecode_logo.jpg");
        el.setAttribute("isup", "false");
        el2.setAttribute("src", "photos/ilovecode_logo.jpg");
        el2.setAttribute("isup", "false");
      }, 500);
    }
  
/*
sets background to dark mode 
*/

function darkMode() {
    document.body.style.backgroundColor = "purple";
  }

/*
sets background to light mode
*/

function lightMode() {
    document.body.style.backgroundColor = "hotpink";
  }





