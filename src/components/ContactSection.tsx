
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMarkdownContent } from '@/utils/markdownLoader';

const ContactSection = () => {
  const { toast } = useToast();
  const { content, isLoading } = useMarkdownContent('/src/content/contact.md');
  
  // Parse contact info from markdown
  const parseContactInfo = () => {
    if (!content) return { email: '', phone: '', address: [] };
    
    const emailMatch = content.match(/\*\*Email\*\*:\s*([^\n]+)/) || [];
    const phoneMatch = content.match(/\*\*Phone\*\*:\s*([^\n]+)/) || [];
    const addressSection = content.split('**Address**:')[1] || '';
    const addressLines = addressSection.trim().split('\n').map(line => line.trim());
    
    return {
      email: emailMatch[1] || '',
      phone: phoneMatch[1] || '',
      address: addressLines.filter(Boolean)
    };
  };
  
  const { email, phone, address } = parseContactInfo();
  
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
            {isLoading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-7 bg-slate-200 rounded w-1/4 mb-4"></div>
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-slate-200 h-10 w-10 rounded-full"></div>
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-navy/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href={`mailto:${email}`} className="text-teal hover:underline">
                        {email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-navy/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">{phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-navy/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-navy" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        {address.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < address.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
