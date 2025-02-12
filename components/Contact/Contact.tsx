"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState(contactData);

  // Ensure that contactData is loaded only on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      // If the data is dynamic or needs a client-specific operation, handle here
      setContactInfo(contactData);
    }
  }, []);

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
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-6">
            <Input
              placeholder="First name"
              className="bg-black shadow-lg border-gray-800 text-white placeholder-gray-500"
            />
            <Input
              placeholder="Last name"
              className="bg-black shadow-lg border-gray-800 text-white placeholder-gray-500"
            />
          </div>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-4">
            <Input
              placeholder="Email address"
              className="bg-black shadow-lg border-gray-800 text-white placeholder-gray-500"
            />
            <Input
              placeholder="Phone Number"
              className="bg-black shadow-lg border-gray-800 text-white placeholder-gray-500"
            />
          </div>
          <Select>
            <SelectTrigger className="bg-black shadow-lg mt-4 border-gray-800 text-white placeholder-gray-500">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-black shadow-lg border-gray-800 text-white placeholder-gray-500">
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="support">Support</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Message"
            className="bg-black shadow-lg mt-4 border-gray-800 text-white placeholder-gray-500"
          />
          <Button className="bg-purple-600 mt-4 w-full">Send Message</Button>
        </Card>
        <div className="flex-1 mt-10 md:mt-0 md:ml-10 text-xl">
          {contactInfo && (
            <>
              <div className="flex items-center space-x-4 text-gray-300">
                <Phone className="text-green-400" />
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-base">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 text-gray-300">
                <Mail className="text-green-400" />
                <div>
                  <p className="font-bold">Email Address</p>
                  <p className="text-base">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 text-gray-300">
                <MapPin className="text-green-400" />
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-base">{contactInfo.address}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
