Array.prototype.arrOnly = function(param){
  if(typeof param === "string"){
    return this.filter(i => typeof i === param)
  }
  else{
    throw 'Please provide string. Possible arguments arrOnly("string" || "number" ...)'
  }
}