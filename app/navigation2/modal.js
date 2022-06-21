import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useContext } from 'react'
import { UIContext } from 'context'

export default function MyModal() {
  const { showExportModal, setShowExportModal } = useContext(UIContext)

  function closeModal() {
    setShowExportModal(false)
  }

  function openModal() {
    setShowExportModal(true)
  }

  return (
    <>
      <Transition appear show={showExportModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-8 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all py-8"
                  style={{ maxWidth: 1200 }}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    Web
                  </Dialog.Title>
                  {/*
                   */}
                  <div className="mt-4">
                    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 xl:grid-cols-4">
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              React
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            CLI tool for scaffolding a new single-page React
                            application.
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <svg
                            width={40}
                            height={40}
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark:block"
                          >
                            <path
                              d="M29.58 18.828c0-1.206-1.42-2.276-3.603-2.93.525-2.217.296-3.983-.75-4.58a1.673 1.673 0 00-.838-.21c-.975 0-2.208.681-3.453 1.86-1.244-1.17-2.473-1.847-3.447-1.847a1.657 1.657 0 00-.85.213c-1.04.599-1.256 2.354-.738 4.56-2.173.65-3.586 1.712-3.59 2.912-.003 1.202 1.423 2.276 3.606 2.928-.525 2.22-.298 3.983.75 4.58.254.143.544.215.836.21.977 0 2.21-.681 3.454-1.86 1.243 1.17 2.473 1.848 3.448 1.848.297.005.59-.069.85-.214 1.04-.598 1.255-2.353.738-4.552 2.172-.658 3.585-1.72 3.587-2.918zm-7.84-5.465c1.433-1.284 2.329-1.422 2.647-1.422a.826.826 0 01.424.101c.501.286.7 1.293.541 2.627-.04.34-.099.679-.175 1.013a17.111 17.111 0 00-2.202-.362 17.227 17.227 0 00-1.443-1.764c.067-.067.136-.13.207-.193zM17.4 19.82c.135.262.28.525.43.79.152.264.31.531.484.796a16.43 16.43 0 01-1.372-.256c.122-.444.278-.882.456-1.33h.001zm-.486-3.334c.443-.103.907-.189 1.388-.255-.175.259-.325.525-.483.803-.157.278-.296.525-.431.792a20.58 20.58 0 01-.474-1.34zm.912 2.335c.222-.467.46-.926.716-1.375.261-.455.54-.9.835-1.333a20.329 20.329 0 013.133.003c.29.425.568.876.83 1.323.263.446.505.913.722 1.37a19.746 19.746 0 01-1.55 2.708c-1.042.081-2.09.08-3.132-.003-.295-.43-.573-.87-.833-1.321a20.542 20.542 0 01-.714-1.371h-.007zm5.753-2.585c.476.066.937.152 1.372.254-.134.447-.288.888-.462 1.322a25.529 25.529 0 00-.903-1.576h-.007zm.483 4.363c.15-.265.294-.53.431-.794.175.456.35.904.473 1.342-.459.106-.921.19-1.387.253.17-.259.332-.526.49-.801h-.007zM20.94 14.15c.315.336.625.7.927 1.091-.305-.013-.61-.02-.915-.021-.31 0-.626 0-.933.021.29-.378.597-.742.92-1.09zm-3.883-2.101a.852.852 0 01.432-.098 2.3 2.3 0 01.909.23 6.838 6.838 0 011.75 1.186l.206.188a17.189 17.189 0 00-1.43 1.75c-.745.073-1.484.194-2.214.362a8.895 8.895 0 01-.175-.993c-.182-1.322.028-2.33.52-2.618l.002-.007zm-.927 8.877c-.328-.1-.652-.218-.97-.35-1.242-.525-2.013-1.2-2.013-1.776 0-.576.774-1.246 2.016-1.763.311-.129.629-.242.952-.34.218.726.486 1.436.798 2.126a17.302 17.302 0 00-.783 2.103zm4.027 3.344c-1.434 1.283-2.33 1.42-2.65 1.42a.822.822 0 01-.424-.102c-.5-.286-.7-1.292-.54-2.626.04-.34.098-.678.174-1.012.726.167 1.461.287 2.202.36.441.62.923 1.21 1.443 1.765l-.204.195zm.8-.79a15.73 15.73 0 01-.93-1.09c.306.013.612.02.918.02.31 0 .627 0 .933-.019-.303.389-.61.753-.922 1.089h.001zm3.884 2.101a.845.845 0 01-.434.104c-.32 0-1.226-.14-2.654-1.419l-.206-.188c.514-.55.99-1.136 1.427-1.75a16.97 16.97 0 002.217-.361c.077.34.138.672.175.993.173 1.32-.028 2.328-.527 2.614l.002.007zm1.89-4.98a10.8 10.8 0 01-.952.34 17.233 17.233 0 00-.8-2.127c.308-.682.57-1.384.786-2.1.33.1.652.216.97.35 1.241.524 2.013 1.199 2.012 1.775-.002.576-.774 1.239-2.017 1.756l.001.007zm-5.791-.178a1.607 1.607 0 10.003-3.214 1.607 1.607 0 00-.003 3.214zM10.26 9.13v19.372h21.372V9.13H10.26zm20.537 18.539h-19.7V9.965h19.7v17.704zm-14.881-5.935c-.526 2.22-.298 3.983.749 4.58.255.143.544.215.836.21.977 0 2.21-.681 3.455-1.86 1.242 1.17 2.472 1.848 3.447 1.848.298.005.591-.069.85-.214 1.04-.598 1.255-2.353.738-4.552 2.172-.651 3.585-1.712 3.587-2.911.002-1.2-1.42-2.276-3.603-2.93.525-2.217.296-3.983-.75-4.58a1.673 1.673 0 00-.838-.21c-.975 0-2.207.681-3.452 1.86-1.245-1.17-2.474-1.847-3.448-1.847a1.656 1.656 0 00-.85.213c-1.04.599-1.256 2.354-.738 4.56-2.173.65-3.585 1.712-3.589 2.912-.003 1.202 1.423 2.266 3.607 2.921h-.002zm4.238 2.537c-1.434 1.283-2.33 1.42-2.651 1.42a.822.822 0 01-.424-.102c-.5-.286-.7-1.292-.54-2.626.04-.34.099-.678.175-1.012.725.167 1.46.287 2.202.36.44.62.923 1.21 1.442 1.765l-.204.195zm4.34-6.459a24.446 24.446 0 00-.434-.79c-.152-.264-.315-.525-.476-.785.476.066.936.151 1.372.253-.128.433-.282.875-.46 1.322h-.002zm.476 3.326c-.458.106-.92.191-1.386.254.328-.517.633-1.05.914-1.595.178.442.335.893.469 1.35l.003-.009zm-.912-2.337a19.746 19.746 0 01-1.55 2.708c-1.042.081-2.09.08-3.132-.003a19.614 19.614 0 01-1.554-2.692c.222-.468.46-.927.716-1.377.26-.455.54-.899.835-1.332a20.326 20.326 0 013.133.003c.29.424.568.876.83 1.323.263.446.507.922.724 1.379l-.002-.008zm-5.744 2.605c-.461-.066-.92-.15-1.373-.255.13-.43.286-.875.464-1.322.136.262.282.525.433.79.15.264.3.523.476.787zm-.488-4.377c-.153.263-.297.525-.432.792a17.626 17.626 0 01-.48-1.334c.442-.103.906-.19 1.387-.256-.163.26-.318.527-.475.798zm3.13 6.452c-.315-.336-.626-.7-.93-1.09.305.013.611.02.917.02.31 0 .627 0 .934-.019-.291.376-.599.74-.922 1.089zm3.883 2.101a.845.845 0 01-.434.104c-.32 0-1.226-.14-2.654-1.419l-.206-.188c.514-.55.99-1.136 1.427-1.75a16.988 16.988 0 002.217-.361c.077.34.138.672.175.993.175 1.32-.026 2.328-.525 2.614v.007zm.925-8.87c.329.101.652.218.969.35 1.241.526 2.014 1.2 2.012 1.776-.002.576-.772 1.254-2.015 1.77-.3.123-.617.236-.953.338a17.24 17.24 0 00-.8-2.126c.308-.687.571-1.393.787-2.114v.007zm-4.027-3.342c1.434-1.283 2.33-1.421 2.648-1.421a.828.828 0 01.424.101c.5.286.7 1.292.54 2.626-.04.341-.098.68-.174 1.014a17.09 17.09 0 00-2.203-.362 17.227 17.227 0 00-1.442-1.765c.066-.072.137-.137.208-.2l-.001.007zm-.797.781c.315.336.625.7.927 1.091-.305-.013-.61-.02-.915-.021-.31 0-.626 0-.933.021.29-.378.597-.742.92-1.09zm-3.883-2.101a.852.852 0 01.432-.098 2.3 2.3 0 01.909.23 6.838 6.838 0 011.75 1.186l.206.188a17.189 17.189 0 00-1.43 1.75c-.745.073-1.484.194-2.214.362a8.895 8.895 0 01-.175-.993c-.182-1.322.028-2.33.52-2.618l.002-.007zm-1.894 4.988c.311-.129.629-.242.952-.34.218.726.486 1.436.798 2.126-.307.682-.57 1.384-.786 2.1-.329-.1-.652-.216-.97-.35-1.243-.524-2.013-1.199-2.013-1.774 0-.576.777-1.245 2.018-1.762zm5.777.175a1.608 1.608 0 101.605 1.609 1.605 1.605 0 00-1.605-1.618v.01zm0 0a1.608 1.608 0 101.605 1.609 1.605 1.605 0 00-1.605-1.618v.01zm0 0a1.608 1.608 0 101.605 1.609 1.605 1.605 0 00-1.605-1.618v.01zm8.64 1.618c0-1.206-1.42-2.276-3.603-2.929.525-2.218.296-3.983-.75-4.58a1.673 1.673 0 00-.838-.21c-.975 0-2.208.68-3.453 1.86-1.244-1.17-2.473-1.848-3.447-1.848a1.657 1.657 0 00-.85.214c-1.04.598-1.256 2.353-.738 4.56-2.173.65-3.586 1.711-3.59 2.912-.003 1.201 1.423 2.276 3.606 2.928-.525 2.219-.298 3.983.75 4.58.254.142.544.215.836.21.977 0 2.21-.681 3.454-1.86 1.243 1.17 2.473 1.847 3.448 1.847.297.006.59-.068.85-.213 1.04-.599 1.255-2.354.738-4.552 2.172-.662 3.585-1.724 3.587-2.923v.004zm-7.84-5.467c1.433-1.284 2.329-1.422 2.647-1.422a.828.828 0 01.424.102c.501.285.7 1.292.541 2.626-.04.34-.099.679-.175 1.014a17.111 17.111 0 00-2.202-.363 17.227 17.227 0 00-1.443-1.764c.067-.067.136-.13.207-.193zM17.4 19.82c.135.263.28.525.43.79.152.264.31.531.484.796a16.43 16.43 0 01-1.372-.256c.122-.444.278-.882.456-1.33h.001zm-.486-3.334c.443-.103.907-.188 1.388-.255-.175.259-.325.525-.483.803-.157.279-.296.525-.431.792-.173-.441-.332-.888-.474-1.34zm.912 2.336c.222-.468.46-.927.716-1.376.261-.455.54-.9.835-1.333a20.33 20.33 0 013.133.003c.29.425.568.876.83 1.323.263.446.505.913.722 1.37a19.744 19.744 0 01-1.55 2.709c-1.042.08-2.09.08-3.132-.004-.295-.429-.573-.87-.833-1.321a20.544 20.544 0 01-.714-1.37h-.007v-.002zm5.753-2.586c.476.067.937.152 1.372.254-.134.447-.288.888-.462 1.322a25.5 25.5 0 00-.903-1.576h-.007zm.483 4.363c.15-.265.294-.53.431-.793.175.455.35.903.473 1.341-.459.106-.921.19-1.387.253.17-.259.332-.526.49-.801h-.007zm-3.122-6.449c.315.336.625.7.927 1.091-.305-.013-.61-.02-.915-.021-.31 0-.626 0-.933.021.29-.378.597-.742.92-1.09zm-3.883-2.101a.852.852 0 01.432-.098 2.3 2.3 0 01.909.23 6.838 6.838 0 011.75 1.186l.206.188a17.189 17.189 0 00-1.43 1.75c-.745.073-1.484.194-2.214.362a8.895 8.895 0 01-.175-.993c-.182-1.322.028-2.33.52-2.618l.002-.007zm-.927 8.877c-.328-.1-.652-.218-.97-.35-1.242-.525-2.013-1.2-2.013-1.776 0-.576.774-1.246 2.016-1.763.311-.129.629-.242.952-.34.218.726.486 1.436.798 2.126a17.302 17.302 0 00-.783 2.103zm4.027 3.344c-1.434 1.283-2.33 1.42-2.65 1.42a.822.822 0 01-.424-.102c-.5-.286-.7-1.292-.54-2.626.04-.34.098-.678.174-1.012.726.167 1.461.287 2.202.36.441.62.923 1.21 1.443 1.765l-.204.195zm.8-.79a15.73 15.73 0 01-.93-1.09c.306.013.612.02.918.02.31 0 .627 0 .933-.019-.303.389-.61.753-.922 1.089h.001zm3.884 2.101a.845.845 0 01-.434.104c-.32 0-1.226-.14-2.654-1.419l-.206-.188c.514-.55.99-1.136 1.427-1.75a16.97 16.97 0 002.217-.361c.077.34.138.672.175.993.173 1.32-.028 2.328-.527 2.614l.002.007zm1.89-4.98a10.8 10.8 0 01-.952.34 17.233 17.233 0 00-.8-2.127c.308-.682.57-1.384.786-2.1.33.1.652.216.97.35 1.241.524 2.013 1.199 2.012 1.775-.002.576-.774 1.239-2.017 1.756l.001.007zm-5.791-.178a1.607 1.607 0 10.003-3.214 1.607 1.607 0 00-.003 3.214zM8.804 29.966v-19.38l-.84.841v19.374h21.369l.837-.835H8.804z"
                              fill="#09D3AC"
                            />
                          </svg>
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              Angular
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            Platform for building mobile and desktop web
                            applications.
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <svg
                            width={40}
                            height={40}
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block dark:hidden"
                          >
                            <path
                              d="M20 7.08L7.338 11.595 9.27 28.337 20 34.28l10.73-5.943 1.932-16.742L20 7.08z"
                              fill="#DD0031"
                            />
                            <path
                              d="M20 7.08v3.02-.014V34.28l10.73-5.943 1.932-16.742L20 7.08z"
                              fill="#C3002F"
                            />
                            <path
                              d="M20 10.086l-7.915 17.748h2.951l1.591-3.972h6.719l1.59 3.972h2.952L20 10.086zm2.312 11.328h-4.624L20 15.852l2.312 5.562z"
                              fill="#FFF"
                            />
                          </svg>
                          <svg
                            width={40}
                            height={40}
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden dark:block"
                          >
                            <path
                              d="M20 23.862h-3.36l-1.59 3.972h-2.965L20 10.086v.013V7.08L7.338 11.595 9.27 28.337 20 34.28V23.862z"
                              fill="#fff"
                            />
                            <path
                              d="M17.688 21.414H20v-5.562l-2.312 5.562z"
                              fill="#fff"
                            />
                            <g opacity="0.9" fill="#fff">
                              <path
                                opacity="0.9"
                                d="M20 23.862h3.36l1.59 3.972h2.965L20 10.086v.013V7.08l12.662 4.515-1.932 16.742L20 34.28V23.862z"
                              />
                              <path
                                opacity="0.9"
                                d="M22.312 21.414H20v-5.562l2.312 5.562z"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              Vue
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            Fast and modern development server and build tool.
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <svg
                            class="logo"
                            viewBox="0 0 128 128"
                            width="24"
                            height="24"
                            data-v-596b9dc5=""
                          >
                            <path
                              fill="#42b883"
                              d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                              data-v-596b9dc5=""
                            ></path>
                            <path
                              fill="#35495e"
                              d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                              data-v-596b9dc5=""
                            ></path>
                          </svg>
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              Svelte
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            The fastest way to build apps of all sizes with
                            Svelte.js.
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <svg
                            width={40}
                            height={40}
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark:block"
                          >
                            <path
                              d="M29.529 10.348C27.09 6.86 22.277 5.825 18.797 8.043l-6.114 3.896a7.013 7.013 0 00-3.168 4.698 7.386 7.386 0 00.728 4.742 7.033 7.033 0 00-1.049 2.62 7.474 7.474 0 001.277 5.653c2.438 3.489 7.252 4.522 10.732 2.305l6.113-3.896a7.012 7.012 0 003.169-4.698 7.388 7.388 0 00-.728-4.742 7.031 7.031 0 001.049-2.62 7.472 7.472 0 00-1.277-5.653"
                              fill="#FF3E00"
                            />
                            <path
                              d="M18.2 29.98a4.855 4.855 0 01-5.212-1.932 4.494 4.494 0 01-.768-3.399c.035-.193.084-.384.146-.57l.115-.352.313.23a7.888 7.888 0 002.391 1.195l.227.069-.02.227c-.028.322.06.644.246.909a1.462 1.462 0 001.57.582c.132-.035.259-.091.375-.165l6.113-3.896a1.273 1.273 0 00.574-.85 1.358 1.358 0 00-.231-1.025 1.464 1.464 0 00-1.57-.583c-.133.036-.259.091-.375.165l-2.333 1.487a4.46 4.46 0 01-1.241.545 4.856 4.856 0 01-5.212-1.932 4.493 4.493 0 01-.768-3.399 4.217 4.217 0 011.906-2.824l6.113-3.896a4.451 4.451 0 011.242-.546 4.856 4.856 0 015.212 1.932 4.494 4.494 0 01.767 3.399 4.3 4.3 0 01-.146.57l-.115.352-.313-.23a7.877 7.877 0 00-2.391-1.195l-.228-.07.021-.226a1.374 1.374 0 00-.246-.909 1.462 1.462 0 00-1.57-.582c-.132.035-.259.09-.375.165l-6.113 3.896a1.271 1.271 0 00-.574.85 1.355 1.355 0 00.231 1.025 1.463 1.463 0 001.57.583c.133-.036.26-.091.375-.165l2.333-1.487a4.447 4.447 0 011.24-.545 4.856 4.856 0 015.213 1.931 4.494 4.494 0 01.768 3.4 4.217 4.217 0 01-1.906 2.825l-6.113 3.895a4.454 4.454 0 01-1.242.546"
                              fill="#fff"
                            />
                          </svg>
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              Laravel
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            PHP web application framework with expressive,
                            elegant syntax.
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <svg
                            width={40}
                            height={40}
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark:block"
                          >
                            <path
                              d="M32.344 13.328a.43.43 0 01.013.104v5.532a.404.404 0 01-.202.35l-4.643 2.672v5.298a.404.404 0 01-.201.35l-9.69 5.578c-.023.013-.047.02-.071.03-.01.002-.018.008-.028.011a.406.406 0 01-.206 0l-.032-.014c-.022-.008-.045-.015-.066-.027l-9.69-5.578a.404.404 0 01-.202-.35V10.69c0-.036.006-.072.015-.106.003-.012.01-.023.014-.034.007-.021.014-.043.025-.063.008-.012.02-.023.028-.035.012-.016.022-.033.036-.047.012-.011.027-.02.04-.03.014-.012.028-.025.044-.035l4.845-2.79a.404.404 0 01.403 0l4.845 2.79h.001c.016.01.03.023.044.034l.04.03c.013.015.024.032.036.048.008.011.02.023.027.035.012.02.018.042.026.063.004.012.011.022.014.034.01.035.014.07.014.106v10.364l4.037-2.325v-5.299c0-.035.006-.07.015-.105.003-.011.01-.022.014-.034.008-.02.015-.043.026-.062.007-.013.018-.023.027-.036.012-.016.022-.033.036-.047.012-.011.027-.02.04-.03.015-.012.028-.025.044-.035l4.845-2.789a.403.403 0 01.404 0l4.844 2.79c.018.01.03.022.046.033l.038.03c.014.015.025.032.036.048.01.012.02.023.028.036.011.02.018.04.026.063.005.011.012.022.014.034zm-.794 5.402v-4.6l-1.695.977-2.343 1.348v4.6l4.038-2.325zm-4.845 8.32v-4.602l-2.304 1.316-6.578 3.754v4.646l8.882-5.114zM8.135 11.39V27.05l8.88 5.113V27.52l-4.64-2.626v-.001l-.003-.001c-.016-.009-.03-.022-.043-.033-.013-.01-.028-.018-.039-.03v-.001c-.014-.013-.023-.028-.034-.042-.01-.014-.022-.026-.03-.04v-.001c-.01-.015-.016-.033-.022-.05-.006-.016-.015-.03-.02-.046-.004-.02-.005-.04-.007-.06-.002-.015-.006-.03-.006-.045v-10.83l-2.342-1.35-1.695-.973v-.001zm4.44-3.022l-4.037 2.323 4.036 2.324 4.036-2.324-4.036-2.323h.001zm2.1 14.5l2.34-1.348V11.39l-1.694.975-2.342 1.349v10.13l1.695-.976zM27.108 11.11l-4.036 2.323 4.036 2.324 4.035-2.325-4.035-2.322zm-.404 5.346l-2.342-1.349-1.695-.976v4.6l2.341 1.347 1.696.977v-4.6zM17.418 26.82l5.92-3.379 2.96-1.688-4.033-2.322-4.644 2.673-4.232 2.436 4.03 2.281z"
                              fill="#FF2D20"
                            />
                          </svg>
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              Ruby on Rails
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            Full-stack framework with all the tools needed to
                            build amazing web apps.
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <svg
                            width={40}
                            height={40}
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block dark:hidden"
                          >
                            <path
                              d="M39.737 16.88v1.83h-3.263v.845h1.647c.881 0 1.82.652 1.876 1.765l.003.105v.704c-.04 1.339-1.137 1.842-1.82 1.87l-.06.001h-3.303v-1.82l3.344-.01v-.886h-.532l-.155.001h-.115l-.025.001h-.007l.015.001h.024l.047.001h.035-.07l-.773-.003c-.793 0-1.824-.596-1.886-1.76l-.003-.111v-.634c0-1.2 1.018-1.861 1.817-1.899l.072-.002h3.132zm-8.355 0v5.28h2.758V24h-4.8v-7.12h2.042zm-2.88 0V24h-2.05v-7.12h2.05zm-4.83 0c.473 0 1.81.324 1.877 1.758l.003.112V24h-1.91v-1.257h-1.849V24h-1.97v-5.25c0-.587.449-1.8 1.765-1.868l.114-.003h1.97zm-10.794-.002h3.836c.08.01 2.125.254 2.125 2.467s-1.688 2.4-1.754 2.407h-.002L19.32 24h-2.85l-1.665-1.718V24h-1.927v-7.122zm10.022-1.2l.015.014s-.172.121-.354.272c-5.739-4.224-9.245-2.233-10.346-1.7-5.001 2.778-3.556 9.598-3.526 9.734V24H.707s.303-2.977 2.425-6.497 5.739-6.185 8.68-6.447c5.668-.565 10.777 4.32 11.088 4.622zm-13.908 6.31l1.091.393c.05.394.122.767.197 1.107l.046.2-1.213-.432a10.17 10.17 0 01-.12-1.268zm14.084-3.409H22.4c-.505 0-.596.263-.613.358l-.003.025V20.711h1.848v-1.743c-.002-.035-.037-.389-.556-.389zm-22.57.15l1.161.423c-.141.326-.321.744-.452 1.072l-.053.135L0 19.937c.101-.272.313-.775.505-1.207zm15.844-.063h-1.545v1.628h1.535s.442-.17.442-.819c0-.65-.432-.809-.432-.809zm-6.903-.338l.727.573a8.06 8.06 0 00-.184.941l-.028.236-.818-.644c.08-.362.171-.734.303-1.106zm1.788-2.806l.455.684c-.178.184-.343.37-.49.565l-.106.148-.485-.724c.182-.23.394-.462.626-.673zm-7.234-1.489l.717.624a9.888 9.888 0 00-.524.59l-.163.204-.778-.664c.233-.251.485-.503.748-.754zm10.013-.04l.222.664a6.053 6.053 0 00-.703.27l-.176.082-.232-.694c.252-.111.545-.222.889-.322zm2.364-.242c.259.017.524.046.795.093l.205.038-.04.624a5.697 5.697 0 00-.8-.111l-.2-.01.04-.634zm-8.295-2.775l.455.693a8.526 8.526 0 00-.583.324l-.195.12-.465-.705c.273-.16.535-.302.788-.432zm8.315-.383c.601.171.86.289.963.343l.017.01-.04.673c-.216-.087-.431-.17-.65-.248l-.33-.114.04-.664zM12.538 10l.203.614h-.101c-.22 0-.44.005-.66.02l-.22.02-.191-.594c.333-.04.656-.06.97-.06z"
                              fill="#C00"
                            />
                          </svg>
                          <svg
                            width={40}
                            height={40}
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden dark:block"
                          >
                            <path
                              d="M39.737 16.88v1.83h-3.263v.845h1.647c.881 0 1.82.652 1.876 1.765l.003.105v.704c-.04 1.339-1.137 1.842-1.82 1.87l-.06.001h-3.303v-1.82l3.344-.01v-.886h-.532l-.155.001h-.115l-.025.001h-.007l.015.001h.024l.047.001h.035-.07l-.773-.003c-.793 0-1.824-.596-1.886-1.76l-.003-.111v-.634c0-1.2 1.018-1.861 1.817-1.899l.072-.002h3.132zm-8.355 0v5.28h2.758V24h-4.8v-7.12h2.042zm-2.88 0V24h-2.05v-7.12h2.05zm-4.83 0c.473 0 1.81.324 1.877 1.758l.003.112V24h-1.91v-1.257h-1.849V24h-1.97v-5.25c0-.587.449-1.8 1.765-1.868l.114-.003h1.97zm-10.794-.002h3.836c.08.01 2.125.254 2.125 2.467s-1.688 2.4-1.754 2.407h-.002L19.32 24h-2.85l-1.665-1.718V24h-1.927v-7.122zm10.022-1.2l.015.014s-.172.121-.354.272c-5.739-4.224-9.245-2.233-10.346-1.7-5.001 2.778-3.556 9.598-3.526 9.734V24H.707s.303-2.977 2.425-6.497 5.739-6.185 8.68-6.447c5.668-.565 10.777 4.32 11.088 4.622zm-13.908 6.31l1.091.393c.05.394.122.767.197 1.107l.046.2-1.213-.432a10.17 10.17 0 01-.12-1.268zm14.084-3.409H22.4c-.505 0-.596.263-.613.358l-.003.025V20.711h1.848v-1.743c-.002-.035-.037-.389-.556-.389zm-22.57.15l1.161.423c-.141.326-.321.744-.452 1.072l-.053.135L0 19.937c.101-.272.313-.775.505-1.207zm15.844-.063h-1.545v1.628h1.535s.442-.17.442-.819c0-.65-.432-.809-.432-.809zm-6.903-.338l.727.573a8.06 8.06 0 00-.184.941l-.028.236-.818-.644c.08-.362.171-.734.303-1.106zm1.788-2.806l.455.684c-.178.184-.343.37-.49.565l-.106.148-.485-.724c.182-.23.394-.462.626-.673zm-7.234-1.489l.717.624a9.888 9.888 0 00-.524.59l-.163.204-.778-.664c.233-.251.485-.503.748-.754zm10.013-.04l.222.664a6.053 6.053 0 00-.703.27l-.176.082-.232-.694c.252-.111.545-.222.889-.322zm2.364-.242c.259.017.524.046.795.093l.205.038-.04.624a5.697 5.697 0 00-.8-.111l-.2-.01.04-.634zm-8.295-2.775l.455.693a8.526 8.526 0 00-.583.324l-.195.12-.465-.705c.273-.16.535-.302.788-.432zm8.315-.383c.601.171.86.289.963.343l.017.01-.04.673c-.216-.087-.431-.17-.65-.248l-.33-.114.04-.664zM12.538 10l.203.614h-.101c-.22 0-.44.005-.66.02l-.22.02-.191-.594c.333-.04.656-.06.97-.06z"
                              fill="#fff"
                            />
                          </svg>
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              Phoenix
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            A framework to build rich, interactive applications
                            with Elixir.
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <img
                            src="https://tailwindcss.com/_next/static/media/phoenix.80b7a1fce54b653d0b52b7f5c2b16a19.png"
                            alt="Phoenix"
                            role="presentation"
                            className="w-10 h-10 object-contain object-center"
                          />
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              Parcel
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            The zero-configuration build tool for the web.
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <img
                            src="https://tailwindcss.com/_next/static/media/parcel.a76d099072ef38246e3bf5e77013e695.png"
                            alt="Parcel"
                            role="presentation"
                            className="w-10 h-10 object-contain object-center"
                          />
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                    </ul>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg mt-12 font-semibold leading-6 text-gray-900"
                  >
                    Mobile
                  </Dialog.Title>
                  {/*
                   */}
                  <div className="mt-4">
                    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 xl:grid-cols-4">
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              Swift
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            Native applications for iOS / MacOS
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <img
                            src="https://developer.apple.com/swift/images/swift-logo.svg"
                            alt="Phoenix"
                            role="presentation"
                            className="w-10 h-10 object-contain object-center"
                          />
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              Kotlin
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            Native applications for Android
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/2048px-Kotlin_Icon.svg.png"
                            alt="Phoenix"
                            role="presentation"
                            className="w-10 h-10 object-contain object-center"
                          />
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              React Native
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            Build native iOS/Android applications with React
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png"
                            alt="Phoenix"
                            role="presentation"
                            className="w-10 h-10 object-contain object-center"
                          />
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              Flutter
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            Natively compiled, multi-platform applications
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <img
                            src="https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg"
                            alt="Phoenix"
                            role="presentation"
                            className="w-10 h-10 object-contain object-center"
                          />
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                    </ul>
                  </div>

                  <Dialog.Title
                    as="h3"
                    className="text-lg mt-12 font-semibold leading-6 text-gray-900"
                  >
                    Desktop
                  </Dialog.Title>
                  {/*
                   */}
                  <div className="mt-4">
                    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 xl:grid-cols-4">
                      <li className="relative flex flex-row-reverse cursor-pointer">
                        <div className="peer group ml-6 flex-auto">
                          <h4 className="mb-2 leading-6 text-slate-900 font-semibold dark:text-slate-200">
                            <a className="before:absolute before:-inset-3 before:rounded-2xl">
                              Electron
                              <svg
                                viewBox="0 0 3 6"
                                className="ml-3 w-auto h-1.5 overflow-visible inline -mt-px text-slate-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                              >
                                <path
                                  d="M0 0L3 3L0 6"
                                  fill="none"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </a>
                          </h4>
                          <p className="text-sm leading-6 text-slate-700 dark:text-slate-400">
                            Framework for creating native applications with web
                            technologies.
                          </p>
                        </div>
                        <div className="flex-none w-14 h-14 rounded-full bg-white ring-1 ring-slate-900/5 shadow flex items-center justify-center overflow-hidden dark:bg-slate-800 dark:highlight-white/5">
                          <img
                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/electron/electron.png"
                            alt="Phoenix"
                            role="presentation"
                            className="w-10 h-10 object-contain object-center"
                          />
                        </div>
                        <div className="absolute -z-10 -inset-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 opacity-0 peer-hover:opacity-100" />
                      </li>
                    </ul>
                  </div>

                  {/*
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                  */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
