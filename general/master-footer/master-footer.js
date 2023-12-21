function getButton(name) {
  return document.getElementById(name);
}

const anchorElements_Footer = document.querySelector('.master-footer').querySelectorAll('a');
const newRelPath_Footer = window.getRelativePath().newPath;
//console.log(newRelPath_Footer);

for(const anchor of anchorElements_Footer){
  const url = new URL(anchor.href, window.location.href);
  const relativePath = url.pathname.substring(1);

  anchor.href = newRelPath_Footer + relativePath;
}