var par = parseInt(prompt("Pon un numero positivo:", 1));

if(par>=0){
    if(par%2 == 0){
    document.write("PAR");
}else{
    document.write("IMPAR");
}
}else{
    document.write("Pon un numero POSITIVO!!");
}
