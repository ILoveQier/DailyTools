/*
 * @Description: 优先队列，放入队列的每个元素，根据优先值进行排序，可获取最优先的元素
 * @Author: wangchao
 * @Date: 2022-08-12 14:40:05
 */
class PriorityQueue {
  arr = []

  // rules 配置优先排列规则
  // limit 限制队列长度
  // isDuplicated 是否入队去重
  constructor(rules = () => { }, conditions = {}) {
    const { limit = Infinity, isDuplicated = false } = conditions
    this.limit = limit
    this.isDuplicated = isDuplicated
    this.rules = rules
  }
  // 入队
  inqueue(item) {
    if (this.isDuplicated) {
      if (this.arr.includes(item)) return
    }
    for (let i = 0; i < this.arr.length; i++) {
      // 根据排列规则进入优先队列
      if (this.rules(this.arr[i], item)) {
        // 如果确实优先，在他前边 插队
        this.arr.splice(i, 0, item)
        // 判断长度 大于限制长度，最小的pop出去
        if (this.size() > this.limit) {
          this.arr.pop()
        }
        return
      }
    }
    // 默认push进数组，特别小的数能进入队列的唯一机会
    if (this.size() < this.limit) {
      this.arr.push(item)
    }
  }
  // 取出最优先的副本 最大堆
  pick() {
    return this.arr[0]
  }
  // 取出最末尾的副本 最小堆
  pickLast() {
    return this.arr[this.size() - 1]
  }
  // 出队并返回
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
let pq = new PriorityQueue((prev, cur) => cur > prev)
pq.inqueue(3)
pq.inqueue(13)
pq.inqueue(5)
pq.inqueue(1)
console.log(pq.show());
let pq1 = new PriorityQueue((prev, cur) => cur.id > prev.id, 4)
let arr = [{ id: 1, name: '小一' }, { id: 4, name: '里斯' }, { id: 5, name: '王五' }, { id: 3, name: '张三' }, { id: 7, name: '琪琪' }]
arr.forEach(item => {
  pq1.inqueue(item)
})
console.log(pq1.show());


