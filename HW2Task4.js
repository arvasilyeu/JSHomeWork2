const vovelsCounter = (str) => {
    // this task can be solved by adding a symbol 'A',
    // but I added remaining symbols in a upper case
    const vovels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u']
    let counter = 0
    for(letter of str){
     if(vovels.includes(letter)){
         counter++
      }
    }
    return counter
}

console.log(vovelsCounter('The current directory is AD-123'))