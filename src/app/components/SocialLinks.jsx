import React from "react";
import {
  Linkedin,
  Github,
  Phone ,
  GraduationCap ,
  Mail ,
  ExternalLink
} from "lucide-react";

const socialLinks = [
  {
    name: "Mail",
    displayName: "Mail",
    subText: "ojs@somaiya.edu",
    icon: Mail ,
    url: "/",
    color: "#E4405F",
    gradient: "from-[#E4405F]  to-[#a8a8a8]",
    copyable: true,
  },
  {
    name: "Phone",
    displayName: "Phone",
    subText: "9967376006",
    icon: Phone,
    url: "/",
    color: "#00FF00",
    gradient: "from-[#00FF00] to-[#a8f0a8]",
    copyable: true,
  },
  {
    name: "LinkedIn",
    displayName: "LinkedIn",
    subText: "omkar-sawantt",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/omkar-sawantt",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "OmkarSawantt",
    icon: Github,
    url: "https://github.com/OmkarSawantt",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  },
  {
    name: "Coursera",
    displayName: "Coursera",
    subText: "Omkar-Sawant",
    icon: GraduationCap ,
    url: "https://www.coursera.org/user/00f3311e7a015bbf1164218a221f1ce9",
    color: "#0000ff",
    gradient: "from-[#0000ff] to-[#d2d2fc]"
  },
];

const SocialLinks = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    });
  };
  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {
          socialLinks.map((socialLink, index) => (
        <div onClick={() => (socialLink.copyable ? handleCopy(socialLink.subText) : window.open(socialLink.url, "_blank"))}  key={index} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500   bg-gradient-to-r ${socialLink.gradient}`} />
          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30" style={{ backgroundColor: socialLink.color }}/>
              <div className="relative p-2 rounded-md">
                <socialLink.icon className="w-6 h-6 transition-all duration-500 group-hover:scale-105" style={{ color: socialLink.color }}/>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {socialLink.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {socialLink.subText}
              </span>
            </div>
          </div>
          <ExternalLink className="relative w-5 h-5 text-gray-500 group-hover:text-white  opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-1"/>
          <div  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        </div>

          ))
        }




      </div>
    </div>
  );
};

export default SocialLinks;