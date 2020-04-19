function validate(){

    var uname=document.getElementById('uname');
    var upass=document.getElementById('upass');

    if(uname.value.trim()==""){
        document.getElementById('dis1').style.display="block";
        uname.style.border="2px solid red";
        return false;
    }
    else if(upass.value.trim()==""){
        document.getElementById('dis2').style.display="block";
        upass.style.border="2px solid red";
        return false;
    }
    else if(upass.value.trim().length<8){
        document.getElementById('dis2').style.display="block";
        upass.style.border="2px solid red";
        return false;
    }
    else{
     return true;
    }

}
