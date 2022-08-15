export default function get(arr, index, defaultValue = null) {
    return arr[index] ? arr[index] : defaultValue;
}