import { useContext } from 'react'
import { AppContext } from 'context'

import {
  Button,
  Input,
  Checkbox,
  Slider,
  Textarea,
  Radio,
  Select,
  Video,
  Logo,
} from 'components/atoms'
import {
  CheckboxGroup,
  ProductCard,
  RadioGroup,
  Feature,
} from 'components/molecules'
import { Comments, Feed, Form } from 'components/organisms'
import { Ecommerce, Blog } from 'components/templates'

const Preview = () => {
  const { selectedComponent } = useContext(AppContext)

  return (
    <div className="flex items-center justify-center w-full h-full">
      {/* atoms */}
      {selectedComponent === 'button' && <Button />}
      {selectedComponent === 'input' && <Input />}
      {selectedComponent === 'checkbox' && <Checkbox />}
      {selectedComponent === 'slider' && <Slider />}
      {selectedComponent === 'textarea' && <Textarea />}
      {selectedComponent === 'radio' && <Radio />}
      {selectedComponent === 'select' && <Select />}
      {selectedComponent === 'video' && <Video />}
      {selectedComponent === 'logo' && <Logo />}

      {/* molecules */}
      {selectedComponent === 'checkbox-group' && <CheckboxGroup />}
      {selectedComponent === 'product-card' && <ProductCard />}
      {selectedComponent === 'radio-group' && <RadioGroup />}
      {selectedComponent === 'feature' && <Feature />}

      {/* organisms */}
      {selectedComponent === 'comments' && <Comments />}
      {selectedComponent === 'feed' && <Feed />}
      {selectedComponent === 'form' && <Form />}

      {/* templates */}
      {selectedComponent === 'ecommerce' && <Ecommerce />}
      {selectedComponent === 'blog' && <Blog />}
    </div>
  )
}

export default Preview

// export default () => (
//   <div className="">
//     <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//       <ul
//         role="list"
//         className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
//       >
//         <li className="relative">
//           <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
//               alt=""
//               className="object-cover pointer-events-none group-hover:opacity-75"
//             />
//             <button
//               type="button"
//               className="absolute inset-0 focus:outline-none"
//             >
//               <span className="sr-only">View details for IMG_4985.HEIC</span>
//             </button>
//           </div>
//           <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
//             IMG_4985.HEIC
//           </p>
//           <p className="block text-sm font-medium text-gray-500 pointer-events-none">
//             3.9 MB
//           </p>
//         </li>
//         <li className="relative">
//           <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixqx=0BlLGDSoVC&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
//               alt=""
//               className="object-cover pointer-events-none group-hover:opacity-75"
//             />
//             <button
//               type="button"
//               className="absolute inset-0 focus:outline-none"
//             >
//               <span className="sr-only">View details for IMG_5214.HEIC</span>
//             </button>
//           </div>
//           <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
//             IMG_5214.HEIC
//           </p>
//           <p className="block text-sm font-medium text-gray-500 pointer-events-none">
//             4 MB
//           </p>
//         </li>
//         <li className="relative">
//           <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
//               alt=""
//               className="object-cover pointer-events-none group-hover:opacity-75"
//             />
//             <button
//               type="button"
//               className="absolute inset-0 focus:outline-none"
//             >
//               <span className="sr-only">View details for IMG_3851.HEIC</span>
//             </button>
//           </div>
//           <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
//             IMG_3851.HEIC
//           </p>
//           <p className="block text-sm font-medium text-gray-500 pointer-events-none">
//             3.8 MB
//           </p>
//         </li>
//         <li className="relative">
//           <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
//               alt=""
//               className="object-cover pointer-events-none group-hover:opacity-75"
//             />
//             <button
//               type="button"
//               className="absolute inset-0 focus:outline-none"
//             >
//               <span className="sr-only">View details for IMG_4278.HEIC</span>
//             </button>
//           </div>
//           <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
//             IMG_4278.HEIC
//           </p>
//           <p className="block text-sm font-medium text-gray-500 pointer-events-none">
//             4.1 MB
//           </p>
//         </li>
//         <li className="relative">
//           <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
//               alt=""
//               className="object-cover pointer-events-none group-hover:opacity-75"
//             />
//             <button
//               type="button"
//               className="absolute inset-0 focus:outline-none"
//             >
//               <span className="sr-only">View details for IMG_6842.HEIC</span>
//             </button>
//           </div>
//           <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
//             IMG_6842.HEIC
//           </p>
//           <p className="block text-sm font-medium text-gray-500 pointer-events-none">
//             4 MB
//           </p>
//         </li>
//         <li className="relative">
//           <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixqx=0BlLGDSoVC&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80"
//               alt=""
//               className="object-cover pointer-events-none group-hover:opacity-75"
//             />
//             <button
//               type="button"
//               className="absolute inset-0 focus:outline-none"
//             >
//               <span className="sr-only">View details for IMG_3284.HEIC</span>
//             </button>
//           </div>
//           <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
//             IMG_3284.HEIC
//           </p>
//           <p className="block text-sm font-medium text-gray-500 pointer-events-none">
//             3.9 MB
//           </p>
//         </li>
//         <li className="relative">
//           <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
//               alt=""
//               className="object-cover pointer-events-none group-hover:opacity-75"
//             />
//             <button
//               type="button"
//               className="absolute inset-0 focus:outline-none"
//             >
//               <span className="sr-only">View details for IMG_4841.HEIC</span>
//             </button>
//           </div>
//           <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
//             IMG_4841.HEIC
//           </p>
//           <p className="block text-sm font-medium text-gray-500 pointer-events-none">
//             3.8 MB
//           </p>
//         </li>
//         <li className="relative">
//           <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
//               alt=""
//               className="object-cover pointer-events-none group-hover:opacity-75"
//             />
//             <button
//               type="button"
//               className="absolute inset-0 focus:outline-none"
//             >
//               <span className="sr-only">View details for IMG_5644.HEIC</span>
//             </button>
//           </div>
//           <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
//             IMG_5644.HEIC
//           </p>
//           <p className="block text-sm font-medium text-gray-500 pointer-events-none">
//             4 MB
//           </p>
//         </li>
//       </ul>
//     </div>
//   </div>
// )
