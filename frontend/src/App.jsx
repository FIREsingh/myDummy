import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PortfolioPage from './pages/PortfolioPage/PortfolioPage'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import AddEducationForm from './pages/AddEducationForm/AddEducationForm'
import AddExperienceForm from './pages/AddExperienceForm/AddExperienceForm'
import UpdateEducationForm from './pages/UpdateEducationForm/UpdateEducationForm'
import UpdateExperienceForm from './pages/UpdateExperienceForm.jsx/UpdateExperienceForm'
import AddProjectForm from './pages/AddProjectForm/AddProjectForm'
import UpdateProjectForm from './pages/UpdateProjectForm/UpdateProjectForm'
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <PortfolioPage />
  }, 
  
  // Admin Route

  {
    path:'/admin/login',
    element:<Login />
  },

  {
    path:'/admin/dashboard',
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>
  },

  {
    path:'/admin/addEducation',
    element: <ProtectedRoute><AddEducationForm /></ProtectedRoute>
  },

  {
    path: '/admin/education/:id/edit',
    element: <ProtectedRoute><UpdateEducationForm /></ProtectedRoute>
  },

  {
    path: '/admin/addExperience',
    element: <ProtectedRoute><AddExperienceForm /></ProtectedRoute>
  },

  {
    path: '/admin/experience/:id/edit',
    element: <ProtectedRoute><UpdateExperienceForm /></ProtectedRoute>
  },

  {
    path: '/admin/project/addProject',
    element: <ProtectedRoute><AddProjectForm /></ProtectedRoute>
  },

  {
    path: '/admin/project/:id/edit',
    element: <ProtectedRoute><UpdateProjectForm /></ProtectedRoute>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App