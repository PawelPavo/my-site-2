import * as React from 'react';
import styled from 'styled-components';
import { FaArrowCircleDown } from 'react-icons/fa'

const Scroll: React.FC<IScrollProps> = (props) => {

  return (
    <>
      <ScrollTheme>
        <a href="#home">
          <span className="blink display-1"><FaArrowCircleDown /></span>
        </a>
      </ScrollTheme>
    </>
  )
}

const ScrollTheme = styled.div`
span{
  color: white;
  animation: blink 3s linear infinite;
}
@keyframes blink{
0%{opacity: 0.1;}
25%{opacity: .5;}
50%{opacity: 1;}
75%{opacity: .5;}
100%{opacity: 0.1;}
}
  
`

export interface IScrollProps { }

export default Scroll;