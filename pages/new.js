import { useState } from 'react'
import {
  ChevronUpIcon,
  ChevronDownIcon,
  PaperAirplaneIcon,
  // XMarkIcon,
} from '@heroicons/react/24/solid'

const New = () => {
  return (
    <div className="w-screen h-screen bg-gray-2 flex flex-col items-center pt-16">
      <div className="relative mb-8 flex flex-col items-center">
        <h1
          className="mb-4 text-lg fixed top-5 left-5 cursor-cell _select-none my-logo"
          style={{
            // '--myColor1': '#82d0ff',
            // '--myColor2': '#f4a9ff',
            // backgroundImage:
            //   'linear-gradient(45deg, var(--myColor1), var(--myColor2))',
            // backgroundClip: 'text',
            // webkitBackgroundClip: 'text',
            // color: 'transparent',
            // transition: '--myColor1 0.2s ease-out, --myColor2 0.2s ease-in-out',
            // /* font-family: 'Inter'; */

            // fontWeight: 600,

            // textTransform: 'lowercase',

            // fontFamily: 'system-ui',
            fontFamily: 'Unbounded',
            // fontFamily: 'Play',
            fontWeight: 900,
          }}
        >
          MakeUI.ai
        </h1>
        <div className="flex flex-col mb-4 mt-64">
          <h1
            className={`mb-1  text-lg self-start ${
              false // is input focused?
                ? 'text-gray-12'
                : 'text-gray-10'
            }`}
          >
            What do you want to build?
          </h1>
          {/*
          <div className="flex gap-x-1">
            <input
              className="bg-gray-3 rounded-md placeholder:text-gray-7 text-gray-12 px-3 py-2 w-80
            focus-visible:outline-gray-6
            focus-visible:outline
            focus-visible:outline-2
          "
              // placeholder="What do you want to build?"
              placeholder={`eg "Lego toys e-commerce shop"`}
            />
            <button className="bg-blue-3 p-2 px-3 tex rounded-md font-medium text-blue-10">
              Generate
            </button>
          </div>
          */}
          <div className="flex gap-x-1 bg-gray-3 rounded-lg p-1.5">
            <input
              className="bg-transparent placeholder:text-gray-7 font-medium text-lg text-gray-12 px-3 py-1 w-80
            focus-visible:outline-gray-3
            focus-visible:outline-none
            focus-visible:outline-2
          "
              // placeholder="What do you want to build?"
              placeholder={`eg "Lego toys e-commerce shop"`}
            />
            <button className="bg-blue-4 p-1.5 px-3 tex rounded-md font-medium text-blue-10">
              Generate
            </button>
          </div>
        </div>
        {/*
        <span className="mt-3 text-gray-8 text-sm">
          eg "Lego toys e-commerce shop"
        </span>
        */}
      </div>
      <div className="flex gap-x-5">
        <PromptWindow label="Components" color="gray" display={false} />
        <PromptWindow label="Style reasoning (UI)" color="grass" />
        <PromptWindow label="Layout generation (UX)" color="plum" />
        <PromptWindow label="Content generation (IA)" color="orange" />
        <PromptWindow label="Parameters" color="gray" display={false} />
      </div>

      <div className="mt-12">
        <BuildingWebsite />
      </div>
      {/*
       */}
      <div
        className={`
          bg-grassA-4 border-grassA-5 border-grassA-6 text-grassA-9 text-grassA-10
          bg-plumA-4 border-plumA-5 border-plumA-6 text-plumA-9 text-plumA-10
          bg-orangeA-4 border-orangeA-5 border-orangeA-6 text-orangeA-9 text-orangeA-10
          bg-grassA-5
          bg-plumA-5
          bg-orangeA-5
          hover:bg-grassA-3
          hover:bg-plumA-3
          hover:bg-orangeA-3
          bg-grassA-3
          bg-plumA-3
          bg-orangeA-3

          text-grassA-1 text-grassA-2 text-grassA-3 text-grassA-4 text-grassA-5 text-grassA-6 text-grassA-7 placeholder:text-grassA-8 text-grassA-9 text-grassA-10 text-grassA-11 text-grassA-12 group-hover:text-grassA-11
          text-plumA-1 text-plumA-2 text-plumA-3 text-plumA-4 text-plumA-5 text-plumA-6 text-plumA-7 placeholder:text-plumA-8 text-plumA-9 text-plumA-10 text-plumA-11 text-plumA-12 group-hover:text-plumA-11
          text-orangeA-1 text-orangeA-2 text-orangeA-3 text-orangeA-4 text-orangeA-5 text-orangeA-6 text-orangeA-7 placeholder:text-orangeA-8 text-orangeA-9 text-orangeA-10 text-orangeA-11 text-orangeA-12 group-hover:text-orangeA-11

          outline-grassA-1 outline-grassA-2 outline-grassA-3 outline-grassA-4 outline-grassA-5 outline-grassA-6 outline-grassA-7 outline-grassA-8 focus-visible:outline-grassA-9
          outline-plumA-1 outline-plumA-2 outline-plumA-3 outline-plumA-4 outline-plumA-5 outline-plumA-6 outline-plumA-7 outline-plumA-8 focus-visible:outline-plumA-9
          outline-orangeA-1 outline-orangeA-2 outline-orangeA-3 outline-orangeA-4 outline-orangeA-5 outline-orangeA-6 outline-orangeA-7 outline-orangeA-8 focus-visible:outline-orangeA-9

          _____

          bg-purpleA-4 border-purpleA-5 border-purpleA-6 text-purpleA-9 text-purpleA-10
          bg-amberA-4 border-amberA-5 border-amberA-6 text-amberA-9 text-amberA-10
          bg-purpleA-5
          bg-amberA-5
          hover:bg-purpleA-3
          hover:bg-amberA-3
          bg-purpleA-3
          bg-amberA-3

          text-purpleA-1 text-purpleA-2 text-purpleA-3 text-purpleA-4 text-purpleA-5 text-purpleA-6 text-purpleA-7 placeholder:text-purpleA-8 text-purpleA-9 text-purpleA-10 text-purpleA-11 text-purpleA-12 group-hover:text-purpleA-11
          text-amberA-1 text-amberA-2 text-amberA-3 text-amberA-4 text-amberA-5 text-amberA-6 text-amberA-7 placeholder:text-amberA-8 text-amberA-9 text-amberA-10 text-amberA-11 text-amberA-12 group-hover:text-amberA-11

          outline-purpleA-1 outline-purpleA-2 outline-purpleA-3 outline-purpleA-4 outline-purpleA-5 outline-purpleA-6 outline-purpleA-7 outline-purpleA-8 focus-visible:outline-purpleA-9
          outline-amberA-1 outline-amberA-2 outline-amberA-3 outline-amberA-4 outline-amberA-5 outline-amberA-6 outline-amberA-7 outline-amberA-8 focus-visible:outline-amberA-9

          bg-grayA-4 border-grayA-5 border-grayA-6 text-grayA-9 text-grayA-10
          bg-grayA-5
          hover:bg-grayA-3
          bg-grayA-3
          text-grayA-1 text-grayA-2 text-grayA-3 text-grayA-4 text-grayA-5 text-grayA-6 text-grayA-7 placeholder:text-grayA-8 text-grayA-9 text-grayA-10 text-grayA-11 text-grayA-12 group-hover:text-grayA-11
          outline-grayA-1 outline-grayA-2 outline-grayA-3 outline-grayA-4 outline-grayA-5 outline-grayA-6 outline-grayA-7 outline-grayA-8 focus-visible:outline-grayA-9
        `}
      />
    </div>
  )
}

