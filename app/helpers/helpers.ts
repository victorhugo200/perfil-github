export const formatDate = (param: Date) => {
    const date = new Date(param);
    return `${formatDay(date.getDate())}/${formatDay(
        date.getMonth() + 1
    )}/${date.getFullYear()}`;
};

const formatDay = (n: number) => {
    return n < 10 ? `0${n}` : n;
};
