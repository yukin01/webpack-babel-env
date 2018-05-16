import { add } from './add'

const change = () => {
  const main = document.getElementById('main');
  
  const title = document.createElement('div');
  title.textContent = 'Hello world!';
  main.appendChild(title);

  const equation = document.createElement('div');
  const a = 1;
  const b = 2;
  const c = add(a, b);
  equation.textContent = `${a} + ${b} = ${c}`;
  main.appendChild(equation);
};

change();