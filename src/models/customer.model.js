const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    cid:{
        type:Number,
        required:true
    },
    
    cpan:{
        type:Number,
        required:true
    },
    cadhar:{
        type:Number,
        required:true
    },
    cdob:{
        type:Date,
        required:true
    },
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('customer', UserSchema);