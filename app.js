// ____________chapter changing case ______________________

// the example is (in this-- hum ne ek var banaya jis me use se sentense lia or phr ek var hm ne apne liye banaya phr is ko ek flag de kr true kia phr ek loop chalaya or us me keh dia k isy sentense.length tk chlna hai or phr is k andr condition di k jo humara bullean hai wo true hai tw mere variable k andr user ka sentense ajay or us ka first world capital hojay phr flag ko false kr k else m keh dia k baqi sb ko small kr do ""lekin hume tw sentense k hr word k start ka letter capital chahiye"" tw hum ek or condition dengy k jb sentense me space ajay tw phr flag ko true kr do mtlb pehle wala continue hojayga )

var sentence = prompt ("Enter the sentense:")
var result = ""
var makecapital = true;
for(i=0 ; i<sentence.length ; i++){
    if(makecapital){
        result += sentence[i].toUpperCase();
        makecapital=false ;
    }else{
        result+= sentence[i].toLowerCase();
    }
    if(sentence[i]=== " "){
        makecapital = true ;
    }
}
console.log(result)


// exampple two
var sentence = prompt ("Enter the sentense:")
var words = sentence.split("")
var myarr = []
for(i=0 ;)