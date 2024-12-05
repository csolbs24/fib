console.log("hello brendans")

const button_element: HTMLButtonElement | null = document.querySelector("button")
console.log(button_element)

button_element?.addEventListener("click", () => {
    // Grab the input and output elements
    const input_element: HTMLInputElement | null = document.querySelector("input")
    const output_element: HTMLDivElement | null = document.querySelector("#output")

    // If either one is null for whatever reason then exit the function
    if (input_element === null || output_element === null) return
        
    // Clear the previous children
    output_element.innerHTML = ""

    // Get what n to calculate up to and convert it to a number
    const max_n_string: string | undefined = input_element.value
    const max_n: number = parseInt(max_n_string)
    
    for (let i = 1; i <= max_n; i++) {
        const current_output_element = document.createElement("div")
        current_output_element.innerText = `${i}: ${fib(i)}`
        output_element.appendChild(current_output_element)
    }
})

const fib = (current_number: number, memowise: {[key: number]: number} = {}): number => {
    if (current_number == 1) return 1
    if (current_number == 2) return 1
    if (current_number in memowise) {
        return memowise[current_number]
    }
    
    return fib(current_number - 1) + fib(current_number - 2)
}