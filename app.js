const send = document.querySelector('.escrever-comentario button');
const reply = document.querySelectorAll('.reply');
const buttonDelete = document.querySelectorAll('.delete');

send.addEventListener('click', criarComentario);

function criarComentario() {
    console.log("tá prestando");

}

for (var i = 0; i < reply.length; ++i) {
    reply[i].addEventListener('click', replyComent);
        function replyComent(){
            console.log("tá prestando");
        }
}

for (var i = 0; i < buttonDelete.length; ++i) {
    buttonDelete[i].addEventListener('click', replyComent);
        function replyComent(){
            console.log("tá prestando");
        }
}