puzzle_input = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,19,5,23,1,6,23,27,1,27,5,31,2,31,10,35,2,35,6,39,1,39,5,43,2,43,9,47,1,47,6,51,1,13,51,55,2,9,55,59,1,59,13,63,1,6,63,67,2,67,10,71,1,9,71,75,2,75,6,79,1,79,5,83,1,83,5,87,2,9,87,91,2,9,91,95,1,95,10,99,1,9,99,103,2,103,6,107,2,9,107,111,1,111,5,115,2,6,115,119,1,5,119,123,1,123,2,127,1,127,9,0,99,2,0,14,0]

function intcode_computer(codes) {
    for (let i = 0; i < codes.length; i++) {
        const opcode = codes[i]
        if (opcode === 1) {
            codes[codes[i+3]] = codes[codes[i+2]] + codes[codes[i+1]]
        }
        else if (opcode === 2) {
            codes[codes[i+3]] = codes[codes[i+2]] * codes[codes[i+1]]
        }
        else if (opcode === 99) {
            return
        }
        else {
            console.log("Invalid opcode: exiting program")
            return
        }
        i += 3
    }
}

const target = 19690720
// console.log(puzzle_input)
// intcode_computer(puzzle_input)
// console.log(puzzle_input)

let noun = 0
let verb = 0

while (noun < 100) {
    const fresh_input = puzzle_input.slice()
    console.log(noun, verb)
    fresh_input[1] = noun
    fresh_input[2] = verb
    // console.log(fresh_input)
    intcode_computer(fresh_input)
    console.log(fresh_input[0])
    if (fresh_input[0] === target) {
        console.log(`Noun: ${noun} Verb: ${verb}` + fresh_input)
        break
    }
    if (verb < 100) {
        verb++
        continue
    }
    verb = 0
    noun++
}