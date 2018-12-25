
var readline =require("readline");
var test=readline.createInterface({input:process.stdin,
	output:process.stdout});

test.question("1000부터 1004까지입력해보세요",function(answer)
{//console.log(answer);


// test 변수 값을 1004로 설정

switch (answer) {
  case "1000" :
    console.log('선택한 값은 1000입니다.');
    break;
  case "1001" :
	  console.log('선택한 값은 1001입니다.');
    break;
  case "1002" :
	  console.log('선택한 값은 1002입니다.');
    break;
  case "1003" :
	  console.log('선택한 값은 1003입니다.');
    break;
  case "1004" :
	  console.log('선택한 값은 1004입니다.');
    break;
  default :
  console.log('선택한 값이 없습니다.');
    break;}});