const {
    React
} = require("powercord/webpack");

const ConvertSize = require("../util/bToKMB");
module.exports = class Container extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

    }
    render() {
        const { children, attachment } = this.props
        return (
            <div className="PF-Container">
                {children}
                <div className="PF-Container-Info">
                    <div id="PF-Container-Info-Name">
                        <p>{attachment.filename}</p>
                    </div>
                    <div id="PF-Container-Info-Size">
                        <p>{ConvertSize(attachment.size)}</p>
                    </div>
                </div>
            </div>
        )
    }
}