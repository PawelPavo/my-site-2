import * as React from 'react';
import Navigation from '../components/Navigation';
const Zoom = require('react-reveal/Zoom')

const Home: React.FC<IHomeProps> = (props) => {
    const [name, setName] = React.useState<string>('')

    React.useEffect(() => {
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => setName(data))
    }, [])
    return (
        <Zoom top>
            <Navigation />
            <main className="d-flex justify-content-center h-75">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-12">
                        <div className="display-2 font-weight-lighter">Code {name}</div>
                    </div>
                </div>
            </main>
        </Zoom>
    )
}

export interface IHomeProps { }

export default Home;