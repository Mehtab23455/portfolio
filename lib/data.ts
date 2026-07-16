// ---------------------------------------------------------------------------
// lib/data.ts
// Single source of truth for all site content. Replace placeholder values
// with real content -- components read from here, so the design never needs
// to change.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Mehtab Singh Sidhu",
  initials: "M",
  roles: [
    "Applied Artificial Intelligence",
    "Data Analytics",
    "Data Engineering",
    "Undergraduate Researcher",
  ],
  tagline:
    "Applied AI and Data Engineering undergraduate passionate about building intelligent systems that combine machine learning, business analytics, and scalable data infrastructure. My work spans AI products, financial machine learning research, enterprise analytics, and decision intelligence.",
  location: "Punjab, India",
  email: "mehtabsinghsidhu01@gmail.com",
  resumeUrl: "/resume-placeholder.pdf",
  social: {
    github: "https://github.com/Mehtab23455",
    linkedin: "https://linkedin.com/in/mehtab-singh-sidhu",
    scholar: "https://scholar.google.com/citations?user=placeholder",
    zenodo: 'https://zenodo.org/search?q=metadata.creators.person_or_org.name:"Sidhu, Mehtab Singh"',
  },
};

export const about = {
  paragraphs: [
    "I'm an undergraduate researcher working at the intersection of machine learning, financial data systems, and decision intelligence -- building models and infrastructure that turn raw, messy data into decisions people can act on.",
    "My path started with a curiosity about how systems make choices: why a credit model approves one applicant and rejects another, why a recommendation engine surfaces one product over the next. That curiosity turned into a research practice spanning applied ML, enterprise analytics pipelines, and AI-driven products used by real teams.",
    "I'm now looking toward graduate study in Hong Kong's AI ecosystem -- a region investing deliberately in applied AI, fintech research, and cross-border data infrastructure -- to deepen my research in decision intelligence and contribute to work that connects rigorous modeling with real-world deployment.",
  ],
  timeline: [
    {
      year: "2022",
      title: "Began B.Tech in Computer Science Engineering",
      description:
        "Specialized in Artificial Intelligence & Data Science; first exposure to applied ML through coursework projects.",
    },
    {
      year: "2023",
      title: "First research-grade ML systems",
      description:
        "Built early credit-risk and expense-classification models; started contributing to open-source data tooling.",
    },
    {
      year: "2024",
      title: "Industry experience across AI teams",
      description:
        "Joined Byteoski Developers, LunarTech AI, and Solar Beauty AI in applied ML and data engineering roles.",
    },
    {
      year: "2025",
      title: "Independent research & flagship projects",
      description:
        "Shipped EcomSWOT, SmartExpense AI, and the Investor Intelligence Platform; began authoring research papers.",
    },
    {
      year: "2026",
      title: "Applying for graduate study",
      description:
        "Preparing Master's applications in AI, Data Analytics, and Decision Intelligence at leading global programs.",
    },
  ],
};

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  specialization: "Artificial Intelligence & Data Science",
  institution: "CT University",
  location: "Punjab, India",
  period: "2022 -- 2027",
  cgpa: "9.7 / 10.0",
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "Statistical Inference",
    "Data Structures & Algorithms",
    "Distributed Systems",
    "Database Systems",
    "Financial Econometrics",
    "Cloud Computing",
    "Natural Language Processing",
    "Optimization Theory",
  ],
  achievements: [
    "Dean's List, 4 consecutive semesters",
    "Best Applied AI Project, Departmental Showcase 2025",
    "Recipient, Undergraduate Research Grant",
    "Class Representative, Computer Science Engineering",
  ],
};

export type Publication = {
  id: string;
  title: string;
  abstract: string;
  keywords: string[];
  contribution: string;
  status: "Published" | "Under Review" | "Preprint";
  venue: string;
  year: string;
  doi: string;
  citations: number;
  downloads: number;
  views: number;
  bibtex: string;
  pdfUrl?: string;
};

