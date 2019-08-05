class ValorTotal{

    constructor(){
        this._valorTotal();
    }
 
    _valorTotal(){
        let valorTotal = document.querySelector('.total').addEventListener('click', function(event){
           let alvoTotal = event.target;
           let acertoTotal = document.querySelector('.acerto').textContent;
           alvoTotal.textContent = acertoTotal;
        });
    }
}