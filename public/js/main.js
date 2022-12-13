const projects = new Map([
    ['memo-meme',
        {
            name: "Memo Meme",
            imgSrc: "public/images/memo-meme.png",
            gitUrl: "https://github.com/dshzhkv/Memo-meme-game",
            description: "Реализация игры memo для курса по основам веб-разработки",
            team: "4 человека  (2 бэкендера, 2 фронтендера)",
            stack: "js, express, html, css",
            tasks: ["дизайн", "вёрстка", "функционал: подсчет очков и таймер, настройки и генерация поля"]
        }],
    ['mandatum',
        {
            name: "Mandatum",
            imgSrc: "public/images/mandatum.png",
            gitUrl: "https://github.com/dshzhkv/Mandatum",
            description: "Веб-приложение на ASP.NET для курса по ООП на C#",
            team: "4 человека (2 бэкендера, 2 фронтендера)",
            stack: "C#, ASP.NET, Azure, html, css",
            tasks: ["вёрстка", "контроллеры"]
        }],
    ['wishlists',
        {
            name: "WishLists",
            imgSrc: "public/images/wishlists.png",
            gitUrl: "https://github.com/dyme-stud/wishlist",
            description: "Веб-приложение для создания вишлистов. Проект для курса по Java",
            team: "3 человека (1 бэкендер, 1 фронтендер, 1 фулл-стек)",
            stack: "java, Spring, thymeleaf",
            tasks: ["дизайн (UX и UI)", "верстка", "контроллеры", "создание и редактирование вишлистов и желаний",
                "бронирование желаний других пользователей"]
        }],
    ['what-to-watch',
        {
            name: "Что посмотреть",
            imgSrc: "public/images/what-to-watch.png",
            gitUrl: "https://github.com/dshzhkv/2231381-what-to-watch-1",
            description: "«Кинопоиск», написанный в рамках курса по React",
            team: "я одна",
            stack: "React, Redux, TypeScript",
            tasks: ["создала реакт приложение, компоненты", "настроила маршрутизацию",
                "реализовала получение данных с сервера с помощью axios",
                "реализовала видеоплеер, проигрывание превью видео при наведении на его карточку, отправку комментариев и другие фичи"],
            additionalInfo: "Вёрстка была дана. Задача состояла в том, чтобы переписать проект на React и получать данные с сервера."
        }],
    ['food-app',
        {
            name: "Food App",
            imgSrc: "public/images/food-app.png",
            description: "Веб-приложение для заказа еды в школах. Проект в рамках «Проектного обучения», заказчик: Альфа-Банк",
            team: "4 человека (2 бэкендера, 2 фронтендера",
            stack: "React, Redux, TypeScript, html, css",
            tasks: ["дизайн (UX и UI)", "верстка", "добавление/редактирование/удаление блюд",
                "добавление/редактирование меню", "заказ меню и редактирование заказа", "кастомный календарь"]
        }],],

);

const descriptionHeaders = {
    description: "Что это",
    team: "Команда",
    stack: "Стек",
    tasks: "Что делала я",
};

const mainStack = {
    js: {name: "JS", iconSrc: "public/images/js.png"},
    ts: {name: "TS", iconSrc: "public/images/ts.png"},
    html: {name: "HTML", iconSrc: "public/images/html.png"},
    css: {name: "CSS", iconSrc: "public/images/css.png"},
    react: {name: "React", iconSrc: "public/images/react.png"},
    redux: {name: "Redux", iconSrc: "public/images/redux.png"},
    nodejs: {name: "NodeJS", iconSrc: "public/images/nodejs.png"},
};

const extraStack = {
    sharp: {name: "C#", iconSrc: "public/images/sharp.png"},
    python: {name: "Python", iconSrc: "public/images/python.png"},
    postgresql: {name: "PostgreSQL", iconSrc: "public/images/postgresql.png"}
};

const tools = {
    git: {name: "git", iconSrc: "public/images/git.png"},
    figma: {name: "Figma", iconSrc: "public/images/figma.png"},
    slack: {name: "Slack", iconSrc: "public/images/slack.png"},
    notion: {name: "Notion", iconSrc: "public/images/notion.png"},
    youTrack: {name: "YouTrack", iconSrc: "public/images/youtrack.png"},
    teamCity: {name: "TeamCity", iconSrc: "public/images/teamCity.png"}
}

