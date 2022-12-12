  function checkdice(){
    var randomnumber = Math.floor(Math.random() * 6) + 1;
    var randomPicture = "dice" + randomnumber + ".png";
    var randomImageSource = "images/" + randomPicture;

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
    var randomPicture2 = "dice" + randomNumber2 + ".png";
    var randomImageSource2 = "images/" + randomPicture2;

    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if(randomnumber > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
    }
    else if(randomNumber2 > randomnumber){
        document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!!";
    }
  }