import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { IconType } from 'react-icons';


type Props = {
  profile: ProfileType
}

type ProfileType = {
  imagePath?: string, 
  name: string, 
  title: string,
  bio: string, 
  CTALink: string, 
  socialLinks: SocialLinks
}

type SocialLinks = {
  [social: string]: string
}

export default function Card({profile}: Props) {
  const {imagePath, name, title, bio, CTALink, socialLinks} = profile; 
  const logos: {[social:string]: IconType} = {
    github: IoLogoGithub, 
    linkedin: IoLogoLinkedin, 
    instagram: AiFillInstagram, 
    twitter: RiTwitterXFill
  }
  const handleContact = () => {
    window.open(CTALink); 
  }
  return (
    <div className="container"> 
      <div className="profile">
        <img src={imagePath}></img>
        <div className="header">
          <div className="font-medium text-xl text-center text-neutral-900">{name}</div>
          <div className="font-normal text-sm text-center text-neutral-600">{title}</div>
        </div>
        <div className="font-normal text-base text-center text-neutral-600">{bio}</div>
      </div>
      <div className="contact">
        <button onClick={handleContact} className='contact_button self-stretch gap-1.5 bg-indigo-700 px-4 py-2.5 rounded font-medium text-base text-white' style={{cursor: 'pointer'}}>Contact me</button>
        <div className="iconRow gap-4">
          {Object.entries(logos).map(([social, LogoComponent]) => {
            const link = socialLinks[social as keyof SocialLinks];
            if (!link) return null; // Skip if no link is provided
            return (
              <div key={social} className="icon flex justify-center items-center gap-2 p-2 w-[36px] h-[36px]"> 
                <a href={`https://${link}`} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-10 h-10 text-indigo-700">
                  <LogoComponent size={20} />
                </a>
              </div> 
            )
          })}
        </div>
      </div>
    </div>
  )
}