const routing = require("../routing-key/index.js");

function check_regex(postcode){
    const re = new RegExp("^[A-Za-z]{1}([0-9]{2}|[0-9]{1}(W|w))([A-Za-z0-9]{4})$")
    return re.test(postcode)
}

function validate (postcode) {
    let code = postcode.replaceAll(/\s/g,'').toUpperCase();
    if(check_regex(code)){
        // now check routing key ie. validate 3 character for starting of postcode
        return routing.is_routing_key_validate(code.substring(0, 3))
    }else{
        return false
    }
}


module.exports = validate;