class SortedList {
  constructor(items, length) {
    this.items = [],
      this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    //return this.items.length === 0 ? throw new Error("EmptySortedList") : Math.max(...this.items) <------ can i solve this some how like this????
    if (this.items.length === 0) throw new Error("EmptySortedList")
    return Math.max(...this.items)
  }
  min() {
    if (this.items.length === 0) throw new Error("EmptySortedList")
    return Math.min(...this.items)
  }
  average() {
    if (this.items.length === 0) throw new Error("EmptySortedList")
    return this.items.reduce((acc, val) => acc + val) / this.length
  }
  sum() {
    if (this.items.length === 0) return 0
    return this.items.reduce((acc, val) => acc + val)
  }
};

module.exports = SortedList;