const PromptWindow = ({ label, color, display = true }) => {
  const [collapsed, setCollapsed] = useState(false)

  if (!display) return null

  return (
    <Container color={color} collapsed={collapsed}>
      <div className="flex flex-col">
        <Header color={color} collapsed={collapsed} setCollapsed={setCollapsed}>
          {label}
        </Header>
        {!collapsed && <Body color={color}>Some prompt text here</Body>}
      </div>
      {!collapsed && <PromptWindowInput color={color} />}
    </Container>
  )
}

const Container = ({ children, color, collapsed }) => {
  return (
    <div
      className={`w-[350px] ${
        !collapsed ? 'h-[400px]' : 'h-min'
      } flex flex-col rounded-lg bg-${color}A-4 border border-${color}A-5 flex flex-col justify-between`}
    >
      {children}
    </div>
  )
}

const Header = ({ children, color, collapsed, setCollapsed }) => {
  return (
    <div
      className={`flex items-center justify-between w-full ${
        !collapsed ? 'border-b' : ''
      } border-${color}A-6 text-${color}A-9 text-sm py-1 px-2.5 font-medium pr-1 select-none cursor-default`}
    >
      <span>{children}</span>
      <div
        className={`flex justify-center items-center cursor-pointer p-1 rounded hover:bg-${color}A-3 -mt-0.5`}
        onClick={() => setCollapsed(!collapsed)}
      >
        {/*
        _
        */}
        {collapsed ? (
          <ChevronDownIcon className={`h-4 w-4 text-${color}A-10`} />
        ) : (
          <ChevronUpIcon className={`h-4 w-4 text-${color}A-10`} />
        )}
      </div>
    </div>
  )
}

