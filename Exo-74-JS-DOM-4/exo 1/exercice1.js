let chat = document.getElementById('cat-pic');
let miaulement = document.getElementById('cat-chat');

chat.addEventListener('mouseenter', function(){
   miaulement.innerHTML = "Miaou";
});

chat.addEventListener('mouseleave',function (){
   miaulement.innerHTML = "";
});
