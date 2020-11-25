import { connect } from "react-redux"
import Chat from "../components/Chat/Chat"

const mapStateToProps = ({ nameJoin, roomJoin }) => {
    return {
        nameJoin,
        roomJoin,
    }
}

export default connect(mapStateToProps, null)(Chat)