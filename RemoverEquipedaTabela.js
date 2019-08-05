let $ = document.querySelector.bind(document);

let removerGrupo = $('tbody').addEventListener('dblclick', function(event){
    
    event.target.parentNode.classList.add("remover-equipe");

    setTimeout(function(){
		event.target.parentNode.remove(); 
	},500);
});