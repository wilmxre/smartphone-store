
// Kepek porgetese 

var ind = 0;
var paragraphs;

function changeP(to) {
    paragraphs[ind].style.display = 'none';
    paragraphs[ind = (paragraphs.length + ind + to) % paragraphs.length].style.display = 'block';
}

window.onload = () => {
    paragraphs = Array.from($('bal').children).map(p => { p.style.display = 'none'; return p; });
    changeP(0);
    $('gombok').previous.addEventListener('click', () => changeP(-1));
    $('gombok').next.addEventListener('click', () => changeP(+1));
    console.debug(paragraphs);
    
}


