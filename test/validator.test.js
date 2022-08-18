const valid = require("eircode-validator")

test.each`
    postcode
    ${'d15w9CE'}
    ${'D6wW5rT'}
    ${'D6w W5rT'}
`('check eircode valid TRUE $postcode', ({postcode}) => {
    expect(valid.validate(postcode)).toBeTruthy();
});



test.each`
    postcode
    ${'115W5RT'}
    ${'qer2'}
    ${'2221'}
`('check eircode valid TRUE $postcode', ({postcode}) => {
    expect(valid.validate(postcode)).toBeFalsy()
});
