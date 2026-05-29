import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Question = () => {
  const [submitted, setSubmitted] = useState(false);
  const [answer, setAnswer] = useState("");
  const [noClicked, setNoClicked] = useState(false);

  useEffect(() => {

  const saveView = async () => {
    try {
      await addDoc(collection(db, "page_views"), {
        message: "Someone has seen this page",
        timestamp: serverTimestamp(),
      });

      console.log("Page view saved");
    } catch (error) {
      console.error("Error saving page view:", error);
    }
  };

  saveView();

}, []);

  const handleAnswer = async (response) => {
    try {
           console.log("Response savssdsdsded successfully!",response);
      await addDoc(collection(db, "responses"), {
        question: "Do you want to be friends?",
        answer: response,
        timestamp: serverTimestamp(),
      });
      console.log("Response saved successfully!",response);
      setAnswer(response);
      setSubmitted(true);
    } catch (error) {
      console.error("Error saving response:", error);
    }
  };

  return (
    <div className="h-screen bg-[url(/bluebg.png)] bg-cover bg-center flex flex-col  py-10 px-5 overflow-y-scroll justify-center">
      {!submitted ? (
        <>
          <h1 className="text-3xl amita font-bold  ">साक्षी,</h1>
<div className="flex flex-col gap-3">
 <div className="flex amita text-center justify-center w-full text-2xl ">मुझे पता है, तुम्हे ये पसंद आया होगा✨</div>
            <div className="amita flex text-center justify-center w-full text-2xl ">और आगे नहीं भी आया तो प्लीज,   </div>
               <div className=" amita text-2xl text-center justify-center w-full ">ऑफिस आके थप्पड़ मत मार देना😭</div>
            <div className="amita text-3xl text-center justify-center w-full caveat font-semibold ">I just really wanna ask you something,</div>
            <div className="amita text-3xl text-center justify-center w-full caveat font-bold ">do you wanna go out with me 👀 ?</div>
</div>
         
          <div className="flex flex-col gap-6">
            <button
              onClick={() => handleAnswer("yes")}
              className="poppins px-8 py-3 bg-green-500 text-white rounded-xl text-xl font-semibold hover:bg-green-600 transition mt-10 shadow-2xl"
            >
              Maan bhi jaa ab 🙇🏻
            </button>
          <button
  onClick={() => {
    setNoClicked(true);
  }}
  disabled={noClicked}
  className={`poppins px-8 py-3 text-white rounded-xl text-xl font-semibold transition shadow-2xl
  ${
    noClicked
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-red-500 hover:bg-red-600"
  }`}
>
  {noClicked
    ? "Itna bhi bura nahi hoon yaar, is button ne kaam krna band kr diya😡"
    : "Mei tab bhi manana nahi chodunga❌🙇🏻"}
</button>
          </div>
        </>
      ) : (
        <h1 className="dancing text-center text-3xl font-bold  w-full flex items-center justify-center h-full">
          {answer === "yes" ? "Escutar, I will wait for your call ❣️😉..." : "Maybe next time 😊"}
        </h1>
      )}
    </div>
  );
};

export default Question;