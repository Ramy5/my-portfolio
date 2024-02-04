import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/UI/Loader";

import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleFocus = (e) => setCurrentAnimation("walk");
  const handleBlur = (e) => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ramy",
          from_email: form.email,
          to_email: "ramyalsabry.dev@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_KEY
      )
      .then((res) => {
        setIsLoading(false);
        toast.success("Email sent successfully!");
        message;

        setTimeout(() => {
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((err) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        toast.error(err);
      });
  };

  return (
    <section className="relative gap-8 grid lg:grid-cols-2 max-container">
      <div className="flex flex-col flex-1 min-w-[50%]">
        <h1 className="head-text">Get In Touch</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-6 mt-14"
        >
          <label htmlFor="name" className="font-semibold text-black-500">
            Name
            <input
              type="text"
              name="name"
              className="input"
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder="Enter your name"
              value={form.name}
              required
            />
          </label>

          <label htmlFor="email" className="font-semibold text-black-500">
            Email
            <input
              type="email"
              name="email"
              className="input"
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder="ramy@gmail.com"
              value={form.email}
              required
            />
          </label>

          <label htmlFor="message" className="font-semibold text-black-500">
            Message
            <textarea
              rows={4}
              name="message"
              className="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder="Let me know how I can help you!"
              value={form.message}
              required
            />
          </label>

          <button
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="w-full h-[350px]  md:h-[550px] lg:h-full">
        <Canvas
          camera={{
            position: [0, 0, 5],
            far: 1000,
            near: 0.1,
            fov: 75,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.7, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
