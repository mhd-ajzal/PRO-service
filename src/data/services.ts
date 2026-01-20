export interface ServiceData {
    id: string;
    title: string;
    description: string;
    slug: string;
    image?: string;
    icon?: string; // We can add icon names or components later if needed
    benefits: string[];
    ctaText: string;
    details: string[]; // Detailed points for the individual service page
}

export const services: ServiceData[] = [
    {
        id: "business-setup",
        title: "Business Setup & Licensing",
        slug: "business-setup",
        image: "/assets/services/business-setup.png",
        description: "Complete support for Mainland business setup, license issuance, and approvals.",
        benefits: [
            "Mainland business setup",
            "Professional license issuance",
            "Trade name reservation",
            "Initial approvals"
        ],
        ctaText: "Get Started",
        details: [
            "Comprehensive consultation for legal structure selection.",
            "Assistance with Department of Economic Development (DED) processes.",
            "Drafting and notarization of Memorandum of Association (MOA).",
            "Office space leasing and Ejari assistance.",
            "End-to-end management of external approvals."
        ]
    },
    {
        id: "trade-license",
        title: "Trade License Services",
        slug: "trade-license",
        image: "/assets/services/trade-license.png",
        description: "Efficient handling of new license issuance, renewals, and amendments.",
        benefits: [
            "New license issuance",
            "License renewal",
            "Amendments & modifications",
            "Activity updates"
        ],
        ctaText: "Request Callback",
        details: [
            "Expedited license renewal services.",
            "Adding or removing business activities.",
            "Change of business location or trade name.",
            "Partner or manager amendments on the license.",
            "License cancellation and liquidation support."
        ]
    },
    {
        id: "visa-immigration",
        title: "Visa & Immigration Services",
        slug: "visa-immigration",
        image: "/assets/services/visa-immigration.png",
        description: "Streamlined processing for investor, employment, and family visas.",
        benefits: [
            "Investor visa",
            "Employment visa",
            "Family visa",
            "Status change assistance"
        ],
        ctaText: "Apply for Visa Support",
        details: [
            "Golden Visa application and support.",
            "Employment visa processing for new hires.",
            "Family sponsorship and dependant visas.",
            "Maid and domestic worker visa assistance.",
            "Visa cancellation and hold services."
        ]
    },
    {
        id: "emirates-id",
        title: "Emirates ID Coordination",
        slug: "emirates-id",
        image: "/assets/services/emirates-id.png",
        description: "Hassle-free application processing, biometrics, and tracking.",
        benefits: [
            "Application processing",
            "Biometrics scheduling",
            "Status tracking",
            "Collection assistance"
        ],
        ctaText: "Start Emirates ID Process",
        details: [
            "New and renewal Emirates ID applications.",
            "Fingerprinting appointment scheduling.",
            "Updating personal details on the ID card.",
            "Replacement of lost or damaged Emirates ID.",
            "Integration with resident visa applications."
        ]
    },
    {
        id: "medical-biometrics",
        title: "Medical Test ",
        slug: "medical-biometrics",
        image: "/assets/services/medical-biometrics.png",
        description: "Coordination for medical fitness appointments and government follow-ups.",
        benefits: [
            "Medical fitness appointment",
            "Biometric coordination",
            "Government center follow-ups",
            "Fast-track options"
        ],
        ctaText: "Book Medical & Biometrics",
        details: [
            "VIP medical test booking services.",
            "Standard medical fitness certificate processing.",
            "Typing center coordination.",
            "Follow-up on delayed results.",
            "Guidance on required health documentation."
        ]
    },
    {
        id: "mohre-gdrfa",
        title: "MOHRE & ICP/GDRFA Services",
        slug: "mohre-gdrfa",
        image: "/assets/services/mohre-gdrfa.png",
        description: "Expert handling of labor cards, immigration approvals, and entry permits.",
        benefits: [
            "Labor card processing",
            "Immigration approvals",
            "Entry permit updates",
            "Status regularization"
        ],
        ctaText: "Consult Our Team",
        details: [
            "Offer letter and labor contract creation.",
            "Work permit issuance and renewal.",
            "Absconding case management and removal.",
            "Establishment card updates.",
            "Quota upgrades and modifications."
        ]
    },
    {
        id: "document-attestation",
        title: "Document Attestation",
        slug: "document-attestation",
        image: "/assets/services/trade-license.png",
        description: "Local and international attestation for business and personal documents.",
        benefits: [
            "Department of Foreign Affairs",
            "Embassy attestation",
            "Ministry of Justice",
            "Legal translation"
        ],
        ctaText: "Attest Documents",
        details: [
            "Degree and educational certificate attestation.",
            "Marriage and birth certificate attestation.",
            "Commercial document legalization.",
            "Embassy and consulate verification.",
            "Certified legal translation services."
        ]
    },
    {
        id: "hr-consultancy",
        title: "HR Consultancy",
        slug: "hr-consultancy",
        image: "/assets/services/business-setup.png",
        description: "Strategic HR solutions to manage talent, compliance, and workforce operations efficiently.",
        benefits: [
            "Recruitment & talent acquisition",
            "Employee onboarding & documentation",
            "HR policy development & compliance",
            "Payroll & benefits advisory"
        ],
        ctaText: "Consult HR Experts",
        details: [
            "Recruitment & talent acquisition.",
            "Employee onboarding & documentation.",
            "HR policy development & compliance.",
            "Payroll & benefits advisory.",
            "Performance management support."
        ]
    }
];
