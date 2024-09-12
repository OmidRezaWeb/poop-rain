window.onload = function () {
    function poopRain() {
            let poop = document.createElement('div');
            poop.style.left = Math.random() * 100 + 'vw';
            poop.style.animationDuration = Math.random() * 2 + 3 + 's';
            poop.classList.add('poop')
            poop.innerText = '💩'
            document.body.appendChild(poop)
           setTimeout(function(){
            poop.remove()
           },5000)
        }
        setInterval(poopRain, 300)
}