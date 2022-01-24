import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.div`
font-weight: 300;
text-align: center;

`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type==="filled" && "none"};
background-color:${props=>props.type==="filled" ? "black" : "transparent"} ;
color:${props=>props.type==="filled" && "white"} ;
`
const Toptexts = styled.div``

const Toptext = styled.span`
text-decoration: underline;
margin: 0px 10px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Info=styled.div`
flex: 3;

`
const Summary=styled.div`
flex:1 ;
`
const Product=styled.div`

`

const Cart = () => {
    return (
      <Container>
          <Navbar/>
          <Announcement/>
          <Wrapper>
              <Title>YOUR BAG</Title>
              <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                  <Toptexts>
                      <Toptext>Shopping Bag(2)</Toptext>
                      <Toptext>Your Wishlist(0)</Toptext>

                  </Toptexts>
                  <TopButton type="filled">CHECKOUT NOW</TopButton>
                 

              </Top>
              <Bottom>
                  <Info>
                      <Product></Product>
                  </Info>
                  <Summary>summary</Summary>

              </Bottom>
          </Wrapper>
          <Footer/>
       
      </Container>
    );
  };
  export default Cart;