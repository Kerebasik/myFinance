enum ServerStatus {
    Success = 200,
    NotFound = 404,
    BadRequest = 400,
    ServerError = 500
}

enum ServerMessage {
    ServerError = "Server error"
}

export {ServerStatus, ServerMessage};