document.querySelector('body').addEventListener('loadstart',(e)=>{
    document.querySelector('.input1').value=""
    document.querySelector('.input2').value=""
})
document.querySelector(".egale").setAttribute("style","red")
const ecran= document.querySelector('.affiche')
const calcule= (number)=>{
    if (number==='sin') {
         document.querySelector(".input2").value=document.querySelector('.input2').value+"sin"
    }else{
        document.querySelector('.input2').value=document.querySelector('.input2').value+number
    }
}
const aqual= ()=>{
    let exp= document.querySelector('.input2').value;  
    if (exp) { 
        if (exp.includes("sin")) {
            let sinus= exp.replace("sin","Math.sin")
            document.querySelector('.input1').value=eval(sinus)
        }else if (exp.includes("cos")) {
            let sinus= exp.replace("cos","Math.cos")
            document.querySelector('.input1').value=eval(sinus)
        }else if (exp.includes("tan")) {
            let sinus= exp.replace("tan","Math.tan")
            document.querySelector('.input1').value=eval(sinus)
        }else if (exp.includes("exp")) {
            let sinus= exp.replace("exp","Math.exp")
            document.querySelector('.input1').value=eval(sinus)

        }else if (exp.includes("sqrt")) {
            let sinus= exp.replace("sqrt","Math.sqrt")
            document.querySelector('.input1').value=eval(sinus)

        }else if (exp.includes("abs")) {
            let sinus= exp.replace("abs","Math.abs")
            document.querySelector('.input1').value=eval(sinus)

        } else{
            document.querySelector('.input1').value=eval(exp)
        }
    }
}
const delect= ()=>{
    document.querySelector('.input1').value="";
    let exp= document.querySelector(".input2").value
    document.querySelector(".input2").value=exp.substring(0,exp.length-1)
}
const remove= ()=>{
    document.querySelector(".input1").value="";
    document.querySelector(".input2").value="";
}
const secondf= (symb)=>{
    let divi=document.querySelector('.secondf')
    let boutton= document.querySelector('.division')
    if (symb==="/") {  
        boutton.innerText="%"     
        boutton.setAttribute("onclick","calcule('%')")
        divi.setAttribute("onclick","secondf('%')")   
        console.log()
    }else{
        boutton.innerText="/"
        boutton.setAttribute("onclick","calcule('/')")
        divi.setAttribute("onclick","secondf('/')") 
    }
}
const power= (symb)=>{
    let divi=document.querySelector('.secondf')
    let boutton= document.querySelector('.division')
    if (symb==="/") {  
        boutton.innerText="%"     
        boutton.setAttribute("onclick","calcule('%')")
        divi.setAttribute("onclick","secondf('%')")   
        console.log()
    }else{
        boutton.innerText="/"
        boutton.setAttribute("onclick","calcule('/')")
        divi.setAttribute("onclick","secondf('/')") 
    }
}