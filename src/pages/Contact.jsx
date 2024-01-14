import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleBlur = (e) => {};
  const handleFocus = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

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
        // TODO: Show success 
        message
        // TODO: HIDE AN ALERT
        setForm({ name: "", email: "", message: "" });
        console.log(res);
      })
      .catch((err) => {
        setIsLoading(false);
        // TODO Show error message
        console.log(err);
      });
  };

  return (
    <section className="relative grid lg:grid-cols-2 max-container">
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

    </section>
  );
};

export default Contact;
