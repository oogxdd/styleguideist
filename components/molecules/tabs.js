import { classNames } from 'helpers'

export const Tabs = () => (
  <div className="px-4 sm:px-0">
    <div className="block">
      <nav
        className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
        aria-label="Tabs"
      >
        {tabs.map((tab, tabIdx) => (
          <a
            key={tab.name}
            href={tab.href}
            aria-current={tab.current ? 'page' : undefined}
            className={classNames(
              tab.current
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700',
              tabIdx === 0 ? 'rounded-l-lg' : '',
              tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
              'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10',
            )}
          >
            <span>{tab.name}</span>
            <span
              aria-hidden="true"
              className={classNames(
                tab.current ? 'bg-rose-500' : 'bg-transparent',
                'absolute inset-x-0 bottom-0 h-0.5',
              )}
              sx={tab.current ? { bg: 'primary' } : {}}
            />
          </a>
        ))}
      </nav>
    </div>
  </div>
)

const tabs = [
  { name: 'Recent', href: '#', current: true },
  { name: 'Most Liked', href: '#', current: false },
  { name: 'Most Answers', href: '#', current: false },
]
