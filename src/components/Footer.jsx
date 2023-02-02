import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as GitHub } from '../assets/icons/github.svg';
import { ReactComponent as CopyRight } from '../assets/icons/copy-right.svg';
import './Footer.css';

function Footer() {
    return (
        <footer className='pt-3 bg-light'>
            <div className='container container-min-max-width
                                d-flex justify-content-between'>
                <div>
                    <h5>Link-uri:</h5>
                    <p  className="mb-1">
                        <Link to='/about'> About </Link>
                    </p>
                    <p className="m-0">
                        <Link to='/terms-and-conditions'> Termeni si conditii </Link>
                    </p>
                </div>
                <div>
                    <h5>Contact</h5>
                    <p className="mb-1">
                        <a href='mailto:danieleduardpopa@gmail.com'>
                        <Mail className="mr-1 mb-1 footer-icon"/> danieleduardpopa@gmail.com
                        </a>
                    </p>
                    <p className="m-0">
                        <Phone className="mr-1 footer-icon"/> +40 771 125 903
                    </p>
                </div>
                <div>
                    <h5>Contact</h5>
                    <a href="https://github.com/semisemizeu">
                        <p className="mb-1"><GitHub className="mr-1 mb-1 footer-icon"/> semisemizeu</p>
                    </a>
                </div>
            </div>
            <div className="copy-right text-center py-3">
                <CopyRight />Daniel Popa 2022
            </div>
        </footer>
    )
}

export default Footer
