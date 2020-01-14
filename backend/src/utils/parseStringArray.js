module.exports = function parceStringArray(arrayAsString){
   return arrayAsString.split(',').map(tech => tech.trim())
}