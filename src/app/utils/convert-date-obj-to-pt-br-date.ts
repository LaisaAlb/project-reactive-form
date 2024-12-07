export const convertDateObjToPtBrDate = (date: Date): string => {
    const day = padZero(date.getDate())
    const month = padZero(date.getMonth() + 1)
    const year = padZero(date.getFullYear())

    return `${day}/${month}/${year}`
}

const padZero = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString()
}