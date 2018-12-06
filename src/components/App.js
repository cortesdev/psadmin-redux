import React, {PropTypes} from 'react';


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Pluralsight Adm</h1>
                <p>This application uses React, Redux, React Router and a variety of ther libraries</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;