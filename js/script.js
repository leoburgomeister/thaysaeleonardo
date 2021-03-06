var clock;
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var mes     = data.getMonth() + 1;          // 0-11 (zero=janeiro)
var ano2    = data.getYear() - 100;           // 2 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
			
$(document).ready(function() {
    FlipClock.Lang.Portuguese = {
    
        'years'   : 'Anos',
        'months'  : 'Meses',
        'days'    : 'Dias',
        'hours'   : 'Horas',
        'minutes' : 'Minutos',
        'seconds' : 'Segundos'

    };
    // Set dates.
    var futureDate  = new Date(22,12,10,16,30,00);
    var currentDate = new Date(ano2,mes,dia,hora,min,seg);

    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    // Calculate day difference and apply class to .clock for extra digit styling.
    function dayDiff(first, second) {
        return (second-first)/(1000*60*60*24);
    }

    if (dayDiff(currentDate, futureDate) < 100) {
        $('#clock').addClass('twoDayDigits');
    } else {
        $('#clock').addClass('threeDayDigits');
    }

    if(diff < 0) {
        diff = 0;
    }

    // Instantiate a coutdown FlipClock
    clock = $('#clock').FlipClock(diff, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});

    // $("#bt").on("click",function(event){
    //     event.preventDefault();
    //     console.log(SubmitEvent).val();
    // });
    $('form').on('submit', function(event) {
            
        // Prevent the page from reloading
        event.preventDefault();
        var nome = $("#nome").val();
        var last = $("#last").val();
        var email = $("#email").val();
        
        // Set the text-output span to the value of the first input
        // var input = $().find('input');
        // var input = $input.val();
        console.log(nome +" "+ last +" "+ email);
        // $('#text-output').text("You typed: " + input);
    });


