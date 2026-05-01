"use client";
import Link from "next/link";
import { COURSE } from "@/const";
import SuccessMessage from "@/components/SuccessMessage";
import ErrorMessage from "@/components/ErrorMessage";
import { useState } from "react";

const Apply = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    console.log(email);
    setSuccess("Email have been sent successfully");
  };
  const handleCourseSelect = (course) => {
    // change UI of the selected course to indicate it was selected
    setSelectedCourse(course);
    console.log(course);
  };
  return (
    <section className=" h-full">
      <div className="container max-w-7xl px-6 mx-auto mt-10">
        {success && (
          <SuccessMessage message={success} onClose={() => setSuccess(null)} />
        )}
        {error && (
          <ErrorMessage message={error} onClose={() => setError(null)} />
        )}
        <div className="rounded-lg bg-gray-50 pb-6">
          <h2 className="font-bold text-lg text-center font-nav pt-8 md:text-2xl text-black">
            Transform into a world-class software Engineer Today
          </h2>
          <p className="text-sm max-w-4xl text-center font-nav mt-2 text-black">
            Join our software engineering program for expertise, mentorship,
            internship and job placement support. Elevate your career now!
          </p>
          <div className="mt-4">
            <h2 className="font-bold text-lg text-center font-nav md:text-xl text-black">
              Top Courses
            </h2>
            <div className="grid grid-cols-2 items-center justify-center gap-2 p-4 mt-2 md:grid-cols-4 lg:grid-cols-5">
              {COURSE.map((course, index) => (
                <div
                  key={index}
                  className={`bg-white px-2 py-4 shadow-md rounded-xl text-black font-bold font-nav text-center cursor-pointer ${selectedCourse === course ? "bg-green-500 text-white" : ""}`}
                  onClick={() => handleCourseSelect(course)}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-gray-50 text-black mt-8 pb-6">
          <h2 className="font-bold text-lg text-center font-nav pt-8 md:text-2xl">
            Get started with you application
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-6 px-4 md:w-[600px] mx-auto"
          >
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-center py-3 px-4 bg-black text-white rounded"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Apply;
