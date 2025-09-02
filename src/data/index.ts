// data/index.ts

export const gridItems = [
  {
    id: 1,
    // Perubahan di sini:
    className: "bento-item-1 aspect-[16/9] w-full",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "text-white z-10 mb-4 text-3xl",
    img: "/assets/myself.png",
  },
  {
    id: 2,
    title: "Web Developer",
    // Perubahan di sini:
    className: "bento-item-2 [@media(max-width:999px)]:h-[9rem]",
    imgClassName: "opacity-20",
    titleClassName: "justify-end text-right",
    positions: [
      "Web Developer", 
      "Graphic Designer", 
      "Fullstack Developer", 
      "Video Editor", 
      "Illustrator", 
      "Animator"
    ],
    experiences: [
      { number: 3, unit: "Years of" },
      { number: 3, unit: "Years of" },
      { number: 1, unit: "Year of" },
      { number: 6, unit: "Months of" },
      { number: 3, unit: "Months of" },
      { number: 1, unit: "Month of" }
    ],
    flower: "/assets/flower.png",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    // Perubahan di sini:
    className: "bento-item-3 [@media(max-width:999px)]:h-[9rem]",
    imgClassName: "opacity-30",
    titleClassName: "justify-start",
    techStacks: [
      { icon: "/img/techstack/html.svg", name: "HTML" },
      { icon: "/img/techstack/css.svg", name: "CSS" },
      { icon: "/img/techstack/javascript.svg", name: "JavaScript" },
      { icon: "/img/techstack/typescript.svg", name: "TypeScript" },
      { icon: "/img/techstack/php.svg", name: "PHP" },
      { icon: "/img/techstack/laravel.svg", name: "Laravel" },
      { icon: "/img/techstack/vue.svg", name: "VueJS" },
      { icon: "/img/techstack/react.svg", name: "ReactJS" },
      { icon: "/img/techstack/nextjs.svg", name: "Next.js" },
      { icon: "/img/techstack/dotnet.svg", name: ".NET 8" },
      { icon: "/img/techstack/nodejs.svg", name: "Node.js" },
      { icon: "/img/techstack/expressjs.svg", name: "Express.js" },
      { icon: "/img/techstack/framermotion.svg", name: "Framer Motion" },
      { icon: "/img/techstack/vite.svg", name: "Vite" },
      { icon: "/img/techstack/flutter.svg", name: "Flutter" },
      { icon: "/img/techstack/tailwind.svg", name: "Tailwind CSS" },
      { icon: "/img/techstack/bootstrap.svg", name: "Bootstrap 5" },
      { icon: "/img/techstack/mongodb.svg", name: "MongoDB" },
      { icon: "/img/techstack/postgresql.svg", name: "PostgreSQL" },
      { icon: "/img/techstack/mysql.svg", name: "MySQL" },
      { icon: "/img/techstack/figma.svg", name: "Figma" },
      { icon: "/img/techstack/canva.svg", name: "Canva" },
      { icon: "/img/techstack/photoshop.svg", name: "Adobe Photoshop" },
      { icon: "/img/techstack/picsart.svg", name: "PicsArt" },
      { icon: "/img/techstack/ibispaint.svg", name: "Ibis Paint X" },
      { icon: "/img/techstack/illustrator.svg", name: "Adobe Illustator" },
      { icon: "/img/techstack/animate.svg", name: "Adobe Animate" },
      { icon: "/img/techstack/aftereffects.svg", name: "After Effects" },
      { icon: "/img/techstack/filmora.svg", name: "Filmora" },
      { icon: "/img/techstack/capcut.svg", name: "CapCut" }
    ],
    img: "/assets/jellyfish_dance.gif",
  },
  {
    id: 4,
    title: "Wanna see what I can whip up?",
    description: "Eye-catching UIs, smooth user flows, and backends that never skip a beat — all built to make your ideas shine.",
    className:"bento-item-4 min-h-[6rem] 400:min-h-[8rem] 576:min-h-[12rem]",
    imgClassName: "opacity-20 object-cover object-bottom",
    titleClassName: "justify-center text-center", // Mengubah alignment text
    // Path gambar bunga
    flower: "/assets/flower-cat.png",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className:"bento-item-6 576:min-h-[12rem]",
    imgClassName: "opacity-30 dark:opacity-50",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "/assets/witch.gif",
    spareImg: "",
  },
];

