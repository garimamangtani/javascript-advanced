function addItems() {
  const inputvalue = document.getElementById("newinput").value;

  if (inputvalue.length > 0) {
    //get html ul item
    var list = document.getElementById("todo");
    //create new li item from js
    var listitem = document.createElement("li");
    listitem.className = "list";
    // create the text for thte li item
    var newitem = document.createTextNode(inputvalue);
    //attach the text to the li item
    listitem.appendChild(newitem);

    // attach the li item to the ul in the html
    list.appendChild(listitem);
    document.getElementById("newinput").value = "";
    //ataching buttton to each li
  }
  var deletebuttn = document.createElement("button");
  deletebuttn.appendChild(document.createTextNode("Delete"));
  deletebuttn.className = "deletebtn";
  listitem.appendChild(deletebuttn);
  deletebuttn.addEventListener("click", deleteitem);

  function deleteitem() {
    listitem.classList.add("delete");
  }

  listitem.addEventListener("click", taskDone);
  function taskDone() {
    listitem.classList.toggle("done");
    deletebuttn.classList.toggle("delete");
  }
}

function complete() {}
