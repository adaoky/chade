/* mudar o reader da pagina quando der scroll*/
const header = document.querySelector('#heade2')
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function(){
 if (window.scrollY > navHeight) {
    //  o scroll e meisr que a altuara do header 
    header.classList.add('scroll')
    
 }else{
    // o scrool nao é a maior que a altura do hearder
    header.classList.remove('scroll')
 }
})



//carrocel de imaggens
let count = 1 ;
  document.getElementById('radio1').Checked = true;


setInterval(function(){
    nextImage();

},4000)
 

 function nextImage(){

    count++;
    if(count > 4){
        count=1;
    }
     document.getElementById('radio'+count).checked = true;
 }



  // mostrar o formularo de login

    const nav = document.querySelector('#lc nav')
    const toggle =  document.querySelectorAll('nav .login')

      for( const element of toggle){
        element.addEventListener('click', function(){
            nav.classList.toggle('login') 
          })  
          

      }
 //motrar formulario de cadastro
  const nav2= document.querySelector( '#lc nav')
  const toggle2 = document.querySelectorAll('nav .cadastro')
   for( const element of toggle2){
    element.addEventListener( 'click', function(){
        nav.classList.toggle('cadastro')
    }

    )
   }
 
    /* guardadr us dados na local storage */
 //formulario de cadastro
 
   /*const url = href = "index.html"
 const btn = document.querySelector('#bom')

 function open(url){
  const win = window.open(url,"_blank")
 }
  btn.addEventListener("click"), () => {
    open(url)
  }
*/

    function c(){

       

      var nome = document.getElementById('nome').value
      var email = document.getElementById('email2').value
      var csenha = document.getElementById('csenha').value
      var senha = document.getElementById('senha2').value

      if (senha != csenha) {
        window.alert("Verifica se a senha esta correcta")
        
      }



      if (!email || !nome || !csenha || !senha) {
        window.alert("Por favor preencha todos os campos.")
        const nav2= document.querySelector( '#lc nav')
        const toggle2 = document.querySelectorAll('nav .cadastro')
         for( const element of toggle2){
          element.addEventListener( 'click', function(){
              nav.classList.add('cadastro')
          }
          
      
          )
        }
      } else{



     localStorage.setItem("name", nome)

     localStorage.setItem("email",email)
     localStorage.setItem("csenha",csenha)
     localStorage.setItem("senha",senha)

     window.location="index2.html"



   }
  }

    function l(){

          
       var email = document.getElementById('email').value
       var senha = document.getElementById('senha').value
        
       if (!email || !senha) {
        window.alert("Por favor preencha todos os campos.")
        const nav2= document.querySelector( '#lc nav')
        const toggle2 = document.querySelectorAll('nav .cadastro')
         for( const element of toggle2){
          element.addEventListener( 'click', function(){
              nav.classList.add('login')
          }
          
      
          )
        }
      } else{

       let e = localStorage.getItem("email",email)
       let s = localStorage.getItem("senha",senha)

        if (e != email || s != senha) {
          window.alert("Usuario ou Senha invalida")
          
        }else{
           window.alert("login feito com sucesso ")
           window.location="index2.html";

        }
       }

    }

    /*============ terminar ==============*/
   function terminar(){

    var cof = window.confirm("deseja terminar sessão ?")
    if (cof == true){
      alert("a terminar sessão...")
    } else if (cof == false){
      alert("a cancelar opção... ")
      
    }
   } 



   // apagar input ================================


// deposito no local storage ===========================
   function deposito(){
    
   var deposito = document.getElementById('deposito1').value
     deposito.value = ""
     
  

     if ( !deposito || deposito<=0) {
      window.alert("valor não aprovado, digite um novo valor")
     
     } else{
      localStorage.setItem("deposito",deposito)
     }

   
    
      var primero  = localStorage.getItem("deposito")
   if (!primero) {
    primero = 0
    
   }
    var primeroA =  Number(primero.value)
     var segundo = Number(deposito.value)
   



      b1 = primeroA+segundo
    
    
     
     

  
    
   }

   var ac = document.querySelector('#vacumulado')
    var b = localStorage.getItem("deposito")

    ac.innerText = " valor atual: "+b+"kz"

   // nome da pessoa ================================
   var nome= localStorage.getItem("name")
   var pes = document.getElementById('p')
   pes .innerText = "sessão com : "+nome
 /////////////////////////////////////////////////////////////

 function apagar(){
    
  const campon = document.querySelector('#vacumulado') 
campon.value = ""

}


