
$(function(){
//     $('.row1.div', '.row2.div').fadeOut('fast').delay(600).fadeIn(800),
//     $('buttong').hoverf(function(){
//           $(this).
//     }

      $('img').hover(function(){
            $(this).fadeTo('fast', .25);
       });
      $('img').mouseout(function(){
      $(this).fadeTo('fast', .8);
      })

      $('button').on('click', function(){
        var name =$('#name').val();
        console.log(name);
        var seatlist= Array.from($('img.clicked'));
        seatlist.forEach(function (seat){
        var paragraph= $(seat).siblings()
        $(paragraph).text(name);
        $(seat).addClass('reserved');
        $(seat).removeClass('clicked');
        })
      });

      $('img').on('click', function (){
        if (!$(this).hasClass('reserved'));
        $(this).toggleClass('clicked');
      });

      $('img').on('hover' , function(){


      })
        
});