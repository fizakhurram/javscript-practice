// ____________chapter changing case ______________________
// make sentense of capital case with bullean..........

// the example is (in this-- hum ne ek var banaya jis me use se sentense lia or phr ek var hm ne apne liye banaya phr is ko ek flag de kr true kia phr ek loop chalaya or us me keh dia k isy sentense.length tk chlna hai or phr is k andr condition di k jo humara bullean hai wo true hai tw mere variable k andr user ka sentense ajay or us ka first world capital hojay phr flag ko false kr k else m keh dia k baqi sb ko small kr do ""lekin hume tw sentense k hr word k start ka letter capital chahiye"" tw hum ek or condition dengy k jb sentense me space ajay tw phr flag ko true kr do mtlb pehle wala continue hojayga )

// var sentence = prompt ("Enter the sentense:")
// var result = ""
// var makecapital = true;
// for(i=0 ; i<sentence.length ; i++){
//     if(makecapital){
//         result += sentence[i].toUpperCase();
//         makecapital=false ;
//     }else{
//         result+= sentence[i].toLowerCase();
//     }
//     if(sentence[i]=== " "){
//         makecapital = true ;
//     }
// }
// console.log(result)


// exampple two(make sentense of capitalcase with split method)
//is me upr wala hi km kia lekin split se pehle sentense ko tora phr loop chalaya or vars bana kr use redeclare kia uppercase lowercase me phr apne var me push kia than join kr lengy space k sath
// var sentence = prompt ("Enter the sentense:")
// var words = sentence.split(" ")//jb space ayga tw string split ho kr arr banadegi like("hello","world")
// var myarr = []
// for(i=0 ;i<words.length;i++){
//    var forcapital= words[i].slice(0,1);
//    var forsmall=words[i].slice(1);
//    forcapital=forcapital.toUpperCase();
//    forsmall=forsmall.toLowerCase();
//    myarr.push(forcapital+forsmall)

// }
// console.log(myarr.join(" "));

var palindrome = prompt("Enter any one palidrome").toLowerCase();
result= ""
for(i=0 ; i<palindrome.length ; i++){
    if(palindrome[i] !== " "){
        result+=palindrome[i]
    }
}
matchfound=true;
for(i=0 ; i<result.length/2; i++){
    if(result[i]!== result[result.length-1-i]){
        matchfound=false;
        break;
    }
}
if(matchfound){
    console.log("palindrome");
}else{console.log("not palindrome")};
// explination---is me hum ne user se word lia than result ka var declare kr k chor dia than ek loop chalaya k user jo input de us me space na ho or usy simply result ale var me bhej do than hum again ek loop chalaynge matchfound true kr k than hum half loop chalaynge..
// ab condition ka mtlb step by step example madam 
//  result[0] "m" is not equal to result[4] "m" --ye last wala m
// result[1] "a" is not equal to result[3] "a"
// result[2] " d " is not equal to result[2] "d" (odd num me center wala character ek hi hoga jb k even me alg alg half me divide hojaynge)
// is ka mtlb agr ye horha tw matchfound ko false krdo or loop ko rok do 
// example hannah
// result[0] "h" is not equal to result[5] "h"
// result[1] "a" is not equal to result[4] "a"
// result[2] "n" is not equal to result[3] "n"

