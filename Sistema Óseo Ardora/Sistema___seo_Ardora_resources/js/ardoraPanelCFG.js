//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=14; attempts=0; attemptsMax=1;
var score=0; scoreMax=70; scoreInc=5; scoreDec=1
var typeGame=2;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#80FFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="¡Felicidades! "; messageTime=""; messageError="¡Inténtalo de nuevo!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var doneB=["-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"];
var posX=[28,7,-4,7,9,28,36,164,137,200,207,384,160,382]; var posY=[9,60,92,147,171,257,312,70,104,151,220,108,283,75];
var coorx=["NjI=", "Mzk=", "NDI=", "NDA=", "NTU=", "NjI=", "Nzc=", "MjU1", "MjQy", "MjM5", "MjUw", "NDMz", "MjUz", "NDE3"]; var coory=["MTk=", "Njc=", "MTA2", "MTU3", "MTgx", "MjYy", "MzIz", "Nzk=", "MTEz", "MTU4", "MjMw", "MTIz", "Mjkz", "ODg="]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", "", "", ""]; answers=["Cráneo", "Clavícula", "Esternón", "Cúbito", "Radio", "Rótula", "Tibia", "Omoplato", "Costillas", "Cresta ilíaca", "Fémur", "Húmero", "peroné", "columna vertebral"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="U2lzdGVtYV9fX3Nlb19BcmRvcmE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
