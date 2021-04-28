export default () => (
  <nav className="space-y-1" aria-label="Sidebar">
    <ul className="divide-y divide-gray-200 px-0 py-2">
      <Item label="Button" />
      <Item label="Button" />
      <Item label="Button" />
      <Item label="Button" />
      <Item label="Button" />
      <Item label="Button" />
      <Item label="Button" />
      <Item label="Button" />
      <Item label="Button" />
      <Item label="Button" />
      <Item label="Button" />
    </ul>
  </nav>
)

const Item = ({ label = '' }) => (
  <li className="py-6 flex hover:bg-gray-50 cursor-pointer">
    <div className="ml-6">
      <p className="text-sm font-medium text-gray-900">{label}</p>
    </div>
  </li>
)
