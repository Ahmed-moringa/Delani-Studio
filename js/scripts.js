$(document).ready(function(){
    $("#development-image").click(function(){
        $("#development-image").slideToggle('fast');
        $("#development").slideToggle('fast');
    });
    $("#development").click(function(){
        $("#development").slideToggle('fast');
        $("#development-image").slideToggle('fast');
    });
});

$(document).ready(function(){
    $("#design-image").click(function(){
        $("#design-image").slideToggle('fast');
        $("#design").slideToggle('fast');
    });
    $("#design").click(function(){
        $("#design").slideToggle('fast');
        $("#design-image").slideToggle('fast');
    });
});
  
$(document).ready(function(){
    $("#product-image").click(function(){
        $("#product-image").slideToggle('fast');
        $("#product").slideToggle('fast');
    });
    $("#product").click(function(){
        $("#product").slideToggle('fast');
        $("#product-image").slideToggle('fast');
    });
});

$(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
});