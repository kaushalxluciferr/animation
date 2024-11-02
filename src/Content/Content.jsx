import React, { useEffect, useRef } from 'react'
import './Content.css'
import anime from 'animejs'
function Content() {

const containerRef=useRef(null);

useEffect(()=>{

const container=containerRef.current;
container.innerHTML=""; //if we dont use this then our animation will be displayed two times
for(let i=1;i<=104;i++)
{
    let dot=document.createElement("div");  // here we are creating div for 100 times
    dot.classList.add("element")
    container.appendChild(dot);
}
let dotall=container.querySelectorAll(".element")
let animation=anime.timeline({
    targets:dotall,
    easing:"easeInOutExpo",
    loop:true,
    delay:anime.stagger(100,{grid:[10,10],from:"center"}),
})

animation.add({
    rotateZ:180,
    translateY:anime.stagger(0,{grid:[10,10],from:"center",axis:"y"})  ,
    translateX:anime.stagger(0,{grid:[10,10],from:"center",axis:"x"}),
    opacity :1,
})
.add({
    borderRadius: 50,
})
.add({
    scale: 0.2,
    opacity:0.2,
})
.add({
    rotateZ:180,
    translateY:anime.stagger(0,{grid:[10,10],from:"center",axis:"y"})  ,
    translateX:anime.stagger(0,{grid:[10,10],from:"center",axis:"x"}),
    opacity :1,
})
.add({
    scale:1,
    borderRadius:0,
})
.add({
    rotateZ:-90,
})
},[])




  return (
    <>
   <section>
   <div className="content">
    <h2>
        Level Up your Website <b>Anime.js</b>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo ab impedit. Totam nemo saepe necessitatibus odio. Sint, omnis quo.</p>
    <button onClick={()=>window.location.href='https://animejs.com/'} className='btn'> Learn More</button>
   </div>

{/* animation section starts here */}

<div className="container" ref={containerRef}>

</div>
   </section>

    </>
  )
}

export default Content
