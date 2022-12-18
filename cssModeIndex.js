function cssMode(){
    var theme = document.getElementsByTagName('link')[0]; 
    if (theme.getAttribute('href') == 'styleIndex.css') { 
        theme.setAttribute('href', 'styleSombre.css'); 
    } else { 
        theme.setAttribute('href', 'styleIndex.css'); 
    } 
}