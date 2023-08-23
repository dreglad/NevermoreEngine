"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46661],{27758:e=>{e.exports=JSON.parse('{"functions":[{"name":"observeLinkedBoundClassBrio","desc":"Observes a structure where a parent has object values with linked objects (for example), maybe\\nan AI has a list of linked objectvalue tasks to execute.","params":[{"name":"linkName","desc":"","lua_type":"string"},{"name":"parent","desc":"","lua_type":"Instance"},{"name":"binder","desc":"","lua_type":"Binder<T>"}],"returns":[{"desc":"","lua_type":"Observable<Brio<T>>"}],"function_type":"static","source":{"line":35,"path":"src/rxbinderutils/src/Shared/RxBinderUtils.lua"}},{"name":"observeChildrenBrio","desc":"Observes bound children classes.","params":[{"name":"binder","desc":"","lua_type":"Binder<T>"},{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<Brio<T>>"}],"function_type":"static","source":{"line":55,"path":"src/rxbinderutils/src/Shared/RxBinderUtils.lua"}},{"name":"observeBoundChildClassBrio","desc":"Observes bound children classes.","params":[{"name":"binder","desc":"","lua_type":"Binder<T>"},{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<Brio<T>>"}],"function_type":"static","source":{"line":77,"path":"src/rxbinderutils/src/Shared/RxBinderUtils.lua"}},{"name":"observeBoundParentClassBrio","desc":"Observes ainstance\'s parent class that is bound.","params":[{"name":"binder","desc":"","lua_type":"Binder<T>"},{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<Brio<T>>"}],"function_type":"static","source":{"line":87,"path":"src/rxbinderutils/src/Shared/RxBinderUtils.lua"}},{"name":"observeBoundChildClassesBrio","desc":"Observes all bound classes that hit that list of binders","params":[{"name":"binders","desc":"","lua_type":"{ Binder<T> }"},{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<Brio<T>>"}],"function_type":"static","source":{"line":111,"path":"src/rxbinderutils/src/Shared/RxBinderUtils.lua"}},{"name":"observeBoundClass","desc":"Observes a bound class on a given instance.","params":[{"name":"binder","desc":"","lua_type":"Binder<T>"},{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<T?>"}],"function_type":"static","source":{"line":130,"path":"src/rxbinderutils/src/Shared/RxBinderUtils.lua"}},{"name":"observeBoundClassBrio","desc":"Observes a bound class on a given instance.","params":[{"name":"binder","desc":"","lua_type":"Binder<T>"},{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<Brio<T>>"}],"function_type":"static","source":{"line":153,"path":"src/rxbinderutils/src/Shared/RxBinderUtils.lua"}},{"name":"observeBoundClassesBrio","desc":"Observes all bound classes for a given binder.","params":[{"name":"binders","desc":"","lua_type":"{ Binder<T> }"},{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<Brio<T>>"}],"function_type":"static","source":{"line":185,"path":"src/rxbinderutils/src/Shared/RxBinderUtils.lua"}},{"name":"observeAllBrio","desc":"Observes all instances bound to a given binder.","params":[{"name":"binder","desc":"","lua_type":"Binder"}],"returns":[{"desc":"","lua_type":"Observable<Brio<T>>"}],"function_type":"static","source":{"line":206,"path":"src/rxbinderutils/src/Shared/RxBinderUtils.lua"}}],"properties":[],"types":[],"name":"RxBinderUtils","desc":"Utility methods to observe bound objects on instances. This is what makes the Rx library with\\nbinders really good.\\n\\n:::info\\nUsing this API, you can query most game-state in very efficient ways, and react to the world\\nchanging in real-time. This makes programming streaming and other APIs really nice.\\n:::","source":{"line":12,"path":"src/rxbinderutils/src/Shared/RxBinderUtils.lua"}}')}}]);