export const certificates = [
  {
    id: 1,
    imageUrl: "img/certificates/1.png",
    shortTitle: "Software Engineering",
    title: "Software Engineering Skill Competency Certification",
    description: "National certification for software engineering skill competency (UKK RPL), evaluating full-stack development capabilities aligned with industry standards.",
    companyLogo: "/img/companies/inagata.png",
    companyName: "PT Inagata Technosmith",
    issueDate: "25 February 2025",
    validity: "Lifetime"
  },
  {
    id: 2,
    imageUrl: "img/certificates/2.png",
    shortTitle: "Junior Programmer",
    title: "Junior Programmer Certification - BNSP",
    description: "National-level certification for junior programming competency covering algorithms, data structures, and basic web application development.",
    companyLogo: "/img/companies/bnsp.png",
    companyName: "BNSP Indonesia",
    issueDate: "14 July 2025",
    validity: "3 Years"
  },
  {
    id: 3,
    imageUrl: "img/certificates/3.png",
    shortTitle: "Graphic Design",
    title: "Digital Graphic Design Certification",
    description: "Certification of digital design proficiency including layout, color theory, typography, and creative design tools (Adobe Suite).",
    companyLogo: "/img/companies/telkom.png",
    companyName: "PT Telkom Indonesia",
    issueDate: "6 December 2024",
    validity: "Lifetime"
  },
  {
    id: 4,
    imageUrl: "img/certificates/4.png",
    shortTitle: "Junior Graphic Designer",
    title: "Junior Graphic Design Certification - BNSP",
    description: "Foundational certification in visual design including layout composition, basic graphic tools, and applied design principles.",
    companyLogo: "/img/companies/bnsp.png",
    companyName: "BNSP Indonesia",
    issueDate: "24 January 2025",
    validity: "3 Years"
  },
  {
    id: 5,
    imageUrl: "img/certificates/5.png",
    shortTitle: "Industry Internship",
    title: "Software Development Industry Internship Certificate",
    description: "Internship certificate awarded for the successful completion of a 6-month software development placement in a professional company.",
    companyLogo: "/img/companies/amerta.png",
    companyName: "PT Amerta Asa Media",
    issueDate: "20 December 2024",
    validity: "Lifetime"
  },
  {
    id: 6,
    imageUrl: "img/certificates/6.png",
    shortTitle: "TOEIC Certification",
    title: "TOEIC Listening and Reading Test - ETS Global",
    description: "International certification demonstrating high-level English proficiency for professional environments, with a TOEIC score of 890/990.",
    companyLogo: "/img/companies/ets.png",
    companyName: "ETS Global",
    issueDate: "2 August 2024",
    validity: "2 Years"
  },
  {
    id: 7,
    imageUrl: "img/certificates/7.png",
    shortTitle: "TOEIC Excellence Program",
    title: "English Discoveries Completion Certificate - TOEIC Excellence",
    description: "Awarded by Edusoft Ltd., a subsidiary of ETS, for successfully completing the English Discoveries program under the TOEIC Excellence Program by the Directorate General of Vocational Education.",
    companyLogo: "/img/companies/edusoft.png",
    companyName: "Edusoft Ltd.",
    issueDate: "August 2024",
    validity: "Lifetime"
  },
  {
    id: 8,
    imageUrl: "img/certificates/8.png",
    shortTitle: "Internship Completion",
    title: "Industry Internship Completion Certificate",
    description: "Certificate of internship completion issued by the vocational school upon successful participation in a software industry internship program.",
    companyLogo: "/img/companies/smk.png",
    companyName: "SMKN 1 Purwosari",
    issueDate: "31 December 2024",
    validity: "Lifetime"
  },
  {
    id: 9,
    imageUrl: "img/certificates/9.png",
    shortTitle: "Academic Excellence",
    title: "2nd Place Best Graduate in Final Semester",
    description: "Awarded for graduating as the second-best student in the final semester among all students in the Software Engineering department.",
    companyLogo: "/img/companies/smk.png",
    companyName: "SMKN 1 Purwosari",
    issueDate: "5 May 2025",
    validity: "Lifetime"
  },
  {
    id: 10,
    imageUrl: "img/certificates/10.png",
    shortTitle: "Student Council",
    title: "Student Council Membership Certificate",
    description: "Certificate of active participation as a member of the Student Council (OSIS), contributing to student governance, leadership, and event organization.",
    companyLogo: "/img/companies/smk.png",
    companyName: "SMKN 1 Purwosari",
    issueDate: "2 September 2024",
    validity: "Lifetime"
  }
];

