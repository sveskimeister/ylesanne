document.addEventListener('DOMContentLoaded', function () {
  const objektid = []; // Andmed olemasolevate objektide kohta

  const addForm = document.getElementById('add-form');
  const objectTableBody = document.getElementById('object-table-body');
  const addButton = document.getElementById('add-button');
  const totalPriceElement = document.getElementById('total-price');

  // Lisamisfunktsioon
  addButton.addEventListener('click', function () {
      const name = document.getElementById('name').value;
      const quantity = parseInt(document.getElementById('quantity').value);
      const price = parseFloat(document.getElementById('price').value).toFixed(2); // Hind kaks komakohta

      // Lisame uue objekti andmete massiivi
      objektid.push({ name, quantity, price });

      // Uuendame tabelit ja hindade kogusummat
      renderTable();
      calculateTotalPrice();
  });

  // Funktsioon tabeli uuendamiseks
  function renderTable() {
      // Tühjendame tabeli
      objectTableBody.innerHTML = '';

      // Lisame objektid tabelisse
      objektid.forEach(function (objekt, index) {
          const row = document.createElement('tr');

          const nameCell = document.createElement('td');
          nameCell.textContent = objekt.name;
          row.appendChild(nameCell);

          const quantityCell = document.createElement('td');
          quantityCell.textContent = objekt.quantity;
          row.appendChild(quantityCell);

          const priceCell = document.createElement('td');
          priceCell.textContent = objekt.price + ' EUR';
          row.appendChild(priceCell);

          const totalCell = document.createElement('td');
          const total = (objekt.quantity * objekt.price).toFixed(2);
          totalCell.textContent = total + ' EUR';
          row.appendChild(totalCell);

          const actionsCell = document.createElement('td');
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Kustuta';
          deleteButton.addEventListener('click', function () {
              // Kustutame objekti andmete massiivist
              objektid.splice(index, 1);

              // Uuendame tabelit ja hindade kogusummat
              renderTable();
              calculateTotalPrice();
          });
          actionsCell.appendChild(deleteButton);
          row.appendChild(actionsCell);

          objectTableBody.appendChild(row);
      });
  }

  // Funktsioon hindade kogusumma arvutamiseks
  function calculateTotalPrice() {
      const total = objektid.reduce(function (sum, objekt) {
          return sum + objekt.quantity * objekt.price;
      }, 0);
      totalPriceElement.textContent = total.toFixed(2) + ' EUR';
  }

  // Algse tabeli renderdamine
  renderTable();
});
