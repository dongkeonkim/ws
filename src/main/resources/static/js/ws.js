'use strict';

let tempText = '';
const limitLength = 5000000;

// 글자 수 출력
function getTextCnt (value) {
    if (value.length < limitLength) {
        document.getElementById('blanc_cnt').innerText = value.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('non_blanc_cnt').innerText = value.replace(/\s+/gm, '').length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('word_cnt').innerText = (value.split(/[^\s.*\s$]+/gm).length - 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('row_cnt').innerText = (value.split('\n').length - 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        alert('더 이상 입력할 수 없습니다.\n제한 글자 수: 5,000,000자');
        document.getElementById('input_text').value = document.getElementById('input_text').value.substr(0, limitLength - 1);
    }
}

// 문장 정돈하기 버튼 클릭
function getTextTrim() {
    let text = document.getElementById('input_text');
    let temp = text.value;

    temp = temp.replace(/^\s+/gm, '');	        // 앞 공백 제거
    temp = temp.replace(/\s+$/gm, '');	        // 뒤 공백 제거
    temp = temp.replace(/\s{2,}/gm, ' ');       // 공백 두 개 이상 > 하나로 변환
    temp = temp.replace(/\.\.\./gm, '⋯');       // '...'을 특수문자 '⋯'로 변환
    temp = temp.replace(/\r|\n|\r\n/gm, '\n '); // 띄어쓰기 시 한칸 띄우기
    text.value = ' ' + temp;                    // 맨 앞줄 한칸 띄우기

    getTextCnt(text.value);
}

// 임시저장 버튼 클릭
function setTempText() {
    let text = document.getElementById('input_text');
    tempText = text.value;
}

// 되돌리기 버튼 클릭
function getTempText() {
    document.getElementById('input_text').value = tempText;
    getTextCnt(tempText);
}

// 나가기, 새로고침 요청시
window.addEventListener('beforeunload', (e) => {
    if(document.getElementById('input_text').value.length > 0){
        e.preventDefault();
        e.returnValue = '';
    }
});

