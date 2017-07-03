var axios = require('axios')

var DecemberAPI = function (opts) {
  this.api_endpoint = opts.api_endpoint || 'https://december-bot.herokuapp.com/api/v0/broadcast'
  this.channel_id = opts.channel_id
  this.channel_secret = opts.channel_secret

  if (!this.channel_id || !this.channel_secret) {
    throw new Error('Provide valid channel id and channel secret')
  }
}

DecemberAPI.prototype.broadcast = function (data) {
  var ref = this

  return axios
  .post(ref.api_endpoint, {
    channel_id: ref.channel_id,
    channel_secret: ref.channel_secret,
    data: data
  })
}

module.exports = DecemberAPI
