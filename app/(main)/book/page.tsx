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
      "Appointment booked successfully! We will send you a confirmation email shortly.",
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
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
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
    <div className="flex min-h-[60vh] items-center justify-center text-center text-7xl font-bold uppercase">
      Book Page
    </div>
  );
}