export const publications: Publication[] = [
  {
    id: "pub-04",
    title: "Generalization Limits in Noisy Time Series Returns",
    abstract:
      "Machine learning models are often evaluated under the assumption that additional complexity yields improved predictive performance. However, financial time series pose unique challenges due to non-stationarity, heavy-tailed noise, and adaptive market behavior. In such environments, forecasting models may struggle to generalize beyond historical data. This paper examines whether increasing model complexity meaningfully reduces forecast error in financial time series. Rather than proposing a new model, we focus on understanding why commonly used forecasting approaches often fail to outperform simple baselines. The analysis is framed through the bias–variance tradeoff, a central concept in statistical learning theory.",
    keywords: ["Time Series", "Financial Forecasting", "Bias-Variance Tradeoff", "Generalization"],
    contribution: "Sole author. Conducted the theoretical framing and baseline evaluation.",
    status: "Published",
    venue: "Independent Research",
    year: "2026",
    doi: "10.5281/zenodo.18180884",
    citations: 0,
    downloads: 13,
    views: 34,
    pdfUrl: "/zen-pdfs/Sidhu_Mehtab_Generalization_Limits.pdf", // Path to your public asset folder
    bibtex:
      "@techreport{sidhu2026generalization,\n  title={Generalization Limits in Noisy Time Series Returns},\n  author={Sidhu, Mehtab Singh},\n  year={2026},\n  institution={Zenodo}\n}",
  },
  {
    id: "pub-05",
    title: "Volatility Dynamics of Asian Stock Markets: Evidence from the Hang Seng Index and Nikkei 225",
    abstract:
      "This paper examines the volatility dynamics of two major Asian equity markets, the Hang Seng Index (HSI) and the Nikkei 225, using daily stock return data. The study applies standard econometric techniques, including unit root tests, ARCH-LM tests, and GARCH(1,1) models, to analyze volatility clustering and persistence. Empirical findings reveal significant conditional heteroskedasticity and high volatility persistence in both markets, with stronger persistence observed in the Hang Seng Index. These results contribute to the empirical literature on Asian financial markets and provide insights relevant for risk management, portfolio allocation, and volatility forecasting.",
    keywords: ["Econometrics", "GARCH", "Volatility Dynamics", "Asian Stock Markets"],
    contribution: "Sole author. Handled data parsing, econometric testing, and model fitting.",
    status: "Published",
    venue: "Zenodo Repository",
    year: "2026",
    doi: "10.5281/zenodo.18180779",
    citations: 0,
    downloads: 34,
    views: 85,
    pdfUrl: "/zen-pdfs/Sidhu_Mehtab_Volatility_Dynamics_Asian_Markets.pdf", // Matches your screenshot asset
    bibtex:
      "@article{sidhu2026volatility,\n  title={Volatility Dynamics of Asian Stock Markets: Evidence from the Hang Seng Index and Nikkei 225},\n  author={Sidhu, Mehtab Singh},\n  year={2026},\n  note={Working paper}\n}",
  },
];

