var db = require('../config');

var Video = db.Model.extend({
  tableName: 'videos',
  user: function() {
    return this.belongsTo(User);
  },
  topic: function() {
    return this.belongsTo(Topic);
  }
});