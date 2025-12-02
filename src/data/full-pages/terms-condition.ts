export interface listData {
    listTitle?: string
    description: string
}

export interface TermsConditionSection {
  title: string
  subtitle?: string
  description?: string
  list?: listData[]
  summary?: string
}

export const termsConditionSectionData: TermsConditionSection[] = [
  {
    title: "Acceptance of Terms",
    description: "By accessing and using this website, you accept and agree to be bound by the terms and conditions outlined in this agreement."
  },
  {
    title: "Use License",
    subtitle: "Permission is granted to temporarily access the materials on this website for:",
    list: [
        {
            description: "Personal, non-commercial transitory viewing only"
        },
        {
            description: "This is the grant of a license, not a transfer of title"
        }
    ]
  },
  {
    title: "Disclaimer",
    subtitle: "The materials on this website are provided on an 'as is' basis:",
    list: [
        {
            listTitle: "No Warranties:",
            description: "We make no warranties, expressed or implied, and hereby disclaim all other warranties."
        },
        {
            listTitle: "Accuracy:",
            description: "We do not warrant that the materials are accurate, reliable, or correct."
        },
        {
            listTitle: "Availability:",
            description: "We do not warrant that the service will be uninterrupted or error-free."
        }
    ]
  },
  {
    title: "Limitations",
    subtitle: "In no event shall we be liable for:",
    list: [
        {
            description: "Any damages arising out of the use or inability to use the materials"
        },
        {
            description: "Loss of data or profits"
        },
        {
            description: "Complying with legal and regulatory obligations."
        }
    ]
  },
  {
    title: "Sharing of Information",
    subtitle: "We do not sell or trade your personal information. However, we may share data in the following cases:",
    list: [
        {
            listTitle: "With Employers:",
            description: "Candidate details are shared with verified overseas employers to fulfill recruitment requests." 
        },
        {
            listTitle: "With Service Providers:",
            description: "Third-party vendors that support our operations (e.g., IT services, background checks)." 
        },
        {
            listTitle: "For Legal Compliance:   ",
            description: "When required by law, regulation, or government authorities." 
        }
    ]
  },
  {
    title: "Data Security",
    description: "We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, misuse, loss, or disclosure. However, no system is 100% secure, and we cannot guarantee absolute protection."
  },
  {
    title: "Data Retention",
    list: [
        {
            description: "Candidate and employer data are retained as long as necessary to provide our services and comply with legal obligations."
        },
        {
            description: "You may request deletion of your personal data by contacting us at any time."        
        }
    ]
  },
  {
    title: "Cookies & Tracking",
    description: "Our website may use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and improve site performance. You can manage or disable cookies through your browser settings."
  },
  {
    title: "Your Rights",
    subtitle: "Depending on your jurisdiction, you may have the right to:",
    list: [
        {
            description: "Access, update, or correct your personal data."
        },
        {
            description: "Request deletion of your information."
        },
        {
            description: "Withdraw consent for certain data processing activities."
        },
        {
            description: "File a complaint with a relevant data protection authority."
        }
    ],
    summary: "To exercise these rights, please contact us at info@amcoenterprise.com."
  },
  {
    title: "Third-Party Links",
    description: "Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those websites."
  },
  {
    title: "International Data Transfers",
    description: "As an international recruitment agency, we may transfer your information across borders to fulfill employment and recruitment requirements. By using our services, you consent to such transfers."
  },
  {
    title: "Contact Us",
    description: "If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us:"
  }
]