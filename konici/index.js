kun1Elm = document.querySelector("#kun1");
kun2Elm = document.querySelector("#kun2");
kun3Elm = document.querySelector("#kun3");
kun4Elm = document.querySelector("#kun4");
kun5Elm = document.querySelector("#kun5");

const onClick = (kun) => {
  kun.classList.add("zavodim");
  return "sranda"
}

kun1Elm.onclick = () => onClick(kun1Elm);
kun2Elm.onclick = () => onClick(kun2Elm);
kun3Elm.onclick = () => onClick(kun3Elm);
kun4Elm.onclick = () => onClick(kun4Elm);
kun5Elm.onclick = () => onClick(kun5Elm);

//onClick(kun5Elm);

const a = onClick(kun5Elm);
const b = onClick;