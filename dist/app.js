
function initial(){ return 0 }

function evolve(state,event){
    switch(event.type){
        case "ADD": return state + 1
        case "SUB": return state - 1
        default: return state
    }
}

let events=[]

function compute(){
    let s=initial()
    for(const e of events){ s=evolve(s,e) }
    return s
}

function render(){
    document.getElementById("view")
        .textContent="Value = "+compute()
}

window.dispatch=function(e){
    events.push(e)
    render()
}

render()
