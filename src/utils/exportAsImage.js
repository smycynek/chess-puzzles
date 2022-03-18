import html2canvas from 'html2canvas';

const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement('a');
  fakeLink.style = 'display:none;';
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

const exportAsImage = async (element, imageFileName) => {
  const html = document.getElementsByTagName('html')[0];
  const body = document.getElementsByTagName('body')[0];
  const frameElement = document.getElementById('frame');
  frameElement.classList.add('tbg-textured');
  let htmlWidth = html.clientWidth;
  let bodyWidth = body.clientWidth;
  const newWidth = element.scrollWidth - element.clientWidth;
  if (newWidth > element.clientWidth) {
    htmlWidth += newWidth;
    bodyWidth += newWidth;
  }
  html.style.width = `${htmlWidth}px`;
  body.style.width = `${bodyWidth}px`;
  html.style.height = `${htmlWidth}px`;
  body.style.height = `${bodyWidth}px`;
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL('image/png', 1.0);
  downloadImage(image, imageFileName);
  html.style.width = null;
  body.style.width = null;
  setTimeout(() => {
    frameElement.classList.remove('tbg-textured');
  }, 100);
};
export default exportAsImage;
