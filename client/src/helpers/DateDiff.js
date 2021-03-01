export default function DateDiff(oldDate) {
    const date1 = new Date(oldDate).getTime();
    const date2 = new Date();

    // return minutes if less than 60
    let minutes = Math.floor((date2 - date1) / 60000)
    if (minutes < 60) {
        return `${minutes} minutes ago`
    }
    // return hours if less than 24
    let hours = Math.floor((date2 - date1) / (60000 * 60));
    if (hours < 24) {
        return `${hours} hours ago`
    }
    // returndays if less than 30
    let days = Math.floor((date2 - date1) / (60000 * 60 * 24))
    if (days < 30) {
        return `${days} days ago`
    }
    // return months if less than 12
    let months = Math.floor((date2 - date1) / (60000 * 60 * 24 * 30))
    if (months < 12) {
        return `${months} months ago`
    }
    // return years
    let years = Math.floor((date2 - date1) / (60000 * 60 * 24 * 30 * 12))
    return `${years} years ago`
}