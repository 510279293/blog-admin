import * as React from 'react'
import Loadable from 'react-loadable'
const LoadingComponent = () => {
  return(<div>loading</div>)
}

const loadComponent = (loader: any, loading = LoadingComponent) => Loadable({
  loader: loader,
  loading: loading
})

export default loadComponent