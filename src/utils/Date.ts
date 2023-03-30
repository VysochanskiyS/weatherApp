export function splitDay(date: Date, splitBy: number) {
    const timestamps = [];

    for (let i = 0; i <= 23; i += splitBy) {
        const longTimestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), i, 0, 0, 0).getTime();
        const timestamp = Math.floor(longTimestamp/ 1000)
        timestamps.push(timestamp);
    }

    return timestamps;
}

export function hasDayPassed(date: Date): boolean {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const passedDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return passedDay < today;
}
