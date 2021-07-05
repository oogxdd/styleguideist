import { useContext } from 'react'
import { AppContext } from 'context'
import { presets } from 'data'
import {
  AsosLogo,
  BlablacarLogo,
  SuperpeerLogo,
  SoundcloudLogo,
  SpotifyLogo,
  VercelLogo,
  UpworkLogo,
  YoutubeLogo,
  ProducthuntLogo,
  GithubLogo,
} from 'components/atoms'

const Presets = () => {
  const { color, preset: selectedPreset, setPreset } = useContext(AppContext)

  return (
    <div className="flex flex-col pb-5 pt-1 px-4 border-b">
      {presets.map((preset) => (
        <div
          key={preset.value}
          onClick={() => setPreset(preset.value)}
          className={`flex h-10 border items-center justify-center mb-1 rounded-md hover:border-${color}-400 cursor-pointer ${
            selectedPreset === preset.value
              ? `bg-${color}-50 border-${color}-300`
              : 'border'
          }`}
        >
          {preset.value === 'asos' ? (
            <AsosLogo />
          ) : preset.value === 'blablacar' ? (
            <BlablacarLogo />
          ) : preset.value === 'superpeer' ? (
            <SuperpeerLogo />
          ) : preset.value === 'soundcloud' ? (
            <SoundcloudLogo />
          ) : preset.value === 'spotify' ? (
            <SpotifyLogo />
          ) : preset.value === 'vercel' ? (
            <VercelLogo />
          ) : preset.value === 'upwork' ? (
            <UpworkLogo />
          ) : preset.value === 'youtube' ? (
            <YoutubeLogo />
          ) : preset.value === 'producthunt' ? (
            <ProducthuntLogo />
          ) : preset.value === 'github' ? (
            <GithubLogo />
          ) : (
            <div>{preset.label}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Presets
