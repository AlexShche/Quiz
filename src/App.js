import React from 'react'
import './App.css';
import FormName from "./components/FormName/FormName";
import {connect} from "react-redux";
import Quiz from "./containers/quiz/Quiz";

const App = ({currentUser}) => {
    return (
        <div className="App">
            <div className='container'>
                {
                    currentUser ? <Quiz /> : <FormName />
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        currentUser: state.currentUser.currentUser
    }
}

export default connect(mapStateToProps, null)(App)
