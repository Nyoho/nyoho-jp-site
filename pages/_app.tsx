import React from 'react'
import App, { Container } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import '../styles/global.sass'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrophone, faMapMarkerAlt, faTv, faCode, faPencilAlt, faBookOpen, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { faClock, faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebook, faGithub, faYoutube, faFoursquare } from '@fortawesome/free-brands-svg-icons'

library.add(faMicrophone, faMapMarkerAlt, faTwitter, faFacebook, faGithub, faYoutube, faFoursquare, faTv, faCode, faPencilAlt, faBookOpen, faClock, faFolderOpen, faCameraRetro)

const  MyApp = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
