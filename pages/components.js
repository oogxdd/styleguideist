import { Parameters } from 'app/parameters'
import { ComponentsTable } from 'app/components-table'

const MakeUI = () => {
  return (
    <div className="w-screen min-h-screen bg-[#202124] p-32 flex overflow-auto">
      <Parameters />
      <ComponentsTable />
    </div>
  )
}

export default MakeUI
