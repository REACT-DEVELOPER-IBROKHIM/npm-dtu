Array.prototype.removeDuplicates = function(){
  try{
    const isValidArr = this.every(i => typeof i !== 'undefined');
    if(Array.isArray(this) && isValidArr){
      const copyArr = this.map(clone => JSON.stringify(clone))
      const noDuplicates = copyArr
        .filter((element, index) => copyArr.indexOf(element) === index)
        .map(cloneParse => JSON.parse(cloneParse));
      return noDuplicates
    }
  
    throw new Error("Please provide a valid array. Array should not include undefined value.")
  }
  catch(error){
    console.log(error)
  }
}