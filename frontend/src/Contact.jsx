import React from 'react';
import NavbarPage from './Navbar/Navbar';
import './../src/scss/contact.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Pages/Footer';
import { Row} from 'react-bootstrap';
import { CCol } from '@coreui/react'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ba5b7dbf-224f-40df-ba9d-0b97d4bdf254");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };


  return (
    <>
      <NavbarPage />
      <section className="contact-sec sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-detail">
                <h1 className="section-title">Contact us</h1>

                <ul className="contact-ul">
                  <li><i className="fas fa-map-marker-alt"></i> 91, Ram Nagar, Ram Mandir, Delhi</li>

                  <li>
                    <i className="fas fa-phone"></i>
                    <a href="tel:08787675465"><b>+91-8787675465</b></a>,
                    <a href="tel:08787675465"><b>+91-8787675465</b></a>
                  </li>

                  <li>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:pardeepkumar4bjp@gmail.com"><b>demounknown@gmail.com</b></a>
                  </li>
                </ul>

                <span>
                  <a href="#" className="fb"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="insta"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                </span>
              </div>
            </div>

            <div className="col-md-6">
              <form onSubmit={onSubmit} className="contFrm">
                <div className="row">
                  <div className="col-sm-6">
                    <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
                  </div>

                  <div className="col-sm-6">
                    <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
                  </div>

                  <div className="col-sm-6">
                    <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
                  </div>

                  <div className="col-sm-6">
                    <input type="text" name="sub" placeholder="Subject" className="inptFld" required />
                  </div>

                  <div className="col-12">
                    <textarea className="inptFld" rows="4" placeholder="Your Message..." required></textarea>
                  </div>

                  {/* <Row md={12}> 
                  <CCol className="col-12">
                    <input type="submit" className="inptBtn" />
                    <input type="submit" className="inptBtn" />
                  </CCol>
                  </Row> */}
                  <Row>
                    <CCol md={12}>
                      <CCol className="d-flex justify-content-between">
                        <input type="submit" className="inptBtn" value="Submit" />
                        <input type="reset" className="inptBtn" value="Reset" />
                      </CCol>
                    </CCol>
                  </Row>

                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
      <Footer/>


    </>
  );
};

export default Contact;






// import React, { useEffect, useState } from 'react';
// import { useForm, Controller } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { toast, ToastContainer } from 'react-toastify';
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CFormInput,
//   CRow,
//   CFormLabel
// } from '@coreui/react'
// import { useNavigate } from 'react-router-dom'
// import moment from 'moment';
// import Select from "react-select";
// import './../src/scss/contact.scss';
// import './../src/scss/custom.scss';
// import NavbarPage from './Navbar/Navbar';

// const Contact = () => {
//   const navigate = useNavigate();
//   const [disable, setDisable] = useState(false);
//   const [data, setData] = useState({
//     salutation: "",
//     first_name: "",
//     last_name: "",
//     employee_id: "",
//     dob: "",
//     gender: "",
//     contact_no: "",
//     email: "",
//     location: "",
//     is_active: "",
//     date_joined: ""
//   });

//   const Salutation = [
//     { label: "Mr", value: 1 },
//     { label: "Ms", value: 2 },
//     { label: "Dr", value: 3 },
//     { label: "Prof", value: 4 },
//   ];

//   const Gender = [
//     { label: "Male", value: 1 },
//     { label: "Female", value: 2 }
//   ];

//   const Location = [
//     { label: "Noida", value: 1 },
//     { label: "Pune", value: 2 },
//     { label: "Mumbai", value: 3 },
//     { label: "Navi Mumbai", value: 4 },
//     { label: "Others", value: 5 }
//   ];

