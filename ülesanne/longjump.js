document.addEventListener('DOMContentLoaded', function () {
    const andmed = [
        { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
        { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
        { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
        { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
        { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
        { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
        { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
        { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
        { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
        { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
        // Lisa kontrollimiseks oma andmed
    ];

    const addForm = document.getElementById('add-form');
    const dataTableBody = document.getElementById('data-table-body');
    const addButton = document.getElementById('add-button');

    // Lisamisfunktsioon
    addButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const resultsString = document.getElementById('results').value;
        const results = resultsString.split(',').map(parseFloat);

        // Lisame uued andmed andmete massiivi
        andmed.push({ nimi: name, tulemused: results });

        // Uuendame tabelit
        renderTable();
    });

    // Funktsioon tabeli uuendamiseks
    function renderTable() {
        // Tühjendame tabeli
        dataTableBody.innerHTML = '';

        // Lisame andmed tabelisse
        andmed.forEach(function (data, index) {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = data.nimi;
            row.appendChild(nameCell);

            const resultsCell = document.createElement('td');
            resultsCell.textContent = data.tulemused.join(', ');
            row.appendChild(resultsCell);

            const maxResultCell = document.createElement('td');
            maxResultCell.textContent = Math.max(...data.tulemused).toFixed(2);
            row.appendChild(maxResultCell);

            const averageResultCell = document.createElement('td');
            const average = calculateAverage(data.tulemused);
            averageResultCell.textContent = average.toFixed(2);
            row.appendChild(averageResultCell);

            const actionsCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Kustuta';
            deleteButton.addEventListener('click', function () {
                // Kustutame andmed andmete massiivist
                andmed.splice(index, 1);

                // Uuendame tabelit
                renderTable();
            });
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);

            dataTableBody.appendChild(row);
        });
    }

    // Funktsioon keskmise tulemuse arvutamiseks
    function calculateAverage(results) {
        const sum = results.reduce((total, result) => total + result, 0);
        return sum / results.length;
    }

    // Algse tabeli renderdamine
    renderTable();
});
