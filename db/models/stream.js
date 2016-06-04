var db = require('../config');

var Stream = bookshelf.Model.extend({
  tableName: 'streams',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(User);
  },
  topic: function() {
    return this.belongsTo(Topic);
  }
});