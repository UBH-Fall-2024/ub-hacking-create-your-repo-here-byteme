function madLib(){
    var noun=document.getElementById("noun").value;
    var adjective=document.getElementById("adjective").value;
    var noun2=document.getElementById("noun2").value;
    var noun3=document.getElementById("noun3").value;
    var verb=document.getElementById("verb").value;
    var p=document.getElementById("text");
    
    p.innerHTML= "Shhh Alice got a story to tell you. Once upon a time, a girl named Alice fell into a " + noun + ". A place known as the Great Wonderland " + noun + " After she went to the Great Wonderland of " + noun + ", she met a " + adjective + "man. Who loves " + noun2 + ". He first told her " + noun3 + ". She " + verb + "TheEnd";
}      