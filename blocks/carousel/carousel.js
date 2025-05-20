export default function decorate(block) {
  const children = [...block.children];
  const carouselContent = document.createElement('div');
  carouselContent.classList.add('carousel-content');

  children.forEach((child) => {
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    item.innerHTML = child.innerHTML;
    carouselContent.appendChild(item);
  });

  block.innerHTML = ''; // Clear the original content
  block.appendChild(carouselContent);

  // Add navigation buttons (optional, basic implementation)
  const prevButton = document.createElement('button');
  prevButton.classList.add('carousel-prev');
  prevButton.textContent = 'Previous';
  block.appendChild(prevButton);

  const nextButton = document.createElement('button');
  nextButton.classList.add('carousel-next');
  nextButton.textContent = 'Next';
  block.appendChild(nextButton);

  let currentIndex = 0;
  const items = carouselContent.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  function showItem(index) {
    items.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none';
    });
  }

  showItem(currentIndex);

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
  });
}