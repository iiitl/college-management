import React from "react"

import Styles from "./Home.module.scss"
import Header from "../../components/homepage/header/Header"
import CallToAction from "../../components/homepage/callToAction/CallToAction"

const HomePage = () => {
  return (
    <Header isLogin="false" name="User" />
  )
}

export default HomePage
