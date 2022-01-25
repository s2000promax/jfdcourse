const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

//Способ 1
// const onlineUsers1 = users.filter( itemObject => itemObject.status === 'online' );
const onlineUsers1 = users.filter( ({status}) => status === 'online' );

//Способ 2
const onlineUsers2 = [];
users.forEach( ({...objectKeys}) => {
    //console.log('###-obj', objectKeys);
    const {username, status} = objectKeys; //Для теста. Пробуем деструктуризацию.
    if (status === 'online') {
        onlineUsers2.push({...objectKeys}); //
        // onlineUsers2.push(objectKeys);   //Похоже что записи идентичны
    }
} );

//Способ 3
const onlineUsers3 = [];
for (let objectItem of users) {
    //console.log('###-item =', item);
    if (objectItem.status === 'online') {
        onlineUsers3.push(objectItem);
    }
}

console.log('Source array:', users);
console.log('New array 1:', onlineUsers1);
console.log('New array 2:', onlineUsers2);
console.log('New array 3:', onlineUsers3);

//Вывод результата
console.log('Сейчас в онлайн следующие пользователи:', onlineUsers1.map(itemObject => itemObject.username).join(', '));

//alert(`Сейчас в онлайн следующие пользователи: ${onlineUsers1.map(itemObject => itemObject.username).join(', ')}`);