import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Visual from "../components/Main/Visual";
import Section1 from "../components/Main/Section1";
import Section2 from "../components/Main/Section2";
import Footer from "../components/Main/Footer";
import Partners from "../components/Main/Partners";
import About from "../components/Main/About";

const MainContainer = (props) => {

  return(
    <Container>
      <Header />
      <Visual/>
      {/* partners Start  */}
      <Partners/>
      {/* partners End */}
      {/* about start */}
      <About/>
      {/* about end */}
      <Section1/>
      <Section2/>
      <Footer/>
    </Container>
  )
}

const Container = styled.div`
`

export default MainContainer