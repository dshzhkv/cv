let currentModalId = null;

document.addEventListener("mousedown", handleClickOutside);

function handleClickOutside(event) {
    if (currentModalId !== null && event.target.id === 'modal-background') {
        closeModal();
    }
}

function openModal(projectId) {
    currentModalId = projectId;
    document.getElementById("modal-background").style.display = "flex";
    document.getElementById(`${projectId}-video`).style.display = "block";
}

function closeModal() {
    document.getElementById("modal-background").style.display = "none";
    document.getElementById(`${currentModalId}-video`).style.display = "none";
    currentModalId = null;
}
