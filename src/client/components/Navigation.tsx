import * as React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { GrProjects, GrHome, GrContact } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import SwitchButton from "react-switch";
import styled from 'styled-components';

const Navigation: React.FC<INavigationProps> = () => {

    // ===== controls for toggle switch ======
    // const [checked, setChecked] = React.useState<boolean>(false)
    // //Sets the theme of the site on toggle
    // const handleTheme = async (checked: any) => {
    //     setChecked(checked)
    //     console.log(checked)
    // }
    return (
        <>
            <div className="">

                <ul className="nav justify-content-around sticky-top shadow py-3">
                    <li className="nav-item">
                        <NavLink to="/">
                            <h3 className="font-weight-lighter text-decoration-none"><GrHome /></h3>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/">
                            <h3 className="font-weight-lighter text-decoration-none"><GrContact /></h3>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/projects">
                            <h3 className="font-weight-lighter text-decoration-none"><GrProjects /></h3>
                        </NavLink>
                    </li>
                </ul>
            </div>


            {/* ========== Toggkle switch  =========== */}

            {/* <div className="col-md d-flex justify-content-center align-items-center mt-3">
                <SwitchButton
                    offColor="#98b1c4"
                    onColor="#adb6c0"
                    uncheckedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 15,
                                color: "#FFFFFF",
                                paddingRight: 2,
                            }}
                        >
                            <FaSun />
                        </div>
                    }
                    checkedIcon={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                fontSize: 15,
                                color: "#FFFFFF",
                                paddingRight: 2
                            }}
                        >
                            <FaMoon />
                        </div>
                    }
                    className="react-switch"
                    id="icon-switch"
                    onChange={handleTheme}
                    checked={checked} />
            </div> */}
        </>
    )
}


const Sticky = styled.div`

`

export interface INavigationProps { }

export default Navigation;