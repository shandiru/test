"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const ICONS_IMG = "icons.png"; // Decorative background image

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  const phoneRegex = /^(?:\+44|0)[1-9]\d{8,9}$/;

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Invalid UK phone number format";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.message) newErrors.message = "Please enter additional info";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      first_name: formRef.current.first_name.value.trim(),
      last_name: formRef.current.last_name.value.trim(),
      phone: formRef.current.phone.value.trim(),
      email: formRef.current.email.value.trim(),
      service: formRef.current.service.value,
      address: formRef.current.address.value.trim(),
      message: formRef.current.message.value.trim(),
    };

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_404lxe7",
        "template_yr5430s",
        formRef.current,
        "tmUgtXKf_TwGrV1iE"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
          setErrors({});
        },
        () => {
          setSuccess(false);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-linear-to-br from-[#F8FAFC] via-white to-[#EAF7F3] overflow-hidden"
    >
      {/* === Floating Background Icons === */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute top-[8%] left-[10%] w-16 sm:w-20 animate-float-slow"
        />
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute top-[35%] left-[35%] w-20 sm:w-24 animate-float-fast"
        />
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute bottom-[25%] right-[25%] w-16 sm:w-20 animate-float-medium"
        />
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute bottom-[10%] left-[30%] w-16 sm:w-20 animate-float-slow"
        />
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute top-[25%] right-[10%] w-20 sm:w-24 animate-float-medium"
        />
        <img
          src={ICONS_IMG}
          alt="Decorative Icons"
          className="absolute bottom-[15%] right-[5%] w-20 sm:w-24 animate-float-fast"
        />
      </div>

      {/* === Soft linear Glow === */}
      <div className="absolute inset-0 bg-linear-to-br from-[#9C79B3]/20 to-[#43AA8B]/20 blur-[160px]" />

      {/* === Content === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0D1525] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-[#334155]">
            Ready to hear better? Contact us today for your same-day appointment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* === Left: Contact Info === */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-serif font-bold text-[#0D1525] mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <InfoCard
                icon={
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 4.11 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.07.96.29 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.41 1.85.63 2.81.7A2 2 0 0 1 22 16.92z" />
                }
                title="Phone"
                main={
                  <a
                    href="tel:08081371961"
                    className="text-lg text-[#43AA8B] font-semibold hover:underline"
                  >
                    0808 137 1961
                  </a>
                }
                sub="Available 7 days a week"
              />

              <InfoCard
                icon={
                  <>
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </>
                }
                title="Email"
                main={
                  <a
                    href="mailto:earwegosales@gmail.com"
                    className="text-lg text-[#43AA8B] hover:underline"
                  >
                    earwegosales@gmail.com
                  </a>
                }
                sub="We respond within 2 hours"
              />

              <InfoCard
                icon={
                  <>
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </>
                }
                title="Address"
                main={
                  <>
                    <p className="text-[#334155]">Great Northern Rd,</p>
                    <p className="text-[#334155]">Derby, DE1 1LR</p>
                  </>
                }
              />

              <InfoCard
                icon={
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </>
                }
                title="Service Areas"
                main={
                  <>
                    <p className="text-[#334155]">
                      Derby • Nottingham • Leicester
                    </p>
                    <p className="text-[#334155]">
                      Lincolnshire • Staffordshire
                    </p>
                  </>
                }
              />
            </div>
          </div>

          {/* === Right: Contact Form === */}
          <div
            className="bg-white rounded-2xl shadow-sm border border-emerald-100"
            data-aos="fade-left"
          >
            <form ref={formRef} onSubmit={sendEmail} className="px-6 pb-6 space-y-4">
              <div className="px-6 pt-6 pb-4">
                <div className="font-semibold text-2xl font-serif text-[#0D1525]">
                  Book Your Appointment
                </div>
                <p className="text-[#334155]">
                  We respond within 24 hours. Need it sooner? Call us.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name*" error={errors.first_name}>
                  <Input name="first_name" placeholder="John" onChange={handleChange} />
                </Field>
                <Field label="Last Name*" error={errors.last_name}>
                  <Input name="last_name" placeholder="Smith" onChange={handleChange} />
                </Field>
              </div>

              <Field label="Phone Number*" error={errors.phone}>
                <Input name="phone" placeholder="07123 456789" onChange={handleChange} />
              </Field>

              <Field label="Email Address*" error={errors.email}>
                <Input
                  name="email"
                  type="email"
                  placeholder="john.smith@email.com"
                  onChange={handleChange}
                />
              </Field>

              <Field label="Preferred Service*" error={errors.service}>
                <select
                  name="service"
                  onChange={handleChange}
                  className="h-11 w-full rounded-md border border-gray-300 bg-white px-3 text-base text-[#334155] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-[#43AA8B]"
                >
                  <option value="">Select Service</option>
                  <option value="Single Ear Treatment (£50)">Single Ear Treatment (£50)</option>
                  <option value="Both Ears Treatment (£60)">Both Ears Treatment (£60)</option>
                </select>
              </Field>

              <Field label="Your Address*" error={errors.address}>
                <Input
                  name="address"
                  placeholder="Full address for home visit"
                  onChange={handleChange}
                />
              </Field>

              <Field label="Additional Information*" error={errors.message}>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Any symptoms, preferred appointment time, or special requirements..."
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-[#334155] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-[#43AA8B]"
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-4 w-full bg-[#43AA8B] hover:bg-[#318F6F] text-white transition-colors disabled:opacity-50"
              >
                {loading ? "Sending..." : "Request Appointment"}
              </button>

              {success === true && (
                <p className="text-sm text-green-600 text-center">
                  Form sent successfully!
                </p>
              )}
              {success === false && (
                <p className="text-sm text-red-500 text-center">
                  Something went wrong. Try again.
                </p>
              )}

              <p className="text-sm text-[#334155] text-center">
                Same-day appointments often available • No obligation consultation
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* === Animations === */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-3deg);
          }
        }
        @keyframes float-fast {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-35px) rotate(5deg);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

/* === Helper Components === */
const InfoCard = ({ icon, title, main, sub }) => (
  <div className="bg-white rounded-xl py-6 shadow-sm border border-emerald-100">
    <div className="p-6 flex items-center">
      <div className="bg-[#43AA8B] p-3 rounded-lg mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-[#0D1525]">{title}</h4>
        <div>{main}</div>
        {sub && <p className="text-sm text-[#334155]">{sub}</p>}
      </div>
    </div>
  </div>
);

const Field = ({ label, children, error }) => (
  <div>
    <label className="text-sm font-medium text-[#0D1525] mb-1 block">
      {label}
    </label>
    {children}
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);

const Input = (props) => (
  <input
    {...props}
    className="h-11 w-full rounded-md border border-gray-300 bg-white px-3 text-base text-[#334155] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-[#43AA8B]"
  />
);

export default ContactSection;
