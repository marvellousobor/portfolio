// ===== Data =====

const projects = [
  {
    title: "Bitcoin Tracker App",
    icon: "BTA",
    desc: "A Python-powered web application that fetches live Bitcoin pricing data using the CoinGecko API and displays it with a clean, finance-inspired interface.",
    stack: ["Python", "Coingecko API", "HTML/CSS"],
    demo: "#",
    code: "https://github.com/marvellousobor/bitcoin-app",
  },
  {
    title: "Phonebook Web App",
    icon: "PB",
    desc: "A Flask-based contact management system that allows users to add, edit, search, and delete contacts efficiently.",
    stack: ["Node", "Postgres", "Edge"],
    demo: "#",
    code: "https://github.com/marvellousobor/phonebook-web-app",
  },
  {
    title: "Blog Website Design",
    icon: "BLADE",
    desc: "A blog website design for historic information",
    stack: ["HTML/CSS"],
    demo: "https://marvellousobor.github.io/blog-design/",
    code: "https://github.com/marvellousobor/Blog-website-design",
  },
  {
    title: "Yearly Sales Projection Tool",
    icon: "PT",
    desc: "A Python-based financial tool that calculates multi-year revenue projections using user-defined growth rates.",
    stack: ["Python", "CLI"],
    demo: "#",
    code: "https://github.com/marvellousobor/yearly-sales-projection",
  },
  {
    title: "treine.me Web Page",
    icon: "TM",
    desc: "A fitness company web page. Designed from figma to HTML/CSS",
    stack: ["WebCrypto", "Vite"],
    demo: "#",
    code: "https://github.com/marvellousobor/treine-me-workout-design",
  },
  // {
  //   title: "Vector Studio",
  //   icon: "VS",
  //   desc: "Browser-based vector editor for designers, with collaborative cursors.",
  //   stack: ["Canvas", "CRDT"],
  //   demo: "#",
  //   code: "#",
  // },
];

// ===== Icons =====

const skills = [
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "Supabase", icon: "devicon-supabase-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Vercel", icon: "devicon-vercel-original" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  // { name: "Docker", icon: "devicon-docker-plain colored" },
  // { name: "Next.js", icon: "devicon-nextjs-original" },
  // { name: "Postgres", icon: "devicon-postgresql-plain colored" },
  // { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
  // { name: "Vite", icon: "devicon-vitejs-plain colored" },
  // { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  // { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
];

const experience = [
  {
    title: "Intern at LivePetal Systems",
    company: "LivePetal Systems Solution",
    period: "2026-Present",
    desc: "Intern at livepetal systems solution, where I am currently working on a project with a team that involves building a web application using Next.js, TypeScript, Supabase, Stripe/Paystack. I am also learning about software development best practices and gaining hands-on experience in the field.",
  },
  {
    title: "Software Engineer",
    company: "StarkEdu Consult",
    period: "2026-Present",
    desc: "Building a solution to help students get consultation in evaluating their options. Tech stack: HTML/CSS, JavaScript",
  },
  // {
  //   title: "Frontend Developer",
  //   company: "Orbit Studio",
  //   period: "2019 — 2021",
  //   desc: "Crafted marketing sites and product UIs for early-stage startups. Mentored two junior developers.",
  // },
];

const posts = [
  {
    date: "Apr 2026",
    title: "A deadline, A Google Search, and the Colosseum",
    desc: "I went down a rabbit hole on Google, and the Colosseum kept showing up everywhere I looked. Every article, every image, every reference to Rome — there it was. That's when I knew. I built the entire blog post around it.",
    link: "https://www.linkedin.com/posts/marvellous-obor-2769aa376_html-css-webdevelopment-ugcPost-7453379193318313985-MByo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF0NOvoBaqI-8G0_UqC1rBYLr7inRVXiWeA",
  },
  // {
  //   date: "Mar 2026",
  //   title: "Edge functions in production",
  //   desc: "Lessons from running serverless workloads at the edge for a year.",
  //   link: "#",
  // },
  // {
  //   date: "Feb 2026",
  //   title: "A pragmatic guide to AI in apps",
  //   desc: "How to ship AI features users actually love — without the hype.",
  //   link: "#",
  // },
];

// ===== Render =====
const $ = (s) => document.querySelector(s);

$("#projectsGrid").innerHTML = projects
  .map(
    (p) => `
  <article class="glass project-card reveal">
    <div class="project-thumb">${p.icon}</div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="stack">${p.stack.map((t) => `<span>${t}</span>`).join("")}</div>
    <div class="project-links"><a href="${p.demo}">Live →</a><a href="${p.code}">Code →</a></div>
  </article>
`,
  )
  .join("");

$("#skillsGrid").innerHTML = skills
  .map(
    (s) => `
  <div class="glass skill reveal">
    <i class="${s.icon} skill-emoji"></i>
    <div class="skill-name">${s.name}</div>
  </div>
`,
  )
  .join("");

$("#timeline").innerHTML = experience
  .map(
    (e) => `
  <div class="glass timeline-item reveal">
    <div class="role-line">
      <div><div class="role-title">${e.title}</div><div class="role-company">${e.company}</div></div>
      <div class="role-period">${e.period}</div>
    </div>
    <p class="role-desc">${e.desc}</p>
  </div>
`,
  )
  .join("");

$("#blogGrid").innerHTML = posts
  .map(
    (p) => `
  <article class="glass post reveal">
    <div class="post-date">${p.date}</div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <a href="${p.link}" class="post-link">Read more →</a>
  </article>
`,
  )
  .join("");

$("#year").textContent = new Date().getFullYear();

// ===== Typewriter =====
(function typewriter() {
  const words = [
    "full-stack apps",
    "delightful UIs",
    "scalable APIs",
    "AI-powered tools",
  ];
  const el = $("#typewriter");
  let i = 0,
    j = 0,
    deleting = false;
  function tick() {
    const word = words[i % words.length];
    el.textContent = deleting ? word.slice(0, --j) : word.slice(0, ++j);
    if (!deleting && j === word.length) {
      deleting = true;
      setTimeout(tick, 1500);
      return;
    }
    if (deleting && j === 0) {
      deleting = false;
      i++;
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
})();

// ===== Scroll reveal =====
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

// ===== Nav: scrolled state + scroll spy =====
const navWrap = $("#navWrap");
window.addEventListener(
  "scroll",
  () => navWrap.classList.toggle("scrolled", window.scrollY > 20),
  { passive: true },
);

const navLinks = document.querySelectorAll("[data-link]");
const sections = [...navLinks]
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((l) =>
          l.classList.toggle(
            "active",
            l.getAttribute("href") === `#${e.target.id}`,
          ),
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);
sections.forEach((s) => spy.observe(s));

// ===== Mobile menu =====
const menuBtn = $("#menuBtn");
const drawer = $("#mobileDrawer");
menuBtn.addEventListener("click", () => drawer.classList.toggle("open"));
drawer
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => drawer.classList.remove("open")),
  );
