import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_40kmpki",
        "template_o9vcvl9",
        {
          from_name: formData.name,
          to_name: "Arjun",
          from_email: formData.email,
          to_email: "arjunmitra003@gmail.com",
          message: formData.message,
        },
        "SrYpx0eYwZ9_8QyNd"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section className="relative flex items-center c-space section-spacing" id="contact"> 
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
       <motion.div
         className="flex flex-col items-center justify-center max-w-md p-6 mx-auto border border-white/20 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/20 to-primary/30 backdrop-blur-xl shadow-2xl"
         initial={{ opacity: 0, y: 50, scale: 0.9 }}
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         viewport={{ once: true }}
       >
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <motion.h2
            className="text-heading bg-gradient-to-r from-aqua to-mint bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's Talk
          </motion.h2>
          <motion.p
            className="font-normal text-neutral-400"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Whether you want to build a new website, upgrade your current platform, or bring a fresh idea to life—let’s make it happen together.
          </motion.p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <motion.input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02, borderColor: "#33c2cc" }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <motion.input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="yourname@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02, borderColor: "#33c2cc" }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02, borderColor: "#33c2cc" }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          <motion.button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-lg cursor-pointer bg-gradient-to-r from-lavender to-royal hover:from-royal hover:to-lavender shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 87, 219, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            {!isLoading ? "Send" : "Sending..."}
          </motion.button>
        </form>
       </motion.div>
    </section>
  );
};

export default Contact;
