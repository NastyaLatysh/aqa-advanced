function fetchTodos (){
    return fetch ('https://jsonplaceholder.typicode.com/todos/1');
};

fetchTodos()
    .then(response => response.json()
    .then(data => console.log('fetchTodos ', data))
    .catch(e => console.log(e))
);


function fetchUsers (){
    return fetch ('https://jsonplaceholder.typicode.com/users/1');
}

fetchUsers()
    .then(response => response.json()
    .then(data => console.log('fetchUsers ', data))
    .catch(e => console.log(e))
);

const collectionPromiseAll = Promise.all([
    fetchTodos(),
    fetchUsers()
]).then(
    response => response.map(
        data => data.json().then(data => console.log('Promise all ' , data))
    )
);

const collectionPromiseRace = Promise.race([
    fetchTodos(),
    fetchUsers()
]).then(
    data => data.json().then(data => console.log('Promise race ' , data))
);
