const Classes = [
  {
    label: "CS6035: Introduction to Information Security",
    key: 6035,
    name: "Introduction to Information Security",
    skills: ["Writing", "Coding", "Algorithms"],
    content: ["Assignments", "Tests", "Group Projects"],
    rating: 5,
    classSize: 200,
    description: "Introduction to Information Security is a graduate-level introductory course in information security. It teaches the basic concepts and principles of information security, and the fundamental approaches to secure computers and networks. Its main topics include: security basics, security management and risk assessment, software security, operating systems security, database security, cryptography algorithms and protocols, network authentication and secure network applications, malicious malware, network threats and defenses, web security, mobile security, legal and ethical issues, and privacy."
  },
  {
    label: "CS6200: Introduction to Operating Systems",
    key: 6200,
    name: "Introduction to Operating Systems",
    skills: ["Writing", "Coding", "Algorithms"],
    content: ["Lectures"],
    rating: 3,
    classSize: 200,
    description: "Introduction to Operating Systems is a graduate-level introductory course in operating systems. This course teaches basic operating system abstractions, mechanisms, and their implementations. The core of the course focuses on OS support for concurrency (threads) and synchronization, resource management (CPU, memory, I/O), and distributed services. The practical component of the course teaches multithread programming, inter-process communication, and distributed interactions via RPC."
  },
  {
    label: "CS6250: Computer Networks",
    key: 6250,
    name: "Computer Networks",
    skills: ["Writing", "Coding", "Algorithms"],
    content: ["Discussion"],
    rating: 4,
    classSize: 200,
    description: "This project-based course will explore research topics in computer networking, primarily at the IP layer and above. Students will gain exposure to burgeoning areas of computer networking and learn how to use the tools commonly used for networking research, today."
  },
  {
    label: "CS6262: Network Security",
    key: 6262,
    name: "Network Security",
    skills: ["Writing", "Coding", "Algorithms"],
    content: ["Discussion"],
    rating: 2,
    classSize: 200,
    description: "Topics to be covered in CS 6262 include: Introduction and review of networking and security basics, Large-scale attacks and impacts, DDoS, Malware-based attacks, phishing/frauds, underground economy/infrastructures, Penetration testing and security assessments, Basic techniques and tools, Social engineering and human factors, Security in Internet protocols: IP, TCP, DNS, and BGP, Vulnerabilities in TCP/IP, DNS cache poisoning and DNSSEC, BGP Security, Advanced web security, Web security model, Defenses against attacks on web applications, HTTPS: goals and pitfalls, Content security policies and web workers, Advanced malware analysis, Evasive malware, APT, Mobile malware, Advanced network monitoring, Botnet detection (BotHunter and BotMiner), Internet-scale threat analysis, Mapping the Internet, e.g., Z-map, Domain/network reputation, Bitcoins and crypto-currencies, Basics of blockchains and bitcoins, New/emerging technologies, Big data and security, Big data for security: applying machine learning to security analytics, e.g., building detection models, Security of big data, in particular, adversarial machine learning: poisoning of input/training data and evasion of learned models, Examples in malware analysis as well as web searches, Cloud security, 'Property-preserving' encryption: goals and pitfalls, Oblivious RAM, Virtual-machine security, Attack-tolerant systems, Secret-sharing, Byzantine fault-tolerant systems, Attack tolerance via diversification"
  },
  {
    label: "CS6263: Cyber Physical Systems Security",
    key: 6263,
    name: "Cyber Physical Systems Security",
    skills: ["Writing", "Coding", "Algorithms"],
    content: ["Lectures"],
    rating: 0,
    classSize: 200,
    description: "This course (formerly CS 8803 O07 Special Topics) provides an introduction to security issues relating to various cyber-physical systems including industrial control systems and those considered critical infrastructure systems."
  },
  {
    label: "CS6290: High Performance Computer Architecture",
    key: 6290,
    name: "High Performance Computer Architecture",
    skills: ["Writing", "Coding", "Algorithms"],
    content: ["Discussion"],
    rating: 0,
    classSize: 200,
    description: "This course covers modern computer architecture, including branch prediction, out-of-order instruction execution, cache optimizations, multi-level caches, memory and storage, cache coherence and consistency, and multi- and many-core processors."
  },
  {
    label: "CS6291: Embedded Software",
    key: 6291,
    name: "Embedded Software",
    skills: ["Reading", "Coding", "Algorithms"],
    content: ["Lectures"],
    rating: 5,
    classSize: 200,
    description: "In the 21st century, embedded systems are the systems of future with cellular phones, smart-phones, tablets becoming the dominant platforms for computing and communication. The ubiquity of information and the associated need for the computation that accompanies it is driving this revolution only to be accelerated by the new paradigms such as the Internet-of-Things (IoT). These platforms are clearly very different in terms of their processing requirements which are very unique: real-time needs, high performance but at low energy, compact-code and data segments, and most importantly ever changing software stack. Such unique requirements have led to a complete redesign and reinvention of the both hardware and the software stack from ground up, for example, brand new processors such as ARM, DSPs, network processors were invented all the way up to new virtual machines such as Dalvik, new operating systems such as Android and new programming models and compiler optimizations. The goal of this course is to take a holistic view of the embedded system stack with a focus on processor architectures, instruction sets and the associated advanced compiler optimizations that take advantage of the same. "
  },
  {
    label: "CS6300: Software Development Processes",
    key: 6300,
    name: "Software Development Processes",
    skills: ["Writing", "Drawing", "Coding", "Debugging"],
    content: ["Discussion"],
    rating: 4.5,
    classSize: 200,
    description: "This course provides an in-depth study of the process of developing software systems, including the use of software processes in actual product development, techniques used to ensure quality of the software products and maintenance tasks performed as software evolves. By the end of the course, students will understand the role of software processes in the development of software and will have experienced several types of processes, from rigid to agile. Students will also become familiar with a variety of modern technologies and development techniques and understand their connection to software processes."
  },
  {
    label: "CS6310: Software Architecture and Design",
    key: 6310,
    name: "Software Architecture and Design",
    skills: ["Writing", "Drawing", "Coding", "VR", "Mobile", "Debugging"],
    content: ["Individual Projects"],
    rating: 0,
    classSize: 200,
    description: "Software Architecture and Design will provide students with the principles and concepts involved in the analysis and design of large software systems. "
  },
  {
    label: "CS6460: Educational Technology",
    key: 6460,
    name: "Educational Technology",
    skills: ["Writing", "Reading", "Coding", "VR", "Mobile", "Gaming"],
    content: ["Individual Projects", "Lectures"],
    rating: 0,
    classSize: 200,
    description: "CS 6460: Educational Technology will be a heavily project-based class in which students will deeply investigate the tools, methods, and theories behind educational technology; demonstrate mastery of a subset of the field; propose either implementing a tool for or conducting research in educational technology; and deliver a final project along with a presentation and publication-ready paper.  "
  },
  {
    label: "CS6515: Intro to Graduate Algorithms",
    key: 6515,
    name: "Intro to Graduate Algorithms",
    skills: ["Calculus", "Coding", "Algorithms"],
    content: ["Individual Projects"],
    rating: 0,
    classSize: 200,
    description: "This course is a graduate-level course in the design and analysis of algorithms. We study techniques for the design of algorithms (such as dynamic programming) and algorithms for fundamental problems (such as fast Fourier transform FFT). In addition, we study computational intractability, specifically, the theory of NP-completeness.  The main topics covered in the course include dynamic programming; divide and conquer, including FFT; randomized algorithms, including RSA cryptosystem and hashing using Bloom filters;  graph algorithms; max-flow algorithms; linear programming; and NP-completeness.  "
  },
  {
    label: "CS6750: Human-Computer Interaction",
    key: 6750,
    name: "Human-Computer Interaction",
    skills: ["Writing", "Drawing", "Reading"],
    content: ["Lectures"],
    rating: 0,
    description: "This course is an introductory course on human-computer interaction. It does not presuppose any earlier knowledge of human-computer interaction, computer science, or psychology. The class covers three broad categories of topics within human-computer interaction: (a) the principles and characteristics of the interaction between humans and computers; (b) the techniques for designing and evaluating user-centered systems; and (c) current areas of cutting-edge research and development in human-computer interaction."
  },
  {
    label: "CS7637: Knowledge Based AI",
    key: 7637,
    name: "Knowledge Based AI",
    skills: ["Writing", "Ethics", "Algorithms"],
    content: ["Individual Projects"],
    rating: 0,
    classSize: 200,
    description: "The twin goals of knowledge-based artificial intelligence (AI) are to build AI agents capable of human-level intelligence and gain insights into human cognition.  "
  },
  {
    label: "CS7646: Machine Learning for Trading",
    key: 7646,
    name: "Machine Learning for Trading",
    skills: ["Reading", "Coding", "Algorithms"],
    content: ["Individual Projects"],
    rating: 0,
    classSize: 200,
    description: "This course introduces students to the real world challenges of implementing machine learning based trading strategies including the algorithmic steps from information gathering to market orders. The focus is on how to apply probabilistic machine learning approaches to trading decisions. We consider statistical approaches like linear regression, Q-Learning, KNN and regression trees and how to apply them to actual stock trading situations."
  },
  {
    label: "CS7642: Reinforcement Learning",
    key: 7642,
    name: "Reinforcement Learning",
    skills: ["Writing", "Calculus", "Algorithms"],
    content: ["Individual Projects", "Lectures"],
    rating: 0,
    classSize: 200,
    description: "Through a combination of classic papers and more recent work, the course explores automated decision making from a computational perspective. It examines efficient algorithms, where they exist, for single agent and multiagent planning as well as approaches to learning near-optimal decisions from experience. "
  },
  {
    label: "CS 8803: Artificial Intelligence for Robotics",
    key: 8803,
    name: "Robotics: AI Techniques",
    skills: ["Calculus", "Coding", "Robotics"],
    content: ["Lectures"],
    rating: 0,
    classSize: 200,
    description: "In Artificial Intelligence for Robotics, learn from Sebastian Thrun, the leader of Google and Stanford's autonomous driving team, how to program all the major systems of a robotic car. This class will teach students basic methods in Artificial Intelligence, including: probabilistic inference, planning and search, localization, tracking and control, all with a focus on robotics. Extensive programming examples and assignments will apply these methods in the context of building self-driving cars. "
  },
];
module.exports = Classes;
