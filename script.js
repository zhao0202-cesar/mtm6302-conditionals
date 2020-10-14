const $container = document.getElementById('container')

let newElements = []

for (let i = 127789; i < 127799; i++) {
    newElements.push(`
    
        <div class="emoji">
            <p style='background-color: lightgrey;'>
                &#${i};
            </p>
            <p style='background-color: lightgrey;'>
                ${i}
            </p>
        </div>
    `)
}

$container.innerHTML = newElements.join('')

//Conditionals Lab
const $emojiList = document.querySelectorAll('.emoji')

for (let item of $emojiList){
    if (item.children[1].textContent.trim() === '127797') {
        //                string            === string

        //console.log(item)
        item.style.backgroundColor = 'lightgrey'
    }
}


//Event listener
$container.addEventListener('click', function(event) {
    //console.log(event.target.closest('div').children[1].textContent.trim())
    //            cut this part
    const value = event.target.closest('div').children[1].textContent.trim()
    let name = ''



    // if (value === '127789') {
    //     name = 'Hotdog'
    // }
    // else if (value === '127790') {
    //     name = 'Taco'
    // }

    switch (value) {
        case '127789':
            name = 'Hotdog'
            break
        case '127790':
            name = 'Taco'
            break
        default:
            name = 'something else'
    }



//insert big emoji to the text content
    document.getElementById('preview').innerHTML = `
        <p style='font-size: 100px;'>
            &#${value};
        </p>
        <p >
            ${name}
        </p>
    `
})