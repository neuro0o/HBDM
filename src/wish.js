document.addEventListener("DOMContentLoaded", function() {
    var slider_img = document.querySelector('.my-wish__image-slide');
    var slider_text = document.querySelector('.my-wish__text');
    var nextPageButton = document.getElementById('next-page-button');
    
    var images = [
        '../images/1.jpg',
        '../images/2.jpg',
        '../images/3.jpg',
        '../images/4.gif',
        '../images/5.webp',
        '../images/6.jpg',
        '../images/7.jpg',
        '../images/8.gif',
        '../images/9.gif',
        '../images/10.jpg',
        '../images/11.gif',
        '../images/12.jpg',
        '../images/13.jpg',
        '../images/14.jpg',
        '../images/15.jpg',
        '../images/16.gif',
        '../images/17.gif',
        '../images/18.gif',
        '../images/19.jpg',
        '../images/20.jpg',
        '../images/21.gif',
        '../images/22.gif',
        '../images/23.gif',
        '../images/24.png'
    ];

    var texts = [
        'hmm.......',
        'eh ?!',
        'HAIIII !!!',
        'bfday boy kiter dah muncul lerrr hihihi',
        'semoga awaknyee dipanjangkan usiaaaaa',
        'and mnjadi anak soleh yg leh banggakan family okiee !!!',
        'astuu astuuu,, semogaaaa dimurahkannnn rezekiii',
        'cepat2 laa jdi sugardaddy berjaya kehh,, sugarbabymu disni setia menanti kikiki',
        'dah besoo dah kawan kiter seketul nii ehehehe',
        'semoga perangai nakal minta penampar tuuuu bekurang laa ek,, HAHAHAHAH takdelaa memain jerrrpss',
        'stay cute',
        'stay kiyowo',
        'hepi2 selalu',
        'semoga apa yg awak nak capai in the future akan dipermudahkan AMINNNN',
        'hwaiting study tauuu !!',
        'jan putus asa',
        'and yg paling penting...',
        'jgn stress2 tauuu',
        'gudlak masuk sem baru nantiii',
        'papeponnn,, congratsss dah jadi atok tuaa-',
        'e-eh i mean dah jadi matanggg hohoho',
        'maap2 tesasul tadi,, tia nampak baa jg kann hehe',
        'ehem !!  a-anyways....',
        'once again,, hepi befday to you !!'
    ];
    
    var i = 0;
    
    function prev(){
        if(i > 0) {  // Only decrease index if it's greater than 0
            i--;
            setContent();  
        }           
    }
    
    function next(){
        if(i >= images.length-1) {
            nextPage.style.display = 'flex'; // Show the next page section
            wishes.style.display = 'none';   // Hide image slides
            wishes2.style.display = 'none';  // Hide image button
        }
        i++;
        setContent();             
    }
    
    function setContent(){
        slider_img.setAttribute('src', images[i]);
        slider_text.textContent = texts[i];
    }
    
    // Attach event listeners to buttons
    document.querySelector('.slider__button-prev').addEventListener('click', prev);
    document.querySelector('.slider__button-next').addEventListener('click', next);
    
    // Set initial content
    setContent();
});
