const {
    React
} = require("powercord/webpack");
const Container = require("./Container");
module.exports = class SvgViewer extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            raw: false,
        }
    }


    renderSvg(content) {
        return (
            <div className="Svg-Preview" dangerouslySetInnerHTML={{__html: content}}/>
        )

        return (
            <div>
                <img className="Svg-Preview" src={`data:image/svg+xml;utf8,${content}`} />
            </div>
        )
    }

    render() {
        return (
            <Container attachment={this.props.attachment}>
                {/* <p>{this.props.fileContent}</p> */}
                {this.renderSvg(this.props.fileContent)}
            </Container>
        )
    }
}