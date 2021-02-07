module.exports = function check(str, bracketsConfig) {
let arr1 = bracketsConfig.map((str) => str.join(""));
for (let i=0; i < arr1.length; i++){
  if(str.includes(arr1[i])){
    str = str.replace(arr1[i], "");
    i = -1;
  }
}
  if (str){
    return false;
  }else{
    return true;
  }
}