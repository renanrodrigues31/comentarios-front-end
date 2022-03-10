const send = document.querySelector('.escrever-comentario button');
const reply = document.querySelectorAll('.reply');
const buttonDelete = document.querySelectorAll('.delete');
const edit = document.querySelectorAll('.edit');
const likeAdicionar = document.querySelectorAll('.icon-plus');
const likeSubtrair = document.querySelectorAll('.icon-minus');

send.addEventListener('click', criarComentario);

function criarComentario() {
    let criando = document.createElement('div');
    criando.classList.add('coments');
     let elementoPai = document.querySelector('section');
        elementoPai.appendChild(criando);
}

for (var i = 0; i < reply.length; ++i) {
    reply[i].addEventListener('click', replyComent);
        function replyComent(){
            console.log("tá prestando");
        }
}

for (var i = 0; i < buttonDelete.length; ++i) {
    buttonDelete[i].addEventListener('click', deleteComent);
        function deleteComent(){
            let removendoDiv = document.querySelector('.coments');
            removendoDiv.classList.add ('esconder');
        }
}

for (var i = 0; i < edit.length; ++i) {
    edit[i].addEventListener('click', editComent);
        function editComent(){
            console.log("tá prestando");
        }
}

for (var i = 0; i < likeAdicionar.length; ++i) {
    likeAdicionar[i].addEventListener('click', adicionarLike);
        function adicionarLike(){
            console.log("tá prestando");
        }
}

for (var i = 0; i < likeSubtrair.length; ++i) {
    likeSubtrair[i].addEventListener('click', retirarLike);
        function retirarLike(){
            console.log("tá prestando");
        }
}