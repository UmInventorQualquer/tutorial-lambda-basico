const AWS = require('aws-sdk')
const lambda = new AWS.Lambda()

// Handler
exports.handler = async function(event, context) {
    try {
        let accountSettings = await getAccountSettings()
        return formatResponse(serialize(accountSettings.AccountUsage))
    } catch(error) {
        return formatError(error)
    }
}

const formatResponse = function(body){
    const response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "isBase64Encoded": false,
        "body": body
    }
    return response
}

const formatError = function(error){
    const response = {
        "statusCode": error.statusCode,
        "headers": {
            "Content-Type": "text/plain",
            "x-amzn-ErrorType": error.code
        },
        "isBase64Encoded": false,
        "body": error.code + ": " + error.message
    }
    return response
}

const getAccountSettings = function(){
    return lambda.getAccountSettings().promise()
}

const serialize = function(object) {
    return JSON.stringify(object, null, 2)
}
