import React from 'react'
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { LANGUAGES } from "../../utils/data"
import { itemVariants } from '../../utils/helper';
const LanguagesSection = () => {
  return (
    <div>Languages</div>
    {LANGUAGES.map((lan, index) => (
        <div>{lan}</div>

    ))} 
    
        
 

  )
}

export default LanguagesSection