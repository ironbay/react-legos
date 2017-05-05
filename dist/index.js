"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var root_1 = require("./root");
var react_hot_loader_1 = require("react-hot-loader");
var element = document.getElementById('react-root');
var render = function (Component) {
    ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(Component, null)), element);
};
render(root_1.default);
if (module.hot) {
    module.hot.accept("./App", function () {
        var NextApp = require("./App").default;
        ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
            React.createElement(NextApp, null)), element);
    });
}
//# sourceMappingURL=index.js.map