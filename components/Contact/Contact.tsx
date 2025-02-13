"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactData } from "@/Data/data";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// TypeScript Interfaces
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  inquiryType: string;
}

interface ContactInfoProps {
  phone: string;
  email: string;
  address: string;
}

interface ContactDetailProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

// ContactDetail Component
const ContactDetail: React.FC<ContactDetailProps> = ({
  icon,
  label,
  value,
}) => (
  <div className="flex items-center space-x-4 mt-4 text-gray-300">
    {icon}
    <div>
      <p className="font-bold">{label}</p>
      <p className="text-base">{value}</p>
    </div>
  </div>
);

// InquirySelect Component
const InquirySelect: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => (
  <Select value={value} onValueChange={onChange}>
    <SelectTrigger className="bg-black shadow-lg mt-4 border-gray-800 text-white placeholder-gray-500">
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent className="bg-black shadow-lg border-gray-800 text-white placeholder-gray-500">
      <SelectItem value="general">General Inquiry</SelectItem>
      <SelectItem value="support">Support</SelectItem>
      <SelectItem value="feedback">Feedback</SelectItem>
    </SelectContent>
  </Select>
);

// Contact Info Section
const ContactInfo: React.FC<ContactInfoProps> = ({ phone, email, address }) => (
  <div className="flex-1 mt-10 md:mt-0 md:ml-10 text-xl">
    <ContactDetail
      icon={<Phone className="text-green-400" />}
      label="Phone"
      value={phone}
    />
    <ContactDetail
      icon={<Mail className="text-green-400" />}
      label="Email Address"
      value={email}
    />
    <ContactDetail
      icon={<MapPin className="text-green-400" />}
      label="Address"
      value={address}
    />
  </div>
);

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfoProps>(contactData);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "general",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Convert FormData instance to a plain object
    const formObject = Object.fromEntries(Object.entries(formData));
    // console.log(formObject);
    try {
      const result = await emailjs.send(
        "service_hr93t0h", // EmailJS service ID
        "template_wjpne04", // EmailJS template ID
        formObject, // ✅ Now a plain object
        "8uhWBVtl_895spl21" // EmailJS user ID
      );

      // console.log("Email sent successfully", result);
      toast.success("Email Send Successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        inquiryType: "general",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
    setLoading(false);
  };
  return (
    <div className="bg-black">
      <div className="flex md:flex-row flex-col justify-between items-center gap-5 bg-black shadow-lg mx-auto p-6 border-gray-800 w-11/12 md:w-10/12 text-white">
        <Card className="flex-1 bg-[#1a0e26] shadow-lg p-6 border-gray-800 w-full md:w-1/2">
          <h2 className="font-bold text-purple-400 text-3xl">
            Let's work together!
          </h2>
          <p className="mt-2 text-gray-400 text-xl">
            Have a project in mind? Let's create something amazing together.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-6">
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="bg-black shadow-lg border-gray-800 text-white placeholder-gray-500"
              />
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="bg-black shadow-lg border-gray-800 text-white placeholder-gray-500"
              />
            </div>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-4">
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="bg-black shadow-lg border-gray-800 text-white placeholder-gray-500"
                required
              />
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="bg-black shadow-lg border-gray-800 text-white placeholder-gray-500"
              />
            </div>
            <InquirySelect
              value={formData.inquiryType}
              onChange={(value) =>
                setFormData((prev) => ({ ...prev, inquiryType: value }))
              }
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="bg-black shadow-lg mt-4 border-gray-800 text-white placeholder-gray-500"
              required
            />
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 mt-4 border-none rounded-sm w-full btn"
              onClick={handleClick}
              // disabled={loading}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Card>
        <ContactInfo {...contactInfo} />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: " text-base",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              iconTheme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
