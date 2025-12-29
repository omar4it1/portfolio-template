import React from 'react'
import { EDUCATION } from '../../utils/data'

const EducationSection = () => {
  return (
    <section>
          <div>Education</div>
          <ul>
          {EDUCATION.map((edu, index) => (
            <li key={edu.id}>{edu.institution} {edu.degree} {edu.details}</li>
          ))}
          </ul>
        </section>
  )
}

export default EducationSection