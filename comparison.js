const divider = document.getElementById('divider');
const comparison = document.getElementById('comparison');
const dialog = document.getElementById('originalDialog');
const displayImage = document.getElementById('fullImage');

function updateDivider() {
  comparison.style.setProperty('--pos', divider.value + '%');
  divider.setAttribute('aria-valuetext', Math.round(divider.value) + ' percent photograph');
}

divider.addEventListener('input', updateDivider);
document.getElementById('reset').addEventListener('click', () => {
  divider.value = '50';
  updateDivider();
  divider.focus();
});

const originals = {
  photo: {
    title: 'Full photograph',
    src: './assets/photograph.jpg',
    alt: 'Vertical black-and-white photograph of mountain ridges below a clouded sky, with a tall pine on the right.'
  },
  stamp: {
    title: 'Full stamp',
    src: './assets/stamp.jpg',
    alt: 'The complete perforated Great Smoky Mountains 10-cent stamp.'
  }
};

for (const button of document.querySelectorAll('[data-original]')) {
  button.addEventListener('click', () => {
    const scan = originals[button.dataset.original];
    document.getElementById('originalTitle').textContent = scan.title;
    displayImage.alt = scan.alt;
    displayImage.src = scan.src;
    dialog.showModal();
  });
}

document.getElementById('closeDialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
