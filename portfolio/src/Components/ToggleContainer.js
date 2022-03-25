import styled from "styled-components";

const ToggleContainer = styled.button`
    position: relative;
    top: 1.5rem;
    left:8%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items:center;
    overflow: hidden;
    cursor: pointer;

    img{
        transition: all 0.3s linear;
    }

    &:hover{
    background-color: rgba(46, 210, 189, 0.4);
    box-shadow: 0 0 8px 6px rgba(46, 210, 189, 0.2);
`;

export default ToggleContainer