import React, { useState } from "react";
import "./MockInterviewPage.css"; // Add this file for custom styles

const MockInterviewPage = () => {
  const mockQuestions = [
    {
      question: "Tell me about yourself.",
      answer: "Provide a concise summary of your background, experience, and achievements relevant to the role.",
      category: "Behavioral",
    },
    {
      question: "Can you describe a challenging situation and how you handled it?",
      answer: "Discuss a specific example, focusing on your problem-solving skills and the positive outcome.",
      category: "Behavioral",
    },
    {
      question: "Explain the difference between REST and GraphQL.",
      answer: "REST uses endpoints for each resource, while GraphQL allows clients to request specific data with queries.",
      category: "Technical",
    },
    {
      question: "Write a function to check if a string is a palindrome.",
      answer: "A palindrome function can compare the string with its reversed version to determine equality.",
      category: "Coding",
    },
    {
      question: "Why do you want to work at our company?",
      answer: "Discuss the company’s values, culture, and how your skills align with its mission.",
      category: "HR",
    },
    {
      question: "Design a system for a URL shortening service.",
      answer: "Focus on hashing algorithms for generating unique IDs and a database for mapping IDs to URLs.",
      category: "System Design",
    },
    {
      question: "What is your greatest strength and weakness?",
      answer: "Highlight a strength relevant to the job and a weakness you are actively working on improving.",
      category: "Behavioral",
    },
    {
      question: "How do you prioritize tasks when working on multiple projects?",
      answer: "Discuss tools like task lists or prioritization frameworks such as Eisenhower Matrix.",
      category: "Behavioral",
    },
    {
      question: "What are the key principles of Object-Oriented Programming?",
      answer: "The key principles are encapsulation, inheritance, polymorphism, and abstraction.",
      category: "Technical",
    },
    {
      question: "How would you handle a situation where a project deadline is at risk?",
      answer: "Explain how you would communicate with stakeholders and reallocate resources to stay on track.",
      category: "Behavioral",
    },
    {
      question: "Write a function to find the maximum sum of a subarray in an array.",
      answer: "Use Kadane’s Algorithm to efficiently find the maximum subarray sum.",
      category: "Coding",
    },
    {
      question: "What do you know about our company and its products/services?",
      answer: "Research the company’s website and recent news to highlight your knowledge about their offerings.",
      category: "HR",
    },
    {
      question: "Design a database schema for an online bookstore.",
      answer: "Include tables for books, authors, customers, orders, and inventory with relationships between them.",
      category: "System Design",
    },
    {
      question: "What are the differences between SQL and NoSQL databases?",
      answer: "SQL is structured and uses tables, while NoSQL is schema-less and supports various data formats.",
      category: "Technical",
    },
    {
      question: "Describe a time you failed and what you learned from it.",
      answer: "Share an example, focusing on the lessons learned and how it improved your future performance.",
      category: "Behavioral",
    },
    {
      question: "How do you keep up with the latest developments in your field?",
      answer: "Discuss resources like blogs, courses, and professional networks you use to stay updated.",
      category: "HR",
    },
    {
      question: "Write a function to check if two strings are anagrams.",
      answer: "Sort both strings and compare them for equality to determine if they are anagrams.",
      category: "Coding",
    },
    {
      question: "How would you scale a video streaming platform to handle millions of users?",
      answer: "Focus on content delivery networks (CDNs), load balancing, and scalable architectures.",
      category: "System Design",
    },
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-teal-100 to-indigo-200 min-h-screen py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-teal-600">
        Mock Interview Questions
      </h1>
      <p className="text-lg text-center text-gray-600 mt-4">
        Practice these common interview questions to excel in your next mock interview.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockQuestions.map((item, index) => (
          <div
            key={index}
            className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-teal-600">
                  {item.category} Question
                </h3>
                <p className="text-gray-600 mt-4">{item.question}</p>
                
              </div>
              <div className="flip-card-back bg-teal-600 p-6 rounded-lg text-white">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button
          onClick={() => window.history.back()}
          className="mt-8 px-10 py-4 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-500 transition-all transform hover:scale-105"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default MockInterviewPage;
