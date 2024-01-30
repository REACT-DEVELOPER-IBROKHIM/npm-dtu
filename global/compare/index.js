function isEqual(resource1, resource2){
  if(compareDataType(resource1, resource2)){
    return checkDataType(resource1, resource2)
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