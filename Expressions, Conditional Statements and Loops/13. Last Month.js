function lastMonthDays(data) {
    let day = data[0];
    let month = data[1];
    let year = data[2];

    let newDate = new Date(year, month-1, 0);
    let daysCount = newDate.getDate();
    return daysCount;
}