const images = [
    'images/Narodowy.jpg',
    'images/lech.jpg',
    'images/Białystok.png',
    'images/Gdańsk.jpg',
    'images/konin.jpg',
    'images/kraków.jpg',
    'images/Lublin.jpg',
    'images/śląski.jpg', 
    'images/wrocław.jpg', 
    'images/legia.jpg',
    'images/znicz.jpg',
  ];
  let currentImageIndex = 0;
  
  const currentImage = document.getElementById('current-image');
  const previousButton = document.getElementById('previous');
  const nextButton = document.getElementById('next');
  const firstButton = document.getElementById('first');
  const lastButton = document.getElementById('last');
  
  window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      previousImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    }
  });
  
  function updateImage() {
    currentImage.src = images[currentImageIndex];
  }
  
  function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  }
  
  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  }
  
  function setCurrentImageIndex(index) {
    currentImageIndex = index;
    updateImage();
  }
  
  previousButton.addEventListener('click', previousImage);
  nextButton.addEventListener('click', nextImage);
  firstButton.addEventListener('click', () => setCurrentImageIndex(0));
  lastButton.addEventListener('click', () => setCurrentImageIndex(images.length - 1));
  
  updateImage();