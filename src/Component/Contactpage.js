import React, { useState } from 'react';
const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, message, image };
    if (!formData.name || !formData.email || !formData.message || !formData.image) {
      setErrors({ message: 'Please fill out all fields' });
    } else {
      // Send the form data to your server or API here
      console.log('Form submitted!');
      // You can also make an API call or send an email here
      // For example:
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with us using the form below </p>
      <form onSubmit={handleFormSubmit}>

        <div className="input-group">
          <input type="text" id="name" name="name" placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />          
          <label for="myName"><i class="fa-solid fa-user"></i></label>
        </div>
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        <br />
        
        <div className="input-group">
          <input type="email" id="email" name="email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
          <label for="myEmail"><i class="fa-solid fa-envelope"></i></label>
        </div>
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        <br />

        <div className="input-group">
        <label for="image-upload" class="upload-label">
          <i class="fa-solid fa-file-image"></i>
        </label>
          <input type="file" id="image" name="image" accept='.png,.jpg,.jpeg' placeholder='Image' onChange={handleImageChange} />
        </div>
        {errors.image && <div style={{ color: 'red' }}>{errors.image}</div>}
        <br />
        
        <div className="input-group">
          <textarea id="message" name="message" placeholder='Message....' value={message} onChange={(event) => setMessage(event.target.value)} />
          <label for="myText"><i class="fa-solid fa-comments"></i></label>
        </div>
        {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
        <br />
        <button type="submit" >Send</button>
      </form>
    </div>
  );
};

export default ContactPage;