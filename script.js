/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if(loader){

            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);

        }

    }, 1200);

});


/* =========================
   PIN SYSTEM
========================= */

const unlockBtn = document.getElementById("unlockBtn");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");

const pinScreen = document.getElementById("pinScreen");
const website = document.getElementById("website");

unlockBtn.addEventListener("click", () => {

    const enteredPin = pinInput.value.trim();

    /* PIN = 1006 */

    if(enteredPin === "1006"){

        pinError.innerText = "";

        pinScreen.style.display = "none";

        website.style.display = "block";

        /* Start music after user interaction */

        const music = document.getElementById("bgMusic");

        if(music){

            music.volume = 0.65;

            music.play().catch(() => {
                console.log("Music waiting for interaction.");
            });

        }

    }else{

        pinError.innerText =
        "Hmm... PIN-nya salah 🥹💗";

        pinInput.value = "";

        pinInput.focus();

    }

});


/* =========================
   OPEN BOOK
========================= */

const openBookBtn =
document.getElementById("openBookBtn");

openBookBtn.addEventListener("click", () => {

    const music =
    document.getElementById("bgMusic");

    /* Play music */

    if(music){

        music.volume = 0.65;

        music.play().catch(() => {});

    }

    /* Scroll to scrapbook */

    document
    .getElementById("scrapbook")
    .scrollIntoView({
        behavior:"smooth"
    });

});


/* =========================
   LETTER OPEN
========================= */

const openLetter =
document.getElementById("openLetter");

const letterPaper =
document.getElementById("letterPaper");

openLetter.addEventListener("click", () => {

    if(letterPaper.style.display === "block"){

        letterPaper.style.display = "none";

    }else{

        letterPaper.style.display = "block";

        setTimeout(() => {

            letterPaper.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

        },100);

    }

});


/* =========================
   LOVE QUIZ
========================= */

const checkQuiz =
document.getElementById("checkQuiz");

checkQuiz.addEventListener("click", () => {

    const a1 =
    document
    .getElementById("answer1")
    .value
    .toLowerCase()
    .trim();

    const a2 =
    document
    .getElementById("answer2")
    .value
    .toLowerCase()
    .trim();

    const result =
    document.getElementById("quizResult");


    /*
        QUESTION 1:
        Who is the person you'd choose
        to annoy forever?

        ANSWER:
        Alctars
    */


    /*
        QUESTION 2:
        If you had to choose one person
        to stay with you through everything,
        who would it be?

        ANSWER:
        Alctars
    */


    if(
        (
            a1 === "alctars" ||
            a1 === "alctar"
        )
        &&
        (
            a2 === "alctars" ||
            a2 === "alctar"
        )
    ){

        result.style.color = "#d45d83";

        result.innerText =
        "Correct! You really know your favorite person 🥹💗";


        setTimeout(() => {

            document
            .getElementById("specialMemory")
            .scrollIntoView({
                behavior:"smooth"
            });

        },700);


    }else{

        result.style.color = "#e06b8d";

        result.innerText =
        "Hmm... coba pikirin lagi, sayang 🥹💗";

    }

});


/* =========================
   REVEAL MEMORY
========================= */

const revealBtn =
document.getElementById("revealBtn");

revealBtn.addEventListener("click", () => {

    const photo =
    document.getElementById("specialPhoto");

    photo.classList.add("show");

    revealBtn.innerText =
    "Memory Revealed ♡";

    revealBtn.style.transform =
    "scale(0.98)";

    setTimeout(() => {

        revealBtn.innerText =
        "You Found It 💗";

        revealBtn.style.transform =
        "scale(1)";

    },500);

});


/* =========================
   RELATIONSHIP COUNTER
========================= */

function updateCounter(){

    /*
        Relationship started:
        3 March 2026
    */

    const startDate =
    new Date("2026-03-03T00:00:00");

    const now =
    new Date();

    const diff =
    now.getTime() -
    startDate.getTime();


    if(diff < 0){

        document.getElementById("days").innerText = "0";

        document.getElementById("hours").innerText = "0";

        document.getElementById("minutes").innerText = "0";

        return;

    }


    /* Total days */

    const days =
    Math.floor(
        diff /
        (1000 * 60 * 60 * 24)
    );


    /* Total hours */

    const hours =
    Math.floor(
        diff /
        (1000 * 60 * 60)
    );


    /* Total minutes */

    const minutes =
    Math.floor(
        diff /
        (1000 * 60)
    );


    document.getElementById("days").innerText =
    days;

    document.getElementById("hours").innerText =
    hours;

    document.getElementById("minutes").innerText =
    minutes;

}


updateCounter();

setInterval(
    updateCounter,
    1000
);


/* =========================
   SECRET MESSAGE
========================= */

const stars =
document.querySelectorAll(".secret-star");

let clickedStars = 0;


stars.forEach((star,index) => {

    star.addEventListener("click", () => {

        /*
            Prevent the same star
            from being counted twice.
        */

        if(
            !star.classList.contains("found")
        ){

            star.classList.add("found");

            clickedStars++;


            /* Update progress */

            document
            .getElementById("starProgress")
            .innerText =
            `Find all the stars (${clickedStars}/5)`;


            /* Small animation */

            star.style.transform =
            "scale(1.35) rotate(10deg)";


            setTimeout(() => {

                star.style.transform =
                "scale(1.15) rotate(10deg)";

            },200);

        }


        /* All stars found */

        if(clickedStars >= 5){

            const secretMessage =
            document.getElementById(
                "secretMessage"
            );

            secretMessage.style.display =
            "block";


            document
            .getElementById("starProgress")
            .innerText =
            "You found them all! ♡";


            setTimeout(() => {

                secretMessage.scrollIntoView({
                    behavior:"smooth",
                    block:"center"
                });

            },500);

        }

    });

});


/* =========================
   REPLAY BUTTON
========================= */

const replayBtn =
document.getElementById("replayBtn");

replayBtn.addEventListener("click", () => {

    /* Scroll to top */

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });


    /* Play music again */

    const music =
    document.getElementById("bgMusic");

    if(music){

        music.currentTime = 0;

        music.play().catch(() => {});

    }

});


/* =========================
   ENTER KEY PIN
========================= */

pinInput.addEventListener(
    "keypress",
    (e) => {

        if(e.key === "Enter"){

            unlockBtn.click();

        }

    }
);


/* =========================
   ENTER KEY QUIZ
========================= */

const answer1 =
document.getElementById("answer1");

const answer2 =
document.getElementById("answer2");


answer1.addEventListener(
    "keypress",
    (e) => {

        if(e.key === "Enter"){

            answer2.focus();

        }

    }
);


answer2.addEventListener(
    "keypress",
    (e) => {

        if(e.key === "Enter"){

            checkQuiz.click();

        }

    }
);
