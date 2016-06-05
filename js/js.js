$(function() {
    //Name Spaces
    var nav = $("nav");
    var movieP = $("#movie p");
    var secondtxtP= $("#secondtxt p");
    var secondtxtSep= $("#secondtxt .separator");
    var secondtxtImg= $("#secondtxt img");
    var secondholder= $("#secondholder");
    var thirdholder= $("#thirdholder");
    var fourthholder= $("#fourthholder");
    //Vars
    var vh = $(window).height();
    
    $(window).resize(function(){
        vh = $(window).height();
    })
    
    //Wartości startowe
    $(nav).addClass("big").removeClass("small");
    $(movieP).addClass("mottoshow").removeClass("mottohide");
    
    $(window).scroll(function(){
        var scroll = $(document).scrollTop();

        //Zwiększanie i zmniejszanie menu
        if(scroll>10){

            
            $(nav).addClass("small").removeClass("big");

        }
        else{
            $(nav).addClass("big").removeClass("small");
        };
    
        //Chowanie i pokazywanie Motta
        if( (vh-500) / 2<scroll){
            $(movieP).addClass("mottohide").removeClass("mottoshow");
            
        }
        else{
            $(movieP).addClass("mottoshow").removeClass("mottohide");
        };
        
        if($(secondholder).offset().top - vh / 2<scroll){
            setTimeout(function (){
                    $(secondtxtP).addClass("secondtxtshow").css("opacity","1");
            }, 0);   
        }
        
        if($(secondholder).offset().top - vh / 3 <scroll){
            
                    $(secondtxtSep).addClass("secondtxtshow").css("opacity","1");
                    $(secondtxtImg).addClass("secondlogoshow").css("opacity","1");
               
        }

        
        if($(thirdholder).offset().top - vh / 2<scroll){
            
                    $("#thirdholder p").addClass("thirdtxtshow").css("opacity","1");
             
        }
        
        if($(fourthholder).offset().top - vh / 1.5<scroll){
            
                    $("#fourthtext p:first-of-type").addClass("fourthtxtshow").css("opacity","1");
             
        }
        
        if($(fourthholder).offset().top - vh / 2<scroll){
            
                    $("#fourthtext .separator").addClass("fourthtxtshow").css("opacity","1");
             
        }
        
        if($(fourthholder).offset().top - vh / 2.5<scroll){
            
                    $("#fourthtext p:last-of-type").addClass("fourthtxtshow").css("opacity","1");
             
        }

        
        
    });

    
});