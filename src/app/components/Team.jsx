import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Sreyance Modi",
    title: "Founder",
    role: "Director",
    experience: "8+ years in implementing end to end Waste Management Solutions",
    imageUrl: "/Picture1.png"
  },
  {
    name: "Akshay Modi",
    title: "Co-Founder",
    role: "Director",
    experience: "10+ years in business development and sales",
    imageUrl: "/Picture2.png"
  },
  {
    name: "Dr. Siddhartha Singha",
    title: "Assistant Professor",
    role: "Advisor",
    experience: "School of Agro & Rural Technology",
    affiliation: "IIT, Guwahati",
    imageUrl: "/Picture2.png"
  }
]

export default function BorderedTeamCardComponent() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 text-center text-[#4e6d52]">Our Team</h2>
        <p className="text-2xl text-gray-600 mb-16 text-center">Driving innovation in waste management</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="overflow-hidden h-full border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300"
            >
              <CardContent className="p-8 flex flex-col h-full items-center">
                <Avatar className="w-40 h-40 mb-6">
                  <AvatarImage src={member.imageUrl} alt={member.name} className="object-cover" />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-grow flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center">{member.name}</h3>
                  <div className="flex justify-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-sm">{member.title}</Badge>
                    <Badge variant="outline" className="text-sm">{member.role}</Badge>
                  </div>
                  <p className="text-xl text-gray-700 mb-3 text-center leading-relaxed">{member.experience}</p>
                  {member.affiliation && (
                    <p className="text-xl text-gray-500 text-center mt-auto">{member.affiliation}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}