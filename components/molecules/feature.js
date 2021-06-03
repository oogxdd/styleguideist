
export const Feature = ({ feature }) => (
  <div key={feature.name}>
    <div>
      <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
      </span>
    </div>
    <div className="mt-6">
      <h3 className="text-lg font-medium text-white">{feature.name}</h3>
      <p className="mt-2 text-base text-gray-100">{feature.description}</p>
    </div>
  </div>
)
