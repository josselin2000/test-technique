$(document).ready(function(){
    //ouverture modal
    $('#open_modal').click(function(){
        $('#modal_to_open').css({
            'display':'block'
        });
    });
    //fermeture modal
    $('#close_modal').click(function(){
        $('#modal_to_open').css({
            'display':'none'
        });
    });
});
//envoi mail ajax
$('#send_email').click(function(e){
    e.preventDefault();
    var data = {
        email: $('#email').val(),
        name: $('#name').val(),
        objet: $('#firstname').val(),
        message: $('#message').val()
    };
    ajax
    $.ajax({
        url: "mail.php",
        type: 'POST',
        data: data,
        success: function(data) {
           $('#js_alert_success').css({'display' : 'block'});
           setTimeout(function(){
                $('#js_alert_success').css({'display' : 'none'});
                $('#email').val("");// vide le champs des elements
                $('#name').val("");
                $('#object').val("");
                $('#message').val("")
            }, 3000);
        },
        error: function(data) {
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_danger').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('#firstname').val("");
                $('#message').val("")
           }, 3000);
       }
    });
});
function myfunction() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('projetjs'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 
