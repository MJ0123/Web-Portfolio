var typingBool = false; 
	var home_text = "안녕하세요 Developer 강명제의 포트폴리오 입니다.";
    var typingIdx=0; 
    home_text=home_text.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       
       var tyInt = setInterval(typing,100); // 반복동작 
     } 
     
     function typing(){ 
       if(typingIdx<home_text.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".typing").append(home_text[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
       } 
     }  