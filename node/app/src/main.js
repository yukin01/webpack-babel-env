import { add } from './add'

const change = () => {
  console.log('start');
  const a = 1;
  const b = 4;
  const c = add(a, b);
  const str = `${a} + ${b} = ${c}`;
  console.log(str);
  
  document.getElementById('test').innerHTML = str;
};

change();
console.log('end');