//   const schema = Yup.object().shape({
//     salutation: Yup.string().required('Required'),
//     first_name: Yup.string()
//       .required("Required")
//       .matches(/^[A-Za-z]+$/i, "Only words are allowed")
//       .max(50, "Maximum 50 character are allowed"),
//     last_name: Yup.string()
//       .required("Required")
//       .matches(/^[A-Za-z]+$/i, "Only words are allowed")
//       .max(50, "Maximum 50 character are allowed"),
//     contact_no: Yup.string()
//       .matches(/^(\d)+$/, { message: "Enter valid number", excludeEmptyString: true })
//       .max(12, "maximum limit reached !"),
//     dob: Yup.date()
//       .typeError('Enter Valid Date')
//       .required("Required"),
//     gender: Yup.string()
//       .required("Required"),
//     email: Yup.string().email()
//       .max(100, "Maximum 100 character are allowed")
//       .required("Required"),
//     date_joined: Yup.date()
//       .typeError('Enter Valid Date')
//       .required("Required"),
//     location: Yup.string().required("Required")
//   });

//   // useEffect(() => {
//   //   if (data && (id != undefined || id != null || id != "")) {
//   //     reset({
//   //       salutation: data.salutation,
//   //       first_name: data.first_name,
//   //       last_name: data.last_name,
//   //       contact_no: data.contact_no ? data.contact_no : "",
//   //       dob: data.dob,
//   //       gender: data.gender,
//   //       email: data.email,
//   //       location: data.location
//   //     });
//   //   }
//   // }, [data]);

//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//     trigger,
//     reset,
//     setError
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setDisable(true);

//     const formData = new FormData(e.target);
//     formData.append("access_key", "ba5b7dbf-224f-40df-ba9d-0b97d4bdf254");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: json
//       }).then((res) => res.json());

//       if (res.success) {
//         console.log("Success", res);
//         toast.success("Form submitted successfully!");
//         navigate('/employee/list', { state: { username: object.username, type: "create" } });
//       } else {
//         toast.error("Form submission failed.");
//       }
//     } catch (error) {
//       toast.error("Form submission failed.");
//     } finally {
//       setDisable(false);
//     }
//   };

//   const handleReset = () => {
//     setData({
//       salutation: "",
//       first_name: "",
//       last_name: "",
//       dob: "",
//       username: "",
//       gender: "",
//       contact_no: "",
//       email: "",
//       location: "",
//       date_joined: ""
//     });
//   };

//   let _date = moment().format('YYYY-MM-DD');

//   return (
//     <>
//     <NavbarPage/>
//       <ToastContainer />
//       <CContainer fluid>
//         <CCard className='glassContainer custom-modal'>
//           <CCardBody className="grid-container">
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="custom-input dropdown-center">
//                 <Controller name="salutation"
//                   control={control}
//                   defaultValue={data.salutation}
//                   value={data.salutation}
//                   render={({ field: { value, onChange, ...field } }) => (
//                     <>
//                       <CFormLabel>Salutation <span className='text-danger'> * </span></CFormLabel>
//                       <Select
//                         name="salutation"
//                         className="react-select"
//                         classNamePrefix="react-select"
//                         placeholder="Salutation"
//                         // styles={DropDownStyle}
//                         // menuPortalTarget={portaling && document.querySelector("body")}
//                         value={Salutation.find(i => i.value === data.salutation) || null}
//                         {...field}
//                         options={Salutation}
//                         onChange={(event) => {
//                           onChange(event.value);
//                           setData({ ...data, salutation: event.value });
//                         }}
//                         onBlur={(e) => trigger("salutation")}
//                       />
//                     </>
//                   )}
//                 />
//                 <p className='text-danger help-text'>
//                   {errors.salutation && errors.salutation.message}
//                 </p>
//               </div>

//               <div className="custom-input">
//                 <Controller
//                   name="first_name"
//                   control={control}
//                   defaultValue=""
//                   render={({ field: { value, onChange, ...field } }) => (
//                     <>
//                       <CFormLabel>First Name  <span className='text-danger'> * </span></CFormLabel>
//                       <CFormInput type="text" maxLength="52" className='ls-custom-input-shadow' placeholder='First Name'
//                         name='first_name'
//                         {...field}
//                         onChange={({ target: { name, value } }) => {
//                           onChange(value);
//                           setData({ ...data, first_name: value });
//                         }}
//                         onBlur={(e) => trigger(e.target.name)}
//                         value={data.first_name}
//                       />
//                     </>
//                   )}
//                 />
//                 <p className='text-danger help-text'>
//                   {errors.first_name && errors.first_name.message}
//                 </p>
//               </div>

