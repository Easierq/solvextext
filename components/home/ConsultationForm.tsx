"use client";

import React, { useState } from "react";
import {
  Calendar,
  User,
  Mail,
  Phone,
  Home,
  DollarSign,
  MessageSquare,
  CheckCircle,
  Zap,
  ArrowRight,
  Wrench,
  MessageCircle,
  MapPin,
} from "lucide-react";

// Country code + number, no "+" or spaces
const WHATSAPP_NUMBER = "234XXXXXXXXXX";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  services: string[];
  urgency: string;
  propertyType: string;
  budget: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
  contactMethod: string;
}

const initialData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  services: [],
  urgency: "",
  propertyType: "",
  budget: "",
  message: "",
  preferredDate: "",
  preferredTime: "",
  contactMethod: "whatsapp",
};

const TOTAL_STEPS = 5;

const inputClass =
  "w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-neutral-900 placeholder-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-300/40 focus:outline-none transition";

const optionClass = (selected: boolean, extra = "") =>
  `rounded-xl border-2 font-semibold transition-all ${extra} ${
    selected
      ? "border-neutral-900 bg-yellow-300 text-neutral-900 shadow-md"
      : "border-gray-200 bg-white text-gray-700 hover:border-yellow-400 hover:bg-yellow-50"
  }`;

const ConsultationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const today = new Date().toISOString().split("T")[0];

  const updateFormData = (
    field: Exclude<keyof FormData, "services">,
    value: string,
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (value: string): void => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((item) => item !== value)
        : [...prev.services, value],
    }));
  };

  // Simple per-step validation
  const canContinue = (): boolean => {
    switch (currentStep) {
      case 1:
        return Boolean(
          formData.firstName.trim() &&
          formData.lastName.trim() &&
          formData.email.trim() &&
          formData.phone.trim() &&
          formData.location.trim(),
        );
      case 2:
        return formData.services.length > 0 && Boolean(formData.urgency);
      case 3:
        return Boolean(formData.propertyType && formData.budget);
      case 4:
        return true;
      case 5:
        return Boolean(formData.preferredDate && formData.preferredTime);
      default:
        return false;
    }
  };

  const handleSubmit = (): void => {
    // TODO: send formData to your API / email service
    console.log("Quote request submitted:", formData);
    setSubmitted(true);
  };

  const nextStep = (): void => {
    if (currentStep < TOTAL_STEPS && canContinue()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = (): void => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const sendOnWhatsApp = (): void => {
    const lines = [
      `Hello, I just requested a free quote on your website.`,
      ``,
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Location: ${formData.location}`,
      `Services: ${formData.services.join(", ")}`,
      `Urgency: ${formData.urgency}`,
      `Property: ${formData.propertyType}`,
      `Budget: ${formData.budget}`,
      `Preferred visit: ${formData.preferredDate} (${formData.preferredTime})`,
      formData.message ? `Details: ${formData.message}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const reset = (): void => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData(initialData);
  };

  const progress = (currentStep / TOTAL_STEPS) * 100;

  /* ───────────── Success screen ───────────── */
  if (submitted) {
    return (
      <div className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-neutral-900" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-4">
                Thank You!
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Your quote request has been received. One of our electricians
                will review it and contact you within 24 hours.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-neutral-900 mb-3">
                  What Happens Next?
                </h3>
                <div className="space-y-2 text-left text-neutral-800">
                  <p>✓ We review your job details</p>
                  <p>✓ A certified electrician is assigned to you</p>
                  <p>✓ We contact you to confirm the visit</p>
                  <p>✓ You get a clear, upfront quote</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={sendOnWhatsApp}
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-yellow-300 px-8 py-3.5 rounded-xl font-bold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Details on WhatsApp
                </button>
                <button
                  onClick={reset}
                  className="border-2 border-neutral-900 text-neutral-900 hover:bg-yellow-300 px-8 py-3.5 rounded-xl font-bold transition-colors"
                >
                  Request Another Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ───────────── Form ───────────── */
  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading (right aligned) */}
          <div className="flex flex-col items-start text-left mb-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-blue-950 leading-[1.1] mb-4">
              Let&apos;s Power{" "}
              <span className="bg-yellow-300 px-2 rounded-md inline-block">
                Your Project
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl">
              Tell us what you need and get a free quote from our certified
              electricians
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between mb-2 text-sm font-semibold text-slate-600">
              <span>
                Step {currentStep} of {TOTAL_STEPS}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-3 bg-neutral-900/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-300 border-r-2 border-neutral-900 transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8">
            {/* Step 1: Contact */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-950">
                    Your Details
                  </h3>
                  <p className="text-slate-600">How can we reach you?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        updateFormData("firstName", e.target.value)
                      }
                      className={inputClass}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        updateFormData("lastName", e.target.value)
                      }
                      className={inputClass}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className={`${inputClass} pl-12`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          updateFormData("phone", e.target.value)
                        }
                        className={`${inputClass} pl-12`}
                        placeholder="+32 4XX XX XX XX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) =>
                          updateFormData("location", e.target.value)
                        }
                        className={`${inputClass} pl-12`}
                        placeholder="Ixelles, Brussels"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Services & urgency */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-950">
                    What Do You Need?
                  </h3>
                  <p className="text-slate-600">Select all that apply</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Services *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "House Wiring",
                      "Panel Upgrade",
                      "Lighting",
                      "Solar & Inverter",
                      "Fault Finding",
                      "Emergency Repair",
                      "Sockets & Switches",
                      "Commercial Work",
                      "Other",
                    ].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={optionClass(
                          formData.services.includes(service),
                          "p-3 md:p-4 text-sm md:text-base",
                        )}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    How urgent is it? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      "Emergency",
                      "This week",
                      "This month",
                      "Just planning",
                    ].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => updateFormData("urgency", time)}
                        className={optionClass(
                          formData.urgency === time,
                          "p-3 md:p-4 text-sm md:text-base",
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Property & budget */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-950">
                    Property & Budget
                  </h3>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Property Type *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "House",
                      "Apartment",
                      "Shop / Store",
                      "Office",
                      "Industrial",
                      "Other",
                    ].map((property) => (
                      <button
                        key={property}
                        type="button"
                        onClick={() => updateFormData("propertyType", property)}
                        className={optionClass(
                          formData.propertyType === property,
                          "p-3 md:p-4 text-sm md:text-base",
                        )}
                      >
                        {property}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-1 text-sm font-semibold text-gray-700 mb-3">
                    <DollarSign className="w-4 h-4" />
                    Estimated Budget *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Under $100",
                      "$100 - $500",
                      "$500 - $2,000",
                      "$2,000+",
                      "Not sure yet",
                    ].map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => updateFormData("budget", budget)}
                        className={optionClass(
                          formData.budget === budget,
                          "p-3 md:p-4 text-sm md:text-base",
                        )}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Details */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-950">
                    Tell Us More
                  </h3>
                  <p className="text-slate-600">
                    Optional, but it helps us quote accurately
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Job Description
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => updateFormData("message", e.target.value)}
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Describe the problem or the work you need (e.g. number of rooms, tripping breakers, new sockets)..."
                  />
                </div>
              </div>
            )}

            {/* Step 5: Schedule */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-950">
                    Schedule a Visit
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={formData.preferredDate}
                      onChange={(e) =>
                        updateFormData("preferredDate", e.target.value)
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) =>
                        updateFormData("preferredTime", e.target.value)
                      }
                      className={inputClass}
                    >
                      <option value="">Select a time</option>
                      <option value="Morning (8AM - 12PM)">
                        Morning (8AM - 12PM)
                      </option>
                      <option value="Afternoon (12PM - 5PM)">
                        Afternoon (12PM - 5PM)
                      </option>
                      <option value="Evening (5PM - 8PM)">
                        Evening (5PM - 8PM)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Preferred Contact Method *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "whatsapp", name: "WhatsApp", icon: MessageCircle },
                      { id: "phone", name: "Phone", icon: Phone },
                      { id: "email", name: "Email", icon: Mail },
                    ].map((method) => {
                      const Icon = method.icon;
                      return (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() =>
                            updateFormData("contactMethod", method.id)
                          }
                          className={optionClass(
                            formData.contactMethod === method.id,
                            "p-3 md:p-4 text-sm md:text-base",
                          )}
                        >
                          <Icon className="w-6 h-6 mx-auto mb-2" />
                          {method.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!canContinue()}
                  className="px-8 py-3 bg-yellow-300 hover:bg-yellow-400 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-neutral-900 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-md disabled:shadow-none"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canContinue()}
                  className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-yellow-300 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-lg disabled:shadow-none"
                >
                  <CheckCircle className="w-5 h-5" />
                  Request Quote
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
