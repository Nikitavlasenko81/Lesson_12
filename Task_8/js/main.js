
function createCalendar(elem, year, month) {
    let nomberMonth = month - 1;
    let data = new Date(year, nomberMonth);

    let table = `<table>
                    <tr>
                        <th>пн</th>
                        <th>вт</th>
                        <th>ср</th>
                        <th>чт</th>
                        <th>пт</th>
                        <th>сб</th>
                        <th>вс</th>
                    </tr>
                    <tr>`;
    for (let i = 0; i < getDay(data); i++) {
        table += `<td></td>`;
    }
    while (data.getMonth() == nomberMonth) {
        table += `<td>${data.getDate()}</td>`;

        if (getDay(data) % 7 == 6) {
            table += `</tr><tr>`;
        }

        data.setDate(data.getDate() + 1);
    }
    if (getDay(data) != 0) {
        for (let i = getDay(data); i < 7; i++) {
            table += `<td></td>`;
        }
    }
    table += `</tr>
              </table>`;

    document.querySelector(`.${elem}`).innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}
createCalendar('calendar', 2021, 6);









