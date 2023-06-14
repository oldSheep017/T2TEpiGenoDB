import Layout from '../layout/index.vue'
import Home from '../views/home'
import Search from '../views/search'
import Analysis from '../views/analysis'
import Browse from '../views/browse'
import Download from '../views/download'
import Contact from '../views/contact'
import Help from '../views/help'

const routes = [
	{
		path: '/',
		component: Layout,
		children: [
			{
				path: '',
				name: 'Home',
				component: Home,
			},
			{
				path: 'search',
				name: 'Search',
				component: Search
			},
			{
				path: 'analysis',
				name: 'Analysis',
				component: Analysis
			},
			{
				path: 'browse',
				name: 'Browse',
				component: Browse
			},
			{
				path: 'download',
				name: 'Download',
				component: Download
			},
			{
				path: 'contact',
				name: 'Contact',
				component: Contact
			},
			{
				path: 'help',
				name: 'Help',
				component: Help
			},
		],
	},
]

export default routes