export const researchInterests = [
  { label: "Decision Intelligence", weight: 92 },
  { label: "Financial Machine Learning", weight: 85 },
  { label: "Explainable AI", weight: 78 },
  { label: "LLM Systems & Retrieval", weight: 74 },
  { label: "Data Infrastructure", weight: 70 },
  { label: "Applied NLP", weight: 62 },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  architecture: string;
  features: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    id: "ecomswot",
    name: "EcomSWOT",
    tagline: "LLM-orchestrated competitive intelligence for e-commerce sellers",
    problem:
      "Independent sellers lack the analyst resources to run structured competitive analysis -- EcomSWOT automates SWOT generation from live product, pricing, and review data.",
    architecture:
      "Ingestion service pulls marketplace data -> retrieval layer indexes reviews and pricing history -> orchestration layer prompts an LLM pipeline across four analytical passes -> structured output rendered as an interactive report.",
    features: [
      "Automated SWOT generation across product categories",
      "Retrieval-augmented grounding to reduce hallucinated claims",
      "Exportable, structured analyst-style reports",
      "Category-aware prompt orchestration",
    ],
    stack: ["Python", "LangChain", "OpenAI API", "PostgreSQL", "FastAPI", "React"],
    metrics: [
      { label: "Analyst-quality match", value: "87%" },
      { label: "Report generation time", value: "< 90s" },
      { label: "Product categories evaluated", value: "3" },
    ],
    demoUrl: "https://ecomswot.vercel.app/",
    githubUrl: "https://github.com/Mehtab23455/EcomSWOT-backend",
    caseStudyUrl: "#",
    featured: true,
    imageUrl: "/assets/Screenshot 2026-07-16 084534.png",
  },
  {
    id: "smartexpense",
    name: "SmartExpense AI",
    tagline: "Transformer-based automated expense categorization",
    problem:
      "Finance teams spend significant manual effort tagging and reconciling expenses -- SmartExpense AI classifies transactions automatically with a fine-tuned transformer.",
    architecture:
      "Transaction stream -> preprocessing & normalization -> fine-tuned transformer classifier -> confidence-gated human review queue -> categorized ledger output.",
    features: [
      "Fine-tuned transformer classifier for transaction text",
      "Confidence-gated review queue for edge cases",
      "Category taxonomy aligned to standard chart of accounts",
      "Batch and streaming ingestion modes",
    ],
    stack: ["PyTorch", "Hugging Face", "FastAPI", "Docker", "PostgreSQL"],
    metrics: [
      { label: "Classification accuracy", value: "94.6%" },
      { label: "Manual review reduction", value: "68%" },
      { label: "Transactions processed", value: "120K+" },
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Mehtab23455/smartexpense-AI-backend",
    caseStudyUrl: "#",
    featured: true,
    imageUrl: "/assets/Screenshot 2026-07-16 084833.png",
  },
  {
    id: "investor-intelligence",
    name: "Investor Intelligence Platform",
    tagline: "Decision-support platform for portfolio and market analysis",
    problem:
      "Retail and early-stage investors lack consolidated tooling for signal aggregation -- this platform unifies market data, filings, and sentiment into a single decision surface.",
    architecture:
      "Market data & filings connectors -> feature store -> ensemble signal models -> decision-intelligence dashboard with scenario simulation.",
    features: [
      "Unified market, filings, and sentiment data pipeline",
      "Ensemble signal modeling with backtesting",
      "Scenario simulation for portfolio decisions",
      "Real-time dashboard with alerting",
    ],
    stack: ["Python", "Pandas", "scikit-learn", "Next.js", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Data sources integrated", value: "6" },
      { label: "Backtest Sharpe uplift", value: "+0.34" },
      { label: "Dashboard refresh latency", value: "< 2s" },
    ],
    githubUrl: "https://github.com/LUNARTECH-X/Investor-Room/",
    caseStudyUrl: "#",
    featured: true,
    imageUrl: "/assets/Screenshot 2026-07-16 084359.png",
  },
  {
    id: "credit-risk-modelling",
    name: "Credit Risk Modelling",
    tagline: "Explainable ML framework for lending decisions",
    problem:
      "Lenders need models that are both accurate and defensible to regulators -- this project pairs gradient-boosted scoring with a built-in explainability layer.",
    architecture:
      "Feature pipeline -> gradient-boosted ensemble -> SHAP-based explainability layer -> scorecard export with reason codes.",
    features: [
      "Gradient-boosted default-risk scoring",
      "SHAP-based per-decision explanations",
      "Regulator-facing reason-code generation",
      "Baseline scorecard comparison suite",
    ],
    stack: ["Python", "XGBoost", "SHAP", "scikit-learn", "Jupyter"],
    metrics: [
      { label: "AUC improvement over baseline", value: "+6.2 pts" },
      { label: "Reason codes per decision", value: "Top 5" },
      { label: "Dataset size", value: "50K applicants" },
    ],
    githubUrl: "https://github.com/Mehtab23455/sql-analysis-international-debt",
    caseStudyUrl: "#",
    imageUrl: "/assets/Screenshot 2026-07-16 085538.png",
  },
  {
    id: "business-performance-dashboard",
    name: "Business Performance Dashboard",
    tagline: "Enterprise analytics dashboard for cross-functional KPIs",
    problem:
      "Leadership teams needed a single, trustworthy view of performance across sales, ops, and finance instead of siloed spreadsheets.",
    architecture:
      "ETL pipeline consolidates source systems -> warehouse layer -> semantic metrics layer -> interactive dashboard with drill-down.",
    features: [
      "Cross-functional KPI consolidation",
      "Automated ETL with data-quality checks",
      "Drill-down views by team and time period",
      "Scheduled executive reporting",
    ],
    stack: ["SQL", "dbt", "Power BI", "Python", "Airflow"],
    metrics: [
      { label: "Source systems unified", value: "5" },
      { label: "Manual reporting time saved", value: "10 hrs/week" },
      { label: "Adoption across teams", value: "4 departments" },
    ],
    githubUrl: "https://github.com/Mehtab23455/business-performance-analysis",
    imageUrl: "/assets/Screenshot 2026-07-16 085538.png",
  },
  {
    id: "matchhub",
    name: "MatchHub",
    tagline: "Recommendation and matching engine for structured profiles",
    problem:
      "Manually pairing profiles against structured criteria doesn't scale -- MatchHub ranks and recommends matches using a learned similarity model.",
    architecture:
      "Profile ingestion -> feature embedding -> learned similarity ranking -> recommendation API with feedback loop for re-ranking.",
    features: [
      "Learned embedding-based similarity ranking",
      "Feedback loop for continuous re-ranking",
      "REST API for downstream integration",
      "Configurable matching criteria",
    ],
    stack: ["Python", "scikit-learn", "FastAPI", "PostgreSQL", "React"],
    metrics: [
      { label: "Match precision @10", value: "0.81" },
      { label: "API p95 latency", value: "180ms" },
      { label: "Profiles indexed", value: "25K+" },
    ],
    githubUrl: "https://github.com/GautamGirdhar/MatchHub-Backend",
    imageUrl: "/assets/Screenshot 2026-07-16 085538.png",
  },
];

