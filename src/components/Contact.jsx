// import React from 'react';
// import DevProfileCard from './DevProfileCard';
// import profileImg from '../images/download.png'; // Use your actual image path
// const Contact = () => {
//   return(
//     <div>
//      <div style={{ background: '#fef2f2', padding: '40px', minHeight: '100vh' }}>
//       <DevProfileCard
//         name="John Doe"
//         title="Web Developer"
//         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         image={profileImg}
//       />
//       <DevProfileCard
//         name="John Doe"
//         title="Web Developer"
//         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         image={profileImg}
//       />
//       <DevProfileCard
//         name="John Doe"
//         title="Web Developer"
//         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         image={profileImg}
//       />
//       <DevProfileCard
//         name="John Doe"
//         title="Web Developer"
//         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         image={profileImg}
//       />
//       <DevProfileCard
//         name="John Doe"
//         title="Web Developer"
//         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         image={profileImg}
//       />
//       <DevProfileCard
//         name="John Doe"
//         title="Web Developer"
//         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         image={profileImg}
//       />
//       <DevProfileCard
//         name="John Doe"
//         title="Web Developer"
//         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         image={profileImg}
//       />
//       <DevProfileCard
//         name="John Doe"
//         title="Web Developer"
//         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         image={profileImg}
//       />
//       <DevProfileCard
//         name="John Doe"
//         title="Web Developer"
//         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         image={profileImg}
//       />
//       <DevProfileCard
//         name="John Doe"
//         title="Web Developer"
//         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         image={profileImg}
//       />
//       <DevProfileCard
//         name="John Doe"
//         title="Web Developer"
//         desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         image={profileImg}
//       />
//     </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import DevProfileCard from './DevProfileCard';
import profileImg from '../images/download.png'; // Replace with actual image path
import sandeshimg from '../images/sandeshimg.jpg';
import madhuimg from '../images/madhuimg.jpg';
import lasyaimg from '../images/lasyaimg.jpg';
import akshayaimg from '../images/akshayaimg.jpg';
import DSPimg from '../images/DSPimg.jpg';
import Josephimg from '../images/Josephimg.jpg';
import vigneshimg from '../images/vigneshimg.jpg';
import kavyaimg from '../images/kavyaimg.jpg';
import harshaimg from '../images/harshaimg.jpg';
import deanimg from '../images/deanimg.jpg';
import vimalaimg from '../images/vimalaimg.jpg';
import shiwaniimg from '../images/shiwaniimg.jpg';
import harsithimg from '../images/harsithimg.jpg';
import Akhilaimg from '../images/Akhilaimg.jpg';
import Vishnuimg from '../images/Vishnuimg.jpg';
import './contactStyles.css';
const Contact = () => {
  const form = useRef();
  const handleCombinedSubmit = async (e) => {
      e.preventDefault();

      sendEmail(e);           // Send email via EmailJS first
      await handleSubmit(e);  // Then handle the form logic (e.g., show message, reset form)
    }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qw1duhq', 'template_m8fr60g', form.current, {
        publicKey: 'NwPEuCR8G9jdnGK28',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would normally be an API call to your backend
      // For demo purposes, we'll simulate the email sending
      console.log('Email would be sent to palleharsha455@gmail.com with:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitMessage('Message sent successfully! We will contact you soon.');
      
      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
    

  };
  return (
    <div className='contact-main-container'>
      <h2 className='heading'>The Minds Behind Yukti Veda</h2>
      <div className='contact-cards-main-container'>
        <h2 className='heading2'>Dean of Data Science</h2>
      <div className="top-two-cards-container">
          <DevProfileCard
          name="Dr.GS. Naveen Kumar"
          title="Dean of Data Science"
          image={deanimg}
          linkedin="https://linkedin.com/in/sandesh-chowdary"
          email="dean.ds@mallareddyuniversity.ac.in"
          />
          </div>
            <h2 className='heading2'>Faculty coordinators</h2>
      <div className="top-two-cards-container">
        <DevProfileCard
          name="Dr.N Vimala"
          title="Faculty coordinator"
          image={vimalaimg}
          linkedin="https://www.linkedin.com/in/vimala-nagabotu-73460855?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email="nagabotu.vimala@mallareddyuniversity.ac.in"
        /><DevProfileCard
          name="Ms. Shiwani Kesarwani"
          title="Faculty coordinator"
          image={shiwaniimg}
          linkedin="https://linkedin.com/in/sandesh-chowdary"
          email="shiwani@mallareddyuniversity.ac.in"
        />
        </div>
      <h2 className='heading2'>Our Team</h2>
      {/* First two cards side by side */}
      <div className="top-two-cards-container">
        <DevProfileCard
          name="N. Sandesh Chowdary"
          title="President"
          image={sandeshimg}
          linkedin="https://www.linkedin.com/in/sandesh-chowdary-953468277/"
          email="2311CS030384@mallareddyuniversity.ac.in"
        />
        <DevProfileCard
          name="M. Madhu Varsha "
          title="Vice President"
          image={madhuimg}
          linkedin=" https://www.linkedin.com/in/maddireddygari-madhu-varsha-0a7594348"
          email="2311cs030299@mallareddyuniversity.ac.in "
        />
      </div>

      {/* 3x3 grid cards */}
      <div className="grid-cards-container">
        {/* {Array.from({ length: 9 }).map((_, index) => (
          <DevProfileCard
            key={index}
            name={`Member ${index + 1}`}
            title="Web Developer"

            image={profileImg}
          />
          
        ))} */}
        <DevProfileCard
          name="K. Lakshmi Akhila"
          title="Secretary"
          image={Akhilaimg}
          linkedin="https://www.linkedin.com/in/akhila-kanakapuri-1a5116318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          email="2311cs030283@mallareddyuniversity.ac.in"

        /><DevProfileCard
          name="P. Harshith"
          title="Joint Secretary"
          image={harsithimg}
          linkedin="https://www.linkedin.com/in/perapalla-harshith-a7621736b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email="2311cs030440@mallareddyuniversity.ac.in"
        /><DevProfileCard
          name="V. Charan"
          title="Treasurer"
          image={profileImg}
          linkedin="https://linkedin.com/in/sandesh-chowdary"
          email="madhu@example.com"
        /><DevProfileCard
          name="A. Akshaya "
          title="Executive Member"
          image={akshayaimg}
          linkedin="https://www.linkedin.com/in/akshaya-arigela-8bb6a0357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email="2311cs030032@mallareddyuniversity.ac.in"
        /><DevProfileCard
          name="G. Vignesh "
          title="Executive Member"
          image={vigneshimg}
          linkedin="https://www.linkedin.com/in/gandheyvignesh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          email="2311cs030151@mallareddyuniversity.ac.in"
        /><DevProfileCard
          name="K. Joseph Vineeth Reddy"
          title="Executive Member"
          image={Josephimg}
          linkedin="www.linkedin.com/in/joseph-vineeth-reddy-katakam-9b5632299"
          email="2311cs030238@mallareddyuniversity.ac.in"
        /><DevProfileCard
          name="M. Vishnu Vardhan"
          title="Executive Member"
          image={Vishnuimg}
          linkedin="https://www.linkedin.com/in/vishnu-vardhan-6a741b359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email="2311cs030302@mallareddyuniversity.ac.in"
        /><DevProfileCard
          name="P. Lasyapriya"
          title="Executive Member"
          image={lasyaimg}
          linkedin="https://linkedin.com/in/sandesh-chowdary"
          email="madhu@example.com"
        /><DevProfileCard
          name="R. Devi Sri Prasad"
          title="Executive Member"
          image={DSPimg}
          linkedin="https://www.linkedin.com/in/devi-sri-prasad-ramagiri-547994262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email="2311cs030469@mallareddyuniversity.ac.in"
        /></div>
        <div className="top-two-cards-container">
          <DevProfileCard
          name="U. Kavya"
          title="Executive Member"
          image={kavyaimg}
          linkedin=" https://www.linkedin.com/in/kavya-srinivas-0801k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email="2311cs030543@mallareddyuniversity.ac.in "
        />
        <DevProfileCard
          name="P. Harsha"
          title="Web Developer"
          image={harshaimg}
          linkedin="https://www.linkedin.com/in/harsha-palle-1b095b284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          email="2311cs030409@mallareddyuniversity.ac.in"
        /></div>
      </div>
      <br/>
      <br/>
      <div className="yvclub_contact_right_section">
          <h2 className="yvclub_contact_section_title">Send us a Message</h2>
    <form className="yvclub_contact_form" ref={form} onSubmit={handleCombinedSubmit}>
            <div className="yvclub_contact_form_group">
              <input
                type="text"
                name="user_name"
                value={formData.name}
                onChange={handleChange}
                className="yvclub_contact_form_input"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="yvclub_contact_form_group">
              <input
                type="email"
                name="user_email"
                value={formData.email}
                onChange={handleChange}
                className="yvclub_contact_form_input"
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="yvclub_contact_form_group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="yvclub_contact_form_textarea"
                placeholder="Enter Message"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              value="Send"
              className="yvclub_contact_submit_button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'SUBMIT'}
            </button>
            
            {submitMessage && (
              <div className={`yvclub_contact_submit_message ${submitMessage.includes('success') ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}
          </form>
          </div>

    </div>
  );
};

export default Contact;
