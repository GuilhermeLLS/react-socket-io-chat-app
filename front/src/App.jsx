import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import JoinContainer from "./containers/JoinContainer"
import ChatContainer from "./containers/ChatContainer"
import { createStore } from "redux"
import redirectReducer from "./reducers/index"
import { Provider } from "react-redux"

const store = createStore(redirectReducer)

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/" exact component={JoinContainer} />
                <Route path="/chat" exact component={ChatContainer} />
            </Router>
        </Provider>
    )
}

export default App