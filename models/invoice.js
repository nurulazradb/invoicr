var mongoose = require('mongoose');

// Invoice Schema
var invoiceSchema = mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    reference: 'Customer'
  },
  service: {
    type: String,
    require: true
  },
  price: {
    type: String
  },
  due: {
    type: String
  },
  status: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

var Invoice = module.exports = mongoose.model('Invoice', invoiceSchema);

// Get invoices
module.exports.getInvoices = function(callback, limit) {
  Invoice.find(callback).limit(limit).sort([['createdAt', 'descending']]);
}

// Get invoice
module.exports.getInvoiceById = function(id, callback) {
  Invoice.findById(id, callback);
}

// Add invoice
module.exports.addInvoice = function(invoice, callback) {
  var add = {
    customer: invoice.customer,
    service: invoice.service,
    price: invoice.price,
    due: invoice.due,
    status: invoice.status
  }
  Invoice.create(add, callback);
}

// Update invoice
module.exports.updateInvoice = function(id, invoice, options, callback) {
  var query = { _id: id };
  var update = {
    customer: invoice.customer,
    service: invoice.service,
    price: invoice.price,
    due: invoice.due,
    status: invoice.status
  }
  Invoice.findOneAndUpdate(id, update, options, callback);
}

// Remove invoice
module.exports.removeInvoice = function(id, callback) {
  var query = { _id: id };
  Invoice.remove(query, callback);
}
