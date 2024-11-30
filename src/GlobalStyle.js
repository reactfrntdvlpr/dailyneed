import { createGlobalStyle } from "styled-components";

export const GLobalSyle = createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Work Sans", sans-serif;
        }
        html{
            font-size: 62.5%;
            overflow-x: hidden;
        }
        h1{
            color: ${({ theme }) => theme.color.heading};
            font-size: 6rem;
            font-weight: 900;
        }
        h2{
            color: ${({ theme }) => theme.color.heading};
            font-size: 4.4rem;
            font-weight: 300;
            text-align: center;
            white-space: normal;
        }
        h3{
            font-size: 1.8rem;
            font-weight: 400;
           
        }
        p{
            color: ${({ theme }) => theme.color.text};
            font-size: 1.6rem;
            line-height: 1.5;
            margin-top: 1rem;
            font-weight: 400;
        }
        a{
            text-decoration: none;
        }
        li{
            list-style: none;
        }

        .container{
            max-width: 120rem;
            margin: 0 auto;
        }
        .grid{
            display: grid;
            gap: 9rem;
        }
        .grid-two-column{
            grid-template-columns: repeat(2, 1fr);
        }
        .grid-three-column{
            grid-template-columns: repeat(3, 1fr);
        }
        .grid-four-column{
            grid-template-columns: 1fr 1.2fr .5fr .8fr;
        }
        
          
`;