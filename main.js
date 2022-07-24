window.onload = function () {
    //Text Typing

    const textDisplay = document.getElementById("text");
    const phrases = ["buy", "rent"];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;

    function loop() {
        isEnd = false;
        myText = currentPhrase.join("");

        if (i < phrases.length) {
            if (!isDeleting && j <= phrases[i].length) {
                currentPhrase.push(phrases[i][j]);
                j++;
                let myText = currentPhrase.join("");
                textDisplay.innerHTML = `Hi, you can <span>${myText}</span></br> a house from us`;
            }

            if (isDeleting && j <= phrases[i].length) {
                currentPhrase.pop(phrases[i][j]);
                j--;
                let myText = currentPhrase.join("");
                textDisplay.innerHTML = `Hi, you can <span>${myText}</span></br> a house from us`;
            }

            if (j == phrases[i].length) {
                isEnd = true;
                isDeleting = true;
            }

            if (isDeleting && j === 0) {
                currentPhrase = [];
                isDeleting = false;
                i++;
                if (i === phrases.length) {
                    i = 0;
                }
            }
        }
        const spedUp = Math.random() * (80 - 50) + 50;
        const normalSpeed = Math.random() * (300 - 200) + 200;
        const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
        setTimeout(loop, time);
    }

    loop();



    //Hamburger Menu
    const menuBtn = document.querySelector('.hamburger')
    const mobile_menu = document.querySelector('.mobile-menu')


    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('isActive')
        mobile_menu.classList.toggle('isActive')
    })
    mobile_menu.addEventListener('click', function(){
        menuBtn.classList.toggle('isActive')
        mobile_menu.classList.remove('isActive')
    })

}
