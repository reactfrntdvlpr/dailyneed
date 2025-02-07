import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Style/Button";
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {

    return (
        <Wrapper>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready to get Started?</h3>
                        <h3>Talk to us today</h3>
                    </div>

                    <div>
                        <NavLink to="/"><Button>Get Started</Button></NavLink>
                    </div>
                </div>
            </section>
            {/* footer section  */}

            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>Tauseef Ansari</h3>
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                    </div>

                    <div className="footer-subscribe">
                        <h3>Subscribe to get important updates</h3>
                        <form action="#">
                            <input type="email" required autoComplete="off" placeholder="Email" />
                            <input type="submit" value="subscribe" />
                        </form>
                    </div>

                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="footer-social--icons">
                            <div><FaDiscord className="icons" /></div>
                            <div><FaInstagram className="icons" /></div>
                            <div><FaYoutube className="icons" /></div>
                        </div>
                    </div>


                    <div className="footer-contact">
                        <h3>Call Us</h3>
                        <h3> +91 8055545502</h3>
                    </div>
                </div>

                <div className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-two-column">
                        <p> @{new Date().getFullYear()} Tauseef Ur Rahman. All Right Reserved </p>
                        <div>
                            <p> Privacy Policy </p>
                            <p> Terms & Condition</p>
                            
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
};
const Wrapper = styled.section`
    .contact-short{
        max-width: 60vw;
        margin: auto;
        padding: 5rem 10rem;
        background-color: ${({ theme }) => theme.color.bg};
        border-radius: 1rem;
        box-shadow: ${({ theme }) => theme.color.shadowSupport};
        transform: translateY(50%);

        .grid div:last-child{
            justify-self: end;
            align-self: center;
        }
    }
    
    footer{
        padding: 14rem 0 9rem 0;
        background-color: ${({ theme }) => theme.color.footer_bg};

        h3{
            color: ${({ theme }) => theme.color.hr};
            margin-bottom: 2.4rem;
        }

        p{
            color: ${({ theme }) => theme.color.white};
        }

        .footer-social--icons{
            display: flex;
            gap: 2rem;

            div{
            padding: 1rem;
            border-radius: 50%;
           border: 2px solid ${({ theme }) => theme.color.white};


           .icons{
            color: ${({ theme }) => theme.color.white};
            font-size: 2.4rem;
            position: relative;
            cursor: pointer;
        }
        
        }
        }
        .footer-bottom--section{
            padding-top: 9rem;

            hr {
                margin-bottom: 2rem;
                color: ${({ theme }) => theme.color.hr};
                height: 0.1px;
      }
        }

    }

    `;

export default Footer;