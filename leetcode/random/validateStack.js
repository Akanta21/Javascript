export const validateStack = (pushed, popped) => {
  // let poppedIdx = 0
  // let stack = [];

  // for(let i = 0; i < pushed.length; i++){
  //     let top = pushed[i]
  //     stack.push(top);

  //     while(poppedIdx < pushed.length && top === popped[poppedIdx]){
  //         stack.pop();
  //         poppedIdx++
  //         top = stack[stack.length - 1]
  //     }
  // }

  // console.log(stack.length)

  // return stack.length === 0;

  let i = 0; let j = 0

  for (const num of pushed) {
    pushed[i] = num
    i++

    while (i > 0 && popped[j] === pushed[i - 1]) {
      i--; j++
    }
  }

  console.log(i)
  return i === 0
}
