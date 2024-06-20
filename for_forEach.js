//string [], {} -> JSON.parse
//string -> array 전환 split 메서드
//array -> string 전환 join 메서드 
let charArray = ["H", "e", "l", "l", "o"];
let word = charArray.join("");
console.log(word, typeof word);
// 출력: "Hello"

let characters = "Hello";
let charArray2 = characters.split("");
console.log(charArray, typeof charArray2 );
// 출력: ["H", "e", "l", "l", "o"]


//서울 종로구 까지만 출력되도록 한다.(split을 사용해야합니다.)
const stringdataapi ="서울|종로구|명륜3가|감나무집";
const part = stringdataapi.split("|");
console.log(part[0]+" "+part[1]);

//다른방법
const parts = stringdataapi.split("|");
const result = `${parts[0]} ${parts[1]}`;
console.log(result); // "서울 종로구"
