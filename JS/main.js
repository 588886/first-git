/*(긴주석--> css에서도 사용!)
    1.자바 스크립트 core[핵심]
    2.자바 스크립트 문서객체[DOM]
        *console.log()
        *alert()
        .document.write()
    3.
*/

document.querySelector("#bt01").addEventListener("click", () => {
    alert("계림 상세페이지로 이동합니다.");
    location.href="https://pcmap.place.naver.com/restaurant/33068253/home?from=map&fromPanelNum=1&ts=1684898063767"
});
document.querySelector("#bt02").addEventListener("click", () => {
    alert("우래옥 상세페이지로 이동합니다.");
    location.href="https://pcmap.place.naver.com/restaurant/11679381/home?from=map&fromPanelNum=2&ts=1684911991421"
});
document.querySelector("#bt03").addEventListener("click", () => {
    alert("고든램지 스트리트 피자 상세페이지로 이동합니다.");
    location.href="https://pcmap.place.naver.com/restaurant/1169217087/home?from=map&fromPanelNum=2&ts=1684912060494"
});
document.querySelector("#bt04").addEventListener("click", () => {
    alert("고씨네 천치국수 상세페이지로 이동합니다.");
    location.href="https://pcmap.place.naver.com/restaurant/1794435212/home?from=map&fromPanelNum=2&ts=1684912109798"
});
document.querySelector("#bt05").addEventListener("click", () => {
    alert("도토리 키친 상세페이지로 이동합니다.");
    location.href="https://pcmap.place.naver.com/restaurant/223026237/home?entry=bmp&from=map&fromPanelNum=1&ts=1684912157935"
});
document.querySelector("#bt06").addEventListener("click", () => {
    alert("맨도롱 해장국 상세페이지로 이동합니다.");
    location.href="https://pcmap.place.naver.com/restaurant/38711101/home?from=map&fromPanelNum=2&ts=1684912135666"
});

//모달 창 닫기 버튼 스크립트
let closeBTN = document.querySelector("#closemodal");
let modalBOX = document.querySelector(".modal")
//console.log(closeBTN);
//이 버튼에 클릭을 감지하는 이벤트리스너 등록
closeBTN.addEventListener("click", () =>{
    //console.log(modalBOX);
    modalBOX.style.display = "none";
});
document.querySelector("#closemodal");