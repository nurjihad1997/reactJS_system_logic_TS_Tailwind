import React from 'react';

import { ComponentMeta } from '@storybook/react';

import FeaturedItems from '../../../components/FeaturedItems'
import {ReactComponent as Account} from '../../../assets/images/ic-account.svg'
import {ReactComponent as Globe} from '../../../assets/images/ic-globe.svg'
import {ReactComponent as Server} from '../../../assets/images/ic-server.svg'
import {ReactComponent as Site} from '../../../assets/images/ic-sitemap.svg'


export default {
    title: "Components/FeaturedItems/Example",
    component: FeaturedItems,
} as ComponentMeta<typeof FeaturedItems>;

export const Default = (args: any) => <FeaturedItems 
{...args}
/> 
Default.args = {
    features: [
        {
          icon: <Server/>,
          key: "server",
          title: "Server",
          paragraph: "high level of security and implement robotic systems to help secure the system"
        },
    
        {
          icon: <Account/>,
          key: "services",
          title: "Services",
          paragraph: "provide the best service according to customer demand"
        },
    
        {
          icon: <Globe/>,
          key: "fast-system",
          title: "Fast System",
          paragraph: "provide high-speed system quality as well as buffer-free system"
        },
    
        {
          icon: <Site/>,
          key: "sitemap",
          title: "Sitemap",
          paragraph: "make it easier to search your system sitemap using SEO"
        }
      ]
}

