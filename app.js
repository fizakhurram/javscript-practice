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

// var palindrome = prompt("Enter any one palidrome").toLowerCase();
// result= ""
// for(i=0 ; i<palindrome.length ; i++){
//     if(palindrome[i] !== " "){
//         result+=palindrome[i]
//     }
// }
// matchfound=true;
// for(i=0 ; i<result.length/2; i++){
//     if(result[i]!== result[result.length-1-i]){
//         matchfound=false;
//         break;
//     }
// }
// if(matchfound){
//     console.log("palindrome");
// }else{console.log("not palindrome")};
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

// ____________18 september 25_____________

// var str = "fizaKHurram345@1234_3gdujhdggxbuxuopoowq1668908*"
// var password = ""
// for(i=0; i<str.length; i++){
//     var randompassword = Math.floor(Math.random()*str.length);
//     password +=str[randompassword];

// }
// console.log(password);

// var date = Date.now();
// console.log(date)//ye miliseconds me dega 1971 se ab tk jitne mili sec hue hain tw is comlication se bachne k liye js ne kch methods btay hain
// date = new Date();
// console.log(date)//ye humein sb btayga date day time gmt
// // or ye humein num me dega agr method(slice etc) lgana hai tw pehle isy string me convert krna parega us k liye
// date =date.toString();
// date =date.slice(0,15);
// console.log(date);
// // ye tw hogya lekin agr agr sirf day chahiye tw
// // again hum isy num m convert krengy date k functions lgane k liye
// date = number(date)
// date= date.getDay();
// console.log(day);

// _________19 september 25__________

// var userDOB = new Date(prompt("Enter your DOB"));
// // console.log(userDOB)
// var today =  new Date();
// // console.log(today)
// userDOB = new Date(userDOB);
// // console.log(userDOB);
// var difference = today.getTime() - userDOB.getTime();
// // console.log(difference);
// age = Math.round(difference/(1000*60*60*24*30*12));
// console.log(age);


// ______________25 sep 25___________
// ___________q no 1__________
// function currentdatetime(datetime){
//     document.write(datetime);
// }
// currentdatetime(new Date());

// // ____________q no 2___________
// function username(userfirstname,userlastname){
//     console.log("Thank You so much " + userfirstname +"" + userlastname );

// }
// username(prompt("Enter Your First name...") , prompt("Enter Your Last name..."));

// _________q no 3______________
// function nums(num1 , num2){//in this() are parameters (params)..
//     console.log(num1 + num2)
// }
// var usernum1 = Number(prompt("Enter the first num for sum.."));//____________arguments
// var usernum2 = Number(prompt("Enter the second number for sum.."));//__________
// nums(usernum1 , usernum2);

// _________q no 4_______________
// there are two methods
//the first one is
// function userdata(num1 , num2 , operator){
//     if(operator==="+"){
//         document.write(num1 + num2);
//     }else if(operator==="-"){
//         document.write(num1 - num2);
//     }else if(operator=== "/"){
//         document.write(num1 / num2);
//     }else if(operator === "*"){
//         document.write(num1 * num2)
//     }else{
//         alert("Invalid Operator")
//     }
// }
// usernum1 = Number(prompt("Enter the first num"));
// usernum2 = Number(prompt("Enter the second num"))
// useroperator = Number(prompt("Enter the operator"));
// userdata(usernum1 , usernum2 , useroperator);
// //the second one is

// function userdata(num1 , num2 , operator ){
//     var add = num1 + num2
//     var sub = num1 - num2
//     var multiplication = num1 * num2 
//     var divide = num1 / num2
//     return [add , sub , multiplication , divide];
// }
// var usernum1 = parseInt(prompt("Enter the first num"));
// var usernum2 = parseInt(prompt("Enter the second num"));
// var useroperator =prompt("Enter the operator");
// userdata(usernum1 , usernum2 , useroperator);

function factorior (n){
    alert("factorior");
    var result = 1;// like i=1*1=1 , i=2*1=2 , i=3*1=3 and so on the value one is given b/c of the same number
    for(i=1 ; i<=n ; i++){
        result*= i;//result=1 , i=1 so 1*1=1 now result is 1 and i=2 so 1*2=2 than result is updated and its value is 2 i=3 so 2*3=6 than result is 6 and i=4 so 6*4=24
    }
    return result ;

}
document.write(factorior(Number(prompt("Enter the number for factorior"))));

function calculatesqaure(x){
    return x**2//x ka square(x*x)
}
// h=b+p
function calculate_h(base,perpendicular){
    function calculatesquare(x){
        return x**2
    }
    var Hypotenous = calculatesquare(base)+ calculate 
}