export const workCategories = [
  {
    id: 1,
    title: "Web Development & Web Design",
    buttonTitle: ["Web Development", "& Web Design"],
    thumbnailDark: "/img/works/development-dark.svg",
    thumbnail: "/img/works/development.svg",
    items: [
      {
        id: 1,
        title: "[Fullstack] Himmel",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/fullstack-himmel.png",
        category: "Web Development",
        desc: "A comprehensive platform designed to efficiently manage a ticketing and customer service system. The platform is divided into two main parts: the Admin Panel and the Customer Frontend.\n\nThe Admin Panel provides full control with advanced features such as an interactive real-time dashboard, user management with role-based access control (RBAC), and the management of technical modules, transactions, and vouchers.\n\nThe system also includes a real-time communication feature, allowing admins to interact directly with customers. Furthermore, there's a QR code-based ticketing system, complaint tracking, and a voucher management system with usage history. The entire admin panel is responsive and supports dark mode for user comfort.\n\nOn the Customer Frontend, users can enjoy a seamless experience with JWT-based authentication, profile management, and a redeemable voucher system. Customers can easily place orders, track their status, and view their transaction and complaint history.\n\nEvery purchased ticket comes with a unique QR code for a fast validation process. This frontend is fully responsive and supports dark mode, ensuring optimal accessibility across various devices.\n\nThe project is built using Express.js as the backend framework, MongoDB with Mongoose for the database, and leverages a variety of other key technologies such as jsonwebtoken for secure authentication, bcrypt for password hashing, and nodemailer for email services.\n\nThe system also integrates node-cron for scheduled tasks, a QR code API for tickets, and dashboard-ready APIs for analytics, making it a robust and integrated end-to-end solution.",
        time: "One and a half months",
        tools: ["Vue.js 3", "Express.js", "MongoDB", "Tailwind CSS"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/Landing-Page.gif",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/Admin-Page.gif",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/himmel.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/MOCKUP.jpg",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/Postman_himmel.png",
        ],
        link2: "https://github.com/nursilayusmitha/Himmel-Frontend",
        link3: "https://github.com/nursilayusmitha/Himmel-Backend",
        link4: "https://youtu.be/g7E3Ak7mhG0?si=HLdaWUNAZ6d-iCdg" 

      },
      {
        id: 2,
        title: "[Front-end] Web Amerta",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/frontend-amerta.png",
        category: "Web Development",
        desc: "Developed the corporate website for PT. Amerta Asa Media, an Internet Service Provider, during an internship. The project, a collaboration with Fransiska Kania Untoro, features comprehensive sections including Home, About Us, Services, Packages, Testimonials, Our Activities, and Contact. Built using HTML, CSS, and vanilla JavaScript with the Bootstrap framework, the site also includes a multi-step order form for a seamless user experience.",
        time: "1 month",
        tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/amerta1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/amerta2.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/amerta3.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/amerta4.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/amerta5.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/amerta6.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/amerta7.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/amerta8.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/amerta9.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/amerta10.png"
        ]
      },
      {
        id: 3,
        title: "[Back-end] Flowganized",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/backend-flowganized.png",
        category: "Web Development",
        desc: "Developed the backend for Flowganized, a comprehensive company management application, using .NET 8 and PostgreSQL. This individual project is designed to streamline organizational processes by enabling users to create, manage progress, and set deadlines for projects. It features robust tools for project assignment to specific teams and departments, as well as individual, team, and department-level notes. The application includes a secure JWT-based authentication system with email validation and password recovery, ensuring easy and secure management of user roles and access permissions.",
        time: "2 weeks",
        tools: [".NET 8", "PostgreSQL", "Swagger", "Postman"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/flowganized1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/flowganized2.png",
        ]
      },
      {
        id: 4,
        title: "Portfolio 2024",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/portfolio-2024.png",
        category: "Web Development",
        desc: "Created the frontend for a personal portfolio website in 2024, developed to secure a school internship. Built with HTML, CSS, JavaScript, and Bootstrap, the site features key sections such as Hero, About, Experience, Projects, and Contact. The Projects section primarily showcases my work completed during my time in school, providing a clear overview of my skills and experience.",
        time: "3 weeks",
        tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/portfolio2024-1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/portfolio2024-2.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/portfolio2024-3.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/portfolio2024-4.png",
        ]
      },
      {
        id: 5,
        title: "Portfolio 2025",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/portfolio-2025.png",
        category: "Web Development",
        desc: "Designed and developed my latest personal portfolio website (2025) to professionally introduce myself and showcase my skills as I enter the workforce. This modern, responsive site is built using React.js, Next.js, Framer Motion, and Tailwind CSS. It is structured with essential sections including Hero, About, Work, and an FAQ, highlighting my capabilities and professional background to potential employers.",
        time: "2 weeks",
        tools: ["React.js", "Next.js", "Tailwind CSS", "Framer-motion"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/portfolio2025-1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/portfolio2025-2.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/portfolio2025-3.png",
        ]
      },
      {
        id: 6,
        title: "Flutter | E-commerce",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/flutter-ecommerce.png",
        category: "Mobile Development",
        desc: "Developed an e-commerce mobile application for Femina to simplify the ordering of makeup products. As a school project, this app features core e-commerce functionalities, including a home page for Browse, product listings, a favorites section, and a shopping cart for managing orders.",
        time: "1 month",
        tools: ["Flutter", "Dart"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/femina1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/femina2.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/femina3.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/femina4.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/femina5.png",
        ]
      },
      {
        id: 7,
        title: "Flutter | Flartravel",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/flutter-flartravel.png",
        category: "Mobile Development",
        desc: "Collaborated with Salwa Diah Mawardah on Flartravel, a mobile application designed to simplify booking tickets for hotels and tourist attractions across Indonesia. As a school project, the app’s goal is to promote and market Indonesia’s beautiful destinations, making it easier for people to travel and explore the country.",
        time: "2 weeks",
        tools: ["Flutter", "Dart"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/flartravel1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/flartravel2.png",
        ]
      },
      {
        id: 8,
        title: "Flutter | Ella's Bakery",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/flutter-ellabakery.png",
        category: "Mobile Development",
        desc: "Created a mobile application for Ella's Bakery to streamline the ordering process. The app allows customers to place orders with details such as menu items, quantity, name, and WhatsApp number. With payment options including QRIS and direct payment, the app helps the seller easily track and manage daily orders, ensuring a more efficient workflow. This was a project completed during my school years.",
        time: "A week",
        tools: ["Flutter", "Dart"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/ellabakery.png",
        ]
      },
      {
        id: 9,
        title: "Flutter | Temperature Conversion",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/flutter-konversisuhu.png",
        category: "Mobile Development",
        desc: "Developed a mobile application as a school project to perform temperature conversions. The app allows users to easily convert temperatures between Celsius, Fahrenheit, Kelvin, and Réaumur, providing a simple and practical tool for various daily needs.",
        time: "A day",
        tools: ["Flutter", "Dart"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/suhu1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/suhu2.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/suhu3.png",
        ]
      },
      {
        id: 10,
        title: "Flutter | Pretty Movies",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/flutter-prettymovies.png",
        category: "Mobile Development",
        desc: "Built a mobile application, Pretty Movies, as a school project to learn and demonstrate API consumption. The app fetches movie data from The Movie Database (TMDB) API, allowing users to browse and view movie information. This project focused on understanding and implementing API calls to display dynamic content.",
        time: "A day",
        tools: ["Flutter", "Dart"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/prettymovies1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/prettymovies2.png",
        ]
      },
      {
        id: 11,
        title: "UI/UX Portfolio 2025",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/design-portfolio.png",
        category: "Web Design",
        desc: "Designed the UI/UX for my personal Portfolio 2025 using Figma. This design project served as the blueprint for developing my latest portfolio website, ensuring a clear and consistent visual and user experience before the coding phase. It includes layouts for the Hero, About, Work, and FAQ sections, providing a strong foundation for the final product.",
        time: "A day",
        tools: ["Figma"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/figma-portfolio.png",
        ]
      },
      {
        id: 12,
        title: "Creative Portfolio 2025",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Development/creative-portofolio.png",
        category: "Web Design",
        desc: "A curated showcase of my work as a Web Developer and Creative Technologist, blending development with design and storytelling. From web applications to creative visuals and multimedia, each project reflects my belief that technology should not only work — it should connect, inspire, and create meaningful experiences.",
        time: "A day",
        tools: ["Canva"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Development/work/creative-portfolio.png",
        ],
        link: "https://ppbungeoppang.my.canva.site/",
        link5:"https://drive.google.com/file/d/1yE3a7qrgxpRPMDyh2btruMcuvvCaCvAp/view?usp=sharing"
      },
    ]
  },
  {
    id: 2,
    title: "Graphic Design & Photo Design",
    buttonTitle: ["Graphic Design", "& Photo Design"],
    thumbnail: "/img/works/design.svg",
    thumbnailDark: "/img/works/design-dark.svg",
    items: [
      {
        id: 1,
        title: "Karang Taruna | Activity Portfolio",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/karang-taruna.png",
        category: "Design Impact",
        desc: "This isn't just a portfolio—it's a collection of creative adventures with Karang Taruna. I had a blast designing everything from event flyers to social media campaigns, all with one goal: to get people excited and involved! This is just a glimpse into my journey, and the creative fun doesn't stop here.",
        time: "-",
        tools: ["Photoshop", "Canva"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/design-coupon.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/preview-flyer1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/preview-flyer2.png"
        ]
      },
      {
        id: 3,
        title: "Amerta Asa Media | Intern Portfolio",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/intern-amerta.png",
        category: "Design Impact",
        desc: "This is a sneak peek into my design work during my internship at PT Amerta Asa Media. As a creative intern, I had the opportunity to contribute to various projects, crafting everything from social media content to professional brochures and banners. This is just a glimpse of what I can do.",
        time: "-",
        tools: ["Photoshop", "Canva"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/banner-1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/banner-2.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/brochure-1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/brochure-2.png"
        ]
      },
      {
        id: 3,
        title: "Student Council | Activity Portfolio",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/student-council.png",
        category: "Design Impact",
        desc: "As a member of the Student Council, I was the go-to person for all things design! This collection shows off my work in visual communication, which helped get students excited about school events and initiatives. These aren't just designs; they’re a peek into how I turned creative ideas into impactful visuals for our entire school community.",
        time: "-",
        tools: ["Photoshop", "Canva"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/feed.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/documentation.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/poster.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/banner.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/story-frames.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/photo-frames.png"
        ]
      },
      {
        id: 4,
        title: "WELLWIN Banner",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/wellwin.png",
        category: "What I've done",
        desc: "I had the pleasure of creating a brand banner for WELLWIN, a local business specializing in welding, fences, canopy fabrication, and much more. The design was crafted to reflect their craftsmanship and professionalism, helping them attract more customers in the community.",
        time: "Several minutes",
        tools: ["Canva"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/wellwin.png",
        ],
      },
       {
        id: 5,
        title: "Kania Farma Banner",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/kania-farma.png",
        category: "What I've done",
        desc: "This project involved designing a professional banner for Kania Farma pharmacy. My goal was to create a clean, trustworthy, and easily recognizable visual identity that would help the pharmacy stand out and communicate a sense of reliability to its customers.",
        time: "1 Hour",
        tools: ["Canva"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/kania-farma.png"
        ],
      },
       {
        id: 6,
        title: "INDOMARET Poster",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/indomaret.png",
        category: "What I've done",
        desc: "I designed a promotional poster for a coloring competition held at Indomaret. The poster was created to be fun and engaging, with the aim of attracting children and families to participate and drive foot traffic to the store.",
        time: "Several minutes",
        tools: ["Canva"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/indomaret.png"
        ],
      },
      {
        id: 7,
        title: "Dream Car Poster",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/dream-car.png",
        category: "What I've done",
        desc: "I designed a vibrant and imaginative poster showcasing a dream car of mine. The design was created to inspire and captivate viewers, highlighting the sleek and futuristic features of the vehicle.",
        time: "Several minutes",
        tools: ["Adobe Photoshop"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/dream-car.png"
        ],
      },
      {
        id: 8,
        title: "Burger Sale Poster",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/burger-sale.png",
        category: "What I've done",
        desc: "I designed a promotional poster for a burger sale event. The poster was created to be eye-catching and appetizing, with the aim of attracting customers to boosting sales.",
        time: "Several minutes",
        tools: ["Adobe Photoshop"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/burger-sale.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/burger-saleid.png"
        ],
      },
      {
        id: 9,
        title: "Scrapbook Template",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/scrapbook1.png",
        category: "What I've done",
        desc: "I created a scrapbook template that allows users to easily customize and create their own scrapbook pages. The template features a playful design with various elements that can be mixed and matched.",
        time: "About 2 hours",
        tools: ["Adobe Photoshop"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/scrapbook-template.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/scrapbook1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/scrapbook2.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/scrapbook3.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/scrapbook4.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/scrapbook5.png"
        ],
      },
      {
        id: 10,
        title: "Best Seller Poster",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/mixue-bestseller.png",
        category: "What I've done",
        desc: "I designed a promotional poster for a best-selling product at Mixue. The poster was created to be visually appealing.",
        time: "Several minutes",
        tools: ["Canva"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/mixue-bestseller.png"
        ],
      },
      {
        id: 11,
        title: "T-Shirt Design",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/cover-sweet.png",
        category: "What I've done",
        desc: "I designed a T-shirt graphic that showcases a unique and eye-catching design. The graphic was created to appeal to a wide audience.",
        time: "About 2 hours",
        tools: ["Canva"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/cover-sweet.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/sweet1.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/sweet2.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/sweet3.png",
          "https://nursilayusmitha.github.io/my-assets/work/Design/sweet4.png"
        ],
      },
      {
        id: 11,
        title: "Sweatwear Design",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/work/Design/cover-chaos.jpg",
        category: "What I've done",
        desc: "I designed a sweatwear graphic that showcases a unique and eye-catching design. The graphic was created to appeal to a wide audience.",
        time: "About 2 hours",
        tools: ["Canva"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/work/Design/cover-chaos.jpg",
          "https://nursilayusmitha.github.io/my-assets/work/Design/chaos1.jpg",
          "https://nursilayusmitha.github.io/my-assets/work/Design/chaos2.jpg",
          "https://nursilayusmitha.github.io/my-assets/work/Design/chaos3.jpg",
          "https://nursilayusmitha.github.io/my-assets/work/Design/chaos4.jpg",
          "https://nursilayusmitha.github.io/my-assets/work/Design/chaos5.jpg"
        ],
      },
    ]
  },
  {
    id: 3,
    title: "Illustration & Animation",
    buttonTitle: ["Illustration", "& Animation"],
    thumbnail: "/img/works/art.svg",
    thumbnailDark: "/img/works/art-dark.svg",
    items: [
      {
        id: 1,
        title: "Myself",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/Div/myself.png",
        category: "Cute Animation",
        desc: "This project is a personal, pixel-art self-portrait. I started with an AI-generated base for the background and my likeness, then carefully redrew and refined parts of the illustration and layout to better capture my personal style. After adding my own creative touches, I brought the pixel art to life through animation in Filmora.",
        time: "3 Days",
        tools: ["Ibis Paint X", "Filmora"],
        images: [
          "https://nursilayusmitha.github.io/my-assets/Div/gif-click.gif",
          "https://nursilayusmitha.github.io/my-assets/Div/gif-load.gif",
          "https://nursilayusmitha.github.io/my-assets/Div/gif-first.gif",
          "https://nursilayusmitha.github.io/my-assets/Div/gif-second.gif",
        ]
      },
      {
        id: 2,
        title: "Cute Duck",
        thumbnail: "/assets/duckdance.gif",
        category: "Cute Animation",
        desc: "This project features an original pixel-art illustration of a duck, created from scratch. I designed two distinct GIFs: one showing the duck blinking and another of it dancing. Both animations were completed in Filmora, showcasing my ability to create and animate characters with a playful twist.",
        time: "1 Day",
        tools: ["Ibis Paint X", "Filmora"],
        images: [
          "/assets/duck.gif",
          "/assets/duckdance.gif"
        ]
      },
      {
        id: 3,
        title: "Cute Witch",
        thumbnail: "/assets/witch.gif",
        category: "Cute Animation",
        desc: "Here's a pixel-art illustration of a witch, which I created entirely from the ground up. I focused on designing a character with a unique style and cute personality. The final illustration was then animated in Filmora to give it movement and character.",
        time: "1 Day",
        tools: ["Ibis Paint X", "Filmora"],
        images: [
          "/assets/witch.gif"
        ]
      },
    ]
  },
  {
    id: 4,
    title: "Video Edit & Animation",
    buttonTitle: ["Video Edit", "& Animation"],
    thumbnail: "/img/works/video.svg",
    thumbnailDark: "/img/works/video-dark.svg",
    items: [
      {
        id: 1,
        title: "[Demo Video] Himmel",
        thumbnail: "https://nursilayusmitha.github.io/my-assets/Div/demo.png",
        desc: "This video is a comprehensive demo of Himmel, a full-fledged booking system web application. It highlights the entire system, from the complex back-end logic to the seamless front-end interfaces for both administrators and customers. Designed to function like a real-world system, Himmel is a testament to my skills in developing robust, end-to-end web applications.",
        time: "3 Days",
        tools: ["Filmora", "Canva", "Figma"],
        images: [],
        videoyoutube: "https://youtu.be/g7E3Ak7mhG0?si=HLdaWUNAZ6d-iCdg",
        link4: "https://youtu.be/g7E3Ak7mhG0?si=HLdaWUNAZ6d-iCdg" 
      }
    ]
  }
];

