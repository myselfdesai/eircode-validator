var fs = require('fs');
let routing_obj = require('./keys');

function is_routing_key_validate (routing_key) {
    if(routing_key in routing_obj){
        return true;
    }else{
        return false;
    }
}

module.exports = {is_routing_key_validate};
