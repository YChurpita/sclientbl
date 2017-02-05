/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function sodrVertSlpr(){
   var slTitle =["Материалы клиентам компании","Materials Company customers","Materials Company Kunden"],
     
       slHrefRu=["Лицензия на поставку природного газа",
                 "Лицензия на утилизацию отходов",
                 "Заключение договора поставки природного газа",
                 "Пример договора на поставку природного газа",
                 "Вакансии предприятий",
                 "Презентация по ТМ Потемкин Таврический",
                 "Презентация ТМ Фаворит",
                 "Презентация 'экспорт продуктов пчеловодства'",
                 "Презентация установки осушки газа для АГНКС"],
                     
       slHrefEn=["Certificate for supply of natural gas",
                 "The license for the disposal of waste",
                 "The contract of delivery of natural gas",
                 "Example agreement for the supply of natural gas",
                 "Jobs companies",
                 "Presentation of TM Potemkin Tauride",
                 "Presentation TM Favorit",
                 "Presentation of the 'export of bee products'",
                 "Presentation of the installation of gas dehydration"],  
                     
                                      
        slHrefDe=["Zertifikat für die Lieferung von Erdgas",
                 "Die Lizenz für die Entsorgung von Abfällen",
                 "Zustandekommen des Vertrages die Lieferung von Erdgas",
                 "Das Beispiel des Vertrages über die Lieferung von Erdgas",
                 "Jobs Unternehmen",
                 "Präsentation der TM Potemkin Tauride",
                 "Präsentation TM Favorit",
                 "Präsentation der 'Export von Bienenprodukten'",
                 "Präsentation der Installation von Gastrocknung"],
                     
        slNewsTitle=["Новости","News","Nachrichten"],             
            
       slNewsRu=["Объем газа в ПГХ Украины на 23 мая составляет 9 миллиардов кубометров",
                 "Украина рассчиталась за зимний газ, но ситуация в энергетике критическая",
                 "Какой должна быть биржа газа в Украине",
                 "Дешевый украинский газ разрушал 'Укргазвыдобування' — Гройсман",
                 "Украина увеличила закачку газа в подземные хранилища",
                 "Украина будет проводить переговоры о цене российского газа",
                 "Какие европейские страны продают Украине газ"],
       
       
     
        slNewsEn=["The volume of gas in UGS Ukraine May 23, at 9 billion cubic meters",
                  "Ukraine has paid for gas winter, but the situation is critical in the energy sector",
                  "What should be the gas market in Ukraine",
                  "Cheap Ukrainian gas destroyed 'Ukrgazvydobuvannya' - Groisman",
                  "Ukraine increased gas injection into underground storage",
                  "Ukraine will hold talks on the price of Russian gas",
                  "Which European countries are selling gas to Ukraine"],
        
        slNewsDe=["Das Volumen des Gases in UGS Ukraine 23. Mai um 9 Milliarden Kubikmeter",
                  "Die Ukraine hat für die Gas Winter bezahlt, aber die Situation ist kritisch, im Energiesektor",
                  "Was soll der Gasmarkt in der Ukraine",
                  "Günstige ukrainischen Gas 'Ukrgazvydobuvannya' zerstört - Groisman",
                  "Ukraine erhöht Gasinjektion in unterirdische Lagerung",
                  "Die Ukraine wird Gespräche über den Preis für russisches Gas halten",
                  "Welche europäischen Ländern verkaufen Gas an die Ukraine"],
                      
                      
                      
        hrefMat=[[
                "index.php?option=com_content&view=article&id=18:litsenziya-na-postavku-gaza-ru&catid=11:toplivo-i-energetika-ru&Itemid=196",
                "index.php?option=com_content&view=article&id=18:litsenziya-na-postavku-gaza-ru&catid=11:toplivo-i-energetika-ru&Itemid=196",
                "index.php?option=com_content&view=article&id=18:litsenziya-na-postavku-gaza-ru&catid=11:toplivo-i-energetika-ru&Itemid=196"],
            
               ["http://sodruzhestvo.ua/index.php/ru/index.php?option=com_content&view=article&id=195:litsenziya-na-pererabotku-ru&catid=60:pererabotka-otkhodov-ru",
                "http://sodruzhestvo.ua/index.php/ru/index.php?option=com_content&view=article&id=195:litsenziya-na-pererabotku-ru&catid=60:pererabotka-otkhodov-ru",
                "http://sodruzhestvo.ua/index.php/ru/index.php?option=com_content&view=article&id=195:litsenziya-na-pererabotku-ru&catid=60:pererabotka-otkhodov-ru"], 
               [
               "index.php?option=com_content&view=article&id=25:zayavka-na-zaklyuchenie-dogovora-postavki-ru&catid=11:toplivo-i-energetika-ru&Itemid=204",
               "index.php?option=com_content&view=article&id=25:zayavka-na-zaklyuchenie-dogovora-postavki-ru&catid=11:toplivo-i-energetika-ru&Itemid=204",
               "index.php?option=com_content&view=article&id=25:zayavka-na-zaklyuchenie-dogovora-postavki-ru&catid=11:toplivo-i-energetika-ru&Itemid=204"],
               
               [
               "index.php?option=com_content&view=article&id=27:tipovyj-dogovor-postavki-ru&catid=11:toplivo-i-energetika-ru",
               "index.php?option=com_content&view=article&id=27:tipovyj-dogovor-postavki-ru&catid=11:toplivo-i-energetika-ru",
               "index.php?option=com_content&view=article&id=27:tipovyj-dogovor-postavki-ru&catid=11:toplivo-i-energetika-ru"],
               
               [
               "index.php?option=com_content&view=article&id=81:vakansii-ru&catid=35:vakansii-ru&Itemid=254",
               "index.php?option=com_content&view=article&id=81:vakansii-ru&catid=35:vakansii-ru&Itemid=254",
               "index.php?option=com_content&view=article&id=81:vakansii-ru&catid=35:vakansii-ru&Itemid=254"],
               
               [
               "https://drive.google.com/file/d/0B1MNE177VKcWYlZkMHR3ZktiUXM/edit?usp=sharing",
               "https://drive.google.com/file/d/0B1MNE177VKcWYlZkMHR3ZktiUXM/edit?usp=sharing",
               "https://drive.google.com/file/d/0B1MNE177VKcWYlZkMHR3ZktiUXM/edit?usp=sharing"],
    
               [
               "https://drive.google.com/file/d/0B1MNE177VKcWYUxyelFfTW9kZXc/edit?usp=sharing",
               "https://drive.google.com/file/d/0B1MNE177VKcWYUxyelFfTW9kZXc/edit?usp=sharing",
               "https://drive.google.com/file/d/0B1MNE177VKcWYUxyelFfTW9kZXc/edit?usp=sharing"],
               
               [
               "https://drive.google.com/file/d/0B1MNE177VKcWMXlyRWNMX1JNMHM/edit?usp=sharing",
               "https://drive.google.com/file/d/0B1MNE177VKcWMXlyRWNMX1JNMHM/edit?usp=sharing",
               "https://drive.google.com/file/d/0B1MNE177VKcWMXlyRWNMX1JNMHM/edit?usp=sharing"],         
   
               [
               "https://drive.google.com/file/d/0B1MNE177VKcWRXJiMEFqRHpzNDQ/edit?usp=sharing",
               "https://drive.google.com/file/d/0B1MNE177VKcWRXJiMEFqRHpzNDQ/edit?usp=sharing",
               "https://drive.google.com/file/d/0B1MNE177VKcWRXJiMEFqRHpzNDQ/edit?usp=sharing"]],           
                      

       titleBuf="", hrefTileBuf, titleNewsBuf="", hrefNewsTileBuf, hrefMatBuf ;  
                     
 /*----------------------------------------------------------------------------*/                    
        this.Init= function(aLang){
            
             if (aLang==="ru"){
                titleBuf=slTitle[0];  
                hrefTileBuf=slHrefRu;
                titleNewsBuf=slNewsTitle[0], 
                hrefNewsTileBuf=slNewsRu;
                hrefMatBuf = [hrefMat[0][0],hrefMat[1][0],hrefMat[2][0],hrefMat[3][0],hrefMat[4][0],hrefMat[5][0],hrefMat[6][0],hrefMat[7][0],hrefMat[8][0]];
             //   alert(hrefMatBuf.toString());
                
             };
             
             if (aLang==="en"){
                titleBuf=slTitle[1]; 
                hrefTileBuf=slHrefEn;
                titleNewsBuf=slNewsTitle[1], 
                hrefNewsTileBuf=slNewsEn;
               hrefMatBuf = [hrefMat[0][1],hrefMat[1][1],hrefMat[2][1],hrefMat[3][1],hrefMat[4][1],hrefMat[5][1],hrefMat[6][1],hrefMat[7][1],hrefMat[8][1]];
             };
             
             if (aLang==="de"){
                titleBuf=slTitle[2];
                hrefTileBuf=slHrefDe;
                titleNewsBuf=slNewsTitle[2], 
                hrefNewsTileBuf=slNewsDe;
                hrefMatBuf = [hrefMat[0][2],hrefMat[1][2],hrefMat[2][2],hrefMat[3][2],hrefMat[4][2],hrefMat[5][2],hrefMat[6][2],hrefMat[7][2],hrefMat[8][2]];
             };
             
        this.getBuf=function(){
           
           return [titleBuf,hrefTileBuf,titleNewsBuf,hrefNewsTileBuf,hrefMatBuf];
            
        };
            
    };
  
};

