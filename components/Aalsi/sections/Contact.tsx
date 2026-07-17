"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Check,
  ChevronDown,
} from "lucide-react";

import {
  Reveal,
  SectionHeading,
} from "../ui";

const phoneNumbers = [
  {
    label: "Sales",
    display: "+91 86380 60300",
    tel: "+918638060300",
  },
  {
    label: "Support",
    display: "+91 69005 10916",
    tel: "+916900510916",
  },
  {
    label: "Projects",
    display: "+91 80116 30619",
    tel: "+918011630619",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [openPhones, setOpenPhones] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText("aalsiworks@gmail.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <section
      id="contact"
      className="relative overflow-visible bg-transparent py-40"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <Reveal>

          <SectionHeading
            eyebrow="Ready To Start?"
            title={
              <>
                START THE
                <br />
                <span className="text-[#3557FF]">
                  BUILD
                </span>
              </>
            }
            description="Whether it's a website, mobile app, branding, or high-quality content, we're ready to bring your ideas to life."
          />

          <div
            className="
              relative
              mt-16
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
            "
          >

            {/* Email */}

            <button
              onClick={copyEmail}
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-[#3557FF]
                px-8
                py-5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(53,87,255,.35)]
              "
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Email Copied
                </>
              ) : (
                <>
                  <Mail size={18} />
                  Get in Touch
                </>
              )}
            </button>

            {/* Call */}

            <div className="relative">

              <button
                onClick={() =>
                  setOpenPhones((prev) => !prev)
                }
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-8
                  py-5
                  font-semibold
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#3557FF]/40
                  hover:bg-white/5
                "
              >
                <Phone size={18} />

                Call Us

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    openPhones ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openPhones && (
                <div
                  className="
                    absolute
                    left-1/2
                    top-full
                    z-50
                    mt-4
                    w-72
                    -translate-x-1/2
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#111111]/90
                    backdrop-blur-xl
                    shadow-[0_20px_60px_rgba(0,0,0,.45)]
                  "
                >
                  {phoneNumbers.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="
                        flex
                        items-center
                        justify-between
                        px-5
                        py-4
                        transition-colors
                        hover:bg-white/5
                      "
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                          {phone.label}
                        </p>

                        <p className="mt-1 font-medium text-white">
                          {phone.display}
                        </p>
                      </div>

                      <Phone
                        size={18}
                        className="text-zinc-500"
                      />
                    </a>
                  ))}
                </div>
              )}

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
}