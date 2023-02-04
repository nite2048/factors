let numbers = []

function add_digits(number) {
    if (numbers.length == 0){
        add_numbers()
    }

    numbers[numbers.length - 1].push(number)
}
function remove_digit() {
    numbers[numbers.length - 1].splice(numbers[numbers.length - 1].length - 1, 1)
    if (numbers[numbers.length - 1].length === 0){
        remove_number()
    }
}

function add_numbers(){
    numbers.push([])
}
function remove_number() {
    numbers.splice(numbers.length - 1, 1)
}
function remove_all_numbers() {
    numbers = []
}

function show_factors() {
    let element =  document.getElementById('output')
    element.textContent = find_factors(convert_to_number(numbers[numbers.length - 1])).toString()
}
function show_prime_factors() {
    let element =  document.getElementById('output')
    element.textContent = find_prime_factors(convert_to_number(numbers[numbers.length - 1])).toString()
}
function show_lowest_common_factor() {
    let lcm = []

    for (let i = 0; i < numbers.length; i++) {
        lcm.push(convert_to_number(numbers[i]))
    }

    let element =  document.getElementById('output')
    element.textContent =  find_lowest_common_factor(lcm).toString()
}
function show_highest_common_factor() {
    let hcf = []

    for (let i = 0; i < numbers.length; i++) {
        hcf.push(convert_to_number(numbers[i]))
    }

    let element =  document.getElementById('output')
    element.textContent =  find_highest_common_factor(hcf).toString()
}


function update() {
    let display_numbers = []

    for (let i = 0; i < numbers.length; i++) {
        display_numbers.push(convert_to_number(numbers[i]))
    }

    let element =  document.getElementById('display')
    element.textContent = display_numbers.toString()

    buttons_control()
}
function convert_to_number(array) {
    let number = 0

    let exponent = (max_power) => {
        let exponent = 1

        for (let i = 0; i < max_power; i++) {
            exponent *= 10
        }
        return exponent
    };

    for (let i = 0; i < array.length; i++) {
        number += array[i] * exponent(array.length - (1 + i))
    }
    return number
}

function buttons_control() {
    let factors =  document.getElementById('factors')
    let prime_factors =  document.getElementById('prime_factors')
    let lowest_common_factor =  document.getElementById('lowest_common_factor')
    let highest_common_factor =  document.getElementById('highest_common_factor')

    if (numbers.length > 1){
        factors.disabled = true
        prime_factors.disabled = true
        lowest_common_factor.disabled = false
        highest_common_factor.disabled = false
    }else {
        factors.disabled = false
        prime_factors.disabled = false
        lowest_common_factor.disabled = true
        highest_common_factor.disabled = true
    }
    if (numbers.length == 0){
        factors.disabled = true
        prime_factors.disabled = true
        lowest_common_factor.disabled = true
        highest_common_factor.disabled = true
    }

}

