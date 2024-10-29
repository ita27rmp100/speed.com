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