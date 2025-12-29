import React from 'react'

import { LANGUAGES } from "../../utils/data"


const LanguagesSection = () => {
  return (
    
    <section>
      <h1>Languages</h1>
      <ul>
      {LANGUAGES.map((lang, index) => (
        <li key={lang.id}>{lang.language} {lang.level}</li>
      ))}
      </ul>
    </section>
    
      
 

  )
}

export default LanguagesSection