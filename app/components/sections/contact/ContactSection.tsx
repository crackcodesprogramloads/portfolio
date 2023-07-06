"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(
  () => import("@/app/components/sections/contact/ContactForm")
);

export default function ContactSection() {
  return (
    <main className="mt-10 flex flex-col items-center w-full h-screen relative">
      <div className="py-20 flex items-center justify-center w-full h-full">
        <ContactForm />
      </div>
    </main>
  );
}
