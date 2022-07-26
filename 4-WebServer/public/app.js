document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'edit') {
    const id = event.target.dataset.id;
    const currentTitle = event.target.closest('li').childNodes[0].textContent.trim();

    const newTitle = prompt('Enter new title', currentTitle);
    if (!!newTitle) {
      update(id, newTitle).then(()=> {
        event.target.closest('li').childNodes[0].textContent = newTitle;
      });
    }
  }

  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id;
    console.log('remove', id);

    remove(id).then(() => {
      event.target.closest('li').remove();
    });
  }
});

async function remove(id) {
  await fetch(`/${id}`, {
    method: 'DELETE'
  });
}

async function update(id, title) {
  await fetch(`/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title })
  });
}