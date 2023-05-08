"use client";
import { useState } from "react";
import axios from "axios";
import "../styles/globals.css";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl">hello, app!</h1>
    </main>
  );
}

// const [input, setInput] = useState("");
// const [response, setResponse] = useState("");
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(input, "submitting");
//   const data = {
//     query: input,
//   };
//   axios.post("http://127.0.0.1:5000/ask", data).then((res) => {
//     console.log(res.data.response);
//     setResponse(res.data.response);
//   });
// };

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   // console.log(e.target.value);
//   console.log(input);
//   setInput(e.target.value);
// };
