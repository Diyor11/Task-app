import React, { useMemo } from 'react'
import routes from './routes'
import { Navigate, Route, Routes } from 'react-router-dom'

export default function Router() {
  // const isAuthicated = useSelector(state => state.auth.isAuthicated) 

  const matchRoutes = useMemo(() => {
    // if(isAuthicated)
    //   return routes.privite
    // else 
    //   return routes.public
    return routes.public
  }, [
    // isAuthicated // if user authicated routes recrated
  ])
  return (
    <Routes>
      {matchRoutes.map((item) =>
        
          <Route
            path={item.path}
            key={item.path}
            element={
                <item.componenet />
            }
          />
      )}
      <Route
        path="/"
        element={<Navigate to={matchRoutes[0].path ? matchRoutes[0].path : "/"} />}
      />
      <Route path="*" element={<h1 className='w-full text-center text-6xl my-12'>Not found | 404</h1>} />
    </Routes>
  )
}
