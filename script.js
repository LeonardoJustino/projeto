function toggleMode(){
  /*vai ser executada toda vez que eu clicar no botão*/
  const html = document.documentElement /*documentElement é o html*/
  html.classList.toggle("light")

  /*if é uma condicional, se essa condicional for verdadeira ela entra no código*/
  /*html.classList.contains('light') -> esse cara vai responder um tipo de dado booleano, ou vai ser true ou false, contain ou não contain */
  //---------------------------------------------------------
  //                  COMO FUNCIONA O CÓDIGO
  // se (html.classList.contains('light') for verdadeiro ele faz essa execução de código : html.classList.remove('light')
  //se não for verdadeiro faz essa execução de código : //html.classList.remove('light')
  //---------------------------------------------------------
  //if(html.classList.contains('light')) {
  //html.classList.remove('light')
  //} else {
  //html.classList.add('light')
  //}
  //-----------------------------------------------------------
  /*UMA FORMA MAIS SIMPLIFICADA DO CÓDIGO DE CIMA*/
  /*dentro da função toggle ele verifica se tiver o light ele tira, se não tiver o light ele coloca   */
  //-----------------------------------------------------------
  //pegar a tag img
  const img = document.querySelector("#profile img") //querySelector é uma função que está no document, query é pesquisa pelo Seletor ou seja o mesmo argumento que vem ali dentro é o mesmo que vai no css ("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Leonardo sorrindo para a câmera com a camisa de basquete e um filtro do instagram.') //texto para alternativo para quando não carregar a foto no modo light
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Ellipse.png")
  }
            
}