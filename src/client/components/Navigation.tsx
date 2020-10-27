import * as React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { GrProjects, GrHome, GrContact } from 'react-icons/gr';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import SwitchButton from "react-switch";
import styled from 'styled-components';

const Slide = require('react-reveal/Slide')


const Navigation: React.FC<INavigationProps> = () => {

    // ===== controls for toggle switch ======
    // const [checked, setChecked] = React.useState<boolean>(false)
    // //Sets the theme of the site on toggle
    // const handleTheme = async (checked: any) => {
    //     setChecked(checked)
    //     console.log(checked)
    // }

    const [show, setShow] = React.useState<string>('none')
    const [show2, setShow2] = React.useState(false);

    const handleShow = async (checked: any) => {
        if (show === 'none') {
            setShow('block')
        } else {
            setShow('none')
        }
    }

    return (
        <>
            <Layout>
                <div className="sticky-top">
                    <div className="row justify-content-around shadow pt-2">
                        <div className="py-3">
                            <NavLink to="/">
                                <h3 className="font-weight-lighter text-decoration-none"><GrHome /></h3>
                            </NavLink>
                        </div>
                        <div className="py-3">
                            <div
                                // onClick={handleShow}
                                onClick={() => setShow2(!show2)} >
                                <h3 ><GrContact /></h3>
                            </div>
                        </div>
                        <div className="py-3">
                            <NavLink exact to="/projects">
                                <h3 className="font-weight-lighter text-decoration-none"><GrProjects /></h3>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className={`search-bar ${show2 ? 'search-bar search-bar-active' : ''}`}>
                    <div className="row justify-content-center py-3 mt-3 border bg-SocialMediaBack">
                        <div className="icon">
                            <a target="_blank" href="https://github.com/PawelPavo?tab=repositories"><FaGithub /></a>
                        </div>
                        <div className="icon">
                            <a target="_blank" href="mailto:pjpavo@gmail.com"><FiMail /></a>
                        </div>
                        <div className="icon">
                            <a target="_blank" href="https://www.linkedin.com/in/pawel-jaskolski-995323b3/"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </Layout>

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


const Layout = styled.div`

.search-bar {
    height: 0px;
    width: 100%;
    display: block;
    opacity: 0;
    transition: height 2s, opacity 2s;
}

.search-bar-active {
    height: 62px;
    opacity: 1;
}

.icon {
    font-size: 25px;
    margin-left: 25px;
    margin-right: 25px;

}

`

export interface INavigationProps { }

export default Navigation;