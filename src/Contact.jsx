import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container{
      margin-top: 6rem;
      text-align: center;

      .contact-form{
        max-width: 50rem;
        margin: auto;

        .contact-input{
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type='submit']{
            cursor: pointer;
            transition: all 0.2s;

            &:hover{
              background-color: ${({ theme }) => theme.color.white};
              border: 1px solid ${({ theme }) => theme.color.btn};
              color: ${({ theme }) => theme.color.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return <Wrapper>
    <h2 className="common-heading"> Feel Free to Contact us </h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238129.639247018!2d78.90769361711355!3d21.161326259061706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1737099268489!5m2!1sen!2sin"
      width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


    <div className='container'>
      <div className='contact-form'>
        <form action='https://formspree.io/f/xlddqgzw' method='POST' className='contact-input'>
          <input type='text' name='username' placeholder='username' autoComplete='off' required />
          <input type='Email' name='Email' placeholder='Email' autoComplete='off' required />
          <textarea name='message' cols='30' rows='6' autoComplete='off' required ></textarea>
          <input type='submit' value='sent'></input>
        </form>

      </div>
    </div>
  </Wrapper>
}

export default Contact;