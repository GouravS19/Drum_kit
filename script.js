div=document.querySelectorAll(".main .box")
console.log(div)
song_arr=['sounds/clap.wav','sounds/hihat.wav','sounds/boom.wav','sounds/kick.wav','sounds/openhat.wav','sounds/ride.wav','sounds/snare.wav','sounds/tink.wav','sounds/tom.wav']
function random_no(){
    return Math.floor(Math.random() * 9);
}
function border_change(value){
    if(val!=9){
        div[value].classList.add("boxy");
        setTimeout(function(){
        div[value].classList.remove("boxy");
        },200)
    }
    else{
        z=document.querySelector(".ran")
        z.classList.add("boxy");
        setTimeout(function(){
        z.classList.remove("boxy");
        },150)
    }
    
}
document.addEventListener("keypress",(event)=>
{
    // var audio;
    if(event.key==="A"  || event.key==="a" )
    {
        audio=new Audio('sounds/clap.wav');
        val=0
    }
    else if(event.key==="S"  || event.key==="s")
    {
        audio=new Audio('sounds/hihat.wav');
        val=1
    }
    else if(event.key==="D"  || event.key==="d")
    {
        audio=new Audio('sounds/kick.wav');
        val=2
    }
    else if(event.key==="F"  || event.key==="f")
    {
        audio=new Audio('sounds/openhat.wav');
        val=3
    }
    else if(event.key==="G"  || event.key==="g")
    {
        audio=new Audio('sounds/boom.wav');
        val=4
    }
    else if(event.key==="H"  || event.key==="h")
    {
        audio=new Audio('sounds/ride.wav');
        val=5

    }
    else if(event.key==="J"  || event.key==="j")
    {
        audio=new Audio('sounds/snare.wav');
        val=6
    }
    else if(event.key==="K"  || event.key==="k")
    {
        audio=new Audio('sounds/tom.wav');
        val=7
    }
    else if(event.key==="L"  || event.key==="l")
    {
        audio=new Audio('sounds/tink.wav');
        val=8
    }
    else if(event.key==="Enter")
    {
        // x='sounds/tink.wav'
        x=song_arr[random_no()]
        audio=new Audio(x);
        // console.log(random_no())
        val=9
    }
    audio.play();
    border_change(val);
    
})