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

        }else if (exp.includes("log")) {
            let sinus= exp.replace("log","Math.log10")
            document.querySelector('.input1').value=eval(sinus)

        } else if (exp.includes("ln")) {
            let sinus= exp.replace("ln","Math.log")
            document.querySelector('.input1').value=eval(sinus)

        }  else if (exp.includes("pi")) {
            let sinus= exp.replace("pi","Math.PI")
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
    let ln=document.querySelector(".ln")
    let log=document.querySelector(".log")
    if (symb==="/") {  
        boutton.innerHTML="&#x25;" 
        ln.innerHTML="&int;"
        log.innerText='Pi'       
        boutton.setAttribute("onclick","calcule('%')")
        divi.setAttribute("onclick","secondf('%')") 
        ln.setAttribute("onclick","calcule('int')")
        log.setAttribute('onclick','calcule("pi")')  
        console.log()
    }else{
        boutton.innerText="/"
        boutton.setAttribute("onclick","calcule('/')")
        divi.setAttribute("onclick","secondf('/')") 
        ln.setAttribute('onclick','calcule("ln")')
        log.setAttribute('onclick','calcule("log")')
        ln.innerText="Ln"
        log.innerText='Log'
    }
}
Math.PI
const power= (symb)=>{
    let on=document.querySelector('.On')
    let etat=document.querySelector('.etat1')
    if (symb==="on") {  
       
       etat.style.backgroundColor="red"
        on.style.background="linear-gradient(rgb(226, 40, 40) 0%, #5f0202 100%)"    
        on.innerText='Off'
        etat.value='Off'
        on.setAttribute("onclick","power('Off')") 
    }else{
      
        etat.style.backgroundColor="rgb(40, 250, 2)"
        etat.value='On'
        on.innerText="On"
        on.style.background="linear-gradient(rgb(90, 170, 70) 0%, #33f801 100%)"
        on.setAttribute("onclick","power('on')") 
    }
}
