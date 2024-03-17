


const data = [
    { id: 1, name: "Shane Pauline Jayme", email: "0322-1822@lspu.edu.ph" },
    { id: 2, name: "Via Umali", email: "0322-1823@lspu.edu.ph" }
];


function displayData() {
    const tbody = document.querySelector("#data-table tbody");
    tbody.innerHTML = "";
    data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.email}</td>
            <td><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></td>
        `;
        tbody.appendChild(tr);
    });
}


function handleEditFormSubmit(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById("edit-id").value);
    const name = document.getElementById("edit-name").value.trim();
    const email = document.getElementById("edit-email").value.trim();

    const index = data.findIndex(row => row.id === id);
    if (index !== -1) {
        data[index].name = name;
        data[index].email = email;
        displayData();
        closeModal();
    }
}


function openModal(id) {
    const row = data.find(row => row.id === id);
    document.getElementById("edit-id").value = row.id;
    document.getElementById("edit-name").value = row.name;
    document.getElementById("edit-email").value = row.email;
    document.getElementById("edit-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("edit-modal").style.display = "none";
}


document.addEventListener("click", function(event) {
    if (event.target.classList.contains("edit-btn")) {
        const id = parseInt(event.target.parentElement.parentElement.querySelector("td:first-child").textContent);
        openModal(id);
    }
});


document.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const id = parseInt(event.target.parentElement.parentElement.querySelector("td:first-child").textContent);
        const index = data.findIndex(row => row.id === id);
        if (index !== -1) {
            data.splice(index, 1);
            displayData();
        }
    }
});


document.getElementById("edit-form").addEventListener("submit", handleEditFormSubmit);


displayData();
