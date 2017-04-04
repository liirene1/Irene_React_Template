var party = require('./models/party')
var twilio = require('twilio')

module.exports = {
  configure: function (app) {
    app.get('/parties/', function (req, res) {
      party.get(res)
    })

    app.post('/parties/', function (req, res) {
      party.create(req.body, res)
    })

    app.put('/parties/:id/', function (req, res) {
      party.update(req, res)
    })

    app.delete('/parties/:id/', function (req, res) {
      party.delete(req.params.id, res)
    })

    app.get('/textsms/:phone', function (req, res) {
      var client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

      client.sendMessage({
        to: req.params.phone,
        from: '13476522301',
        body: 'Your table will be ready soon. Please check in with host. Thank you! - IL Restaurants'
      })

      res.send({status: 0, message: 'text sent successfully'})
    })
  }
}
