export default function fill(coll, value, start = 0, end = Infinity) {
    coll = coll.map((item, index) => {
        if (index >= start && index < end) {
            coll[index] = value
        }
    })
}