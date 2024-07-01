import React from 'react'
import Home from '../slides/Home'
import Events from '../slides/Events'
import Speaker from '../slides/Speaker'
import PrevImages from '../slides/PrevImages'
import TimeSchedule from '../slides/TimeSchedule'
import About from '../slides/About'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './style.css'

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  // const handleScroll = (event) => {
  //   const container = event.target;
  //   const scrollAmount = event.deltaY;
  //   container.scrollTo({
  //     top: 0,
  //     left: container.scrollLeft + scrollAmount,
  //     behavior: 'smooth'
  //   });
  // };
  const component = React.useRef();
  const slider1 = React.useRef();
  const slider2 = React.useRef();
  const slider3 = React.useRef();

  React.useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels1 = gsap.utils.toArray(".panel1");
      let pauseRatio = 0.1;
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: slider1.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels1.length - 1),
          end: () => "+=" + slider1.current.offsetWidth,
          markers: true
        }
      });
      t1.to(
        panels1,
        {
          xPercent: -100 * (panels1.length - 1),
          duration: 1,
          ease: "none"
        },
        pauseRatio
      );
      t1.to({}, { duration: pauseRatio });
      
      let panels2 = gsap.utils.toArray(".panel2");
      
      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: slider2.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels2.length - 1),
          end: () => "+=" + slider2.current.offsetWidth,
          markers: true
        }
      });
      t2.to(
        panels2,
        {
          xPercent: -100 * (panels2.length - 1),
          duration: 1,
          ease: "none"
        },
        pauseRatio
      );
      t2.to({}, { duration: pauseRatio });

      let panels3 = gsap.utils.toArray(".panel3");
      
      let t3 = gsap.timeline({
        scrollTrigger: {
          trigger: slider3.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels3.length - 1),
          end: () => "+=" + slider3.current.offsetWidth,
          markers: true
        }
      });
      t3.to(
        panels3,
        {
          xPercent: -100 * (panels3.length - 1),
          duration: 1,
          ease: "none"
        },
        pauseRatio
      );
      t3.to({}, { duration: pauseRatio });
    }, component);
    return () => ctx.revert();
  });
  return (
    <>
      <div className="App" ref={component}>
        <div className="flex flex-col justify-center items-center h-screen bg-yellow-500">
          <Home />
        </div>
        <div ref={slider1} className="w-[600vw] h-screen flex flex-wrap">
          <Events />
        </div>
        <div ref={slider2} className="w-[600vw] h-screen flex flex-wrap">
          <Speaker color={"purple"} name={"Speaker1"} />
          <Speaker color={"zinc"} name={"Speaker2"} />
          <Speaker color={"brown"} name={"Speaker3"} />
          <Speaker color={"orange"} name={"Speaker4"} />
        </div>
        <div className='bg-green-500 flex h-[100vh]'>
          <TimeSchedule />
        </div>
        <div ref={slider3} className="w-[600vw] h-screen flex flex-wrap">
          <PrevImages />
        </div>
        <div className='bg-red-500 flex h-[100vh]'>
          <About />
        </div>
      </div>
    </>
  )
}

export default Main