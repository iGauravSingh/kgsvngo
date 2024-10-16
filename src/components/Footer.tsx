

import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Copyrightsection from "./copyright/Copyrightsection";

const keylinksArray = [
  {title:"Our Approach", link: '/firststeps'},
  {title: 'KGSV Plans', link: '/'},
  {title: 'Financials', link: '/annual-reports'},
  {title: 'Wish to Associate', link: '/wish-to-associate'},
  {title: 'Donate', link: '/donate'},
]
// {title: 'Darpan (Reg no UP/2022/0304683)', link: 'https://ngodarpan.gov.in/'},
const aboutKgsv = [
  {title:"What’s KGSV about", link: '/whatkgsvabout'},
  {title: "Who are we", link: '/whoweare'},
  {title: "Vision & Mission", link: '/missionvision'},
  {title: "Founding Team", link: '/foundingteam'},
  {title: "Remembering Gurudev", link: '/remembering-gurudev'},
  {title: "Gallery", link: '/gallery'},
]

const Footer = () => {
  return (
    <>
    <footer className="bg-[#254d42] text-[#d1d5db] p-8 mt-24 pb-12 w-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About KGSV */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About KGSV</h3>
          <ul className="space-y-2">
            {aboutKgsv.map((link, index) => (
              <li key={index}>
                <Link to={link.link} className="hover:text-white">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Key Links</h3>
          <ul className="space-y-2">
            {keylinksArray.map((link, index) => (
              
              <li key={index}>
                <Link to={link.link} className="hover:text-white">
                  {link.title}
                </Link>
              </li>
              
              
            ))}
            <li>
                <a href="https://ngodarpan.gov.in/" target="_blank">Darpan (Reg no UP/2022/0304683)</a>
              </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.instagram.com/kgsv_ngo/"  target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center">
                <FaInstagram className="mr-2" /> Instagram
              </a>
            </li>
            <li>
              <a href="http://twitter.com/kgsvfoundation" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center">
                <FaTwitter className="mr-2" /> Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacts</h3>
          <ul className="space-y-2">
            <li>Khushhal Gram Samaj Vikas Foundation</li>
            <li>CIN: - U74994UP2019NPL113235</li>
            <li>Phone: +91-9415752856</li>
            <li>Phone: +91-7704900229</li>
            <li>Email: admin@kgsv.in</li>
            <li>Email: vikas@kgsv.in</li>
          </ul>
        </div>
      </div>
    </footer>
    <Copyrightsection />
    </>
  );
};

export default Footer;






































// import { Link } from "react-router-dom";

// const Footer = () => {
//     return (
//       <footer className="w-screen bg-greensyn text-white py-8 font-popins mt-24">
//         <div className="w-full  px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap -mx-4">
//             <div className="w-full md:w-1/3 px-4">
//               <h2 className="text-lg font-bold mb-4">Contact Us</h2>
//               <p className="mb-2">Khushhal Gram Samaj Vikas Foundation</p>
//               <p className="mb-2">CIN: – U74994UP2019NPL113235</p>
//               <p className="mb-2">Email: admin@kgsv.in</p>
//               <p>Phone: +91-7838828225</p>
//             </div>
//             <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
//               <h2 className="text-lg font-bold mb-4">Quick Links</h2>
//               <ul>
//                 <li className="mb-2"><Link to="/whatkgsvabout" className="text-gray-300 hover:text-white">Our Approach</Link></li>
                
//                 <li className="mb-2"><Link to="/annual-reports" className="text-gray-300 hover:text-white">Financials</Link></li>
//                 <li className="mb-2"><Link to="/wish-to-associate" className="text-gray-300 hover:text-white">Wish to Associate</Link></li>
//                 <li className="mb-2"><Link to="/donate" className="text-gray-300 hover:text-white">Donate</Link></li>
//                 <li className="mb-2"><Link to="/" className="text-gray-300 hover:text-white">Darpan</Link></li>
//               </ul>
//             </div>
//             <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
//               <h2 className="text-lg font-bold mb-4">Follow Us</h2>
//               <div className="flex space-x-4">
//                 {/* <a href="#" className="text-gray-300 hover:text-white">
//                   <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24h21.351C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0zM7.145 20.452H3.697v-10.4h3.448v10.4zM5.419 8.68c-1.104 0-2.003-.899-2.003-2.003S4.315 4.675 5.419 4.675c1.104 0 2.003.899 2.003 2.003s-.899 2.002-2.003 2.002zm15.034 11.772h-3.448v-5.508c0-1.312-.026-3.001-1.828-3.001-1.828 0-2.108 1.428-2.108 2.905v5.604h-3.449v-10.4h3.311v1.421h.047c.46-.874 1.585-1.797 3.266-1.797 3.49 0 4.136 2.297 4.136 5.285v5.491z"/></svg>
//                 </a> */}
//                 <a href="http://twitter.com/kgsvfoundation" target="_blank" className="text-gray-300 hover:text-white">
//                   <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482 13.955 13.955 0 01-10.141-5.144 4.916 4.916 0 001.523 6.573 4.903 4.903 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084 4.927 4.927 0 004.6 3.417A9.869 9.869 0 010 19.54a13.92 13.92 0 007.548 2.212c9.057 0 14.007-7.504 14.007-14.007 0-.213-.004-.426-.014-.637A10.025 10.025 0 0024 4.557z"/></svg>
//                 </a>
//                 <a href="https://www.instagram.com/kgsv_ngo/" target="_blank" className="text-gray-300 hover:text-white">
//   <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
//     <path d="M12 0C8.75 0 8.333.011 7.052.05 5.776.089 4.675.338 3.71.93c-.965.591-1.706 1.333-2.297 2.297-.592.965-.842 2.066-.88 3.342C.495 7.916.484 8.333.484 12s.011 4.083.05 5.364c.039 1.276.288 2.377.88 3.342.591.965 1.333 1.706 2.297 2.297.965.592 2.066.842 3.342.88 1.281.039 1.698.05 5.364.05s4.083-.011 5.364-.05c1.276-.039 2.377-.288 3.342-.88.965-.591 1.706-1.333 2.297-2.297.592-.965.842-2.066.88-3.342.039-1.281.05-1.698.05-5.364s-.011-4.083-.05-5.364c-.039-1.276-.288-2.377-.88-3.342-.591-.965-1.333-1.706-2.297-2.297-.965-.592-2.066-.842-3.342-.88C15.083.011 14.667 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zM12 2.163c2.614 0 2.938.009 3.973.057 1.027.048 1.58.221 1.946.373.488.2.837.438 1.204.805.367.367.606.716.805 1.204.152.366.325.919.373 1.946.048 1.035.057 1.359.057 3.973s-.009 2.938-.057 3.973c-.048 1.027-.221 1.58-.373 1.946-.2.488-.438.837-.805 1.204-.367.367-.716.606-1.204.805-.366.152-.919.325-1.946.373-1.035.048-1.359.057-3.973.057s-2.938-.009-3.973-.057c-1.027-.048-1.58-.221-1.946-.373-.488-.2-.837-.438-1.204-.805-.367-.367-.606-.716-.805-1.204-.152-.366-.325-.919-.373-1.946-.048-1.035-.057-1.359-.057-3.973s.009-2.938.057-3.973c.048-1.027.221-1.58.373-1.946.2-.488.438-.837.805-1.204.367-.367.716-.606 1.204-.805.366-.152.919-.325 1.946-.373 1.035-.048 1.359-.057 3.973-.057zm0 3.974a4.164 4.164 0 100 8.328 4.164 4.164 0 000-8.328zm7.84-.333a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
//   </svg>
// </a>
//                 {/* <a href="#" className="text-gray-300 hover:text-white">
//                   <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163C6.508 2.163 2 6.674 2 12.2c0 4.345 2.877 8.065 6.839 9.384.5.091.682-.218.682-.483 0-.238-.008-.868-.013-1.704-2.782.606-3.369-1.34-3.369-1.34-.455-1.159-1.111-1.468-1.111-1.468-.907-.621.068-.609.068-.609 1.003.07 1.531 1.03 1.531 1.03.892 1.526 2.341 1.085 2.91.829.091-.647.35-1.085.636-1.334-2.22-.254-4.555-1.113-4.555-4.951 0-1.094.391-1.989 1.03-2.689-.104-.254-.446-1.277.097-2.661 0 0 .84-.269 2.75 1.024A9.564 9.564 0 0112 6.807a9.56 9.56 0 012.504.338c1.909-1.293 2.748-1.024 2.748-1.024.545 1.384.202 2.407.099 2.661.64.7 1.029 1.595 1.029 2.689 0 3.847-2.339 4.693-4.566 4.943.359.309.678.921.678 1.856 0 1.339-.012 2.421-.012 2.749 0 .268.18.579.688.481 3.961-1.321 6.837-5.039 6.837-9.384 0-5.526-4.509-10.037-10.036-10.037z"/></svg>
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-700 mt-8 pt-4">
//           <p className="text-center text-gray-200">© 2024 KGSV. All rights reserved.</p>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
 


  
  
  
  
  
  
  
  
  