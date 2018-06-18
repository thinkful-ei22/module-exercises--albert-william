'use strict';

const item = (function () {

  const validateName = function(){

        
    if(typeof name === 'undefined'){

      throw new Error ('Name does not exist');
    }

  };

  const create = function(name){
    return{
      id: cuid(),
      name,
      checked: false,
    };
  };
  return{
    validateName, create,
  };

}());


