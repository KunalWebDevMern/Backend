const fs = require('fs');

// write file
// read file
//update file
//append file
// delete file
// folder Creation 
// copy rename move folder


//file creation wala kaam node me
// fs.writeFile("abcd.txt","hey hello",err =>{   // pehle file ka name then usme kya data hoga then ek callback for checking
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file created");
//     }
// });

// file read wala kaam node me

// fs.readFile("abcd.txt","utf-8",(err,data)=>{  // isme utf-8 likhna hoga agr data chaiye hmare readable format me chaiye toh 
//     // ni toh ye hexa decimal bhasa mei result deiga jo computer read kr skta hai 
//     // if no encoding is specified then no buffer is return
//     //utf-8 sei humei english wala data milega
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// file me append krne wala kaam node me

// fs.appendFile("abcd.txt"," appended data",err=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data appended");
//     }
// })

// file ko rename krna node me 

// fs.rename("abcd.txt","hey.txt",err =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file renamed");
//     }
// })

// file delete krna node me

// fs.unlink("hey.txt",err =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file deleted");
//     }
// })

// folder creation wala kaam node me

// fs.mkdir("lolo",err =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("folder created");
//     }
// })


// folder ko read krna node me

fs.readdir("lolo",{withFileTypes:true},(err,files)=>{   // ab isme jo symbol 1 hoga uska type file hai and jiska symbol 2 hai wo folder hai
    if(err){
        console.log(err);
    }
    else{
        console.log(files);
    }
})


// folder ko delete krna node me

fs.rm("lolo",{recursive:true},err =>{     // agr folder empty na ho toh recursive true krna hoga delete krne ke liye
    if(err){
        console.log(err);
    }
    else{
        console.log("folder deleted");
    }
})