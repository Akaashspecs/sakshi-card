import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Question = () => {
  const [submitted, setSubmitted] = useState(false);
  const [answer, setAnswer] = useState("");

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
    <div className="h-screen bg-[url(/bluebg.png)] bg-cover bg-center flex flex-col items-center justify-center gap-8">
      {!submitted ? (
        <>
          <h1 className="text-3xl font-bold">साक्षी, do you want to be friends?</h1>
          <div className="flex gap-6">
            <button
              onClick={() => handleAnswer("yes")}
              className="px-8 py-3 bg-green-500 text-white rounded-xl text-xl font-semibold hover:bg-green-600 transition"
            >
              Yes ✅
            </button>
            <button
              onClick={() => handleAnswer("no")}
              className="px-8 py-3 bg-red-500 text-white rounded-xl text-xl font-semibold hover:bg-red-600 transition"
            >
              No ❌
            </button>
          </div>
        </>
      ) : (
        <h1 className="text-3xl font-bold">
          {answer === "yes" ? "Yay! 🎉" : "Maybe next time 😊"}
        </h1>
      )}
    </div>
  );
};

export default Question;