/*-----------------------------------------------------------------------------*/
function sodrvertSlider(){
     var tSliderLine,
         countBl,    
         linePosition=0,
         lineCount=0,
         lineInterval=100,
         tSliderTitle ,
         tHrefTitle,
         prop=new  sodrVertSlpr();
 
     
     this.setLine=function(){
         linePosition=-1*((lineInterval)*lineCount);
         $(tSliderLine).animate({top:linePosition+'%'}, 2000);   
     } ;
//------------------------------------------------------------------------------     
     this.init=function(aType,aLang,tLine,tTitle,aRefTitle,aCount){
         countBl=aCount;
         tSliderLine=document.getElementById(tLine);
         tSliderTitle=document.getElementsByClassName(tTitle);
         
         prop.Init(aLang);
         if(aType===1){
            tSliderTitle[0].innerHTML=prop.getBuf()[0];
            tSliderTitle[1].innerHTML=prop.getBuf()[0];
         }
  
         if(aType===2){
            tSliderTitle[0].innerHTML=prop.getBuf()[2];
            tSliderTitle[1].innerHTML=prop.getBuf()[2];
         }
         
         for (var i=1;i<=aCount;i++){
             if(aType===1){ 
                tHrefTitle=document.getElementById(aRefTitle+i);
                tHrefTitle.innerHTML=prop.getBuf()[1][i-1];
                tHrefTitle.href=prop.getBuf()[4][i-1];
               
                
            }
            if(aType===2){ 
                tHrefTitle=document.getElementById(aRefTitle+i);
                tHrefTitle.innerHTML=prop.getBuf()[3][i-1];
            }
            
         };
     
     };
//------------------------------------------------------------------------------
     
     this.onClickTB=function(aVal){
      
     
         if (aVal==='btm'){
           if (lineCount<=3) lineCount++;
           if (lineCount>=3) lineCount=0;
         };
         
         if (aVal==='top'){
           if (lineCount>0) lineCount--;    
         };   
          this.setLine();
         
       
  };
  
  
  
//------------------------------------------------------------------------------
    this.onHorClick=function(aVar){
          var btnName='';
          var telName='';
          for (var i=1;i<=5;i++){
           //   btnName='sod-gor-btn'+i.toString() ;  
                if (btnName===aVar){
                    lineCount=i-1;  
                    this.setLine();
           
                    telName=document.images[btnName];
                 //   telName.src=imgActive ;
                } else{
                    telName=document.images[btnName];
               //     telName.src=imgPasive ; 
                };
           };
          
    };
    
 };
 
var svertsl=new sodrvertSlider();
var svertnwssl=new sodrvertSlider();
 
             $(document).ready(function () {
     svertsl.init(1,'ru','sclient-bl-mat-bl-line','sclient-bl-mat-title','a-sclient-bl-mat-',9);
     svertnwssl.init(2,'ru','sclient-bl-news-bl-line','sclient-bl-mat-title-news','a-news-bl-mat-',7);
     window.setInterval( function (){
     svertnwssl.onClickTB("btm")},10000);
        });