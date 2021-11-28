import { Progress as ThemeUIProgress } from 'theme-ui'

export const Progress = () => (
  <div className="w-2/3">
    <ThemeUIProgress max={1} value={1 / 2} variant="styles.progress">
      50%
    </ThemeUIProgress>
  </div>
)
