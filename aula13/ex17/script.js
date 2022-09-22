function tabuada (){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('lestab')

    if (num.Value.length == 0){
        window.alert('Por favor , digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.inert = ''
        while (c <= 0) {
            let item = document.createElement('option')
            item.text =`${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++   
        }
    }
}