window.onload = function (){
    for (let [projectId, projectInfo] of projects) {
        createProjectTab(projectId, projectInfo);
        setupProjectInfo(projectId, projectInfo);
    }

    let mainStackContainer = document.getElementById("main-stack");
    Object.values(mainStack).forEach(stackItem => mainStackContainer.appendChild(setupStackItem(stackItem.name, stackItem.iconSrc)));

    let extraStackContainer = document.getElementById("extra-stack");
    Object.values(extraStack).forEach(stackItem => extraStackContainer.appendChild(setupStackItem(stackItem.name, stackItem.iconSrc)));

    let toolsContainer = document.getElementById("tools");
    Object.values(tools).forEach(tool => toolsContainer.appendChild(setupStackItem(tool.name, tool.iconSrc)));

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
            } else {
                entry.target.style.opacity = "0";
            }
        });
    }, {rootMargin: "-15% 0px -10% 0px"});

    let stackContainers = [document.getElementById("main-stack"),
        document.getElementById("extra-stack"), document.getElementById("tools")];
    stackContainers.forEach(container => observer.observe(container));
    let popupHeaders = document.querySelectorAll('.popup-header');
    popupHeaders.forEach(header => observer.observe(header));
    let sectionHeaders = document.querySelectorAll('.hide-header');
    sectionHeaders.forEach(header => observer.observe(header));
}

function createProjectTab(projectId, projectInfo) {
    let projectTab = document.createElement("div");
    projectTab.className = "project-tab";
    projectTab.id = `${projectId}-tab`;
    projectTab.onclick = () => renderProjectInfo(projectId);
    projectTab.innerText = projectInfo.name;

    document.getElementById("projects-tabs").appendChild(projectTab);
}

function setupImage(project) {
    let img = document.createElement("img");
    img.src = project.imgSrc || "";
    img.alt = `cкриншот проекта ${project.name}`;
    img.style.objectFit = 'contain';
    img.style.border = '1px solid var(--accent-color)'
    return img;
}

function setupLinks(project) {
    let links = document.createElement("div");
    links.className = "project-links";

    let gitUrl = project.gitUrl;
    if (gitUrl) {
        let gitLink = document.createElement("a");
        gitLink.href = project.gitUrl || "";
        gitLink.innerText = "репозиторий";

        let icon = document.createElement("div");
        icon.style.backgroundImage = "url('public/images/git.png')";
        icon.className = "icon";

        links.appendChild(icon);
        links.appendChild(gitLink);
    }

    return links;
}

function setupDescription(project) {
    let description = document.createElement("div");
    description.className = "project-description";

    for (let [id, headerText] of Object.entries(descriptionHeaders)) {
        let header = document.createElement("p");
        header.className = "description-header";
        header.innerText = headerText;
        description.appendChild(header);

        if (id === "tasks") {
            description.appendChild(setupTasks(project));
        } else {
            let info = document.createElement("p");
            info.innerText = project[id] || "";
            description.appendChild(info);
        }
    }

    return description;
}

function setupTasks(project) {
    let tasksList = document.createElement("ul");
    for (let task of project.tasks) {
        let listItem = document.createElement("li");
        listItem.innerText = task;
        tasksList.appendChild(listItem);
    }
    return tasksList;
}

function setupProjectInfo(projectId, projectInfo) {

    let img = setupImage(projectInfo);
    let links = setupLinks(projectInfo);
    let description = setupDescription(projectInfo);

    let details = document.createElement("div");
    details.className = "project-details";

    details.appendChild(links);
    if (projectInfo.additionalInfo) {
        let additionalInfo = document.createElement("p");
        additionalInfo.style.color = "#FC6A6AFF";
        additionalInfo.innerText = projectInfo.additionalInfo;
        details.appendChild(additionalInfo);
    }
    details.appendChild(description);

    let content = document.createElement("section");
    content.className = "project-info";
    content.id = projectId;
    content.style.display = "none";

    content.appendChild(img);
    content.appendChild(details);

    document.getElementById("projects").appendChild(content);
}

function setupStackItem(name, iconSrc) {
    let stackItem = document.createElement("div");
    stackItem.className = "stack-item";
    stackItem.style.backgroundImage = `url(${iconSrc})`;

    let stackItemName = document.createElement("p");
    stackItemName.innerText = name;

    stackItem.appendChild(stackItemName);

    return stackItem;
}

let currentProjectId = null;

function renderProjectInfo(projectId) {
    if (currentProjectId === null) {
        openProjectTab(projectId);
    } else if (currentProjectId === projectId) {
        closeProjectTab(projectId);
        currentProjectId = null;
    } else {
        closeProjectTab(currentProjectId);
        openProjectTab(projectId);
    }
}

function openProjectTab(projectId) {
    currentProjectId = projectId;
    document.getElementById(projectId).style.display = "flex";
    document.getElementById(`${projectId}-tab`).className = "project-tab-selected";
}

function closeProjectTab(projectId) {
    document.getElementById(projectId).style.display = "none";
    document.getElementById(`${projectId}-tab`).className = "project-tab";
}

