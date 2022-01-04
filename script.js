var but = document.querySelector('div#button')

        but.addEventListener('click', clicar)
        but.addEventListener('mouseenter', entrar)
        but.addEventListener('mouseout', sair)
        
        function clicar() {
            but.innerText = 'Clicou!'
            but.style.background = '#cdb4db'
        }

        function entrar() {
            but.innerText = 'Entrou!'
            but.style.background = '#ffafcc'
        }

        function sair() {
            but.innerText = 'Saiu!'
            but.style.background = '#bde0fe'
        }