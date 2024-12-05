const button_element: HTMLButtonElement | null = document.querySelector("button")

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
    
    // Create an array to hold the generated fib numbers
    let fib_numbers: number[] = []
    for (let i = 1; i <= max_n; i++) {
        fib_numbers.push(fib(i))
    }
    
    // Type the enumeration of the fib entries as a tuple of two numbers
    let enumeration: [number, number]
    for (enumeration of fib_numbers.entries()) {
        const current_output_element = document.createElement("div")
        current_output_element.innerText = `${enumeration[0]}: ${enumeration[1]}`
        output_element.appendChild(current_output_element)
    }
})

const fib = (current_number: number, memowise: {[key: number]: number} = {}): number => {
    // Check if we've already memoised the answer
    if (current_number in memowise) {
        return memowise[current_number]
    }    
    // The first two fib numbers are 1
    if (current_number == 1) {
        memowise[current_number] = 1
        return 1
    }
    if (current_number == 2) {
        memowise[current_number] = 1
        return 1
    }
    
    const current_fib = fib(current_number - 1) + fib(current_number - 2)
    memowise[current_number] = current_fib
    return current_fib
}