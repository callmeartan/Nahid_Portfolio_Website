"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Briefcase, Calendar, Code, GraduationCap, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nahid.nasiri2006@gmail.com",
    value: "nahid.nasiri2006@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+16282001735",
    value: "(628) 200-1735",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nahid-nasiri-17b5aa136/",
    value: "linkedin.com/in/nahid-nasiri-17b5aa136",
  },
  {
    icon: MapPin,
    label: "Location",
    href: "#",
    value: "San Jose, CA",
  },
];

const experience = [
  {
    company: "Tesla",
    location: "CA",
    title: "Machine Learning Engineer",
    dates: "10/20/2025 - present",
    bullets: [
      "Developed multimodal systems and LLM-based applications, including damage assessment models, voice-enabled chatbots, and NLP pipelines, to improve operational efficiency, automate decision-making, and reduce time-to-insight.",
      "Built a multimodal damage assessment system for cost estimation and business impact modeling, including repair-vs-total-loss classification, cost regression, and part recommendation by collaborative filtering. Collaborated with the BottleRocket team to fine-tune a VLM model for improved visual understanding and accuracy.",
      "Developed a voice-enabled chatbot using LLMs and RAG over internal knowledge bases, reducing ticket volume by ~65% and response time by ~70%.",
      "Applied BERTopic to analyze survey and customer support feedback, reducing time-to-insight by 83% and accelerating issue resolution across leadership teams.",
      "Contributed to a resume ranking platform with low-quality filtering, duplicate detection, and similarity scoring using structured job representations, LLM-based inference, and prompt engineering.",
    ],
  },
  {
    company: "Audi of America",
    location: "CA",
    title: "Machine Learning Engineer",
    dates: "4/10/2023 - 10/09/2025",
    bullets: [
      "Led development of chatbot systems, computer vision pipelines, and automation frameworks to improve validation efficiency, reduce manual effort, and enhance diagnostic accuracy in ADAS systems.",
      "Built and deployed a Transformer-based QA chatbot using LLMs and RAG, reducing manual lookup time by 65% and improving validation consistency.",
      "Enhanced computer vision pipelines for ADAS, improving accuracy by 47%.",
      "Contributed to automation frameworks that streamlined validation workflows, reducing test cycle time and enhancing diagnostic precision by 70%.",
    ],
  },
  {
    company: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    title: "Electrical and Computer Engineering Research/Teaching Assistant - PhD",
    dates: "9/21/2019 - 5/5/2023",
    bullets: [
      "Developed deep learning models (CNN, LSTM) for multimodal sensor data to predict user behavior and cognitive states.",
      "Improved ADHD diagnostic accuracy by 60% using fidgeting-based behavioral signals.",
      "Reduced lab setup time by 40% by integrating real-time hardware-software data pipelines.",
    ],
  },
  {
    company: "Istanbul Technical University",
    location: "Istanbul, Turkey",
    title: "Research Assistant",
    dates: "9/21/2017 - 8/1/2019",
    bullets: [
      "Developed decision-making algorithms for ADAS using reinforcement learning and simulation (CARLA, Unity3D).",
      "Generated synthetic driving datasets to improve model robustness and training efficiency.",
    ],
  },
  {
    company: "Istanbul Sehir University",
    location: "Istanbul, Turkey",
    title: "Senior Software Developer and Project Lead",
    dates: "9/21/2014 - 9/8/2017",
    bullets: [
      "Led AI development for the EU-funded ISG4 project focused on educational systems for children with special needs.",
      "Built NLP and speech-to-text systems with real-time feedback to improve engagement and learning outcomes.",
    ],
  },
  {
    company: "Sharif University of Technology R&D Center / ATA Co.",
    location: "Tehran, Iran",
    title: "Computer Engineer, Software Developer",
    dates: "3/10/2010 - 9/5/2014",
    bullets: [
      "Developed web-based software with SQL integration to improve system scalability and data management.",
    ],
  },
];

const skills = [
  {
    title: "Languages",
    items: "Python, SQL, Git, Java, C++",
  },
  {
    title: "ML / AI",
    items: "PyTorch, TensorFlow, OpenCV, Hugging Face, Transformers, Foundation Models, Model Selection & Evaluation",
  },
  {
    title: "LLMs",
    items: "RAG, Fine-tuning, LangChain, NLP",
  },
  {
    title: "Infra",
    items: "AWS SageMaker, Kubernetes, Kubeflow, CI/CD",
  },
  {
    title: "Systems",
    items: "Distributed Training (DDP, FSDP), Data Pipelines",
  },
];

const education = [
  {
    degree: "PhD in Electrical and Computer Engineering",
    school: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    dates: "2025",
    note: "GPA: 4.0/4.0. Thesis: Extracting Implicit Features from Hand Fidgeting in ADHD Using Machine Learning.",
  },
  {
    degree: "MSc in Computer Engineering",
    school: "Istanbul Sehir University",
    location: "Istanbul, Turkey",
    dates: "2017",
    note: "GPA: 3.86/4.0. Best Student Award.",
  },
  {
    degree: "BSc in Computer Engineering",
    school: "Iran University of Science and Technology",
    location: "Tehran, Iran",
    dates: "2010",
    note: "2nd Best Senior Student.",
  },
];

