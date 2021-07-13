import * as MESSAGES from "./data/es_messages.js";

export { MessageText };

function MessageText(code, value = ""){
    return MESSAGES.messages[code](value);
}