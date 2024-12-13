// components/LoginForm.tsx
'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setLoginError("");

    try {
      // TODO: Replace with your authentication logic
      // Example:
      // const response = await fetch("/api/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) {
      //   throw new Error("Invalid credentials");
      // }
      // const data = await response.json();
      // Handle successful login (e.g., redirect)

      // Simulating successful login
      setTimeout(() => {
        setIsSubmitting(false);
        // Redirect to dashboard or home page
        window.location.href = "/";
      }, 2000);
    } catch (error: any) {
      setIsSubmitting(false);
      setLoginError(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {loginError && (
        <div className="mb-4 text-red-600 text-sm">
          {loginError}
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 text-sm font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring focus:ring-purple-200`}
          placeholder="you@example.com"
          required
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block mb-1 text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded ${
            errors.password ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring focus:ring-purple-200`}
          placeholder="••••••••"
          required
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>

      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link href="/signup" className="text-purple-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
