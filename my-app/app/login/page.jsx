"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md ${className}`}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

const Button = ({ children, type = "button", className, ...props }) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {children}
    </label>
  );
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await fetch("http://localhost:8000/api/v1/loginUser", {
        body: JSON.stringify(formData), // Make sure `formData` is defined
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        console.log("User logged in:", data);
        console.log("Successfully logged in");
        window.location.href = "./Repository";
      } else {
        console.log("can't logged in");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 text-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full mt-4">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
