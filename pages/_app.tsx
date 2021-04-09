import React from 'react'
import App, { Container } from 'next/app'
import '../styles/global.sass'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrophone, faMapMarkerAlt, faTv, faCode, faPencilAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faClock, faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebook, faGithub, faYoutube, faFlickr, faFoursquare } from '@fortawesome/free-brands-svg-icons'

library.add(faMicrophone, faMapMarkerAlt, faTwitter, faFacebook, faGithub, faYoutube, faFlickr, faFoursquare, faTv, faCode, faPencilAlt, faBookOpen, faClock, faFolderOpen)

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
