import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.organizationMember.deleteMany()

  await prisma.organizationMember.createMany({
    data: [
      {
        name: "Er. Nuli Namassivaya",
        role: "Chairman",
        imageUrl: "/images/chairman.jpg",
        bio: `Nuli Namassivaya born on 29th Sep., 1967 at Eluru, W.G.Dt. A.P. is highly motivated Teaching Professional, having more than three decades of Teaching Experience in Electronics, Communication, Computer and Electrical subjects.
He was responsible for obtaining grant of 7.2 lakhs from AICTE under MODROBS & established PCB Fabrication Lab.
He published 44 papers at International & National Journals & Conferences to his credit and out of 6 papers won Best Paper awards.`,
        order: 1,
      },
      {
        name: "Prof. K. Gnaneshwar Rao",
        role: "Immd. Past Chairman",
        imageUrl: "/images/pastchairman.jpg",
        bio: `Gnaneshwar Rao Kamtam holds B.Tech (ECE), M.Tech (CSc) and Pursuing PhD from Osmania University, Hyderabad.`,
        order: 2,
      },
      {
        name: "Shri. Ashwani Kumar Sangamker",
        role: "Hon. Secretary",
        imageUrl: "/images/secretary.jpg",
        order: 3,
      },
      {
        name: "Dr N Srinivasa Rao",
        role: "Hon. Treasurer",
        imageUrl: "/images/treasurer.jpeg",
        bio: `Dr Nukala Srinivasa Rao, born in 1962. BE (ECE) from OU and M. Tech, from REC Warangal, PhD in Electromagnetics from JNTUHyd.`,
        order: 4,
      },
      { name: "Dr S Arvind", 
        role: "EC - Member", 
        imageUrl: "/images/ecm1.jpg",
        bio : `An academician and administrator with social responsibility possessing 31 years of rich experience in teaching at various levels  
              Been on board of various committees in engineering institutes.
              Pursued B.E., M.Tech. and Ph.D. in Computer Science and Engineering, presented
              Published 54 papers in reputed National and International conferences and Journals including SCI and Scopus indexed.
              Chaired several sessions in international conferences.
              Recipient of state & district level awards for social service, best guide rewards from KSCST Raichur and IBM & Bites, Bangalore.`,
        order: 5,
      },
      { name: "Shri Dhiraj Kumar K. Deshpande", 
        role: "EC - Member", 
        imageUrl: "/images/ecm2.jpg",
        bio : `QUALIFICATION: 
                  B.E. (ELECTRONICS & COMMUNICATION ENGINEERING)
                  M.TECH.(VLSI SYSTEM DESIGN)
                  DESIGNATION: ASSOCIATE PROFESSOR
                  EXPERIENCE: 27 YEARS 7 MONTHS
                Papers published in proceedings of international seminars/conference: 03
                Papers published in proceedings of national seminars/conference: 07
                MEMBERS OF PROFESSIONAL BODIES:
                  1) FELLOW OF IETE(F233924)
                  2) LIFE MEMBER OF ISTE(LM 26891) 
                SERVED AS: EC MEMBER & HONORARY TREASURER GULBARGA SUB CENTRE`,
        order: 6,
      },
      { name: "Dr. A V Krishna Prasad", 
        role: "EC - Member", 
        imageUrl: "/images/ecm3.jpg",
        bio : `Dr. A V Krishna Prasad, M.Tech. (Computer Science and Engineering), JNTUH, Hyderabad. 
                Working as Associate Professor in IT Department, MVSR Engineering College, Hyderabad with 23 (+) years of teaching experience.
                Worked as Professor in Department of Computer Science and Engineering at KL University, Green fields, Vaddeswaram, Vijayawada for One Year (2015 & 2016)
                Recognized Research Supervisor for JNTUH, OU & KL U.
                Working as a Nomination Committee Member and Past Secretary for CSI (Computer Society of India) Hyderabad Chapter.
                Book under proposal with title "Innovative Research on IOT with Data Science and Machine Learning".
                Published a book with title "Exploring the convergence of Big Data with Internet of Things" as an Editor from IGI Global Publications. 
                Organized several workshops on Big Data Analytics using R under CSI - SIGBDA. 
                Delivered key note technical talks in National and International conferences. 
                Published research papers in 30 International Journals and 15 Conference Paper proceedings (6 International and 9 National conferences).`,
        order: 7,
      },
      { name: "Dr. P. Raj Reddy", 
        role: "EC - Member", 
        imageUrl: "/images/ecm4.jpg",
        bio : `Exp: 26 Years in Teaching & Admin Positions
                At present  working as Head & Prof  of Maths at CBIT
                Published 30 papers in various National / International journals and presented 50 papers in various conferences and also organized 05 conf / workshops / FDP sponsored by AICTE.
                Member in various bodies such as APSMS (Andhra Pradesh Mathematical Society)and Fellow IETE(Hyderabad Centre)`,
        order: 8,
      },
      { name: "Dr P A Harsha Vardhini", 
        role: "EC - Member", 
        imageUrl: "/images/ecm5.jpg",
        bio : "",
        order: 9,
      },
      { name: "Ms. C. V. Keerthi Latha", 
        role: "EC - Member", 
        imageUrl: "/images/ecm6.jpg",
        bio : `C.V.KEERTHI LATHA currently working as Assistant Professor in the department of Electronics and Communications Engineering in Stanley College of Engineering and Technology for Women.
                She completed her B.Tech from Vidya Jyothi Institute of Technology in 2004, and M.E in the stream of Digital Systems from Osmania University in 2013. She is pursuing her PhD(ECE) from Osmania University in Embedded system domain.
                Her area of interests is Digital circuits, Biomedical Signal Processing, Image processing, Embedded Systems.Presented a survey paper in ICPET - 2016 Conference on Brain MRIs.
                She conducted different workshops and FDPs in various domains.Attended a number of National and International seminars, conferences and workshops and published papers in reputed Journals.
                Totally she has 13 years of experience in Teaching UG and PG students.She guided 20 UG projects and 9 PG projects.
                She was awarded as best project guide in 2016. She is life member of IETE, and currently serving as EC member and Short Term Training Program Sub-Committee Chairman for IETE, Hyderabad Centre 2021 - 2022.`,
        order: 10,
      },
      { name: "Ms. T. Sandhya", 
        role: "EC - Member", 
        imageUrl: "/images/ecm7.jpg",
        bio : `Tuti Sandhya- Resource Person, Mahatma Gandhi National Council of Rural Education(MGNCRE), Co - Director Center for Engineering Education and Development, KGRCET
                Received Faculty Excellence Award on 05th September 2021 from Ed & Immigo Consultancy by Shri Naveen Mittal ji Commissioner Collegiate Education & Technical Education Government of Telangana.
                Established TLC (Teaching Learning Center) & CEED (Center for Engineering Education Development).
                Selected as Indo Universal Collaborative Committee for Engineering Education (IUCEE) Leader.Received the Title "International Engineering Educator ING.PAED. IGIP" fromInternational Society for Engineering Pedagogy
                Received Top Social Learner Award from Wiksate
                Received Certificate of Completion for IUCEE, International Engineering Educator Certification
                Published and Presented 22 Papers in IEEE xplore/ JEET /IJATES/ IJSEAT/World Engineering Education Forum
                Received an award "Achiever GENTLE", for Online Module preparation for 21st century Teaching and Learning from Inpods - IUCEE.`,
        order: 11,
      },
      { name: "Dr. V. Gunasekhar Reddy", 
        role: "President, New Delhi (2022-23)", 
        imageUrl: "/images/gcm1.jpg",
        bio : "",
        order: 12,
      },
      { name: "Dr. Niranjan Prasad", 
        role: "GC - Member( 2020-2023)", 
        imageUrl: "/images/gcm3.jpeg",
        bio : `Dr. Niranjan Prasad is presently working as Scientist-G (Level-14 equivalent to Joint Secretary) in prestigious DLRL Hyderabad Laboratory of DRDO under the Ministry of Defence, Govt. of India.
                He obtained his M.E. (ECE) with specialization in Microwave and Radar Engineering and PhD Degrees all from Osmania University, Hyderabad in the years 1997 and 2008 respectively.
                Dr.  Prasad since joining worked in the Design, Development, Integration and Evaluation of Active Integrated Antenna, Communication Electronic Warfare (EW) Antennas, Antennas for IFF Akash of Prestigious Missile Programme IGMDP.
                Later on he was instrumental in Designing and Developing Radar Jammer Transmitters and integrated Electronic Counter Measure Systems in the for various important DLRL Projects such as Deception Jammer of Project TEMPEST of Indian Air Force, Shipborne ECM System of Project ELLORA for SANGRAHA Programme of Indian Navy and vehicle mounted Integrated Radar EW System development under the SAMAYUKTA Programme of the Indian Army.
                Dr. Niranjan Prasad has been awarded Technology Group Awards for his significant contribution in the Design and Development of the EW Sub-Systems and for successful conduction of the Users Trials.
                He has authored more than 25 technical papers published in reputed National & International Journals and presented in Conferences in India and abroad. `,
        order: 13,
      },
      { name: "Prof. Baswaraj Gadgay", 
        role: "GC - Member (2020-2023)", 
        imageUrl: "/images/gcm4.jpg",
        bio : "",
        order: 14,
      },
      { name: "Dr. K Jaya Sankar", 
        role: "GC - Member(2021-2024)", 
        imageUrl: "/images/gcm5.jpg",
        bio : "",
        order: 15,
      },
      { 
        name: "Dr. K Seetha Ram Babu", 
        role: "GC - Member (Org.)(2021-2024)", 
        imageUrl: "/images/gcm6.jpg",
        bio: "",
        order: 16,
      },
    ]
  })

  await prisma.achievement.deleteMany()
  await prisma.achievement.createMany({
    data: [
      { 
        year: "2022-23", 
        title: "Receiving 1st Best Centre Award to IETE, Hyderabad",
        url: "https://www.ietehyd.org/images/IETEBESTAWARD.jpeg"
      },
      { 
        year: "2024-26", 
        title: "IETE Hyderabad Centre-Executive Members",
        url: "https://drive.google.com/file/d/1R-kX4KjhB5ub2fKHphWvLzJ5xEeDIduu/view"
      },
      { 
        year: "2023-24", 
        title:  "Senior Members Feliciation" ,
        url: "https://bitly.ws/32Fez"
      },
      { 
        year: "2022-23", 
        title: "Best ISF Awards",
        url: "https://drive.google.com/file/d/1jhu8co914a2kL0dEu-SKkvkOcqyHL66e/view"
      },
      { 
        year: "2024-25", 
        title: "IETE Students Day Winners List",
        url: "https://drive.google.com/file/d/1WQ84OSD9nc3yIDkVwfORpf3PbxNA813l/view"
      },
      { 
        year: "2024-25", 
        title: "National Science Day Winners List",
        url: "https://drive.google.com/file/d/1cc_7haEp_mOzvOoFPhd00a-ySKgbJKv3/view"
      },
    ]
  })

  // Clear existing student forums and coordinators
  await prisma.coordinator.deleteMany()
  await prisma.studentForum.deleteMany()

  // Seed student forums with coordinators
  const forums = [
    {
      name: "Maturi Venkata Subba Rao (MVSR) Engineering College",
      address: "Nadergul (P.O.), Balapur Mandal, Hyderabad – 501 510.",
      website: "www.mvsrec.edu.in",
      dateOfInauguration: "30/04/1998",
      coordinator: {
        name: "Er. Nuli Namassivaya",
        designation: "Asso. Professor, ECE Dept.",
        contact: "9866692214,9848038209",
        email: "nnamassivaya@rediffmail.com"
      }
    },
    {
      name: "Bhojreddy Engineering College for Women",
      address: "17-1-209/B, Vinay Nagar Colony, Hyderabad – 500 059.",
      website: "www.brecw.ac.in",
      dateOfInauguration: "12/09/2001",
      coordinator: {
        name: "RADHIKA. R",
        designation: "Associate Professor, Dept. of ECE",
        contact: "7396968605",
        phone: "24592400",
        fax: "24537281",
        email: "radhiece2022@gmail.com, principal@brecw.ac.in"
      }
    },
    {
        name: "Vardhaman College of Engineering",
        address: "Nanajipur Post, Kacharam Village, Shamshabad Mandal, Hyderabad – 501 218.",
        website: "www.vardhaman.org, www.vardhaman.ac.in",
        dateOfInauguration: "16/02/2004",
        coordinator: {
          name: "Dr. J. V. R. Ravindra",
          designation: "Principal",
          contact: "9502653333,08413-253335 / 253201",
          email: "principal@vardhaman.org, hodece@vardhaman.org, hathiram@vardhaman.org"
        },
        additionalContacts: [
          {
            name: "Dr. GAE Sathish Kumar",
            designation: "Head,ECE Dept.",
            contact: "9440092907"
          },
          {
            name: "Dr. Hathiram Nenavath",
            designation: "Associate Professor, ISF Coordinator",
            contact: "9000747143"
          }
        ]
      },
      {
        name: "G Narayanamma Institute of Technology and Science",
        address: "Shaikpet, Hyderabad – 500 008.",
        website: "www.gnits.ac.in",
        dateOfInauguration: "27/03/2004",
        coordinator: {
          name: "Dr. K.Ragini",
          designation: "Head ECE Dept.",
          contact: "9849627161",
          email: "ecehod@gnits.ac.in"
        },
        isfCoordinator: {
          name: "Y Rakesh Kumar",
          contact: "7207525875",
          email: "rakeshyacharam@gmail.com"
        }
      },
      {
        name: "JB Institute of Engg. & Technology",
        address: "Yenkapally, Moinabad Mandal, PO: Himayatnagar, Hyderabad – 500 075.",
        website: "www.jbiet.edu.in",
        dateOfInauguration: "03/04/2004",
        coordinator: {
          name: "Dr. Niraj Upadhayaya",
          designation: "Principal",
          contact: "08413 – 235755/235686, 9394753873",
          email: "principal@jbiet.edu.in, hodece@jbiet.edu.in",
          fax: "040 –23304036 / 918413 - 235753"
        },
        additionalContacts: [
          {
            name: "Rajkumar",
            designation: "Head, ECE Dept.",
            contact: "9177210108"
          }
        ]
      },
      {
        name: "Guru Nanak Dev. Engg. College",
        address: "Bidar",
        website: "www.gndec.ac.in",
        dateOfInauguration: "10/11/2004",
        coordinator: {
          name: "Dr. Sandeep Singh Gill",
          designation: "Professor & ECE-HOD",
          contact: "08482-226949 / 235214, 9441038972",
          fax: "08414-223952",
          email: "ssg@gndec.ac.in"
        }
      },
      {
        name: "Aurora's Engineering College",
        address: "Bhongur – 508 116.",
        website: "www.aurora.ac.in",
        coordinator: {
          name: "Srujan reddy",
          designation: "Head, Dept. of ECE",
          contact: "9100000014",
          email: "principal_62@rediffmail.com"
        }
      },
      {
        name: "Sreenidhi Institute of Science & Tech.",
        address: "Yamnampet, Ghatkesar Mandal, Hyderabad – 501 301.",
        website: "www.sreenidhi.edu.in",
        dateOfInauguration: "20.11.2013",
        coordinator: {
          name: "Dr. V. Vasudeva Rao",
          designation: "Principal",
          contact: "93967-96060 / 08415-223001/2/3, 9848718185",
          fax: "040-27640394",
          email: "info@sreenidhi.edu.in"
        },
        additionalContact: {
          name: "Sri G. Prasad Acharya",
          designation: "Asso. Professor, Dept. of ECE",
          contact: "9949937691",
          email: "gprasad04@gmail.com"
        }
      },
      {
        name: "Scient Institute of Engg. & Tech.",
        address: "Ibrahimpatnam, Hyderabad – 501 506.",
        website: "www.scientinst.ac.in",
        coordinator: {
          name: "Prof. V.V. Sastri",
          designation: "Principal",
          contact: "08414-223854/55, 224261",
          fax: "24737389",
          email: "scient_insteng@yahoo.co.in"
        }
      },
      {
        name: "DVR College of Engg. & Tech.",
        address: "Kashipur Village, Kandi, Sangareddy Mandal, Medak Dist-502 285.",
        website: "www.dvrcollege.com",
        coordinator: {
          name: "Prof. K.Subba Rao",
          designation: "Head, ECE Dept.",
          contact: "95-8455-231709 / 231742,  9989691545",
          fax: "08455-231709",
          email: "profrao99@gmail.com, principal@dvr.ac.in"
        }
      },
      {
        name: "Vijay Rural Engg. College",
        address: "Rochis Valley, Manikbhandar, Nizamabad.",
        website: "www.vrecedu.in",
        coordinator: {
          name: "Prof. Prasad Gupta",
          designation: "Head, ECE Dept.",
          contact: "08462-280156/7,280175,280342, 9848868032",
          fax: "08462-280158",
          email: "prasadgupta_tvs@yahoo.com, rathodmt@gmail.com, vrec.29.nzb@gmail.com"
        },
        additionalContact: {
          name: "Shri.Subhash Rathod",
          contact: "9491746466"
        }
      },
      {
        name: "Dr. VRK Women's College of Engg. & Tech.",
        address: "Aziz Nagar (V), Moinabad (M), RR Dist.",
        website: "www.drvrkwomenscollege.com",
        coordinator: {
          name: "The Principal",
          contact: "08413-235481/2, 235961/2",
          fax: "08413-235962",
          email: "po.vrkw@gmail.com"
        }
      },
      {
        name: "MLR Institute of Technology",
        address: "Laxman Reddy Avenue, Dundigal, Qutubullapur (M)., RR Dist., Hyd-500 043.",
        website: "www.mlrinstitutions.ac.in",
        dateOfInauguration: "20/02/2006",
        coordinator: {
          "name": "Dr Bittu Kumar",
          designation: "Associate Professor,ECE Dept.",
          contact: "8541826949"
        },
        additionalContact: {
          "name": "Mr.SVS.Prasad",
          designation: "Head, Dept.of.ECE",
          contact: "9440840483",
          email: "Kumarbittu135@gmail.com, hodece@mlrinstitutions.ac.in"
        }
      },
      {
        name: "Mahatma Gandhi Institute of Technology",
        address: "Chaitanya Bharathi PO, Gandipet, Hyderabad – 500 075.",
        website: "www.mgit.ac.in",
        dateOfInauguration: "16/09/2006",
        coordinator: {
          name: "Dr.S.P.Singh",
          designation: "Head,ECE Dept.",
          contact: "9441476214, 24193057/67",
          fax: "08413-232760, 233671",
          email: "singh_spgahlot@rediffmail.com, spsingh@mgit.ac.in"
        },
        isfCoordinator: {
          name: "Balaraju",
          contact: "9951992097"
        }
      },
      {
        name: "TRR College of Engg.",
        address: "TRR Nagar, Inole (V), Patancheru (M), Medak dist. 502 319.",
        website: "www.trrinstitutions.com",
        dateOfInauguration: "23/09/2006",
        coordinator: {
          name: "Mr. G.Rajender",
          designation: "ECE-HOD",
          contact: "9959050984",
          fax: "08455-288585 / 288587",
          email: "trrecehod@gmail.com"
        }
      },
      {
        name: "Sri Kottam Tulasi Reddy Memorial College of Engg.",
        address: "Knodair, Itikyal (M), Mahaboobnagar Dist. – 509 125.",
        website: "www.ktmc.in",
        dateOfInauguration: "30/03/2007",
        coordinator: {
          name: "Mr.C.Mallikarjuna",
          designation: "Head,ECE Dept",
          contact: "08518-234888, 9849987714",
          fax: "08518-249518",
          email: "kottamsociety@gmail.com"
        }
      },
      {
        name: "Aurora Scientific and Technological Institution",
        address: "Gagillapur (V), Qutubullapur (M),RR Dist., Hyderabad – 500 043.",
        website: "www.asti.ac.in",
        dateOfInauguration: "30/05/2007",
        coordinator: {
          name: "Dr. Brig.N.P.Sambhi",
          contact: "040-27666339, 08418-255333/15/19",
          fax: "08418-255315",
          email: "asti_pm@rediffmail.com"
        }
      },
      {
        name: "Geethanjali College of Engineering & Technology",
        address: "Cheryal (V), R,.R.Dist. - 501301",
        website: "www.geethanjaliinstitutions.com",
        dateOfInauguration: "20/09/2007",
        coordinator: {
          name: "The Principal",
          contact: "9849055449, 24221626, 32519687"
        },
        additionalContacts: [
          {
            name: "Ravinder Reddy",
            designation: "Chairman",
            contact: "9866395845"
          },
          {
            name: "Uday kumar",
            contact: "9912744988"
          },
          {
            name: "Dr Appala Raju Uppala",
            designation: "Associate Professor",
            contact: "9848888764",
            email: "uar77.ece@gcet.edu.in"
          }
        ]
      },
      {
        name: "Swami Vivekananda Inst. of Technology",
        address: "Mahabub College Campus,Patny Centre, Sarojini Devi Road, Near Clock Tower, Secunderabad – 500 003.",
        website: "www.sviet.ac.in",
        dateOfInauguration: "29/09/2007",
        coordinator: {
          name: "Prof. L. Anil chowdary",
          contact: "27717629, 9912719600, 9912206888",
          fax: "27802469",
          email: "anil_choudary@yahoo.com"
        },
        additionalContact: {
          name: "Mr.Rao",
          contact: "9866358271"
        }
      },
      {
        name: "Sree Vaageswari College of Engineering",
        address: "Beside LMD Colony Police Station, Karimnagar – 505 481.",
        website: "www.vaageswaricolleges.com",
        dateOfInauguration: "28/12/2007",
        coordinator: {
          name: "Dr.A.Anjaneyulu",
          designation: "Principal",
          contact: "9502588608",
          email: "vaageswari@gmail.com, principalum@gmail.com"
        }
      },
      {
        name: "Ellenki College of Engineering & Technology",
        address: "Patelguda (V), Near BHEL, Patancheru (M), Medak Dist. 502 319.",
        website: "www.ellenkicet.ac.in",
        dateOfInauguration: "28/01/2008",
        coordinator: {
          name: "Sravan Kumar",
          designation: "Head ECE Dept.",
          contact: "23025554/6 & 9703648797, 08457-226807, 226906"
        },
        isfCoordinator: {
          name: "D. Shekar",
          contact: "9030338881",
          email: "shekar.embedded@gmail.com"
        }
      },
      {
        name: "Vignan's Institute of Technology and Aeronautical Engineering",
        address: "Vignan Hills, Deshmukhi(V), Pochampalli (M), Nalgonda(Dist.) Hyderabad Nalgonda Telangana India 508284",
        website: "www.vignanitae.ac.in",
        dateOfInauguration: "04/04/2008",
        coordinator: {
          name: "Mr. S.S.G.N.Srinivasa Rao",
          designation: "Head, ECE Dept.",
          contact: "9866001997"
        }
      },
      {
        name: "Vignana Bharathi Institute of Technology",
        address: "Aushapur(V), Ghatkesar (M), R.R.Dist – 501 301.",
        website: "www.vbithyd.ac.in",
        dateOfInauguration: "21/04/2008",
        coordinator: {
          name: "Mr.B.Brahma Reddy",
          designation: "ECE-HOD",
          contact: "08415-200419",
          email: "principal@vbithyd.ac.in, reddybb@hotmail.com"
        },
        additionalContact: {
          name: "CH.Srikanth chary",
          contact: "9550021194"
        }
      },
      {
        name: "Aurora's Technological & Research Institute",
        address: "Parvathapur,Uppal, Hyderabad 500039.",
        website: "www.atri.edu.in",
        dateOfInauguration: "24/12/2008",
        coordinator: {
          name: "Mr.M Shravan Kumar Reddy",
          designation: "Head E.C.E Department",
          contact: "9100000024"
        },
        additionalContact: {
          name: "Mr. Md Nizamuddin Salman",
          contact: "9849549196"
        }
      },
      {
        name: "Institute of Aeronautical Engineering",
        address: "Dundigal (V), Quthbullapur(M), hyderabad - 500 043.",
        website: "www.iare.ac.in",
        dateOfInauguration: "10/01/2009",
        coordinator: {
          name: "Mr.Tanga Dori",
          designation: "ECE Dept.",
          contact: "08418-257181/82, 9985821457"
        },
        additionalContact: {
          name: "Dr. Mary swarna latha Gade",
          designation: "Assistant.Prof, ECE",
          contact: "7893430058",
          email: "vadrevu.vr@gmail.com, g.maryswarnalatha@iare.ac.in, info@iare.ac.in"
        }
      },
      {
        name: "Medha College of Engineering",
        address: "Laxmidevi Gudem, Bibinagar, Hyderabad  508 126.",
        website: "www.medhacollege.com",
        dateOfInauguration: "28/02/2009",
        coordinator: {
          name: "Mujeeb",
          designation: "Principal",
          contact: "9642226645"
        },
        additionalContact: {
          name: "Mr.Nagaraju",
          designation: "A.O",
          contact: "9491030513",
          email: "medha.college2007@gmail.com"
        }
      },
      {
        name: "Vasavi College of Engineering",
        address: "Ibrahimbagh,Vasavi college, Ibrahim Bagh, Hyderabad, Telangana- 500089",
        website: "www.vce.ac.in",
        dateOfInauguration: "25/07/2009",
        coordinator: {
          name: "Shri N.Abid Ali Khan",
          contact: "8897727547, 23513317",
          email: "abid.net@gmail.com"
        }
      },
      {
        name: "Bandara Srinivas Institute of Technology",
        address: "Gollapally (V), Chevella (M ) , R.R. dist - 501 503.",
        website: "www.bsit-hyderabad.com",
        dateOfInauguration: "22/08/2009",
        coordinator: {
          name: "Mr. Pradeep Kumar Reddy",
          designation: "Head,Dept.of.ECE.",
          contact: "8790070879, 08417-204453 / 204460 / 61/ 62",
          fax: "08417- 243332",
          email: "bsit999@gmail.com"
        }
      },
      {
        name: "Lords Institute of Engg. & Technology",
        address: "sy. No. 32, Himayatsagar, Golconda Fort, Hyderabad -500 008.",
        website: "www.lordsinstitute.in",
        dateOfInauguration: "22/08/2009",
        coordinator: {
          name: "Dr. Shaik Mahammad Rasool",
          designation: "Co-ordinator&Head",
          contact: "9640807201",
          email: "skmohammedrasool@lords.ac.in"
        }
      },
      {
        name: "Guru Nanak Institute of Technology",
        address: "Ibrahimpatnam, RR Dist., Hyderabad – 501 506.",
        website: "www.gnithyd.ac.in",
        dateOfInauguration: "15/09/2009",
        coordinator: {
          name: "Dr.Shatrughna Prasad Yadav",
          designation: "Professor,Dept.of.ECE",
          contact: "9228342939",
          email: "spyadav68@gmail.com"
        }
      },
      {
        name: "TKR College of Engineering & Technology",
        address: "Medbowli, Meerpet, Saroornagar, Hyderabad 500 079.",
        website: "www.tkrcet.ac.in",
        dateOfInauguration: "15/09/2009",
        coordinator: {
          name: "Ms. P. Sharmila Rani",
          designation: "Asst. Prof., ECE",
          contact: "65587536 / 65347536, 91773 48818",
          fax: "24094567",
          email: "sharmilakanchi@gmail.com"
        }
      },
      {
        name: "Vidya Jyothi Institute of Technology",
        address: "Aziz Nagar, CB Post, Hyderabad - 500075.",
        website: "www.vjit.info",
        dateOfInauguration: "19/09/2009",
        coordinator: {
          name: "Dr.M.Rajendra Prasad",
          designation: "Head ECE",
          contact: "9985637983",
          email: "ecehod@vjit.ac.in"
        },
        isfCoordinator: {
          name: "G. Parameshwar",
          designation: "Asst.Prof & ISF Coordinator",
          contact: "9908644746",
          email: "paramesh.gujjula@gmail.com"
        }
      },
      {
        name: "Gokaraju Rangaraju Institute of Engineering and Technology",
        address: "Bachupally, Kukatpally Hyderabad-500 072.",
        website: "www.griet.ac.in",
        dateOfInauguration: "11/01/2010",
        coordinator: {
          name: "Dr.J.Praveen",
          designation: "Principal",
          contact: "040-65864440/1",
          fax: "040-2340860",
          email: "info@griet.ac.in, info@gokaraju.org"
        },
        additionalContact: {
          name: "Dr. B Anil",
          contact: "9985054084"
        }
      },
      {
        name: "Malla Reddy College of Engineering & Technology",
        address: "Maisammaguda, Dhulapally Kompally, Medchal, Secunderabad - 14.",
        website: "www.mallareddyinstitutions.com",
        dateOfInauguration: "23/01/2010",
        coordinator: {
          name: "Dr. V. S. K. Reddy",
          designation: "Head ECE dept",
          contact: "94407 90760, 64634237,23792146",
          email: "mrcet2004@gmail.com, mrcet2004@rediffmail.com"
        }
      },
      {
        name: "Madhira Institute Of Technology & Sciences(MITS)",
        address: "Madhira Nagar, Paleannaram(V), Chilukuru Mandal, Kodad, Nalgonda Dist. - 508206.",
        website: "www.mitskodad.ac.in",
        dateOfInauguration: "08/02/2010",
        coordinator: {
          name: "Mr. Devi Reddy. Venkata Rami Reddy",
          designation: "Head,Assoc.Prof, ECE",
          contact: "9392683713"
        },
        additionalContact: {
          name: "Asst. Prof. Mr. Manohar",
          contact: "08683-216024, 9290309794, 9391352677, 8498053380",
          email: "mits_g7@yahoo.co.in, manohar646@gmail.com"
        }
      },
      {
        name: "VNR Vignana Jyothi Institute of Engineering & Technology",
        address: "Batchupally Hyderabad- 500 072,Rangareddy Dt.",
        website: "www.vnrvjiet.ac.in",
        dateOfInauguration: "06/03/2010",
        coordinator: {
          name: "Y Padma Sai",
          designation: "Prof & HOD of ECE",
          contact: "040 - 23042758/59/60, 9000037660",
          email: "ypadmasai@gmail.com"
        },
        additionalContacts: [
          {
            name: "Dr.V.Krishnasree",
            designation: "Assoc.Professor",
            contact: "9848054170",
            email: "krishnasree_v@vnrvjiet.in"
          },
          {
            name: "L.Dharma Teja",
            contact: "9866907866",
            email: "dharmateja_v@vnrvjiet.in"
          }
        ]
      },
      {
        name: "Joginapally B R Engineering College",
        address: "Survey No. 156 To 162, Yenkapally village, Moinabad Mandal, Hyderabad, Telangana 500075",
        website: "www.jbrec.edu.in",
        dateOfInauguration: "13/03/2010",
        coordinator: {
          name: "P.Veernath",
          designation: "Associate Prof ECE & ISF Coordinator",
          contact: "7702735569",
          email: "veeru96@gmail.com, principal@jbrec.edu.in"
        }
      },
      {
        name: "Royal Institute of Technology & Science",
        address: "Damergidda (V), Chevella (M), Rangareddy Dist. - 501503",
        website: "www.ritsengg.com",
        dateOfInauguration: "23/03/2010",
        coordinator: {
          name: "Mr. Mujeebuddin",
          designation: "Prof. Co-Ord. of M.Tech Programme",
          contact: "9177121617, 08417-243151/251, 08790393627",
          email: "mujeebqd@yahoo.com"
        }
      },
      {
        name: "Holy Mary Institute of Technology",
        address: "Bogaram (V), Keesara (M), Rangareddy Dist. -501301",
        website: "www.hitscolleges.com",
        dateOfInauguration: "21/08/2010",
        coordinator: {
          name: "Dr. N. Subhash Chandra",
          designation: "Principal",
          contact: "9848511063",
          email: "principalhitscoe@gmail.com"
        }
      },
      {
        name: "Turbomachinery Institute of Technology & Science",
        address: "Indresham (V), Patancheru (M), Hyderabad - 500319.",
        website: "www.tits.ac.in",
        dateOfInauguration: "20/10/2010",
        coordinator: {
          name: "V.Rajesh",
          contact: "08455-200691, 9490730575,9666959466, 8686991304",
          email: "rajesh.v435@gmail.com, tists.ecehod@gmail.com"
        }
      },
      {
        name: "Sri Venkateswara Engineering College",
        address: "Suryapet, Nalgonda Dist.(A.P)- 508213.",
        website: "www.sves-srpt.ac.in/",
        dateOfInauguration: "18/12/2010",
        coordinator: {
          name: "Dr. S. Nageswara Rao",
          designation: "Associate Prof., Dept. ECE",
          contact: "08684-253947, 9949004489",
          email: "nag8rao@gmail.com"
        },
        additionalContact: {
          name: "Mr.E.Narendra",
          designation: "Head,ECE Dept.",
          contact: "9440409134",
          email: "narendraeluri@gmail.com, svengcol@hotmail.com",
          fax: "08684-253948"
        }
      },
      {
        name: "Maheshwara Institute of Technology (MIT)",
        address: "Isnapur X Road, Chitkul Village, Patancheru, Medak District -502307",
        website: "www.mith.ac.in/",
        dateOfInauguration: "28/12/2010",
        coordinator: {
          name: "Mr.K.Prabhu",
          designation: "Head,ECE Dept.",
          contact: "08455-200091/92/93, 9441678623",
          email: "principal_mit@yahoo.com"
        }
      },
      {
        name: "Brilliant Institute of Engineering & Technology",
        address: "Abdullapur (V), Hayathnagar (M), R.R. Dist. 501 505.",
        website: "www.b-iet.ac.in",
        dateOfInauguration: "28.02.2011",
        coordinator: {
          name: "Prof. V. Anil Kumar",
          designation: "Head, Dept. of ECE",
          contact: "9849079734, 919160020784",
          email: "anil2siddu@yahoo.com"
        }
      },
      {
        name: "Malla Reddy Engg. College for Women",
        address: "Maisammaguda, Dhulapally (Post Via Hakimpet), Secunderabad – 500 014.",
        website: "www.mallareddyecw.com/",
        dateOfInauguration: "05.03.2011",
        coordinator: {
          name: "Mr. K.Niranjan Reddy",
          designation: "ECE-HOD",
          contact: "9000722030, 64631993 & 64631994",
          email: "nianreddy@gmail.com"
        }
      },
      {
        name: "CVR College of Engineering",
        address: "Vastunagar, Mangalpalli (V), Ibrahimpatnam (M), R.R. Dist. 510510.",
        website: "www.cvr.ac.in",
        dateOfInauguration: "12.03.2011",
        coordinator: {
          name: "G.Vijaya Nirmala",
          designation: "Sr.Assistant Professor, ECE",
          contact: "8328381500, 9966968433",
          email: "viyaya.4b8@gmail.com, principal@cvr.ac.in"
        }
      },
      {
        name: "Keshav Memorial Institute of Technology",
        address: "Narayanaguda, Hyderabad – 500029",
        website: "www.kmit.in",
        dateOfInauguration: "26.03.2011",
        coordinator: {
          name: "Shri Latkar",
          contact: "9440759420",
          email: "dvlatkar@yahoo.com"
        }
      },
      {
        name: "Malla Reddy Engg. College",
        address: "Maisammaguda, Dhulapally (Post via Hakimpet), Secunderabad – 500 014",
        website: "www.mrec.ac.in",
        dateOfInauguration: "30.07.2011",
        coordinator: {
          name: "Prof. Ashok Babu",
          designation: "Assoc.Prof. ECE Dept.",
          contact: "9848898290",
          email: "ashokbabup2@gmail.com"
        }
      },
      {
        name: "Sridevi Women's Engineering College",
        address: "Vattinagulapally, Near Wipro Gopannapally, Gandipet, Hyderabad - 500 075.",
        website: "www.srideviengg.com",
        dateOfInauguration: "09.10.2010",
        coordinator: {
          name: "Dr.B.L Malleswari",
          designation: "Principal",
          contact: "958413-234054, 958413-234333"
        },
        additionalContact: {
          name: "Mrs.Maya S Patil",
          designation: "Prof.ECE Dept.",
          contact: "9885648148",
          email: "mayasuma2003@gmail.com, srideviengg@rediffmail.com"
        }
      },
      {
        name: "Vidya Vikas Institute of Technology",
        address: "Chevella, Rangareddy Dist - 510 503.",
        website: "www.vvit.in",
        dateOfInauguration: "24.08.2011",
        coordinator: {
          name: "The Vice-Principal",
          contact: "9246545362, 8008885731",
          fax: "23353428",
          email: "principal_vvit@yahoo.co.in"
        }
      },
      {
        name: "MJ College of Engg. & Tech.",
        address: "Mount Pleasant, 8-2-249, Rd.No.3, P.O.Box No.14, Banjara Hills, Hyd–500034",
        website: "www.mjcollege.ac.in",
        dateOfInauguration: "20.10.2011",
        coordinator: {
          name: "Ms. Ayesha Naaz",
          contact: "9959129564",
          fax: "23353428",
          email: "principal.mjcet@gmail.com, principal@mjcollege.ac.in"
        }
      },
      {
        name: "Anurag Group of Institution Formerly CVSR College of Engineering College",
        address: "Venkatapur(V), Ghatkesar(M), RR Dist.",
        website: "www.cvsr.ac.in",
        dateOfInauguration: "14.02.2012",
        coordinator: {
          name: "Prof. J.V.Sharma",
          designation: "ECE-HOD",
          contact: "08415-255309, 8499953666, 8499963666",
          email: "jv_sharma@yahoo.com, principal@cvsr.ac.in, info@cvsr.ac.in"
        }
      },
      {
        name: "Gitam University Hyderabad Campus",
        website: "www.gitam.edu",
        dateOfInauguration: "18.02.2012",
        coordinator: {
          name: "Mr Md Masood Ahmed",
          designation: "Assistant professor, ECE Dept.",
          contact: "9866700969, 08455-220556/57/58",
          fax: "220046",
          email: "masoodahmad80@yahoo.co.in"
        }
      },
      {
        name: "Jyothishmathi Institute of Technology Science",
        address: "Turkapally (V),Shamirpet(M), RR Dist-500 087",
        website: "www.jcetech.in",
        dateOfInauguration: "01.03.2012",
        coordinator: {
          name: "Principal",
          contact: "9849302525, 8897111222",
          fax: "08418-273125",
          email: "principal@jcetech.in, jcetech@yahoo.co.in"
        }
      },
      {
        name: "Narsimha Reddy Engineering College",
        address: "Survey No. 518, Hanuman Temple Rd, Maisammaguda, Kompally, Secunderabad, Telangana 500100",
        website: "www.nrcmec.org",
        dateOfInauguration: "09.03.2012",
        coordinator: {
          name: "A. Veera babu",
          designation: "Asst.prof & ISF Coordinator",
          contact: "9676999590,9949984994 & 040-23792454",
          email: "nrengineeringcollege@gmail.com"
        }
      },
      {
        name: "Vivekananda Inst of Tech.& Scince",
        address: "Opp: Housing Board colony, By-Pass Road, Karimnagar-505001",
        website: "www.vits.ac.in",
        dateOfInauguration: "20.03.2012",
        coordinator: {
          name: "M.Praveen Kumar",
          designation: "HOD ECE",
          contact: "9704387060, 99515 48543,0878-6503861, 2278333",
          fax: "0878-2279181",
          email: "praveenkumarjw@gmail.com, principal_vits@yahoo.co.in"
        }
      },
      {
        name: "vignan institute of technology & science (VITS)",
        address: "Near Ramoji film city, Deshmuki Village, Yadadri, Bhuvanagiri, Telangana 508284.",
        website: "www.vignanits.ac.in",
        dateOfInauguration: "03/08/12",
        coordinator: {
          name: "Prof Ms B.VijayaLaxmi",
          designation: "Assoc. Professor",
          contact: "9505949113"
        },
        additionalContact: {
          name: "Er. N Dinesh Kumar",
          designation: "ECE-HOD",
          contact: "9440076901",
          email: "dinuhai@yahoo.co.in, nalidinesh@yahoo.co.in, laxmi214@yahoo.co.in"
        }
      },
      {
        name: "Mahaveer institute of science and technology",
        address: "Vyasapuri, Bandlaguda,Kesavgiri(p), Hyderabad -500005",
        website: "www.mist.ac.in",
        dateOfInauguration: "10/09/12",
        coordinator: {
          name: "Dr K.S.S.N. Reddy",
          designation: "Principal",
          contact: "2002 0772, 2002 0773, 6459 3899, 99899 99708.",
          email: "e3hod.ece@gmail.com, principal.mahaveer@gmail.com drksssnreddy@gmail.com"
        }
      },
      {
        name: "CMR College of Engineering and technology",
        address: "Survey No. 69, Medchal Road, Kandlakoya, Village, Hyderabad, Telangana 501401.",
        website: "www.cmrcet.org",
        dateOfInauguration: "15.09.2012",
        coordinator: {
          name: "Dr M Nagaraju Naik",
          designation: "Professor",
          contact: "08418 200699/200537, 9441809595",
          email: "nagarajunaik1976@cmrcet.org, hodece@cmrcet.org"
        }
      },
      {
        name: "Avanthi Institute of engg & Tech",
        address: "Gunthapally (V), Hayathnagar (M) Near Ramoji Film city R.R.Dist, Hyd-501 512",
        website: "www.avanthienggcollege.org",
        dateOfInauguration: "15.09.2012",
        coordinator: {
          name: "Shri V R K Sastry",
          designation: "Prinicpal",
          contact: "08415-329455/329993/ 273122, 9866664631, 9704755509"
        },
        isfCoordinator: {
          name: "Dr.S.Kishore Reddy",
          designation: "HOD & ISF Coordinator",
          contact: "9490407807,9490407827",
          email: "principal_aiet@yahoo.com, ecehod.aiet@gmail.com"
        }
      },
      {
        name: "Anurag College of Engineering",
        address: "Aushapur (V), Ghatkesar (M), R.R.Dist., Hyderabad - 501 301.",
        website: "www.anuraghyd.ac.in",
        dateOfInauguration: "27.12.2012",
        coordinator: {
          name: "Prof. A Radhika",
          designation: "HOD, ECE Dept",
          contact: "9347008709",
          email: "radhialahari@gmail.com, ecehod.pq@gmail.com"
        }
      },
      {
        name: "Abhinav Hi-Tech College of Engineering",
        address: "Gandipet, Himayatnagar, C.B. Post, Hyderabad - 500075.",
        website: "www.htec.ac.in",
        dateOfInauguration: "07.01.2013",
        coordinator: {
          name: "Mr.S.K.M.Singh",
          designation: "Head,ECE Dept.",
          contact: "9849554565, 7386437388",
          email: "khamesingh@gmail.com, hitech_enggcollege@yahoo.co.in"
        }
      },
      {
        name: "Sree Dattha Institute of Engineering & Science",
        address: "Sagar Road, Sheriguda, Ibrahimpatnam, R.R.Dist – 501 510.",
        website: "www.sreedattha.ac.in",
        dateOfInauguration: "04.02.2013",
        coordinator: {
          name: "Prof. J. Ranga",
          designation: "HoD, EEE Dept.",
          contact: "9441676834 / 8801099910",
          email: "jarabalaranga@gmail.com"
        }
      },
      {
        name: "Sri Indu College of Engineering",
        address: "Sheriguda (V), Ibrahimpatnam, R.R.Dist – 501 510",
        website: "www.sriindugroup.org",
        dateOfInauguration: "23.03.2013",
        coordinator: {
          name: "K.Ashok Babu",
          designation: "Dept. of ECE.",
          contact: "9347054999"
        },
        additionalContact: {
          name: "Mr.Suresh",
          contact: "9894514513",
          email: "sriinduprincipal@gmail.com"
        }
      },
      {
        name: "BVRIT Hyderabad College of Engineering for Women",
        address: "8-5/4, Rajiv Gandhi Nagar, Nizampet Road, Bachupally, Hyderabad – 500 090.",
        website: "www.bvrithyderabad.edu.in",
        dateOfInauguration: "24.09.2013",
        coordinator: {
          name: "Thottempudi Pardhu",
          designation: "Assistant Professor, ECE Dept",
          contact: "9000484239",
          email: "pardhu.t@bvrithyderabad.edu.in"
        }
      },
      {
        name: "Nalla Narsimha Reddy Education Society's Group of Institutions",
        address: "Korremula 'X' Road, Via Narapally, Chowdariguda (Vill), Ghatkesar (Mandal), Medchal (Dist), Hyderabad. - 500088",
        website: "www.nnres.org",
        dateOfInauguration: "09.10.2013",
        coordinator: {
          name: "Dr.C.V. Krishna Reddy",
          contact: "9989139469",
          email: "cvkreddy2@gmail.com"
        },
        isfCoordinator: {
          name: "Dr.B.Hari Prasad Naik",
          designation: "Assoc.Prof.",
          contact: "9666030947"
        }
    },
    {
        name: "Malla Reddy Engineering College & Management Sciences",
        address: "Istapur, Hamlet of Medchal (V & M), R.R.Dist. – 501 401.",
        website: "www.mrem.in",
        dateOfInauguration: "22.02.2014",
        isfCoordinator: {
          name: "Col. N.C. Pant",
          contact: "9395172899",
          email: "ncpant50@rediffmail.com"
        }
      },
    {
        name: "Padmasri Dr. B V Raju Institute of Technology",
        address: "Vishnupur, Narsapur, Medak Dist. – 502 313.",
        website: "www.bvrit.ac.in",
        dateOfInauguration: "26.02.2014",
        coordinator: {
          name: "Mr. Kausalya Nandan",
          designation: "Asst. Professor, ECE Dept.",
          contact: "9966635305",
          email: "kausalya.nandan@bvrit.ac.in, prabhakar.kapula@bvrit.ac.in"
        }
    },
    {
        name: "RRS College of Engineering & Technology",
        address: "Muthangi (Vill), Patancheru (Mdl), Medak District-502300",
        website: "www.rrscet.edu.in",
        dateOfInauguration: "26.02.2014",
        coordinator: {
          name: "Dr. Shaik Meeravali",
          designation: "Head, ECE Dept.",
          contact: "9849115045",
          email: "shaik5045@gmail.com"
        }
    },
    {
        name: "Matrusri Engineering College",
        address: "#16-1-486, Saidabad, Hyderabad - 500059.",
        website: "www.matrusri.edu.in",
        dateOfInauguration: "25.01.2014",
        coordinator: {
          name: "Mr.V.Karunakar Reddy",
          designation: "Asst.Prof.,ECE Dept.",
          contact: "9885167604, 91-40-24072764",
          email: "karuna0203@gmail.com"
        }
    },
    {
        name: "St.Martin's Engineering College",
        address: "Sy. No.98, Dulapally, Near Kompally, Secunderabad, Qutubullapur, Hyderabad, Telangana - 500014.",
        website: "www.smec.ac.in",
        dateOfInauguration: "25.03.2015",
        coordinator: {
          name: "Mr.K.Yadaiah",
          designation: "Head, ECE Dept.",
          contact: "080089 25999, 8008333870",
          email: "yadesh.k@gmail.com, principal.smec@gmail.com"
        }
    },
    {
        name: "Stanley College of Engineering & Technology for Women",
        address: "Chapel Road, Abids, Hyderabad - 500 001.",
        website: "www.stanley.edu.in",
        dateOfInauguration: "11.09.2015",
        coordinator: {
          name: "C.V.Keerthi Latha",
          designation: "Asst. Prof of ECE & ISF Coordinator",
          contact: "9246288398",
          email: "dkeerthilatha@stanley.edu.in"
        }
    },
    {
        name: "CMR Engineering College",
        address: "Kandlakoya(v), Medchal Road, Hyderabad-501401, Telangana-India.",
        website: "www.cmrec.ac.in",
        dateOfInauguration: "25.03.2015",
        coordinator: {
          name: "Prof.M.Vijay Karthik",
          contact: "08418-200037, 8341960230",
          email: "mvk291085@gmail.com, principal.cmrec@gmail.com"
        }
    },
    {
        name: "K G Reddy College of Engineering & Technology",
        address: "Chilkur Village, Moinabad Mandal Rangareddy District - 501 504.",
        website: "www.kgr.ac.in",
        dateOfInauguration: "23.12.2015",
        coordinator: {
          name: "Dr.D.Chandraprakash",
          designation: "Assoc.Prof & ISF Coordinator",
          contact: "8639632804",
          email: "dcprakash99@gmail.com"
        }
    },
    {
        name: "AVN Institute of Engineering and Technology - [AVNIET]",
        address: "Ibrahimpatnam , Ramdas Pally, Hyderabad, Rangareddy District - 501510.",
        website: "www.avniet.ac.in",
        dateOfInauguration: "03.08.2018",
        coordinator: {
          name: "Mrs. B.Mamatha",
          designation: "ISF Coordinator & Assistant Professor",
          contact: "8985848229",
          email: "mamathab@avniet.ac.in"
        }
    },
    {
        name: "Sphoorthy Engineering College",
        address: "Nadargul Village,Saroornagar Mandal Hyderabad,Rangareddy District - 501510",
        website: "www.sphoorthyengg.ac.in",
        coordinator: {
          name: "Y.Priya",
          designation: "ISF Coordinator",
          contact: "8897521876",
          email: "yarrampriya@gmail.com"
        }
    },
    {
        name: "Siddhartha Insitute of Engg & Technology",
        address: "Ibrahimpatnam, Hyderabad, Telangana 501506",
        website: "www.siddhartha.ac.in",
        coordinator: {
          name: "R. Vaishnavi",
          designation: "ISF Coordinator",
          contact: "9494267005"
        },
        additionalContact: {
          name: "SubbaRao",
          designation: "ECE HOD",
          contact: "9966779182",
          email: "subbu.dasari@gmail.com"
        }
    },
    {
        name: "Bharat Institute of Engineering & Technology",
        address: "Mangalpally, Ibrahimpatanam, Hyderabad,Rangareddy District - 501510",
        website: "www.biet.ac.in",
        coordinator: {
          name: "Mr. Chandika Mohan Babu",
          designation: "Asst.Prof & ISF Coordinator",
          contact: "9915549876"
        },
        additionalContact: {
          name: "Prof.G.Kumaraswamy Rao",
          designation: "ECE HOD",
          contact: "9440881501",
          email: "rao gksdlrldrdo@yahoo.co.in"
        }
    },
    {
        name: "St.Peters Engineering College",
        address: "Dullapally, Maisammaguda, Medchal, Hyderabad, Telangana 500043",
        website: "www.stpetershyd.com",
        coordinator: {
          name: "Dr. I. Sharath Chandra",
          designation: "ECE HOD",
          contact: "789394000",
          email: "hod.ece@stpetershyd.com"
        },
        isfCoordinator: {
          name: "Hemalatha Dalmia",
          designation: "Asst.Prof",
          contact: "9014224949",
          email: "dhemlata@stpetershyd.com"
        }
    },
    {
        name: "Nalla Malla Reddy Engineering College",
        address: "Ghatkesar Mandal, Medchal, Hyderabad,Telangana 500088",
        website: "www.nmrec.edu.in",
        dateOfInauguration: "18.03.2015",
        coordinator: {
          name: "Mrs.T.Rajani",
          designation: "ECE Dept, Associate Professor",
          contact: "8978899466",
          email: "rajani.ece@nmrec.edu.in"
        },
        isfCoordinator: {
          name: "K. Shiva Prasad",
          contact: "9032873122",
          email: "shivaprasad.ece@nmrec.edu.in"
        }
    },
    {
        name: "Princeton Engineering College",
        address: "Ghatkesar Mandal, Medchal Rd, Ankushapur,Ranga Reddi District Telangana 501301",
        website: "www.pcet.co.in",
        coordinator: {
          name: "Krishnamurthy",
          designation: "ECE HOD",
          contact: "9908224092"
        }
    },
    {
        name: "CMR Technical Campus",
        address: "Medchal, Hyderabad, Telangana 501401",
        website: "www.cmrtc.ac.in",
        coordinator: {
          name: "S.Sumalatha",
          contact: "7330821130",
          email: "sumalathakiran84@gmail.com"
        }
    },
    {
        name: "Vignan's Institute of Management and Technology for Women",
        address: "Ghatkesar Kondapur, Telangana 501301",
        website: "www.vmtw.in",
        coordinator: {
          name: "SUNILKUMAR J",
          designation: "ISF Coordinator",
          contact: "8374717668"
        }
    },
    {
        name: "DRK College of Engineering and Technology",
        address: "Bowrampet Quthbullapur, Hyderabad, Telangana 500043",
        website: "www.drkcet.edu.in",
        coordinator: {
          name: "V.Renuka",
          designation: "ISF Coordinator & HOD",
          contact: "9553972999",
          email: "renuka.sambhangi@gmail.com"
        }
    },
    {
        name: "Ashoka Institute of Engineering & Technology",
        address: "NH-65,Malkapur Village Choutuppal Mandal,Yadadri Bhuvanagiri District, Telangana - 508252",
        website: "ashoka.ac.in",
        dateOfInauguration: "08.01.2020",
        coordinator: {
          name: "Dr.Shubham Tayal",
          designation: "ISF Coordinator",
          contact: "8901224654",
          email: "shubham@ashoka.ac.in"
        }
      },
      {
        name: "Chaitanya Bharathi Institute of Technology [CBIT]",
        address: "Gandipet, Hyderabad Telangana 500075",
        website: "www.cbit.ac.in",
        dateOfInauguration: "14.02.2020",
        coordinator: {
          name: "T.Sridher",
          designation: "Assistant Professor, ECE Department",
          contact: "8801206497",
          email: "tsridhar_ece@cbit.co.in"
        },
        additionalContact: {
          name: "Dr. B.Neeraja",
          designation: "Assistant Professor ECE Department",
          contact: "6309653729",
          email: "bneeraja_ece@cbit.ac.in"
        }
      },
      {
        name: "Guru Nanak Institutions Technical Campus (GNITC)",
        address: "Nagarjuna Sagar Road, Khanapur Ibrahimpatnam, Telangana 501506",
        website: "www.gniindia.org",
        dateOfInauguration: "03.02.2020",
        coordinator: {
          name: "Dr. S.J.Sugumar",
          designation: "ISF Coordinator, Professor",
          contact: "9133163366",
          email: "sjsgnitc@gmail.com"
        }
      },
      {
        name: "Teegala Krishna Reddy Engineering College (TKREC)",
        address: "Medbowli,Meerpet,Saroornagar,Hyderabad, Telangana 500097",
        website: "www.tkrec.ac.in",
        dateOfInauguration: "28.01.2021",
        coordinator: {
          name: "Dr. D Vemana Chary",
          designation: "ISF Coordinator, Professor",
          contact: "9347279139",
          email: "vemanad@tkrec.ac.in,vemanad@gmail.com"
        }
      },
      {
        name: "JNTUH College of Engineering (AUTONOMOUS)",
        address: "Kukatpally, Hyderabad-500085,Telangana, India.",
        website: "www.jntuhceh.ac.in",
        email: "info.ceh@jntuh.ac.in"
      },
      {
        name: "Marri Laxman Reddy Institute of Technology & Mgmt",
        address: "Dundigal, Telangana 500043",
        website: "https://www.mlritm.ac.in/",
        dateOfInauguration: "15.12.2016",
        coordinator: {
          name: "Dr Srinivas Nallagonda",
          designation: "Associate professor &HoD",
          contact: "9154334563",
          email: "srinivas.nallagonda@gmail.com"
        }
      },
      {
        name: "Siddhartha Institute of Technology and Sciences",
        address: "Narapally, Medchal (Dt),Hyderabad,Telangana",
        website: "https://siddhartha.co.in/",
        dateOfInauguration: "16.07.2021",
        coordinator: {
          name: "Dr. Y. Rajasree Rao",
          designation: "Principal",
          contact: "9866153686",
          email: "principal@siddhartha.co.in"
        },
        isfCoordinator: {
          name: "Dr. G. Dhanalakshmi",
          designation: "Dean IQAC & HoD/ECE, ISF Coordinator",
          contact: "9788459200",
          email: "dhanarjun@gmail.com, hod.ece@siddhartha.co.in"
        }
      },
      {
        name: "Pallavi Engineering College",
        address: "KUNTLOOR, Hayathnagar,Kuntloor Village,Hayathnagar, 209, Swathi Residency Rd, Hyderabad, Telangana 501505",
        website: "https://www.pallaviengineeringcollege.ac.in/",
        dateOfInauguration: "09.04.2022",
        coordinator: {
          name: "Dr. M Balraju",
          designation: "Principal",
          contact: "8688652343",
          email: "principal@pallaviengineeringcollege.ac.in"
        },
        additionalContact: {
          name: "Thota Sravanti",
          designation: "HoD/ECE, ISF Coordinator",
          contact: "9493391957",
          email: "sravanti23@gmail.com"
        }
      },
      {
        name: "University College of Engineering",
        address: "Osmania University, Hyderabad",
        website: "https://: www.osmania.ac.in",
        dateOfInauguration: "23-11-2022",
        coordinator: {
          name: "Dr.M.Shyamsunder",
          designation: "associate Professor, ECE Department",
          contact: "9885433203",
          email: "isfouce@uceou.edu"
        }
      },
      {
        name: "Hyderabad Institute of Technology and Management(HITAM)",
        address: "Gowdavelly (Village), Near Kompally, Medchal (Mandal), Medchal-Malkajgiri (Dist.) – 501401. Telangana. India.",
        website: "https://: www.hitam.org",
        dateOfInauguration: "18-10-2023",
        coordinator: {
          name: "Dr. M.Chiranjeevi",
          designation: "Associate Professor, EEE Department",
          contact: "9030653640",
          email: "chiranjivi.eee@hitam.org"
        }
      },
      {
        name: "Anurag University, Hyderabad",
        address: "Venkatapur (Village),Ghatkesar Road, Hyderabad – 500088. Telangana. India.",
        website: "https://www.anurag.edu.in",
        dateOfInauguration: "20-03-2024",
        coordinator: {
          name: "Mrs.B.Hemalatha",
          designation: "ISF Coordinator, ECE Department",
          contact: "9032080300",
          email: "hemalathaece@anurag.edu.in"
        }
      }
  ]

  for (const forum of forums) {
    const createdForum = await prisma.studentForum.create({
      data: {
        name: forum.name,
        address: forum.address || "",
        website: forum.website,
        dateOfInauguration: forum.dateOfInauguration,
        coordinator: forum.coordinator ? {
          create: {
            name: forum.coordinator.name,
            designation: forum.coordinator.designation || "Principal", // Default designation if not provided
            contact: forum.coordinator.contact,
            phone: forum.coordinator?.phone,
            fax: forum.coordinator?.fax,
            email: forum.coordinator.email
          }
        } : undefined
      }
    })
    console.log(`Created forum: ${createdForum.name}`)
  }

  // Clear existing organization members
  await prisma.organizationMemberInstitute.deleteMany()

  // Seed organization members
  await prisma.organizationMemberInstitute.createMany({
    data: [
      {
        name: "Electronics Corporation of India Limited (ECIL)",
        orgId: "ORGI00158",  // Changed from 'id' to 'orgId'
        address: "Post Office, Hyderabad, 500062.",
        email: "headhr@ecil.co.in"
      },
      {
        name: "M C E M E",
        orgId: "ORGG00160L",  // Changed from 'id' to 'orgId'
        address: "The Commandant, Inginiyari Sainya College, Trimulgherry PO, Secunderabad, 500015",
        contact: "8493012485",
        email: "trainingwing.mceme@gov.in"
      },
      {
        name: "Sorokasoft (INDIA) Pvt Ltd",
        orgId: "ORG100234",   
        address: "LSPC Mansion, H.No.3-201, HIG Lane, Opp: Lakshmi SBI Homes, HUDA, Mayuri Nagar, Miyapur, Hyderabad – 500049.",
        contactPerson: "G.Premchand",
        contact: "65793568",
        email: "info@sorokasoft.com"
      },
      {
        name: "M V S R Engineering College",
        orgId: "ORGG00248",   
        address: "Nadergul (P.O.), Saroornagar Mandal, Hyderabad - 501510.",
        contactPerson: "Er.Nuli Namassivaya",
        contact: "9866692214",
        email: "nulimvsr@gmail.com"
      },
      {
        name: "G.Narayannamma Institute of Technology & Science (for Women) GNIT&S",
        orgId: "ORGG00281L",   
        address: "Shaikpet, Hyderabad - 500008.",
        contactPerson: "Prof. Ch. Ganapathi Reddy",
        contact: "9291521304",
        email: "ganapathi7898@yahoo.com"
      },
      {
        name: "Chaitanya Bharathi Institute Of Technology",
        orgId: "ORGG00306L",   
        address: "Chaitanya Bharathi PO, Gandipet, Hyderabad - 500075.",
        contact: "8466997201",
        email: "principal@cbit.ac.in"
      },
      {
        name: "Aurora's Technical and Research Institute",
        orgId: "ORGG00310",   
        address: "Parvathapur, Uppal, Hyderabad - 500039.",
        contactPerson: "Mr. K. Satish (Assoc. Prof & Head E.C.E Department)",
        contact: "9848717250",
        email: "info@atri.edu.i"
      },
      {
        name: "TRR College of Engineering",
        orgId: "ORGG00319L",   
        address: "C/o The Principal, TRR Nagar, Inole-V, Patancheru, Hyderabad - 502319.",
        email: "trr@trrenggcollege.com"
      },
      {
        name: "Snehal Powertel Solutions Pvt. Ltd.",
        orgId: "ORGG00345L",   
        address: "3rd Floor, Plot No. 27/A, S R Nagar, Hyderabad - 500038.",
        contactPerson: "K. Subbi Reddy",
        contact: "9848037970",
        email: "kovvuri_2003@yahoo.co.in"
      },
      {
        name: "Lords Institute of Engineering & Technology",
        orgId: "ORGG00360L",   
        address: "C/o The Principal, Sy No 32, Himayathsarad, R R Dist, Hyderabad - 500008.",
        contact: "9490944104",
        email: "principal.lords@gmail.com"
      },
      {
        name: "Vidya Vikas Institute of Technology",
        orgId: "ORGG00362L",   
        address: "C/o The Principal, Sy No 103 & 104, Shabad Ring Rd, Chevella, Ranga Reddy - 501503.",
        email: "principal_vvit@yahoo.co.in"
      },
      {
        name: "VNR Vignana Jyothi Institute Of Engineering and Technology",
        orgId: "ORGG00372L",   
        address: "Bachupally, Kukatpally, Hyderabad - 500090.",
        contact: "9000037660",
        email: "padmasai_y@vnrvjiet.in"
      },
      {
        name: "ACE Engineering College",
        orgId: "ORGG00381L",   
        address: "Ankushapur (V), Ghatkesar (M), Ranga Reddy - 501301.",
        email: "aceenggcollege@gmail.com"
      },
      {
        name: "C V R College of Engineering",
        orgId: "ORGG00385L",   
        address: "Vastunagar, Mangalpalli (V), Ibrahimpatan (M), Ranga Reddy - 501510.",
        email: "info@cvr.ac.in"
      },
      {
        name: "Guru Nanak Institute of Technology",
        orgId: "ORGG00394L",   
        contactPerson: "Prof Lt Col Navin Chandra Pant (HOD, ECE)",
        address: "Ibrahimpatnam, Ranga Reddy - 501506.",
        email: "gnes_hyd@yahoo.com"
      },
      {
        name: "Sphoorthy Engineering College",
        orgId: "ORGG00406L",   
        address: "Nadargul (V), NR Vanasthalipuram, Sagar Road, Saroornagar - 501510.",
        contact: "9393124049",
        email: "bashavls@gmail.com"
      },
      {
        name: "Avanthi Institute of Engineering & Technology",
        orgId: "ORGG00415L",   
        address: "Gunthapally (V), Hayathnagar (M), Ranga Reddy - 501512.",
        contactPerson: "Dr. S Kishore Reddy (HOD, ECE)",
        contact: "9393124049",
        email: "principal.avanthi@gmail.com"
      },
      {
        name: "CVSR College Of Engineering",
        orgId: "ORGG00426L",   
        address: "Venkatapur (V), Ghatkeswar (M), Ranga Reddy - 501301.",
        contact: "9963381014",
        email: "principal_cvsr@yahoo.com"
      },
      {
        name: "CMR Institute Of Technology",
        orgId: "ORGG00427L",   
        address: "Kandlakoya (V), Medchal Road, Hyderabad - 501401.",
        contact: "9247969996",
        email: "janga_m_reddy@yahoo.com"
      },
      {
        name: "TKR College of Engineering & Technology",
        orgId: "ORGG00441L",   
        address: "Survey No 8/A, Meerpet, Medbowli, Saroornagar - 500097.",
        contactPerson: "D Vemana Chary (ISF Coordinator)",
        contact: "9347279139",
        email: "vemanad@gmail.com"
      },
      {
        name: "Mahaveer Institute of Science and Technology",
        orgId: "ORGG00458L",   
        address: "Vyasapuri, Bandlaguda, Kesavgiri (P), Hyderabad - 500005.",
        contact: "9550544411",
        email: "info@mist.ac.in"
      },
      {
        name: "ICFAI Foundation for Higher Education",
        orgId: "ORGG00467L",   
        address: "Dontanpally, Faculty of Science and Technology, Shankarpally Road, Hyderabad - 501203.",
        contactPerson: "Mr. L. Koteswara Rao (Faculty Coordinator)",
        contact: "9948796039, 9951135222",
        email: "kots.lkr@gmail.com, ietefst@ifheindia.org"
      },
      {
        name: "Bheemanna Khandre Institute Of Technology",
        orgId: "ORG00468",   
        address: "Bhalki, Bidar - 585328.",
        contact: "9448131606",
        email: "bkitbhalki@gmail.com"
      },
      {
        name: "Malla Reddy Engineering College",
        orgId: "ORGG00476L",   
        address: "Maisammaguda, Dhulapally Post, Via Kompally, Secunderabad - 500100.",
        email: "ecehod.mrec@gmail.com"
      },
      {
        name: "Vidya Jyothi Institute of Technology",
        orgId: "ORGG00477L",   
        address: "Himayatnagar, Aziz Nagar Gate, C B Post, Hyderabad - 500075.",
        contact: "9059013690",
        email: "ecehod.vjit@gmail.com"
      },
      {
        name: "Al Habeeb College Of Engg And Technology",
        orgId: "ORGG00479L",   
        address: "Dameridda(V), Chevelia (M), Rangareddy - 501503",
        email: "principal@alhabeebcollege.ac.in"
      },
      {
        name: "CMR Engineering College",
        orgId: "ORGG00480L",   
        address: "Kandlakoya(U), Medchal Road, Hyderabad - 501401",
        contact: "9248727227",
        email: "principal.cmrec@gmail.com"
      },
      {
        name: "Geethanjali College of Engineering & Technology",
        orgId: "ORGG00482L",   
        address: "Cheeryal (V), Keesara (MM), Ranga Reddy - 501301",
        contact: "9866308257",
        email: "uksusalra@gmail.com"
      },
      {
        name: "Jagruti Institute of Engineering & Technology",
        orgId: "ORG00494L",   
        address: "Koheda Road, Chitapalliguda(V), Ibrahimpatnam (M), Ranga Reddy, Hyderabad - 501510",
        contact: "9985387637",
        email: "principal@jagruti.ac.in"
      },
      {
        name: "JB Institute of Engg. & Technology",
        orgId: "ORG00504L",   
        address: "Yenkapally, Moinabad Mandal, PO: Himayatnagar, Hyderabad – 500075",
        contact: "9908213890",
        email: "principal@jbiet.edu.in"
      },
      {
        name: "Marri Laxman Reddy Institute of Technology and Management",
        orgId: "ORG00515L",   
        address: "Dundigal Village, Quth Bullapur (Mandal), Hyderabad - 500043",
        contact: "8418255055",
        email: "principal@mlritm.ac.in"
      },
      {
        name: "Holy Mary Institute of Technology and Science",
        orgId: "ORG00522L",   
        address: "Bogaram (V), Keesara(M), Ranga Reddy, Telangana - 501301",
        contactPerson: "Prof. M. Deva Raju (Head, ECE Dept)",
        contact: "9652763797",
        email: "devamraju@gmail.com"
      },
      {
        name: "St. Mary's group of Institutions",
        orgId: "ORG004498",   
        address: "Near Ramoji Film City, Deshmukhi, Batasingaram, Hyderabad, Telangana - 508284",
        contactPerson: "Dr. K. Suvarchala",
        email: "kakanisuvarchala@stmarysgroup.com"
      },
      {
        name: "Siddhartha Institute of Engineering and Technology",
        orgId: "ORG00553L",   
        address: "Ibrahimpatnam, Hyderabad, Telangana - 501506",
        contactPerson: "SubbaRao (ECE HOD)",
        contact: "9966779182",
        email: "subbu.dasari@gmail.com"
      },
      {
        name: "Krishna Murthy Institute Of Technology",
        orgId: "ORG00542L",   
        address: "SY NO 23&39, Edulabad(V), Ghatkesar (M), Ranga Reddy, Hyderabad - 501301"
      },
      {
        name: "MLR Institute of Engineering & Technology",
        orgId: "ORG00530L",   
        address: "Laxman Reddy Avenue, Dundigal, Qutubullapur (M), RR Dist., Hyderabad - 500043",
        contactPerson: "Mr. M.V. Ramanaiah (Professor, ECE Dept)",
        contact: "9618673107",
        email: "amanaiah.m@gmail.com"
      },
      {
        name: "St. Peters Engineering College",
        orgId: "ORG00523L",   
        address: "Dullapally, Maisammaguda, Medchal, Hyderabad, Telangana - 500043",
        contactPerson: "Prof. MLN Aacharyulu (HOD)",
        contact: "7981105279"
      },
      {
        name: "AVN Institute of Engineering and Technology - [AVNIET]",
        orgId: "ORG00547L",   
        address: "Ibrahimpatnam, Ramdas Pally, Hyderabad, Rangareddy District - 501510",
        contactPerson: "Mr. J. Ramaiah (ISF Coordinator)",
        contact: "7013641746",
        email: "jangitiram@gmail.com"
      },
      {
        name: "Vasavi College of Engineering (Autonomous)",
        orgId: "ORG00601L",   
        address: "Ibrahimbagh, Hyderabad - 500031",
        contact: "+91 40 23146002, +91 40 23146090",
        email: "principal@staff.vce.ac.in"
      }
    ]
  })

  console.log('Database has been seeded!')

  // Clear existing R&D data
  await prisma.rDInfrastructure.deleteMany()
  await prisma.rDProject.deleteMany()

  // Seed R&D Infrastructure
  await prisma.rDInfrastructure.createMany({
    data: [
      {
        category: "Computer Lab",
        name: "Computers",
        description: "30 Nos.",
        specs: `INTEL ® CORE 2 DUO PROCESSOR
2 GHz 2MB L2 CACHE
800 MHZ FSB
1024 MB RAM
160 GB SATA HARD DISK
COMBODRIVE`
      },
      {
        category: "Computer Lab",
        name: "Software",
        description: "Available software",
        specs: "JAVA, Visual C++, Turbo C++, Active- HDL (Version 5.1), KEIL (Version 3), VISUAL WEB DEVELOPER 2008 (3.5 Version), Micro-Vision (Version 3.0, MATLAB (Versions 7.0 and 7.5), SQL SERVER 05"
      },
      {
        category: "Electronics Kits",
        name: "DSP Boards",
      },
      {
        category: "Electronics Kits",
        name: "GPS",
      },
      {
        category: "Electronics Kits",
        name: "ARM Processor",
      },
      {
        category: "Electronics Kits",
        name: "PIC Micro controller",
      },
      {
        category: "Electronics Kits",
        name: "GSM",
      },
      {
        category: "Electronics Kits",
        name: "CDMA",
      },
      {
        category: "Electronics Kits",
        name: "Universal programmer",
      },
      {
        category: "Electronics Kits",
        name: "Digital Storage Oscilloscope",
      },
    ]
  })

  // Seed R&D Projects
  const projectCategories = {
    EMBEDDED: "EMBEDDED BASED PROJECTS",
    ANDROID: "ANDROID AND SMART PHONE BASED PROJECTS",
    TOUCH: "TOUCH SCREEN BASED PROJECTS",
    ZIGBEE: "ZIGBEE TECHNOLOGY",
    BLUETOOTH: "BLUETOOTH BASED PROJECTS",
    ROBOTIC: "ROBOTIC BASED PROJECTS",
    GSM_GPS: "GSM AND GPS BASED PROJECTS",
    VLSI: "VLSI / VERILOG PROJECTS",
    DSP_DIP: "DSP-DIP BASED PROJECTS",
    SOFTWARE: "SOFTWARE PROJECTS"
  }

  // Helper function to create projects for a category
  const createProjects = async (category: string, projects: string[]) => {
    await prisma.rDProject.createMany({
      data: projects.map((title, index) => ({
        category,
        title,
        order: index + 1
      }))
    })
  }

  // Seed Embedded Projects
  await createProjects(projectCategories.EMBEDDED, [
    "Virtual Passenger.",
    "Wireless Sensory Network.",
    "Omnidirectional View Graphic display system.",
    "Telemedicine KIOSK- Parameters measurement and transmission.",
    "Aggresive Driver Imaging.",
    "Automative Vehicle Guidance System.",
    "VLSI Oscilloscope.",
    "Class Room attendance System-ImaPro.",
    "Networked security system.",
    "IR sensory network using CMOS sensors.",
    "Authentication of important Documents.",
    "Interactive system for remote Doctors .",
    "Software Defined Radio for Amateur Radio Operators.",
    "Smart Logistics system for Produce distribution.",
    "Smart alert systems for Aged/physically challenged.",
    "Aid for the Visually challenged to navigate safely.",
    "Adhoc network for Road Traffic signals.",
    "Security system for agriculture against infestation.",
    "Safe Driving system for Public Transport Vehicles.",
    "Smart Building/Apartment system for Security and general management.",
    "Raspberry Pi Based Interactive Home Automation System Through E-Mail",
    "Development Of Embedded Web Server On ARM11 Raspberry Pi",
    "Street Light Controlling System Using ARM 11 Raspberry Pi",
    "Whether Monitoring System Using ARM11 Raspberry Pi",
    "The Video Monitoring Wireless Transmission System Based On ARM11 Raspberry Pi",
    "Design Of The Intelligent Home Appliances Control System Based On ARM11 Raspberry Pi",
    "An Emergency Rescue Dispatch System For Road Vehicles For Instant Notification Of Road Accidents And Post-Crash Analysis.",
    "An Enhanced Fall Detection System For Elderly Person Monitoring Using Consumer Home Networks",
    "Android and Raspberry Pi Based Home Automation (Wifi / Bluetooth).",
    "Android Based Smart Home System With Control Via Bluetooth And Internet Connectivity",
    "ARM based Implementation of Text-To-Speech (Tts) for Real Time Embedded System",
    "ARM11 Based Rfid Access Control System With Live Image Capture",
    "ARM-11 Based Smart Car Security",
    "Design Vehicle Positioning System With Exact Location Address Based On Arm11 Raspberry Pi",
    "WSN-Based Smart Sensors And Actuator For Power Management In Intelligent Buildings",
    "A Collaborative And Opportunistic Traffic Monitoring System",
    "Probability-Based Location Aware Design And On-Demand Robotic Intrusion Detection System",
    "A New Type Of Automatic Alarming Device To Rescue Accident Injured In Time",
    "A Novel Approach Of Train Prevention System From Collision Using Avr Microcontroller",
    "A Real-Time Embedded Video Monitoring System.",
    "A Power Sensor Tag With Interference Reduction For Electricity Monitoring Of Two-Wire Household Appliances.",
    "A Reconfigurable Smart Sensor Interface For Industrial WSN in Iot Environment.",
    "GPS Based Real Time Emergency Aid System With Analysis Of Latency In Satellite Communication.",
    "Iot (Internet Of Things) Based Home Automation Using Raspberry Pi/Beaglebone Black",
    "New Design For Electronic Blood Pressure Monitor Based On Gsm Module Tc35i.",
    "Real Time Vehicle Tracking System Using Gsm And Gps Technology- An Anti-Theft Tracking System.",
    "Sign Language Recognition For Deaf And Dumb People.",
    "Smart Card For Banking With Highly Enhanced Security System.",
    "Microcontroller Based Automated Irrigation System.",
    "MEMS Based Moving Chair Control By Alphabet Recognition.",
    "Smart security for ATM's",
    "GPS based station announcement and alert system with GSM for Railways.",
    "Automatic Liquid dispensing system used in soft drink vending machine",
    "Design and women safety system using RFID LPC2148 Micro controller & GSM based Technology.",
    "RF controlled wireless Robot with PIR motion sensor to detect live humans in rescue operation",
    "Smart Home security system based on Android Phone.",
    "Mobile application for Driver Health status remote monitoring.",
    "ARM based Implementation of Text to Speech for real time embedded systems."
  ])

  // Seed Android Projects
  await createProjects(projectCategories.ANDROID, [
    "Smart Remote for controlling electrical appliance through android mobile.",
    "Virtual nurse- controlling wheel chair through android mobile .",
    "Advanced android mobile controlling robot .",
    "Smart Remote for controlling electrical appliance through android mobile.",
    "Accelerometer/MEMS based robot controlling through android mobile .",
    "Android mobile controlled voice guider for patients/old aged people/dumb people .",
    "Smart Home/office automation through android mobile. .",
    "Advertisement boards or status boards message updating system from android mobile for offices and restaurants. .",
    "Smart regulator for controlling fan speed through Android mobile .",
    "AC motor speed controller through Android mobile. .",
    "Advanced street light controlling system through smart phone.",
    "Smart phone based patient monitoring system .",
    "Industry/home/office automation through smart phone .",
    "Industrial parameters monitoring system through Smartphone ."
  ])

  await createProjects(projectCategories.TOUCH, [
    "Touch screen based wheel chair control system.",
    "Touch screen and Zigbee based voice guider for patients.",
    "Touch screen based remote controller robot with wireless camera.",
    "Touch screen based wireless PC controller.",
    "Touch screen based smart home automation. "
  ])

  await createProjects(projectCategories.ZIGBEE, [
    "Modern restaurants atomization for wireless menu dish ordering using touch panel and ZIGBEE.",
    "Touch screen and Zigbee based voice guider for patients",
    "Touch Screen And Zigbee Based Wireless Communication Assistant In Airlines",
    "Development of a smart power meter for AMI based Zigbee communication Advanced Metering Infrastructure (AMI) .",
    "Remote Power On/Off Control And Current Measurement For Home Electric Outlets Based On A Low-Power Embedded Board And Zigbee Communication.",
    "Remote-Controllable and Energy-Saving Room Architecture Based on Zigbee Communication .",
    "Innovative Congestion Control System for Ambulance Using ZIGBEE .",
    "Zigbee based wireless Electronic Notice Board with Multi Point Receiver .",
    "Zigbee Device Access control system with Reliable data transmission Industrial Process control and Automation system through Zigbee n/w .",
    "Multi stage Real time Weather monitoring System via Zigbee in Homes/Industries..",
    "Zigbee Wireless Vehicle Identification and Authentication System.",
    "Applications of Short Range Technologies to Industrial Automation: A Zigbee Approach",
    "The Wireless Sensor Network for Home Care System using Zigbee.",
    "Measuring Power Parameters with Zigbee Connectivity.",
    "Wireless Data Encryption and Decryption Using Zigbee.",
    "Zigbee Based Automated Irrigation System.",
    "Zigbee enabled pantry updating wireless network and data synchronization using hand held device. "
  ])

  await createProjects(projectCategories.BLUETOOTH, [
    "Bluetooth Robot with CMOS image sensor(SPY ROBOT)",
    "Remote controlled home automation using Bluetooth.",
    "Bluetooth based industrial data acquisition system",
    "Industrial devices controlling system using Bluetooth",
    "Intelligent electricity billing system using Bluetooth. "
  ])

  await createProjects(projectCategories.ROBOTIC, [
    "Intelligent metal detection and fire alert robot.",
    "SMS operated Robot .",
    "Security guard with camera and night vision light .",
    "Intelligent Fire extinguisher vehicle .",
    "Intelligent obstacle detection and avoidance robot.",
    "Pick and place robot controlling with wire or wireless",
    "MEMS based robot.",
    "Smoke and LPG Gas detection robot with wireless control.",
    "Wireless Voice and image transmission robot for surveillance system "
  ])

  await createProjects(projectCategories.GSM_GPS, [
    "Position Matching Based Autonomous Speed Regulation System for Vehicles.",
    "Automatic Streetlight On/Off with SMS Controlling and light Failure detection with SMS indication.",
    "Supervisory control and data acquisition system (SCADA) using GSM modem",
    "UPS Battery monitoring system over GSM for High availability system",
    "GPS based border alert system for fishermen with boat speedometer",
    "Automatic power meter reading system using GSM network",
    "RFID and GSM based intelligent courier mailbox system with automatic delivery notification",
    "A smart GSM based embedded solution for continuous remote monitoring of cardiac patients",
    "GPS based vehicle travel location data logger with 2GB MMC/SD Memory card",
    "GPS and GSM based office cab monitoring, alerting and logging system "
  ])

  await createProjects(projectCategories.VLSI, [
    "Functional simulation of AES128 using SDRAM controller using Verilog",
    "Designing and Simulation of Synchronous and Asynchronous FIFO using dual-port Block RAM in the FPGA with VHDL/Verilog.",
    "Functional Simulation of dual port SDRAM controller using Verilog",
    "Design and Simulation of UART Serial Communication Module Based on Verilog.",
    "DESIGN & FUNCTIONAL SIMULATION OF RANDOM GENERATOR USING VERILOG.",
    "Analysis and Design of a differential LNA for 2G/3G/4G cellular applications",
    "Design of ultra low power low voltage OTA with bulk-driven differential pair in 130nm CMOS",
    "Analysis and Design of a low power UWB LNA with Single-Ended/Differential -Input Reconfiguration in 180nm CMOS",
    "Design of an ultra low power Channel Select Filter with pole tracking OPAMP for 3G wireless Applications",
    "Design of a highly linear 1 GHz Low-Noise Amplifier with Complementary Trans conductance Linearization in 180nm CMOS",
    "Design of a low power lateral current reuses 2.4-GHz Receiver Front-end in 130nm CMOS Technology.",
    "Design of a Low Power Current Reuse VCO for Miniaturized Transceiver System for ISM band applications",
    "Design of a Wideband Inductor less Single-to-Differential",
    "LNA in 180nm CMOS Technology for Digital TV Receivers",
    "Design of an inverter-based ultra-low-power, low noise Single ended to differential VGA for medical ultrasound probes",
    "Design of a Micro power Class-AB VGA with Gain-Independent Bandwidth",
    "Design of a low power QVCO with Current-reuse and gate-modulation techniques in 180nm CMOS",
    "Design of a Variable Gain Amplifier for a Multi-standard WLAN/Wi-MAX/LTE Receiver",
    "Design of a Sigma-Delta Digitally Controlled Power Amplifier with High Power Efficiency",
    "Design of a Single-Ended CMOS Doherty Power amplifier Using Current Boosting Technique "
  ])

  await createProjects(projectCategories.DSP_DIP, [
    "Finding the Employee Details By Using Graphical User Interface(GUI)",
    "Development of Human Voice Recognition using Wavelet transforms",
    "Image Encryption using Bit plane crypt algorithm",
    "Video Enhancement Using Spatial Median Filtering",
    "A Wavelet-Based Dynamic Range Compression (WDRC) Algorithm To Improve The Visual Quality Of Digital Images",
    "Google Image Search Application Based on Image Retrieval System",
    "Visible Video Watermarking Using DWT For Color Image Videos",
    "Face Segmentation Using Skin Color map In Video Phone applications  	 ",
    "A Method To Improve Image Fusion Based on Block Level Features",
    "A Hybrid Filter with Impulse Detection for Removal of Random Valued Impulse Noise from Color Videos",
    "Adaptive Bilateral Filter for Sharpness Enhancement and Noise Removal From Gray Scale Images",
    "Adaptive Fuzzy filtering for artifacts reduction in Digital Videos",
    "Moving Object Detection Using Dynamic Background Method",
    "Fault Diagnostic system for Windows by Using GUI",
    "Quality assessment of De-blocked Images",
    "Image de-noising using Wavelet transforms ",
    "Speech recognition by Using Linear Predictive Coding (LPC)",
    "A Warped Discrete Cosine Transform (WDCT)-Based Approach To Enhance The Degraded Speech Under Background Noise Environments",
    "An Adaptive Kalman filtering for Speech Enhancement",
    "A Wavelet based Technique Towards a More natural sounding synthesized speech",
    "Analyzing various effects of Audio Signals using MATLAB GUI",
    "Adaptive algorithm for speech compression using Cosine packets.",
    "An Adaptive algorithm for Speech compression using Wavelet transforms	 ",
    "Energy efficient transmission of a DWT image Over OFDM fading channels",
    "A wavelet based statistical method for ocular artifact reduction in ECG signals",
    "Adaptive overlap-and-Add Technique in MB-OFDMbasd UWBReceiver Design",
    "Interference Cancellation and Detection for More than Two Users",
    "Efficient SNR Estimation in OFDM systems",
    "A two-level fh-cdma scheme for wireless communication.",
    "PAPR analysis by using DHT pre-coded Matrix in OFDM system",
    "Oversampling to Reduce the Effect of Timing Jitter on OFDM",
    "ECG signal de-noising and baseline wander correction based on the empirical mode decomposition",
    "Non coherent MMSE interference suppression for DS_CDMA"
  ])

  await createProjects(projectCategories.SOFTWARE, [
    "Video Dissemination over Hybrid Cellular and Ad Hoc Networks",
    "Optimized Multicast Routing Algorithm Based on Tree Structure in MANETs",
    "Privacy-Preserving Optimal Meeting Location Determination on Mobile Devices",
    "SocialTube: P2P-assisted Video Sharing in Online Social Networks",
    "Cloud-Assisted Mobile-Access of Health Data With Privacy and Audit ability",
    "Fast Nearest Neighbor Search with Keywords",
    "Dynamic Query Forms for Database Queries",
    "Distributed, Concurrent, and Independent Access to Encrypted Cloud Databases",
    "On the Security of a Public Auditing Mechanism for Shared Cloud Data Service",
    "Decentralized Access Control Of Data Stored In Cloud Using Key Policy Attribute Based Encryption",
    "Personalized Web search Using Browsing History And Domain Knowledge",
    "VABKS: Verifiable Attribute-based Keyword Search over Outsourced Encrypted Data",
    "Mobile-Access of Health Data With Privacy and Audit ability",
    "QoS Ranking Prediction for Cloud Services",
    "A Cloud Enviroment for Backup and Data Storage",
    "Restaurant Table Order Management System",
    "Multy User Mobile Bluetooth Two Way Text Chat",
    "Advanced GPS Location Finder To Identify Hospital Location and ATM Location "
  ])

  console.log('R&D data has been seeded!')

  // Update the events creation in your seed.ts file
  await prisma.event.deleteMany()
  await prisma.eventImage.deleteMany()

  // Create events with related images
  const events = await Promise.all([
    prisma.event.create({
      data: {
        title: "National Science Day Celebrations",
        date: new Date("2024-02-28"),
        description: "Celebrated National Science Day with various technical competitions, paper presentations, and project exhibitions. Students from different colleges participated enthusiastically.",
        category: "competition",
        location: "IETE Hyderabad Centre",
        imageUrl: "/images/events/science-day-2024.jpg",
        isHighlighted: false,
        images: {
          create: [
            {
              url: "/images/events/science-day/image1.jpg",
              caption: "Students presenting their projects"
            },
            {
              url: "/images/events/science-day/image2.jpg",
              caption: "Award ceremony"
            },
            {
              url: "/images/events/science-day/image3.jpg",
              caption: "Technical presentation session"
            }
          ]
        }
      }
    }),
    prisma.event.create({
      data: {
        title: "Workshop on IoT and Machine Learning",
        date: new Date("2024-02-15"),
        description: "Two-day workshop covering practical aspects of IoT implementation and ML algorithms. Hands-on sessions with real-world applications.",
        category: "workshop",
        location: "IETE Auditorium",
        imageUrl: "/images/events/iot-workshop.jpg",
        isHighlighted: false,
        images: {
          create: [
            {
              url: "/images/events/iot-workshop/hands-on.jpg",
              caption: "Hands-on IoT implementation session"
            },
            {
              url: "/images/events/iot-workshop/presentation.jpg",
              caption: "ML algorithms demonstration"
            },
            {
              url: "/images/events/iot-workshop/group-work.jpg",
              caption: "Group project work"
            }
          ]
        }
      }
    }),
    prisma.event.create({
      data: {
        title: "IETE Students Day",
        date: new Date("2024-01-20"),
        description: "Annual gathering celebrating student achievements with technical paper presentations, project exhibitions, and cultural activities.",
        category: "other",
        location: "IETE Hyderabad Centre",
        imageUrl: "/images/events/students-day.jpg",
        isHighlighted: true,
        images: {
          create: [
            {
              url: "/images/events/students-day/inauguration.jpg",
              caption: "Inauguration ceremony"
            },
            {
              url: "/images/events/students-day/presentations.jpg",
              caption: "Student presentations"
            },
            {
              url: "/images/events/students-day/cultural.jpg",
              caption: "Cultural performances"
            },
            {
              url: "/images/events/students-day/awards.jpg",
              caption: "Award distribution"
            }
          ]
        }
      }
    })
  ])

  console.log('Events with images have been seeded!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 