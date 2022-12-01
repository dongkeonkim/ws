'use strict';

/*
    TODO: HEADER/FOOTER 제작
    TODO: 다크모드 제작
    TODO: 모바일 모드 제작
    ---------------------------------
    TODO: 한글 영어 다른 언어 등 변경 기능
*/

// 글자 수 출력
function getTextCnt(e) {
    document.getElementById('blankCnt').innerText = e.value.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('nonBlankCnt').innerText = e.value.replace(/\s+/gm, '').length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('wordCnt').innerText = (e.value.split(/[^\s.*\s$]+/gm).length - 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('rowCnt').innerText = (e.value.split('\n').length - 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 입력 화면 넓이 조절
function getTextAreaSize() {
    let size = document.getElementsByName('areaSize');
    let areaSize = size[0].checked ? size[0].value : size[1].value;

    if (areaSize == 'Y') {
        document.getElementById('wsTextArea').style.width = '42%';
    } else {
        document.getElementById('wsTextArea').style.width = '30%';
    }
}

// 커스텀 메뉴 UI 활성화
function showCustomMenu(val) {
    let custom = document.getElementById('trimMenu');
    custom.style.display = val.checked ? '' : 'none';
}

// 문장 정돈하기 버튼 클릭
function getTextTrim() {
    var text = document.getElementById('inputText');
    var temp = text.value;

    // 커스텀
    var type = document.getElementsByName('trimType');
    var textType = type[0].checked ? 'Y' : 'N';

    temp = temp.replace(/^\s+/gm, '');	        // 앞 공백 제거
    temp = temp.replace(/\s+$/gm, '');	        // 뒤 공백 제거
    temp = temp.replace(/\s{2,}/gm, ' ');       // 공백 두 개 이상 > 하나로 변환
    temp = temp.replace(/\.\.\./gm, '⋯');       // '...'을 특수문자 '⋯'로 변환

    if (textType == 'N') {
        temp = temp.replace(/\r|\n|\r\n/gm, '\n ');

        text.value = ' ' + temp;
    } else {
        text.value = temp.replace(/\r|\n|\r\n/gm, ' ');
    }

    getTextCnt(text);
}

// 나가기, 새로고침 요청시
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';

    console.log('데이터 전송');
});