//               <div className="custom-input">
//                 <Controller
//                   name="last_name"
//                   control={control}
//                   defaultValue=""
//                   render={({ field: { value, onChange, ...field } }) => (
//                     <>
//                       <CFormLabel>Last Name  <span className='text-danger'>*</span></CFormLabel>
//                       <CFormInput className='ls-custom-input-shadow' maxLength="52" type="text" placeholder='Last Name'
//                         name='last_name'
//                         {...field}
//                         onChange={({ target: { name, value } }) => {
//                           onChange(value);
//                           setData({ ...data, last_name: value });
//                         }}
//                         onBlur={(e) => trigger(e.target.name)}
//                         value={data.last_name}
//                       />
//                     </>
//                   )}
//                 />
//                 <p className='text-danger help-text'>
//                   {errors.last_name && errors.last_name.message}
//                 </p>
//               </div>

//               {/* <div className="custom-input">
//                 <Controller
//                   name="dob"
//                   control={control}
//                   defaultValue=""
//                   render={({ field: { value, onChange, ...field } }) => (
//                     <>
//                       <CFormLabel>Date of Birth<span className='text-danger'> * </span> </CFormLabel>
//                       <CustomCalendar
//                         isRequired={false}
//                         dateFormat="dd/MM/yyyy"
//                         classNames="form-control ls-custom-input-shadow"
//                         placeholderText='DD/MM/YYYY'
//                         selected={data.dob ? new Date(data.dob) : null}
//                         onChange={(date) => {
//                           onChange(date);
//                           setData({ ...data, dob: moment(date).format('YYYY-MM-DD') });
//                         }}
//                         onBlur={(e) => trigger(e.target.name)}
//                         name='dob'
//                       />
//                     </>
//                   )}
//                 />
//                 <p className='text-danger help-text'>
//                   {errors.dob && errors.dob.message}
//                 </p>
//               </div> */}

//               <div className="custom-input dropdown-center">
//                 <Controller name="gender"
//                   control={control}
//                   defaultValue={data.gender}
//                   value={data.gender}
//                   render={({ field: { value, onChange, ...field } }) => (
//                     <>
//                       <CFormLabel>Gender <span className='text-danger'> * </span></CFormLabel>
//                       <Select
//                         name="gender"
//                         className="react-select"
//                         classNamePrefix="react-select"
//                         placeholder="Gender"
//                         // styles={DropDownStyle}
//                         // menuPortalTarget={portaling && document.querySelector("body")}
//                         value={Gender.find(i => i.value === data.gender) || null}
//                         {...field}
//                         options={Gender}
//                         onChange={(event) => {
//                           onChange(event.value);
//                           setData({ ...data, gender: event.value });
//                         }}
//                         onBlur={(e) => trigger("gender")}
//                       />
//                     </>
//                   )}
//                 />
//                 <p className='text-danger help-text'>
//                   {errors.gender && errors.gender.message}
//                 </p>
//               </div>

//               <div className="custom-input">
//                 <Controller
//                   name="contact_no"
//                   control={control}
//                   defaultValue=""
//                   render={({ field: { value, onChange, ...field } }) => (
//                     <>
//                       <CFormLabel>Contact Number</CFormLabel>
//                       <CFormInput className='ls-custom-input-shadow' maxLength="13" type="text" placeholder='Contact Number'
//                         name='contact_no'
//                         {...field}
//                         onChange={({ target: { name, value } }) => {
//                           onChange(value);
//                           setData({ ...data, contact_no: value });
//                         }}
//                         onBlur={(e) => trigger(e.target.name)}
//                         value={data.contact_no}
//                       />
//                     </>
//                   )}
//                 />
//                 <p className='text-danger help-text'>
//                   {errors.contact_no && errors.contact_no.message}
//                 </p>
//               </div>

