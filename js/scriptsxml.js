document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(e.target.result, "text/xml");
                generateTable(xmlDoc);
            };
            reader.readAsText(file);
        }
    });

    function generateTable(xml) {
        const tableContainer = document.getElementById("table-container");
        tableContainer.innerHTML = '';  // Clear previous content
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");

        const clientes = xml.getElementsByTagName("Cliente");
        if (clientes.length > 0) {
            const firstCliente = clientes[0];
            for (let i = 0; i < firstCliente.children.length; i++) {
                const th = document.createElement("th");
                th.textContent = firstCliente.children[i].nodeName;
                headerRow.appendChild(th);
            }
            table.appendChild(headerRow);

            for (let i = 0; i < clientes.length; i++) {
                const row = document.createElement("tr");
                for (let j = 0; j < clientes[i].children.length; j++) {
                    const td = document.createElement("td");
                    td.textContent = clientes[i].children[j].textContent;
                    row.appendChild(td);
                }
                table.appendChild(row);
            }
        }

        tableContainer.appendChild(table);
    }
});