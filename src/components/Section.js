import React from 'react'
import styled from 'styled-components'

function Section(props) {
    return (
        <Wrap bgImage={props.backgroundImage}>
            <ItemText>
                <h1>{props.model}</h1>
                <p>{props.description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                    Custom Order
                    </LeftButton>
                    
                    {props.rightButton && 
                        <RightButton>
                            {props.rightButton}
                        </RightButton>
                    }
                    
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"/>
            
            </Buttons>

        </Wrap>
    )
}

const Wrap = styled.div`
    width:100vw;
    height: 100vh;
    background-image: ${props => `url(/images/${props.bgImage})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const ButtonGroup = styled.div`
    display: flex;
    margin-top: 30px;
    @media (max-width:768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
// const Div = styled.div`
//     display: flex;
//     flex: 1;
// `

const RightButton = styled(LeftButton)`
    background-color: white;
    color: rgba(23, 26, 32, 0.8);

`
const DownArrow = styled.img`
     height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`
const Buttons = styled.div``
export default Section
