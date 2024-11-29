let request;
if (window.XMLHttpRequest) { 
    request = new XMLHttpRequest(); 
} else { 
    request = new ActiveXObject('Microsoft.XMLHTTP'); 
}

request.responseType = 'json';

request.addEventListener('readystatechange', function () {
    if (this.readyState === 4) { 
        if (this.status === 200) { 
            const moviesArray = this.response; 
            displayUsers(moviesArray); 
        } else {
            console.error('Ошибка загрузки данных:', this.statusText); 
        }
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/users');

request.send();

function displayUsers(users) {
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = ''; 

    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerText = user.name;
        userDiv.onclick = () => showDetails(user.id);
        usersDiv.appendChild(userDiv);
    });
}

function showDetails(id) {
    const detailsDiv = document.getElementById('details');
    
    if (!detailsDiv) {
        console.error('Элемент с id "details" не найден.');
        return;
    }

    detailsDiv.innerHTML = `<p>Загрузка данных...</p>`;
    
    const detailRequest = new XMLHttpRequest();
    detailRequest.open('GET', `https://jsonplaceholder.typicode.com/users/${id}`);
    detailRequest.onload = function() {
        if (this.status === 200) {
            const user = JSON.parse(this.response);
            if (user && user.address) {
                detailsDiv.innerHTML = `<h2>${user.name}</h2>
                                        <p>Username: ${user.username}</p>
                                        <p>Address: ${user.address.street}, ${user.address.city}</p>
                                        <p>Email: ${user.email}</p>
                                        <p>Phone: ${user.phone}</p>
                                        <p>Website: ${user.website}</p>
                                        <button onclick="fetchPosts(${user.id})">Show posts</button>`;
            } else {
                detailsDiv.innerHTML = `<p>Данные о пользователе недоступны.</p>`;
            }
        } else {
            detailsDiv.innerHTML = `<p>Ошибка загрузки данных о пользователе.</p>`;
        }
    };
    detailRequest.onerror = function() {
        detailsDiv.innerHTML = `<p>Ошибка сети.</p>`;
    };
    detailRequest.send();
}

function fetchPosts(userId) {
    const postsRequest = new XMLHttpRequest();
    postsRequest.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    postsRequest.onload = function() {
        if (this.status === 200) {
            const posts = this.response;
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML += '<div class="posts"><h3>Посты пользователя:</h3>';
            posts.forEach(post => {
                detailsDiv.innerHTML += `<p><strong>${post.title}</strong></p><p>${post.body}</p>`;
            });
            detailsDiv.innerHTML += '</div>';
        } else {
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML += `<p>Ошибка загрузки постов.</p>`;
        }
    };
    postsRequest.onerror = function() {
        const detailsDiv = document.getElementById('details');
        detailsDiv.innerHTML += `<p>Ошибка сети.</p>`;
    };
    postsRequest.send();
}
