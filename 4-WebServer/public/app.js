document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'update') {
    const id = event.target.dataset.id;
    const newTitle = event.target.closest('li').childNodes[0].value;
    const currentNode = event.target.closest('li');

    if (!!newTitle) {
      update(id, newTitle).then(()=> {
        currentNode.innerHTML = `${newTitle}
                    <div>
                        <button class="btn btn-primary" data-type="edit" data-id=${id} >Edit</button>
                        <div class="btn btn-danger" data-type="remove" data-id=${id} >&times;</div>
                    </div>`;
      });
    }
  }

    if (event.target.dataset.type === 'cancel') {
      const id = event.target.dataset.id;
      const currentTitle = event.target.closest('li').childNodes[0].value;
      const currentNode = event.target.closest('li');
      currentNode.innerHTML = `${currentTitle}
                    <div>
                        <button class="btn btn-primary" data-type="edit" data-id=${id} >Edit</button>
                        <div class="btn btn-danger" data-type="remove" data-id=${id} >&times;</div>
                    </div>`;
    }

    if (event.target.dataset.type === 'edit') {
      const id = event.target.dataset.id;
      const currentTitle = event.target.closest('li').childNodes[0].textContent.trim();

      const currentNode = event.target.closest('li');
      console.log(currentNode);

      currentNode.innerHTML = `<input type="text" value=${currentTitle}>
                    <div>
                        <button class="btn btn-success" data-type="update" data-id=${id} >Update</button>
                        <button class="btn btn-danger" data-type="cancel" data-id=${id} >Cancel</button>
                    </div>`;
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
};
