// jQuery Sandbox

// $('button').text("Don't click me");
// Every single button will say "Don't click me"

// $('button').html("<em>Sup</em>");
// Every single button will have an emphasized "Sup"

var valueButton = $("button").text();
console.log(valueButton);

var htmlButton = $("#first-but").html();
console.log(htmlButton);

// Normal Javascript
// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     })
// }

// jQuery Way
// $("button").click(() => {
//     $("h1").css("color", "purple");
// })

// // Same thing as ↑ but more versatile
// $("h1").on("mouseover", () => {
//     $("h1").css("color", "black");
// })

// // Changes the h1 to be the key that is pressed
// $(document).keydown((event) => {
//     console.log(event.key);
//     $('h1').text(event.key);
// })

// before()
// after()
// prepend()
// append()

// $("h1").before("<button>Before</button>")
// $("h1").after("<button>After</button>")
// $("h1").prepend("<button>Prepend</button>")
// $("h1").append("<button>Append</button>")


// jQuery animations
// hide() and show()
// $("button").click(() => {
//     $("h1").hide();
//     $("h1").show();
//     $("h1").toggle();
// })

// fadeIn and fadeOut
// $("button").click(() => {
//     // $("h1").fadeIn();
//     // $("h1").fadeOut();
//     $("h1").fadeToggle();
// })

// slideUp and slideDown
// $("button").click(() => {
//     // $("h1").slideUp();
//     // $("h1").slideDown();
//     $("h1").slideToggle();
// })

// animate
$("button").click(() => {
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})
