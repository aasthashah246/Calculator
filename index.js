let val="";
let val2;
let val3;
let operator;
let len;
let result=0;
let str;
let count1=0;
let count2=0;

document.getElementById("sev").onclick=function(){
    val=String(val);
    val+=7;
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("et").onclick=function(){
    val=String(val);
    val+=8;
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("nin").onclick=function(){
    val=String(val);
    val+=9;
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("for").onclick=function(){
    val=String(val);
    val+=4;
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("fiv").onclick=function(){
    val=String(val);
    val+=5;
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("six").onclick=function(){
    val=String(val);
    val+=6;
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("one").onclick=function(){
    val=String(val);
    val+=1;
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("two").onclick=function(){
    val=String(val);
    val+=2;
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("thr").onclick=function(){
    val=String(val);
    val+=3;
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("zroo").onclick=function(){
    val=String(val);
    val+="00";
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("zro").onclick=function(){
    val=String(val);
    val+=0;
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("cncl").onclick=function(){
    val=String(val);
    val="";
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("del").onclick=function(){
    val=String(val);
    val=val.slice(0,-1);
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("dot").onclick=function(){
    val=String(val);
    val+=".";
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("add").onclick=function(){
    val=String(val);
    val+="+";
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("sub").onclick=function(){
    val=String(val);
    val+="-";
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("mult").onclick=function(){
    val=String(val);
    val+="*";
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("div").onclick=function(){
    val=String(val);
    val+="/";
    document.getElementById("label").innerHTML=val;    
}
document.getElementById("per").onclick=function(){
    val=String(val);
    val+="%";
    document.getElementById("label").innerHTML=val;    
   
}

document.getElementById("eql").onclick=function(){
    val=eval(val);
    document.getElementById("label").innerHTML=val;
}