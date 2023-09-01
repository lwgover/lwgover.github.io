//taken from https://github.com/connorrothschild/.com/ I'm not sure what this does yet. Will update once I figure out
export function dateFormat(date) {
    const parsed = new Date(date);
    const month = parsed.toLocaleString("default", { month: "long" });
    const year = parsed.getUTCFullYear();

    return `${month} ${year}`;
};

export function sleep (milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};