"use strict";
const product_property = document.querySelector(".product__description__property");
console.log(product_property);
if (product_property) {
    const innerText = product_property.innerText;
    const isRecogerEnTienda = innerText.includes("Recoger");
    if (isRecogerEnTienda && innerText.split(":")[1].trim() === "Sí") {
        const orderSummary = document.querySelector(".order-summary__sections");
        const newDiv = document.createElement("div");
        newDiv.style.width = "100%";
        newDiv.style.padding = "1rem";
        newDiv.style.backgroundColor = "#434343";
        newDiv.style.color = "#ffffff";
        newDiv.innerHTML = `
            <p style="font-weight: bold;">Seleccionaste Pick Up - Recoger en Tienda</p>
        `;
        orderSummary === null || orderSummary === void 0 ? void 0 : orderSummary.appendChild(newDiv);
    }
}
