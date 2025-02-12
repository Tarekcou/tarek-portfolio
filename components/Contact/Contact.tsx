'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactData } from "@/Data/data";

export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-5    bg-black text-white p-6 
    shadow-lg border-gray-800 w-11/12 md:w-10/12 mx-auto">
      <Card className="bg-[#1a0e26] p-6 md:w-1/2 w-full shadow-lg border-gray-800 flex-1 ">
        <h2 className="text-3xl font-bold text-purple-400">Let's work together!</h2>
        <p className="text-gray-400 mt-2 text-xl">Have a project in mind? Let's create something amazing together.

</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Input placeholder="First name" className="bg-black text-white  shadow-lg border-gray-800 placeholder-gray-500" />
          <Input placeholder="Last name" className="bg-black text-white shadow-lg border-gray-800 placeholder-gray-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Input placeholder="Email address" className="bg-black text-white shadow-lg border-gray-800 placeholder-gray-500" />
          <Input placeholder="Phone Number" className="bg-black text-white shadow-lg border-gray-800 placeholder-gray-500" />
        </div>
        <Select>
          <SelectTrigger className="mt-4 bg-black text-white shadow-lg border-gray-800 placeholder-gray-500">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent className="bg-black text-white shadow-lg border-gray-800 placeholder-gray-500">
            <SelectItem value="general">General Inquiry</SelectItem>
            <SelectItem value="support">Support</SelectItem>
            <SelectItem value="feedback">Feedback</SelectItem>
          </SelectContent>
        </Select>
        <Textarea placeholder="Message" className="bg-black text-white mt-4 shadow-lg border-gray-800 placeholder-gray-500" />
        <Button className="bg-purple-600 mt-4 w-full">Send Message</Button>
      </Card>
      <div className="md:ml-10 mt-10 md:mt-0 text-xl flex-1">
        <div className="flex items-center space-x-4 text-gray-300">
          <Phone className="text-green-400" />
          <div>
            <p className="font-bold">Phone</p>
            <p className="text-base">{contactData.phone}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-300 mt-4">
          <Mail className="text-green-400" />
          <div>
            <p className="font-bold">Email Address</p>
            <p className="text-base">{contactData.email}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-300 mt-4">
          <MapPin className="text-green-400" />
          <div>
            <p className="font-bold">Address</p>
            <p className="text-base">{contactData.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}