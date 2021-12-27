"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7481],{5736:function(e){e.exports=JSON.parse('{"functions":[{"name":"pseudoLocalize","desc":"Translates a line into pseudo text while maintaining params","params":[{"name":"line","desc":"The line to translate","lua_type":"string"}],"returns":[{"desc":"The translated line","lua_type":"string"}],"function_type":"static","source":{"line":15,"path":"src/pseudolocalize/src/Shared/PseudoLocalize.lua"}},{"name":"addToLocalizationTable","desc":"Parses a localization table and adds a pseudo localized locale to the table.","params":[{"name":"localizationTable","desc":"LocalizationTable to add to.","lua_type":"LocalizationTable"},{"name":"preferredLocaleId","desc":"Preferred locale to use. Defaults to \\"qlp-pls\\"","lua_type":"string?"},{"name":"preferredFromLocale","desc":"Preferred from locale. Defaults to \\"en-us\\"","lua_type":"string?"}],"returns":[{"desc":"The translated line","lua_type":"string"}],"function_type":"static","source":{"line":46,"path":"src/pseudolocalize/src/Shared/PseudoLocalize.lua"}}],"properties":[{"name":"PSEUDO_CHARACTER_MAP","desc":"Mapping of English characters to pseudo localized characters.","lua_type":"{ [string]: string }","source":{"line":72,"path":"src/pseudolocalize/src/Shared/PseudoLocalize.lua"}}],"types":[],"name":"PseudoLocalize","desc":"Pseudo localizes text. Useful for verifying translation without having\\nactual translations available","source":{"line":7,"path":"src/pseudolocalize/src/Shared/PseudoLocalize.lua"}}')}}]);