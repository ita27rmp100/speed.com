// changing theme
let color = [
    '#ff040491',
    '#0056b3',
    '#0c5460a1',
    '#155724ab',
    '#17a2b8',
    '#944a9780'
]
let indexColor = 1

$('#change').click(function() {
    console.log(indexColor)
    console.log(color.length)
    $('body').css('background',color[indexColor])
    $('#change').css('background',color[indexColor])
    indexColor++
    if(indexColor==color.length){indexColor=0}
})
// display the history of this device
let history = ''
for (let i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i)
    history += `<tr>
                    <td>${key}</td>
                    <td>${localStorage.getItem(key)}</td>
                </tr>`
}
$("#history").html(history)
// test again
$("#again").click(function(){
    $("#again").css('background',color[indexColor-1])
},()=>{$("#again").css('background','white')})
// exit the notification of subscribition
function disappearFooter(params) {
    $("footer").toggle(1000)
    $("body").css({
        "height": "100vh",
        "align-items": "center",
        // "position": "static",
        "margin-bottom":"15px"
    });
}
$("#exit").click(function() {
    disappearFooter()
})

$("#login #signup").click(function(){
    disappearFooter()
})
$(document).ready(
    function() {
        $('nav').toggle()
        setTimeout(() => {
            $("nav").html($('nav').html)
        },2500);
        $('nav').toggle(2000)
        if(document.title=='Speed'){
        }
        else{$('#again').css('display','none');disappearFooter()}
    }
)