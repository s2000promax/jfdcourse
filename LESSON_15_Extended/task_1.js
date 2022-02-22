const URL = 'https://jsonplaceholder.typicode.com/';

const createHTMLelement = (tag, ...arg) => {
  //* Вспомогательная функция создания универсального HTML элемента (пора бы уже стандартизировать)
  //* Принимаем, что аргументы идут в следующем порядке:
  //* 0 - className
  //* 1 - id
  //* 2 - textContent
  //* 3 - href
  if (!!tag) {
    const HTMLelement = document.createElement(tag);
    if (!!arg[0]) {
      HTMLelement.className = arg[0];
    }
    if (!!arg[1]) {
      HTMLelement.id = arg[1];
    }
    if (!!arg[2]) {
      HTMLelement.textContent = arg[2];
    }
    if (!!arg[3]) {
      HTMLelement.href = arg[3];
    }

    return HTMLelement;
  }

  return null;
}

// Решение со предложенным шаблоном
/*
const showLoader = (
  tagName = 'span',
  tagClassName = 'loader',
  appendElementTagOrClass = 'body',
  textMessage = 'Загрузка...'
) => {
  if (!document.querySelector(`.${tagClassName}`)) {
    const appendElement = document.querySelector(appendElementTagOrClass);
    appendElement.prepend(createHTMLelement(tagName,tagClassName, null, textMessage));
  } else {
    const loaderElement = document.querySelector(`.${tagClassName}`);
    loaderElement.classList.toggle('loader_hidden'); // Так компонент красиво скрывается
    // loaderElement.remove(); // Так его можно удалить из DOM
  }
}

const createPost = post => {
  const divPostContainer = createHTMLelement('div', 'post', `post-${post.id}`);
  const h1 = createHTMLelement('h1', 'post__title', null, post.title);
  const p = createHTMLelement('p', 'post__text', null, post.body);
  const b = createHTMLelement('b', 'post__comments-text', null, 'Комментарии');
  divPostContainer.append(h1, p, b);

  const body = document.querySelector('body');
  body.append(divPostContainer);
}

const createListComments = comments => {
  const divPostCommentsContainer = createHTMLelement('div', 'post__comments');

  comments.forEach( item => {
    const divPost = createHTMLelement('div', 'post-comment');
    const spanAuthor = createHTMLelement('span', 'post-comment__author', null, item.email);
    const spanPostText = createHTMLelement('span', 'post-comment__text', null, item.body);
    divPost.append(spanAuthor, spanPostText);

    divPostCommentsContainer.append(divPost);
  });

  const divPost = document.querySelector(`#post-${comments[0].postId}`);
  divPost.append(divPostCommentsContainer);
}

*/


//Решение с применением библиотеки Materialize

const showLoader = (appendElementTagOrClass) => {
  if (!document.querySelector('.progress')) {
    const preLoader = createHTMLelement('div', 'progress');
    preLoader.append(createHTMLelement('div', 'indeterminate'));

    const appendElement = document.querySelector(appendElementTagOrClass);
    if (appendElementTagOrClass === 'body') {
      appendElement.prepend(preLoader);
    } else {
      appendElement.append(preLoader);
    }
  }
}

const hideLoader = () => document.querySelectorAll('.progress').forEach( item => item.remove());

const createPost = post => {
  const divPostContainer = createHTMLelement('div', 'row', `post-${post.id}`);
  const div1 = createHTMLelement('div', 'col s12 m6');
  const div2 = createHTMLelement('div', 'card blue-grey darken-1');
  const div3 = createHTMLelement('div', 'card-content white-text');
    const spanTitle = createHTMLelement('span', 'card-title', null, post.title);
    const paragraph = createHTMLelement('p', null, null, post.body);
    const divAction = createHTMLelement('div', 'card-action', `post-${post.id}`);
  const commentTitle = createHTMLelement('b', null, null, 'Comments');
  divAction.append(commentTitle);
  const preLoader = createHTMLelement('div', 'progress');
  preLoader.append(createHTMLelement('div', 'indeterminate'));
  div3.append(spanTitle, paragraph, divAction, preLoader);
  div2.append(div3);
  div1.append(div2);
  divPostContainer.append(div1);

  const body = document.querySelector('body');
  body.append(divPostContainer);
}

const createListComments = comments => {
  const divPostCommentsContainer = createHTMLelement('div', 'post__comments');

  comments.forEach( item => {
    const hLine = createHTMLelement('hr')
    const paragraphAutor = createHTMLelement('p')
    const spanAuthor = createHTMLelement('a', 'post-comment__author', null, `By: ${item.email}`, '#');
    paragraphAutor.append(spanAuthor);
    const paragraphText = createHTMLelement('p');
    const spanCommentText = createHTMLelement('a', 'post-comment__text', null, item.body, '#');
    paragraphText.append(spanCommentText);
    divPostCommentsContainer.append(hLine, paragraphAutor, paragraphText);
  });

  const divToComments = document.querySelectorAll(`#post-${comments[0].postId}`);
  divToComments.forEach( item => {
    if (item.className === 'card-action') {
      item.append(divPostCommentsContainer);
          }
  });

}

const renderPost = (postId) => {
  showLoader('body'); //Показываем loader
  fetch(URL + `posts/${postId}`, {
    method: 'GET',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      console.log('###-response-Post-1', response);
      return response.json();
    })
    .then((post) => {
      console.log(`###-post-${post.id}`, post);
      createPost(post);
      return post.id;
    })
    .then((posId) => {
      //console.log('###-postId', posId);

      fetch(URL + `comments?postId=${posId}`, {
        method: 'GET',
      })
        .then((response) => {
          console.log('###-response-comments-2', response);

          if (!response.ok) {
            throw new Error(`Error status: ${response.status}`);
          }
          return response.json();
        })
        .then((comments) => {
          console.log(`###-comments-postId-${comments[0].postId}`, comments);

          createListComments(comments);
        })
        .catch( (error) => {
          console.error('###-error in comments', error);
        });

    })
    .catch( (error) => {
      console.error('###-error in post', error);
    })
    .finally( () => {
      hideLoader(); // удаляем всё loader-ы
    });
}

renderPost(1);
renderPost(2);
renderPost(3);
renderPost(4);

