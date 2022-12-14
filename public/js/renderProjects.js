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
