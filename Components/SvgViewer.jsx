const {
    React
} = require("powercord/webpack");
const Container = require("./Container");
module.exports = class SvgViewer extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.fileContent = props.fileContent
        this.state = {
            raw: false,
        }

        let blob = new Blob([this.fileContent], { type: "image/svg+xml" });
        this.url = URL.createObjectURL(blob)

    }

    componentWillUnmount() {
        URL.revokeObjectURL(this.url)
    }



    render() {


        return (
            <Container attachment={this.props.attachment}>
                <img style={{ maxWidth: "300px" }} src={this.url} onLoad={() => URL.revokeObjectURL(this.url)} />
            </Container>
        )
    }
}