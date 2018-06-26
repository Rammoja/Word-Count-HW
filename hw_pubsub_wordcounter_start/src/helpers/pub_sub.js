const PubSub = {
  publish: function(channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    })
    document.dispatchEvent(event);
  },
  subcribe: function (channel, callback) {
    document.addEventListener(channel, callback);
  }
}

module.exports = PubSub;
