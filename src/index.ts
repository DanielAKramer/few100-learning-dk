import * as fromMath from './math';
import './styles.css';

const number1 = document.getElementById('number1') as HTMLInputElement;
const number2 = document.getElementById('number2') as HTMLInputElement;
const add = document.getElementById('add') as HTMLInputElement;
const total = document.getElementById('total') as HTMLSpanElement;

// console.log({ number1, number2, add });

add.addEventListener('click', function () {
    console.log('that tickles!', this);
    // this.disabled = true;
    const n1 = number1.valueAsNumber;
    const n2 = number2.valueAsNumber;
    const result = fromMath.add(n1, n2);

    total.innerText = result.toString();
    number1.value = '';
    number2.value = '';
    number1.focus();
});

