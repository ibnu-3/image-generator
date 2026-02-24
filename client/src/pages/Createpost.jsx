import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../components/FormField";
const Createpost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });
  const [loading, setLoading] = useState(false);
  const [generatingImg, setGeneratingImg] = useState(false);
const handleSubmit=()=>{

}
const handleChange=(e)=>{

}
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold">Create </h1>
        <p className="mt-2 text-gray-500 px-4 ">Create imaginary images </p>
      </div>
      <form className="mt-16 max-w-7xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField label="your name" type="text" name="name" placeholder="John Doe" 
          value={form.name} handleChange={handleChange}/>
          <FormField label="prompt" type="text" name="prompt" placeholder="A Samurai riding a Horse on Mars, lomography." 
          value={form.prompt}
          isSupriseMe
          handleChange={handleChange}
          handleSupriseMe={handleSupriseMe}/>
        </div>
      </form>
    </section>
  );
};

export default Createpost;