//               <div className="custom-input">
//                 <Controller
//                   name="email"
//                   control={control}
//                   defaultValue=""
//                   render={({ field: { value, onChange, ...field } }) => (
//                     <>
//                       <CFormLabel>Email  <span className='text-danger'> * </span></CFormLabel>
//                       <CFormInput className='ls-custom-input-shadow' maxLength="52" type="email" placeholder='Email'
//                         name='email'
//                         {...field}
//                         onChange={({ target: { name, value } }) => {
//                           onChange(value);
//                           setData({ ...data, email: value });
//                         }}
//                         onBlur={(e) => trigger(e.target.name)}
//                         value={data.email}
//                       />
//                     </>
//                   )}
//                 />
//                 <p className='text-danger help-text'>
//                   {errors.email && errors.email.message}
//                 </p>
//               </div>

//               <div className="custom-input dropdown-center">
//                 <Controller name="location"
//                   control={control}
//                   defaultValue={data.location}
//                   value={data.location}
//                   render={({ field: { value, onChange, ...field } }) => (
//                     <>
//                       <CFormLabel>Location <span className='text-danger'> * </span></CFormLabel>
//                       <Select
//                         name="location"
//                         className="react-select"
//                         classNamePrefix="react-select"
//                         placeholder="Location"
//                         // styles={DropDownStyle}
//                         // menuPortalTarget={portaling && document.querySelector("body")}
//                         value={Location.find(i => i.value === data.location) || null}
//                         {...field}
//                         options={Location}
//                         onChange={(event) => {
//                           onChange(event.value);
//                           setData({ ...data, location: event.value });
//                         }}
//                         onBlur={(e) => trigger("location")}
//                       />
//                     </>
//                   )}
//                 />
//                 <p className='text-danger help-text'>
//                   {errors.location && errors.location.message}
//                 </p>
//               </div>

//               {/* <div className="custom-input">
//                 <Controller
//                   name="date_joined"
//                   control={control}
//                   defaultValue={_date}
//                   render={({ field: { value, onChange, ...field } }) => (
//                     <>
//                       <CFormLabel>Date Joined<span className='text-danger'> * </span> </CFormLabel>
//                       <CustomCalendar
//                         isRequired={false}
//                         dateFormat="dd/MM/yyyy"
//                         classNames="form-control ls-custom-input-shadow"
//                         placeholderText='DD/MM/YYYY'
//                         selected={data.date_joined ? new Date(data.date_joined) : null}
//                         onChange={(date) => {
//                           onChange(date);
//                           setData({ ...data, date_joined: moment(date).format('YYYY-MM-DD') });
//                         }}
//                         onBlur={(e) => trigger(e.target.name)}
//                         name='date_joined'
//                       />
//                     </>
//                   )}
//                 />
//                 <p className='text-danger help-text'>
//                   {errors.date_joined && errors.date_joined.message}
//                 </p>
//               </div> */}

//               <CRow>
//                 <CCol xs={12} className="text-center mt-4">
//                   <CButton color="primary" type="submit" disabled={disable}>
//                     Submit
//                   </CButton>
//                   <CButton
//                     type="reset"
//                     color="danger"
//                     className="ml-3"
//                     onClick={handleReset}
//                     disabled={disable}
//                   >
//                     Reset
//                   </CButton>
//                 </CCol>
//               </CRow>
//             </form>
//           </CCardBody>
//         </CCard>
//       </CContainer>
//     </>
//   );
// };

// export default Contact;






// // import React from "react";
// // import NavbarPage from './Navbar/Navbar';

// // function Contact() {


// //   const onSubmit = async (event) => {
// //     event.preventDefault();
// //     const formData = new FormData(event.target);

// //     formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

// //     const object = Object.fromEntries(formData);
// //     const json = JSON.stringify(object);

// //     const res = await fetch("https://api.web3forms.com/submit", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Accept: "application/json"
// //       },
// //       body: json
// //     }).then((res) => res.json());

// //     if (res.success) {
// //       console.log("Success", res);
// //     }
// //   };

// //   return (
// //     <>
// //     <NavbarPage/>
// //     <div style={{ backgroundColor:"pink", height:"100px", width:"100px"}}>
// //      <h1>Contact Page</h1>
    
// //       <form onSubmit={onSubmit}>
// //         <input type="text" name="name"/>
// //         <input type="email" name="email"/>
// //         <textarea name="message"></textarea>
// //         <button type="submit">Submit Form</button>
// //       </form>
// //     </div>
// //     </>
// //   );
// // }

// // export default Contact;