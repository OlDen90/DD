let token;
let projectId;

const getToken = () => {
    return new Promise((resolve, reject) => {
        const url = 'http://45.12.239.156:8081/api/login';
        const loginData = {
            "login": "oleinik.d",
            "password": "jc63fk"
        };

        axios
            .post(url, loginData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                token = response.data.token;
                resolve(token);
            })
            .catch(error => {
                console.log('Ошибка:', error);
                reject('Network error');
            });
    });
};


// ------------- Project -------------

// Создание проекта
const postAxiosProject = () => {
    if (token) {
        const url = 'http://45.12.239.156:8081/api/projects';
        const requestData = {
            "name": "String",
            "code": "String"
        };

        axios
            .post(url, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data);
                console.log('Полученный id:', response.data._id);
                projectId = response.data._id;
            })

            .catch(error => {
                console.log('error', error.response.data);
            });
    } else {
        alert('Сперва нужно получить авторизацию, кнопка getToken')
    }
};

// Изменение проекта
const putAxiosProject = () => {
    if (projectId) {
        const url = `http://45.12.239.156:8081/api/projects/`;
        const requestData = {
            "_id": projectId,
            "name": "NewString",
            "code": "NewString"
        };

        axios
            .put(url, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('error', error.response);
            })
    } else {
        alert('Сначала нужно получить объект в пункте POST')
    }
};

// Получение проекта по id
const getAxiosProject = () => {
    if (projectId) {
        const url = `http://45.12.239.156:8081/api/projects/${projectId}`;

        axios
            .get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('error', error.response);
            })
    } else {
        alert('Сначала нужно получить ID (в пункте POST)')
    }
};

// Удаление проекта по id
const deleteAxiosProject = () => {
    if (projectId) {
        const url = `http://45.12.239.156:8081/api/projects/${projectId}`;

        axios
            .delete(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('error', error.response);
            })
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

        axios
            .post(url, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data);
                tasksId = response.data.tasks[0]._id;
                authorId = response.data.tasks[0].author;
                projectId = response.data.tasks[0].projectId;
                console.log('Поиск задач. Полученный id задачи:', response.data.tasks[0]._id); console.log('Поиск задач. Полученный author задачи:', response.data.tasks[0].author)
                console.log('Поиск задач. Полученный projectId задачи:', response.data.tasks[0].projectId);
            })


            .catch(error => {
                console.log('error', error.response.data);
            });

    } else {
        alert('Сперва нужно получить авторизацию, кнопка getToken')
    }
};

// Создание задачи
const postAxiosTasks = () => {
    if (projectId) {
        const url = 'http://45.12.239.156:8081/api/tasks';
        const requestData = {
            "name": "String",
            "description": "String",
            "projectId": projectId,
            "executor": "id"
        };
        axios
            .post(url, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data);
                console.log('Создание задачи. Новый id', response.data._id);
                tasksId = response.data._id;
            })
            .catch(error => {
                console.log('error', error.response);
            })
    } else {
        alert('Сперва нужно получить задачу, кнопка "Поиск задачи"')
    }
};

// Редактирование задачи
const putAxiosTasks = () => {
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

        axios
            .put(url, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('error', error.response);
            })
    } else {
        alert('Сначала нужно получить объект в пункте POST')
    }
};

// Поиск задачи по id
const getAxiosTasks = () => {
    if (tasksId) {
        const url = `http://45.12.239.156:8081/api/tasks/${tasksId}`;

        axios
            .get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('error', error.response);
            })
    } else {
        alert('Сначала нужно получить ID (в пункте POST)')
    }
};

// Удаление задачи по id
const deleteAxiosTasks = () => {
    if (tasksId) {
        const url = `http://45.12.239.156:8081/api/tasks/${tasksId}`;

        axios
            .delete(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log('error', error.response);
            })
    } else {
        alert('Чтобы что-то удалить, нужно это "что-то" создать (минутка юмора)')
    }
};