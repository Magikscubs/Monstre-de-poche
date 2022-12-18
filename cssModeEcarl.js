function cssMode(){
    var theme = document.getElementsByTagName('link')[0]; 
    if (theme.getAttribute('href') == 'styleEcarl.css') { 
        theme.setAttribute('href', 'styleSombre.css'); 
    } else { 
        theme.setAttribute('href', 'styleEcarl.css'); 
    } 
}
