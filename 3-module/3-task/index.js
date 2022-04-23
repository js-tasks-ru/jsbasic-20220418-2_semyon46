function camelize(str) {
  let res='';
  for (let i=0;i<str.length;i++){
    if (str[i]==='-'){
      res+=str[i+1].toUpperCase();
      i+=1
      continue
    }
    res+=str[i]
}
return res
}
