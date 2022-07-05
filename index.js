var theDay = moment().format("MMM Do YY");
$('#currentDay').append(theDay);


var time1 = $("9").text();
var time2 = $("10").text();
var time3 = $("11").text();
var time4 = $("12").text();
var time5 = $("13").text();
var time6 = $("14").text();
var time7 = $("15").text();
var time8 = $("16").text();
var time9 = $("17").text();
var time10 = $("18").text();


var currentTime = moment().hours();


$(document).ready(function () {

    $('#text-1').html(localStorage.getItem('time1'));
    $('#text-2').html(localStorage.getItem('time2'));
    $('#text-3').html(localStorage.getItem('time3'));
    $('#text-4').html(localStorage.getItem('time4'));
    $('#text-5').html(localStorage.getItem('time5'));
    $('#text-6').html(localStorage.getItem('time6'));
    $('#text-7').html(localStorage.getItem('time7'));
    $('#text-8').html(localStorage.getItem('time8'));
    $('#text-9').html(localStorage.getItem('time9'));
    $('#text-10').html(localStorage.getItem('time10'));



    $('button').on("click", function () {
        localStorage.setItem('time1', $('#text-1').val());
        localStorage.setItem('time2', $('#text-2').val());
        localStorage.setItem('time3', $('#text-3').val());
        localStorage.setItem('time4', $('#text-4').val());
        localStorage.setItem('time5', $('#text-5').val());
        localStorage.setItem('time6', $('#text-6').val());
        localStorage.setItem('time7', $('#text-7').val());
        localStorage.setItem('time8', $('#text-8').val());
        localStorage.setItem('time9', $('#text-9').val());
        localStorage.setItem('time10', $('#text-10').val());
    });

        function colorCodeTime() {

            $('.time-block').each(function () {
                var timeBlock = parseInt($(this).attr('id'));
    
                if (currentTime < timeBlock) {
                    $(this).addClass('future').removeClass("past present");
                }
                else if (currentTime > timeBlock) {
                    $(this).addClass('past').removeClass("present future");
                }
                else if (currentTime === timeBlock) {
                    $(this).addClass('present').removeClass("past future")
                }
            });
    
    
        }
        colorCodeTime()
    });
    