import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation: React.FC<INavigationProps> = (props) => {



    return (
        <>
            <Sticky>
                <ul className="nav justify-content-around sticky-top shadow py-3">
                    <li className="nav-item">
                        <NavLink exact to="/">
                            <h3 className="font-weight-lighter text-decoration-none">Home</h3>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/about">
                            <h3 className="font-weight-lighter text-decoration-none">About</h3>
                        </NavLink>
                    </li>
                </ul>
            </Sticky>

        </>
    )
}


const Sticky = styled.div`

`

export interface INavigationProps { }

export default Navigation;