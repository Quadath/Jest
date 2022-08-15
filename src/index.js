export default function makeCart() {
    return {
        items: [],
        addItem: function(good, count) {
            const items = this.items;
            if (count > 0) {
                const index = items.findIndex(i => i.name === good.name)
                if (items.length > 0 && index > 0) {
                    items[index].count += count;
                } else {
                    good.count = count;
                    items.push(good);
                }
            }
        },
        getItems: function() {
            return this.items;
        },
        getCost: function() {
            return this.items.map(item => item.price * item.count).reduce((partialSum, a) => partialSum + a, 0);
        }
    }
}