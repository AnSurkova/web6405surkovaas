document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector("#destinations-table tbody");

    // Функция для загрузки данных с сервера
    function loadDestinations() {
        fetch("http://localhost:8000/destinations")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                // Очистка таблицы перед добавлением данных
                tableBody.innerHTML = "";

                // Проверка, есть ли данные
                if (data.length === 0) {
                    tableBody.innerHTML = `<tr><td colspan="3" style="color: orange;">Нет данных для отображения</td></tr>`;
                    return;
                }

                // Добавление строк в таблицу
                data.forEach(item => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${item.name}</td>
                        <td>${item.wingspan}</td>
                        <td>${item.habitat}</td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error("Ошибка при загрузке данных:", error);
                tableBody.innerHTML = `<tr><td colspan="3" style="color: red;">Ошибка: ${error.message}</td></tr>`;
            });
    }

    // Загрузка данных при загрузке страницы
    loadDestinations();
});
