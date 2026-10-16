"use client";
import {
  Clock,
  Calendar,
  Phone,
  AlertCircle,
  CheckCircle,
  Hammer,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface HourSchedule {
  day: string;
  hours: string;
  isOpen: boolean;
  isToday: boolean;
}

export default function OpeningHours() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [nextOpenTime, setNextOpenTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const schedule: HourSchedule[] = [
    {
      day: "Monday",
      hours: "7:00 AM - 6:00 PM",
      isOpen: true,
      isToday: false,
    },
    {
      day: "Tuesday",
      hours: "7:00 AM - 6:00 PM",
      isOpen: true,
      isToday: false,
    },
    {
      day: "Wednesday",
      hours: "7:00 AM - 6:00 PM",
      isOpen: true,
      isToday: false,
    },
    {
      day: "Thursday",
      hours: "7:00 AM - 6:00 PM",
      isOpen: true,
      isToday: false,
    },
    {
      day: "Friday",
      hours: "7:00 AM - 6:00 PM",
      isOpen: true,
      isToday: false,
    },
    {
      day: "Saturday",
      hours: "8:00 AM - 4:00 PM",
      isOpen: true,
      isToday: false,
    },
    { day: "Sunday", hours: "Closed", isOpen: false, isToday: false },
  ];

  useEffect(() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = days[currentTime.getDay()];
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentTimeMinutes = currentHour * 60 + currentMinute;

    schedule.forEach((day) => {
      day.isToday = day.day === today;
    });

    const todaySchedule = schedule.find((day) => day.day === today);

    if (todaySchedule && todaySchedule.isOpen) {
      let openTime, closeTime;

      if (today === "Saturday") {
        openTime = 8 * 60;
        closeTime = 16 * 60;
      } else if (today === "Sunday") {
        setIsOpen(false);
        setNextOpenTime("Opens Monday at 7:00 AM");
        return;
      } else {
        openTime = 7 * 60;
        closeTime = 18 * 60;
      }

      setIsOpen(
        currentTimeMinutes >= openTime && currentTimeMinutes < closeTime
      );

      if (currentTimeMinutes < openTime) {
        const hoursUntilOpen = Math.floor((openTime - currentTimeMinutes) / 60);
        const minutesUntilOpen = (openTime - currentTimeMinutes) % 60;
        if (hoursUntilOpen > 0) {
          setNextOpenTime(`Opens in ${hoursUntilOpen}h ${minutesUntilOpen}m`);
        } else {
          setNextOpenTime(`Opens in ${minutesUntilOpen} minutes`);
        }
      } else if (currentTimeMinutes >= closeTime) {
        if (today === "Saturday") {
          setNextOpenTime("Opens Monday at 7:00 AM");
        } else {
          setNextOpenTime("Opens tomorrow at 7:00 AM");
        }
      }
    } else {
      setIsOpen(false);
      setNextOpenTime("Opens Monday at 7:00 AM");
    }
  }, [currentTime]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getCurrentStatus = () => {
    const now = currentTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    if (isOpen) {
      return {
        status: "Open Now",
        message: `Current time: ${now}`,
        icon: CheckCircle,
        color: "text-green-600",
        bgColor: "bg-green-100",
      };
    } else {
      return {
        status: "Currently Closed",
        message: nextOpenTime || "Opens Monday",
        icon: AlertCircle,
        color: "text-red-600",
        bgColor: "bg-red-100",
      };
    }
  };

  const status = getCurrentStatus();
  const StatusIcon = status.icon;

  return (
    <section className="py-16">
      <div className="px-[4%] lg:px-[7%] mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Showroom <span className="text-primary-600">Hours</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us to explore flooring samples and discuss your project with
            our experts
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-max">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-primary-600" />
                  Showroom Status
                </h3>

                <div className={`${status.bgColor} rounded-xl p-4 mb-6`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <StatusIcon className={`w-6 h-6 ${status.color}`} />
                    <span className={`font-bold text-lg ${status.color}`}>
                      {status.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{status.message}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600">
                      Today:{" "}
                      {currentTime.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600">
                      Free estimates available
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <a
                      href="tel:+15551234567"
                      className="text-primary-600 hover:text-primary-600/90 transition-colors"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button className="w-full bg-primary-600 hover:bg-primary-600/90 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                    Schedule Visit
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-primary-600" />
                Weekly Schedule
              </h3>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                {schedule.map((day, index) => (
                  <motion.div
                    key={day.day}
                    variants={itemVariants}
                    className={`flex items-center justify-between p-6 border-b border-gray-100 transition-colors ${
                      day.isToday
                        ? "bg-primary-50 border-l-4 border-l-primary-600"
                        : "hover:bg-gray-50"
                    } ${index === schedule.length - 1 ? "border-b-0" : ""}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          day.isToday
                            ? "bg-primary-600 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <h4
                          className={`font-semibold ${
                            day.isToday ? "text-primary-600" : "text-gray-800"
                          }`}
                        >
                          {day.day}
                          {day.isToday && (
                            <span className="ml-2 text-sm bg-primary-600 text-white px-2 py-1 rounded-full">
                              Today
                            </span>
                          )}
                        </h4>
                        {day.isToday && (
                          <p className="text-sm text-gray-600">
                            {currentTime.toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <div
                        className={`font-semibold ${
                          day.isOpen
                            ? day.isToday
                              ? "text-primary-600"
                              : "text-gray-800"
                            : "text-red-600"
                        }`}
                      >
                        {day.hours}
                      </div>
                      {day.isToday && (
                        <div className="flex items-center justify-end space-x-2 mt-1">
                          <StatusIcon className={`w-4 h-4 ${status.color}`} />
                          <span
                            className={`text-sm font-medium ${status.color}`}
                          >
                            {isOpen ? "Open" : "Closed"}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Free Samples
                  </h4>
                  <p className="text-blue-700 text-sm">
                    Take home samples to see how they look in your space.
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    Expert Consultations
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    Meet with our flooring specialists for personalized
                    recommendations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Questions About Our Showroom?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Need to visit outside regular hours? Have questions about flooring
              options? We're here to accommodate your schedule!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+15551234567"
                className="bg-white text-primary-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (555) 123-4567</span>
              </a>
              <button className="border border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Request Callback
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
