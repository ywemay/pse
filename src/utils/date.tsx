export function getFormattedDate(value: Date) {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(value.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

