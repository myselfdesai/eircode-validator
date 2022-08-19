# eircode-validator

[![image](https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png)](npm)


**package to validate Ireland eircode**

## Introduction

package supports validating and formatting postcodes for the Ireland. The details of which postcodes are valid and which are the parts they consist of can be found at [wiki](https://en.wikipedia.org/wiki/List_of_Eircode_routing_areas_in_Ireland)

## Installation

To install eircode-validator, run this command in your terminal:

```
npm install eircode-validator
```
This is the preferred method to install eircode-validator, as it will always install the most recent stable release.

## From sources

The sources for eircode-validator can be downloaded from the Github repo.

You can clone the public repository:

```
git clone git://github.com/myselfdesai/eircode-validator
```

## Usage

To use eicode-validator in a project

### check if a postcode is validate 

it gives boolean result true or false

```
const validate = require("ideal-eircode").validate

validate("D16 W9CE") // true
validate("d16W9CE)   // true
validate("ty123")    // false

```

## Test
```
npm install 

```
In the roor of folder, execute:
```
npm test

```