const Body = ({ children, color }) => {
  return (
    <div className={`text-base p-2.5 text-${color}A-10`}>
      {children}
      <span />
    </div>
  )
}

const PromptWindowInput = ({ color }) => (
  <div
    className={`w-full border-t bg-${color}A-3 __hover:bg-${color}A-4__ border-${color}A-6 text-${color}A-11 text-sm font-medium h-8 relative`}
  >
    <input
      className={`w-full h-full px-2.5 py-1 bg-transparent focus:ring-${color}A-5 placeholder:text-${color}A-6
        placeholder:text-${color}A-8
        focus-visible:outline-${color}A-9
        focus-visible:outline
        focus-visible:outline-1
        rounded-b-lg
        `}
      placeholder="Aa"
      // placeholder="Type anything"
    />
    <div
      className={`flex justify-center items-center cursor-pointer p-1 rounded group hover:bg-${color}A-3 absolute right-1 top-1`}
    >
      {/*
        _
        */}
      <PaperAirplaneIcon
        className={`h-4 w-4 text-${color}A-10 __group-hover:text-${color}A-11`}
      />
    </div>
  </div>
)

const BuildingWebsite = () => (
  <div className="w-96 border-gray-6 border rounded-lg bg-gray-1/30 overflow-hidden scale-110">
    {/*
     */}
    <div className="w-full h-4 bg-gray-1 border-b border-gray-6 flex justify-end items-center p-3.5 py-3.5">
      <div className="w-2.5 h-2.5 bg-gray-11 rounded-full ml-1"></div>
      <div className="w-2.5 h-2.5 bg-gray-11 rounded-full ml-1"></div>
      <div className="w-2.5 h-2.5 bg-gray-11 rounded-full ml-1"></div>
    </div>
    <div className="flex text-gray-11 bg-gray-1 fill-gray-11 flex-col justify-center items-center h-56">
      <div className="flex flex-col items-center -mt-6">
        <Spinner />
        <span className="mt-3.5 text-base">Building your website</span>
      </div>
    </div>
  </div>
)

// <img src="/icons/6-dots-scale.svg" />
const Spinner = () => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style
      dangerouslySetInnerHTML={{
        __html:
          '.spinner_DupU{animation:spinner_sM3D 1.2s infinite; }.spinner_GWtZ{animation-delay:.1s}.spinner_dwN6{animation-delay:.2s}.spinner_46QP{animation-delay:.3s}.spinner_PD82{animation-delay:.4s}.spinner_eUgh{animation-delay:.5s}.spinner_eUaP{animation-delay:.6s}.spinner_j38H{animation-delay:.7s}.spinner_tVmX{animation-delay:.8s}.spinner_DQhX{animation-delay:.9s}.spinner_GIL4{animation-delay:1s}.spinner_n0Yb{animation-delay:1.1s}@keyframes spinner_sM3D{0%,50%{animation-timing-function:cubic-bezier(0,1,0,1);r:0}10%{animation-timing-function:cubic-bezier(.53,0,.61,.73);r:2px}}',
      }}
    />
    <circle className="spinner_DupU" cx={12} cy={3} r={0} />
    <circle className="spinner_DupU spinner_GWtZ" cx="16.50" cy="4.21" r={0} />
    <circle className="spinner_DupU spinner_n0Yb" cx="7.50" cy="4.21" r={0} />
    <circle className="spinner_DupU spinner_dwN6" cx="19.79" cy="7.50" r={0} />
    <circle className="spinner_DupU spinner_GIL4" cx="4.21" cy="7.50" r={0} />
    <circle className="spinner_DupU spinner_46QP" cx={21.0} cy={12.0} r={0} />
    <circle className="spinner_DupU spinner_DQhX" cx={3.0} cy={12.0} r={0} />
    <circle className="spinner_DupU spinner_PD82" cx="19.79" cy="16.50" r={0} />
    <circle className="spinner_DupU spinner_tVmX" cx="4.21" cy="16.50" r={0} />
    <circle className="spinner_DupU spinner_eUgh" cx="16.50" cy="19.79" r={0} />
    <circle className="spinner_DupU spinner_j38H" cx="7.50" cy="19.79" r={0} />
    <circle className="spinner_DupU spinner_eUaP" cx={12} cy={21} r={0} />
  </svg>
)

// outline-red-700
// ring-red-700
// [&:has(:focus-visible)]:outline-red-700
// focus:border-red-500

export default New
