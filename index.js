"use strict";
const button_element = document.querySelector("button");
button_element === null || button_element === void 0 ? void 0 : button_element.addEventListener("click", () => {
    // Grab the input and output elements
    const input_element = document.querySelector("input");
    const output_element = document.querySelector("#output");
    // If either one is null for whatever reason then exit the function
    if (input_element === null || output_element === null)
        return;
    // Clear the previous children
    output_element.innerHTML = "";
    // Get what n to calculate up to and convert it to a number
    const max_n_string = input_element.value;
    const max_n = parseInt(max_n_string);
    let fib_numbers = [];
    for (let i = 1; i <= max_n; i++) {
        fib_numbers.push(fib(i));
    }
    for (const [i, fib_number] of fib_numbers.entries()) {
        const current_output_element = document.createElement("div");
        current_output_element.innerText = `${i}: ${fib_number}`;
        output_element.appendChild(current_output_element);
    }
});
const fib = (current_number, memowise = {}) => {
    if (current_number == 1)
        return 1;
    if (current_number == 2)
        return 1;
    if (current_number in memowise) {
        return memowise[current_number];
    }
    return fib(current_number - 1) + fib(current_number - 2);
};
