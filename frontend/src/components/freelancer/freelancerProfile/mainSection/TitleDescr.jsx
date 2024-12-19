import { useState } from "react";
import { FiLink2 } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
const TitleDescr = () => {
  const [expand, setExpand] = useState();
  const description = `ahfgaj gjjh  lorem10 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quos natus nemo earum ad tenetur doloremque consectetur quis laboriosam cumque From design to development, I create engaging web solutions using React JS, Next JS,Node Js , and Tailwind CSS. My expertise in UI/UX and MERN Stack that ensures your site looks great and delivers results.
👥 Client Experience
I’ve had the pleasure of collaborating with a diverse range of clients, including:
🚀 SaaS startups
🏢 Small business owners
🌐 Web development and marketing agencies
🌟 Influencers
🏪 Local businesses

I have a proven track record of delivering visually stunning and highly functional websites and applications. From crafting conversion-optimized landing pages to developing full-scale web solutions, I leverage both low-code platforms and advanced frameworks to consistently achieve outstanding results.

🛠️ Web Development Expertise

MERN Stack Mastery:
⚛️ React & Next.js – I specialize in building dynamic, responsive user interfaces with reusable, component-based architecture. My expertise in server-side rendering and static site generation ensures high performance, SEO optimization, and a seamless user experience.
💻 Node.js – Proficient in developing scalable, secure, and efficient server-side applications.
🎨 Tailwind CSS – I design sleek, responsive, and modern user interfaces with minimal code, making sure your website looks stunning across all devices.

🎨 UI/UX Design Expertise
Design Tools:
🎨 Figma – Creating intuitive wireframes and prototypes for fluid user experiences.
🖼️ Graphic Design & Branding – Ensuring consistent, visually appealing branding across all platforms.
🧩 Prototyping & Testing – Refining every design to perfection, ensuring a user-focused and results-driven approach.

⚛️ Specialization in React and Next.js
By combining the power of React and Next.js with my expertise in design, I deliver scalable, high-performance web applications that elevate user satisfaction and drive business success.


I Have 5 Years of Proven Experince \
100% Success Rate";`;

  return (
    <div className="w-full">
      {/* title */}
      <div className="h-auto flex justify-between items-center w-full ">
        <h1 className="text-wrap text-3xl text-black">title| Add Title|</h1>
        <div className="flex gap-3 items-center">
          <p className="text-2xl text-black">$12.00</p>
          <GoPencil
            size={40}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
          <FiLink2
            size={40}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
        </div>
      </div>
      {/* description */}
      <div className="flex justify-between items-center gap-3">
        <div>
          <p className="font-inter  font-light text-black">
            {expand ? description : description.slice(0, 500) + "..."}
          </p>
          <button onClick={() => setExpand(!expand)}>
            {!expand ? "READ MORE" : "LESS"}
          </button>
        </div>
        <div>
          <GoPencil
            size={40}
            color="green"
            className="rounded-full border border-green-600 p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default TitleDescr;
