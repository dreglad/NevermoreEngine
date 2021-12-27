"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11338],{50435:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new Subscription","params":[{"name":"fireCallback","desc":"","lua_type":"function?"},{"name":"failCallback","desc":"","lua_type":"function?"},{"name":"completeCallback","desc":"","lua_type":"function?"},{"name":"onSubscribe","desc":"","lua_type":"() -> MaidTask"}],"returns":[{"desc":"","lua_type":"Subscription"}],"function_type":"static","source":{"line":41,"path":"src/rx/src/Shared/Subscription.lua"}},{"name":"Fire","desc":"Fires the subscription","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":60,"path":"src/rx/src/Shared/Subscription.lua"}},{"name":"Fail","desc":"Fails the subscription, preventing anything else from emitting.","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":73,"path":"src/rx/src/Shared/Subscription.lua"}},{"name":"GetFireFailComplete","desc":"Returns a tuple of fire, fail and complete functions which\\ncan be chained into the the next subscription.\\n\\n```lua\\nreturn function(source)\\n\\treturn Observable.new(function(sub)\\n\\t\\tsub:Fire(\\"hi\\")\\n\\n\\t\\treturn source:Subscribe(sub:GetFireFailComplete())\\n\\tend)\\nend\\n```","params":[],"returns":[{"desc":"","lua_type":"function"},{"desc":"","lua_type":"function"},{"desc":"","lua_type":"function"}],"function_type":"method","source":{"line":106,"path":"src/rx/src/Shared/Subscription.lua"}},{"name":"GetFailComplete","desc":"Returns a tuple of fail and complete functions which\\ncan be chained into the the next subscription.\\n\\n```lua\\nreturn function(source)\\n\\treturn Observable.new(function(sub)\\n\\t\\treturn source:Subscribe(function(result)\\n\\t\\t\\tsub:Fire(tostring(result))\\n\\t\\tend, sub:GetFailComplete()) -- Reuse is easy here!\\n\\tend)\\nend\\n```","params":[],"returns":[{"desc":"","lua_type":"function"},{"desc":"","lua_type":"function"}],"function_type":"method","source":{"line":133,"path":"src/rx/src/Shared/Subscription.lua"}},{"name":"Complete","desc":"Completes the subscription, preventing anything else from being\\nemitted.","params":[],"returns":[],"function_type":"method","source":{"line":145,"path":"src/rx/src/Shared/Subscription.lua"}},{"name":"Destroy","desc":"Cleans up the subscription\\n\\n:::tip\\nThis will be invoked by the Observable automatically, and should not\\nbe called within the usage of a subscription.\\n:::","params":[],"returns":[],"function_type":"method","source":{"line":185,"path":"src/rx/src/Shared/Subscription.lua"}}],"properties":[],"types":[],"name":"Subscription","desc":"Subscriptions are used in the callback for an [Observable](/api/Observable). Standard usage\\nis as follows.\\n\\n```lua\\n-- Constucts an observable which will emit a, b, c via a subscription\\nObservable.new(function(sub)\\n\\tsub:Fire(\\"a\\")\\n\\tsub:Fire(\\"b\\")\\n\\tsub:Fire(\\"c\\")\\n\\tsub:Complete() -- ends stream\\nend)\\n```","source":{"line":16,"path":"src/rx/src/Shared/Subscription.lua"}}')}}]);