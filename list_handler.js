//get reference to list container
const listcontainer = document.getElementById('list-group');

//Example data for list items
const items = ['Item 1', 'Item 2', 'Item 3', 'Another Item'];

//Function to add item
function addItem(text)  {
    const list_item = document.createElement('li');
    list_item.classlist.add = ('list-group-item');
    list_item.textContent = text;
    listcontainer.appendChild(list_item); 
}

//Function to remove item (e.g. by index or content)
function removeItem(index) {
    if (listcontainer.children[index]) {
        listcontainer.removeChild(listcontainer.children[index]);
    }  
}

//populate list initially 
items.forEach((itemText) => {
    addItem(itemText);
});