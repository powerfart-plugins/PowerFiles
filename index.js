const {
    Plugin
} = require("powercord/entities");
const {
    inject,
    uninject
} = require("powercord/injector");
const {
    getModule,
    React
} = require("powercord/webpack");
const {
    findInReactTree
} = require("powercord/util");


// Components
const SvgViewer = require("./Components/SvgViewer");

module.exports = class PowerFiles extends Plugin {
    async startPlugin() {


        await this.betterSvg();

        this.loadStylesheet("./style.css");
    }


    async betterSvg() {
        const PlaintextFilePreviewComponent = await getModule(["PlaintextFilePreviewComponent"], false)


        inject("PF-Svg", PlaintextFilePreviewComponent.default, "type", (args, res) => {
            const props = findInReactTree(res, r => r && r.fileContents)
            console.log(props);
            if (props === null || props?.language !== "svg") return res;

            return React.createElement(SvgViewer, {
                fileContent: props.fileContents,
                attachment: props.attachment
            });
        });



    }


    pluginWillUnload() {
        uninject("PF-Svg");
    }
}