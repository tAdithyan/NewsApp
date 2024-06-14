const toggleIcons = () => {
    const icons = document.getElementById('icons');
    const bar = document.getElementById('bar');
    const cross = document.getElementById('cross');

    if (icons.style.display === 'none') {
      icons.style.display = 'flex';
      bar.style.display = 'none';
      cross.style.display = 'block';
    } else {
      icons.style.display = 'none';
      bar.style.display = 'block';
      cross.style.display = 'none';
    }
  }

  const bar = document.getElementById('bar');
  const cross = document.getElementById('cross');

  bar.addEventListener('click', toggleIcons);
  cross.addEventListener('click', toggleIcons);
