import { useState } from 'react'
import { motion } from "framer-motion";
import './App.css'
import LandingFirst from './LandingFirst'
import { TypeAnimation } from 'react-type-animation'




function App() {
  const [count, setCount] = useState(0)

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
   <div className='text-3xl text-red-500  h-screen '>

 <LandingFirst/>
 <div className='h-screen bg-[url(/bggg.png)] bg-cover bg-center overflow-y-scroll '>
 <img src='flags.png'/>
 <div>
  <div>
    Happy
  </div>
  <div>
    Birthday
  </div>

    <TypeAnimation
        sequence={[
          'Hello World!',
          1000,
          'I am Aakash',
          1000,
          'Welcome to my website',
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
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
        className="max-w-3xl text-center leading-loose text-xl md:text-2xl font-light"
      >
        {quote.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                filter: "blur(0px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

 </div>
   </div>
  )
}

export default App
