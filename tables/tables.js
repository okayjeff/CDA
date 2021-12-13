"use strict";

const GRIDSIZE = 9;

let table = document.querySelector(".table");
let tableHeaderRow = document.createElement("thead");
for (let head = 0; head <= GRIDSIZE; head++) {
    let tableHeaderCell = document.createElement("th");
    tableHeaderCell.innerText = head.toString();
    tableHeaderRow.appendChild(tableHeaderCell);
}
let tableBody = document.createElement("tbody");
table.appendChild(tableHeaderRow);
table.appendChild(tableBody);


for (let row = 1; row <= GRIDSIZE; row++) {
    let tableRow = document.createElement("tr");
    let rowHeader = document.createElement("th");
    rowHeader.setAttribute("scope", "row");
    rowHeader.innerText = row.toString();
    tableRow.appendChild(rowHeader);

    for (let col = 1; col <= GRIDSIZE; col++) {
        let tableCell = document.createElement("td");
        let cellValue = row * col;
        tableCell.innerText = cellValue.toString();
        tableRow.appendChild(tableCell);
    }

    tableBody.appendChild(tableRow);
}

