Object.prototype.isCompletelyEqual = function(data){
  if(compareDataType(this, data)){
    return checkDataType(this, data)
  }
  else{
    return false
  }
}

function compareDataType(...args){
  if(typeof args[0] === typeof args[1]){
    return true
  }
}

function checkDataType(actual, compared){
  let isCompletelyEqual;
  if(JSON.stringify(actual) === JSON.stringify(compared)){
    isCompletelyEqual = true
  }
  else{
    isCompletelyEqual = false
  }
  return isCompletelyEqual
}