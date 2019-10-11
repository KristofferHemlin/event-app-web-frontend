import React, { useState, useEffect } from 'react';
import './FirstTimeSetupPage.scss';

import TextInput from '../../components/TextInput/TextInput';
import BaseButton from '../../components/BaseButton/BaseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStateValue } from '../../components/StateProvider/StateProvider';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';

const FirstTimeSetupPage = withRouter(({ history }) => {
    
    const [{ userInfo }] = useStateValue();
    let [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    let [isLoading, setIsLoading] = useState(false);
    let [currentlySelectedImage, setCurrentlySelectedImage] = useState(null);
    let [isLoginDisabled, setIsLoginDisabled] = useState(true);

    let [fields, setFields] = useState([
        {
            key: 'firstName',
            name: 'First Name',
            type: 'text',
            disabled: false,
            label: 'First Name',
            value: '',
        },
        {
            key: 'lastName',
            name: 'Last Name',
            type: 'text',
            disabled: false,
            label: 'Last Name',
            value: '',
        },
        {
            key: 'email',
            name: 'Email',
            type: 'text',
            disabled: false,
            label: 'Email',
            value: '',
        },
        {
            key: 'phone',
            name: 'Phone',
            type: 'text',
            disabled: false,
            label: 'Phone',
            value: '',
        },
        {
            key: 'company',
            name: 'Company Name',
            type: 'text',
            disabled: true,
            label: 'Company Name',
            value: '',
        },
        {
            key: 'companyDepartment',
            name: 'Company Department',
            type: 'text',
            disabled: false,
            label: 'Company Department',
            value: '',
        },
        {
            key: 'password',
            name: 'password',
            type: 'password',
            disabled: false,
            label: 'Password',
            value: '',
        },
        {
            key: 'rePassword',
            name: 'rePassword',
            type: 'password',
            disabled: false,
            label: 'Re-type Password',
            value: '',
        },
    ]);

    // Check so that no value is empty.
    useEffect(() => {
        setIsSubmitDisabled(() => {
            if (!currentlySelectedImage){
                return true;
            } 
            return !fields.every(field => {
                return field.value.length > 0;
            })
        })
    })

    useEffect(() => {
        // Shitty setting of the values. Fix this...
        let theFields = [...fields];
        theFields.map(field => {
            for (let prop in userInfo){
                if (field.key === prop){
                    if (prop === 'company'){
                       field.value = userInfo[prop].title;   
                    } else {
                        if (userInfo[prop] !== null){
                            field.value = userInfo[prop];
                        }
                    }
                }    
            }
        })
        setFields(theFields);
    }, []); 

    const handleInputChange = (e, id) => {
        let theFields = [...fields];
        theFields[id].value = e.target.value;
        setFields(theFields);  
    }

    const handleImageSelectChange = (file) => {
        let reader = new FileReader();
        reader.onloadend = () => {
            const filePicker = document.getElementsByClassName('image-upload-label');
            filePicker[0].style.background = `url('${reader.result}')`;
            filePicker[0].innerHTML = '';
        }
        if (file) {
            if (!['png', 'jpg', 'jpeg', 'hecu'].includes(file.name.split('.').pop())) {
                toast.error('File must be of either .png, .jpg, .jpeg or.hecu format.', {
                    position: toast.POSITION.TOP_CENTER
                });
                return;
            }
            setCurrentlySelectedImage(file);
            reader.readAsDataURL(file);
        } else {
            return;
        }
    };

    const handleButtonClick = () => {
        setIsLoading(true);

        if (fields[6].value !== fields[7].value){
            toast.error('Passwords do not match.', {
                position: toast.POSITION.TOP_CENTER
            });
            setIsLoading(false);
            return; 
        }

        let fd = new FormData();
        fd.append('firstName',         fields[0].value);
        fd.append('lastName',          fields[1].value);
        fd.append('email',             fields[2].value);
        fd.append('phone',             fields[3].value);
        fd.append('companyDepartment', fields[5].value);
        fd.append('password',          fields[6].value);
        fd.append('image',             currentlySelectedImage);
        console.log('fd:', fd);
        axios.put(process.env.REACT_APP_API_URL + `/users/${userInfo.id}/firstlogin`, fd)
            .then(res => {
                setIsLoading(false);
                history.push('/')
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err);
            })

    }

    return (
        <div id="first-time-setup-page">
            <div className="action-header">
                <Link to="/logout">Logout</Link>
            </div>
            <div className="content-column">
                <h1>First Time Setup Page</h1>
                <label className="image-upload-label" htmlFor="file" >Select a photo</label>
                <input 
                    type="file" 
                    name="file" 
                    id="file"
                    onChange={e => handleImageSelectChange(e.target.files[0]) }
                />
                <fieldset disabled={isLoading}>
                { 
                    fields.map((field, idx) => {
                        return <TextInput
                            key={field.key}
                            type={field.type}
                            label={field.label}
                            variant="subtle-white"
                            disabled={field.disabled}
                            value={field.value}
                            onChange={(e) => handleInputChange(e, idx)}
                        />
                    }) 
                }
                </fieldset>

                <BaseButton
                    size="full"
                    variant="primary"
                    disabled={isSubmitDisabled || isLoading}
                    onClick={() => handleButtonClick()}
                >
                    {isLoading ? (
                        <div>
                            <FontAwesomeIcon icon="spinner" spin />
                        </div>
                    ) : (
                        <div>Complete Signup</div>
                    )}

                </BaseButton>
            </div>
        </div>
    );
});

export default FirstTimeSetupPage;