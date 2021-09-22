import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Arron'),
    icon: 'HomeIcon',
    href: 'www.google.co.uk',
  },
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Lottery'),
    icon: 'TicketIcon',
    href: '/lottery',
    status: {
      text: t('Win').toLocaleUpperCase(),
      color: 'success',
    },
  },
  {
    label: t('Collectibles'),
    icon: 'NftIcon',
    href: '/collectibles',
    items: [
      {
        label: t('Trade'),//trade nft 
        href: '/swap',
      },
    ],
  },
  {
    label: t('Profile'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Your Profile'),
        href: '/profile',
      },
    ],
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    href: 'https://pancakeswap.info',
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.pancakeswap.finance/contact-us',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        label: t('Github'),
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
      },
      {
        label: t('Blog'),
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: t('Merch'),
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
