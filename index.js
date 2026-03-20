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

// Task 3: Update the <ul> on the page with a given array of items
function renderList(items) {
    var ul = document.getElementById("shoppingListDisplay");
    ul.innerHTML = "";
    for (var i = 0; i < items.length; i++) {
        var li = document.createElement("li");
        li.textContent = items[i];
        ul.appendChild(li);
    }
}

// Task 3: Called when "Add Item" button is clicked
function handleAdd() {
    var input = document.getElementById("itemInput");
    var item = input.value.trim();

    if (!item) {
        return;
    }

    addItem(item);
    input.value = "";
    displayList();
    renderList(shoppingList);
}

// Task 3: Called when "Remove Last Item" button is clicked
function handleRemove() {
    removeLastItem();
    displayList();
    renderList(shoppingList);
}

// Task 3: Called when the user types in the filter input
function handleFilter() {
    var searchTerm = document.getElementById("filterInput").value;

    if (searchTerm) {
        renderList(filterItems(searchTerm));
    } else {
        renderList(shoppingList);
    }
}