//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=150; timeIni=150; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=2;
var score=0; scoreMax=70; scoreInc=10; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FEFDFF"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicidades! Has adivinado la palabra correctamente."; messageTime=""; messageError="¡Inténtalo de nuevo!"; messageErrorG="¡Inténtalo de nuevo!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWhvcmNhZG8uX0NpY2xvX2RlbF9hZ3Vh"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["RVZBUE9SQUNJw5NO","Q09OREVOU0FDScOTTg==","UFJFQ0lQSVRBQ0nDk04=","Q0lDTE8gREVMIEFHVUE=","SU5GSUxUUkFDScOTTg==","QUNVTVVMQUNJw5NO","RVNDT1JSRU5Uw41B","","",""];imaW=["0_vapor.jpeg","0_conden.jpeg","0_Precipitaci__n.jpeg","0_Ciclo_del_Agua.jpeg","0_Infiltraci__n.jpeg","0_Acumulaci__n.jpeg","0_Escorrent__a.jpeg","","",""];queW=["Proceso por el cual el agua se convierte en vapor.","Proceso por el cual el vapor de agua se convierte en líquido.","Agua que cae de las nubes en forma de lluvia, nieve o granizo.","Movimiento continuo del agua entre la superficie de la Tierra y la atmósfera.","Proceso por el cual el agua penetra en el suelo.","Agua que se acumula en lagos, océanos y ríos.","Agua que fluye sobre la superficie del suelo.","","",""];var wordsL=[11,12,13,14,12,11,11,"","",""];var altW=["","","","","","","","","",""];
var auW=["MQ==","Mg==","Mw==","NA==","NQ==","Ng==","Nw==","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Ahorcado._Ciclo_del_agua_resources/media/"; textBNext="Siguiente Palabra";
