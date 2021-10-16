$("document").ready(function(){
    var hours = $(".hours") ;
    var minutes = $(".minutes") ;
    var seconds = $(".seconds") ;
    var days = $(".day") ;

    // date function
    function getDate(){
    // create date object
    var d = new Date() ;
    // get date values
    let h = d.getHours() ;
    let m = d.getMinutes() ;
    let s = d.getSeconds() ;
    let day = d.getDay() ;
    
   
    // conditional logic
    (h <= 9) ? hours.html("0" + h + "<sub style='font-size:16px; '>H</sub>") : hours.html(h +  "<sub style='font-size:16px; '>H</sub>") ;
    (m <= 9) ? minutes.html("0" + m +  "<sub style='font-size:16px; '>M</sub>" ) : minutes.html(m +  "<sub style='font-size:16px; '>M</sub>") ;
    (s <=9) ? seconds.html("0" + s +  "<sub style='font-size:16px; '>S</sub>") : seconds.html(s +  "<sub style='font-size:16px; '>S</sub>") ;

      // get the day and add active class
     $(days[day]).addClass("active")
   
    }
   
    setInterval(getDate,1000)
})