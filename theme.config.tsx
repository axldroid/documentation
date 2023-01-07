import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className='font-bold text-2xl'>Berry<span className='text-lime-400'>Byte</span> Docs</span>,
  project: {
    link: 'https://github.com/berrybyte-net/docs',
  },
  chat: {
    link: 'https://discord.gg/Wc9wMZxQ2D',
  },
  docsRepositoryBase: 'https://github.com/berrybyte-net/docs',
  footer: {
    text: '© 2022 BerryByte Limited. All rights reserved. Built with lots of coffee and love 💖',
  },
  sidebar: {
      defaultMenuCollapseLevel: 0
    },
    useNextSeoProps() {
      return {
        titleTemplate: '%s – BerryByte Docs',
      }
    },
  }
  

export default config