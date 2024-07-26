// Copy and paste the functions you need into your javascript.

// Make sure you pass in a variable that holds a reference to the SVG which can be accomplished with this line of code in your javascript.
// Do not pass in the svg id directly.

const svgReference = document.getElementById("id-of-your-svg");

// I've only used these for download buttons for the user to download an svg that was inline in my html. I haven't tested it with any other SVGs.
// If it's not working, you may need to add the links below inside of your svg tag. This shouldn't be necessary for inline svgs though.
// xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
// To see an example of these being used, see my repo: https://github.com/mathematiCode/Visual-Fraction-Library

function downloadPng(svgReference) {
  if (svgReference instanceof Node) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const svgXml = new XMLSerializer().serializeToString(svgReference);
    const svgBlob = new Blob([svgXml], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Get the canvas data as a PNG-encoded string
      const pngData = canvas.toDataURL("image/png");

      // Create a link to download the PNG file
      const a = document.createElement("a");
      a.href = pngData;
      a.download = "my-image.png";
      a.click();

      URL.revokeObjectURL(url);
    };
    img.src = url;
    img.onerror = function () {
      console.error("Failed to load image");
    };
  } else {
    console.error("The object is not a node");
  }
}

function downloadSvg(svgReference) {
  if (svgReference instanceof Node) {
    const serializer = new XMLSerializer();
    const xmlString = serializer.serializeToString(svgReference);
    const svgBlob = new Blob([xmlString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    console.error("The object is not a node.");
  }
}
