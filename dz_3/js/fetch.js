let token;
let projectId;

const getToken = () => {
    return new Promise((resolve, reject) => {
        const url = 'http://45.12.239.156:8081/api/login';
        const loginData = {
            "login": "oleinik.d",
            "password": "jc63fk"
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject(response);
                }
            })
            .then(data => {
                token = data.token;
                resolve(token);
            })
            .catch(error => {
                reject(error);
            });
    });
};


// ------------- Project -------------

// Создание проекта
const postFetchProject = () => {
    if (token) {
        const url = 'http://45.12.239.156:8081/api/projects';
        const requestData = {
            "name": "String",
            "code": "String"
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('error', response);
                    throw new Error('Request failed');
                }
            })
            .then(data => {
                console.log(data)
                console.log('Полученный id:', data._id);
                projectId = data._id
            })
            .catch(error => {
                console.log('Network error', error);
            });
        ;
    } else {
        alert('Сперва нужно получить авторизацию, кнопка getToken')
    }
};

// Изменение проекта
const putFetchProject = () => {
    if (projectId) {
        const url = `http://45.12.239.156:8081/api/projects/`;
        const requestData = {
            "_id": projectId,
            "name": "NewString",
            "code": "NewString"
        };

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('error', response);
                    throw new Error('Request failed');
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log('Network error', error);
            });
    } else {
        alert('Сначала нужно получить объект в пункте POST')
    }
};

// Получение проекта по id
const getFetchProject = () => {
    if (projectId) {
        const url = `http://45.12.239.156:8081/api/projects/${projectId}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('error', response);
                    throw new Error('Request failed');
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log('Network error', error);
            });
    } else {
        alert('Сначала нужно получить ID (в пункте POST)')
    }
};

// Удаление проекта по id
const deleteFetchProject = () => {
    if (projectId) {
        const url = `http://45.12.239.156:8081/api/projects/${projectId}`;

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('error', response);
                    throw new Error('Request failed');
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log('Network error', error);
            });
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

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('error', response);
                    throw new Error('Request failed');
                }
            })
            .then(data => {
                console.log(data)
                tasksId = data.tasks[0]._id;
                authorId = data.tasks[0].author;
                projectId = data.tasks[0].projectId;
                console.log('Поиск задач. Полученный id задачи:', data.tasks[0]._id);
                console.log('Поиск задач. Полученный author задачи:', data.tasks[0].author)
                console.log('Поиск задач. Полученный projectId задачи:', data.tasks[0].projectId);
            })
            .catch(error => {
                console.log('Network error', error);
            });
    } else {
        alert('Сперва нужно получить авторизацию, кнопка getToken')
    }
};

// Создание задачи
const postFetchTasks = () => {
    if (projectId) {
        const url = 'http://45.12.239.156:8081/api/tasks';
        const requestData = {
            "name": "String",
            "description": "String",
            "projectId": projectId,
            "executor": "id"
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('error', response);
                    throw new Error('Request failed');
                }
            })
            .then(data => {
                console.log(data)
                console.log('Создание задачи. Новый id', data._id);
                tasksId = data._id;
            })
            .catch(error => {
                console.log('Network error', error)
            })
    } else {
        alert('Сперва нужно получить задачу, кнопка "Поиск задачи"')
    }
};

// Редактирование задачи
const putFetchTasks = () => {
    if (projectId) {
        const url = `http://45.12.239.156:8081/api/tasks/`;
        const requestData = {
            "_id": tasksId,
            "name": "String",
            "description": "String",
            "projectId": projectId,
            "executor": authorId,
            "status": "IN_PROCESS", // см. рест /statuses
        };
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestData)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('error', response);
                    throw new Error('Request failed');
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log('Редактировать нечего, задача была удалена, создай новую задачу', error)
                alert("Создай задачу")
            })
    } else {
        alert('Сначала нужно получить объект в пункте POST')
    }
};

// Поиск задачи по id
const getFetchTasks = () => {
    if (tasksId) {
        const url = `http://45.12.239.156:8081/api/tasks/${tasksId}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('error', response);
                    throw new Error('Request failed');
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log('Получать нечего, задача была удалена, создай новую задачу', error)
                alert("Создай задачу")
            })
    } else {
        alert('Сначала нужно получить ID (в пункте POST)')
    }
};

// Удаление задачи по id
const deleteFetchTasks = () => {
    if (tasksId) {
        const url = `http://45.12.239.156:8081/api/tasks/${tasksId}`;

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.log('error', response);
                    throw new Error('Request failed');
                }
            })
            .then(data => {
                console.log(data)

            })
            .catch(error => {
                console.log('Создай задачу', error)
                alert("Создай задачу")
            })
    } else {
        alert('Чтобы что-то удалить, нужно это "что-то" создать (минутка юмора)')
    }
};



















