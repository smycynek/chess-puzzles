import html2canvas from 'html2canvas';

const downloadImage = (imageData, fileName) => {
  const link = window.document.createElement('a');
  link.style = 'display:none;';
  link.download = fileName;
  link.href = imageData;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  link.remove(); // Force download via a link
};

const elementToPngDownload = async (element, imageFileName) => {
  const frameElement = document.getElementById('frame');

  // For some reason, the background texture is not inherited,
  // so we need to add it here and remove it when done.
  frameElement.classList.add('tbg-textured');

  const canvas = await html2canvas(element);
  const image = canvas.toDataURL('image/png');
  downloadImage(image, imageFileName);

  // TODO:  This will not work in a then() clause for some reason,
  // so this will have to do for now.
  setTimeout(() => {
    frameElement.classList.remove('tbg-textured');
  }, 100);
};
export default elementToPngDownload;
