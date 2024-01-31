"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Utils/apiFeature.js":
/*!*****************************!*\
  !*** ./Utils/apiFeature.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ChechIfWalletConnected\": function() { return /* binding */ ChechIfWalletConnected; },\n/* harmony export */   \"connectWallet\": function() { return /* binding */ connectWallet; },\n/* harmony export */   \"connectingWithContract\": function() { return /* binding */ connectingWithContract; },\n/* harmony export */   \"converTime\": function() { return /* binding */ converTime; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Context_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Context/constants */ \"./Context/constants.js\");\n\n\n\n\n\nvar ChechIfWalletConnected = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n        var accounts, firstAccount, error;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    if (!window.ethereum) return [\n                        2,\n                        console.log(\"Install MateMask\")\n                    ];\n                    return [\n                        4,\n                        window.ethereum.request({\n                            method: \"eth_accounts\"\n                        })\n                    ];\n                case 1:\n                    accounts = _state.sent();\n                    firstAccount = accounts[0];\n                    return [\n                        2,\n                        firstAccount\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.log(error);\n                    return [\n                        3,\n                        3\n                    ];\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function ChechIfWalletConnected() {\n        return _ref.apply(this, arguments);\n    };\n}();\n_c = ChechIfWalletConnected;\nvar connectWallet = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n        var accounts, firstAccount, error;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    // if (!window.ethereum) return console.log(\"Install MateMask\");\n                    // const accounts = await window.ethereum.request({\n                    //   method: \"eth_requestAccounts\",\n                    // });\n                    if (!window.ethereum) return [\n                        2,\n                        console.log(\"Install MetaMask\")\n                    ];\n                    return [\n                        4,\n                        window.ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        })\n                    ];\n                case 1:\n                    accounts = _state.sent();\n                    firstAccount = accounts[0];\n                    return [\n                        2,\n                        firstAccount\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.log(error);\n                    return [\n                        3,\n                        3\n                    ];\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function connectWallet() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar fetchContract = function(signerOrProvider) {\n    return new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_Context_constants__WEBPACK_IMPORTED_MODULE_1__.ChatAppAddress, _Context_constants__WEBPACK_IMPORTED_MODULE_1__.ChatAppABI, signerOrProvider);\n};\nvar connectingWithContract = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n        var web3modal, connection, provider, signer, contract, error;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    web3modal = new (web3modal__WEBPACK_IMPORTED_MODULE_0___default())();\n                    return [\n                        4,\n                        web3modal.connect()\n                    ];\n                case 1:\n                    connection = _state.sent();\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.Web3Provider(connection);\n                    signer = provider.getSigner();\n                    contract = fetchContract(signer);\n                    return [\n                        2,\n                        contract\n                    ];\n                case 2:\n                    error = _state.sent();\n                    console.log(error);\n                    return [\n                        3,\n                        3\n                    ];\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function connectingWithContract() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar converTime = function(time) {\n    var newTime = new Date(time.toNumber());\n    var realTime = \"  \" + newTime.getDate() + \"/\" + (newTime.getMonth() + 1) + \"/\" + newTime.getFullYear() + newTime.getHours() + \":\" + newTime.getMinutes() + \":\" + newTime.getSeconds();\n    return realTime;\n};\nvar _c;\n$RefreshReg$(_c, \"ChechIfWalletConnected\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9VdGlscy9hcGlGZWF0dXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0M7QUFDRTtBQUVnQztBQUUzRCxJQUFNSSxzQkFBc0I7ZUFBRywrRkFBWTtZQUl4Q0MsUUFBUSxFQUlSQyxZQUFZLEVBRVhDLEtBQUs7Ozs7Ozs7Ozs7b0JBUlosSUFBSSxDQUFDQyxNQUFNLENBQUNDLFFBQVEsRUFBRTs7d0JBQU9DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO3NCQUFDO29CQUU1Qzs7d0JBQU1ILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDRyxPQUFPLENBQUM7NEJBQzdDQyxNQUFNLEVBQUUsY0FBYzt5QkFDdkIsQ0FBQztzQkFBQTs7b0JBRklSLFFBQVEsR0FBRyxhQUVmO29CQUVJQyxZQUFZLEdBQUdELFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakM7O3dCQUFPQyxZQUFZO3NCQUFDOztvQkFDYkMsS0FBSztvQkFDWkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7OztJQUV2QixDQUFDO29CQWJZSCxzQkFBc0I7OztHQWFsQyxDQUFDO0FBYldBLEtBQUFBLHNCQUFzQjtBQWU1QixJQUFNVSxhQUFhO2VBQUcsK0ZBQVk7WUFVL0JULFFBQVEsRUFHUkMsWUFBWSxFQUVYQyxLQUFLOzs7Ozs7Ozs7O29CQWJaLGdFQUFnRTtvQkFFaEUsbURBQW1EO29CQUNuRCxtQ0FBbUM7b0JBQ25DLE1BQU07b0JBRU4sSUFBSSxDQUFDQyxNQUFNLENBQUNDLFFBQVEsRUFBRTs7d0JBQU9DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO3NCQUFDO29CQUU1Qzs7d0JBQU1ILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDRyxPQUFPLENBQUM7NEJBQzdDQyxNQUFNLEVBQUUscUJBQXFCO3lCQUM5QixDQUFDO3NCQUFBOztvQkFGSVIsUUFBUSxHQUFHLGFBRWY7b0JBQ0lDLFlBQVksR0FBR0QsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQzs7d0JBQU9DLFlBQVk7c0JBQUM7O29CQUNiQyxLQUFLO29CQUNaRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0lBRXZCLENBQUM7b0JBbEJZTyxhQUFhOzs7R0FrQnpCLENBQUM7QUFFRixJQUFNQyxhQUFhLEdBQUcsU0FBQ0MsZ0JBQWdCO1dBQ3JDLElBQUloQixtREFBZSxDQUFDRSw4REFBYyxFQUFFQywwREFBVSxFQUFFYSxnQkFBZ0IsQ0FBQztDQUFBO0FBRTVELElBQU1FLHNCQUFzQjtlQUFHLCtGQUFZO1lBRXhDQyxTQUFTLEVBQ1RDLFVBQVUsRUFDVkMsUUFBUSxFQUNSQyxNQUFNLEVBQ05DLFFBQVEsRUFFUGhCLEtBQUs7Ozs7Ozs7Ozs7b0JBTk5ZLFNBQVMsR0FBRyxJQUFJbEIsa0RBQVMsRUFBRSxDQUFDO29CQUNmOzt3QkFBTWtCLFNBQVMsQ0FBQ0ssT0FBTyxFQUFFO3NCQUFBOztvQkFBdENKLFVBQVUsR0FBRyxhQUF5QjtvQkFDdENDLFFBQVEsR0FBRyxJQUFJckIsaUVBQTZCLENBQUNvQixVQUFVLENBQUMsQ0FBQztvQkFDekRFLE1BQU0sR0FBR0QsUUFBUSxDQUFDTSxTQUFTLEVBQUUsQ0FBQztvQkFDOUJKLFFBQVEsR0FBR1IsYUFBYSxDQUFDTyxNQUFNLENBQUMsQ0FBQztvQkFDdkM7O3dCQUFPQyxRQUFRO3NCQUFDOztvQkFDVGhCLEtBQUs7b0JBQ1pHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7SUFFdkIsQ0FBQztvQkFYWVcsc0JBQXNCOzs7R0FXbEMsQ0FBQztBQUVLLElBQU1VLFVBQVUsR0FBRyxTQUFDQyxJQUFJLEVBQUs7SUFDbEMsSUFBTUMsT0FBTyxHQUFHLElBQUlDLElBQUksQ0FBQ0YsSUFBSSxDQUFDRyxRQUFRLEVBQUUsQ0FBQztJQUV6QyxJQUFNQyxRQUFRLEdBQ1osSUFBSSxHQUNKSCxPQUFPLENBQUNJLE9BQU8sRUFBRSxHQUNqQixHQUFHLEdBQ0ZKLENBQUFBLE9BQU8sQ0FBQ0ssUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUN2QixHQUFHLEdBQ0hMLE9BQU8sQ0FBQ00sV0FBVyxFQUFFLEdBQ3JCTixPQUFPLENBQUNPLFFBQVEsRUFBRSxHQUNsQixHQUFHLEdBQ0hQLE9BQU8sQ0FBQ1EsVUFBVSxFQUFFLEdBQ3BCLEdBQUcsR0FDSFIsT0FBTyxDQUFDUyxVQUFVLEVBQUU7SUFFdEIsT0FBT04sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9VdGlscy9hcGlGZWF0dXJlLmpzPzdiMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcclxuXHJcbmltcG9ydCB7IENoYXRBcHBBZGRyZXNzLCBDaGF0QXBwQUJJIH0gZnJvbSBcIi4uL0NvbnRleHQvY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2hJZldhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKCF3aW5kb3cuZXRoZXJldW0pIHJldHVybiBjb25zb2xlLmxvZyhcIkluc3RhbGwgTWF0ZU1hc2tcIik7XHJcblxyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgIG1ldGhvZDogXCJldGhfYWNjb3VudHNcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0QWNjb3VudCA9IGFjY291bnRzWzBdO1xyXG4gICAgcmV0dXJuIGZpcnN0QWNjb3VudDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBpZiAoIXdpbmRvdy5ldGhlcmV1bSkgcmV0dXJuIGNvbnNvbGUubG9nKFwiSW5zdGFsbCBNYXRlTWFza1wiKTtcclxuXHJcbiAgICAvLyBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgIC8vICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGlmICghd2luZG93LmV0aGVyZXVtKSByZXR1cm4gY29uc29sZS5sb2coXCJJbnN0YWxsIE1ldGFNYXNrXCIpO1xyXG5cclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmaXJzdEFjY291bnQgPSBhY2NvdW50c1swXTtcclxuICAgIHJldHVybiBmaXJzdEFjY291bnQ7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaENvbnRyYWN0ID0gKHNpZ25lck9yUHJvdmlkZXIpID0+XHJcbiAgbmV3IGV0aGVycy5Db250cmFjdChDaGF0QXBwQWRkcmVzcywgQ2hhdEFwcEFCSSwgc2lnbmVyT3JQcm92aWRlcik7XHJcblxyXG5leHBvcnQgY29uc3QgY29ubmVjdGluZ1dpdGhDb250cmFjdCA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgd2ViM21vZGFsID0gbmV3IFdlYjNNb2RhbCgpO1xyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNtb2RhbC5jb25uZWN0KCk7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcclxuICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBmZXRjaENvbnRyYWN0KHNpZ25lcik7XHJcbiAgICByZXR1cm4gY29udHJhY3Q7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29udmVyVGltZSA9ICh0aW1lKSA9PiB7XHJcbiAgY29uc3QgbmV3VGltZSA9IG5ldyBEYXRlKHRpbWUudG9OdW1iZXIoKSk7XHJcblxyXG4gIGNvbnN0IHJlYWxUaW1lID1cclxuICAgIFwiICBcIiArXHJcbiAgICBuZXdUaW1lLmdldERhdGUoKSArXHJcbiAgICBcIi9cIiArXHJcbiAgICAobmV3VGltZS5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgXCIvXCIgK1xyXG4gICAgbmV3VGltZS5nZXRGdWxsWWVhcigpK1xyXG4gICAgbmV3VGltZS5nZXRIb3VycygpICtcclxuICAgIFwiOlwiICtcclxuICAgIG5ld1RpbWUuZ2V0TWludXRlcygpICtcclxuICAgIFwiOlwiICtcclxuICAgIG5ld1RpbWUuZ2V0U2Vjb25kcygpO1xyXG5cclxuICByZXR1cm4gcmVhbFRpbWU7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJldGhlcnMiLCJXZWIzTW9kYWwiLCJDaGF0QXBwQWRkcmVzcyIsIkNoYXRBcHBBQkkiLCJDaGVjaElmV2FsbGV0Q29ubmVjdGVkIiwiYWNjb3VudHMiLCJmaXJzdEFjY291bnQiLCJlcnJvciIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25uZWN0V2FsbGV0IiwiZmV0Y2hDb250cmFjdCIsInNpZ25lck9yUHJvdmlkZXIiLCJDb250cmFjdCIsImNvbm5lY3RpbmdXaXRoQ29udHJhY3QiLCJ3ZWIzbW9kYWwiLCJjb25uZWN0aW9uIiwicHJvdmlkZXIiLCJzaWduZXIiLCJjb250cmFjdCIsImNvbm5lY3QiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJjb252ZXJUaW1lIiwidGltZSIsIm5ld1RpbWUiLCJEYXRlIiwidG9OdW1iZXIiLCJyZWFsVGltZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Utils/apiFeature.js\n"));

/***/ })

});