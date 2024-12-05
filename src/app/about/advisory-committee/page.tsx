import { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Shield, Star, Users, Crown, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Advisory Committee',
}

const advisoryCommittee = [
  { 
    title: "Chairman",
    icon: Crown,
    color: "bg-amber-100 text-amber-600",
    members: ["Prof. B. L. Deekshatulu, Distinguished Fellow, IETE"]
  },
  { 
    title: "Vice-Chairman",
    icon: Shield,
    color: "bg-purple-100 text-purple-600",
    members: [
      "Prof. S. Narayana, Past-President and Distinguished Fellow, IETE New Delhi",
      "Dr. BHVS Narayana Murthy, Director General, Missile Complex"
    ]
  },
  { 
    title: "Governing Council Members",
    icon: Star,
    color: "bg-blue-100 text-blue-600",
    members: [
      "Dr. V. Gunasekhar Reddy, Immediate Past President IETE, New Delhi",
      "Dr. K.Jaya Sankar, GC Member IETE, New Delhi",
      "Er. K.Gnaneshwar Rao, GC Member IETE, New Delhi",
      "Dr.K.Seetha Ram Babu, GC Member IETE, New Delhi(Org)."
    ]
  },
  { 
    title: "Members",
    icon: Users,
    color: "bg-green-100 text-green-600",
    members: [
      "Sri Mr. Jayesh Ranjan, Principal Secretary of the Industries & Commerce (I&C) and Information Technology (IT) Departments of the Telangana Government.",
      "Dr.G.Satheesh Reddy, former Scientific Advisor to Raksha Mantri (The Minister of Defennce)",
      "Dr.Srinivas, Distinguished Scientist, Director, DRDL Chandrayanagutta, Hyderabad",
      "Sri Srinivasa Rao, GM, BEL, Hyderabad",
      "Dr.Prakash Chowhan, Director, NRSC, Hyderabad",
      "Lt. Gen T S A Narayanan, Director, Commandant MSCME, Secunderabad",
      "Mr. Jagmohan Singh Sidana, Deputy Commandant & Chief Instructor, MSCME, Secunderabad",
      "Shri Anurag Kumar, Chairman & Mg.Director, ECIL, Hyderabad .",
      "Sri P.sudhakar, Former Chairman & Mg.Director, ECIL, Hyderabad",
      "Sri Chaganti Srinivas, Chief General Manager, BSNL, Hyderabad.",
      "Prof.B.S Murthy, Director, IIIT, Hyderabad",
      "Dr.M.Manzoor Hussain, Registrar, JNTH Hyderabad",
      "Dr.P J.Narayanan, Director, IIIT Hyderabad.",
      "Dr.Bayya Yegnanarayana, INSA Senior Scientist at IIIT Hyderabad.",
      "Prof. Dandeboina Ravinder, Vice Chancellor, Osmania University,Hyderabad",
      "Prof. Pappula Laxminarayana, Registrar, Osmania University, Hyderabad",
      "Shri. Anindya Biswas, Scientist 'H' & Director, Research Centre Imarat(RCI)",
      "Prof.P.Chandra Sekhar, Professor ECE, Vice Principal, College of Engineering, Osmania University",
      "N.K.Subramani, General Manager, NSIC Technical Service Centre, Hyderabad.",
      "Sri G A S Murthy, Distinguished Scientist & Former Director DRDL, Hyderabad.",
      "Smt.Geeta Varadan, Former Director, ADRIN, Secunderabad",
      "Sri. Sudhir Kumar, Director General IRISET, Secunderabad.",
      "Prof.P.Laksminarayana, Director, NERTU, Osmania University, Hyderabad.",
      "Dr. G Venkata Subbaiah, Chairman, IE(I), Hyderabad",
      "M V Padmanabhayya Senior Director ETDC Kamalanagar ECIL Post Hyderabad.",
      "Prof.K.Lal Kishore, Former Vice Chancellor, JNTU Ananthapur",
      "Dr. Y.Vijayalata, Chairman, IEEE Hyderabad Chapter",
      "Prof. Kishan Rao, Former Director of NIT.",
      "Er. K Subby Reddy, Past Chairman, IETE Hyderabad Centre",
      "Sri N V Ramana, Deputy Director General, Doordarshan Kendra, Hyderabad",
      "Dr. M.Lakshminarayana, Director R&D UTS, Hyderabad, Scientist 'H'(Rtd) DRDO.",
      "Prof.P.S.Sharma, Retired Principal, Auroras Engineering College, Bhuvanagiri",
      "Dr Buchi Narsimha, CSE Department, Osmania University, Hyderabad.",
      "Dr.A.Govardhan, Vice-Chancellor, IIIT, Basara."
    ]
  },
  { 
    title: "Convenor",
    icon: Briefcase,
    color: "bg-red-100 text-red-600",
    members: ["Prof.Nuli Namassivaya, Chairman, IETE Hyderabad Centre"]
  }
]

export default function AdvisoryCommitteePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5]">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 mt-24">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0A2E5C]">Advisory Committee</h1>
          <p className="text-gray-600 leading-relaxed">
            Our distinguished Advisory Committee comprises leading experts from academia, industry, and government, providing strategic guidance to advance IETE&apos;s mission and objectives.
          </p>
        </div>

        {/* Committee Sections */}
        <div className="space-y-8">
          {advisoryCommittee.map((section, index) => {
            const IconComponent = section.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${section.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <h2 className="text-2xl font-semibold ml-4 text-[#0A2E5C]">{section.title}</h2>
                  </div>
                  <div className="grid gap-4">
                    {section.members.map((member, memberIndex) => (
                      <div 
                        key={memberIndex}
                        className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <p className="text-gray-700">{member}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
