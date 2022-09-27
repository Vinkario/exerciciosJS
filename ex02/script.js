function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var resultado = document.getElementById("resultado");
  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert(" [ ERRO ] Verifique os dados e tente novamnte");
  }
  var fsex = document.getElementsByName("radsex");
  var idade = ano - fAno.value;
  var genero = "";
  var img = document.createElement("img");
  img.setAttribute("id", "foto");

  if (fsex[0].checked) {
    genero = "Masculino";
    if (idade >= 0 && idade <= 10) {
      //Criança
      img.setAttribute('src','bebe-homem.png')
    } else if (idade < 21) {
      // Jovem
      img.setAttribute('src','jovem-homem.png')

    } else if (idade < 50) {
      //adulto
      img.setAttribute('src','homem-adulto.png')

    } else {
      //idoso
      img.setAttribute('src','idoso-homem.png')

    }
  } else if (fsex[1].checked) {
    genero = "Mulher";
  }
  if (idade >= 0 && idade <= 10) {
    //Criança
    img.setAttribute('src','bebe-mulher.png')
  } else if (idade < 21) {
    // Jovem
    img.setAttribute('src','jovem-mulher.png')

  } else if (idade < 50) {
    //adulto
    img.setAttribute('src','mulher-adulto.png')

  } else {
    //idoso
    img.setAttribute('src','idosa-mulher.png')

  }
  resultado.style.textAlign = "center";
  resultado.innerHTML = `Detectamos o gênero ${genero} com ${idade} anos!`;
  resultado.appendChild(img)
}
