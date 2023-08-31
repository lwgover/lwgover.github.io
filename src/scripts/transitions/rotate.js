import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export const transition = async function (lucas, gover, subtitle, overline) {
    lucas = document.querySelector(".lucas");
    gover = document.querySelector(".gover");
    subtitle = document.querySelector(".subtitle");
  overline = document.querySelector(".overline");

    gsap.set(lucas, {  opacity: 0, perspective: '15vw', transformStyle:"preserve-3d", force3D: true, });
    gsap.set(gover, {  opacity: 0, perspective: '15vw', transformStyle:"preserve-3d" , force3D: true, });
    gsap.set(overline, { perspective: 400, opacity: 0 });

    gsap.fromTo(overline, { opacity: 0 }, { opacity: 1, duration: 1.25 });
    gsap.fromTo(lucas, { opacity: 0 }, { opacity: 1, duration: 1.25 });
    gsap.fromTo(gover, { opacity: 0 }, { opacity: 1, duration: 1.25 });

    gsap.fromTo(
      overline,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.35,
        ease: "backwards",
        clearProps: "opacity",
      }
    );

    gsap.fromTo(
      lucas,
      {
        scale: 1,
        translateY: "50%",
        rotationX: '90deg',
        opacity: 0,
      },
      {
        scale: 1,
        translateY: "0",
        rotationX: 0,
        opacity: 1,
        duration: 1,
        // stagger: 0.1,
        force3D: true,
        ease: "power4",
        //clearProps: "opacity",
      }
    );

   gsap.fromTo(
     gover,
     {
       scale: 1,
        translateY: "50%",
        rotationX: '90deg',
        opacity: 0,
      },
     {
        scale: 1,
        translateY: "0",
        rotationX: 0,
        opacity: 1,
        duration: 1.15,
        delay: .25,
        // stagger: 0.05,
        force3D: true,
        ease: "power4",
        //clearProps: "opacity",
      }
    );

    gsap.to(".year", {
      scrollTrigger: {
        trigger: "#projects",
        end: 200,
        scrub: true,
        once: false,
      },
      opacity: 0,
    });
  };