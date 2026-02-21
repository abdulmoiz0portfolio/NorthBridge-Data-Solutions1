import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  Database, 
  LineChart, 
  Linkedin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Asset imports
import heroBg from "@/assets/images/hero-bg.png";
import team1 from "@assets/Imagine_prompt_paste_202601310038_1771667184111.jpeg";
import team2 from "@assets/WhatsApp_Image_2026-01-10_at_11.31.08_PM_1771667184112.jpeg";
import team3 from "@assets/WhatsApp_Image_2026-02-21_at_2.36.53_PM_1771667196398.jpeg";
import team4 from "@assets/IMG_0552.JPG_1771667211870.jpeg";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll be in touch within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  });

  return (
    <div className="min-h-screen bg-secondary/30 font-sans text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-primary">
                NorthBridge Data Solutions CMP
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-primary/80 hover:text-primary transition-colors">Services</a>
              <a href="#team" className="text-sm font-medium text-primary/80 hover:text-primary transition-colors">Team</a>
              <a href="#why-us" className="text-sm font-medium text-primary/80 hover:text-primary transition-colors">Why Us</a>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                <a href="#contact">Consultation</a>
              </Button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-primary">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#services" className="block px-3 py-2 text-base font-medium text-primary/80 hover:text-primary hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#team" className="block px-3 py-2 text-base font-medium text-primary/80 hover:text-primary hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>Team</a>
              <a href="#why-us" className="block px-3 py-2 text-base font-medium text-primary/80 hover:text-primary hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium text-primary/80 hover:text-primary hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary" id="home">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Accurate Data. <br/>
              <span className="text-blue-400">Qualified Leads.</span> <br/>
              Real Growth.
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              We empower B2B and B2C businesses to scale effortlessly with verified contact lists, strategic LinkedIn outreach, and comprehensive data solutions from NorthBridge Data Solutions CMP.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-14 px-8 text-lg shadow-lg shadow-blue-900/20" asChild>
                <a href="#contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions from NorthBridge Data Solutions CMP designed to fill your pipeline and streamline your operations.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Service 1 */}
            <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-secondary/50 border border-border hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <LineChart className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Lead Generation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Targeted B2B & B2C lead generation, comprehensive prospect research, and verified email list building tailored to your ideal customer profile.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-secondary/50 border border-border hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">LinkedIn Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Expert Sales Navigator management, automated outreach campaigns, and profile optimization to capture high-value professional leads.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeInUp} className="group p-8 rounded-2xl bg-secondary/50 border border-border hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-7 h-7 text-slate-700" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Data & Virtual Asst.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accurate data entry, CRM management, email verification, and dedicated virtual assistance to keep your business running smoothly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/30" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Why Partner With Us?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                NorthBridge Data Solutions CMP doesn't just provide lists; we provide growth opportunities. Our rigorous verification processes ensure you spend time closing deals, not bouncing emails.
              </p>
              
              <div className="space-y-4">
                {[
                  "99% Data Accuracy Guarantee",
                  "GDPR & CCPA Compliant Practices",
                  "Dedicated Account Managers",
                  "Scalable Solutions for Any Size Team"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-3xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border mt-8">
                  <div className="text-4xl font-heading font-bold text-blue-600 mb-2">500k+</div>
                  <div className="text-sm font-medium text-muted-foreground">Leads Generated</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                  <div className="text-4xl font-heading font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-sm font-medium text-muted-foreground">Client Retention</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                  <div className="text-4xl font-heading font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm font-medium text-muted-foreground">Dedicated Support</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border -mt-8">
                  <div className="text-4xl font-heading font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm font-medium text-muted-foreground">Industries Served</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Meet The Experts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The dedicated professionals at NorthBridge Data Solutions CMP driving data excellence and client success behind the scenes.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Team Member 1 */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-secondary shadow-lg group-hover:border-blue-100 transition-colors duration-300">
                <img src={team1} alt="Muhammad Ali Baig" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-heading font-bold">Muhammad Ali Baig</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">CEO & Founder</p>
              <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed">
                Strategic visionary leading data intelligence initiatives and growth strategies.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-secondary shadow-lg group-hover:border-blue-100 transition-colors duration-300">
                <img src={team2} alt="Rimsha Shamsheer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-heading font-bold">Rimsha Shamsheer</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">Operations Director</p>
              <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed">
                Expert in streamlining lead generation workflows and client relationship management.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-secondary shadow-lg group-hover:border-blue-100 transition-colors duration-300">
                <img src={team3} alt="Muhammad Moeen Baig" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-heading font-bold">Muhammad Moeen Baig</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">Technical Lead</p>
              <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed">
                Driving technical innovation in data verification and automated outreach systems.
              </p>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-secondary shadow-lg group-hover:border-blue-100 transition-colors duration-300">
                <img src={team4} alt="Ghufran Aziz" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-heading font-bold">Ghufran Aziz</h3>
              <p className="text-blue-600 text-sm font-medium mb-2">Data Analyst</p>
              <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed">
                Ensuring data quality and providing deep insights into prospect behavior.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden" id="contact">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to scale your outreach?</h2>
              <p className="text-slate-300 mb-10 text-lg">
                Let's discuss how NorthBridge Data Solutions CMP can build your pipeline. Fill out the form, and our team will be in touch within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Call Us Directly</p>
                    <p className="font-medium text-lg">+1 (800) 555-0199</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email Us</p>
                    <p className="font-medium text-lg">hello@northbridgedata.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Office</p>
                    <p className="font-medium text-lg">100 Tech Hub Blvd, Suite 400<br/>San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 text-primary shadow-2xl"
            >
              <h3 className="text-2xl font-heading font-bold mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={form.handleSubmit((data) => mutation.mutate(data))}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input {...form.register("firstName")} placeholder="John" className="bg-secondary/50 border-border/50 focus-visible:ring-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input {...form.register("lastName")} placeholder="Doe" className="bg-secondary/50 border-border/50 focus-visible:ring-blue-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Work Email</label>
                  <Input {...form.register("email")} type="email" placeholder="john@company.com" className="bg-secondary/50 border-border/50 focus-visible:ring-blue-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input {...form.register("companyName")} placeholder="Acme Corp" className="bg-secondary/50 border-border/50 focus-visible:ring-blue-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">How can we help?</label>
                  <Textarea {...form.register("message")} placeholder="Tell us about your lead generation goals..." className="min-h-[120px] bg-secondary/50 border-border/50 focus-visible:ring-blue-600" />
                </div>
                <Button 
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-md mt-2 rounded-xl"
                >
                  {mutation.isPending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Submit Request"
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1c] text-slate-400 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                NorthBridge Data Solutions CMP
              </span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} NorthBridge Data Solutions CMP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}