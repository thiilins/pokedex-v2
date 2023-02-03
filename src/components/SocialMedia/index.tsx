import React from 'react'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'

import { SocialMediaContainer } from './styles'
export interface ISocialMediaProps {
  header?: boolean
}
const SocialMedias: React.FC<ISocialMediaProps> = ({ header }) => {
  return (
    <SocialMediaContainer className="socials__container" header={header}>
      <button>
        <BsCodeSlash />
      </button>
      <button>
        <FaGithubAlt />
      </button>
      <button>
        <FaLinkedinIn />
      </button>
    </SocialMediaContainer>
  )
}

export default SocialMedias
