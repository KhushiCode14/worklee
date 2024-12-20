// import { useState } from "react";

export default function Footer() {
  //   const [showDropdown, setShowDropdown] = useState(false);

  return (
    <footer className="py-8 text-white bg-black">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
        <div className="mb-4 md:mb-0 md:w-1/3">
          <h3 className="mb-2 text-lg font-bold">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Trust, Safety & Security
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <h3 className="mb-2 text-lg font-bold">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h1a5 5 0 015-5V2z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16l4-4-4-4m0 8l-4-4 4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-4 md:mb-0 md:w-1/3">
          <h3 className="mb-2 text-lg font-bold">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                API Reference
              </a>
            </li>
          </ul>
        </div>

        {/* Responsive Contact Info Section */}
        <div className="mb-4 md:mb-0 md:w-1/3">
          <h3 className="mb-2 text-lg font-bold">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Email Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Call Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

// ```javascript
// import { useState } from 'react';
// import { Button } from 'daisyui';

// export default function App() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="mb-4 text-3xl font-bold">Welcome to Our Site</h1>
//       <Button onClick={() => setShowModal(true)} className="btn-primary">
//         Open Modal
//       </Button>
//       {showModal && (
//         <div className="modal modal-open">
//           <div className="modal-box">
//             <h2 className="text-lg font-bold">Modal Title</h2>
//             <p className="py-4">This is a simple modal using DaisyUI.</p>
//             <div className="modal-action">
//               <Button onClick={() => setShowModal(false)} className="btn">
//                 Close
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }```;
