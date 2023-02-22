function LigaDesliga() {
  const html = document.documentElement

  /*
  if(html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */

  /* O codico abaixo faz a mesma coisa mas de uma forma sinplificada*/

  html.classList.toggle('light')

  //pegar a img

  const img = document.querySelector("#profile img")

  //substituir a img

  if(html.classList.contains('light')) {
  //se tiver light mode, adicionar a img
  img.setAttribute("src", "./imagens/avatar.png")
  } else {
  //se tiver sem light mode, manter a img normal
  img.setAttribute('src', './imagens/avatar-light.png')
    img.setAttribute("alt", "imagem com o nome Érick letras pretas e fundo branco"
    )
  }
}