export type ExperienceEntry = {
  id: string;
  org: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  impact: string[];
  technologies: string[];
};

// --- Update the experience array configuration inside lib/data.ts ---

export const experience: ExperienceEntry[] = [
  {
    id: "lunartech",
    org: "LunarTech AI",
    role: "Data & Analytics Engineer",
    period: "June 2026 -- Present",
    location: "Texas, United States (Remote)",
    responsibilities: [
      "Prototyped and evaluated ML models for applied research projects",
      "Ran experiments and maintained reproducible evaluation pipelines",
      "Documented findings for internal research reports",
    ],
    impact: [
      "Contributed to 2 internal research projects later cited in coursework",
      "Built a reusable experiment-tracking pipeline adopted by the team",
    ],
    technologies: ["PyTorch", "scikit-learn", "MLflow", "Jupyter"],
  },
  {
    id: "solar-beauty-ai",
    org: "Solar Beauty AI",
    role: "Data Analytics Intern",
    period: "June 2026 -- Aug 2026",
    location: "Hong Kong SAR",
    responsibilities: [
      "Built dashboards and reporting for product and marketing teams",
      "Performed exploratory analysis to inform product decisions",
      "Automated recurring reporting workflows",
    ],
    impact: [
      "Cut manual reporting effort by 10+ hours per week",
      "Surfaced a customer-segment insight that informed a product pivot",
    ],
    technologies: ["SQL", "Python", "Power BI", "Pandas"],
  },
  {
    id: "byteoski",
    org: "Byteoski Developers",
    role: "Software & Data Engineer",
    period: "June 2025 -- Aug 2025",
    location: "Ludhiana, India",
    responsibilities: [
      "Designed and shipped ML-backed features for client-facing products",
      "Built and maintained data pipelines feeding downstream analytics",
      "Collaborated with design and product on AI feature scoping",
    ],
    impact: [
      "Reduced pipeline processing time by 40% through query and schema optimization",
      "Shipped 3 production ML features across two client engagements",
    ],
    technologies: ["Python", "PostgreSQL", "FastAPI", "Docker", "AWS"],
  },
];

