// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
  
}

function appendKitten(name){
  var new_arr = [...kittens, name]
  return new_arr
}

function prependKitten(name){
  var new_arr = [name, ...kittens]
  return new_arr
}

function removeLastKitten(){
  
}

function removeFirstKitten(){
  
}



















