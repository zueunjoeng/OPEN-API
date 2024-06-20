const storetest = [
    ["사과",10000, 7000] 
    ,["파인애플", 5000, "" ]
    ,["수박", 15000, "" ]
    ,["체리", 13000, 9000 ]
]

//체리는 원가가 13000이고 할인해서 9000 판매 중입니다.
//백틱을 써서 표현식

//1번. 하나의 패턴 확인
console.log(`${storetest[3][0]}는 원가가 ${storetest[3][1]}이고 할인해서 ${storetest[3][2]} 판매 중입니다.`);

//2번. x가 받아야할 변수 확인 -- for in문으로 처리
for(x in storetest){
    console.log(
        `${storetest[x][0]}는 
        원가가 ${storetest[x][1]}이고 할인해서 
        ${storetest[x][2]} 판매 중입니다.`);
}

//3. for Each
storetest.forEach(function(el, idx){
    //console.log(el[0], "는 원가가", el[1], "이고 할인해서", el[2], "판매 중입니다."); 맞는 식이지만 조금 복잡하다.
    console.log(`${el[0]}는 원가가 ${el[1]}이고 할인해서 ${el[2]}에 판매합니다. `)
})
