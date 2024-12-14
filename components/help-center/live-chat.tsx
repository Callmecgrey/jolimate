// components/help-center/live-chat.tsx
"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
    attachment: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    // Reset states when form is closed
    if (!isOpen) {
      setFormData({ name: "", email: "", query: "", attachment: null });
      setSubmissionStatus(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prev) => ({ ...prev, attachment: file || null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      // Implement logic to send query to support
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmissionStatus("success");
      // Optionally reset form after submission
      setFormData({ name: "", email: "", query: "", attachment: null });
    } catch (error) {
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2 z-50">
      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow-lg w-full max-w-sm md:max-w-md space-y-4 relative"
        >
          {/* Heading with Close Icon */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Live Chat</h3>
            <button type="button" onClick={handleToggle} aria-label="Close">
              <X className="h-5 w-5 text-gray-600 hover:text-gray-800" />
            </button>
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Query Field */}
          <div>
            <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
              Query
            </label>
            <textarea
              id="query"
              className="w-full border border-gray-300 rounded p-2 h-20"
              placeholder="Type your question..."
              value={formData.query}
              onChange={handleChange}
              required
            />
          </div>

          {/* Attachment Field */}
          <div>
            <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1">
              Attachment (optional)
            </label>
            <input
              id="attachment"
              type="file"
              className="w-full text-sm text-gray-700"
              onChange={handleFileChange}
            />
          </div>

          {/* Submission Status */}
          {submissionStatus === "success" && (
            <p className="text-green-600 text-sm">Your query has been submitted successfully!</p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-600 text-sm">There was an error sending your query. Please try again.</p>
          )}

          {/* Submit Button Full Width */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      )}
      <button
        onClick={handleToggle}
        className="bg-purple-600 text-white p-3 rounded-full shadow hover:bg-purple-700 transition-colors flex items-center justify-center"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
