function linhastext(i) {
  linha = document.getElementsByClassName("linha")[i];
  textarea = document.getElementsByClassName("text")[i];
  numlin = textarea.value.split("\n").length;

  linha.innerHTML = numlin > 1 ? numlin + " Linhas" : numlin + " Linha";
}

function lerhtml() {
  visor = document.querySelector(".visual");
  html = document.querySelector("#html").value;

  visor.innerHTML = html;
}

function lercss() {
  style = document.querySelector(".style");
  css = document.querySelector("#css").value;

  style.innerHTML = css;
}

function lerjs() {
  js = document.querySelector("#js").value;
  script = document.createElement("script");
  script.innerHTML = js;

  document.body.appendChild(script);
}
