import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFormSubmit = (event) => {
    // ... (keep the existing logic)
    event.preventDefault();
    const formData = { name, email, message,image};
    const newErrors = {};
  
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Your form submission logic here
      console.log('Form submitted!');
      // Reset errors
      setErrors({});
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="font-mono bg-green-50 pt-5 pb-5 pl-3 pr-3 m-0 leading-relaxed">
      <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">Contact Us</h1>
      <p className="text-center">Get in touch with us using the form below</p>
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto p-4 border-3 border-black rounded-lg shadow-2xl">
        <div className="relative mb-5">
        {errors.name && <div className="text-red-500 text-sm mb-2">{errors.name}</div>}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full  pt-2 pb-2 pl-2 pr-10 border border-gray-300 rounded-lg text-base font-inherit bg-white"
            
          />
          <label htmlFor="name" className="absolute top-1 right-2 text-gray-600 text-2xl">
            <i className="fa-solid fa-user"></i>
          </label>
        </div>
        
        <div className="relative mb-5">
        {errors.email && <div className="text-red-500 text-sm mb-2">{errors.email}</div>}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full pt-2 pb-2 pl-2 pr-10 border border-gray-300 rounded-lg text-base font-inherit bg-white"
          />
          <label htmlFor="email" className="absolute top-1 right-2 text-gray-600 text-2xl">
            <i className="fa-solid fa-envelope"></i>
          </label>
        </div>
        

        <div className="relative mb-5">
          
          <label htmlFor="image" className="absolute top-1 right-2 text-gray-600 text-2xl block mb-2 cursor-pointer">
            <i className="fa-solid fa-file-image"></i>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept=".png,.jpg,.jpeg"
            onChange={handleImageChange}
            className="w-full pt-2 pb-2 pl-2 pr-10 border border-gray-300 rounded-lg text-base font-inherit"
          />
        </div>
        

        <div className="relative mb-5">
        {errors.message && <div className="text-red-500 text-sm mb-2">{errors.message}</div>}
          <textarea
            id="message"
            name="message"
            placeholder="Message...."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full pt-2 pb-2 pl-2 pr-10 border border-gray-300 rounded-lg text-base font-inherit bg-white"
          />
          <label htmlFor="message" className="absolute top-1 right-2 text-gray-600 text-2xl">
            <i className="fa-solid fa-comments"></i>
          </label>
        </div>
        

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-5 border-none rounded cursor-pointer hover:bg-green-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;