import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import LoadingOrError from './components/LoadingOrError'
import RenderRouter from './router'

// const Gallery = lazy(async () => import('pages/Gallery'))
// const Details = lazy(async () => import('pages/Details'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<RenderRouter />
					{/* <Route path='/' element={<Gallery />} />
					<Route path=':fruitName' element={<Details />} /> */}
			</Suspense>
		</BrowserRouter>
	)
}
