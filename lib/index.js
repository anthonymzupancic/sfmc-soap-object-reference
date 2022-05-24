module.exports.getProperties = (soapObject) => {
    try {
        return require(`./definitions/${soapObject}/retreiveable.json`)

    } catch (err) {
        return {
            status: 'error',
            error: err.message
        }
    }
}

module.exports.getDefinition = (soapObject) => {
    try {
        return require(`./definitions/${soapObject}/definition.json`)
    } catch (err) {
        return {
            status: 'error',
            error: err.message
        }
    }
}
