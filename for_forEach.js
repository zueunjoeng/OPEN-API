const store = ["사과", "파인애플", "수박", "체리"]
//반드시 변수 const 선언
//변수 존재여부, 값 편집 가능(변수X)

for(let x=0; x < store.length; x++){
    console.log("for문", store[x]);
}; //값이 없어도 된다. for문이 안돌아갈뿐.

//for in으로 하기
for(let x in store){
    console.log("for in문", store[x]);
};

//forEach
store.forEach(function(x, i){
    //array에 직접 접근해서 값과 index 모두 접근 가능
    //2개의 매개인자 중 앞의 것이 값이 저장되고 뒤의 변수가 index를 저장함
    console.log("forEach문", x);
});
