Array.prototype.arrOnly = function(param){
  try{
      if(typeof param === "string"){
        return this.filter(i => typeof i === param)
      }
        throw new Error('Please provide string. Possible arguments arrOnly("string" || "number" ...)')
  }
  catch(error) {
    console.log(error)
  }
}