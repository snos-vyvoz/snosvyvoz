document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar__link");

    function highlightActiveLink() {
        let scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active"); 
                    if (link.getAttribute("href").substring(1) === sectionId) {
                        link.classList.add("active"); 
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightActiveLink);

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, 
                    behavior: "smooth"
                });
            }
        });
    });

    highlightActiveLink();
});

document.addEventListener("DOMContentLoaded", () => {
    const priceButton = document.querySelector(".price-button");
    const priceSection = document.getElementById("price");

    if (priceButton && priceSection) {
        priceButton.addEventListener("click", () => {
            window.scrollTo({
                top: priceSection.offsetTop - 50,
                behavior: "smooth"
            });
        });
    }
});

function renderVyvozTable() {
    const table = document.getElementById("vyvoz-table");
    table.innerHTML = ""; 

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th><b>Объем</b></th>
            <th><b>Цена</b></th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    vyvozPrice.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.volume}</td>
            <td>${item.price}</td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
}

function renderLoadersTable() {
    const table = document.getElementById("loaders-table");
    table.innerHTML = ""; 

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th><b>Услуга</b></th>
            <th><b>Цена</b></th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    loadersPrice.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.volume}</td>
            <td>${item.price}</td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
}

function renderDemontageTable() {
    const table = document.getElementById("demontage-table");
    table.innerHTML = "";

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th><b>Услуга</b></th>
            <th><b>Цена</b></th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    demontagePrice.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.volume}</td>
            <td>${item.price}</td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
}

function renderTransportTable() {
    const table = document.getElementById("transport-table");
    table.innerHTML = ""; 

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th><b>Услуга</b></th>
            <th><b>Цена</b></th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    transportPrice.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.volume}</td>
            <td>${item.price}</td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
}

renderVyvozTable()
renderLoadersTable()
renderDemontageTable()
renderTransportTable()
