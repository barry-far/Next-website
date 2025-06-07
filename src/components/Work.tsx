import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    const isMobile = window.innerWidth <= 1024;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "work",
        onUpdate: (self) => {
          if (isMobile) {
            // Ensure smooth scrolling on mobile
            gsap.set(".work-flex", {
              x: -translateX * self.progress,
              force3D: true,
              willChange: "transform"
            });
          }
        }
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
      force3D: true,
      willChange: "transform"
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "Business Insight",
              category: "AI Social Media Management Platform",
              tools: "React, Next.js, Django, AI Integration",
              image: "/images/bi.jpg",
            },
            {
              name: "Kittle Panel",
              category: "Web-Based MS for Telegram Automation",
              tools: "Next.js, Django, Tailwind CSS",
              image: "/images/kittle.jpg",
            },
            {
              name: "Zero Bomber",
              category: "Precision Messaging, Maximum Impact",
              tools: "Python, Git, Telergram Bot",
              image: "/images/bomber.jpg",
            },
            {
              name: "iVPN Website",
              category: "Intuitive Design, Effortless Navigation",
              tools: "Next.js, Django, Tailwind CSS",
              image: "/images/ivpn.jpg",
            },
            {
              name: "iVPN Mobile App",
              category: "Mobile App",
              tools: "Flutter, Dart, ClickUp",
              image: "/images/ivpnapp.png",
            },
            {
              name: "Kittle Bot",
              category: "Automated Telegram Group Creator & Management Bot",
              tools: "Python, Telegram Bot, ClickUp",
              image: "/images/kittlebot.jpg",
            },
            {
              name: "RanJPT",
              category: "Automated Telegram Group Creator & Management Bot",
              tools: "Python, OpenAI, Telegram Bot, ClickUp",
              image: "/images/ranjpt.gif",
            },
            {
              name: "Mozahem Kie؟",
              category: "Intelligent Telegram Bot for Contact Lookup & Security",
              tools: "Python, Sqlite, Telegram Bot, ClickUp",
              image: "/images/mozahem.png",
            },
            {
              name: "Marjan Nazarpour",
              category: "Automated Selling Course Bot",
              tools: "Python, Telegram Bot, ClickUp",
              image: "/images/marjan.png",
            },
            {
              name: "Urameta",
              category: "Advanced Crypto Airdrop Bot",
              tools: "Python, PWA,Telegram Bot, ClickUp",
              image: "/images/urameta.png",
            },
            {
              name: "TapTether",
              category: "Earn USDT, Tap by Tap Telegram Bot",
              tools: "Python, Telegram Bot, ClickUp",
              image: "/images/taptether.png",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
