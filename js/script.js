$(document).ready(function() {
	$("#nav-about, #nav-resume, #nav-portfolio").click(clickEvent);
	$("#nav-about-mobile, #nav-resume-mobile, #nav-portfolio-mobile").click(clickEvent);
    document.getElementById("content-portfolio").style.display = "none";
    document.getElementById("content-resume").style.display = "none";
});

var currentlySelected = "about"

var active = false;

function clickEvent(event) {
    if (!active) {
        active = true;
        setTimeout(function() { active = false; }, 1000)
        var currentTarget = event.currentTarget.id.split("-")[1];
        document.getElementById("nav-" + currentlySelected).style.textDecoration = "none";
        document.getElementById("nav-" + currentlySelected + "-mobile").style.textDecoration = "none";
        document.getElementById("nav-" + currentTarget).style.textDecoration = "underline";
        document.getElementById("nav-" + currentTarget + "-mobile").style.textDecoration = "underline";
        $("#content-" + currentlySelected).fadeOut("slow", function() {
            $("#content-" + currentTarget).fadeIn("slow", function() {
                document.getElementById("content-" + currentTarget).style.display = "inline-block";
            });
        });
        currentlySelected = currentTarget;
    }
}