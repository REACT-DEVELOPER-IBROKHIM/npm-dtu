Object.prototype.isEqual = function(data){
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
  let isEqual;
  if(JSON.stringify(actual) === JSON.stringify(compared)){
    isEqual = true
  }
  else{
    isEqual = false
  }
  return isEqual
}