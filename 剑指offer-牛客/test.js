let count = 0;
function selectTeams(n, m, abilities) {
    let coachA = true; // 标记当前挑选球员的教练
  
    while (getLength(abilities) > 0) {
      let maxIndex = -1;
      let maxAbility = -1;
  
      // 在可选的球员范围内找到能力值最大的球员
      for (let i = 0; i < abilities.length; i++) {
        if (abilities[i] != 'A' && abilities[i] != 'B' && abilities[i] > maxAbility) {
          maxAbility = abilities[i];
          maxIndex = i;
        }
      }
      console.log(maxIndex)
      // 从abilities数组中移除选中的球员及其左右的 m 个球员
      let start = maxIndex - m < 0 ? 0 : maxIndex - m
      let j = 0;
      for(let i = start; i < abilities.length; i++) {
        if(abilities[i] != 'A' && abilities[i] != 'B') {
            abilities[i] = coachA ? 'A' : 'B';
            j++;
        }
        if(j >= 2*m + 1) {
            break;
        }
      }
      console.log(abilities)
      coachA = !coachA; // 切换教练
    }
  
    return abilities;
  }

function getLength(arr) {
    let count = 0;
    for(let i = 0;i < arr.length; i++) {
        if(arr[i] != 'A' && arr[i] != 'B') {
            count++;
        }
    }
    return count;
}
  
  // 输入数据
//   const input = "7 1\n3 6 1 7 2 5 4\n";
  const input = "10 2\n4 8 9 10 7 6 5 3 2 1\n";
  const lines = input.trim().split('\n');
  const [n, m] = lines[0].split(' ').map(Number);
  const abilities = lines[1].split(' ').map(Number);
  
  // 调用函数并输出结果
  const result = selectTeams(n, m, abilities);
  console.log(result);