import React, { useRef ,useLayoutEffect} from 'react'
import Navbar from '../components/Navbar';
import HomeTextAnime from '../components/HomeTextAnime';
import gsap,{Power3} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

function Home() {
  const ref=useRef(null)
  const tl = useRef()
  useLayoutEffect(() => {

    let ctx = gsap.context(()=>{

      tl.current = gsap.timeline({
        scrollTrigger:{
          trigger:".box",
          // scroller:"body",
          // markers:true,
          start:"top top",
          // end:"bottom bottom",
          
          scrub:2,
          pin:true

        }
      })
      tl.current.fromTo(".h1", { opacity:0 ,y:300, },{opacity:1,y:110})
      tl.current.fromTo(".h1", { opacity:1 , },{opacity:0,})


      tl.current.fromTo(".h2", { opacity:0 ,y:300, },{opacity:1,y:-90})
      tl.current.fromTo(".h2", { opacity:1},{opacity:0})

      tl.current.fromTo(".h3", { opacity:0 ,y:300,},{opacity:1,y:-300})
      tl.current.fromTo(".h3", { opacity:1},{opacity:0})



    },ref)



    return () => ctx.revert();

  },[])

  return (
    <div className='text-white'>
               <Navbar />
        <HomeTextAnime  refe={ref}/>
      
        </div>
  )
}

export default Home