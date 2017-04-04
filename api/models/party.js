var connection = require('../connection')

function Party () {
  this.get = function (res) {
    connection.acquire(function (err, con) {
      con.query('select * from parties', function (err, result) {
        con.release()
        res.send(result) // sends all
      })
    })
  }

  this.create = function (party, res) {
    connection.acquire(function (err, con) {
      con.query('insert into parties set ?', party, function (err, result) {
        con.release()
        if (err) {
          res.send({status: 1, message: err})
        } else {
          res.send({status: 0, message: 'created successfully'})
        }
      })
    })
  }

  this.update = function (req, res) {
    console.log('in update', req.params.id, req.body)
    connection.acquire(function (err, con) {
      con.query('update parties set ? where id = ?', [req.body, req.params.id], function (err, result) {
        con.release()
        if (err) {
          res.send({status: 1, message: 'update failed', error: err})
        } else {
          res.send({status: 0, message: 'updated successfully', result: result})
        }
      })
    })
  }

  this.delete = function (id, res) {
    connection.acquire(function (err, con) {
      con.query('delete from parties where id = ?', [id], function (err, result) {
        con.release()
        if (err) {
          res.send({status: 1, message: err})
        } else {
          res.send({status: 0, message: 'Deleted successfully'})
        }
      })
    })
  }
}

module.exports = new Party()
