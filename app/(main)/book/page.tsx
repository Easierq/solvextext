"use client";
import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Hammer,
  CheckCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
  Home,
  Calendar,
  Ruler,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    projectType: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    budget: "",
    notes: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const services = [
    "Hardwood Floor Installation",
    "Floor Refinishing",
    "Floor Repair & Restoration",
    "Sanding & Staining",
    "Engineered Hardwood Installation",
    "Custom Pattern Installation",
    "Floor Inspection & Consultation",
    "Emergency Floor Repair",
    "Other",
  ];

  const projectTypes = [
    "Residential - Single Room",
    "Residential - Multiple Rooms",
    "Residential - Whole Home",
    "Commercial - Office",
    "Commercial - Retail",
    "Commercial - Restaurant/Hospitality",
    "Renovation Project",
    "New Construction",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000 - $40,000",
    "$40,000+",
  ];

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleSubmit = () => {
    alert(
      "Appointment booked successfully! We will send you a confirmation email shortly."
    );
    setFormData({
      service: "",
      projectType: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      budget: "",
      notes: "",
    });
    setSelectedDate(null);
    setStep(1);
  };

  // Calendar functions
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getMonthStart = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };

  const getMonthEnd = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };

  const getDaysInMonth = () => {
    const start = getMonthStart(currentMonth);
    const end = getMonthEnd(currentMonth);
    const days = [];
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }
    return days;
  };

  const getStartingDayOfWeek = () => {
    return getMonthStart(currentMonth).getDay();
  };

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const isDateDisabled = (date: Date) => {
    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);
    if (compareDate < today) return true;
    if (date.getDay() === 0) return true;
    return false;
  };

  const isSameDay = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isToday = (date: Date) => {
    return isSameDay(date, today);
  };

  const handleDateSelect = (date: Date) => {
    if (!isDateDisabled(date)) {
      setSelectedDate(date);
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${days[date.getDay()]}, ${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const formatMonthYear = (date: Date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const daysInMonth = getDaysInMonth();
  const startingDayOfWeek = getStartingDayOfWeek();

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <section className="hidden lg:flex bg-gradient-to-r from-brand to-brand text-white py-20">
        <div className="px-[3%] lg:px-[7%] mx-auto text-center">
          <motion.h1
            className="text-5xl font-medium mb-6 animate-fade-in"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get Your <span className="">Free Quote</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-50 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schedule your flooring estimate in three easy steps
          </motion.p>
        </div>
      </section>

      <section className="flex lg:hidden text-slate-800 py-10 pb-2">
        <div className="px-[3%] lg:px-[7%] text-start">
          <motion.h1
            className="text-3xl font-semibold font-display mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get Your
            <span className="text-slate-600"> Free Quote</span>
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schedule your flooring estimate in three easy steps
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="px-[3%] lg:px-[7%] mx-auto max-w-4xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= num
                      ? "bg-brand text-white shadow-lg"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step > num ? <CheckCircle className="w-6 h-6" /> : num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-20 md:w-24 h-1 mx-2 transition-all ${
                      step > num ? "bg-brand" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Labels */}
          <div className="hidden md:flex justify-around mb-8 text-center">
            <div
              className={`flex-1 ${step >= 1 ? "text-brand" : "text-gray-400"}`}
            >
              <div className="font-semibold">Select Service</div>
            </div>
            <div
              className={`flex-1 ${step >= 2 ? "text-brand" : "text-gray-400"}`}
            >
              <div className="font-semibold">Choose Date & Time</div>
            </div>
            <div
              className={`flex-1 ${step >= 3 ? "text-brand" : "text-gray-400"}`}
            >
              <div className="font-semibold">Your Information</div>
            </div>
          </div>

          <div className="flex md:hidden justify-around mb-8 text-center">
            <div
              className={`flex-1 ${step >= 1 ? "text-brand" : "text-gray-400"}`}
            >
              <div className="font-semibold">Service</div>
            </div>
            <div
              className={`flex-1 ${step >= 2 ? "text-brand" : "text-gray-400"}`}
            >
              <div className="font-semibold">Date/Time</div>
            </div>
            <div
              className={`flex-1 ${step >= 3 ? "text-brand" : "text-gray-400"}`}
            >
              <div className="font-semibold">Information</div>
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Ruler className="w-6 h-6 mr-3 text-primary-600" />
                  Select Flooring Service
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => setFormData({ ...formData, service })}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        formData.service === service
                          ? "border-brand bg-brand/10 shadow-md"
                          : "border-gray-300 hover:border-brand hover:shadow-sm"
                      }`}
                    >
                      <div className="font-semibold text-gray-800">
                        {service}
                      </div>
                    </button>
                  ))}
                </div>

                <h3 className="text-xl font-bold font-display text-gray-800 mb-4 mt-8">
                  Project Type
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        setFormData({ ...formData, projectType: type })
                      }
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        formData.projectType === type
                          ? "border-primary-600 bg-primary-50"
                          : "border-gray-300 hover:border-primary-300"
                      }`}
                    >
                      <div className="font-semibold text-gray-800">{type}</div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => formData.service && setStep(2)}
                  disabled={!formData.service}
                  className="mt-8 w-full bg-brand hover:bg-brand/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  Continue to Date & Time
                </button>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-brand" />
                  Choose Date & Time
                </h2>

                <div className="mb-6 relative">
                  <label className="block text-gray-700 font-medium mb-2">
                    Select Date
                  </label>

                  {/* Date Input */}
                  <button
                    type="button"
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left focus:ring-0 focus:border-transparent bg-white hover:border-gray-400 transition-colors flex items-center justify-between"
                  >
                    <span
                      className={
                        selectedDate ? "text-gray-800" : "text-gray-400"
                      }
                    >
                      {selectedDate
                        ? formatDate(selectedDate)
                        : "Choose a date..."}
                    </span>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </button>

                  <p className="text-sm text-gray-500 mt-2">
                    We're closed on Sundays. Select a date Monday-Saturday.
                  </p>

                  {/* Calendar Popup */}
                  {showCalendar && (
                    <>
                      {/* Backdrop */}
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowCalendar(false)}
                      />

                      {/* Calendar */}
                      <div className="absolute z-[48] mt-2 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xl">
                        {/* Calendar Header */}
                        <div className="bg-brand text-white p-4">
                          <div className="flex items-center justify-between mb-4">
                            <button
                              type="button"
                              onClick={previousMonth}
                              className="p-2 hover:bg-brand rounded-lg transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <h3 className="text-lg font-semibold">
                              {formatMonthYear(currentMonth)}
                            </h3>
                            <button
                              type="button"
                              onClick={nextMonth}
                              className="p-2 hover:bg-brand rounded-lg transition-colors"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </div>

                          {/* Day Names */}
                          <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
                            {[
                              "Sun",
                              "Mon",
                              "Tue",
                              "Wed",
                              "Thu",
                              "Fri",
                              "Sat",
                            ].map((day) => (
                              <div key={day} className="text-gray-100">
                                {day}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Calendar Days */}
                        <div className="p-4 w-72 md:w-80">
                          <div className="grid grid-cols-7 gap-2">
                            {Array.from({ length: startingDayOfWeek }).map(
                              (_, index) => (
                                <div
                                  key={`empty-${index}`}
                                  className="aspect-square"
                                />
                              )
                            )}

                            {daysInMonth.map((day) => {
                              const disabled = isDateDisabled(day);
                              const selected =
                                selectedDate && isSameDay(day, selectedDate);
                              const isCurrentDay = isToday(day);

                              return (
                                <button
                                  type="button"
                                  key={day.toString()}
                                  onClick={() => {
                                    handleDateSelect(day);
                                    setShowCalendar(false);
                                  }}
                                  disabled={disabled}
                                  className={`
                                    aspect-square rounded-lg text-sm font-medium transition-all
                                    ${
                                      disabled
                                        ? "text-gray-300 cursor-not-allowed"
                                        : "hover:bg-gray-100 cursor-pointer"
                                    }
                                    ${
                                      selected
                                        ? "bg-brand text-white hover:bg-brand/90 shadow-md"
                                        : "text-gray-700"
                                    }
                                    ${
                                      isCurrentDay && !selected
                                        ? "border-2 border-brand"
                                        : ""
                                    }
                                  `}
                                >
                                  {day.getDate()}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Select Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setFormData({ ...formData, time })}
                        disabled={!selectedDate}
                        className={`p-3 border-2 rounded-lg text-center transition-all ${
                          formData.time === time
                            ? "border-brand bg-gray-50 font-semibold shadow-md"
                            : "border-gray-300 hover:border-brand disabled:opacity-50 disabled:cursor-not-allowed"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {!selectedDate && (
                    <p className="text-sm text-gray-500 mt-2">
                      Please select a date first
                    </p>
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-4 rounded-lg font-semibold transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => selectedDate && formData.time && setStep(3)}
                    disabled={!selectedDate || !formData.time}
                    className="flex-1 bg-brand hover:bg-brand/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition-all shadow-lg"
                  >
                    Continue{" "}
                    <span className="hidden md:block">to Your Info</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Information */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-brand" />
                  Your Information
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Project Address *
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-transparent"
                      placeholder="123 Main Street, City, State, ZIP"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Budget Range
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                    >
                      <SelectTrigger className="w-full h-12 border-gray-300 focus:ring-0">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Project Details & Special Requirements
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-transparent"
                      placeholder="Tell us about square footage, wood species preferences, finish type..."
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-8 p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-brand" />
                    Appointment Summary
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex gap-2 md:justify-between">
                      <span>Service:</span>
                      <span className="font-semibold text-gray-800">
                        {formData.service}
                      </span>
                    </div>
                    <div className="flex gap-2 md:justify-between">
                      <span>Date:</span>
                      <span className="font-semibold text-gray-800">
                        {selectedDate
                          ? formatDate(selectedDate)
                          : "Not selected"}
                      </span>
                    </div>
                    <div className="flex gap-2 md:justify-between">
                      <span>Time:</span>
                      <span className="font-semibold text-gray-800">
                        {formData.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-4 rounded-lg font-semibold transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={
                      !formData.name ||
                      !formData.email ||
                      !formData.phone ||
                      !formData.address
                    }
                    className="flex-1 bg-brand hover:bg-brand/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    Confirm <span className="hidden md:block">Appointment</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need help or prefer to book by phone?
            </p>
            <a
              href="tel:5551234567"
              className="inline-flex items-center bg-white text-brand border-2 border-brand hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
