module.exports = function(RED) {
    function sendNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var msg = {};
        msg.payload = {"key" : "dummy"};
        node.send(msg);
    }
    RED.nodes.registerType("send-node", sendNode);
}
