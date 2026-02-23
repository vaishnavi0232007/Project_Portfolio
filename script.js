// DARK MODE
const toggleBtn = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
});

// TYPING EFFECT
const text = "A passionate developer building modern applications.";
let i = 0;
function typing(){
    if(i < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

$(document).ready(function(){

    // Smooth Scroll
    $("a").click(function(e){
        if(this.hash !== ""){
            e.preventDefault();
            let hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 60
            }, 800);
        }
    });

    // FAQ JSON
    $.getJSON("faq.json", function(data){
        data.forEach(function(item){
            $("#faqContainer").append(`
                <div class="faq-item">
                    <div class="faq-question">${item.question}</div>
                    <div class="faq-answer">${item.answer}</div>
                </div>
            `);
        });

        $(".faq-question").click(function(){
            $(this).next(".faq-answer").slideToggle(400);
        });
    });

    // Card Mouse Events
    $(".card").mouseenter(function(){
        $(this).css("box-shadow","0 10px 25px rgba(0,0,0,0.3)");
    });

    $(".card").mouseleave(function(){
        $(this).css("box-shadow","0 6px 15px rgba(0,0,0,0.1)");
    });

});

// Scroll Reveal
window.addEventListener("scroll", function(){
    document.querySelectorAll(".reveal").forEach(function(el){
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if(position < screenHeight - 100){
            el.classList.add("active");
        }
    });
});