export const socialMedia = [
  {
    id: 1,
    imgdark: "/assets/github-dark.svg",
    img: "/assets/github.svg",
    link: "https://github.com/nursilayusmitha",
    alt: "GitHub" // Tambahkan properti alt
  },
  {
    id: 2,
    imgdark: "/assets/instagram-dark.svg",
    img: "/assets/instagram.svg",
    link: "https://www.instagram.com/nursilayusmitha/",
    alt: "Instagram" // Tambahkan properti alt
  },
  {
    id: 3,
    imgdark: "/assets/linkedin-dark.svg",
    img: "/assets/linkedin.svg",
    link: "https://www.linkedin.com/in/nursilayusmitha/",
    alt: "LinkedIn" // Tambahkan properti alt
  },
  {
    id: 4,
    imgdark: "/assets/youtube-dark.svg",
    img: "/assets/youtube.svg",
    link: "https://www.youtube.com/@aelara_id",
    alt: "YouTube" // Tambahkan properti alt
  },
  {
    id: 5,
    imgdark: "/assets/whatsapp-dark.svg",
    img: "/assets/whatsapp.svg",
    link: "https://wa.me/+6285158556806",
    alt: "WhatsApp" // Tambahkan properti alt
  },
];

export const faqData = [
  {
    id: 1,
    question: "How do we keep in touch without carrier pigeons?",
    answer: "The best way is to email me at nursilayusmitha@gmail.com — I always keep an eye on my inbox. If you need something urgent, you can message me on WhatsApp, but I prefer email since WhatsApp is more of my personal space."
  },
  {
    id: 2,
    question: "So… where in the world am I right now?",
    answer: "I’ve just graduated and I’m currently looking for new opportunities. If you’ve got an exciting project or a job opening, I’d love to hear from you!"
  },
  {
    id: 3,
    question: "What kind of magic have I built before?",
    answer: "I’ve worked on web apps, graphic designs (posters, logos, flyers, and more), UI/UX designs, complex backends, and even mobile development. Basically — if it’s digital, I’m probably interested in building it."
  },
  {
    id: 4,
    question: "How fast can we make things happen?",
    answer: "It depends on the complexity. For a full-stack project (both backend and frontend) with the complexity of a professional web app or real-time system, it can take around a month or more. I always tailor the timeline to match the project’s scope and quality goals."
  },
  {
    id: 5,
    question: "Can we work together even if you’re on the other side of the planet?",
    answer: "I haven’t yet worked with international clients, but if the opportunity comes, I’m absolutely ready — and I’m flexible with different time zones."
  },
  {
    id: 6,
    question: "What’s in my digital toolbox?",
    answer: "React.js, Next.js, Vue.js, Tailwind CSS, Express.js, .NET, PostgreSQL, MongoDB, and more. I’m always eager to learn new technologies, and if a project requires me to master a specific tool or language, I’ll dive in and get up to speed quickly."
  },
];
