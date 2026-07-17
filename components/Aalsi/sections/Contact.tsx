"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  QrCode,
  Check,
  ChevronDown,
} from "lucide-react";

import {
  GlowButton,
  Reveal,
  SectionHeading,
} from "../ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [openPhones, setOpenPhones] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("aalsiworks@gmail.com");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent py-40"
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

            {/* Phone */}

            <div className="relative">

              <button
                onClick={() =>
                  setOpenPhones(!openPhones)
                }
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  px-8
                  py-5
                  font-semibold
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/5
                "
              >
                <Phone size={18} />
                Call Us

                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    openPhones
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {openPhones && (

                <div
                  className="
                    absolute
                    left-1/2
                    top-full
                    z-20
                    mt-4
                    w-64
                    -translate-x-1/2
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#111111]
                    p-3
                    shadow-2xl
                  "
                >

                  <a
                    href="tel:+918638060300"
                    className="
                      block
                      rounded-xl
                      px-4
                      py-3
                      transition-colors
                      hover:bg-white/5
                    "
                  >
                    +91 86380 60300
                  </a>

                  <a
                    href="tel:+919435033248"
                    className="
                      mt-2
                      block
                      rounded-xl
                      px-4
                      py-3
                      transition-colors
                      hover:bg-white/5
                    "
                  >
                    +91 69005 10916
                  </a>
                  <a
                    href="tel:+918011630619"
                    className="
                      mt-2
                      block
                      rounded-xl
                      px-4
                      py-3
                      transition-colors
                      hover:bg-white/5
                    "
                  >
                    +91 80116 30619
                  </a>

                </div>

              )}

            </div>

            {/* UPI */}

            {/* <button
              disabled
              className="
                flex
                cursor-not-allowed
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                px-8
                py-5
                font-semibold
                opacity-60
              "
            >
              <QrCode size={18} />
              Pay via UPI
            </button> */}

          </div>

        </Reveal>

      </div>
    </section>
  );
}
// aalsiworks@gmail.com