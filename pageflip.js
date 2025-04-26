class FlipBook {
  constructor(containerId, images) {
    this.container = document.getElementById(containerId);
    this.images = images;
    this.currentPage = 0;
    this.render();
  }

  render() {
    this.container.innerHTML = '';
    const page = document.createElement('div');
    page.className = 'page';
    const img = document.createElement('img');
    img.src = this.images[this.currentPage];
    page.appendChild(img);
    this.container.appendChild(page);
    this.addControls();
  }

  addControls() {
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '← Sebelumnya';
    prevBtn.id = 'prevBtn';
    prevBtn.onclick = () => this.prevPage();

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Seterusnya →';
    nextBtn.id = 'nextBtn';
    nextBtn.onclick = () => this.nextPage();

    this.container.appendChild(prevBtn);
    this.container.appendChild(nextBtn);
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.render();
    }
  }

  nextPage() {
    if (this.currentPage < this.images.length - 1) {
      this.currentPage++;
      this.render();
    }
  }
}
