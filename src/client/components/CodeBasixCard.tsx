import * as React from 'react'
import styled from 'styled-components';

const Slide = require('react-reveal/Zoom')


const CodeBasixCard: React.FC<CodeBasixCardProps> = (props) => {
    const [show2, setShow2] = React.useState(false);

    return (
        <Layout>
            <Slide left>
                <div
                    onClick={() => setShow2(!show2)}
                    className="col-md-12 border my-2 borderHover font-weight-lighter bg-light">

                    <div className="card-body">
                        <h5
                            onClick={props.click}
                            className="card-title my-auto font-weight-lighter ">{props.project.name}
                        </h5>
                        <div className={`showContent ${show2 ? 'showContent showContent-active' : ''}`}>
                            <p className="card-text mt-2">{props.project.description}</p>
                        </div>
                    </div>
                </div>
            </Slide>
        </Layout>
    )
}

const Layout = styled.div`

.showContent {
    height: 0px;
    width: 100%;
    display: block;
    opacity: 0;
    transition: height 2s, opacity 2s;
}

.showContent-active {
    height: 150px;
    opacity: 1;
}

.borderHover:hover {
    border-color:rgb(192, 180, 180) !important;
    box-shadow: 0 0 15px rgba(33,33,33,.2);
    transition: 0.5s;
}

`

interface CodeBasixCardProps {
    project: any;
    click: any
}

export default CodeBasixCard;