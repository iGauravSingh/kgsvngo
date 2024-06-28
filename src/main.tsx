import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from './pages/homepage/Homepage.tsx';
import WhoAreWe from './pages/aboutus/WhoAreWe.tsx';
import WhatKGSVAbout from './pages/aboutus/WhatKGSVAbout.tsx';
import MissionVision from './pages/aboutus/MissionVision.tsx';
import FirstSteps from './pages/aboutus/FirstSteps.tsx';
import ChildEducation from './pages/aboutus/ourplans/ChildEducation.tsx';
import Cleanliness from './pages/aboutus/ourplans/Cleanliness.tsx';
import ChildHealthNutrition from './pages/aboutus/ourplans/ChildHealthNutrition.tsx';
import EnviromentConservation from './pages/aboutus/ourplans/EnviromentConservation.tsx';
import WomenEmpowerment from './pages/aboutus/ourplans/WomenEmpowerment.tsx';
import FoundingTeam from './pages/aboutus/team/FoundingTeam.tsx';
import AssociatesMentors from './pages/aboutus/team/AssociatesMentors.tsx';
import CurrentYear from './pages/posts/CurrentYear.tsx';
import PreviousYears from './pages/posts/PreviousYears.tsx';
import Pledge from './pages/getinvolved/Pledge.tsx';
import WishToAssociate from './pages/getinvolved/WishToAssociate.tsx';
import Donate from './pages/getinvolved/Donate.tsx';
import Credentials from './pages/credentials/Credentials.tsx';
import AnnualReports from './pages/credentials/AnnualReports.tsx';
import Gallery from './pages/gallery/Gallery.tsx';
import Videos from './pages/videos/Videos.tsx';
import Contactus from './pages/contactus/Contactus.tsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="/" element={<Homepage />} />
      <Route path='/whoweare' element={<WhoAreWe />} />
      <Route path='/whatkgsvabout' element={<WhatKGSVAbout />} />
      <Route path='/missionvision' element={<MissionVision />} />
      {/* <Route path='/teams' element={<WhoAreWe />} /> */}
      {/* <Route path='/ourplans' element={<WhoAreWe />} /> */}

      <Route path='/childeducation' element={<ChildEducation />} />
      <Route path='/cleanliness' element={<Cleanliness />} />
      <Route path='/child-health-nutrition' element={<ChildHealthNutrition />} />
      <Route path='/enviroment-conservation' element={<EnviromentConservation />} />
      <Route path='/women-empowerment' element={<WomenEmpowerment />} />

      <Route path='/foundingteam' element={<FoundingTeam />} />
      <Route path='/associates-mentors' element={<AssociatesMentors />} />

      <Route path='/currentyear' element={<CurrentYear />} />
      <Route path='/previousyears' element={<PreviousYears />} />

      {/* Get Involved  */}
      <Route path='/pledge' element={<Pledge />} />\
      <Route path='/wish-to-associate' element={<WishToAssociate />} />
      <Route path='/donate' element={<Donate />} />

      {/* credentials  */}
      <Route path='/credentials' element={<Credentials />} />
      <Route path='/annual-reports' element={<AnnualReports />} />

      {/* gallery  */}
      <Route path='/gallery' element={<Gallery />} />

      {/* video  */}
      <Route path='/video' element={<Videos />} />

      {/* contact  */}
      <Route path='/contact' element={<Contactus />} />

      <Route path='/firststeps' element={<FirstSteps />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
