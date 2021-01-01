/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./sermon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.SermonClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.SermonPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetSermonRequest,
 *   !proto.GetSermonResponse>}
 */
const methodDescriptor_Sermon_GetSermon = new grpc.web.MethodDescriptor(
  '/Sermon/GetSermon',
  grpc.web.MethodType.UNARY,
  proto.GetSermonRequest,
  proto.GetSermonResponse,
  /**
   * @param {!proto.GetSermonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetSermonResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetSermonRequest,
 *   !proto.GetSermonResponse>}
 */
const methodInfo_Sermon_GetSermon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetSermonResponse,
  /**
   * @param {!proto.GetSermonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetSermonResponse.deserializeBinary
);


/**
 * @param {!proto.GetSermonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetSermonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetSermonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SermonClient.prototype.getSermon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Sermon/GetSermon',
      request,
      metadata || {},
      methodDescriptor_Sermon_GetSermon,
      callback);
};


/**
 * @param {!proto.GetSermonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetSermonResponse>}
 *     Promise that resolves to the response
 */
proto.SermonPromiseClient.prototype.getSermon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Sermon/GetSermon',
      request,
      metadata || {},
      methodDescriptor_Sermon_GetSermon);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetAllSermonsRequest,
 *   !proto.GetAllSermonsResponse>}
 */
const methodDescriptor_Sermon_GetAllSermons = new grpc.web.MethodDescriptor(
  '/Sermon/GetAllSermons',
  grpc.web.MethodType.UNARY,
  proto.GetAllSermonsRequest,
  proto.GetAllSermonsResponse,
  /**
   * @param {!proto.GetAllSermonsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllSermonsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetAllSermonsRequest,
 *   !proto.GetAllSermonsResponse>}
 */
const methodInfo_Sermon_GetAllSermons = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetAllSermonsResponse,
  /**
   * @param {!proto.GetAllSermonsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetAllSermonsResponse.deserializeBinary
);


/**
 * @param {!proto.GetAllSermonsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetAllSermonsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetAllSermonsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SermonClient.prototype.getAllSermons =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Sermon/GetAllSermons',
      request,
      metadata || {},
      methodDescriptor_Sermon_GetAllSermons,
      callback);
};


/**
 * @param {!proto.GetAllSermonsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetAllSermonsResponse>}
 *     Promise that resolves to the response
 */
proto.SermonPromiseClient.prototype.getAllSermons =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Sermon/GetAllSermons',
      request,
      metadata || {},
      methodDescriptor_Sermon_GetAllSermons);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateSermonRequest,
 *   !proto.CreateSermonResponse>}
 */
const methodDescriptor_Sermon_CreateSermon = new grpc.web.MethodDescriptor(
  '/Sermon/CreateSermon',
  grpc.web.MethodType.UNARY,
  proto.CreateSermonRequest,
  proto.CreateSermonResponse,
  /**
   * @param {!proto.CreateSermonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateSermonResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateSermonRequest,
 *   !proto.CreateSermonResponse>}
 */
const methodInfo_Sermon_CreateSermon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CreateSermonResponse,
  /**
   * @param {!proto.CreateSermonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CreateSermonResponse.deserializeBinary
);


/**
 * @param {!proto.CreateSermonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CreateSermonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CreateSermonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SermonClient.prototype.createSermon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Sermon/CreateSermon',
      request,
      metadata || {},
      methodDescriptor_Sermon_CreateSermon,
      callback);
};


/**
 * @param {!proto.CreateSermonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CreateSermonResponse>}
 *     Promise that resolves to the response
 */
proto.SermonPromiseClient.prototype.createSermon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Sermon/CreateSermon',
      request,
      metadata || {},
      methodDescriptor_Sermon_CreateSermon);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DeleteSermonRequest,
 *   !proto.Empty>}
 */
const methodDescriptor_Sermon_DeleteSermon = new grpc.web.MethodDescriptor(
  '/Sermon/DeleteSermon',
  grpc.web.MethodType.UNARY,
  proto.DeleteSermonRequest,
  proto.Empty,
  /**
   * @param {!proto.DeleteSermonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DeleteSermonRequest,
 *   !proto.Empty>}
 */
const methodInfo_Sermon_DeleteSermon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Empty,
  /**
   * @param {!proto.DeleteSermonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.DeleteSermonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SermonClient.prototype.deleteSermon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Sermon/DeleteSermon',
      request,
      metadata || {},
      methodDescriptor_Sermon_DeleteSermon,
      callback);
};


/**
 * @param {!proto.DeleteSermonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     Promise that resolves to the response
 */
proto.SermonPromiseClient.prototype.deleteSermon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Sermon/DeleteSermon',
      request,
      metadata || {},
      methodDescriptor_Sermon_DeleteSermon);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdateSermonRequest,
 *   !proto.UpdateSermonResponse>}
 */
const methodDescriptor_Sermon_UpdateSermon = new grpc.web.MethodDescriptor(
  '/Sermon/UpdateSermon',
  grpc.web.MethodType.UNARY,
  proto.UpdateSermonRequest,
  proto.UpdateSermonResponse,
  /**
   * @param {!proto.UpdateSermonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateSermonResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdateSermonRequest,
 *   !proto.UpdateSermonResponse>}
 */
const methodInfo_Sermon_UpdateSermon = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdateSermonResponse,
  /**
   * @param {!proto.UpdateSermonRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdateSermonResponse.deserializeBinary
);


/**
 * @param {!proto.UpdateSermonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdateSermonResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdateSermonResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SermonClient.prototype.updateSermon =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Sermon/UpdateSermon',
      request,
      metadata || {},
      methodDescriptor_Sermon_UpdateSermon,
      callback);
};


/**
 * @param {!proto.UpdateSermonRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdateSermonResponse>}
 *     Promise that resolves to the response
 */
proto.SermonPromiseClient.prototype.updateSermon =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Sermon/UpdateSermon',
      request,
      metadata || {},
      methodDescriptor_Sermon_UpdateSermon);
};


module.exports = proto;

