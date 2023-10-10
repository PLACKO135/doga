let score = 0;
var html = document.getElementsByTagName('html')[0];

function win() {
    let win=true;
    if (win) {
        alert("U WON")
        score++;
    } else {

        html.style.backgroundImage = 'url(skillissue.png)';
        html.style.backgroundRepeat = 'no-repeat';
        score--;
    }
    document.getElementById("scorecounter").innerHTML = score;
}
