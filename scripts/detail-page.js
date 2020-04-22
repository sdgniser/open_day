var number_of_demonstrations = 15;
var list_items = [];
var selected_demo = 1;
var random = false;
load();

// getting the list of elements
for (var i = 1; i <= number_of_demonstrations; i++) {
  list_item = document.getElementById(i.toString());
  list_items.push(list_item);
}

// giving them the click functionality
list_items.map(click_event);
function click_event(the_elem) {
  the_elem.addEventListener("click", () => {
    // console.log(the_elem.id);
    selected_demo = Number(the_elem.id);
    load();
  });
}

// function to load a particular demo
function load() {
  // clearing other demonstrations from screen
  for (var a = 1; a <= number_of_demonstrations; a++) {
    var id = a.toString() + "-detail";
    document.getElementById(id).style.display = "none";
  }

  // loading the selected one
  document.getElementById(selected_demo.toString() + "-detail").style.display =
    "";

  // loading the demo name in the now-playing-bar
  demo_name = document.getElementById(selected_demo.toString()).innerHTML;
  document.getElementById("demo-name-now-playing").innerHTML =
    "Album: NISER OpenDay (2020) - " + demo_name;
}

// the next button
document.getElementById("next").addEventListener("click", () => {
  if (random) {
    selected_demo = Math.floor(Math.random() * number_of_demonstrations + 1);
  } else {
    if (selected_demo < number_of_demonstrations) {
      selected_demo++;
    } else {
      selected_demo = 1;
    }
  }
  load();
});

// the last button
document.getElementById("last").addEventListener("click", () => {
  if (random) {
    selected_demo = Math.floor(Math.random() * number_of_demonstrations + 1);
  } else {
    if (selected_demo == 1) {
      selected_demo = number_of_demonstrations;
    } else {
      selected_demo--;
    }
  }
  load();
});

// the random button
document.getElementById("random").addEventListener("click", () => {
  if (random) {
    random = false;
  } else {
    random = true;
  }
});
