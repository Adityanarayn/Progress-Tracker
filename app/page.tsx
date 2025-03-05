"use client";
import { useState } from "react";

const roadmap = [
  {
    title: "Learn Python Basics",
    substeps: ["Install Python", "Learn Syntax", "Practice Basic Programs"]
  },
  {
    title: "Master NumPy & Pandas",
    substeps: ["Understand NumPy Arrays", "Data Manipulation with Pandas", "Data Cleaning"]
  },
  {
    title: "Data Visualization (Matplotlib & Seaborn)",
    substeps: ["Plot Graphs with Matplotlib", "Use Seaborn for Advanced Plots"]
  },
  {
    title: "Supervised Learning (Regression & Classification)",
    substeps: ["Learn Linear Regression", "Implement Logistic Regression"]
  },
  {
    title: "Model Evaluation & Tuning",
    substeps: ["Understand Train-Test Split", "Cross Validation", "Hyperparameter Tuning"]
  },
  {
    title: "Unsupervised Learning (Clustering & PCA)",
    substeps: ["K-Means Clustering", "Principal Component Analysis"]
  },
  {
    title: "Deep Learning Basics (Neural Networks)",
    substeps: ["Understand Neural Networks", "Build First Neural Network"]
  },
  {
    title: "Convolutional Neural Networks (CNNs)",
    substeps: ["Learn CNN Architecture", "Train a CNN Model"]
  },
  {
    title: "NLP & Advanced Topics",
    substeps: ["Understand NLP Basics", "Text Classification", "Sentiment Analysis"]
  },
  {
    title: "Build & Deploy ML Projects",
    substeps: ["Select a Project", "Train and Evaluate", "Deploy with Flask"]
  },
  {
    title: "Resume Building & Job Prep",
    substeps: ["Craft a Resume", "Optimize LinkedIn", "Apply to Jobs"]
  },
  {
    title: "Interview Preparation & Job Applications",
    substeps: ["Practice Coding Questions", "Mock Interviews", "Salary Negotiation"]
  }
];

export default function MLProgressTracker() {
  const [completed, setCompleted] = useState(Array(roadmap.length).fill(false));
  const [expanded, setExpanded] = useState(Array(roadmap.length).fill(false));

  const toggleTask = (index) => {
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
  };

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const progress = (completed.filter(Boolean).length / roadmap.length) * 100;

  return (
    <div className="flex flex-col items-center p-6 space-y-6 w-full bg-gray-100 min-h-screen text-gray-900">
      <h1 className="text-2xl font-bold text-black">Machine Learning Progress Tracker</h1>
      <div className='w-3/4 bg-gray-300 h-4 rounded-lg'>
        <div className='bg-green-500 h-4 rounded-lg transition-all' style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-black">{progress.toFixed(2)}% Completed</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        {roadmap.map((task, index) => (
          <div
            key={index}
            className={`border p-4 text-center cursor-pointer text-black rounded-lg shadow-md ${completed[index] ? "bg-green-200" : "bg-white"}`}
          >
            <div onClick={() => toggleExpand(index)}>
              <p className="font-bold">{task.title}</p>
            </div>
            {expanded[index] && (
              <div className="mt-2 text-left p-2 bg-gray-200 rounded-md">
                <ul className="list-disc pl-5">
                  {task.substeps.map((substep, subIndex) => (
                    <li key={subIndex}>{substep}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
              onClick={() => toggleTask(index)}
            >
              {completed[index] ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
          </div>
        ))}
      </div>
      <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={() => setCompleted(Array(roadmap.length).fill(false))}>
        Reset Progress
      </button>
    </div>
  );
}
