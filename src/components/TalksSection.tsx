
import { Calendar, MapPin, Video } from "lucide-react";

const TalksSection = () => {
  const talks = [
    {
      title: "The Challenges of Implementing AI in Clinical Settings",
      event: "International Conference on Medical Informatics",
      date: "November 2023",
      location: "Boston, MA",
      type: "Keynote Address",
      videoLink: "#"
    },
    {
      title: "Bridging the Gap: From Laboratory to Patient Care",
      event: "Clinical Translation Summit",
      date: "August 2023",
      location: "London, UK",
      type: "Panel Discussion",
      videoLink: "#"
    },
    {
      title: "Teaching Evidence-Based Medicine in the Digital Age",
      event: "Annual Medical Education Symposium",
      date: "May 2023",
      location: "Virtual",
      type: "Workshop",
      videoLink: "#"
    },
    {
      title: "Precision Medicine: Current Progress and Future Directions",
      event: "Healthcare Innovation Forum",
      date: "February 2023",
      location: "San Francisco, CA",
      type: "Featured Talk",
      videoLink: "#"
    }
  ];

  return (
    <section id="talks">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Talks & Presentations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and research findings with the broader academic and medical communities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {talks.map((talk, index) => (
            <div 
              key={index} 
              className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-teal" />
              <div className="p-6 pl-8">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-navy/10 text-navy">
                    {talk.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{talk.title}</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-teal" />
                    <span>{talk.event} • {talk.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-teal" />
                    <span>{talk.location}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <a 
                    href={talk.videoLink} 
                    className="inline-flex items-center gap-1 text-sm text-teal hover:text-navy transition-colors"
                  >
                    <Video className="h-4 w-4" />
                    <span>Watch Recording</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-navy/5 rounded-lg">
          <h3 className="text-2xl mb-6 text-center">Upcoming Events</h3>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="text-center">
                <div className="bg-navy text-white rounded-lg p-3 w-24">
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-sm">June</div>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold">Advances in Translational Medicine</h4>
                <p className="text-teal">World Medical Congress, Chicago</p>
                <p className="mt-2 text-muted-foreground">
                  A comprehensive overview of recent breakthroughs in translational medicine 
                  and their impact on patient care across various specialty areas.
                </p>
              </div>
              <div>
                <a 
                  href="#" 
                  className="inline-block px-4 py-2 text-sm bg-teal text-white rounded-lg hover:bg-teal/90 transition-colors"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalksSection;
