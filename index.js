const buttonCopyElement = document.querySelector("[data-button-copy]");
const inputElement = document.querySelector("[data-input]");

const writeTextOnClipboard = async (text) => {
  try {
    const copiedText = await navigator.clipboard.writeText(text);
  } catch (erro) {
    console.log(erro);
  }
};

const copy = () => {
  buttonCopyElement.onclick = () => {
    const text =
      inputElement.value === "" ? "Erro ao copiar." : inputElement.value;
    writeTextOnClipboard(text);
  };
};

copy();

(function (win, doc) {
  "use strict";
  let btn1 = doc.querySelector("#btn-criptografar");
  btn1.addEventListener(
    "click",
    () => {
      let texto = doc.querySelector("#area-textEntrada").value;
      let textoChange;
      textoChange = texto.replaceAll("e", "enter");
      textoChange = textoChange.replaceAll("i", "imes");
      textoChange = textoChange.replaceAll("a", "ai");
      textoChange = textoChange.replaceAll("o", "ober");
      textoChange = textoChange.replaceAll("u", "ufat");
      doc.querySelector("#output").value = textoChange;
      doc.querySelector("#area-textEntrada").value = "";
      hide();
    },
    false
  );

  let btn2 = doc.querySelector("#btn-descriptografar");
  btn2.addEventListener(
    "click",
    () => {
      let texto2 = doc.querySelector("#area-textEntrada").value;
      let textoChange2;
      textoChange2 = texto2.replaceAll("ufat", "u");
      textoChange2 = textoChange2.replaceAll("ober", "o");
      textoChange2 = textoChange2.replaceAll("ai", "a");
      textoChange2 = textoChange2.replaceAll("imes", "i");
      textoChange2 = textoChange2.replaceAll("enter", "e");
      doc.querySelector("#output").value = textoChange2;
      doc.querySelector("#area-textEntrada").value = "";
      hide();
    },
    false
  );
})(window, document);

function hide() {
  let y = document.getElementById("hide");
  y.style.display = "none";
}
