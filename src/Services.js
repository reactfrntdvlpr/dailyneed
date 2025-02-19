import React from 'react'
import { useGLobalContext } from './Context';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from "./Style/Button";

const Services = () => {
    const{ services } = useGLobalContext();
    console.log(services);
    return(
     <Wrapepr className = "section">
     <h2 className="common-heading"> Our services </h2>
     <div className="container grid grid-three-column">
        {
            services.map( (curElem) => {

                const { id, movie, image, imdb_url, rating } = curElem;
                return (
                    <div key={id} className="card">
                    <figure>
                        <img src={image}  alt="movies"/>
                    </figure>
                    <div className="card-data">
                    <h3>{movie}</h3>
                    <p>{rating}</p>
                    <p>{imdb_url}</p>
                    <NavLink to="/service">
                        <Button className="btn">Read More</Button>
                    </NavLink>
                    </div>
                    </div>
                
                )
            }) 
            }
     </div>
    </Wrapepr>
    );
}

const Wrapepr = styled.section`
padding:  9rem 0;
background-color: ${({ theme }) => theme.color.bg};


.container{
    max-width: 120rem;
}

.card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
        padding: 0 2rem;
    }

    h3{
        margin : 2rem 0;
        font-weight : 300;
        font-size: 2.4rem;
    }

    .btn{
        margin: 2rem auto;
        background-color: rgb(0 0 0 / 0%);
        border: 0.1rem solid rgb(98 84 243);
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(98 84 243) ;
        font-size: 1.4rem;
    &:hover{
        background-color: rgb(98 84 243) ;
        color: #fff;
    }
}
}
figure{
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.2s linear ;
        cursor: pointer;
    }
    &:hover::after{
        width: 100%;
    }
    &:hover img{
        transform: scale(1.2);
    }
    img{
        max-width: 90%;
        margin-top: 1.5rem;
        height: 20rem;
        transition: all 0.2s linear;
    }
}

`;

export default Services;