export const techStack = [
  { category: "Programming", items: ["Python", "TypeScript", "SQL", "C++", "R"] },
  { category: "AI & Machine Learning", items: ["PyTorch", "scikit-learn", "Hugging Face", "LangChain", "XGBoost"] },
  { category: "Data Engineering", items: ["Airflow", "dbt", "Apache Spark", "Kafka"] },
  { category: "Cloud", items: ["AWS", "Google Cloud Platform", "Vercel", "Docker"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Snowflake"] },
  { category: "Visualization", items: ["Power BI", "Tableau", "Plotly", "D3.js"] },
  { category: "Frameworks", items: ["Next.js", "React", "FastAPI", "Django"] },
  { category: "DevOps", items: ["GitHub Actions", "Docker Compose", "Terraform"] },
];

export const skills = {
  research: [
    "Experimental Design",
    "Statistical Analysis",
    "Technical Writing",
    "Literature Review",
    "Reproducible Research",
  ],
  technical: [
    "Model Development",
    "Data Pipeline Design",
    "System Architecture",
    "API Design",
    "A/B Testing",
  ],
  leadership: [
    "Cross-functional Collaboration",
    "Mentorship",
    "Project Management",
    "Public Speaking",
    "Community Building",
  ],
};

export const leadership = [
  {
    id: "techverse",
    org: "TechVerse",
    role: "Core Organizing Member",
    period: "2024 -- Present",
    description:
      "Co-organize a student-led technology community running workshops, hackathons, and speaker sessions on applied AI and software engineering for 300+ members.",
  },
  {
    id: "class-rep",
    org: "Department of Computer Science Engineering",
    role: "Class Representative",
    period: "2023 -- Present",
    description:
      "Elected representative liaising between students and faculty; coordinated academic feedback processes and departmental events.",
  },
  {
    id: "community",
    org: "Community Data Literacy Initiative",
    role: "Volunteer Instructor",
    period: "",
    description:
      "Teach introductory data analysis and spreadsheet literacy workshops for local students exploring technical careers.",
  },
];

export const certifications = [
  { id: "ibm-data-science", name: "IBM Data Science Professional Certificate", issuer: "IBM", year: "2024", url: "#" },
  { id: "ba-data-science", name: "Data Science Career Certificate", issuer: "British Airways", year: "2024", url: "#" },
  { id: "ibm-ml", name: "Machine Learning with Python", issuer: "IBM", year: "2023", url: "#" },
];

export const githubConfig = {
  username: "Mehtab23455",
  pinnedRepos: [
    { name: "EcomSwot-frontend", description: "LLM-orchestrated competitive intelligence for e-commerce sellers.", language: "Python", stars: 24, forks: 6 },
    { name: "smartexpense-AI-backend", description: "Transformer-based automated expense categorization.", language: "Python", stars: 31, forks: 9 },
    { name: "credit-risk-modelling", description: "Explainable gradient-boosted credit risk scoring framework.", language: "Jupyter Notebook", stars: 18, forks: 4 },
    { name: "investor-intelligence-platform", description: "Decision-support platform for portfolio and market analysis.", language: "TypeScript", stars: 15, forks: 3 },
    { name: "matchhub", description: "Recommendation and matching engine for structured profiles.", language: "Python", stars: 12, forks: 2 },
    { name: "data-pipeline-toolkit", description: "Reusable ETL and data-quality utilities for analytics pipelines.", language: "Python", stars: 9, forks: 1 },
  ],
};

export const blogPosts = [
  {
    id: "placeholder-1",
    title: "Notes on building explainable credit models",
    excerpt: "A forthcoming write-up on balancing predictive performance with regulator-facing interpretability.",
    status: "Coming soon",
  },
  {
    id: "placeholder-2",
    title: "What retrieval-augmented pipelines get wrong about grounding",
    excerpt: "Observations from building EcomSWOT's retrieval layer.",
    status: "Coming soon",
  },
  {
    id: "placeholder-3",
    title: "Applying to AI Master's programs as a systems-minded researcher",
    excerpt: "A reflection on the application process, to be published after decisions are released.",
    status: "Coming soon",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];
