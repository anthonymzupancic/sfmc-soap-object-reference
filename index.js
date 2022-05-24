module.exports.getProperties = (soapObject) => {
    //return require(`./${soapObject}/retreiveable.json`)
    return 'test response'
}

module.exports.getDefinition = (soapObject) => {
    return require(`./${soapObject}/retreiveable.json`)
}
