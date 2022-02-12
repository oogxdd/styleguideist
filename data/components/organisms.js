import { Feed, BlogList, ProfileSettings } from 'components/organisms'

export const organisms = [
  {
    label: 'Profile settings',
    value: 'profile-settings',
    // enabled: true,
    component: ProfileSettings,
    enabled: true,
  },
  {
    label: 'Blog list',
    value: 'blog-list',
    component: BlogList,
    // enabled: true,
    link: 'https://tailwindui.com/components/marketing/sections/blog-sections',
    enabled: true,
  },
  {
    label: 'Feed',
    value: 'feed',
    component: Feed,
    // enabled: true,
    link: 'https://tailwindui.com/components/application-ui/lists/feeds',
    enabled: true,
  },
]
