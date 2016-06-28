$(function() {
    //Name Spaces
    var nav = $("nav");
    var movieP = $("#movie p");
    var secondtxtP = $("#secondtxt p");
    var secondtxtSep = $("#secondtxt .separator");
    var secondtxtImg = $("#secondtxt img");
    var secondholder = $("#secondholder");
    var thirdholder = $("#thirdholder");
    var fourthholder = $("#fourthholder");
    var namebox = $("#name");
    var menu = $("#menubutton");
    var menuside = $("#menuside");

    //Vars
    var vh = $(window).height();
    var vw = $(window).width();
    var menutoggle = false;

    //Wartości startowe
    $(nav).addClass("big").removeClass("small");
    $(movieP).addClass("mottoshow").removeClass("mottohide");
    
    $(window).resize(function(){
        vh = $(window).height();
        vw = $(window).width();
        if(vw<=960){
            $(nav).addClass("small").removeClass("big");
        }
        else{
            menutoggle = false;
            $(menuside).css({"transform":"translatex(0%)"});
        }
    })
    
    if(vw<=960){
            $(nav).addClass("small").removeClass("big");
    }

    //Showing and closing menu
    $("#menubutton").click(function(){
        if(menutoggle == false){
            $(menuside).css({"transform":"translatex(0%)"});
            menutoggle = true;
        }
        else{
            $(menuside).css({"transform":"translatex(-100%)"});
            menutoggle = false;
        }
    })
    
    //Closing Pop-up
    $("#wrapper").click(function(){
        $("#wrapper").css({"display":"none"});
        //$("body").css({"overflow":"visible"});
    });

    //Scrolling Effects
    $(window).scroll(function(){
        if(vw>960){
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

        }
        
    });

        //Walidacja

           $(namebox).on('keyup', function(e) {
                var val = $(this).val();
                if (val.match(/[^a-zA-Z]/g)) {
                    $(this).val(val.replace(/[^a-zA-Z]/g, ' '));
                }
            });

        $("#form #submit").click(function(){
            var name = $("#name").val();
            var phone = $("#phone").val();
            var email = $("#email").val();
            var message = $("#message").val();
            var validate = false;
            var filterEmail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

            //Checking Empty Fields
            if ($.trim(name).length == 0 || $.trim(email).length == 0 || $.trim(phone).length == 0 || $.trim(message).length == 0){
                $("#form h4").html("Musisz wypełnić wszystkie pola!");

            }
            else {


                //Checking Email
                if ($.trim(phone).length > 8) {



                    if (filterEmail.test(email)) {

                        validate = true;

                    }

                    else {

                         $("#form h4").html("Wprowadź poprawny Email!");
                    }

                }

                else{
                    $("#form h4").html("Wprowadź numer poprawny numer!");
                }

            }

            



            
            if(validate == true){

                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: { name : name, phone : phone, email : email, message : message }
                }).success(function(){
                    $("#centerform #form").html("<h2 style=\"color:green\">Udało się wysłać wiadomość! Dziękujemy!</h2>");
                    $("#centerform #form").addClass("formanim");
                    $(".container").addClass("loading");
                }).error(function(){
                    $("#centerform #form").html("<h2 style=\"color:red\">Wystąpił błąd. :(</h2>");
                    $("#centerform #form").addClass("formanim");
                    $(".container").addClass("loading");
                })

            }
        });
    
});
