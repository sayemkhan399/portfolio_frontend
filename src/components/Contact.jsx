import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const translations = {
    en: {
      title: "Get In Touch",
      subtitle: "Have a project in mind? Reach out and let's build something amazing together!",
      name: "Full Name",
      email: "Email Address",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get back to you within 24 hours.",
      error: "Oops! Something went wrong. Please check your connection and try again."
    },
    bn: {
      title: "যোগাযোগ করুন",
      subtitle: "কোনো প্রকল্প নিয়ে ভাবছেন? যোগাযোগ করুন এবং একসাথে কিছু অসাধারণ তৈরি করি!",
      name: "পূর্ণ নাম",
      email: "ইমেইল ঠিকানা",
      message: "আপনার বার্তা",
      send: "বার্তা পাঠান",
      sending: "পাঠানো হচ্ছে...",
      success: "বার্তা সফলভাবে পাঠানো হয়েছে! আমি 24 ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করব।",
      error: "ওহো! কিছু ভুল হয়েছে। অনুগ্রহ করে আপনার কানেকশন পরীক্ষা করুন এবং আবার চেষ্টা করুন।"
    }
  };

  const t = translations[language];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? "Name is required" : "নাম প্রয়োজন";
    }
    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? "Email is required" : "ইমেইল প্রয়োজন";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'en' ? "Please enter a valid email" : "অনুগ্রহ করে একটি বৈধ ইমেইল লিখুন";
    }
    if (!formData.message.trim()) {
      newErrors.message = language === 'en' ? "Message is required" : "বার্তা প্রয়োজন";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = language === 'en' ? "Message must be at least 10 characters" : "বার্তাটি অবশ্যই 10 টি অক্ষরের বেশি হতে হবে";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5001";

  const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = validate();

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch(`${baseUrl}/contact`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

let result;
try {
  result = await response.json();
} catch (err) {
  console.error("Invalid JSON response", await response.text());
  throw err;
}

if (!response.ok) {
  throw new Error(result?.message || "Server error");
}


    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  } catch (error) {
    console.error(error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="relative w-full bg-[#070b14] py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[400px] h-[800px] bg-lime-400/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-32 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full" />

      <div className="max-w-5xl mx-auto pt-7 relative z-10">
        <div className="flex flex-col justify-center items-center gap-5">
          {/* Header */}
          <div className="md:w-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex flex-col items-center justify-center w-full"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4">
                {t.title}
              </h2>
              <p className="text-gray-400 text-center josefin leading-relaxed">
                {t.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Form */}
          <div className="md:w-3/5 w-5/5">
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-emerald-400/20"
            >
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center py-8"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-400/20 text-emerald-400 mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300">{t.success}</p>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                        {t.name}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/10 border text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition placeholder:text-gray-500 ${
                            errors.name 
                              ? 'border-red-400 bg-red-900/30' 
                              : 'border-gray-600'
                          }`}
                          placeholder={language === 'en' ? "Your Name" : "আপনার নাম"}
                        />
                        {errors.name && (
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <AlertCircle className="h-5 w-5 text-red-400" />
                          </div>
                        )}
                      </div>
                      {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                        {t.email}
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/10 text-white border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition placeholder:text-gray-500 ${
                            errors.email 
                              ? 'border-red-400 bg-red-900/30' 
                              : 'border-gray-600'
                          }`}
                          placeholder={language === 'en' ? "Your Email" : "আপনার ইমেইল"}
                        />
                        {errors.email && (
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <AlertCircle className="h-5 w-5 text-red-400" />
                          </div>
                        )}
                      </div>
                      {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 text-left">
                        {t.message}
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white/10 text-white border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition resize-none placeholder:text-gray-500 ${
                            errors.message 
                              ? 'border-red-400 bg-red-900/30' 
                              : 'border-gray-600'
                          }`}
                          placeholder={language === 'en' ? "Hello, I'd like to discuss a project..." : "হ্যালো, আমি একটি প্রকল্প নিয়ে আলোচনা করতে চাই..."}
                        ></textarea>
                        {errors.message && (
                          <div className="absolute top-3 right-3">
                            <AlertCircle className="h-5 w-5 text-red-400" />
                          </div>
                        )}
                      </div>
                      {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                    </div>

                    {submitStatus === 'error' && (
                      <div className="bg-red-900/30 border border-red-700 text-red-300 p-3 rounded-lg flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        {t.error}
                      </div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                          {t.sending}
                        </>
                      ) : (
                        <>
                          {t.send}
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;