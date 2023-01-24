var turn = 0;
const clicked = (t) => {
    const tile = document.getElementById(t)
    if(!tile.innerText) {
        tile.innerText = turn++%2==0? 'O': 'X'
    }
    // if(turn==9){
    checkIfDone()
    // }
}

const reset = () => {
    for(var i = 1; i<=9; i++){
        const cur = document.getElementById(i.toString())
        cur.innerHTML = ''
        cur.setAttribute('onclick', `clicked(${i})`)
    }
    const modal = document.getElementById('modal')
    const final = document.getElementById('final-screen')
    final.style.zIndex = 0
    modal.innerHTML = ''
    modal.style.backgroundColor = 'transparent'

}

const checkIfDone = () => {
    var tie = true
    for(var i = 1; i<=9; i++){
        const cur = document.getElementById(i.toString())
        if(!cur.innerText){
            tie = false;
        }
    }
    if(tie){
        for(var i = 1; i<=9; i++){
            const cur = document.getElementById(i.toString())
            cur.removeAttribute('onclick')
        }
        const modal = document.getElementById('modal')
        const final = document.getElementById('final-screen')
        final.style.zIndex = 2
        modal.style.backgroundColor = 'rgba(51, 170, 51,  1)'
        modal.innerText = `Game is Tied`
        const br = document.createElement('br')
        modal.appendChild(br)
        const btn = document.createElement('button')
        // btn.classList.add('btn')
        btn.innerHTML = "Play again"
        btn.addEventListener("click", reset)
        modal.appendChild(btn)
    }
    var winCondition = [[1,2,3],
                        [1,4,7],
                        [1,5,9],
                        [2,5,8],
                        [3,5,7],
                        [3,6,9],
                        [4,5,6],
                        [7,8,9]]
    var winner
    for(var i = 0; i<8; i++){
        var type = ''

        for(var j = 0; j<3; j++){
            const cur = document.getElementById(winCondition[i][j].toString())
            // console.log(cur.innerText)
            if(j==0){
                type = cur.innerText;
            }
            else if(cur.innerText!=type){
                break;
            }
            else if(j==2)winner = type
        }
        if(winner){
            break;
        }
    }
    console.log(winner)
    if(winner){
        for(var i = 1; i<=9; i++){
            const cur = document.getElementById(i.toString())
            cur.removeAttribute('onclick')
        }
        const modal = document.getElementById('modal')
        const final = document.getElementById('final-screen')
        final.style.zIndex = 2
        modal.style.backgroundColor = 'rgba(51, 170, 51,  1)'
        modal.innerText = `The winner is: ${winner}`
        const br = document.createElement('br')
        modal.appendChild(br)
        const btn = document.createElement('button')
        // btn.classList.add('btn')
        btn.innerHTML = "Play again"
        btn.addEventListener("click", reset)
        modal.appendChild(btn)
    }
}