import Link from 'next/link'
import React from 'react'
import GitHubIcon from './icons/GitHubIcon'

const Footer = () => {
  return (
    <footer className="w-full h-14 border-t border-accentBorder flex items-center justify-end text-secondaryGray">
        <div className="border-l border-accentBorder p-4">
          <Link
            href={"https://github.com/santiagosegurado"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-1 items-center"
          >
            <GitHubIcon className="w-5 h-5 fill-secondaryGray" />{" "}
            <span>santiagosegurado</span>{" "}
          </Link>
        </div>
      </footer>
  )
}

export default Footer