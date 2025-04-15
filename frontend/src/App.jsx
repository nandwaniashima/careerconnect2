import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'
import Hero from './components/landingpage/Hero'
import WhoWeAre from './components/landingpage/WhoWeAre'
import ContactFormPage from './components/landingpage/ContactFormPage'
import LandingPage from './components/interview/LandingPage'
import CodingChallengesPage from './components/interview/CodingChallengesPage'
import MockInterviewPage from './components/interview/MockInterviewPage'
import PreparationPage from './components/interview/PreparationPage'
import TailoredStudyPlansPage from './components/interview/TailoredStudyPlansPage'
import QuizApp from './components/interview/McqPracticePage'
import Form from './components/resume/Form'
import './App.css';
import Payment from '@/components/razorpay/Payment'



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Hero />
  },

  {
    path:'/payment',
    element:<Payment/>
  },

  {
    path: '/home',
    element: <Home />
  },

  {
    path: '/about',
    element: <WhoWeAre />
  },

  {
    path: '/interview',
    element: <LandingPage />
  },


  {
    path: '/contact',
    element: <ContactFormPage />
  },

  {
    path: '/mock-interviews',
    element: <MockInterviewPage />
  },

  {
    path: '/study-plans',
    element: <TailoredStudyPlansPage />
  },

  {
    path: '/coding-challenges',
    element: <CodingChallengesPage/>
  },

  {
    path: '/mcq-practice',
    element: <QuizApp/>
  },

  {
    path: '/preparation',
    element: <PreparationPage/>
  },

  {
    path: '/resume',
    element: <Form />
  },

  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },

  {
    path:"/admin/companies",
    element: <ProtectedRoute><Companies/></ProtectedRoute>
  },

  {
    path:"/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate/></ProtectedRoute> 
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs",
    element:<ProtectedRoute><AdminJobs/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><PostJob/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute> 
  },

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
