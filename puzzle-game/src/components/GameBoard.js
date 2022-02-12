import React, { useState, useEffect } from "react";
import styled from "styled-components";
import initialState from "./initialState";
import { v4 as uuid } from 'uuid';

const StyledGameBoard = styled.div`
    border: black 1px solid;
    display: flex;
    width: 600px;
    height: 600px;
    flex-wrap: wrap;
`

const StyledGameSquare = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(25% - 2px);
    height: calc(25% -2px);
    border: red 1px solid;
    font-size: 4rem;
    font-weight: bold;
`

const GameSquare = (props) => {

    return (
        <StyledGameSquare>
            {console.log(props)}
            {props.squareObj.currentValue}
        </StyledGameSquare>
    )
}

const GameBoard = () => {
    
    const [ boardArray, setBoardArray ] = useState(initialState);

    return (
        <StyledGameBoard>
            {boardArray.map(item => {
               return <GameSquare key={uuid()} squareObj={item}/>
            })}
        </StyledGameBoard>
    )
}

export default GameBoard;