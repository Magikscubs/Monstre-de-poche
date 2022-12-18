function sendEmail() {
const msg = document.querySelector('.msg')

    Email.send({
        SecureToken : "287a7335-e59d-4fc1-b9c5-6db7270f5785",
        To : 'galexis13.ad@gmail.com',
        From : "galexis13.ad@gmail.com",
        Subject : "Avis",
        Body : msg.value
    }).then(
      message => alert(message)
    );

    from.addEventListener('submit',sendMsg)
}

/*Ne pas faire attention !
387097942BA5898EED721C8DE03A9B22135D
Ne pas faire attention !*/