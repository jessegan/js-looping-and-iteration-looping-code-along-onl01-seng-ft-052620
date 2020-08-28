// Code your solutions in this file
function writeCards(names,msg) {
    const rtn = []
    for(let i = 0; i < names.length; i++){
        rtn.push(`Thank you, ${names[i]}, for the wonderful ${msg} gift!`)
    }
    return rtn
}

function countDown(num){
    for(num; num >= 0; num--){
        console.log(num)
    }
}