// changing theme
let colors = [
    '#ff040491',
    '#0056b3',
    '#0c5460a1',
    '#155724ab',
    '#17a2b8',
    '#944a9780'
]
let indexColor = 1

$('#change').click(function() {
    let date = new Date()
    date.setTime(date.getTime()+3600*24*365*1000)
    let color = colors[indexColor];
    $('body').css('background',color)
    $('#change').css('background',color)
    indexColor++
    if(indexColor==color.length){indexColor=0}
    document.cookie = `color=${color};expires=${date.toUTCString()},path=/`
})
// display the history of this device
let history = ''
for (let i = localStorage.length-1; i >= 0; i--) {
    key = localStorage.key(i)
    history += `<div class="speed-his p-2">
                    <b class="date">${key}</b>
                    <p class="elem my-2">${localStorage.getItem(key)}</p>
                </div>`
}
$("#history").html(history)
// test again
$("#again").click(function(){
        $("#again").css('background',color[indexColor-1])
        
    },()=>{$("#again").css('background','white')})
// first look at the website 
let colorMemory = (document.cookie).slice((document.cookie).indexOf('=')+1,(document.cookie).length)
$('body').css('background',colorMemory)
$('#change').css('background',colorMemory)
$(document).ready(
    function() {
        let date = new Date()
        let currentDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} \n ${date.getDay()}/${date.getMonth()}/${date.getYear()}`
        localStorage.setItem(currentDate,$("#download").text())
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
