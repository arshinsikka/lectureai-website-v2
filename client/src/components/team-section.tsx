import vidushiImage from "@assets/image_1751699357073.png";
import ishanImage from "@assets/image_1751699362464.png";
import arshinImage from "@assets/Arshin Sikka Linkedin Picture_1751699384805.jpg";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Vidushi Jaidka",
      role: "Data & Summarization Lead",
      major: "Data Science and Economics",
      description: "Specializes in information extraction and NLP-powered summarization pipelines, with a focus on education data.",
      image: vidushiImage,
      roleColor: "text-orange-500"
    },
    {
      name: "Ishan Agarwal",
      role: "Backend & Infrastructure Lead",
      major: "Computer Science",
      description: "Experienced in building robust backend systems for high-volume processing, cloud storage, and DevOps.",
      image: ishanImage,
      roleColor: "text-blue-800",
      imagePosition: "object-top"
    },
    {
      name: "Arshin Sikka",
      role: "AI & Systems Lead",
      major: "Computer Science and Innovation",
      description: "Leads the development of AI-driven academic transcription workflows, combining NLP, Zoom API integrations, and cloud orchestration.",
      image: arshinImage,
      roleColor: "text-orange-500"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our passionate team of NUS students combining diverse academic expertise with cutting-edge technology to revolutionize learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <img 
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className={`w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg group-hover:shadow-xl transition-shadow ${member.imagePosition || 'object-center'}`}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className={`${member.roleColor} font-medium mb-1`}>{member.role}</p>
              <p className="text-gray-500 text-sm mb-2"><span className="font-bold">{member.major} @ NUS</span></p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
