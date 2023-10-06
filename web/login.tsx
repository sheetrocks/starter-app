import React from 'react';
import ReactDOM from 'react-dom';

interface LoginProps {
}

interface LoginState {
    queryParams: string;
}

// a login component which contains an image and an iframe

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);

        // empty query params 
        let queryParams = new URLSearchParams('?primaryColor=B48673&returnTo=https%3A%2F%2Flocal-sisyphus.com:8081');
        let incomingQueryParams = new URLSearchParams(window.location.search);

        // for each value in incomingQueryParams, set the value in queryParams
        incomingQueryParams.forEach((value, key) => {
            queryParams.set(key, value);
        });

        // set the state
        this.state = {
            queryParams: queryParams.toString()
        };
    }

    render() {
        return <div className="login">
            <img src="logo.png" />
            <iframe src={`https://sheet.rocks/apps/${process.env.WORKBOOK_ID}/auth/login?${this.state.queryParams}`}></iframe> 
        </div>
    }
}

ReactDOM.render(
    <Login />,
    document.getElementById('root')
);