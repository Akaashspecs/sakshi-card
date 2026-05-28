import { useRef, useEffect, useState } from "react";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";
import { FaAngleDown } from "react-icons/fa";





function LandingFirst() {
const containerRef = useRef(null);
const canvasRef = useRef(null);
const path1Ref = useRef(null);
const path2Ref = useRef(null);
const text1Ref = useRef(null);
gsap.registerPlugin(ScrollTrigger, useGSAP);


  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context || !containerRef.current) return;

      const frameCount = 92;
      const currentFrame = { index: 1 };
      const images = [];
      let loadedCount = 0;

      const onImageLoad = () => {
        loadedCount++;
        setProgress(Math.round((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) {
          setIsLoading(false);
          render(); // Render first frame immediately when done
        }
      };

      // Preload images
      for (let i = 1; i <= frameCount; i++) {
        const img = new window.Image();
        img.src = `/Flowers/Flowers_moving_with_air_202605281311_${i.toString().padStart(3, "0")}.jpg`;
        img.onload = onImageLoad;
        images.push(img);
      }

   const render = () => {
  const img = images[Math.round(currentFrame.index) - 1];

  if (img && img.complete) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);

    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
};

      // Scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
         
        },
      });

      tl.to(currentFrame, {
        index: frameCount,
        ease: "none",
        onUpdate: render,
      });

    },
    { scope: containerRef }
  );

  useEffect(() => {
    // Adjusted curve for better responsiveness and fit
    const curvePath = "M 50 200 Q 600 50 1150 200";
    const curvePath2 = "M 50 200 Q 600 350 1150 200";

    if (path1Ref.current) path1Ref.current.setAttribute("d", curvePath);
    if (path2Ref.current) path2Ref.current.setAttribute("d", curvePath2);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-dvh flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Loading Screen */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center  bg-radial  from-transparent to-amber-100/40 text-white">
          <div className="text-2xl font-light tracking-widest mb-4">LOADING</div>
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <div className="mt-2 text-sm text-gray-400">{progress}%</div>
        </div>
      )}

      {/* Canvas for Image Sequence */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-0 w-full h-fit object-cover  brightness-[0.7] scale-[1.1] saturate-150 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Content Overlay */}
      <div className={`relative z-10 w-full max-w-[1400px] flex flex-col items-center justify-center -space-y-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* First Line: Country House */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={!isLoading ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
           className="w-full lg:relative lg:top-24 xl:top-28   2xl:top-16 "
        >
             <svg viewBox="0 0 1200 300" className="w-full h-fit overflow-visible">
               <defs>
                 <path id="curve1" ref={path1Ref} />
                  <filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
                   <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="black" floodOpacity="0.5" />
                 </filter>
               </defs>
               <text
                 ref={text1Ref}
                 width="1200"
                 className={` text-[180px] md:text-[100px] lg:text-[110px] xl:text-[120px] 2xl:text-[120px] font-bold fill-white italic`}
                 textAnchor="middle"
                 filter="url(#textShadow)"
               >
                 <textPath href="#curve1" startOffset="50%">
                    <tspan>Hey!</tspan>
                   
                 </textPath>
               </text>
             </svg>
        </motion.div>

        {/* Center Logo/Icon */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={!isLoading ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative h-[150px] w-[240px] md:h-[180px] md:w-[280px] lg:h-[220px] lg:w-[320px] xl:h-[240px] xl:w-[350px] 2xl:h-[300px] 2xl:w-[450px] z-20"
        >
      
        </motion.div>

      

      </div>
      <div className=" absolute  px-3 rounded-sm bottom-10 left-1/2 transform -translate-x-1/2 text-stone-50 text-2xl ">
       <FaAngleDown />
      </div>
    </div>
  );
}

export default LandingFirst;