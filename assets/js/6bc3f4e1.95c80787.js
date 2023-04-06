"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67315],{30784:e=>{e.exports=JSON.parse('{"functions":[{"name":"toBrio","desc":"Takes a result and converts it to a brio if it is not one.","params":[],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<T> | T>) -> Observable<Brio<T>>"}],"function_type":"static","source":{"line":24,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"completeOnDeath","desc":"Completes the observable on death","params":[{"name":"brio","desc":"","lua_type":"Brio"},{"name":"observable","desc":"","lua_type":"Observable<T>"}],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"static","source":{"line":41,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"emitWhileAllDead","desc":"Whenever all returned brios are dead, emits this value wrapped\\nin a brio.","params":[{"name":"valueToEmitWhileAllDead","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<U>>) -> Observable<Brio<U | T>>"}],"function_type":"static","source":{"line":69,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"reduceToAliveList","desc":"This can\'t be cheap. Consider deeply if you want this or not.","params":[{"name":"selectFromBrio","desc":"","lua_type":"((value: T) -> U)?"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<T>>) -> Observable<Brio{U}>"}],"function_type":"static","source":{"line":153,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"reemitLastBrioOnDeath","desc":"Whenever the last brio dies, reemit it as a dead brio","params":[],"returns":[{"desc":"","lua_type":"(source Observable<Brio<T>>) -> Observable<Brio<T>>"}],"function_type":"static","source":{"line":252,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"where","desc":"Unpacks the brio, and then repacks it. Ignored items\\nstill invalidate the previous brio","params":[{"name":"predicate","desc":"","lua_type":"(T) -> boolean"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<T>>) -> Observable<Brio<T>>"}],"function_type":"static","since":"3.6.0","source":{"line":299,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"filter","desc":"Same as [RxBrioUtils.where]. Here to keep backwards compatability.","params":[{"name":"predicate","desc":"","lua_type":"(T) -> boolean"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<T>>) -> Observable<Brio<T>>"}],"function_type":"static","deprecated":{"version":"3.6.0","desc":"This method does not wrap the resulting value in a Brio, which can sometimes lead to leaks."},"source":{"line":330,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"combineLatest","desc":"Flattens all the brios in one brio and combines them. Note that this method leads to\\ngaps in the lifetime of the brio.","params":[{"name":"observables","desc":"","lua_type":"{ [any]: Observable<Brio<T>> | Observable<T> | T }"}],"returns":[{"desc":"","lua_type":"Observable<Brio<{ [any]: T }>>"}],"function_type":"static","deprecated":{"version":"3.6.0","desc":"This method does not wrap the resulting value in a Brio, which can sometimes lead to leaks."},"source":{"line":340,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"flatCombineLatestBrio","desc":"Flattens all the brios in one brio and combines them, and then switches it to\\na brio so only the last state is valid.","params":[{"name":"observables","desc":"","lua_type":"{ [any]: Observable<Brio<T>> | Observable<T> | T }"},{"name":"filter","desc":"","lua_type":"function | nil"}],"returns":[{"desc":"","lua_type":"Observable<Brio<{ [any]: T }>>"}],"function_type":"static","source":{"line":360,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"flatMap","desc":"Flat map equivalent for brios. The resulting observables will\\nbe disconnected at the end of the brio.","params":[{"name":"project","desc":"","lua_type":"(value: TBrio) -> TProject"},{"name":"resultSelector","desc":"","lua_type":"((initial TBrio, value: TProject) -> TResult)?"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<TBrio>> -> Observable<TResult>)"}],"function_type":"static","deprecated":{"version":"3.6.0","desc":"This method does not wrap the resulting value in a Brio, which can sometimes lead to leaks."},"source":{"line":379,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"flatMapBrio","desc":"Flat map equivalent for brios. The resulting observables will\\nbe disconnected at the end of the brio.\\n\\nLike [RxBrioUtils.flatMap], but emitted values are wrapped in brios.\\nThe lifetime of this brio is limited by the lifetime of the\\ninput brios, which are unwrapped and repackaged.","params":[{"name":"project","desc":"","lua_type":"(value: TBrio) -> TProject | Brio<TProject>"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<TBrio>> -> Observable<Brio<TResult>>)"}],"function_type":"static","since":"3.6.0","source":{"line":399,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"switchMap","desc":"Switch map but for brios. The resulting observable will be\\ndisconnected on the end of the brio\'s life.","params":[{"name":"project","desc":"","lua_type":"(value: TBrio) -> TProject"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<TBrio>>) -> Observable<TResult>"}],"function_type":"static","deprecated":{"version":"3.6.0","desc":"This method does not wrap the resulting value in a Brio, which can sometimes lead to leaks."},"source":{"line":411,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"switchMapBrio","desc":"Switch map but for brios. The resulting observable will be\\ndisconnected on the end of the brio\'s life.\\n\\nLike [RxBrioUtils.switchMap] but emitted values are wrapped in brios.\\nThe lifetime of this brio is limited by the lifetime of the\\ninput brios, which are unwrapped and repackaged.","params":[{"name":"project","desc":"","lua_type":"(value: TBrio) -> TProject | Brio<TProject>"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<TBrio>>) -> Observable<Brio<TResult>>"}],"function_type":"static","since":"3.6.0","source":{"line":431,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"flatCombineLatest","desc":"Works line combineLatest, but allow the transformation of a brio into an observable\\nthat emits the value, and then nil, on death.\\n\\nThe issue here is this:\\n\\n1. Resources are found with combineLatest()\\n2. One resource dies\\n3. All resources are invalidated\\n4. We still wanted to be able to use most of the resources\\n\\nWith this method we are able to do this, as we\'ll re-emit a table with all resoruces\\nexcept the invalidated one.","params":[{"name":"observables","desc":"","lua_type":"{ [any]: Observable<Brio<T>> | Observable<T> | T }"}],"returns":[{"desc":"","lua_type":"Observable<{ [any]: T? }>"}],"function_type":"static","since":"3.6.0","source":{"line":455,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"mapBrio","desc":"Takes in a brio and returns an observable that emits the brio, and then completes\\non death.","params":[{"name":"project","desc":"","lua_type":"(value: TBrio) -> TProject"}],"returns":[{"desc":"","lua_type":"(brio<TBrio>) -> TProject"}],"function_type":"static","deprecated":{"version":"3.6.0","desc":"This method does not wrap the resulting value in a Brio, which can sometimes lead to leaks."},"source":{"line":478,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"prepend","desc":"Prepends the value onto the emitted brio","params":[{"name":"...","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<U>>) -> Observable<Brio<U | T>>"}],"function_type":"static","since":"3.6.0","source":{"line":503,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"extend","desc":"Extends the value onto the emitted brio","params":[{"name":"...","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<U>>) -> Observable<Brio<U | T>>"}],"function_type":"static","since":"3.6.0","source":{"line":519,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"map","desc":"Maps the input brios to the output observables","params":[{"name":"project","desc":"","lua_type":"project (Brio<T> | T) -> Brio<U> | U"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<T> | T>) -> Observable<Brio<U>>"}],"function_type":"static","since":"3.6.0","source":{"line":535,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"mapBrioBrio","desc":"Takes in a brio and returns an observable that emits the brio, and then completes\\non death.","params":[{"name":"project","desc":"","lua_type":"(value: TBrio) -> TProject | Brio<TProject>"}],"returns":[{"desc":"","lua_type":"(Brio<TBrio>) -> Brio<TProject>"}],"function_type":"static","since":"3.6.0","source":{"line":614,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"toEmitOnDeathObservable","desc":"Transforms the brio into an observable that emits the initial value of the brio, and then another value on death","params":[{"name":"brio","desc":"","lua_type":"Brio<T> | T"},{"name":"emitOnDeathValue","desc":"","lua_type":"U"}],"returns":[{"desc":"","lua_type":"Observable<T | U>"}],"function_type":"static","source":{"line":639,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"mapBrioToEmitOnDeathObservable","desc":"Returns a mapping function that emits the given value.","params":[{"name":"emitOnDeathValue","desc":"","lua_type":"U"}],"returns":[{"desc":"","lua_type":"(brio: Brio<T> | T) -> Observable<T | U>"}],"function_type":"static","source":{"line":664,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"emitOnDeath","desc":"Takes in an observable of brios and returns an observable of the inner values that will also output\\nnil if there is no other value for the brio.","params":[{"name":"emitOnDeathValue","desc":"","lua_type":"U"}],"returns":[{"desc":"","lua_type":"(source: Observable<Brio<T> | T>) -> Observable<T | U>"}],"function_type":"static","source":{"line":677,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"flattenToValueAndNil","desc":"Flattens the observable to nil and the value","params":[{"name":"source","desc":"","lua_type":"Observable<Brio<T> | T>"}],"returns":[{"desc":"","lua_type":"T | nil"}],"function_type":"static","source":{"line":689,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"onlyLastBrioSurvives","desc":"Ensures only the last brio survives.","params":[],"returns":[{"desc":"","lua_type":"(source Observable<Brio<T>>) -> Observable<Brio<T>>"}],"function_type":"static","source":{"line":696,"path":"src/brio/src/Shared/RxBrioUtils.lua"}},{"name":"switchToBrio","desc":"Switches the result to a brio, and ensures only the last brio lives.","params":[],"returns":[{"desc":"","lua_type":"(source: Observable<T | Brio<T>>) -> Observable<Brio<T>>"}],"function_type":"static","since":"3.6.0","source":{"line":728,"path":"src/brio/src/Shared/RxBrioUtils.lua"}}],"properties":[],"types":[],"name":"RxBrioUtils","desc":"Utility functions involving brios and rx. Brios encapsulate the lifetime of resources,\\nwhich could be expired by the time a subscription occurs. These functions allow us to\\nmanipulate the state of these at a higher order.","source":{"line":8,"path":"src/brio/src/Shared/RxBrioUtils.lua"}}')}}]);