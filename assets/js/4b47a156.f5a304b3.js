"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22320],{38791:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Helper to observe state for the game product service","params":[{"name":"playerProductManagerBinder","desc":"","lua_type":"Binder<PlayerProductManager>"}],"returns":[],"function_type":"static","source":{"line":27,"path":"src/gameproductservice/src/Shared/Helpers/GameProductServiceHelper.lua"}},{"name":"HasPlayerPurchasedThisSession","desc":"Returns true if item has been purchased this session","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"assetType","desc":"","lua_type":"GameConfigAssetType"},{"name":"idOrKey","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":43,"path":"src/gameproductservice/src/Shared/Helpers/GameProductServiceHelper.lua"}},{"name":"PromisePromptPurchase","desc":"Prompts the user to purchase the asset, and returns true if purchased","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"assetType","desc":"","lua_type":"GameConfigAssetType"},{"name":"idOrKey","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":66,"path":"src/gameproductservice/src/Shared/Helpers/GameProductServiceHelper.lua"}},{"name":"PromisePlayerOwnership","desc":"Returns true if item has been purchased this session","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"assetType","desc":"","lua_type":"GameConfigAssetType"},{"name":"idOrKey","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":86,"path":"src/gameproductservice/src/Shared/Helpers/GameProductServiceHelper.lua"}},{"name":"PromiseIsOwnable","desc":"Returns true if item has been purchased this session","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"assetType","desc":"","lua_type":"GameConfigAssetType"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":105,"path":"src/gameproductservice/src/Shared/Helpers/GameProductServiceHelper.lua"}},{"name":"PromisePlayerIsPromptOpen","desc":"Promises the player prompt as opened","params":[{"name":"player","desc":"","lua_type":"Player"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":121,"path":"src/gameproductservice/src/Shared/Helpers/GameProductServiceHelper.lua"}},{"name":"ObservePlayerOwnership","desc":"Observes player ownership","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"assetType","desc":"","lua_type":"GameConfigAssetType"},{"name":"idOrKey","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":137,"path":"src/gameproductservice/src/Shared/Helpers/GameProductServiceHelper.lua"}},{"name":"ObservePlayerAssetPurchased","desc":"Fires when the specified player purchases an asset","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"assetType","desc":"","lua_type":"GameConfigAssetType"},{"name":"idOrKey","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"Observable<>"}],"function_type":"method","source":{"line":161,"path":"src/gameproductservice/src/Shared/Helpers/GameProductServiceHelper.lua"}},{"name":"ObserveAssetPurchased","desc":"Fires when any player purchases an asset","params":[{"name":"assetType","desc":"","lua_type":"GameConfigAssetType"},{"name":"idOrKey","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"Observable<Player>"}],"function_type":"method","source":{"line":185,"path":"src/gameproductservice/src/Shared/Helpers/GameProductServiceHelper.lua"}},{"name":"PromisePlayerOwnershipOrPrompt","desc":"Checks if the asset is ownable and if it is, checks player ownership. Otherwise, it checks if the asset\\nhas been purchased this session. If the asset has not been purchased this session it prompts the user to\\npurchase the item.","params":[{"name":"player","desc":"","lua_type":"Player"},{"name":"assetType","desc":"","lua_type":"GameConfigAssetType"},{"name":"idOrKey","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":223,"path":"src/gameproductservice/src/Shared/Helpers/GameProductServiceHelper.lua"}}],"properties":[],"types":[],"name":"GameProductServiceHelper","desc":"Helper that is used for each game product service. See [GameProductService].","source":{"line":6,"path":"src/gameproductservice/src/Shared/Helpers/GameProductServiceHelper.lua"}}')}}]);