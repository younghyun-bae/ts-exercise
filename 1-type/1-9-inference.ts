{
  // Type Inference
  let text = 'hello'; //': string' can be omitted
  // text = 1; 💩
  function print(message: 'hello') {
    console.log(message);
  }
  print('hello');

  //But always better to define type exept 'avoid'
  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);

}