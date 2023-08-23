"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1658],{40447:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new DataStoreWriter. In general, you will not use this API directly.","params":[{"name":"debugName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"DataStoreWriter"}],"function_type":"static","source":{"line":27,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}},{"name":"SetSaveDataSnapshot","desc":"Sets the ray data to write","params":[{"name":"saveDataSnapshot","desc":"","lua_type":"table | any"}],"returns":[],"function_type":"method","source":{"line":44,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}},{"name":"AddSubWriter","desc":"Adds a recursive child writer to use at the key `name`","params":[{"name":"name","desc":"","lua_type":"string"},{"name":"writer","desc":"","lua_type":"DataStoreWriter"}],"returns":[],"function_type":"method","source":{"line":83,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}},{"name":"GetWriter","desc":"Gets a sub writer","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"DataStoreWriter"}],"function_type":"method","source":{"line":97,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}},{"name":"ComputeDiffSnapshot","desc":"Merges the incoming data.\\n\\nWon\'t really perform a delete operation because we can\'t be sure if we were suppose to have reified this stuff or not.","params":[{"name":"incoming","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":110,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}},{"name":"SetUserIdList","desc":"Set of user ids to write with the data (only applies to top-level writer)","params":[{"name":"userIdList","desc":"","lua_type":"{ number }"}],"returns":[],"function_type":"method","source":{"line":189,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}},{"name":"GetUserIdList","desc":"User ids to associate with data","params":[],"returns":[{"desc":"","lua_type":"userIdList { number }"}],"function_type":"method","source":{"line":200,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}},{"name":"WriteMerge","desc":"Merges the new data into the original value","params":[{"name":"original","desc":"","lua_type":"any"}],"returns":[{"desc":"The original value","lua_type":"any"}],"function_type":"method","source":{"line":270,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}}],"properties":[],"types":[],"name":"DataStoreWriter","desc":"Captures a snapshot of data to write and then merges it with the original.","realm":["Server"],"source":{"line":6,"path":"src/datastore/src/Server/Modules/DataStoreWriter.lua"}}')}}]);