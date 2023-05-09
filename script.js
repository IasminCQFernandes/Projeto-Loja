//abrir e fechar aba de compra

var abre = false;

function abrir(){
   
    if(abre){
        
        document.getElementById("aba").style="display:none;";
        abre=false;
       
    }else{
    
        document.getElementById("aba").style="display:block;";
        abre = true;
    }

}

//trocar imagem shop

function color(){
    document.getElementById("shop-img").src="img/icon-shop-hover.png"
}
function colortwo(){
    document.getElementById("shop-img").src="img/icon-shop.png"
}

//puxar item aba de compra


function pay(){
    document.getElementById("aba").style="display:block;";

    let nomeItem = document.querySelector(".titleModel").innerHTML ;
    document.getElementById("item").innerHTML = "Item: " + nomeItem + " Selecionado";

    let descricoes = document.querySelector(".description").innerHTML;
    document.getElementById("texto").innerHTML = "Descrição: " + descricoes;

    let valor = document.querySelector(".price").innerHTML;
    document.getElementById("preco-peca").innerHTML = "Valor R$: " + valor;
}

//ADD numero de peças
function quantmais() {
    let qtd = document.getElementById("qtd").innerHTML;
    qtd = parseInt(qtd.split(": ")[1]);
    if (isNaN(qtd)) {
      qtd = 0;
    }
    qtd += 1;
    document.getElementById("qtd").innerHTML = "Quantidade: " + qtd;

    let total = document.querySelector("#total").innerHTML;
    let soma = 199 * qtd
    document.getElementById("total").innerHTML = "Total: R$ "+soma+",00";
  }


//retira numero de peças
function quantmenos() {
    let qtd = document.getElementById("qtd").innerHTML;
    qtd = parseInt(qtd.split(": ")[1]);
    if (isNaN(qtd)) {
      qtd = 0;
    }
    qtd -= 1;
    document.getElementById("qtd").innerHTML = "Quantidade: " + qtd;

    let total = document.querySelector("#total").innerHTML;
    let soma = 199 * qtd
    document.getElementById("total").innerHTML = "Total: R$ "+soma+",00";
  }


function remove(){
    let nomeItem = document.querySelector(".titleModel").innerHTML ;
    document.getElementById("item").innerHTML = "Item: ";

    let descricoes = document.querySelector(".description").innerHTML;
    document.getElementById("texto").innerHTML = "Descrição: ";

    let valor = document.querySelector(".price").innerHTML;
    document.getElementById("preco-peca").innerHTML = "Valor R$: ";

    let qtd = document.getElementById("qtd").innerHTML;
    document.getElementById("qtd").innerHTML = "Quantidade: ";

    let total = document.querySelector("#total").innerHTML;
    document.getElementById("total").innerHTML = "Total: R$ ";

}

function fim(){
    alert("Compra Realizada!")
}

//contatos

var abre = false;

function insta(){
   
    if(abre){
        
        document.getElementById("instagram").style="display:none;";
        abre=false;
       
    }else{
    
        document.getElementById("instagram").style="display:block;";
        abre = true;
    }

}

function whats(){
   
    if(abre){
        
        document.getElementById("whatsapp").style="display:none;";
        abre=false;
       
    }else{
    
        document.getElementById("whatsapp").style="display:block;";
        abre = true;
    }

}

function tel(){
   
    if(abre){
        
        document.getElementById("telefone").style="display:none;";
        abre=false;
       
    }else{
    
        document.getElementById("telefone").style="display:block;";
        abre = true;
    }

}

function locat(){
   
    if(abre){
        
        document.getElementById("localizacao").style="display:none;";
        abre=false;
       
    }else{
    
        document.getElementById("localizacao").style="display:block;";
        abre = true;
    }

}