export const formatDate = (param) => {
    const date = new Date(param);
    return `${formatDay(date.getDate())}/${formatDay(date.getMonth() + 1)}/${date.getFullYear()}`;
};
const formatDay = (n) => {
    return n < 10 ? `0${n}` : n;
};
//# sourceMappingURL=helpers.js.map