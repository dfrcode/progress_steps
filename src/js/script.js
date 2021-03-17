const prev = document.querySelector('.prev_btn')
const next = document.querySelector('.next_btn')

const listItems = document.querySelectorAll('.progress_steps_box_list_item')
const len = listItems.length

prev.disabled = true

let i = 0;
next.addEventListener('click', () => {
    if (i !== len - 1) {
        prev.disabled = false
        console.log(i++)
    } else {
        next.disabled = true
    }
})