function is_prime(number) {
    let prime = true
    for (let i = 2; i < number - 1; i++) {
        if (number % i/2 == 0){
            prime = false;
        }
    }

    return prime
}
function find_factors(number) {
    let factors = []

    if (is_prime(number)){
        return number
    }else{
        for (let i = 2; i < number - 1; i++) {
            if (number % i == 0){
                factors.push(i)
            }
        }
    }

    return factors
}
function find_prime_factors(number) {
    let factors = find_factors(number)
    let prime_factors = []

    if (is_prime(number)){
        return number
    }else {
        for (let prime_factor of factors)
        {
            if (prime_factor != 1) {
                let prime = true

                for (let i = 2; i < prime_factor - 1; i++) {
                    if (prime_factor % i == 0) {
                        prime = false
                    }
                }

                if (prime) {
                    prime_factors.push(prime_factor)
                }
            }
        }
    }

    return prime_factors;
}
function find_lowest_common_factor(numbers){
    let dividers = []
    let prime_factors = []
    let lowest_common_factor = 1
    let lowest_common_factors = []
    let is_all_prime = false

    let prime_array = true

    for (const number of numbers) {
        if (number == 0){
            return  0
        }
    }

    for (const number of numbers) {
        if (!is_prime(number)){
            prime_array = false
        }
    }
    
    if (!prime_array){
        for (let i = 0; i < numbers.length; i++) {
            if (is_prime(numbers[i])){
                lowest_common_factors.push(numbers[i])
                numbers.splice(i, 1)
            }
        }
    }else{
        for (let i = 0; i < numbers.length; i++) {
            lowest_common_factor  *= numbers[i]
        }
        return lowest_common_factor
    }
    

    for (let i = 0; i < numbers.length; i++) {
        prime_factors[i] = find_prime_factors(numbers[i])
    }

    for (let i = 0; i < prime_factors.length; i++) {
        for (let j = 0; j < prime_factors[i].length; j++) {
            dividers.push(prime_factors[i][j])
        }
    }

    for (let i = 0; i < dividers.length; i++) {
        for (let j = i + 1; j < dividers.length; j++) {
            if (dividers[i] == dividers[j]){
                dividers.splice(j,1)
            }
        }
    }

    let lcm_index = 0

    let find_lcm = true

    while (find_lcm && is_all_prime == false) {
        for (let i = 0; i < dividers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] != 1) {
                    if (numbers[j] % dividers[i] == 0) {
                        numbers[j] = numbers[j] / dividers[i]

                        let is_added = false

                        for (let k = lcm_index; k < lowest_common_factors.length; k++) {
                            if (dividers[i] == lowest_common_factors[k]) {
                                is_added = true
                            }
                        }

                        if (is_added == false) {
                            lowest_common_factors.push(dividers[i])
                        }
                    }
                }
            }
        }

        lcm_index = lowest_common_factors.length

        let numbers_value = []
        let dummy = []

        for (let i = 0; i < numbers.length; i++) {
            numbers_value.push(false)
            dummy.push(true)
        }

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == 1){
                numbers_value[i] = true
            }
        }


        let please = false

        for (let i = 0; i < numbers_value.length; i++) {
            if (numbers_value[i] != dummy[i]){
                please = true
            }
        }
        if (please == false){
            find_lcm = false
        }

    }

    for (let i = 0; i < lowest_common_factors.length; i++) {
        lowest_common_factor  *= lowest_common_factors[i]
    }

    return lowest_common_factor
}
function find_highest_common_factor(numbers) {
    let two_divider = (number) => {
        let result
        let quotient
        let new_dividend
        let hcf

        let divider = num => {
            let divisor, dividend

            if (num[0] < num[1]) {
                divisor = num[0]
                dividend = num[1]
            } else {
                divisor = num[1]
                dividend = num[0]
            }
            new_dividend = divisor

            // multiplication value part

            for (let i = 1; i < i + 1; i++) {
                if (divisor * i > dividend) {
                    divisor = divisor * (i - 1)
                    quotient = i - 1
                    break
                } else if (divisor * i == dividend) {
                    divisor = divisor * i
                    quotient = i - 1
                    break
                }
            }

            // minus part
            result = dividend - divisor


            if (result != 0) {
                divider([new_dividend, result])
            } else {
                hcf = new_dividend
            }
        }

        divider([number[0], number[1]])
        return hcf

    }
    let curr_hcf

    if (numbers.length == 2) {
        curr_hcf = two_divider(numbers)
    }else {
        curr_hcf = two_divider([numbers[0], numbers[1]])
        numbers.splice(0, 2)

        while (numbers.length != 0) {
            curr_hcf = two_divider([numbers[0], curr_hcf])
            numbers.splice(0, 1)
        }
    }

    return curr_hcf
}