
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-lightGray">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contact me about research collaborations or speaking engagements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name" 
                  required 
                  className="bg-white"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="bg-white"
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  required 
                  className="bg-white"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={5} 
                  required 
                  className="bg-white"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-navy/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:m.maspero@umcutrecht.nl" className="text-teal hover:underline">
                      m.maspero@umcutrecht.nl
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-navy/10 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+31 (0)88 75 69400</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-navy/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      Imaging Division<br />
                      UMC Utrecht<br />
                      Heidelberglaan 100<br />
                      3584 CX Utrecht<br />
                      The Netherlands
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
