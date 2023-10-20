// 方法一: 哈希法
function MoreThanHalfNum_Solution( numbers ) {
  const map = new Map()

  let max = 0

  for(let num of numbers) {
    if(map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
    // Map(2) { 1024 => 500, 2048 => 501 } 预防这种情况
    max = map.get(num) > max ? map.get(num) : max
  }
  for(let entry of map.entries()) {
    if(entry[1] >= map.size / 2 && max == entry[1]) {
      return entry[0]
    }
  }
  return numbers[0]
}
// 方法二: 排序
function MoreThanHalfNum_Solution2( numbers ) {
  numbers.sort()
  return numbers[parseInt(numbers.length / 2)]
}
//  方法三： 候选法（最优解）
function MoreThanHalfNum_Solution3( numbers ) {
  let cond = -1 // 候选人
  let cnt = 0 // 候选人投票次数
  for(let i = 0; i < numbers.length; i++) {
    if(cnt == 0) {
      cond = numbers[i];
      cnt++;
    } else {
      if(cond == numbers[i]) cnt++
      else cnt--
    }
  }
  cnt = 0
  for(let k of numbers) {
    if(cond == k) cnt++;
  }
  if(cnt > numbers.length / 2) return cond
  return 0
}
console.log(MoreThanHalfNum_Solution3([1,2,3,2,2,2,5,4,2]))