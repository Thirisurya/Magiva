function getrandom() {
    var text = “”;
    var possible = “ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789”;
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function geturl(){
     var url = document.getElementById(“urlinput”).value;
     var protocol_ok = url.startsWith(“http://”) || url.startsWith(“https://”) || url.startsWith(“ftp://”);
     if(!protocol_ok){
         newurl = “http://”+url;
         return newurl;
     }else{
         return url;
     }