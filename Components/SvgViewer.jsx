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

        return React.createElement("div", { className: "Svg-Preview", dangerouslySetInnerHTML: { __html: content } })

        return <div className="Svg-Preview" dangerouslySetInnerHTML={{ __html: content }} />
    }

    render() {
        return (
            <Container attachment={this.props.attachment}>
                {this.renderSvg(this.props.fileContent)}
            </Container>
        )
    }
}