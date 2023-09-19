document.addEventListener('DOMContentLoaded', function () {
    const antudNimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];
    const nimed = antudNimed.slice(); // Andmed olemasolevate nimede kohta

    const addForm = document.getElementById('add-form');
    const nameTableBody = document.getElementById('name-table-body');
    const addButton = document.getElementById('add-button');

    // Lisamisfunktsioon
    addButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;

        // Lisame uue nime andmete massiivi
        nimed.push(name);

        // Uuendame tabelit
        renderTable();
    });

    // Funktsioon tabeli uuendamiseks
    function renderTable() {
        // Tühjendame tabeli
        nameTableBody.innerHTML = '';

        // Lisame nimed tabelisse
        nimed.forEach(function (name, index) {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = name;
            row.appendChild(nameCell);

            const actionsCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Kustuta';
            deleteButton.addEventListener('click', function () {
                // Kustutame nime andmete massiivist
                nimed.splice(index, 1);

                // Uuendame tabelit
                renderTable();
            });
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);

            nameTableBody.appendChild(row);
        });
    }

    // Algse tabeli renderdamine
    renderTable();
});
