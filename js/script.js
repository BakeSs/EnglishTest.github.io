$(document).ready(function(){
    let attemptLabel = document.getElementById("attempt");
    let inputText = document.getElementById("inText");
    let buttonText = document.getElementById("buttonText");
    let goodPoints = document.getElementById("good");
    let badPoints = document.getElementById("bad");
    let attempNumber = 0, goodAns = 0, badAns = 0, tempPoint;

    let engMap = new Map([
        [0, "always"], [1, "never"], [2, "night"],
        [3, "dog"], [4, "joy"], [5, "table"],
        [6, "apple"], [7, "cockroach"], [8, "pillow", ],
        [9, "bed"], [10, "helmet"], [11, "sky"],
        [12, "light"], [13, "laptop"], [14, "tooth"]
    ]);

    let ukrMap = new Map([
        [0, "завжди"], [1, "ніколи"], [2, "ніч"],
        [3, "пес"], [4, "інграшка"], [5, "стіл"],
        [6, "яблуко"], [7, "тарган"], [8, "подушка"],
        [9, "ліжко"], [10, "шолом"], [11, "небо"],
        [12, "світло"], [13, "ноутбук"], [14, "зуб"]
    ]);
    
    let wordsCheckedSet = new Set();

    let randWordNumber = Math.floor(Math.random() * (engMap.size));
    buttonText.innerHTML = engMap.get(randWordNumber);

    $("button").click(function(){
        if(inputText.value == ""){
            alert("Введіть слово правильно!");
        }
        else{
            attemptLabel.innerHTML = ++attempNumber + "/10";

            wordsCheckedSet.add(randWordNumber);

            if(ukrMap.get(randWordNumber) == (inputText.value).toLowerCase()){
                tempPoint = parseInt(goodPoints.innerHTML);
                goodPoints.innerHTML = ++tempPoint;
            } else{
                tempPoint = parseInt(badPoints.innerHTML);
                badPoints.innerHTML = ++tempPoint;
            }
            
            inputText.value = "";
    
            randWordNumber = Math.floor(Math.random() * (engMap.size));

            while(wordsCheckedSet.has(randWordNumber)){
                randWordNumber = Math.floor(Math.random() * (engMap.size));
            }
    
            buttonText.innerHTML = engMap.get(randWordNumber);
            if(attempNumber == 10){
              let level;
              if(goodAns < 5) { level = "potato" }
              else if (goodAns > 4 && goodAns < 8){ level = "school boy"}
              else if (goodAns > 7) { level = "CHMNU user"};
              alert("GAME OVER! You are " + level);
              attempNumber = 0;
        }
      }
    });
  });