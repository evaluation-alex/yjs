(function(){var n;n=function(n){var e,t;return t=new Peer({key:"h7nlefbgavh1tt9"}),e=function(){function n(n,e,o,i){var r;this.engine=n,this.HB=e,this.execution_listener=o,this.yatta=i,this.peer=t,this.connections=[],this.peer.on("connection",function(n){return function(e){return console.log("received conn"),n.addConnection(e)}}(this)),r=function(n){return function(e){return n.send(e)}}(this),this.execution_listener.push(r)}return n.prototype.connectToPeer=function(n){return this.addConnection(t.connect(n))},n.prototype.addConnection=function(n){var e;return this.connections.push(n),n.on("data",function(n){return function(e){if(console.log("data: "+e),null!=e.HB)return n.engine.applyOpsCheckDouble(e.HB);if(null!=e.op)return n.engine.applyOp(e.op);throw new Error("Can't parse this operation")}}(this)),e=function(e){return function(){return console.log("sending..."),n.send({HB:e.yatta.getHistoryBuffer()._encode()})}}(this),setTimeout(e,1e3)},n.prototype.send=function(n){var e,t,o,i,r;if(n.uid.creator===this.HB.getUserId()&&"string"!=typeof n.uid.op_number){for(console.log("trying to send ops"),i=this.connections,r=[],t=0,o=i.length;o>t;t++)e=i[t],console.log("sent op"),r.push(e.send({op:n}));return r}},n.prototype.receive=function(n){return n.uid.creator!==this.HB.getUserId()?this.engine.applyOp(n):void 0},n}(),t.on("open",function(t){return console.log(t),n(e,t)})},module.exports=n,"undefined"!=typeof window&&null!==window&&(window.createPeerJsConnector=n)}).call(this);
//# sourceMappingURL=../Connectors/PeerJsConnector.js.map