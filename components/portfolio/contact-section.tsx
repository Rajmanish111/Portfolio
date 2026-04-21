"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Linkedin, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "emailjs-com"   // ✅ ADDED

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8455892855",
    href: "tel:+918455892855",
  },
  {
    icon: Mail,
    label: "Email",
    value: "manishbhotra@gmail.com",
    href: "mailto:manishbhotra@gmail.com",
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manish-raj-bhatra-a12588110",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Rajmanish111",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // ✅ UPDATED FUNCTION (EmailJS integrated)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget

   const formElements = form.elements as typeof form.elements & {
  name: HTMLInputElement
  email: HTMLInputElement
  message: HTMLTextAreaElement
}

const name = formElements.name.value
const email = formElements.email.value
const message = formElements.message.value
    // const name = (form.name as HTMLInputElement).value
    // const email = (form.email as HTMLInputElement).value
    // const message = (form.message as HTMLTextAreaElement).value

    try {
      await emailjs.send(
        "service_portfolio",        // your Service ID
        "template_70jnrol",           // 🔴 replace with your Template ID
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "at2VR5Y1z9JogR7XB"         // your Public Key
      )

      setSubmitted(true)
      form.reset()
    } catch (error) {
      console.error(error)
      alert("Failed to send message")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back to
            you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h4 className="text-lg font-semibold mb-2">Open to Opportunities</h4>
              <p className="text-muted-foreground mb-4">
                I&apos;m actively seeking Software Developer roles where I can
                contribute and grow with a dynamic team.
              </p>
              <Button asChild>
                <a href="/Resume-ManishRajBhatra.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you soon!
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input id="name" name="name" placeholder="Your name" required />
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  </div>

                  <Input id="subject" name="subject" placeholder="How can I help you?" required />

                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}























// "use client"

// import { useRef, useState } from "react"
// import { motion, useInView } from "framer-motion"
// import { Mail, Phone, MapPin, Send, Linkedin, Github, ArrowUpRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// const contactInfo = [
//   {
//     icon: MapPin,
//     label: "Location",
//     value: "Hyderabad, India",
//     href: null,
//   },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: "+91-8455892855",
//     href: "tel:+918455892855",
//   },
//   {
//     icon: Mail,
//     label: "Email",
//     value: "manishbhotra@gmail.com",
//     href: "mailto:manishbhotra@gmail.com",
//   },
// ]

// const socialLinks = [
//   {
//     icon: Linkedin,
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/in/manish-raj-bhatra-a12588110",
//   },
//   {
//     icon: Github,
//     label: "GitHub",
//     href: "https://github.com/Rajmanish111",
//   },
// ]

// export function ContactSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitted, setSubmitted] = useState(false)

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000))
//     setIsSubmitting(false)
//     setSubmitted(true)
//   }

//   return (
//     <section id="contact" className="py-24 md:py-32">
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <span className="text-primary text-sm font-semibold tracking-wider uppercase">
//             Get In Touch
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
//             Let&apos;s Work Together
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             I&apos;m currently looking for new opportunities. Whether you have a
//             question or just want to say hi, I&apos;ll try my best to get back to
//             you!
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

//             <div className="space-y-6 mb-8">
//               {contactInfo.map((item) => (
//                 <div key={item.label} className="flex items-center gap-4">
//                   <div className="p-3 rounded-xl bg-primary/10 text-primary">
//                     <item.icon className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">{item.label}</p>
//                     {item.href ? (
//                       <a
//                         href={item.href}
//                         className="font-medium hover:text-primary transition-colors"
//                       >
//                         {item.value}
//                       </a>
//                     ) : (
//                       <p className="font-medium">{item.value}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
//             <div className="flex gap-4">
//               {socialLinks.map((link) => (
//                 <motion.a
//                   key={link.label}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-colors"
//                 >
//                   <link.icon className="w-5 h-5" />
//                   <span className="sr-only">{link.label}</span>
//                 </motion.a>
//               ))}
//             </div>

//             {/* CTA */}
//             <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
//               <h4 className="text-lg font-semibold mb-2">Open to Opportunities</h4>
//               <p className="text-muted-foreground mb-4">
//                 I&apos;m actively seeking Software Developer roles where I can
//                 contribute and grow with a dynamic team.
//               </p>
//               <Button asChild>
//                 <a href="/Resume-ManishRajBhatra.pdf" target="_blank" rel="noopener noreferrer">
//                   Download Resume
//                   <ArrowUpRight className="ml-2 h-4 w-4" />
//                 </a>
//               </Button>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <div className="p-8 rounded-2xl bg-card border border-border">
//               <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

//               {submitted ? (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="text-center py-12"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
//                     <Send className="w-8 h-8" />
//                   </div>
//                   <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
//                   <p className="text-muted-foreground">
//                     Thank you for reaching out. I&apos;ll get back to you soon!
//                   </p>
//                   <Button
//                     variant="outline"
//                     className="mt-4"
//                     onClick={() => setSubmitted(false)}
//                   >
//                     Send Another
//                   </Button>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label
//                         htmlFor="name"
//                         className="block text-sm font-medium mb-2"
//                       >
//                         Name
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         placeholder="Your name"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-medium mb-2"
//                       >
//                         Email
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="your@email.com"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="subject"
//                       className="block text-sm font-medium mb-2"
//                     >
//                       Subject
//                     </label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       placeholder="How can I help you?"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-medium mb-2"
//                     >
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       placeholder="Your message..."
//                       rows={5}
//                       required
//                     />
//                   </div>

//                   <Button type="submit" className="w-full" disabled={isSubmitting}>
//                     {isSubmitting ? (
//                       <>
//                         <span className="animate-spin mr-2">⏳</span>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                         <Send className="ml-2 h-4 w-4" />
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
