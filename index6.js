window.addEventListener('load',function() {
    const p1 = document.getElementById('title')
    console.log(p1)
    const b1 = document.getElementById('btn')
    b1.addEventListener('click',function(){
        console.log('點下去')
    }) 
    var input = document.getElementById("input_id").value;
    console.log(input)
})
