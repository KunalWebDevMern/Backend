const fs = require('fs');

// write file
// read file
//update file
//append file
// delete file
// folder Creation 
// copy rename move folder


//file creation wala kaam node me
fs.writeFile("abcd.txt","hey hello",err =>{   // pehle file ka name then usme kya data hoga then ek callback for checking
    if(err){
        console.log(err);
    }
    else{
        console.log("file created");
    }
})