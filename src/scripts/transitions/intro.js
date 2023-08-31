import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export const transition = async function (lucas, gover, subtitle, overline) {
    lucas = document.querySelector(".lucas");
    gover = document.querySelector(".gover");
    subtitle = document.querySelector(".subtitle");
  overline = document.querySelector(".overline");

    gsap.set(lucas, {  opacity: 0, perspective: '15vw', transformStyle:"preserve-3d", force3D: true, rotationX: '90deg',translateY: "70",translateX: "-10"});
    gsap.set(gover, {  opacity: 0, perspective: '15vw', transformStyle:"preserve-3d" , force3D: true, rotationX: '-90deg',translateY: "-70", translateX: "10"});
    gsap.set(overline, { perspective: 400, opacity: 0 });

    gsap.fromTo(overline, { opacity: 0 }, { opacity: 1, duration: 1.25 });
    gsap.fromTo(lucas, { opacity: 0 }, { opacity: 1, duration: 1.25 });
    gsap.fromTo(gover, { opacity: 0 }, { opacity: 1, duration: 1.25 });

    gsap.fromTo(
      overline,
      { x: -20},
      {
        x: 0,
        stagger: 0.02,
        duration: 0.35,
        ease: "backwards"
      }
    );
    gsap.fromTo(
      lucas,
      {
        scale: 1,
      },
      {
        delay: 0.3,
        scale: 1,
        translateY: "0",
        translateX: "0",
        rotationX: "0deg",
        duration: 1,
        // stagger: 0.1,
        force3D: true,
        ease: "ease",
        //clearProps: "opacity",
      }
    );

   gsap.fromTo(
     gover,
     {
      scale: 1,
      },
     {
        delay:0.3,
        scale: 1,
        translateY: "0",
        translateX: "0",
        rotationX: 0,
        duration: 1.15,
        // stagger: 0.05,
        force3D: true,
        ease: "ease",
        //clearProps: "opacity",
      }
    );
  };