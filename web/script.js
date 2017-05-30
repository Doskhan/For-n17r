$(document).ready(function(){
console.log(1);
//Gallery
(function(){
  var items = $('#gallery .items');
  var width = 1366;
  var index = 0;
  var size = items.find('.item').length;
  items.css({'width' : size * width});

  function move(direction) {
    if (direction == "left" && index > 0) {
      index--;
    }
    else if(direction == "right" && index < size - 1){
      index++;
    }
    if (index==0) {
      $('.headers').fadeIn(1000);
      items.animate({'margin-left': -width * index }, 800, function(){
      $('.headers').fadeIn(1000);
      });
    }
    else {
      $('.headers').fadeOut();
      items.animate({'margin-left': -width * index }, 800, function(){
      $('.headers').fadeIn(1000);
    });
  }
}

  $('.controller').click(function() {
    if ($(this).hasClass('left')) {

      move('left');
    }
    else {
      move('right');
    }
    return false;
  });

  setInterval(function() {
  	if (index==size-1) {
  		index=-1;
  	}
  	move("right");
  }, 3000)
})();

});
