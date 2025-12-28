import React from 'react'
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { LANGUAGES } from "../../utils/data"
import { itemVariants } from '../../utils/helper';
const LanguagesSection = () => {
  return (
    <section>
      <div>Languages</div>
      <ul>
      {LANGUAGES.map((lang, index) => (
        <li key={lang.id}>{lang.language} {lang.level}</li>
      ))}
      </ul>
    </section>
    
  );
};

export default LanguagesSection