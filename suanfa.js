//时间复杂度

console.log("通常使用最差的时间复杂度来衡量一个算法的好坏。常数时间 O(1) 代表这个操作和数据量没关系，是一个固定时间的操作，比如说四则运算。对于一个算法来说，可能会计算出操作次数为 aN + 1，N 代表数据量。那么该算法的时间复杂度就是 O(N)。因为我们在计算时间复杂度的时候，数据量通常是非常大的，这时候低阶项和常数项可以忽略不计。当然可能会出现两个算法都是 O(N) 的时间复杂度，那么对比两个算法的好坏就要通过对比低阶项和常数项了。")


//栈：是一个线性的结构。符合先进后出和后进先出的，可以理解为杯子
class Stack{
    constructor(){
        this.stack=[]
    }
    push(item){//进栈
        this.stack.push(item)
    }
    pop(){//出栈
        this.stack.pop()
    }
    getCount() {
      return this.stack.length
    }
    isEmpty() {
      return this.getCount() === 0
    }
}
//响应的题目：匹配括号
var isValid = function (s) {
    let map = {
      '(': -1,
      ')': 1,
      '[': -2,
      ']': 2,
      '{': -3,
      '}': 3
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
      if (map[s[i]] < 0) {
        stack.push(s[i])
      } else {
        let last = stack.pop()
        if (map[last] + map[s[i]] != 0) return false
      }
    }
    if (stack.length > 0) return false
    return true
  };



//队列：队列是一个线性结构，特点是在某一端添加数据，在另一端删除数据，遵循先进先出的规律
// 单链队列
class Queue {
  constructor() {
    this.queue = []
  }
  enQueue(item) {
    this.queue.push(item)
  }
  deQueue() {
    return this.queue.shift()
  }
  getHeader() {
    return this.queue[0]
  }
  getLength() {
    return this.queue.length
  }
  isEmpty() {
    return this.getLength() === 0
  }
}
//循环队列
class SqQueue{
  constructor(length){
    this.queue = new Array(length+1)
    //队头位置
    this.first = 0
    //队尾位置
    this.last = 0
    //当前队列的大小
    this.size = 0
  }
  enQueue(item){
    //判断队尾+1是否为队头
    //如果是就代表需要扩充数组
    // %this.queue.length 是为了防止数组越界
    if (this.first === (this.last + 1) % this.queue.length) {
      
    }
  }
}