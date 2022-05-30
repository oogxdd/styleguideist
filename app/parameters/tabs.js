const Tabs = ({ activeTab, setTab, tabs }) => (
  <div
    className="flex flex-row border-b text-sm"
    sx={{ borderColor: 'borderColor' }}
  >
    <span
      className="w-1/2 flex items-center justify-center py-2 cursor-pointer transition duration-500"
      sx={
        activeTab === 'global'
          ? {
              bg: 'text',
              color: 'background',
              fontWeight: '500',
            }
          : {}
      }
      onClick={() => setTab('global')}
    >
      {tabs[0]}
    </span>
    <span
      className="w-1/2 flex items-center justify-center py-2 cursor-pointer transition duration-500"
      sx={
        activeTab === 'local'
          ? {
              bg: 'text',
              color: 'background',
              fontWeight: '500',
            }
          : {}
      }
      onClick={() => setTab('local')}
    >
      {tabs[1]}
    </span>
  </div>
)

export default Tabs

const tabs = [
  { name: 'Recent', href: '#', current: true },
  { name: 'Most Liked', href: '#', current: false },
  { name: 'Most Answers', href: '#', current: false },
]
