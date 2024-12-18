// get rental data and populate the rentals table
fetch('data/rentals.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('rental-table');
    data.forEach(rental => {
      rental.models.forEach(model => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${rental.type}</td>
          <td>${model.name}</td>
          <td>${model.maxPersons}</td>
          <td>$${model.halfDayPrice}</td>
          <td>$${model.fullDayPrice}</td>
        `;
        tableBody.appendChild(row);
      });
    });
  })
  .catch(error => console.error('Error fetching rental data:', error));

