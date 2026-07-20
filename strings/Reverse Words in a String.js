var reverseWords = function(s) {
    
    let words = s.split(" ");

    let result = [];
    for(let word of words){
        if(word !== ""){
            result.push(word)
        }
    }

  return result.reverse().join(" ").trim()
};
