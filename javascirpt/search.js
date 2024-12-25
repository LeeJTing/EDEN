let games = [
    "Counter-Strike: Global Offensive",
    "PUBG: BATTLEGROUNDS",
    "Apex Legends",
    "Call of Duty",
    "Team Fortress 2",
    "Baldur Gate 3",
    "ARK: Surbival Evolved",
    "The Witcher® 3: Wild Hunt",
    "Monster Hunter World",
    "GTA V",
    "Dota 2",
    "Cardfight!!Vaguard Dear Days",
    "Yu-Gi-Oh!Master Duel",
    "Sid Meier Civilization® VI",
    "7 Billion Humans",
    "Dead by daylight",
    "Resident Evil",
    "Sons of The Forest",
    "Doki Doki Literature Club",
    "Song of Saya",
    "Rust",
    "Dont Starve Together",
    "Terraria",
    "Stardew Valley",
    "Ralf",
  ];
  //Sort names in ascending order
  let sortedNames = games.sort();
  
  //reference
  let input = document.getElementById("search-input");
  
  //Execute function on keyup
  input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
  
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "')");
        //Display matched part in bold
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".game-list").appendChild(listItem);
      }
    }
  });
  function displayNames(value) {
    input.value = value;
    removeElements();
  }
  function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }