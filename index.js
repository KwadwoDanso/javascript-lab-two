// Task 1: Create the array
var shoppingList = [];

// Task 1: Add an item to the array

function addItem(item) {
    if (shoppingList.indexOf(item) !== -1) {
        alert(item + " is already in the list.");
        return;
    }
    shoppingList.push(item);
}

// Task 1: Remove the last item from the array
function removeLastItem() {
    shoppingList.pop();
}


function displayList() {
    console.log(shoppingList);
}

// Task 2: Return all items that contain the search term 
function filterItems(searchTerm) {
    return shoppingList.filter(function (item) {
        return item.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
}