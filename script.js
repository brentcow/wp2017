
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
        self.animate({left: '180px'}, "slow");
        $("#p1").slideToggle("slow");
        self.animate({left: '-9px'}, "slow");
        
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

//mouseenter

$(document).ready(function(){
    $(".fb").mouseenter(function(){
        var fb = $(".fb");  
        fb.animate({left: '5px'}, "slow");
        fb.animate({left: '-5px'}, "slow");
    });
});

$(document).ready(function(){
    $(".ig").mouseenter(function(){
        var ig = $(".ig");  
        ig.animate({left: '5px'}, "slow");
        ig.animate({left: '-5px'}, "slow");
    });
});

$(document).ready(function(){
    $(".git").mouseenter(function(){
        var git = $(".git");  
        git.animate({left: '5px'}, "slow");
        git.animate({left: '-5px'}, "slow");
    });
});


// typing1
var count=0;
var content1="Cell:(09)12160422 <br> Mail:brent.cow@gmail.com";
function type_write1(){
  if(count<=content1.length){

    count++;  
    document.getElementById('reply_comment').innerHTML=content1.substring(0,count);

    setTimeout("type_write1()",100);
  }
}

// typing2
var count=0;
var content2="Web designing is fun!";
function type_write2(){
  if(count<=content2.length){

    count++;  
    document.getElementById('p1').innerHTML=content2.substring(0,count);

    setTimeout("type_write2()",300);
  }
}
