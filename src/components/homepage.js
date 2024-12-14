import React from 'react'
import About from '@/components/about';
import Skills from '@/components/skills';
import ProjectPage from '@/components/projects';
import ContactForm from '@/components/contact';

function Homepage() {
  return (
    <div>
      <About />
      <ProjectPage />
      <ContactForm />
    </div>
  )
}

export default Homepage