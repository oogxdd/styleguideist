export default () => (
  <div>
    <div className="sm:hidden">
      <label htmlFor="tabs" className="sr-only">
        Select a tab
      </label>
      <select
        id="tabs"
        name="tabs"
        className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
      >
        <option selected>My Account</option>
        <option>Company</option>
        <option>Team Members</option>
        <option>Billing</option>
      </select>
    </div>
    <div className="hidden sm:block">
      <nav
        className="relative z-0 rounded-lg flex divide-x divide-gray-200 border-b"
        aria-label="Tabs"
      >
        {/* Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" */}
        <a
          href="#"
          className="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          aria-current="page"
        >
          <span>Atoms</span>
          <span
            aria-hidden="true"
            className="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"
          />
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
        >
          <span>Molecules</span>
          <span
            aria-hidden="true"
            className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
          />
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
        >
          <span>Organisms</span>
          <span
            aria-hidden="true"
            className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
          />
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
        >
          <span>Templates</span>
          <span
            aria-hidden="true"
            className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
          />
        </a>
      </nav>
    </div>
  </div>
)
