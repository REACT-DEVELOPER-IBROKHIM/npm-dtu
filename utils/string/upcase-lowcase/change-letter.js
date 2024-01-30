function changeLetter (str, type, param) {
  try{
    const strCopy = str.split("");
    if(typeof param === 'number' && str.charAt(param).match(/^[a-zA-Z]+$/)){
      strCopy.splice(param, 1, str.charAt(param).indentify(type));
      return strCopy.join("")
    }
    else if(typeof param === 'string' && param === "end") {
      return str.slice(0, -1) + strCopy.pop().indentify(type);
    }
    else if(typeof param === 'number' && param >= str.length){
      throw `Please enter number not greater than string. Method .up() is zero-based!`
    }
    else if(typeof param === "string" && !param || param === undefined){
      return str.indentify(type);
    }
    throw new Error(`Please enter valid number or string. Method .up() can include(<number> || "end" || undefined)`)
  }
  catch(error){
    console.log(error)
  }
}

export { changeLetter };