"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34090],{34238:o=>{o.exports=JSON.parse('{"functions":[{"name":"createBodyColorsData","desc":"Creates a new BodyColorsData","params":[{"name":"bodyColorsData","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"BodyColorsData"}],"function_type":"static","source":{"line":33,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"isBodyColorsData","desc":"Returns true if it\'s a body color data","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":44,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"fromSingleColor","desc":"Creates a new BodyColorsData from a single color","params":[{"name":"color3","desc":"","lua_type":"Color3"}],"returns":[{"desc":"","lua_type":"BodyColorsData"}],"function_type":"static","source":{"line":60,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"fromBodyColors","desc":"Creates a new BodyColorsData from a BodyColors instance","params":[{"name":"bodyColors","desc":"","lua_type":"BodyColors"}],"returns":[{"desc":"","lua_type":"BodyColorsData"}],"function_type":"static","source":{"line":79,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"isDataStoreSafeBodyColorsData","desc":"Returns true if the data is a datastore safe body color","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":97,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"toDataStoreSafeBodyColorsData","desc":"Gets a datastore safe version of body color","params":[{"name":"bodyColorsData","desc":"","lua_type":"BodyColorsData"}],"returns":[{"desc":"","lua_type":"DataStoreSafeBodyColorsData"}],"function_type":"static","source":{"line":112,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"fromHumanoidDescription","desc":"Constructs a BodyColorsData from a humanoidDescription","params":[{"name":"humanoidDescription","desc":"","lua_type":"HumanoidDescription"}],"returns":[{"desc":"","lua_type":"BodyColorsData"}],"function_type":"static","source":{"line":144,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"isSingleColor","desc":"Returns if the body colors data represents one solid color for all body parts.","params":[{"name":"bodyColorsData","desc":"","lua_type":"BodyColorsData"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":163,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"toBodyColors","desc":"Constructs a BodyColors from the bodyColorsData","params":[{"name":"bodyColorsData","desc":"","lua_type":"BodyColorsData"}],"returns":[{"desc":"","lua_type":"BodyColors"}],"function_type":"static","source":{"line":200,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"applyToBodyColors","desc":"Applies body colors to the actual body color property","params":[{"name":"bodyColorsData","desc":"","lua_type":"BodyColorsData"},{"name":"bodyColors","desc":"","lua_type":"BodyColors"}],"returns":[{"desc":"","lua_type":"BodyColors"}],"function_type":"static","source":{"line":216,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"fromAttributes","desc":"Extracts body colors from attributes","params":[{"name":"instance","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"BodyColorsData"}],"function_type":"static","source":{"line":250,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"setAttributes","desc":"Sets attributes to store body colors.","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"bodyColorsData","desc":"","lua_type":"BodyColorsData"}],"returns":[],"function_type":"static","source":{"line":276,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}},{"name":"applyToHumanoidDescription","desc":"Applies body colors to the actual body color property","params":[{"name":"bodyColorsData","desc":"","lua_type":"BodyColorsData"},{"name":"humanoidDescription","desc":"","lua_type":"HumanoidDescription"}],"returns":[{"desc":"","lua_type":"BodyColors"}],"function_type":"static","source":{"line":297,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}}],"properties":[],"types":[{"name":"BodyColorsData","desc":"Represents body colors data for a humanoid","fields":[{"name":"headColor","lua_type":"Color3","desc":""},{"name":"leftArmColor","lua_type":"Color3","desc":""},{"name":"leftLegColor","lua_type":"Color3","desc":""},{"name":"rightArmColor","lua_type":"Color3","desc":""},{"name":"rightLegColor","lua_type":"Color3","desc":""},{"name":"torsoColor","lua_type":"Color3","desc":""}],"source":{"line":27,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}}],"name":"BodyColorsDataUtils","desc":"Utility to transfer and manipulate body colors for a character","source":{"line":6,"path":"src/bodycolorsutils/src/Shared/BodyColorsDataUtils.lua"}}')}}]);