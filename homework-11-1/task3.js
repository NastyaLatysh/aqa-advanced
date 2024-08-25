function fetchTodos (){
    return fetch ('https://jsonplaceholder.typicode.com/todos/1');
};

function fetchUsers (){
    return fetch ('https://jsonplaceholder.typicode.com/users/1');
}

(async function() {
    await fetchTodos()
        .then(response => response.json()
        .then(data => console.log('fetchTodos ', data))
        .catch(e => console.log(e))
    );

    await fetchUsers()
        .then(response => response.json()
        .then(data => console.log('fetchUsers ', data))
        .catch(e => console.log(e))
    );

    const collectionPromiseAll = await Promise.all([
        fetchTodos(),
        fetchUsers()
    ]).then(
        response => response.map(
            data => data.json().then(data => console.log('Promise all ' , data))
        )
    );

    const collectionPromiseRace = await Promise.race([
        fetchTodos(),
        fetchUsers()
    ]).then(
        data => data.json().then(data => console.log('Promise race ' , data))
    );

})();
