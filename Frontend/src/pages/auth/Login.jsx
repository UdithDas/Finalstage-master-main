import React, { useState } from 'react';
import Input from '../../components/myInput/MyInput';
import toast from 'react-hot-toast';
import styles from './login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const user = {
        // change this
        username: 'admin',
        password: 'admin123',
    };

    const [inputValue, setInputValue] = useState({
        password: '',
        username: '',
    });

    const [inputErrors, setInputErrors] = useState({
        password: '',
        username: '',
    });

    const validateUsername = () => {
        const { username } = inputValue;
        if (!username) {
            setInputErrors((prevErrors) => ({
                ...prevErrors,
                username: 'Username is required',
            }));
            return false;
        } else {
            setInputErrors((prevErrors) => ({
                ...prevErrors,
                username: '',
            }));
            return true;
        }
    };

    const validatePassword = () => {
        const { password } = inputValue;
        if (!password) {
            setInputErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password is required',
            }));
            return false;
        } else {
            setInputErrors((prevErrors) => ({
                ...prevErrors,
                password: '',
            }));
            return true;
        }
    };

    const { password, username } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
        setInputErrors({
            ...inputErrors,
            [name]: '', // Clear error when typing
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();

        if (isUsernameValid && isPasswordValid) {
            // if (username === user.username && password === user.password) {
            //     toast.success('Logging Successful');
            //     // impliment redirection logic here!
            //     setInputValue({
            //         username: '',
            //         password: '',
            //     });
            // } else {
            //     toast.error('Incorrect credentials');
            // }

            try {
                const response = await axios.post('http://localhost:3005/user/login', {
                    username,
                    password,
                });

                if (response.data.message === 'Login Success') {
                    navigate('/sidebar');
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        // JSX
        <div className={styles.appContainer}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.contentContainer}>
                <div className={styles.myContainer}>
                    <h2 className={styles.myHeading}>ADMIN</h2>
                </div>
                <form onSubmit={handleSubmit} className={styles.myForm}>
                    <Input
                        type={'text'}
                        name={'username'}
                        value={username}
                        placeholder={'Enter Your Username'}
                        onChange={handleOnChange}
                    />
                    <p className={styles.myInputErrors}>{inputErrors.username}</p>
                    <Input
                        type={'password'}
                        name={'password'}
                        value={password}
                        placeholder={'Enter Your Password'}
                        onChange={handleOnChange}
                    />
                    <p className={styles.myInputErrors}>{inputErrors.password}</p>
                    <div className={styles.myCheckboxContainer}>
                        <input className={styles.myCheckbox} type='checkbox' />
                        <p className={styles.fontMedium}>Remember Password</p>
                    </div>
                    <button type='submit' className={styles.myButton}>
                        Login
                    </button>
                </form>

                {/* <Header />
                <Body />
                <Toaster /> */}
            </div>
        </div>
    );
};

export default Login;
