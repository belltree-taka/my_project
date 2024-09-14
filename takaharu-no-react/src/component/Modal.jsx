import { background } from '@chakra-ui/react'
import React from 'react'
import {useState} from 'react'
import styled from 'styled-components' 

const style = {
    background: 'white',
    padding: '20px',
    color: 'red',
    textAlign: 'center'
}

const StyledDiv = styled.div`
    position: sticky;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    `

const ModalCloseButton = styled.button`
    display: block;
    `

const Modal = ({closeClick}) => {
    return(
        <React.Fragment>
            <StyledDiv>
                <div style={style}>
                    <p>Modal</p>
                    <ModalCloseButton onClick={closeClick}>Close</ModalCloseButton>
                </div>
            </StyledDiv>
        </React.Fragment>
    )
}

export default Modal

