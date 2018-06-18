'use strict';
// global shopping-list Item index

const store = (function () {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  const findById = function(id){
    return store.items.find( val => val.id === id );
  };


  const addItem = function (name){
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch(error){
      console.log ('Cannot add item: ' + error.message);
    }
  };

  const findAndToggleChecked = function (id) {
    const itemsToBeChecked  = this.findById(id);
    itemsToBeChecked.checked = !itemsToBeChecked.checked;

  };

  const findAndUpdateName = function(id, newName){
    try {
      Item.validateName(newName);
      const updateName =  this.findById(id);
      this.name = updateName;
    } catch(error){
      console.log ('Cannot add item: ' + error.message);
    }
  };

  const findAndDelete = function(id) {
    const itemIndex = store.items.findIndex( function (elem)
    {
      return elem === id;

    });
    store.items.splice(itemIndex, 1);
  };



  const hideCheckedItems= false;
  const searchTerm = '';


  return {
    items, hideCheckedItems, searchTerm, findById, addItem,
    findAndToggleChecked, findAndUpdateName, findAndDelete
  };

}());
