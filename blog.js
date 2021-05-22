let Body = {
    // Body라는 변수명을 만들면서 setColor 함수와 setColorBakcground 함수를 각각 생성
    setColor : function (color) {
        document.querySelector('body').style.color = color; // 'body'의 색의 color을 매개인자로 받은 color의 색상으로 변경
    },
    setColorBakcground : function (color) {
        document.querySelector('body').style.backgroundColor = color; // 'body'의 색의 backgroundColor을 매개인자로 받은 color의 색상으로 변경
    }
}
let Links = { 
    // Links라는 변수명을 생성 LinksetColor 함수를 생성
    LinksetColor : function (color) {
    var hrefcolor = document.querySelectorAll('.container .left__sidebar li a'); // .container .left__sidebar li에서 a 태그를 hrefcolor 변수 설정
    let i = 0;
        while(i < hrefcolor.length) { // 위에서 만든 hrefcolor의 배열의 길이만큼 반복
            hrefcolor[i].style.color = color; // hrefcolor의 배열을 i 번 돌면서 Linksetcolor의 매개 color의 색으로 변경
            i = i+1; // i의 값 카운트
        }
    }
}
// ModeChange 함수 생성
function ModeChange (self){ 
        var target = document.querySelector('body'); // target 변수를 'body' 태그 선택을 등록
        if(self.value === 'Night') { // 위에서 받은 매개변수 self에 있는 value 값이 === Night면 실행
            Body.setColor ('#f5f5f5');
            Body.setColorBakcground('#1b1b1b');
            Links.LinksetColor ('#f5f5f5');
            self.value = 'Day'; // 매개변수 self의 value 값을 Day로 변경
        } else {
            Body.setColor('#1b1b1b');
            Body.setColorBakcground ('#f5f5f5');
            Links.LinksetColor('#1b1b1b');
            self.value = 'Night'; // 매개변수 self의 value 값을 Night로 변경
        }
    }