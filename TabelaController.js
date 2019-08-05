class TabelaController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputnome = $('#nome');
        this._inputacertos = $('#acerto');
        this._inputerros = $('#erros');
        Object.freeze(this._inputnome);
        this._adicionar();
        
    }

    

     _adicionar(){
       const total = this._valorTotal();
       let conteudo = [this._inputnome.value, this._inputacertos.value, this._inputerros.value, total];
       let tr = document.createElement("tr");
       let tbody = document.querySelector(".campo-tbody");
       
            for(var indice = 0; indice < conteudo.length; indice++){
                let td = document.createElement('td');
                    if(indice == 1){td.classList.add('acerto')}
                    if(indice == 2){td.classList.add('erro')}
                    if(indice == 3){td.classList.add('total')}
                td.textContent = conteudo[indice];
                tr.appendChild(td);
            }
        tbody.appendChild(tr);
        this._limpaFormulario();
    }

    _limpaFormulario(){

        this._inputnome.value = "";
        this._inputacertos.value = 0;
        this._inputerros.value = 0;


    }

    _valorTotal(){return this._inputacertos.value}
}