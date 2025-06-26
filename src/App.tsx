import React from 'react';
import Card from './components/Card';
import profileImage from './assets/profile.png';


const profile = {
  imagePath: profileImage, 
  name: 'Sarah Dole', 
  title: 'Front End Engineer @ Microsoft', 
  bio: 'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.', 
  CTALink: 'https://google.com', 
  socialLinks: {
    github: 'github.com', 
    twitter: 'twitter.com', 
    instagram: 'instagram.com', 
    linkedin: 'linkedin.com'
  }
}

export default function App() {
  return (
    <div className="wrapper">
      <Card profile={profile}/>
    </div>
  );
}