const mydata=["영어","중국어", "일본어"];

mydata.forEach(function(value, i){
    console.log("forEach의 첫번째 매개인자 :", value);
    console.log("array문을 그대로 가져다 씀:", mydata[i])
});

for(i in mydata){
    console.log("for in문:",mydata[i]);
};

const testdata=[
     [ "네이버", "naver"],
    [ "다음", "daum"],
    [ "구글", "google"]
 ]
// //1번 콘솔창에 daum이 출력되도록 한다,
// console.log(testdata[1][1]);
// //2번 콘솔창에 네이버, 다음, 구글이 출력되록 한다.(forEach 사용하기)
testdata.forEach((ele, idx)=>{
console.log(ele[0]);
});

const testdataobj=[
    {nn: "네이버",
    href: "http://www.naver.com",
    cls: "naver"},
    {nn: "다음",
    href: "http://www.daum.net",
    cls: "daum"},
    {nn: "구글",
    href: "http://www.google.com",
    cls: "google"}
]

testdataobj.forEach((v, i) => {
    //cls 값으로 li 클래스 추가해주세요
    console.log(`<li class="${v.cls}"><a href="${v.href}">${v.nn}</a></li>`)
});

function nomalfun(){
//선언적 함수 위치 상관없이
//중요한 함수, 우선처리O. 무겁다.
};
const nomalfun=(a, b)=>{
//실행위치 엄청 중요
//1회용 함수, 우선처리X. 가볍다.
};