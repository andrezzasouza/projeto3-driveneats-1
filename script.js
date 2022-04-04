let food, foodPrice, drink, drinkPrice, dessert, dessertPrice;


function selecionarComida(prato) {
    const botaoSelecionado = document
        .querySelector(".primeiro-prato")
        .querySelector(".contorno");
    if (botaoSelecionado !== null) {
      botaoSelecionado.classList.remove("contorno");
      botaoSelecionado.children[4].classList.add("hidden");
    }
  
    prato.classList.add("contorno");
    prato.children[4].classList.remove("hidden");

    food = prato.children[1].innerHTML;
    foodPrice = prato.children[3].innerHTML;
    order();
  }


  function selecionarBebida(bebida) {
    const botaoSelecionado = document
        .querySelector(".bebida")
        .querySelector(".contorno");
    if (botaoSelecionado !== null) {
      botaoSelecionado.classList.remove("contorno");
      botaoSelecionado.children[4].classList.add("hidden");
    }
  
    bebida.classList.add("contorno");
    bebida.children[4].classList.remove("hidden");
    
    drink = bebida.children[1].innerHTML;
    drinkPrice = bebida.children[3].innerHTML;
    order();
  }

  function selecionarSobremesa(sobremesa) {
    const botaoSelecionado = document
        .querySelector(".sobremesa")
        .querySelector(".contorno");
    if (botaoSelecionado !== null) {
      botaoSelecionado.classList.remove("contorno");
      botaoSelecionado.children[4].classList.add("hidden");
    }
  
    sobremesa.classList.add("contorno");
    sobremesa.children[4].classList.remove("hidden");

    dessert = sobremesa.children[1].innerHTML;
    dessertPrice = sobremesa.children[3].innerHTML;
    order();
  }

  function order(){
      if (food && drink && dessert){
          const disabledButton = document.querySelector(".finalizar");
          disabledButton.removeAttribute("disabled");
          disabledButton.children[0].innerHTML = "Fechar Pedido";
          disabledButton.style.backgroundColor = "#32B72F";
      }
  }

  function whatsapp(){
      let price = 
      parseFloat(foodPrice.replace("R$", "").replace(",", ".")) 
      + parseFloat(drinkPrice.replace("R$", "").replace(",", ".")) 
      + parseFloat(dessertPrice.replace("R$", "").replace(",", "."));
      price = price.toFixed(2).replace(".", ",")
      let name = prompt("Qual o seu nome?");
      let address = prompt("Qual o endereço da entrega?") 

      let orderText= 
                    `Olá, gostaria de fazer o pedido:
                        - Prato: ${food}
                        - Bebida: ${drink}
                        - Sobremesa: ${dessert}
                    Total: R$ ${price}

                    Nome: ${name}
                    Endereço: ${address}`;
            encodedOrderText = encodeURIComponent(orderText);

            let link = `https://wa.me/5532991325938?text=${encodedOrderText}`;

            window.open(link);
  }