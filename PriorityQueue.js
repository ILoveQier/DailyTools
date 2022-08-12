/*
 * @Description: 优先队列，放入队列的每个元素，根据优先值进行排序，可获取最优先的元素
 * @Author: wangchao
 * @Date: 2022-08-12 14:40:05
 */
class PriorityQueue {
  arr = []
  constructor(limit = Infinity, rules = () => { }) {
    this.limit = limit
    this.rules = rules
  }

  inqueue(item) {
    for (let i = 0; i < this.arr.length; i++) {
      const element = this.arr[i];
      if (this.rules(element, item)) {
        this.arr.splice(i, 0, item)
        if (this.size() > this.limit) {
          this.arr.pop()
        }
        return
      }
    }
    if (this.size() < this.limit) {
      this.arr.push(item)
    }
  }
  pick() {
    return this.arr[0]
  }
  dequeue() {
    return this.arr.shift()
  }
  size() {
    return this.arr.length
  }
  show() {
    return this.arr
  }
}

// how to use
let pq = new PriorityQueue(3, (prev, cur) => cur > prev)
pq.inqueue(3)
pq.inqueue(13)
pq.inqueue(5)
pq.inqueue(1)
console.log(pq.show());
let pq1 = new PriorityQueue(4, (prev, cur) => cur.id > prev.id)
let arr = [{ id: 1, name: '小一' }, { id: 4, name: '里斯' }, { id: 5, name: '王五' }, { id: 3, name: '张三' }, { id: 7, name: '琪琪' }]
arr.forEach(item => {
  pq1.inqueue(item)
})
console.log(pq1.show());


