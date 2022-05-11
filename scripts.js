window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById('to-top').style.display = "block";
    }
    else {
        document.getElementById('to-top').style.display = "none";
    }
}

function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
