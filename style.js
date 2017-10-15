$(document).ready(function(){
    $(".navigation").mouseenter(function(){
      $('.about') .fadeOut();
      $('.hobbies').fadeOut();
      $('.movie').fadeOut();
      $('.music').fadeOut();
      $('.about') .fadeIn();
 $('.hobbies').fadeIn();
 $('.movie').fadeIn();
 $('.music').fadeIn();
    });
});


$(document).ready(function(){
    $(".self-picture").click(function(){
        var self = $(".self-picture");  
        self.animate({left: '200px'}, "slow");
        $("#p1").slideToggle("slow");
        self.animate({left: '-10px'}, "slow");
        
    });
});

$(document).ready(function(){
    $(".hobbies").click(function(){
        window.open('guitar.jpg', 'photograph', config='height=600,width=600,toolbar:0')
    });
});


//mouseenter

$(document).ready(function(){
    $(".about").mouseenter(function(){
        var abo = $(".about");  
        abo.animate({left: '50px'}, "slow");
        abo.animate({fontSize: '3em'}, "slow");
        
    });
});

$(document).ready(function(){
    $(".hobbies").mouseenter(function(){
        var hob = $(".hobbies");  
        hob.animate({right: '50px'}, "slow");
        hob.animate({fontSize: '3em'}, "slow");
    
    });
});

$(document).ready(function(){
    $(".movie").mouseenter(function(){
        var mov = $(".movie");  
        mov.animate({left: '50px'}, "slow");
        mov.animate({fontSize: '3em'}, "slow");
 
    });
});

$(document).ready(function(){
    $(".music").mouseenter(function(){
        var mus = $(".music");  
        mus.animate({right: '50px'}, "slow");
        mus.animate({fontSize: '3em'}, "slow");
  
    });
});

//mouseleave

$(document).ready(function(){
    $(".about").mouseleave(function(){
        var abo = $(".about");  
        abo.animate({left: '-50px'}, "slow");
        abo.animate({fontSize: '3em'}, "slow");
     
    });
});

$(document).ready(function(){
    $(".hobbies").mouseleave(function(){
        var hob = $(".hobbies");  
        hob.animate({right: '-50px'}, "slow");
        hob.animate({fontSize: '3em'}, "slow");
    
    });
});

$(document).ready(function(){
    $(".movie").mouseleave(function(){
        var mov = $(".movie");  
        mov.animate({left: '-50px'}, "slow");
        mov.animate({fontSize: '3em'}, "slow");
 
    });
});

$(document).ready(function(){
    $(".music").mouseleave(function(){
        var mus = $(".music");  
        mus.animate({right: '-50px'}, "slow");
        mus.animate({fontSize: '3em'}, "slow");
  
    });
});
