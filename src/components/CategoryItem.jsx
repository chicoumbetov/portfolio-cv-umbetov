import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 60vh;
  position: relative;
  box-shadow: 0 3px 20px #3C3C3B1A;
  border-radius: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
    font-size: 20px;
    color: black;
    margin-bottom: 20px;
    background-color: white;
    padding: 5px;
    border-radius: 10px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:black;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container >
            <Image src={item.img} />
            <Info>
                <Title><a href={item.projectLink}>{item.title}</a></Title>
                <Button onClick={()=> {}}>Project link</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;
