const removeTransition = e => {
   if (e.propertyName !== 'transform') return;
   e.target.classList.remove('playing');
 }

const playSound = e =>{
  let keyCode;
  (e.type === 'click')? keyCode = e.currentTarget.dataset.key :  keyCode = e.keyCode;
  console.log(keyCode)
   const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
   const key = document.querySelector(`div[data-key="${keyCode}"]`);
   if (!audio) return;
   key.classList.add('playing');
   audio.currentTime = 0;
   audio.play();

}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('click', playSound))

//lo cambie a ternario
/*  if (e.type === 'click') {
   keyCode = e.currentTarget.dataset.key;
 }
  else {
   keyCode = e.keyCode;
 } */



  
/* window.addEventListener('click',function(e){
   // console.log(e)
    //console.log(e.path)
    
     console.log(e.target);
    const audio = document.querySelector(`audio[data-key="${e.target}"]`);
   console.log(audio)
   if(!audio) return
   audio.play();
 });
  */

//window.addEventListener('keydown', function(e){
//console.log(e)
//console.log(e.keyCode)  
 //const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`);
 // console.log(audio)
 /* const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
 if(!audio) return// stop theconstfrom running all together
 audio.currentTime=0; // rewind the stant
 audio.play();
 console.log(key)
 key.classList.add('playing')
  key.addClaass('playing') 
 key.classList.remove('playing')
 key.classList.toggle('playing') 
 const keys= document.querySelectorAll('selectors:DOMString') 
 const keys= document.querySelectorAll('.key')
 // no const key=addEventListener('transitionend')
 keys.forEach(key => key.addEventListener('transitioned',RemoveTransition));
 
  */
// });  



  
/* key.addClaass('playing') */
/* key.classList.remove('playing')
key.classList.toggle('playing') */
/* const keys= document.querySelectorAll('selectors:DOMString') */
// no const key=addEventListener('transitionend')

 /* 
const keys= document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown', playSound)
 */

 /* const removeTransition = (e)=> {
    / if(e.propertyName !== 'transition')return; 
    if(e.propertyName !== 'transform')return;// skip it if its not a transform
   // console.log(e);
   console.log(e.propertyName)
   console.log(this)
   this.classList.remove('playing');
}
 */