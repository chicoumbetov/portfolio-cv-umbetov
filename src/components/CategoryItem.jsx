import styled from "styled-components";
import { mobile } from "../responsive";
import stock1fit1 from "../img/1fit.app.png";
import stock1fit2 from "../img/1fit.app2.png";
import stock1fit3 from "../img/1fit.app3.png";
import React from "react";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  margin-bottom: 40px;
  height: 60vh;
  width: 100%;
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
        <div className="all_projects col-12 col-lg-4">
            <div className={"project-card"}>
                <div className="project-card-media">
                    <div className=" project-card-image">
                        <a href={stock1fit1} data-lightbox="gallery-vmarine">
                            <img src={item.img}/>
                        </a>
                        <a
                            href={stock1fit2}
                            data-lightbox="gallery-vmarine"
                            style={{display: "none"}}
                        >
                            jsx-a11y/anchor-has-content warning
                        </a>
                        <a
                            href={stock1fit3}
                            data-lightbox="gallery-vmarine"
                            style={{display: "none"}}
                        >
                            jsx-a11y/anchor-has-content warning
                        </a>
                    </div>
                </div>
                <div className="project-information">
                    <a className="project-titre">
                        project title
                    </a>
                    <Title><a href={item.projectLink}>{item.title}</a></Title>
                    <Button onClick={()=> {}}>Project link</Button>
                </div>

            </div>
        </div>
    );
};

export default CategoryItem;
