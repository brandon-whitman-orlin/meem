function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}
  
function screenshot() {
  console.log("Hello");
  const existingCanvases = document.querySelectorAll("canvas");
  existingCanvases.forEach(canvas => {
    canvas.remove();
  });

  const transparentBGCheckbox = document.getElementById("transparentBG");
  const bgColorInput = document.getElementById("bgColor");

  let backgroundColor = "rgba(0, 0, 0, 0)";

  if (!transparentBGCheckbox.checked) {
    backgroundColor = bgColorInput.value;
  }

  html2canvas(document.querySelector("#imageDisplay"), {
    useCORS: true,
    backgroundColor: backgroundColor
  }).then(canvas => {
    if (canvas.width === 0 && canvas.height === 0) {
      alert("No image to download.");
    } else {
      downloadURI(
        canvas.toDataURL("image/png"),
        "meme.png"
      );
    }
  });
}
