class AlterarTabela{

    constructor(){
        this._atualizaTabela();
    }

    _atualizaTabela(){
        
        let tabela = document.querySelector('.acerto').addEventListener('click', function(event){
            
            let alvoAcerto = event.target;
            var acerto = prompt('Digite a quantidade de acertos para ser adicionada.');
                if(acerto < 0){
                    alert("Valor digitado invalido, insira um valor abaixo de 50 e maior que 0.")
                    return acerto = 0;
                }
                if(acerto > 50){
                    alert("Valor digitado invalido, insira um valor abaixo de 50 e maior que 0.")
                    return acerto = 0;
                }
            alvoAcerto.textContent = acerto;

        });
        let dbltabela = document.querySelector('.erro').addEventListener('click', function(event){
            
            let alvoErro = event.target;
            var erro = prompt('Digite a quantidade de erros para ser inserida.');
            if(erro < 0){
                alert("Valor digitado invalido, insira um valor abaixo de 50 e maior que 0.")
                return erro = 0;
            }
            if(erro > 50){
                alert("Valor digitado invalido, insira um valor abaixo de 50 e maior que 0.")
                return erro = 0;
            }
            alvoErro.textContent = erro;
        });
    }
}