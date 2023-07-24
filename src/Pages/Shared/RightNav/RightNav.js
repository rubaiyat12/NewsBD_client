import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub ,FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';

import Carosel from '../Carosel/Carosel';

const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
            
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log in with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Log in with github</Button>
                
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2 '><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 '><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 '><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2 '><FaWhatsapp></FaWhatsapp> whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2 '>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carosel></Carosel>
                
            </div>
        </div>
    );
};

export default RightNav;