import React from "react";
import styled, { keyframes } from "styled-components";
import { PuzzleIcon } from "./Icons";

const inTop = keyframes`
  from {
    transform: rotate3d(-1, 0, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
`;

const inRight = keyframes`
  from {
    transform: rotate3d(0, -1, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
`;

const inBottom = keyframes`
  from {
    transform: rotate3d(1, 0, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
`;

const inLeft = keyframes`
  from {
    transform: rotate3d(0, 1, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
`;

const outTop = keyframes`
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(-1, 0, 0, 104deg);
  }
`;

const outRight = keyframes`
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(0, -1, 0, 104deg);
  }
`;

const outBottom = keyframes`
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(1, 0, 0, 104deg);
  }
`;

const outLeft = keyframes`
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(0, 1, 0, 104deg);
  }
`;

const StyledItem = styled.li`
  position: relative;
  float: left;
  width: 200px;
  height: 200px;
  margin: 5px;
  padding: 0;
  list-style: none;
  perspective: 400px;
`;

const StyledInfo = styled.div`
  transform: rotate3d(1, 0, 0, 90deg);
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  pointer-events: none;
  background-color: rgba(26, 188, 156, 0.9);
  &.in-top {
    transform-origin: 50% 0%;
    animation: ${inTop} 300ms ease 0ms 1 forwards;
  }
  &.in-right {
    transform-origin: 100% 0%;
    animation: ${inRight} 300ms ease 0ms 1 forwards;
  }
  &.in-bottom {
    transform-origin: 50% 100%;
    animation: ${inBottom} 300ms ease 0ms 1 forwards;
  }
  &.in-left {
    transform-origin: 0% 0%;
    animation: ${inLeft} 300ms ease 0ms 1 forwards;
  }
  &.out-top {
    transform-origin: 50% 0%;
    animation: ${outTop} 300ms ease 0ms 1 forwards;
  }
  &.out-right {
    transform-origin: 100% 50%;
    animation: ${outRight} 300ms ease 0ms 1 forwards;
  }
  &.out-bottom {
    transform-origin: 50% 100%;
    animation: ${outBottom} 300ms ease 0ms 1 forwards;
  }
  &.out-left {
    transform-origin: 0% 0%;
    animation: ${outLeft} 300ms ease 0ms 1 forwards;
  }
`;


const DifferencesStyled = ({ icon, title, info }) => {
    return (
      <>
        <StyledItem  className="relative float-left w-200 h-200 m-5 p-0 list-none">
          <a className="inline-block vertical-align-top no-underline rounded-m">
            {icon}
          </a>
          <div className="info transform rotate-x-90 w-full h-full p-20 absolute top-0 left-0 rounded-md pointer-events-none bg-green-500 bg-opacity-90">
            <h3 className="m-0 text-white text-opacity-90 text-16">{title}</h3>
            <p className="text-12 leading-1.5 text-white text-opacity-80">
              {info}
            </p>
          </div>
        </StyledItem >
      </>
    );
};

class ServicesStyled extends React.Component {
    handleMouseOver = (ev) => {
      this.props.update(ev, 'in');
    };
  
    handleMouseOut = (ev) => {
      this.props.update(ev, 'out');
    };
  
    render() {
      return (
        <StyledItem
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <StyledInfo className="info">{this.props.children}</StyledInfo>
        </StyledItem>
      );
    }
  }


export default ServicesStyled;
