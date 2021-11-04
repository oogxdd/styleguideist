/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'
import { Themed } from 'theme-ui'

import { Button } from 'components/atoms'
import {} from 'components/molecules'
import {} from 'components/organisms'
import {} from 'components/templates'

const Preview = () => {
  const { selectedComponent: component } = useContext(AppContext)

  return (
    <div
      className="flex items-center justify-center w-full h-full"
      sx={{ bg: 'background' }}
    >
      {/* atoms */}
      {component === 'button' && <Button />}

      {/* molecules */}

      {/* organisms */}

      {/* templates */}
    </div>
  )
}

export default Preview
