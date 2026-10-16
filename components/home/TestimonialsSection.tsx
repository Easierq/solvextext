"use client";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  date: string;
  project: string;
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Homeowner",
      content:
        "The transformation of our floors exceeded all expectations! The attention to detail and craftsmanship was remarkable. Our home now has that timeless elegance we've always wanted.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b4c2?w=150&h=150&fit=crop&crop=face",
      date: "2 weeks ago",
      project: "Hardwood Installation",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      content:
        "Our office flooring renovation was completed on time and within budget. The quality of work is outstanding. Clients constantly compliment the beautiful hardwood floors!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      date: "1 month ago",
      project: "Commercial Flooring",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Interior Designer",
      content:
        "Working with this team was an absolute pleasure. They refinished our vintage oak floors beautifully. The craftsmanship is impeccable and they were so professional throughout.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      date: "3 weeks ago",
      project: "Floor Refinishing",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Real Estate Developer",
      content:
        "Their flooring expertise helped us sell our properties 30% faster. The installations are flawless and really showcase each home's potential. Highly recommend!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      date: "2 months ago",
      project: "Multiple Installations",
    },
    {
      id: 5,
      name: "Jessica Parker",
      role: "Restaurant Owner",
      content:
        "The custom hardwood flooring created the perfect ambiance for our restaurant. Customers love the warm, inviting atmosphere. The floors handle high traffic beautifully!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      date: "6 weeks ago",
      project: "Commercial Installation",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="py-16 bg-card">
      <div className="px-[4%] lg:px-[7%] mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-display text-gray-800 mb-4">
            What Our <span className="text-primary-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from those who've experienced the transformation
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[420px] overflow-hidden rounded-2xl bg-gradient-to-r from-primary-50 to-primary-50">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextTestimonial();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevTestimonial();
                  }
                }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                <div className="text-center max-w-2xl">
                  <Quote className="w-12 h-12 text-primary-600 mx-auto mb-6 opacity-50" />

                  <p className="text-xl text-gray-700 leading-relaxed mb-4 italic font-body">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="inline-block bg-primary-50 px-4 py-2 rounded-full mb-6">
                    <span className="text-sm font-semibold text-primary-700">
                      Project: {testimonials[currentIndex].project}
                    </span>
                  </div>

                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonials[currentIndex].rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-bold font-display text-gray-800">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primary-600 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonials[currentIndex].date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-primary-50 text-primary-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-primary-50 text-primary-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary-600 scale-125"
                    : "bg-gray-300 hover:bg-primary-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
            <div className="text-4xl font-bold font-display text-primary-600 mb-2">
              4.9
            </div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <div className="text-gray-600 font-semibold">Average Rating</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="text-4xl font-bold font-display text-green-600 mb-2">
              3,000+
            </div>
            <div className="text-gray-600 font-semibold">Floors Installed</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
            <div className="text-4xl font-bold font-display text-pink-600 mb-2">
              25+
            </div>
            <div className="text-gray-600  font-semibold">
              Years of Excellence
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
