/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/*eslint-disable*/
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('snet_zeta36_chess_alpha_zero.Input', null, global);
goog.exportSymbol('snet_zeta36_chess_alpha_zero.Output', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
snet_zeta36_chess_alpha_zero.Input = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_zeta36_chess_alpha_zero.Input, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_zeta36_chess_alpha_zero.Input.displayName = 'snet_zeta36_chess_alpha_zero.Input';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_zeta36_chess_alpha_zero.Input.prototype.toObject = function(opt_includeInstance) {
  return snet_zeta36_chess_alpha_zero.Input.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_zeta36_chess_alpha_zero.Input} msg The msg instance to transform.
 * @return {!Object}
 */
snet_zeta36_chess_alpha_zero.Input.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: msg.getUid(),
    move: msg.getMove(),
    cmd: msg.getCmd()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!snet_zeta36_chess_alpha_zero.Input}
 */
snet_zeta36_chess_alpha_zero.Input.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_zeta36_chess_alpha_zero.Input;
  return snet_zeta36_chess_alpha_zero.Input.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_zeta36_chess_alpha_zero.Input} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_zeta36_chess_alpha_zero.Input}
 */
snet_zeta36_chess_alpha_zero.Input.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMove(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCmd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_zeta36_chess_alpha_zero.Input} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_zeta36_chess_alpha_zero.Input.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_zeta36_chess_alpha_zero.Input.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_zeta36_chess_alpha_zero.Input.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getMove();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getCmd();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_zeta36_chess_alpha_zero.Input} The clone.
 */
snet_zeta36_chess_alpha_zero.Input.prototype.cloneMessage = function() {
  return /** @type {!snet_zeta36_chess_alpha_zero.Input} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string uid = 1;
 * @return {string}
 */
snet_zeta36_chess_alpha_zero.Input.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
snet_zeta36_chess_alpha_zero.Input.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string move = 2;
 * @return {string}
 */
snet_zeta36_chess_alpha_zero.Input.prototype.getMove = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
snet_zeta36_chess_alpha_zero.Input.prototype.setMove = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string cmd = 3;
 * @return {string}
 */
snet_zeta36_chess_alpha_zero.Input.prototype.getCmd = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
snet_zeta36_chess_alpha_zero.Input.prototype.setCmd = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
snet_zeta36_chess_alpha_zero.Output = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_zeta36_chess_alpha_zero.Output, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_zeta36_chess_alpha_zero.Output.displayName = 'snet_zeta36_chess_alpha_zero.Output';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
snet_zeta36_chess_alpha_zero.Output.prototype.toObject = function(opt_includeInstance) {
  return snet_zeta36_chess_alpha_zero.Output.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_zeta36_chess_alpha_zero.Output} msg The msg instance to transform.
 * @return {!Object}
 */
snet_zeta36_chess_alpha_zero.Output.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: msg.getUid(),
    board: msg.getBoard(),
    status: msg.getStatus()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!snet_zeta36_chess_alpha_zero.Output}
 */
snet_zeta36_chess_alpha_zero.Output.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_zeta36_chess_alpha_zero.Output;
  return snet_zeta36_chess_alpha_zero.Output.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_zeta36_chess_alpha_zero.Output} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_zeta36_chess_alpha_zero.Output}
 */
snet_zeta36_chess_alpha_zero.Output.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBoard(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_zeta36_chess_alpha_zero.Output} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_zeta36_chess_alpha_zero.Output.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_zeta36_chess_alpha_zero.Output.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_zeta36_chess_alpha_zero.Output.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getBoard();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_zeta36_chess_alpha_zero.Output} The clone.
 */
snet_zeta36_chess_alpha_zero.Output.prototype.cloneMessage = function() {
  return /** @type {!snet_zeta36_chess_alpha_zero.Output} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string uid = 1;
 * @return {string}
 */
snet_zeta36_chess_alpha_zero.Output.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
snet_zeta36_chess_alpha_zero.Output.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string board = 2;
 * @return {string}
 */
snet_zeta36_chess_alpha_zero.Output.prototype.getBoard = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
snet_zeta36_chess_alpha_zero.Output.prototype.setBoard = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
snet_zeta36_chess_alpha_zero.Output.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
snet_zeta36_chess_alpha_zero.Output.prototype.setStatus = function(value) {
  jspb.Message.setField(this, 3, value);
};


goog.object.extend(exports, snet_zeta36_chess_alpha_zero);