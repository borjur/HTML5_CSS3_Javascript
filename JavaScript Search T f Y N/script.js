 /*jshint multistr:true */
var text = "Hello my name is Boris and I am just Borising all year around";
var myName = "Boris";
var hits = [];

for(var a = 0; a < text.length;a++){
    if(text[a]=="C"){
        for(var b = a; b < (myName.length + a); b++){
            hits.push(text[b]);
        }
    }
}
if(hits.length===0){
    console.log("Your name wasnt found!");
}else{
    console.log(hits);
}