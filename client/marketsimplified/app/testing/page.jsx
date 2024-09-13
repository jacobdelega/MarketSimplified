import React from "react";

const page = async () => {
    fetch("https://afd.calpoly.edu/web/sample-tables")
        .then((response) => response.text())
        .then((html) => {
            // Parse the HTML to find the table element
            const tableElement = document.querySelector("table");

            // Extract the table cell values into an array
            // const values = [];
            // const rows = tableElement.getElementsByTagName("tr");
            // for (let i = 0; i < rows.length; i++) {
            //     const cells = rows[i].getElementsByTagName("td");
            //     for (let j = 0; j < cells.length; j++) {
            //         values.push(parseFloat(cells[j].textContent));
            //     }
            // }

            // Calculate the mean of the values
            const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
            console.log("Mean:", mean);
        })
        .catch((error) => console.error("Error:", error));
    // console.log(data);

    return <div>page</div>;
};

export default page;
