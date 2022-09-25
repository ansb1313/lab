import styled from "styled-components"

const arr = ["envato", "udemy", "slack", "Springboard", "treehouse"]

const Partners = (props) => {

    return(
        <Container>
           <Inner>
               <h1>Trusted by our awesome<br/>partners</h1>
               <List>
                   {
                       arr.map((item,i) => {
                           return(
                               <ListItem className={i == 2 ? "on" : ""}>
                                   {item}
                               </ListItem>
                           )
                       })
                   }
               </List>
           </Inner>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  background: rgb(249,249,251);
  display: flex;
  justify-content: center;
`
const Inner = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
  width: 1200px;
  h1{
    text-align: center;
    line-height: 1.2;
    font-weight: bold;
    font-size: 38px;
    letter-spacing: 1px;
    margin-bottom: 80px;
    color: #222;
  }
`
const List = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const ListItem = styled.div`
  &.on {
    background: rgba(255, 255, 255, 1);
    box-shadow: 5px 5px 20px rgba(213, 213, 213, 0.5);
  };

  min-width: 156px;
  margin: 0 20px;
  height: 68px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Partners