const {
    React
} = require("powercord/webpack");
const { Tooltip, Icons: { ExternalLink }} = require("powercord/components");
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
                <div className="PF-Container-Inner embedWrapper-lXpS3L container-1pMiXm">
                    {children}                
                </div>

                <div className="colorHeaderSecondary-3Sp3Ft size14-e6ZScH footer-2yA7Ep">

                    <div className="PF-Container-Info-Name attachmentName-1iFwvb">
                        <Tooltip position="top" text="Go to file">
                            <ExternalLink width="18px" className="PF-ExternalLink" onClick={() => openExternal(attachment.url)} />
                        </Tooltip>

                        <Tooltip position="top" text={attachment.filename}>
                            <p style={{margin: "0px"}}>{attachment.filename}</p>
                        </Tooltip>
                    </div>

                    <div className="PF-Container-Info-Size formattedSize-2PXVec">
                        <Tooltip position="top" text={ConvertSize(attachment.size)}>
                            <p style={{margin: "0px"}}>{ConvertSize(attachment.size)}</p>
                        </Tooltip>
                    </div>
                </div>
            </div>
        )
    }
}