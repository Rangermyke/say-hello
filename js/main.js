const input = document.querySelector('input'); //grab the input field

input.addEventListener('keypress', eventHandler); //connect the input to the enter key

function clearField(input) {
    input.value = "";
};

function eventHandler (event) { //when you press enter, it gives you a response
  if (event.which === 13) {
    if (input.value.length === 0) { //if the input field is empty, it will give you this response
      const p = document.createElement('p');
      p.innerText = `The text field is empty. Please enter name.`;
      const form = document.querySelector('form');
      form.append(p);
      event.preventDefault();
    }
    else {
      const p = document.createElement('p'); // If you put your name in, it will say this and input a p tag
      p.innerText = `Hello ${input.value}, nice to meet you.`;
      const form = document.querySelector('form');
      form.append(p);
      event.preventDefault();
    }
  }
}
