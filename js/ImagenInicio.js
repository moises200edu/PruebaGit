window.onload = function() {
    document.getElementById('img-Init').style.visibility = 'visible';
    document.getElementById('img-Init').style.display = 'block';
    setTimeout(GoPage, 2000);
}


function GoPage() {
    document.getElementById('img-Init').style.visibility = 'hidden';
    document.getElementById('img-Init').style.display = 'none';
    var classContent = document.getElementsByClassName('content');
    for (let i = 0; i < classContent.length; i++) {
        const element = classContent[i];
        element.style.visibility = 'visible';
        element.style.display = 'block';
    }
}