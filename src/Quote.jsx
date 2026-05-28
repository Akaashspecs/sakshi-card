import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion";
const Quote = () => {

const quote = `
“Some meetings are brief,
yet they leave behind a feeling that quietly stays.”

We met only once,
and perhaps it was just a passing moment for the world,
but certain encounters carry a strange elegance —
gentle, unspoken, and memorable.

There was a calmness in your presence
and a grace in the way you spoke,
the kind that lingers in memory
long after the moment has passed.

On your birthday,
I simply wish that life treats you kindly,
that your days are filled with purpose and peace,
and that happiness finds you effortlessly,
wherever you go.

May this new year of your life
bring quiet joy, meaningful moments,
and all the beautiful things you truly deserve.

Happy Birthday ✨

— From someone who remembers that meeting with a smile
`;

    return (
        <div className='h-screen bg-[url(/bggg.png)]  bg-cover bg-center overflow-y-scroll relative'>
 <img src='flags.png'/>
 <div className='flex flex-col justify-center items-center gap-4 '>
  <div className='-rotate-12 curve-down'>
    Happy
  </div>
  <div className='-rotate-12 curve-up'>
    Birthday
  </div>

  
 </div>
  <img src='cake.gif' className=' mx-auto h-96'/>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.03,
            },
          },
        }}
        className="max-w-3xl text-center leading-8 text-xl md:text-2xl font-light px-4"
      >
       {quote.split("").map((char, index) => {

  const shouldBreak =
    char === "," ||
    char === "." ||
    char === "—";

  return (
    <span key={index} className='relative z-30'>
      <motion.span
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {char}
      </motion.span>

      {shouldBreak && <br />}
     
    </span>
  );
})} <img src='flowerp.png' className='absolute z-20 top-[900px]'/>
      </motion.div>

 </div>
    )
}

export default Quote    