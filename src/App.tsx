import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
	AddJob,
	Admin,
	AllJobs,
	DashboardLayout,
	DeleteJob,
	EditJob,
	Error,
	HomeLayout,
	Landing,
	Login,
	Profile,
	Register,
	Stats,
} from './pages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				path: 'register',
				element: <Register />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'dashboard',
				element: <DashboardLayout />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router}></RouterProvider>
}

export default App
