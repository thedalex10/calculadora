
 
 var operacion='';
 var n1=0, acum=0;
 var acum2=1;//acumulador para las multiplicaciones

 function numero(num){

  document.getElementById('caja').value=document.getElementById('caja').value+num;  

 }

 function suma(){
  
  operacion='suma';

  n1=parseInt(document.getElementById('caja').value);

  acum=acum+n1;
  
  document.getElementById('caja').value='';

 }

 function multiplicacion(){
  
  operacion='mult';

  n1=parseInt(document.getElementById('caja').value);

  acum2=acum2*n1;
  
  document.getElementById('caja').value='';

 }

 function resta(){
 
  operacion='resta';

  n1=parseInt(document.getElementById('caja').value);
 
  acum=-n1-acum;
  
  document.getElementById('caja').value='';
  
 }

 var dividir=new Array();
 var i=0, r=0;

 function division(){
 
  operacion='div';

  n1=parseInt(document.getElementById('caja').value);
 
  dividir[i]=n1;

  if(dividir[1]!=0){

   r=dividir[0]/dividir[1];

  }else{ alert('Error: división por cero'); }
  
  document.getElementById('caja').value='';
  i++;

  if(i==2){
   i=0;

  }
  
 }

 function igual(){

  if(operacion=='suma'){
   suma();   
   document.getElementById('caja').value=acum;
   acum=0;//resetea el acumulador
  }

  if(operacion=='resta'){
   resta();   
   document.getElementById('caja').value=acum;
   acum=0;//resetea el acumulador
  }

  if(operacion=='mult'){
   multiplicacion();   
   document.getElementById('caja').value=acum2;
   acum2=1;//resetea el acumulador
  }

  if(operacion=='div'){
   division();   
   document.getElementById('caja').value=r;
  }
  if(operacion=='sen'){
   seno();   
   document.getElementById('caja').value=r;
  }
   if(operacion=='cos'){
   coseno();   
   document.getElementById('caja').value=r;
  }
   if(operacion=='tan'){
   tangente();   
   document.getElementById('caja').value=r;
  }
 if(operacion=='rz'){
   raiz();   
   document.getElementById('caja').value=r;
  }
 }


 function limpiar(){

  document.getElementById('caja').value='';
  operacion='';
  acum=0;
  acum2=1;
  r=0;
  dividir[0]=-1;  
  dividir[1]=-1;
  i=0;
  n1=0;
 }

/* function seno(){
   operacion='sen';
   n1=parseInt(document.getElementById('caja').value);
   n1=Math.sin(document.getElementById('caja').value)
   document.getElementById('caja').value='';
 }

function coseno()){
   operacion='cos';
   n1=parseInt(document.getElementById('caja').value);
   n1=Math.cos(document.getElementById('caja').value)
   document.getElementById('caja').value='';
 }

 function tangente(){
   operacion='tan';
   n1=parseInt(document.getElementById('caja').value);
   n1=Math.tan(document.getElementById('caja').value)
   document.getElementById('caja').value='';
 }

 function raiz(){
   operacion='rz';
   n1=parseInt(document.getElementById('caja').value);
   n1=Math.sqrt(document.getElementById('caja').value)
   document.getElementById('caja').value='';
 }*/