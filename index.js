let reportsContainer = document.getElementById("grid");

const allReports = reportData
  .map((data, index) => {
    return `<div class="col-reports" key=${index}>
                        <img src=${data.cover} alt=${data.title}>
                        <div class="report-details">
                            ${data.documents
                              .map(
                                (d, i) =>
                                  `<a key=${i} href=${d.url} target="_blank">${d.title} <span class="report-details-type">(${d.file_size} ${d.file_type})<span/></a>`
                              )
                              .join("")} 
                        </div>
                    </div>`;
  })
  .join("");

reportsContainer.innerHTML = allReports;
