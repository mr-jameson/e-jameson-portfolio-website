$(document).ready(function(){
  
    $("button").click(function(){

      if($("button").text() == "☰"){
        $("button").text("🞬");
      }else{
        $("button").text("☰");
      }
      console.log("THIS IS WORKING");
      $("li").toggle("slow");
    });  
});