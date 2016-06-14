var express = require('express');
var router = express.Router();

// Get all invoices
router.get('/', function(req, res) {
  Invoice.getInvoices(function(err, invoices) {
    if (err) {
      res.send(err);
    }
    res.json(invoices);
  });
});

// Get single invoice
router.get('/:id', function(req, res) {
  Invoice.getInvoiceById(req.params.id, function(err, invoice) {
    if (err) res.send(err);
    res.json(invoice);
  })
})

// Add invoice
router.post('/', function(req, res) {
  var invoice = req.body;
  Invoice.addInvoice(invoice, function(err, invoice) {
    if (err) res.send(err);
    res.json(invoice);
  });
});

// Update invoice
router.put('/:id', function(req, res) {
  var id = req.params.id;
  var invoice = req.body;
  Invoice.updateInvoice(id, invoice, {}, function(err, invoice) {
    if (err) res.send(err);
    res.json(invoice);
  });
});

// Remove invoice
router.delete('/:id', function(req, res) {
  var id = req.params.id;
  Invoice.removeInvoice(id, function(err, invoice) {
    if (err) res.send(err);
    res.json(invoice)
  })
})

// Get all invoices for a single customer
router.get('/customer/:customer_id', function(req, res) {
  var customer_id = req.params.customer_id;
  Invoice.getCustomerInvoices(customer_id, function(err, invoice) {
    if (err) res.send(err);
    res.json(invoice);
  })
})

module.exports = router;
