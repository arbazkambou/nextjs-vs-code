import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const contactData = Object.fromEntries(formData.entries());
    setMessage("");
    setSuccess(false);
    setIsSubmitting(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactData),
    });
    setIsSubmitting(false);

    const resp = await response.json();
    const { message, status } = resp;
    setSuccess(status === "success");
    setMessage(message);
  }

  return (
    <>
      <Head>
        <title>The Wild Oasis | Contact</title>
        {/* <link rel="icon" href="logo.png" /> */}
      </Head>
      <div>
        <h1 className="text-4xl mb-8 text-accent-400 font-medium">
          Any question? Shoot us a message
        </h1>

        {message && success ? (
          <p className="text-center">
            Thank You for your message! We will be in touch soon{" "}
          </p>
        ) : (
          <form
            className="bg-primary-900 py-10 px-14 text-lg space-y-6 max-w-5xl mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label>Full name</label>
              <input
                required
                className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                name="fullName"
              />
            </div>

            <div className="space-y-2">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                required
                className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
              />
            </div>

            <div className="space-y-2">
              <label>Subject</label>
              <select
                required
                name="subject"
                className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
              >
                <option value="">Select subject...</option>
                <option value="booking-enquiry">Booking enquiry</option>
                <option value="cabin-information">Cabin information</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label>Message</label>
              <textarea
                name="message"
                className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                rows={3}
              />
            </div>

            <div className="flex justify-between items-center text-red-500">
              {message && !success ? (
                <p className="text-red-700 text-center">{message}</p>
              ) : (
                <p></p>
              )}
              <button
                className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
