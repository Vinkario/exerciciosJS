function contar() {
  var inicio = document.getElementById("txtinicio");
  var fim = document.getElementById("txtfim");
  var passo = document.getElementById("txtpasso");
  var resultado = document.getElementById("resultado");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    //window.alert("[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE!");
    resultado.innerHTML = 'Dados incorretos, verifique se faltou um dado e tente novamente!'
    resultado.style.color ='red'
  } else {
    resultado.innerHTML = "Contando: ";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if(p<=0){
        resultado.innerHTML=('"Passo" inválido! Consideraremos o valor 1 <br>')
        resultado.style.color='blue'
        p=1
    }

    if (i < f) {
        //CONTAGEM CRESCENTE
      for (let c = i; c <= f; c += p) {
        resultado.innerHTML += `${c} \u{1F449}`;
      }
    } else {
        //CONTAGEM DECRESCENTE
      for (let c = i; c >= f; c -= p) {
        resultado.innerHTML += `${c} \u{1f449}`;
      }
    }
    resultado.innerHTML += `\u{1F3C1}`;
  }
}
