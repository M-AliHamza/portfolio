import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Ali Hamza',
  initials: 'AH',
  url: 'https://alihamza.dev',
  location: 'Sargodha, Pakistan',
  locationLink: 'https://www.google.com/maps/place/sargodha',
  description:
    'AI Engineer | Workflow Automation Expert | Full-Stack Developer',
  summary:
    'I am an AI Engineer and Workflow Automation Specialist with a strong focus on building intelligent, scalable systems that streamline business processes and enhance productivity. Leveraging tools such as LangChain, LangGraph, n8n, and Trigger.dev, along with Azure AI services. I design and implement advanced automation workflows and AI-powered solutions tailored to modern enterprise needs.\n\nAlongside my expertise in automation and AI, I am an experienced Full-Stack Developer with strong proficiency in Python, React, and Next.js. I specialize in building modern web applications, serverless cloud solutions, and AI-integrated systems. My work emphasizes clean architecture, maintainable code, secure API development, and high-performance applications, ensuring scalable and user-centric software solutions.',
  avatarUrl: '/me.png',
  skills: [
    'Python',
    'FastAPI',
    'Django',
    'LangChain',
    'LangGraph',
    'n8n Workflow Automation',
    'Trigger.dev',
    'PHP',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Azure OpenAI',
    'Azure Cognitive Search',
    'Docker',
    'Git',
    'CI/CD',
    'MySQL',
    'PostgreSQL',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: 'alihamza.softdev@gmail.com',
    tel: '+923067021863',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/M-AliHamza/',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ali-hamza-0201592a6',
        icon: Icons.linkedin,

        navbar: true,
      },
      LeetCode: {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/m_ali_hamza/',
        icon: Icons.leetcode,
        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/ali_hamza___',
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: 'Youtube',
        url: '',
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:alihamza.softdev@gmail.com',
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'GoSign',
      href: 'https://www.gosign.de/en/',
      badges: [],
      location: 'Sargodha, Pakistan',
      title:
        'AI Engineer | Workflow Automation Expert | Full-Stack Developer',
      logoUrl: '/gosign.png',
      start: 'May 2023',
      end: 'Current',
      description:
        'Designing and implementing AI-powered automation workflows using n8n, Trigger.dev, LangChain, and LangGraph, enabling intelligent business process automation. Developing scalable backend systems and APIs using Python (FastAPI), with a focus on secure authentication and high-performance architectures. Building modern, responsive web applications using React.js and Next.js. Integrating Azure AI services, including OpenAI and Cognitive Search, to develop LLM-driven solutions, RAG pipelines, and agent-based systems. Working with vector databases and cloud-native services to deliver scalable, production-ready AI applications, while continuously optimizing code quality and system performance.',
    },
    {
      company: 'Self-Employed',
      badges: [],
      href: 'https://www.upwork.com/',
      location: 'Sargodha, Pakistan',
      title: 'Full Stack Developer',
      logoUrl: '/freelance.png',
      start: '',
      end: '',
      description:
        'Developed full-stack web applications and automation solutions for clients across various industries, focusing on scalability and performance. Built responsive user interfaces using React.js and implemented backend systems using Python and Node.js, including RESTful API development and third-party integrations. Created automation scripts for data processing and workflow optimization. Collaborated closely with clients to gather requirements, provide technical guidance, and deliver high-quality solutions within deadlines, handling projects ranging from business websites to more complex web applications.',
    },
  ],
  education: [
    {
      school: 'University of Sargodha',
      href: 'https://su.edu.pk/',
      degree: 'Bachelor of Computer Science (BS-CS)',
      logoUrl: '/sargodha.png',
      start: '2019',
      end: '2023',
    },
    {
      school: 'Superior Group Of Colleges Sargodha',
      href: 'https://share.google/2ipg88wyJTrxB2JJD',
      degree: 'Intermediate Certificate (Pre-Engineering)',
      logoUrl: '/superior.jpg',
      start: '2017',
      end: '2019',
      grade: 'A+',
    },
    {
      school: 'Govt High School No. 2',
      href: 'https://share.google/5zq5vryQS10HiDn0e',
      degree: 'Secondary School Certificate (Science Group)',
      logoUrl: '/bise-sargodha.png',
      start: '2015',
      end: '2017',
      grade: 'A+',
    },
  ],
  projects: [
    {
      title: 'Pilot AI – Enterprise AI Chatbot Platform',
      href: '#',
      dates: '',
      active: false,
      description:
        'A scalable enterprise AI chatbot platform that enables intelligent, multimodal interactions across text, images, and documents.',
      detailedDescription:
        "This advanced AI platform empowers organizations with secure and intelligent automation by:\n\n• **Multimodal AI Capabilities**: Supports seamless interaction with text, images, and documents using LLM-powered responses  \n• **Context-Aware Intelligence (RAG)**: Integrates retrieval-augmented generation with vector databases to deliver accurate, context-driven answers from internal knowledge bases  \n• **Secure AI Hosting**: All models are deployed on Azure AI infrastructure, ensuring full data privacy and preventing external model training on sensitive company data  \n• **Workflow Automation**: Incorporates n8n workflows as callable functions, enabling the chatbot to trigger automated business processes dynamically  \n• **Enterprise-Ready Frontend**: Built with Next.js and secured using Azure Entra ID for robust authentication and cross-platform accessibility\n\nThe platform helps organizations streamline operations, enhance productivity, and maintain strict data governance while leveraging cutting-edge AI capabilities.",
      technologies: [
        'Next.js',
        'LangChain',
        'LLMs',
        'Azure AI Foundry',
        'Azure Entra ID',
        'Vector Databases',
        'n8n',
        'JavaScript',
      ],
      links: [],
      image: '',
      video: '',
      githubLink: '',
    },
    {
      title: 'DGA – AI Document Redaction & Anonymization Engine',
      href: '#',
      dates: '',
      active: true,
      description:
        'An automated AI-driven workflow that redacts sensitive personal data and handwritten signatures from real estate documents for Germany’s leading property auction house.',
      detailedDescription:
        "This sophisticated automation pipeline streamlines legal compliance and data privacy by:\n\n• **Automated PII Redaction**: Leverages a custom FastAPI Python backend to scan and mask sensitive personal identifiable information (PII) within complex PDF documents  \n• **Signature Detection**: Employs computer vision to identify and securely hide handwritten signatures, ensuring GDPR compliance for public listings  \n• **Intelligent Whitelisting**: Integrates with TYPO3 CMS via REST API to dynamically 'whitelist' specific property addresses while redacting all other location data  \n• **Multi-Language AI Communication**: Uses LLM agents (LangChain) to detect sender language and provide context-specific email responses in German or English  \n• **Robust Error Logging**: Features a comprehensive monitoring layer that tracks every stage of the document lifecycle, from IMAP trigger to final cloud storage\n",
      technologies: [
        'n8n',
        'Python',
        'FastAPI',
        'LangChain',
        'REST API',
      ],
      links: [],
      image: '',
      video: '',
      githubLink: '',
    },
    {
      title: 'GDPR Compliance Crawler',
      href: '#',
      dates: '',
      active: false,
      description:
        'A comprehensive GDPR compliance tool that automatically scans websites for cookies, external resources, and potential privacy violations.',
      detailedDescription:
        "This advanced crawler helps businesses ensure GDPR compliance by:\n\n• **Cookie Detection**: Automatically identifies all cookies used on a website  \n• **External Resource Tracking**: Monitors third-party scripts and resources  \n• **Security Auditing**: Identifies potential security vulnerabilities  \n• **Automated Reporting**: Generates detailed compliance reports  \n• **Real-time Monitoring**: Continuous scanning for new compliance issues\n\nThe tool helps clients protect their users' personal data and avoid hefty GDPR fines by providing actionable insights and recommendations.",
      technologies: [
        'PHP',
        'MySQL',
        'JavaScript',
        'Node.js',
        'Web Scraping',
        'Security Analysis',
      ],
      links: [],
      image: '',
      video: '',
      githubLink: '',
    },
    {
      title: 'Gosign – Centralized Dashboard Platform',
      href: '#',
      dates: '',
      active: false,
      description:
        'A centralized dashboard system designed to manage and streamline data, leads, and operations for 500+ kitchen retail stores across the Netherlands.',
      detailedDescription:
        "This robust platform enhances operational efficiency and reliability by:\n\n• **Centralized Data Management**: Serves as a single source of truth for store data, leads, customer reviews, and kitchen plans across 500+ locations  \n• **High Availability Architecture**: Implements advanced caching strategies to deliver a fail-safe system with 99.99% uptime  \n• **Performance Optimization**: Ensures faster data access and improved responsiveness through efficient cache management  \n• **Reduced External Dependencies**: Redesigned data flow to cut reliance on third-party data sources by 50%, simplifying system complexity  \n• **Scalable Infrastructure**: Provides a unified platform for managing and distributing data seamlessly to multiple websites\n\nThe solution enables businesses to maintain consistency, improve performance, and efficiently manage large-scale operations from a single platform.",
      technologies: [
        'PHP',
        'Symfony',
        'MySQL',
        'JavaScript',
        'Caching',
        'System Architecture',
      ],
      links: [],
      image: '',
      video: '',
      githubLink: '',
    }
  ],
  hackathons: [],
} as const;
