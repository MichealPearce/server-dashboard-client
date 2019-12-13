const k = 1000;

export function getUnits(i) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    return sizes[i]
}

export function formatBytesToString(bytes, split = false, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    if(split) return [
        parseFloat((bytes / Math.pow(k, i)).toFixed(dm)),
        getUnits(i)
    ]
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + getUnits(i);
}

export default function formatBytes(bytes, s = false, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    if(!s) return parseFloat((bytes / Math.pow(k, i)).toFixed(dm))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + getUnits(i);
}