import styled from "styled-components"

const About = (props) => {
    return(
        <Container>
           <Inner>
               <TextArea>
                   <h1>Know about elearner<br/>learning platform</h1>
                   <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, at autem blanditiis
                       consequatur cumque delectus enim est illum iure iusto laborum
                       natus odio perferendis quas .
                   </p>
                   <Rating>
                       <RatingItem>
                           <h2>3m+</h2>
                           <span>Student Learning</span>
                       </RatingItem>

                       <RatingItem>
                           <h2>70k+</h2>
                           <span>Active Courses</span>
                       </RatingItem>

                       <RatingItem>
                           <h2>100+</h2>
                           <span>Free Courses</span>
                       </RatingItem>
                   </Rating>
                   <BtnItem>
                       <span>
                           Know More
                       </span>
                       <div className="icon"></div>
                   </BtnItem>
               </TextArea>
               <Img>
                <ImgLeft/>
                <ImgRight/>
                <ImgRightBottom/>
               </Img>
           </Inner>
        </Container>
    )
} 

const Container = styled.div`
 width: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  height: 500px;
  background: rgb(249,249,251);
`
const Inner = styled.div`
 width: 1200px;    
  display: flex;
  justify-content: space-between;
  
`
const TextArea = styled.div`
  width: 470px;
  line-height: 1.6;
  border: solid 1px #111;

  h1 {
    line-height: 1.2;
    font-weight: bold;
    font-size: 38px;
    letter-spacing: 1px;
    color: #222;
    margin-bottom: 26px;
  }

  p {
    color: rgb(127, 127, 128);
    display: block;
  }
`
const Rating = styled.div`
  display: flex;
  margin-top: 40px;
`
const RatingItem = styled.div`
  margin-right: 40px;
  h2{
    font-size: 36px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 6px;
    color: rgb(72,64,147);
  }
  span{
    font-weight: 600;
    color: rgb(90,94,149);
  }
`
const BtnItem = styled.div`
  margin-top: 40px;
  background: rgb(72,64,147);
  width: 156px;
  height: 50px;
  border-radius:10px;
  display: flex;
  align-items: center;
  padding: 4px;
  justify-content: space-between;
  cursor: pointer;
  span{
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 20px;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
  }
  .icon{
    background: #fff;
    width: 40px;
    height: 40px;
    border-radius: 6px;
  }
`
const Img = styled.div`
  width: 570px;
  border: solid 1px #111;
  height: 400px;
  position: relative;
  div{
    position: absolute;
  }
`
const ImgLeft = styled.div`
  width: 240px;
  height: 190px;
  border-radius: 80px 0 0 0;
  border: solid 9px rgb(258, 118, 80);
  left: 0;
  top: 0;
`
const ImgRight = styled.div`
  right: 0;
  top: 0;
  width: 240px;
  height: 190px;
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
`
const ImgRightBottom = styled.div`
  width: 240px;
  height: 190px;
  border: solid 9px rgb(72, 64, 147);
  right: 0;
  bottom: 0;

`



export default About