"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";
import { ToastContainer, toast, type Id } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = () => {
  let toastId = useRef<Id | null>(null);

  async function handleSubmit(event: any) {
    event.preventDefault();

    toastId.current = toast.info("Sending message..", {
      icon: "⏳",
    });

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok && toastId.current) {
      toast.update(toastId.current, {
        render: "Message sent!",
        type: toast.TYPE.SUCCESS,
        icon: "🚀",
      });
      console.log("Message sent successfully");
    } else if (!response.ok && toastId.current) {
      toast.update(toastId.current, {
        render: "Error sending message...",
        type: toast.TYPE.ERROR,
        icon: "😵‍💫",
      });
      console.log("Error sending message");
    }
  }

  return (
    <>
      <ToastContainer
        position={toast.POSITION.BOTTOM_CENTER}
        theme="dark"
        autoClose={5000}
        pauseOnHover={false}
        toastClassName={(context) =>
          context?.defaultClassName
            ? `${context.defaultClassName} !rounded-lg`
            : ""
        }
        bodyClassName={() =>
          "!w-full !text-2xl !flex !justify-center !items-center"
        }
      />
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ y: 200, x: "calc(-100vw / 2)" }}
          whileInView={{ y: -0, x: 0, rotate: -360, scale: 1.2 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          className="rounded-md envelopeContainer"
        >
          <label htmlFor="flap"></label>
          <input id="flap" type="checkbox" />
          <m.label
            whileInView={{
              rotateX: 180,
              zIndex: 3,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
              duration: 0.5,
            }}
            className="flap"
            htmlFor="flap"
          ></m.label>
          <div className="rounded-md envelopeBack"></div>
          <m.div
            initial={{ scale: 0.5 }}
            whileInView={{
              scale: 1.3,
              width: 350,
              height: 400,
              zIndex: 4,
              y: -110,
              x: -30,
              rotate: -360,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.8,
              duration: 0.3,
            }}
            className="backdrop-filter bg-slate-800/90 backdrop-blur-sm card rounded-2xl shadow-2xl flex flex-col justify-center items-center my-10 sm:my-0 px-4 sm:px-8 border-yellow-600  text-slate-300"
          >
            <form
              onSubmit={handleSubmit}
              className="w-[60%] sm:w-[90%] h-[80%] sm:h-[90%] pt-10 flex flex-col items-center justify-around"
            >
              <h1 className="mb-2 text-xl">CONTACT</h1>

              <div className="my-1 p-2 rounded-lg bg-transparent flex flex-col w-full text-sm">
                <label htmlFor="name" className="font-bold text-slate-300">
                  Name:
                </label>
                <input
                  required
                  minLength={3}
                  maxLength={100}
                  type="text"
                  autoComplete="off"
                  id="name"
                  className="focus:outline-none bg-transparent border-b border-dashed border-yellow-600"
                />
              </div>
              <div className="my-1 p-2 rounded-lg bg-transparent flex flex-col w-full text-sm">
                <label htmlFor="email" className="font-bold text-slate-300">
                  Your email:
                </label>
                <input
                  required
                  minLength={5}
                  maxLength={100}
                  type="email"
                  autoComplete="off"
                  id="email"
                  className="focus:outline-none bg-transparent border-b border-dashed border-yellow-600"
                />
              </div>
              <div className="mt-1 mb-10 p-2 rounded-lg bg-transparent flex flex-col w-full text-sm">
                <label htmlFor="message" className="font-bold text-slate-300">
                  Message:
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  rows={1}
                  minLength={10}
                  maxLength={500}
                  className="focus:outline-none w-full bg-transparent border-b border-dashed border-yellow-600"
                ></textarea>
              </div>
              <div className="w-36 sm:w-40 h-8 mb-4 relative bg-yellow-600 rounded-md">
                <button
                  type="submit"
                  className="flex justify-center items-center absolute w-36 sm:w-40 h-8 bottom-[-1px] left-[1px] active:bottom-[0px] active:left-0 px-4 py-2 mt-8 bg-sky-950 rounded-md text-slate-300 hover:text-slate-100 text-sm border border-yellow-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </m.div>
          <m.div className="cardFront"></m.div>
        </m.div>
      </LazyMotion>
    </>
  );
};

export default ContactForm;
