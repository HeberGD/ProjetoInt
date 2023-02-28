
// ATIVAÇÃO DAS FUNÇÕES
$(document).ready(function() {
    nav();
    formularios();


});
$(window).resize(function() {
    nav();
    formularios();


});


// FUNÇÕES 
function nav() {
    if (document.body.clientWidth < 800) {    
        $("iframe").addClass("tam");
        $('.cassoselInfo').addClass("hide");
    } else {    
        $("iframe").removeClass("tam");
        $('.cassoselInfo').removeClass("hide");
    }
};

function formularios() {
    if (document.body.clientWidth < 800) {    
        $(".bodydiv").addClass("mobilesz");
        
    } else {    
        $(".bodydiv").removeClass("mobilesz");
        
    }
};













