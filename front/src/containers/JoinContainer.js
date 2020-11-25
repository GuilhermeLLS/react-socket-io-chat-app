import { connect } from "react-redux"
import redirectAction from "../actions/index"
import Join from "../components/Join/Join"

const mapStateToProps = (redirect) => {
    return redirect
}

const mapDispatchToProps = (dispatch) => {
    return {
        redirect: (nameJoin, roomJoin) => {
            dispatch(redirectAction(nameJoin, roomJoin))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Join)