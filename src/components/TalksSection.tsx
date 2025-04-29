
import { Calendar, MapPin, Video } from "lucide-react";

const TalksSection = () => {
  const talks = [
    {
      title: "Deep learning for radiation therapy planning in head-and-neck cancer",
      event: "ESTRO Annual Congress",
      date: "May 2023",
      location: "Vienna, Austria",
      type: "Oral Presentation",
      videoLink: "#"
    },
    {
      title: "MR-Only Radiation Treatment Planning: Current Status and Future Directions",
      event: "MR in RT Symposium",
      date: "September 2022",
      location: "London, UK",
      type: "Invited Talk",
      videoLink: "#"
    },
    {
      title: "AI Applications in Radiation Oncology",
      event: "Dutch Society for Radiotherapy",
      date: "March 2022",
      location: "Utrecht, Netherlands",
      type: "Workshop",
      videoLink: "#"
    },
    {
      title: "Synthetic CT Generation Using Deep Learning",
      event: "Medical Imaging Conference",
      date: "October 2021",
      location: "Online",
      type: "Featured Talk",
      videoLink: "#"
    }
  ];

  return (
    <section id="talks">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Selected Talks</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recent presentations and invited lectures
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalksSection;
