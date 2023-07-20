function enviarDados(){
	let req = new XMLHttpRequest()
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let mensagem = document.getElementById('mensagem').value
    let URL = ('https://insidetechsolutions.net/inserirdados.js?nome='  + nome + '&email=' + email + '&mensagem=' + mensagem)
     req.open('GET', URL)
     req.send()
   }