const honors = [
  {
    title: "University Fellowship Award",
    dates: "2020 - 2021",
    note: "Competitive academic fellowship awarded to less than 15% of applicants.",
  },
  {
    title: "Graduate Research & Teaching Assistantship",
    dates: "2021 - 2023",
    note: "Merit-based assistantship granted to fewer than 20% of graduate candidates.",
  },
  {
    title: "European Union Scholarship",
    dates: "2014 - 2017",
    note: "Awarded for ranking 1st among Computer Engineering students.",
  },
];

export default function ResumePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[rgb(var(--background-rgb))]">
      <Header />

      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link
              href="/#home"
              className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--muted-rgb))] transition-colors hover:text-[rgb(var(--accent-rgb))]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="card mx-auto max-w-6xl overflow-hidden p-0"
          >
            <div className="border-b border-[rgba(var(--border-rgb),0.6)] bg-white/70 px-6 py-8 md:px-10">
              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">Nahid Nasiri</h1>
                  <p className="mt-3 text-xl text-[rgb(var(--accent-rgb))] font-medium">
                    Machine Learning Engineer | LLMs | Multimodal AI | Autonomous Systems
                  </p>
                  <p className="mt-5 max-w-4xl text-[rgb(var(--foreground-rgb))] leading-relaxed">
                    ML Engineer specializing in LLMs, multimodal AI, and computer vision for autonomous systems. Experienced in building and deploying scalable ML models, RAG-based systems, and data pipelines that improve efficiency and decision-making. Proven impact in reducing operational costs, improving model accuracy, and accelerating validation workflows.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <>
                        <Icon className="h-4 w-4 text-[rgb(var(--accent-rgb))]" />
                        <span className="break-all">{item.value}</span>
                      </>
                    );

                    if (item.label === "Location") {
                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 rounded-xl border border-[rgba(var(--border-rgb),0.6)] bg-white/60 px-4 py-3 text-sm text-[rgb(var(--foreground-rgb))]"
                        >
                          {content}
                        </div>
                      );
                    }

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.label === "LinkedIn" ? "_blank" : undefined}
                        rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 rounded-xl border border-[rgba(var(--border-rgb),0.6)] bg-white/60 px-4 py-3 text-sm text-[rgb(var(--foreground-rgb))] transition-all hover:border-[rgba(var(--accent-rgb),0.35)] hover:bg-white"
                      >
                        {content}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-12 px-6 py-10 md:px-10">
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-[rgb(var(--accent-rgb))]" />
                  <h2 className="text-2xl font-bold">Career Experience</h2>
                </div>

                <div className="space-y-6">
                  {experience.map((job) => (
                    <article key={`${job.company}-${job.title}`} className="rounded-2xl border border-[rgba(var(--border-rgb),0.6)] bg-white/70 p-6 shadow-sm">
                      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <p className="mt-1 text-[rgb(var(--muted-rgb))]">
                            {job.company} | {job.location}
                          </p>
                        </div>
                        <span className="badge inline-flex w-fit items-center gap-2">
                          <Calendar className="h-3.5 w-3.5" />
                          {job.dates}
                        </span>
                      </div>

                      <ul className="mt-5 space-y-3">
                        {job.bullets.map((bullet) => (
                          <li key={bullet} className="relative pl-5 text-sm leading-relaxed text-[rgb(var(--foreground-rgb))] before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb))]">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <div className="mb-6 flex items-center gap-3">
                  <Code className="h-5 w-5 text-[rgb(var(--accent-rgb))]" />
                  <h2 className="text-2xl font-bold">Technical Skills</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {skills.map((group) => (
                    <div key={group.title} className="rounded-2xl border border-[rgba(var(--border-rgb),0.6)] bg-white/70 p-5">
                      <h3 className="mb-2 text-lg font-semibold text-[rgb(var(--accent-rgb))]">{group.title}</h3>
                      <p className="text-sm leading-relaxed text-[rgb(var(--foreground-rgb))]">{group.items}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="mb-6 flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-[rgb(var(--accent-rgb))]" />
                  <h2 className="text-2xl font-bold">Education</h2>
                </div>

                <div className="grid gap-4">
                  {education.map((item) => (
                    <div key={item.degree} className="rounded-2xl border border-[rgba(var(--border-rgb),0.6)] bg-white/70 p-6">
                      <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{item.degree}</h3>
                          <p className="mt-1 text-[rgb(var(--muted-rgb))]">
                            {item.school} | {item.location}
                          </p>
                        </div>
                        <span className="badge inline-flex w-fit items-center gap-2">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.dates}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--foreground-rgb))]">{item.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="mb-6 flex items-center gap-3">
                  <Award className="h-5 w-5 text-[rgb(var(--accent-rgb))]" />
                  <h2 className="text-2xl font-bold">Honors & Awards</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {honors.map((honor) => (
                    <div key={honor.title} className="rounded-2xl border border-[rgba(var(--border-rgb),0.6)] bg-white/70 p-5">
                      <h3 className="text-lg font-semibold">{honor.title}</h3>
                      <p className="mt-2 text-sm text-[rgb(var(--muted-rgb))]">{honor.dates}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--foreground-rgb))]">{honor.note}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
