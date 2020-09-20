const dateUtil = {
    getMonthAsString(date) {
        const formattedDate = new Date(date);
        const month = formattedDate.toLocaleString('default', {
            month: 'long'
        });
        return `${month} ${formattedDate.getDate()}, ${formattedDate.getFullYear()}`;
    }
}

export default dateUtil;
