# Revathi Yerninti - Personal Portfolio

This is the source code for my personal portfolio, a fully responsive and interactive single-page application designed to showcase my skills, experience, and projects as a Full Stack Developer and Machine Learning Programmer.

**Live Site:** [**revathi-yerninti.vercel.app**](https://revathi-portfolio-ebon.vercel.app/)

---

## What You'll Find on My Portfolio

- **Home** — a quick introduction with links to reach me directly (Email, LinkedIn, GitHub, LeetCode)
- **Experience** — my internships, what I worked on, and the impact I made
-  **Skills & Achievements** — my technical toolkit and milestones I'm proud of
-  **Projects** — things I've built, from a full-stack rental platform to a violence-detection ML pipeline
-  **Education & Certifications** — my academic path and the certifications I've earned along the way
-  **Publications** — research I've presented at conferences
-  **Contact** — the easiest ways to get in touch with me

## How I Built It

This portfolio is built with a modern, performant, and scalable tech stack:

-   **Framework:** [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/))
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Icons:** [Font Awesome](https://fontawesome.com/)
-   **Deployment:** [Vercel](https://vercel.com/)

It's fully responsive and includes a dark/light theme toggle, so it looks good whether you're browsing on your phone or your laptop, day or night.

## Project Structure
 
```
.
├── public/                  #resume
├── src/
│   ├── assets/              # Profile photo & background images
│   ├── components/          # All the building blocks of my site
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── AllExperience.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills_and_Achievements.jsx
│   │   ├── Skill.jsx
│   │   ├── Achievement.jsx
│   │   ├── AllProjects.jsx
│   │   ├── Project.jsx
│   │   ├── Education_and_Certificates.jsx
│   │   ├── Education.jsx
│   │   ├── Certificate.jsx
│   │   ├── AllPublications.jsx
│   │   ├── Publication.jsx
│   │   └── AllContacts.jsx
│   │   ├── Contact.jsx
│   ├── css/
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── App.jsx
├── index.html
├── package.json
├── eslint.comfig.js
└── vite.config.js
```

## Running It Locally

If you'd like to run my portfolio on your own machine:

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18 or later)
-   [npm](https://www.npmjs.com/) (or yarn/pnpm)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YernintiRevathi/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in your browser:**
    Navigate to `http://localhost:5173` (or whatever port your terminal indicates) to see the application running.

## Deployment

This portfolio is automatically deployed via **Vercel**. Every push to the `main` branch on GitHub triggers a new build and deploys the latest version of the site, ensuring a seamless CI/CD (Continuous Integration / Continuous Deployment) pipeline.

## Contact

- **Email:** reeshmayerninti@gmail.com
- **LinkedIn:** [yerninti-revathi](https://www.linkedin.com/in/yerninti-revathi)
- **GitHub:** [YernintiRevathi](https://github.com/YernintiRevathi)
- **LeetCode:** [RevathiYerninti](https://leetcode.com/u/RevathiYerninti/)

---
Thanks for stopping by!
