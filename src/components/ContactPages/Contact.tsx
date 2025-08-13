"use client";
import { motion, Variants } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <div className="relative">
        <motion.div
        className="w-[300px] h-[300px] bg-gradient-to-br from-[#06B6D4] via-[#3B82F6] to-[#8B5CF6] blur-[60px] absolute top-10 left-10 z-0 md:block hidden rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
      />
      <div className="text-white max-w-5xl mx-auto py-24 flex items-center justify-center relative">
        {/* Grid Pattern Overlay */}
        <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] max-w-7xl mx-auto"></div>

        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6  rounded-xl p-5 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <h2 className="text-4xl font-extrabold tracking-tight text-cyan-400">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <Mail className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition" />
                <span className="text-white/90">contact@example.com</span>
              </div>
              <div className="flex items-center gap-4 group">
                <Phone className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition" />
                <span className="text-white/90">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-4 group">
                <MapPin className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition" />
                <span className="text-white/90">S.O Rd, Narayanganj, BD</span>
              </div>
            </div>

            <motion.div
              className="rounded-xl overflow-hidden shadow-lg border border-white/10"
              variants={itemVariants}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.2529897654613!2d90.51630467418508!3d23.666909078727453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b153290c6253%3A0x2558a8d5888f6a72!2sS.O%20Rd%2C%20Narayanganj!5e0!3m2!1sen!2sbd!4v1751644846356!5m2!1sen!2sbd"
                className="w-full h-64 rounded-xl"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Google Map"
              />
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/10"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="bg-white/10 text-white border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/10 text-white border-white/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white/80">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="Subject..."
                  className="bg-white/10 text-white border-white/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/80">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  className="min-h-[140px] bg-white/10 text-white border-white/20"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg py-3 rounded-md"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
