/*

TO DO LIST

Create a "to do" list that does the following:

1. Takes the value from the input that contains the ID 
   #newItem.
2. Add (append) the item to a list item in the unodered 
   list that contains the ID #todos.
Note: You will need to templatize this by storing the HTML 
   string in a variable.
Hint: <li><div class=listBox><label><input type="checkbox" name="todo-check" id="todo-check"> Done? <span class="todo-content">' + newItem + '</span></label></div></li>
3. Reset the value of ID #newItem.
4. Create a count and show the number of "to do" items on 
   the page.


BONUS:
1. Add a 'delete' button for each individual todo list item
2. Change the todo content to a label that will trigger the item's checkbox
  - Hint: you'll have to give each todo item's checkbox a unique id

*/

var toDoList = [];
var itemsToDo = 0;
var itemsTotal = 0;

var toDoListSample=[false,"My Todo Item"];
toDoList = [toDoListSample,toDoListSample,toDoListSample,[true,"Odd Man Out"]];



function renderToDo(){
  itemsTotal = toDoList.length;
  itemsToDo = 0;

  var renderedCode = "";

  for(q=0;q<toDoList.length;q++){
    renderedCode = renderedCode + '<li><div class="listBox"><label><input type="checkbox" name="todo-check" id="todo-check-'+q+'" ';
    var checked = "";
      if(toDoList[q][0]==false){
        itemsToDo++;
      }else{
        checked = "checked";
      }
    renderedCode = renderedCode + checked + '>&nbsp;&nbsp;Done?  <span class="todo-content">'; 
      renderedCode = renderedCode + toDoList[q][1];
    renderedCode = renderedCode + '</span></label></div><button id="delete'+q+'" type="button">Delete</button></li>';
  }

jQuery("#todos").html(renderedCode);
jQuery("#count").text(itemsToDo);
}



renderToDo();

//Create a function to count the number of to do items.

  //Variable to store total number of list items.

  //Variable to store total number of checked items.

  //Variable to store value when items are checked.

  //Update number of items left.



//Add new item on form submit.
function addNewToDo(e){

  //Prevent page refresh.
  e.preventDefault();

  //Grab value of form input & save into a variable.
  var newItem = [false,""];

  newItem[1] = jQuery("#newItem").val();

  toDoList.push(newItem);
  
  renderToDo();

  //Clear out the text input.
  jQuery("#newItem").val("");
}

jQuery("#new").on("submit",addNewToDo);

//Event listener for click on #todo-check.


//Event listener for click on #delete.

  //Remove the entier li for the deleted to-do item.

  //Update count.


//Listen for click on #clear.

  //Remove all list items.

  //Reset #count to zero.


//Listen for click on #clearCompleted.

  //Remove checked list items.

