function cssMode(){
    var theme = document.getElementsByTagName('link')[0]; 
    if (theme.getAttribute('href') == 'styleViolet.css') { 
        theme.setAttribute('href', 'styleSombreViolet.css'); 
    } else { 
        theme.setAttribute('href', 'styleViolet.css'); 
    } 
}