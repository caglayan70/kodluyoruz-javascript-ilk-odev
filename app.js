let name=prompt("lütfen adınızı giriniz:")

let myName=document.querySelector("#myName")

myName.innerHTML=`${name}`

let time=document.querySelector("#myClock")
time.innerHTML=`${time}`



function showTime(){
    let suan=new Date()
   let sa= suan.getHours()
   let dk=suan.getMinutes()
   let sn=suan.getSeconds()
   
    var days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    var gi=days[suan.getDay()]
    
    sa=(sa<10)? "0"+sa:sa;
    dk=(dk<10)? "0"+dk:dk;
    sn=(sn<10)? "0"+sn:sn;

    let time=sa+":"+dk+":"+sn+" "+gi
    let myClock=document.querySelector("#myClock").innerHTML=`${time}`

    
    setTimeout(showTime,1000)
}
showTime()