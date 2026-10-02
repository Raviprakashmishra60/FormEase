/* =========================================================
   FORMEASE - CENTRAL DATA FILE
   Change content here without changing the website layout.
   ========================================================= */

const formEaseData = {

  /* =========================
     BUSINESS INFORMATION
     ========================= */
  business: {
    name: "FormEase",
    owner: "Ravi Prakash Mishra",
    location: "Greater Noida",
    phone: "8604551960",
    whatsapp: "8604551960",
    email: "bussinesdesk@gmail.com",
    instagram: "@raviprakashmishra_",
    upi: "8604551960@nyes"
  },


  /* =========================
     SERVICES
     ========================= */
  services: [

    {
      id: "scholarship",
      name: "Scholarship Forms",
      category: "Education",
      icon: "🎓",
      description: "Assistance with scholarship applications and document preparation.",
      charge: 100,
      chargeType: "fixed",

      documents: [
        "Aadhaar Card",
        "Bank Details",
        "Income Certificate",
        "Caste Certificate (if applicable)",
        "Marksheet",
        "Passport Size Photo",
        "Mobile Number"
      ],

      whatsappMessage:
        "Hello FormEase, I need help with a Scholarship Form. Please tell me the required documents and service charge."
    },


    {
      id: "college-admission",
      name: "College Admission",
      category: "Education",
      icon: "🏫",
      description: "Online assistance for college and university admission forms.",
      charge: 150,
      chargeType: "fixed",

      documents: [
        "Aadhaar Card",
        "10th Marksheet",
        "12th Marksheet",
        "Transfer Certificate (if applicable)",
        "Passport Size Photo",
        "Signature",
        "Mobile Number",
        "Email ID"
      ],

      whatsappMessage:
        "Hello FormEase, I need assistance with a College Admission form."
    },


    {
      id: "ssc",
      name: "SSC Forms",
      category: "Exams",
      icon: "📝",
      description: "Assistance with SSC online applications.",
      charge: 100,
      chargeType: "fixed",

      documents: [
        "Aadhaar Card",
        "10th Marksheet",
        "Passport Size Photo",
        "Signature",
        "Mobile Number",
        "Email ID"
      ],

      whatsappMessage:
        "Hello FormEase, I need help with an SSC Form."
    },


    {
      id: "railway",
      name: "Railway Forms",
      category: "Exams",
      icon: "🚆",
      description: "Assistance with Railway recruitment applications.",
      charge: 100,
      chargeType: "fixed",

      documents: [
        "Aadhaar Card",
        "Educational Documents",
        "Passport Size Photo",
        "Signature",
        "Mobile Number",
        "Email ID"
      ],

      whatsappMessage:
        "Hello FormEase, I need help with a Railway Form."
    },


    {
      id: "jee",
      name: "JEE Forms",
      category: "Exams",
      icon: "🎯",
      description: "Assistance with JEE application and online form filling.",
      charge: 150,
      chargeType: "fixed",

      documents: [
        "Aadhaar Card",
        "10th Marksheet",
        "Passport Size Photo",
        "Signature",
        "Mobile Number",
        "Email ID"
      ],

      whatsappMessage:
        "Hello FormEase, I need help with a JEE Form."
    },


    {
      id: "neet",
      name: "NEET Forms",
      category: "Exams",
      icon: "🩺",
      description: "Assistance with NEET online applications.",
      charge: 150,
      chargeType: "fixed",

      documents: [
        "Aadhaar Card",
        "10th Marksheet",
        "12th Marksheet",
        "Passport Size Photo",
        "Signature",
        "Mobile Number",
        "Email ID"
      ],

      whatsappMessage:
        "Hello FormEase, I need help with a NEET Form."
    },


    {
      id: "cuet",
      name: "CUET Forms",
      category: "Exams",
      icon: "🎓",
      description: "Assistance with CUET applications.",
      charge: 150,
      chargeType: "fixed",

      documents: [
        "Aadhaar Card",
        "10th Marksheet",
        "12th Marksheet",
        "Passport Size Photo",
        "Signature",
        "Mobile Number",
        "Email ID"
      ],

      whatsappMessage:
        "Hello FormEase, I need help with a CUET Form."
    },


    {
      id: "uptac-registration",
      name: "UPTAC Registration",
      category: "Admissions",
      icon: "🏛️",
      description: "Assistance with UPTAC registration.",
      charge: 200,
      chargeType: "fixed",

      documents: [
        "Aadhaar Card",
        "10th Marksheet",
        "12th Marksheet",
        "JEE Scorecard",
        "Category Certificate (if applicable)",
        "Income Certificate (if applicable)",
        "Passport Size Photo",
        "Signature"
      ],

      whatsappMessage:
        "Hello FormEase, I need help with UPTAC Registration."
    },


    {
      id: "uptac-choice",
      name: "UPTAC Choice Filling",
      category: "Admissions",
      icon: "📋",
      description: "Assistance with UPTAC college and branch choice filling.",
      charge: 300,
      chargeType: "fixed",

      documents: [
        "UPTAC Login Details",
        "JEE Rank / Score",
        "Category Details",
        "College Preferences"
      ],

      whatsappMessage:
        "Hello FormEase, I need help with UPTAC Choice Filling."
    },


    {
      id: "pan",
      name: "PAN Assistance",
      category: "Documents",
      icon: "🪪",
      description: "Assistance with PAN-related online applications.",
      charge: 100,
      chargeType: "fixed",

      documents: [
        "Aadhaar Card",
        "Mobile Number",
        "Email ID",
        "Passport Size Photo (if required)",
        "Signature"
      ],

      whatsappMessage:
        "Hello FormEase, I need help with PAN Card assistance."
    },


    {
      id: "certificate",
      name: "Certificate Applications",
      category: "Government",
      icon: "📄",
      description: "Online assistance for eligible certificate applications.",
      charge: "Contact",
      chargeType: "contact",

      documents: [
        "Aadhaar Card",
        "Mobile Number",
        "Relevant supporting documents"
      ],

      whatsappMessage:
        "Hello FormEase, I need help with a Certificate application."
    },


    {
      id: "pdf-document",
      name: "PDF / Document Work",
      category: "Digital",
      icon: "📑",
      description: "PDF, image and document preparation assistance.",
      charge: "Contact",
      chargeType: "contact",

      documents: [
        "Required documents/files"
      ],

      whatsappMessage:
        "Hello FormEase, I need help with PDF / Document work."
    }

  ],


  /* =========================
     COMMON DOCUMENTS
     ========================= */
  commonDocuments: [
    {
      name: "Aadhaar Card",
      icon: "🪪"
    },
    {
      name: "Mobile Number",
      icon: "📱"
    },
    {
      name: "Email ID",
      icon: "✉️"
    },
    {
      name: "Passport Size Photo",
      icon: "🖼️"
    },
    {
      name: "Signature",
      icon: "✍️"
    },
    {
      name: "10th Marksheet",
      icon: "📘"
    },
    {
      name: "12th Marksheet",
      icon: "📗"
    },
    {
      name: "Income Certificate",
      icon: "💰"
    },
    {
      name: "Caste Certificate",
      icon: "📜"
    },
    {
      name: "Residence Certificate",
      icon: "🏠"
    },
    {
      name: "Bank Details",
      icon: "🏦"
    }
  ],


  /* =========================
     SERVICE CHARGES
     ========================= */
  charges: {
    scholarship: 100,
    collegeAdmission: 150,
    ssc: 100,
    railway: 100,
    jee: 150,
    neet: 150,
    cuet: 150,
    uptacRegistration: 200,
    uptacChoiceFilling: 300,
    pan: 100
  },


  /* =========================
     WHATSAPP
     ========================= */
  whatsapp: {

    defaultMessage:
      "Hello FormEase, I need assistance with an online form.",

    messages: {

      scholarship:
        "Hello FormEase, I need help with a Scholarship Form.",

      admission:
        "Hello FormEase, I need help with College Admission.",

      exam:
        "Hello FormEase, I need help with an Exam Form.",

      certificate:
        "Hello FormEase, I need help with a Certificate application.",

      document:
        "Hello FormEase, I need help with PDF / Document work."
    }
  },


  /* =========================
     LATEST UPDATES
     ========================= */
  updates: [

    {
      id: 1,
      title: "New Service Available",
      description: "Scholarship application assistance is now available.",
      date: "02 Oct 2026",
      type: "service",
      active: true
    },

    {
      id: 2,
      title: "College Admission Assistance",
      description: "Get assistance with online college admission forms.",
      date: "02 Oct 2026",
      type: "education",
      active: true
    },

    {
      id: 3,
      title: "Important Notice",
      description: "Please confirm the service and charges before making payment.",
      date: "02 Oct 2026",
      type: "notice",
      active: true
    }

  ],


  /* =========================
     CUSTOMER REVIEWS
     ========================= */
  reviews: [

    {
      name: "Sample Customer",
      service: "Scholarship Form",
      rating: 5,
      review: "Helpful and easy to communicate with.",
      verified: false,
      active: false
    },

    {
      name: "Sample Customer",
      service: "College Admission",
      rating: 5,
      review: "The application process was easy to understand.",
      verified: false,
      active: false
    }

  ],


  /* =========================
     WEBSITE SETTINGS
     ========================= */
  settings: {

    language: "English",

    currency: "₹",

    showCharges: true,

    showReviews: true,

    showUpdates: true,

    showDocumentChecklist: true,

    showServiceFinder: true,

    showWhatsApp: true,

    showApplicationStatus: false,

    showAdminPanel: false,

    onlineOnly: true
  }

};