const input = document.querySelector('input'); //grab the input field

const cursor = input.focus();

input.addEventListener('keypress', eventHandler); //connect the input to the enter key

function clearField(input) {
    input.value = "";
};

function eventHandler (event) { //when you press enter, it gives you a response
  if (event.which === 13) {
    const p = document.createElement('p');
    if (input.value.length === 0) { //if the input field is empty, it will give you this response
      p.classList.add('red');
      p.innerText = `The text field is empty. Please enter name.`;

    }
    else {
      p.innerText = `Hello ${input.value}, nice to meet you.`;
    }
    const form = document.querySelector('form');
    form.append(p);
    event.preventDefault();
    form.reset();
  }
}
