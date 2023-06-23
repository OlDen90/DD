let token;
let projectId;

const getToken = () => {
    return new Promise((resolve, reject) => {
        const url = 'http://45.12.239.156:8081/api/login';
        const loginData = {
            "login": "oleinik.d",
            "password": "jc63fk"
        };

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function () {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                token = xhr.response.token;
                resolve(token);
            }
        };

        xhr.onerror = function () {
            reject('Network error');
        };

        xhr.send(JSON.stringify(loginData));
    });
};


// ------------- Project -------------

// Создание проекта
const postXMLProject = () => {
    if (token) {
        const url = 'http://45.12.239.156:8081/api/projects';
        const requestData = {
            "name": "String",
            "code": "String"
        };

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log('error', xhr.response);
            } else {
                console.log(xhr.response);
                console.log('Полученный id:', xhr.response._id);
                projectId = xhr.response._id;
            }
        };

        xhr.onerror = () => {
            console.log('Network error');
        };

        xhr.send(JSON.stringify(requestData));
    } else {
        alert('Сперва нужно получить авторизацию, кнопка getToken')
    }
};

// Изменение проекта
const putXMLProject = () => {
    if (projectId) {
        const url = `http://45.12.239.156:8081/api/projects/`;
        const requestData = {
            "_id": projectId,
            "name": "NewString",
            "code": "NewString"
        };

        const xhr = new XMLHttpRequest();
        xhr.open('PUT', url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log('error', xhr.response);
            } else {
                console.log(xhr.response);
            }
        };

        xhr.onerror = () => {
            console.log('Network error');
        };

        xhr.send(JSON.stringify(requestData));
    } else {
        alert('Сначала нужно получить объект в пункте POST')
    }
};

// Получение проекта по id
const getXMLProject = () => {
    if (projectId) {
        const url = `http://45.12.239.156:8081/api/projects/${projectId}`;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log('error', xhr.response);
            } else {
                console.log(xhr.response);
            }
        };

        xhr.onerror = () => {
            console.log('Network error');
        };
        xhr.send()
    } else {
        alert('Сначала нужно получить ID (в пункте POST)')
    }
};

// Удаление проекта по id
const deleteXMLProject = () => {
    if (projectId) {
        const url = `http://45.12.239.156:8081/api/projects/${projectId}`;

        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log('error', xhr.response);
            } else {
                console.log(xhr.response);
            }
        };

        xhr.onerror = () => {
            console.log('Network error');
        };
        xhr.send()
    } else {
        alert('Чтобы что-то удалить, нужно это "что-то" создать (минутка юмора)')
    }
};


// ------------- Tasks -------------
let tasksId;
let authorId;

// Поиск задач
const postXMLTasksSearch = () => {
    if (token) {
        const url = 'http://45.12.239.156:8081/api/tasks/search';
        const requestData = {
            "page": 1, // нумерация страниц с единицы
            "limit": 10,
            "filter": {
                "name": "String",
                "status": ["DRAFT"], // см. рест /statuses
                "author": "id",
                "executor": "id",
                "dateStart": "2023-06-10", // формат ISO
                "dateEnd": "2023-06-13"  // формат ISO
            },
            "sort": {
                "field": "String", // name, author, status, executor, dateCreated, dateEdited
                "type": "String" // asc, des
            }
        };

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log('error', xhr.response);
            } else {
                console.log(xhr.response);
                tasksId = xhr.response.tasks[0]._id;
                authorId = xhr.response.tasks[0].author;
                projectId = xhr.response.tasks[0].projectId;
                console.log('Поиск задач. Полученный id задачи:', xhr.response.tasks[0]._id); console.log('Поиск задач. Полученный author задачи:', xhr.response.tasks[0].author)
                console.log('Поиск задач. Полученный projectId задачи:', xhr.response.tasks[0].projectId);
            }
        };

        xhr.onerror = () => {
            console.log('Network error');
        };

        xhr.send(JSON.stringify(requestData));
    } else {
        alert('Сперва нужно получить авторизацию, кнопка getToken')
    }
};

// Создание задачи
const postXMLTasks = () => {
    if (projectId) {
        const url = 'http://45.12.239.156:8081/api/tasks';
        const requestData = {
            "name": "String",
            "description": "String",
            "projectId": projectId,
            "executor": "id"
        };

        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log('error', xhr.response);
            } else {
                console.log(xhr.response);
                console.log('Создание задачи. Новый id', xhr.response._id);
                tasksId = xhr.response._id;
            }
        };

        xhr.onerror = () => {
            console.log('Network error');
        };

        xhr.send(JSON.stringify(requestData));
    } else {
        alert('Сперва нужно получить задачу, кнопка "Поиск задачи"')
    }
};

// Редактирование задачи
const putXMLTasks = () => {
    if (projectId) {
        const url = `http://45.12.239.156:8081/api/tasks/`;
        const requestData = {
            "_id": tasksId,
            "name": "NewString",
            "description": "NewString",
            "projectId": projectId,
            "executor": authorId,
            "status": "IN_PROCESS", // см. рест /statuses
        };

        const xhr = new XMLHttpRequest();
        xhr.open('PUT', url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log('error', xhr.response);
            } else {
                console.log(xhr.response);
            }
        };

        xhr.onerror = () => {
            console.log('Network error');
        };

        xhr.send(JSON.stringify(requestData));
    } else {
        alert('Сначала нужно получить объект в пункте POST')
    }
};

// Поиск задачи по id
const getXMLTasks = () => {
    if (tasksId) {
        const url = `http://45.12.239.156:8081/api/tasks/${tasksId}`;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log('error', xhr.response);
            } else {
                console.log(xhr.response);
            }
        };

        xhr.onerror = () => {
            console.log('Network error');
        };
        xhr.send()
    } else {
        alert('Сначала нужно получить ID (в пункте POST)')
    }
};

// Удаление задачи по id
const deleteXMLTasks = () => {
    if (tasksId) {
        const url = `http://45.12.239.156:8081/api/tasks/${tasksId}`;

        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);

        xhr.onload = () => {
            if (xhr.status >= 400) {
                console.log('error', xhr.response);
            } else {
                console.log(xhr.response);
            }
        };

        xhr.onerror = () => {
            console.log('Network error');
        };
        xhr.send()
    } else {
        alert('Чтобы что-то удалить, нужно это "что-то" создать (минутка юмора)')
    }
};

















