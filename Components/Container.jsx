const {
    React
} = require("powercord/webpack");
const { ExternalLink } = require("powercord/components/Icons");
const ConvertSize = require("../util/bToKMB")
const { shell: { openExternal } } = require('electron');
;
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
                    <div className="PF-Container-Info-Name">
                        <ExternalLink width="18px" className="ExternalLink-PF" onClick={() => openExternal(attachment.url)} />
                        <p style={{margin: "0px"}}>{attachment.filename}</p>
                    </div>
                    <div id="PF-Container-Info-Size">
                        <p style={{margin: "0px"}}>{ConvertSize(attachment.size)}</p>
                    </div>
                </div>
            </div>
        )
    }
}