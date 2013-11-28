$(function() {
  function neonSign() {
    var randSeconds = Math.ceil(Math.random()*5)+2; // max 7 sec, min 3 sec
    var randDelay = randSeconds*1000;
    //$('#log').append("interval = " + randSeconds +" sec<br>");
    
    var speed=300; // transition speed going form opacity 1 to 0.2 or 0.2 to 1
    var $img=$('img');
    $img.fadeTo(0,0);
    
    $img.delay(randDelay).animate({'opacity':1},speed,function(){
        $img.animate({'opacity':0},speed,neonSign() );
        
    });
  }
  neonSign();
});
