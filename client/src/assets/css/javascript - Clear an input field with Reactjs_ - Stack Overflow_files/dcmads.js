

var __IntegralASDiagnosticCall = (function() {
	try {
		var alreadySent = {};
		return function(code, err, config) {
			try {
				var gen = function(code, err, config) {
					var propsStr, id;
					var url = '//pixel.adsafeprotected.com/mon?anid=925116&advId=fwjs-diag&campId=';
					try {
						url += code + '&adsafe_jsinfo=';
						if (err && err.message) {
							url +=
								'derr:' +
								encodeURIComponent(err.message.toString().replace(/ /g, '-')).substring(0, 200);
						}
						if (config) {
							
							id = config.anId
								? config.anId
								: config.advEntityId
								? config.advEntityId + '/' + config.pubEntityId
								: '';
							propsStr = config.version + ',' + config.mode + ',' + id;
							url += ',dconfig:' + encodeURIComponent(propsStr);
						}
					} catch (e) {
						url += ',dcatch:1';
					}
					return url;
				};

				var send = function(url) {
					if (__IASScope.isDomless && __IASOmidVerificationClient && __IASOmidVerificationClient.sendUrl) {
						__IASOmidVerificationClient.sendUrl(url);
					} else {
						var img = new Image();
						img.src = url;
					}
				};
				if (!alreadySent[code] && Math.random() < 0.01) {
					alreadySent[code] = true;
					send(gen(code, err, config));
				}
			} catch (e) {}
		};
	} catch (e) {
		return function() {};
	}
})();





try {

	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'true',
		version: '19.8.76',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.114.js", main: "static.adsafeprotected.com/main.19.8.76.js"},
		protocol: 'https',
		jsref: "https:\/\/tpc.googlesyndication.com\/safeframe\/1-0-37\/html\/container.html",
		asid: "645ff8c9-8efe-11ea-815b-0a0b388d0187",
		allowViewability: "true",
		jsFeatures: "viewabilityready,consecutive,cachebust:1,forcecocoa:6,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,cookie,postDts:0,unreliabilityDetection,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:100,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1,bbs,bas,spg:100",
		adsafeDomain: "adsafeprotected.com:80",
		minimizeCalls: "false",
		adWidth: "728",
		adHeight: "90",
		forceAppend: "false",
		sp_imp_maxLength: 8000,
		sp_imp_jsInfo_minLength: 200,
		_onInViewMRC15: __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
		_onInViewMRC: __IntegralASConfig && __IntegralASConfig.onInViewMRC,
		_onMeasurable: __IntegralASConfig && __IntegralASConfig.onMeasurable,
		_onAPIResult: __IntegralASConfig && __IntegralASConfig.onAPIResult,
		_onInViewFull: __IntegralASConfig && __IntegralASConfig.onInViewFull,
		_onSuspicious: __IntegralASConfig && __IntegralASConfig.onSuspicious,
		_onInViewMRC5: __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
		reqquery: "",
		mode: "rjss",
		requrl: "",
		dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=425211",
		adsafeSrc: "https:\/\/fw.adsafeprotected.com\/rfw\/www.googletagservices.com\/425211\/44241954\/dcm\/dcmads.js",
		tpiLookupURL: "",
		getTpl: "false",
		use100v: false,
		useBapiCallback: "",
		useViewabilityNotification: "",
		scriptUrl: "https:\/\/fw.adsafeprotected.com\/rjss\/www.googletagservices.com\/425211\/44241954\/dcm\/dcmads.js",
		accountForSadImps: '',
		sendCookie: 'true',
		cookieBaseURL: 'sc.iasds01.com\/dtc?advEntityId=425211&pubEnt=44241954',
		fwMonitoring: 'false',
		doNothing: false,
		mn: "app01va",
		mobOrTab: false,
		app: false,
		mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/blocking\/app\/initial\/425211\/44241954?redirectUrl=https%3A%2F%2Fwww.googletagservices.com%2Fdcm%2Fdcmads.js",
		anId: '',
		advEntityId: '425211',
		pubEntityId: '44241954',
		videoId: '',
		videoChannel: '',
		rts: {},
		customViewability: [],
		serverSideAppDetection: [],
		groupm_native_publisher: false,
		integration: null,
		staticServer: '\/\/static.adsafeprotected.com\/',
		passback: ''
	};

try {


	

	__IASScope = typeof window !== "undefined" ? window : this;
	
	__IntegralASConfig.isResolved = !!__IntegralASConfig.jsFeatures;
	__IntegralASConfig.birthdate = new Date().getTime();
	__IntegralASConfig.perfBirth = (typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function') ? __IASScope.performance.now() : null;




;(function(omidGlobal, factory, exports) {
	// CommonJS support
	if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(omidGlobal, exports);

		// If neither AMD nor CommonJS are used, export to a versioned name in the
		// global context.
	} else {
		var exports = {};
		var versions = ['1.2.20-iab1793'];
		var additionalVersionString = '';
		if (!!additionalVersionString) {
			versions.push(additionalVersionString);
		}

		factory(omidGlobal, exports);

		function deepFreeze(object) {
			for (var key in object) {
				if (object.hasOwnProperty(key)) {
					object[key] = deepFreeze(object[key]);
				}
			}
			return Object.freeze(object);
		}

		// Inject and freeze the exported components of omid.
		for (var key in exports) {
			if (exports.hasOwnProperty(key)) {
				if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
					// Define the top level property in the global scope
					Object.defineProperty(omidGlobal, key, {
//							value: {},       Removed trailing comma for build
						value: {}
					});
				}
				versions.forEach(function(version) {
					if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
						var frozenObject = deepFreeze(exports[key]);
						// Define the object exports keyed-off versions
						Object.defineProperty(omidGlobal[key], version, {
							get: function () {
								return frozenObject;
							},
//								enumerable: true,       Removed trailing comma for build
							enumerable: true
						});
					}
				});
			}
		}
	}
}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
	'use strict';
	var $jscomp = $jscomp || {};
	$jscomp.scope = {};
	$jscomp.arrayIteratorImpl = function(a) {
		var b = 0;
		return function() {
			return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
		};
	};
	$jscomp.arrayIterator = function(a) {
		return {next:$jscomp.arrayIteratorImpl(a)};
	};
	$jscomp.makeIterator = function(a) {
		var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
		return b ? b.call(a) : $jscomp.arrayIterator(a);
	};
	$jscomp.arrayFromIterator = function(a) {
		for (var b, c = []; !(b = a.next()).done;) {
			c.push(b.value);
		}
		return c;
	};
	$jscomp.arrayFromIterable = function(a) {
		return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
	};
	$jscomp.ASSUME_ES5 = !1;
	$jscomp.ASSUME_NO_NATIVE_MAP = !1;
	$jscomp.ASSUME_NO_NATIVE_SET = !1;
	$jscomp.SIMPLE_FROUND_POLYFILL = !1;
	$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
			var b = function() {
			};
			b.prototype = a;
			return new b;
		};
	$jscomp.underscoreProtoCanBeSet = function() {
		var a = {a:!0}, b = {};
		try {
			return b.__proto__ = a, b.a;
		} catch (c) {
		}
		return !1;
	};
	$jscomp.setPrototypeOf = "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
				a.__proto__ = b;
				if (a.__proto__ !== b) {
					throw new TypeError(a + " is not extensible");
				}
				return a;
			} : null;
	$jscomp.inherits = function(a, b) {
		a.prototype = $jscomp.objectCreate(b.prototype);
		a.prototype.constructor = a;
		if ($jscomp.setPrototypeOf) {
			var c = $jscomp.setPrototypeOf;
			c(a, b);
		} else {
			for (c in b) {
				if ("prototype" != c) {
					if (Object.defineProperties) {
						var d = Object.getOwnPropertyDescriptor(b, c);
						d && Object.defineProperty(a, c, d);
					} else {
						a[c] = b[c];
					}
				}
			}
		}
		a.superClass_ = b.prototype;
	};
	var module$exports$omid$common$argsChecker = {assertTruthyString:function(a, b) {
		if (!b) {
			throw Error("Value for " + a + " is undefined, null or blank.");
		}
		if ("string" !== typeof b && !(b instanceof String)) {
			throw Error("Value for " + a + " is not a string.");
		}
		if ("" === b.trim()) {
			throw Error("Value for " + a + " is empty string.");
		}
	}, assertNotNullObject:function(a, b) {
		if (null == b) {
			throw Error("Value for " + a + " is undefined or null");
		}
	}, assertNumber:function(a, b) {
		if (null == b) {
			throw Error(a + " must not be null or undefined.");
		}
		if ("number" !== typeof b || isNaN(b)) {
			throw Error("Value for " + a + " is not a number");
		}
	}, assertNumberBetween:function(a, b, c, d) {
		(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
		if (b < c || b > d) {
			throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
		}
	}, assertFunction:function(a, b) {
		if (!b) {
			throw Error(a + " must not be truthy.");
		}
	}, assertPositiveNumber:function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
		if (0 > b) {
			throw Error(a + " must be a positive number.");
		}
	}};
	var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
	module$exports$omid$common$VersionUtils.isValidVersion = function(a) {
		return /\d+\.\d+\.\d+(-.*)?/.test(a);
	};
	module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function(a, b) {
		a = a.split("-")[0].split(".");
		b = b.split("-")[0].split(".");
		for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
			var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
			if (d > e) {
				break;
			} else {
				if (d < e) {
					return !1;
				}
			}
		}
		return !0;
	};
	var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
	module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
	};
	module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function(a, b) {
		return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
	};
	var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", STATE_CHANGE:"stateChange", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", VIDEO:"video", LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
		PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, VideoEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ErrorType:{GENERIC:"generic", VIDEO:"video"},
		AdSessionType:{NATIVE:"native", HTML:"html"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{APP:"app", WEB:"web"}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed",
			CLIPPED:"clipped"}, SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds",
			CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", OBSTRUCTIONS:"obstructions"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
	var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
		this.guid = a;
		this.method = b;
		this.version = c;
		this.args = d;
	};
	module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
		return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] ||
			void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.deserialize = function(a) {
		return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
	};
	module$exports$omid$common$InternalMessage.prototype.serialize = function() {
		var a = {};
		a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
		void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
		return a;
	};
	var module$exports$omid$common$Communication = function(a) {
		this.to = a;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
	};
	module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
	};
	module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
		if (this.onMessage) {
			this.onMessage(a, b);
		}
	};
	module$exports$omid$common$Communication.prototype.serialize = function(a) {
		return JSON.stringify(a);
	};
	module$exports$omid$common$Communication.prototype.deserialize = function(a) {
		return JSON.parse(a);
	};
	module$exports$omid$common$Communication.prototype.isCrossOrigin = function() {
	};
	var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
		try {
			return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
		} catch (b) {
			return !1;
		}
	}, declareOmidPresence:function(a) {
		a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" id="' + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '" name="') + (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME +
					'"></iframe>'))));
	}, appendPresenceIframe_:function(a) {
		var b = a.document.createElement("iframe");
		b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
		b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
		b.style.display = "none";
		a.document.body.appendChild(b);
	}, isMutationObserverAvailable_:function(a) {
		return "MutationObserver" in a;
	}, registerMutationObserver_:function(a) {
		var b = new MutationObserver(function(c) {
			c.forEach(function(c) {
				"BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
			});
		});
		b.observe(a.document.documentElement, {childList:!0});
	}};
	var module$exports$omid$common$DirectCommunication = function(a) {
		module$exports$omid$common$Communication.call(this, a);
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
		this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
	};
	$jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.handleExportedMessage(a.serialize(), this);
	};
	module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
		module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
	};
	module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function() {
		return !1;
	};
	var module$exports$omid$common$eventTypedefs = {};
	var module$exports$omid$common$exporter = {};
	function module$contents$omid$common$exporter_getOmidExports() {
		return "undefined" === typeof omidExports ? null : omidExports;
	}
	function module$contents$omid$common$exporter_getOrCreateName(a, b) {
		return a && (a[b] || (a[b] = {}));
	}
	module$exports$omid$common$exporter.packageExport = function(a, b, c) {
		if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
			a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
		}
	};
	var module$exports$omid$common$guid = {generateGuid:function() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
			var b = 16 * Math.random() | 0;
			a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
			return a;
		});
	}};
	var module$exports$omid$common$logger = {error:function(a) {
		for (var b = [], c = 0; c < arguments.length; ++c) {
			b[c - 0] = arguments[c];
		}
		module$contents$omid$common$logger_executeLog(function() {
			throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(b))));
		}, function() {
			return console.error.apply(console, $jscomp.arrayFromIterable(b));
		});
	}, debug:function(a) {
		for (var b = [], c = 0; c < arguments.length; ++c) {
			b[c - 0] = arguments[c];
		}
		module$contents$omid$common$logger_executeLog(function() {
		}, function() {
			return console.error.apply(console, $jscomp.arrayFromIterable(b));
		});
	}};
	function module$contents$omid$common$logger_executeLog(a, b) {
		"undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
	}
	;var module$exports$omid$common$OmidGlobalProvider = {}, module$contents$omid$common$OmidGlobalProvider_globalThis = eval("this");
	function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
		if ("undefined" !== typeof omidGlobal && omidGlobal) {
			return omidGlobal;
		}
		if ("undefined" !== typeof global && global) {
			return global;
		}
		if ("undefined" !== typeof window && window) {
			return window;
		}
		if ("undefined" !== typeof module$contents$omid$common$OmidGlobalProvider_globalThis && module$contents$omid$common$OmidGlobalProvider_globalThis) {
			return module$contents$omid$common$OmidGlobalProvider_globalThis;
		}
		throw Error("Could not determine global object context.");
	}
	module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
	var module$exports$omid$common$windowUtils = {};
	function module$contents$omid$common$windowUtils_isValidWindow(a) {
		return null != a && "undefined" !== typeof a.top && null != a.top;
	}
	module$exports$omid$common$windowUtils.isCrossOrigin = function(a) {
		if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
			return !1;
		}
		try {
			if ("undefined" === typeof a.location.hostname) {
				return !0;
			}
			module$contents$omid$common$windowUtils_isSameOriginForIE(a);
		} catch (b) {
			return !0;
		}
		return !1;
	};
	function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
		return "" === a.x || "" !== a.x;
	}
	module$exports$omid$common$windowUtils.resolveGlobalContext = function(a) {
		"undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	module$exports$omid$common$windowUtils.resolveTopWindowContext = function(a) {
		return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
	};
	var module$exports$omid$common$PostMessageCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
		module$exports$omid$common$Communication.call(this, b);
		var c = this;
		this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
		a.addEventListener("message", function(a) {
			if ("object" === typeof a.data) {
				var b = a.data;
				module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
			}
		});
	};
	$jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
	module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
		return !!(a && a.addEventListener && a.postMessage);
	};
	module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
		b = void 0 === b ? this.to : b;
		if (!b) {
			throw Error("Message destination must be defined at construction time or when sending the message.");
		}
		b.postMessage(a.serialize(), "*");
	};
	module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function() {
		return this.to ? (0,module$exports$omid$common$windowUtils.isCrossOrigin)(this.to) : !0;
	};
	var module$exports$omid$common$Rectangle = function(a, b, c, d) {
		this.x = a;
		this.y = b;
		this.width = c;
		this.height = d;
	};
	var module$exports$omid$common$serviceCommunication = {}, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omid", "serviceWindow"];
	function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
		return b.reduce(function(a, b) {
			return a && a[b];
		}, a);
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
		if (!(0,module$exports$omid$common$windowUtils.isCrossOrigin)(b)) {
			try {
				var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
				if (e) {
					return new module$exports$omid$common$DirectCommunication(e);
				}
			} catch (f) {
			}
		}
		return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
	}
	function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
		b = $jscomp.makeIterator(b);
		for (var e = b.next(); !e.done; e = b.next()) {
			if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
				return e;
			}
		}
		return null;
	}
	module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = function(a, b, c) {
		c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
		var d = [a, (0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a)];
		b && d.unshift(b);
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
	};
	module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = function(a, b) {
		b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
		var c = [], d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
		d && c.push(d);
		c.push((0,module$exports$omid$common$windowUtils.resolveTopWindowContext)(a));
		return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
	};
	var module$exports$omid$common$VastProperties = function(a, b, c, d) {
		this.isSkippable = a;
		this.skipOffset = b;
		this.isAutoPlay = c;
		this.position = d;
	};
	var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.2.20-iab1793"};
	var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$contents$omid$verificationClient$VerificationClient_EventCallback;
	function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
		var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
		return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
	}
	var module$exports$omid$verificationClient$VerificationClient = function(a) {
		if (this.communication = a || (0,module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication)((0,module$exports$omid$common$windowUtils.resolveGlobalContext)())) {
			this.communication.onMessage = this.handleMessage_.bind(this);
		} else {
			if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
				this.omid3p = a;
			}
		}
//----------this.remoteIntervals_ = this.remoteTimeouts_ = 0;
		this.callbackMap_ = {};
		this.imgCache_ = [];
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
		return !(!this.communication && !this.omid3p);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		this.omid3p ? this.omid3p.registerSessionObserver(a, b) : this.sendMessage_("addSessionListener", a, b);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
		this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(a, b, c) {
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function(a) {
				a && b ? b() : !a && c && c();
			}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function(a, b, c) {
		var d = this, e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
		this.imgCache_.push(e);
		var f = function(a) {
			var b = d.imgCache_.indexOf(e);
			0 <= b && d.imgCache_.splice(b, 1);
			a && a();
		};
		e.addEventListener("load", f.bind(this, b));
		e.addEventListener("error", f.bind(this, c));
		e.src = a;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function(a, b, c) {
		var d = this;
		(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
		module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function(e, f) {
				e ? (d.evaluateJavaScript_(f, a), b()) : (module$exports$omid$common$logger.error("Service failed to load JavaScript resource."), c());
			}, a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function(a, b, c) {
		var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document, e = d.body;
		d = d.createElement("script");
		d.onload = b;
		d.onerror = c;
		d.src = a;
		d.type = "application/javascript";
		e.appendChild(d);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function(a, b) {
		try {
			eval(a);
		} catch (c) {
			module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "' + b + '".');
		}
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasTimeoutMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
		}
//----------var c = this.remoteTimeouts_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setTimeout", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId", a);
		this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function(a, b) {
		(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
		if (this.hasIntervalMethods_()) {
			return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
		}
//----------var c = this.remoteIntervals_++;
		var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
		this.sendMessage_("setInterval", a, c, b);
		return c;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function(a) {
		(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId", a);
		this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function() {
		return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function(a, b) {
		b = a.method;
		var c = a.guid;
		a = a.args;
		if ("response" === b && this.callbackMap_[c]) {
			var d = (0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, a);
			this.callbackMap_[c].apply(this, d);
		}
		"error" === b && window.console && module$exports$omid$common$logger.error(a);
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(a, b) {
		for (var c = [], d = 1; d < arguments.length; ++d) {
			c[d - 1] = arguments[d];
		}
		this.sendMessage_.apply(this, [a, null].concat($jscomp.arrayFromIterable(c)));
	};
	module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(a, b, c) {
		for (var d = [], e = 2; e < arguments.length; ++e) {
			d[e - 2] = arguments[e];
		}
		this.communication && (e = (0,module$exports$omid$common$guid.generateGuid)(), b && (this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, (0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, d)), this.communication.sendMessage(d));
	};
	(0,module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);

}, typeof exports === 'undefined' ? undefined : exports));



} catch(e) {
	__IntegralASDiagnosticCall('thirdparty', e);
}




	
	__IASScope.isDomless = (typeof window === "undefined" ? true : false);
	__IASOmidVerificationClient = { isSupported: function () { return false; } };

	if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
		try {
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.2.20-iab1793'](); //try standard in-browser instantiation
		}
		catch(e) {
			try {
				__IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
			}
			catch(e) {
			}
		}
	}

	__IntegralASConfig.useFIF = (__IASScope && !!__IASScope.__IntegralASUseFIF) && __IntegralASConfig.mode === 'jload';
	__IntegralASConfig.adRefreshThreshold = __IASScope && __IASScope.__IntegralASAdRefreshThreshold;




__IntegralASConfig.getContextNode = function(win, topWin) {
	'use strict';

	if (__IASScope.isDomless) {
		return;
	}
	if (__IntegralASConfig.useFIF) {
		return __IASScope.frameElement; // Early exit if using FIF
	}
	
	var tempScript,
		embedded = win != topWin,
		scripts = document.getElementsByTagName('script'),
		result = scripts[scripts.length - 1],
		scriptIndex = scripts.length,
		
		useDocWrite = 'jss,jsi,jspix'.indexOf(__IntegralASConfig.mode) !== -1,
		scriptUrl = __IntegralASConfig.scriptUrl;

	try {
		
		while (--scriptIndex >= 0) {
			tempScript = scripts[scriptIndex];
			if (
				tempScript.src &&
				tempScript.src.indexOf(scriptUrl) === 0 &&
				tempScript.getAttribute('data-ias-script-tag') === null
			) {
				result = tempScript;
				tempScript.setAttribute('data-ias-script-tag', 'found');
				break;
			}
		}
		if (scriptIndex === 0 && useDocWrite && !embedded) {
			
			document.write('<span id="s' + __IntegralASConfig.asid + '"/>');
			result = document.getElementById('s' + __IntegralASConfig.asid).parentNode;
		}
	} catch (e) {} // TODO: maybe a jsDiagnostic?

	return result;
};

__IntegralASConfig.contextNode = __IASScope.isDomless ? undefined : __IntegralASConfig.getContextNode(window, top);





__IntegralASConfig.perfFactory = function() {
	'use strict';

	var _marks = {};
	var START_CODE = 'A';
	var END_CODE = 'Z';

	function _addMark(codeName, time) {
		
		_marks[codeName] = time;
	}

	function mark(codeName) {
		_addMark(codeName, Math.round(__IASScope.performance.now()));
	}

	function markStart(baseName) {
		mark(baseName + START_CODE);
	}

	function markEnd(baseName) {
		mark(baseName + END_CODE);
	}

	function markResource(baseName, url) {
		var entry, entries;
		entries = __IASScope.performance.getEntriesByName(url);
		if (entries && entries.length) {
			entry = entries[entries.length - 1];
			if (entry.startTime > 0 && entry.responseEnd > 0) {
				_addMark(baseName + START_CODE, Math.round(entry.startTime));
				
				_addMark(baseName + END_CODE, Math.round(entry.responseEnd));
			}
		}
	}

	function getData() {
		return _marks;
	}

	function noop() {}

	function setNoops() {
		_addMark = noop;
		mark = noop;
		markStart = noop;
		markEnd = noop;
		markResource = noop;
	}

	function isFunc(obj) {
		return typeof obj === 'function';
	}

	function _init() {
		var canUsePerformanceAPIs = false;
		var PERF_MARK_BOOTSTRAPPER_EXECUTION = 'be';
		var PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD = 'bd';
		var PERF_MARK_MAIN_SCRIPT_DOWNLOAD = 'md'; // note: this code is intentionally the same as the one in globalConstants.js
		var downloadMark;

		try {
			canUsePerformanceAPIs =
				__IASScope.performance &&
				isFunc(__IASScope.performance.getEntriesByName) &&
				isFunc(__IASScope.performance.now) &&
				__IntegralASConfig.perfBirth !== null; // initialized to null or a time in jsAddOns1-birthdate.js

			if (canUsePerformanceAPIs) {
				downloadMark = __IntegralASConfig.jsDoSplit
					? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD
					: PERF_MARK_MAIN_SCRIPT_DOWNLOAD;

				markResource(downloadMark, __IntegralASConfig.scriptUrl); // in split mode, this captures download time for the bootstrapper script, in bundled mode, the bundled/main script
				_addMark(PERF_MARK_BOOTSTRAPPER_EXECUTION + START_CODE, Math.round(__IntegralASConfig.perfBirth)); // put the birthdate that we already captured into our list of marks
				markEnd(PERF_MARK_BOOTSTRAPPER_EXECUTION); // roughly the end time of execution for the bootstrapper script in split mode, in bundled mode, end of the bootstrapper part of the script and start of the module definition part
			} else {
				setNoops();
			}
		} catch (err) {
			// TODO: remove if we never get here?
			setNoops();
			if (isFunc(__IASScope.__IntegralASDiagnosticCall)) {
				__IASScope.__IntegralASDiagnosticCall('perf', err, __IntegralASConfig);
			}
		}
	}

	_init();

	return {
		mark: mark,
		markStart: markStart,
		markEnd: markEnd,
		markResource: markResource,
		getData: getData
	};
};
__IntegralASConfig.perf = __IntegralASConfig.perfFactory();





} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}
__IntegralASConfig.initialize=function(l,x,M){function Qa(){var d,a,b;l.perf.markStart(la);k.startSystem();y=k.getAggregator();y.provide({omidAdSessionContext:{}});y.provide({omidAdSessionVerificationParameters:{}});d=Ra();a=ma();b=(new Sa).createInstance(d,a);y.provide({mErrors:d,mJsonp:a,mComm:b});d=__IASOmidVerificationClient;y.provide({omidVerificationClient:d});y.once("callContinueMain",function(){var a,b;l.perf.markStart(na);b=X.instantiateModules();a=X.preImpression(b.mDataTransfer,b.mViewability,
b.mAdTalk,b.iOutput,b.mErrors,b.mAncestorOrigins,b.mBrowser,b.mPageUrls,b.mFeatures,t,b.renderDetector);X.sendImpression(b.mErrors,b.mFeatures,b.mIds,b.mMode,b.iOutput,b.mBrowser,b.mViewability,a,b.mVideo);X.postImpression(b.mBrowser,b.mIds,b.mViewability,b.mFeatures,b.mComm,b.mDataTransfer,b.mErrors,b.iOutput,b.loopDelay,b.mAdTalk,b.viewabilityMeasurement,b.mAncestorOrigins,t);l.perf.markEnd(na)});y.on("tryToCallContinueMain",function(a){l.isResolved?y.trigger("callContinueMain"):y.trigger("requestBootstrapper",
a)});y.once("requestBootstrapper",function(a){var b=l.forcedBootstrapperHost||"http://jsconfig.adsafeprotected.com";"string"===typeof a&&(a=JSON.parse(a));var f=a&&a.config,h=a&&a.sca,u=a&&a.xsca;f&&y.trigger("jsonp",b+"/jsconfig"+f+(l.adSessionId?"&adSessionId="+l.adSessionId:""),function(a){Object.assign(l,"string"===typeof a?JSON.parse(a):a);l.isResolved=!0;l.sp_cdnScripts={sca:h,xsca:u};y.trigger("callContinueMain")},!1,"cbName")});d=[{environment:new ba(d),adSessionReadyStrategy:new Ta(d)},{environment:new Ua,
adSessionReadyStrategy:new Va}];(new Wa(d)).resolve().adSessionReadyStrategy.start();l.perf.markEnd(la)}var y,X=function(){function m(a){var b=new Xa(a,t),c=new Ya,e=new Za(a,t),p=$a(a,t),q=(new ab(l,t,a)).resolve(),m=[b],C=[];p.applies()&&m.push(p);e.applies()&&m.push(e);c.applies(a,t)&&m.push(c);d(q).each(function(a,b){m.push(new bb(b,t));C.push(b.id)});0<C.length&&(y.trigger("addOutputItem",{output:C.join(".")},"scm",{type:g.IMPRESSION_EVENT}),y.trigger("addOutputItem",{output:C},"metricIdList",
{type:g.DT_CODES.UNLOAD,asION:!0}));return m}function a(a,b,c,e){var p=m(a);y.provide("viewabilityDefinitions",p);return d(p).map(function(p,d){var m;m=new cb(d,b);var v=(new db(c,a,d.rts)).getCallbacks(),k=new eb(e.createPingJobs(d.type,d.timeInViewThresholds,v,d.metricId));d.rtsCallbacks=v;m=d.thresholdType===g.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new fb(m,d,k,t.isVideo()):new gb(m,new ca(d.minUnit),k);m.start();return m})}function b(a,b){var c=(new da).accepts(),c=!t.isAvid()&&!c&&
!t.isInMobiMraidVideo();return t.isVideo()&&c?hb(l.videoId,a,b):{}}function c(a,b,c,e,p,q,m,C,v,H){try{l.perf.markStart(oa),l.tpiLookupURL&&ib(m,C).init(l.tpiLookupURL),t.isDomless()||H.isStarted()&&H.sendOriginList(),k.runAll(),r.execAtEndOfThread(function(){var q;try{l.perf.markStart(pa);q={output:(new Date).getTime()-p};a.addItem(q,"sinceFw",{type:g.DT_CODES.ADTALK});d.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:g.DT_CODES.ADTALK});l.perf.markEnd(pa);var m,w;l.isSplitMode&&
(w=l.protocol+"://"+l.sp_cdnScripts.main,l.perf.markResource(jb,w));l.impUrl&&l.perf.markResource(kb,l.impUrl);m=l.perf.getData();y.trigger("addThrottledProp",g.DT_SLOT.IM,"prf",d(m).toION());c.isApplicable(t)&&c.sendAdTalkCall()}catch(C){e.add(g.ERROR_CODES.ADTALK_DELAY)}}),l.perf.markEnd(oa)}catch(O){e.add(g.ERROR_CODES.EVENT_LOOP_ONE)}}function e(a,b,e,n,p,q,d,m,v){var g;"true"!==l.minimizeCalls&&(g=(new Date).getTime(),r.execAtEndOfThread(function(){c(a,b,e,n,g,p,q,d,m,v)}))}return{instantiateModules:function(){var c,
e,u,n,p,q,d,m,v={};l.perf.markStart(qa);y=k.getAggregator();v.mFeatures=y.provide("features",lb());y.provide("mobileApp",function(){return c=c||new mb(v.mFeatures)});y.provide("avidJsClient",function(){return e=e||new nb(r.getWindow())});y.provide("context",t);v.mBrowser=y.provide("browser",(new ob).createInstance());v.mErrors=y.request("mErrors");v.mIds=y.provide("ids",pb());v.iOutput=new qb(y);y.request("mJsonp");v.mComm=y.request("mComm");v.viewabilityMeasurement=(new rb(new sb(v.mIds),v.mFeatures,
v.mBrowser)).create();if((n=y.request("omidAdSessionContext"))&&n.queuedOutputItems)for(q=0;q<n.queuedOutputItems.length;q++)y.trigger("addOutputItem",{output:n.queuedOutputItems[q].value},n.queuedOutputItems[q].code,{type:"impression"});v.mFeatures.on("swapids")&&(l.oid=l.asid,l.asid=v.mIds.unq);v.mAdTalk=(new tb).createInstance(v.mFeatures);u=ub();n=vb(y);p=y.provide("mPage",(new wb).createInstance());v.mAncestorOrigins=xb();v.mPageUrls=y.provide("pageUrls",(new yb).createInstance(v.mAncestorOrigins,
r));q=y.provide("mScreenEvents",zb());y.provide("ieXDomainViewability",Ab(v.mBrowser));d=Bb(v.mBrowser);m=b(v.mFeatures,q);v.mVideo=y.provide("video",m);Cb(Db.build());d=(new Eb).createInstance(v.mErrors,d,v.mFeatures);p=(new Fb).createInstance(d,v.mErrors,p,t);m=y.provide("jobFactory",Gb());v.mDataTransfer=Hb(d,v.mErrors,v.mFeatures,v.mIds,v.iOutput,v.mBrowser,q,u);u=Ib(v.mErrors,v.mFeatures,y,n);v.mMode=Jb(u,v.mFeatures,v.viewabilityMeasurement.isImmediate());v.mViewability=y.provide("viewability",
Kb(new E,v.viewabilityMeasurement,v.mBrowser,v.mDataTransfer,v.mFeatures,y,v.iOutput,p,q,v.mVideo));a(v.mFeatures,v.mViewability,n,m);v.loopDelay=ra();v.renderDetector=Lb();v.mDataTransfer.setViewabilityMod(v.mViewability);l.perf.markEnd(qa);return v},preImpression:function(a,b,c,e,p,q,d,m,v,k,O){var A,r,L,B,t;l.perf.markStart(sa);l.b11="1"===l.adHeight&&"1"===l.adWidth?"true":"false";l.cnod=l.contextNode?"true":"false";try{c.isApplicable(k)&&(c.start(),e.addItem(c.getFrameMap(),"fm"),v.on("fm2")&&
e.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),v.on("idMap")&&(A=c.getIdMap())&&e.addItem(A,"idMap"))}catch(s){p.add(g.ERROR_CODES.ADTALK_GENERAL)}try{q.isApplicable(d,v,k)&&q.start(),t=m.detectTopURL(),v.on("exch")&&(r=(new Mb).createInstance(p,e),r.parse(t)),L=Nb(),L.isApplicable(v)&&L.start(v),k.usesGroupMCustomMetric()&&Ob(),B=Pb(),B.isApplicable(v)&&(B.start(),y.trigger("sendCookie")),O.start()}catch(Qb){p.add(g.ERROR_CODES.IMPRESSION_LEADUP)}l.perf.markEnd(sa);return t},sendImpression:function(a,
b,c,e,p,q,m,C,v){try{Rb(a,b,c,e,p,q,m).send(C),d.isFunction(v.triggerInitializationEvents)&&v.triggerInitializationEvents()}catch(g){__IntegralASDiagnosticCall("impsend",g,l)}},postImpression:function(a,b,c,n,p,q,d,m,v,H,O,A,r){try{l.perf.markStart(ta);var L=Sb();L.start();L.addFieldTypes([g.DT_SLOT.IM,g.DT_SLOT.FF,g.DT_SLOT.ENVIRONMENT,g.DT_SLOT.FF_EXP]);var B=Tb(a,b,c);B.isApplicable(n)&&B.start();var t;n.bootstrapOn("getTpl")&&n.on("usetpl")&&(t=Ub(p,q,d,b,m),t.init());e(m,v,H,d,n,p,q,b,A);O&&
O.start&&O.start();r.isDomless()||Vb().start(["sca","xsca","rsrch"],n);Wb();k.runTier(g.TIERS.VIEWABILITY);var s=Xb();s.isApplicable(n)&&(s.start(),T.recordBlockingTime(),l.perf.mark(Yb),T.setupOnLoadTracking(),T.setupBrowserDelayTracking());l.perf.markEnd(ta)}catch(Qb){d.add(g.ERROR_CODES.POST_IMPRESSION)}}}}(),d=function(d){return new G(d)},G=function(d){this.iterable=d};G.prototype.isObj=function(d){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return d?
a:b};G.prototype.isArray=function(){return this.iterable instanceof Array};G.prototype.isEmpty=function(d){return 0===this.keys(d).length};G.prototype.each=function(d,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,e=b.length;c<e;++c)d(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&d(c,b[c])};G.prototype.map=function(d,a){var b=[];this.each(function(c,e){var f=d(c,e);if(void 0!==f||a)b[b.length]=f});return b};G.prototype.stringify=function(m,a){a=a||",";var b=[];this.each(function(a,
e){var f=m(a,e);d.isDef(f)&&b.push(f)});return b.join(a)};G.prototype.toION=function(m,a){var b,c="[",e="]";a=a||0;m=m||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return d(c).toION(m,a)}):(c="{",e="}",b=this.map(function(b,c){var e="string"===typeof b&&-1!==b.indexOf("NULL"),n=d(c).toION(m,a);return e?n:(m[b]||b)+":"+n}));return c+b.join(",")+e};G.prototype.compareTo=function(d){var a=!1;this.each(function(b,
c){d[b]!==c&&(a||(a={}),a[b]=c)});return a};G.prototype.toParams=function(d){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},d)};G.prototype._privateMixin=function(m,a,b){for(var c in a)d.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(m[c]=a[c]);return m};G.prototype.mapToObj=function(m){var a={},b=this;this.each(function(c,e){var f=m(c,e);d(f).isObj()&&b._privateMixin(a,f)});return a};G.prototype.invert=function(){return this.mapToObj(function(d,a){var b=
{};b[a]=d;return b})};G.prototype.mixin=function(d,a){return this._privateMixin(this.iterable,d,a)};G.prototype.find=function(d){var a;this.each(function(b,c){d(b,c)&&(a=c)});return a};G.prototype.findFirst=function(d){var a,b;this.each(function(c,e){!b&&d(c,e)&&(a=e,b=!0)});return a};G.prototype.keys=function(d){var a=[];this.each(function(b){a.push(b)},d);return a};G.prototype.asStrings=function(){var d={};this.each(function(a,b){d[a]=""+b});return d};G.prototype.selectProperties=function(m){var a=
{},b=this;d(m).each(function(c,e){d.isDef(b.iterable[e])&&(a[e]=b.iterable[e])});return a};G.prototype.filter=function(m,a){return this.map(function(a,c){var e;if(d.isUndef(m)||d.resolve(m,a,c))e=c;return e},a)};G.prototype.toArray=function(){return this.map(function(d,a){return a})};G.prototype.JSONStringify=function(){var d,a,b=!1;x.Prototype&&x.Prototype.Version&&-1===x.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);d=JSON.stringify(this.iterable);
b&&(Array.prototype.toJSON=a);return d};G.prototype.contains=function(m){var a=d(this.iterable).findFirst(function(a,c){return m===c});return d.isDef(a)};d.toBase=function(d,a){var b,c=0>d,e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),f=[];d=c?-d:d;do b=d%a,f.push(e[b]),d=(d-b)/a;while(0<d);f=f.reverse().join("");return c?"-"+f:f};d.isDef=function(d){return"undefined"!==typeof d};d.isUndef=function(m){return!d.isDef(m)};d.isBool=function(d){return"boolean"===typeof d};
d.noop=function(){};d.identity=function(d){return d};d.isFunction=function(d){return"function"===typeof d};d.isStr=function(d){return"string"===typeof d};d.useIfDef=function(m){return d.isDef(m)?m:!1};d.stringifyTriState=function(d){return!0===d?1:!1===d?0:"na"};d.getNum=function(d){d=parseInt(d);isFinite(d)||(d=-1);return d};d.resolve=function(m){var a=d(arguments).toArray();a.shift();return d.isFunction(m)?m.apply({},a):m};d.flatJSONParse=function(d){var a,b,c,e=/"(\w+)":(\d+|(?:"([^"]*)"))/g,f=
{};for(c=e.exec(d);c;)a=c[1],b=c[3],c=c[2],f[a]=b||+c,c=e.exec(d);return f};d.debounce=function(d,a,b){var c,e=b||x;return function(){var b=this,h=arguments;e.clearTimeout(c);c=e.setTimeout(function(){c=null;d.apply(b,h)},a)}};d.last=function(d){return d[d.length-1]};d.collapseArgsIntoHash=function(d,a){var b={};a?b[d]=a:b=d;return b};d.fromBoolToNum=function(d){return d?1:0};d.isNumeric=function(m){return d.isDef(m)&&null!==m&&!isNaN(m)};d.fromNodeListToArray=function(d){return Array.prototype.slice.call(d)};
var k=function(){var m,a={},b=[],c=[],e=function(){var a={},b=d(arguments).toArray();b.unshift(a);c.push(b);return a},f=function(c,e,f,p,q){q=q||{};var w,C,v=function(a){0===b.length&&(b=d(a).map(function(a,b){return m.request(b)}))},g=function(){if(!w){var a=[];w=!0;v(["features","browser","context"]);q.emits&&(c.events=new E);if(!q.applies||q.applies.apply(q,b))C=!0,a=d(f).map(function(a,b){return m.request(b)},!0),a.push(c),d(c).mixin(p.apply({},a))}};(function(){var b=q.tier;d.isDef(b)&&(a[b]=
a[b]||new ea,a[b].push(g))})();m.provide(e,function(){var a;g();C&&(a=c);return a});return c};e.runAll=function(){var b=d(a).keys().sort(function(a,b){return a-b});d(b).each(function(a,b){e.runTier(b)})};e.runTier=function(b){a[b].run();delete a[b]};e.startSystem=function(){m=m||new ua;d(c).each(function(a,b){f.apply({},b)})};e.getAggregator=function(){return m};return e}(),g={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",
PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FF:"sca",FF_EXP:"xsca",ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_COMPOUND:"spc",
BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}},RENDER:{TYPE:"render",COUNT:2,CODE:"tdr"}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",
BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",
EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",
MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",MANAGED_VIDEO:"managedVideo"}},CONTAINER_GEOMETRY_MEASUREMENT_CHANGED:"containerGeometryMeasurementChanged",MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED:"mobileAppGeometryChanged",
VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",OTHER:"na"},
DIAGNOSTIC:{BROKEN_IMAGE:"bi",UNQUALIFIED_SIZE:"us",QUALIFIED_SIZE:"qs",STYLED_NODE:"sn",TEXT_NODE:"tn",DOCUMENT_READY:"dr",LOAD_FIRED:"lf",MRAID_DEFAULT:"md",MRAID_READY:"mr"}},RTS_KEY_FOR_VQ:"qiv",UNIQUE_ID_TOKEN:"[IAS_ASID]"},la="mf",na="cm",qa="in",sa="pr",ta="po",Yb="bl",oa="lo",pa="lt",jb="md",kb="id",Zb=function(){var m,a,b=0,c=["STYLE","SCRIPT"],e=g.RENDER.CREATIVE_NODE_TYPES.concat(g.RENDER.CONTAINER_NODE_TYPES),f=function(a){var b=[],f=(a=a&&a.children)&&a.length,h,u;if(a)for(var m=0;m<
f;m++)h=a[m],u=h.nodeName.toUpperCase(),!h.children||0!==h.children.length||d(e).contains(u)||d(c).contains(u)||b.push(u);return b},h=function(a){return"HEAD"===s.getNodeName(l.contextNode.parentNode)?U(l.contextNode.parentNode.ownerDocument.body,a):U(null,a)},u=function(c){var p;m=m||l.contextNode.parentNode;if(c)if(s.isNodeXDomainIframe(c))p=c;else if((p=s.getNodeName(c))&&(-1!==g.RENDER.CREATIVE_NODE_TYPES.indexOf(p.toUpperCase())||s.hasBackgroundImage(c)||c.children&&0===c.children.length&&c.innerText&&
0<c.innerText.length))p=c;else{m=c;p=u;var d;if(l.useFIF&&t.friendlyIframe&&3>b)a:{var w=c,C,v,H,O,A=s.getNodeName(w);c=f(w);try{H=e.concat(c);if(w===r.getTop().document.body){d=null;break a}s.isWindow(w)?(C=h(H),C||(O="["+g.AD_IDENTIFIER+"-"+l.asid+"]",v=s.crossQuerySelector(O),a=v.parentNode,C=U(a,H))):("IFRAME"===A&&(w=w.contentWindow.document),C=U(w,H));void 0===C&&void 0!==a&&(a=C=a.parentNode,b+=1)}catch(D){k.getAggregator().trigger("renderdiag",D)}d=C}else{d=c;C=s.getNodeName(d);v=f(d);try{A=
e.concat(v),s.isWindow(d)?w=h(A):("IFRAME"===C&&(d=d.contentWindow.document),w=U(d,A))}catch(L){k.getAggregator().trigger("renderdiag",L)}d=w}p=p(d)}else p=null;return p};return{find:u,getClosestContainerName:function(){return s.getNodeName(m)}}},Lb=function(){var d,a=!1,b={status:g.RENDER.STATUS.OTHER,details:g.RENDER.DETAILS.OTHER},c={status:g.RENDER.STATUS.DETECTED,details:g.RENDER.DETAILS.ENVIRONMENT},e=function(){a=!0},f=function(a){var b={},c=r.getDoc(),e=function(f){var h=f&&f.type;if("readystatechange"===
h&&"complete"===f.target.readyState||"load"===h)b.status=g.RENDER.STATUS.DETECTED,b.details=d.build(a,{eventType:h}),u(b),z.removeEvent(a,"load",e),z.removeEvent(c,"readystatechange",e)};"complete"===c.readyState?(b.status=g.RENDER.STATUS.DETECTED,b.details=d.build(a,{eventType:"readystatechange"})):(z.addEvent(a,"load",e),z.addEvent(c,"readystatechange",e));return b},h=function(a){a===g.RENDER.STATUS.DETECTED&&k.getAggregator().trigger("perfCheckpoint",{type:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,
timestamp:r.now(),code:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.CODE})},u=function(c){var e=c.status||b.status;c=c.details||b.details;a&&e===g.RENDER.STATUS.DETECTED?(h(e),k.getAggregator().trigger("addThrottledOutputItem","rend",e),k.getAggregator().trigger("addThrottledOutputItem","renddet",c)):(h(e),k.getAggregator().trigger("addOutputItem",{output:e},"rend"),k.getAggregator().trigger("addOutputItem",{output:c},"renddet"))},n=function(){k.getAggregator().on("primaryadfound",function(a){var c,e=b,
h=new Zb,n=!0,H=function(){A();n&&(c=r.setInterval(A,500))},l=function(){var a=r.getWindow().mraid,b=function(){z.removeEvent(a,"ready",b);d.appendCode(g.RENDER.DIAGNOSTIC.MRAID_READY);H()};"loading"===(a.getState&&a.getState())?z.addEvent(a,"ready",b):(d.appendCode(g.RENDER.DIAGNOSTIC.MRAID_DEFAULT),H())},A=function(){var b=a&&a.getAdNode(),k=h.find(b);if(s.isNodeXDomainIframe(k))c?r.clearInterval(c):n=!1,e=f(k);else if(k){var b=!1,H=s.getRect(k);k&&"IMG"===s.getNodeName(k)&&(b=0===k.naturalWidth||
0===k.naturalHeight);!b&&H.width>=g.RENDER.WIDTH_THRESHOLD&&H.height>=g.RENDER.HEIGHT_THRESHOLD&&(e.status=g.RENDER.STATUS.DETECTED,c?r.clearInterval(c):n=!1);e.details=d.build(k)}else e.details=h.getClosestContainerName()||d.getAdNodeName(b)||e.details;u(e)};t.isMraid()?l():H();k.getAggregator().trigger("eligiblerender")})};return{start:function(){k.getAggregator().trigger("perfCheckpoint",{type:g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,timestamp:r.now(),code:"initial"});d=new $b;new ac;k.getAggregator().on("impressionsent",
e);t.isAvid()||t.isOmid()||t.isVideo()?(k.getAggregator().trigger("eligiblerender"),u(c)):(u(b),n())}}},$b=function(){var m=!1,a=[],b=function(a){var b;if(s.isWindow(a))b="WINDOW";else if(s.isNodeXDomainIframe(a))b="XIFRAME";else try{b=s.getNodeName(a)}catch(f){}return b};return{build:function(c,e){var f=c&&s.getRect(c),h=b(c),u=c&&"IMG"===h,n=s.hasBackgroundImage(c),p=c.innerText&&0<c.innerText.length,p=c.children&&0===c.children.length&&p,q=[h,f&&f.width>=g.RENDER.WIDTH_THRESHOLD&&f.height>=g.RENDER.HEIGHT_THRESHOLD?
g.RENDER.DIAGNOSTIC.QUALIFIED_SIZE:g.RENDER.DIAGNOSTIC.UNQUALIFIED_SIZE];!n&&!u||0!==c.naturalWidth&&0!==c.naturalHeight||q.push(g.RENDER.DIAGNOSTIC.BROKEN_IMAGE);n&&q.push(g.RENDER.DIAGNOSTIC.STYLED_NODE);p&&q.push(g.RENDER.DIAGNOSTIC.TEXT_NODE);e&&e.eventType&&("readystatechange"===e.eventType?q.push(g.RENDER.DIAGNOSTIC.DOCUMENT_READY):"load"===e.eventType&&q.push(g.RENDER.DIAGNOSTIC.LOAD_FIRED));m&&d(a).each(function(a,b){q.push(b)});return q.join(".")},getAdNodeName:b,appendCode:function(b){a.push(b);
m=!0}}},ac=function(d){var a,b=!1,c=function(){k.getAggregator().trigger("addOutputItem",{output:!a&&b?"1":"0"},"rmeas");a&&a.message&&(__IntegralASDiagnosticCall("renderloop",a.message),k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"rle",a.message))};k.getAggregator().on("eligiblerender",function(){b=!0;c()});k.getAggregator().on("renderdiag",function(b){a=b;c()});c()},Y=function(){return{applies:function(d,a){var b=k.getAggregator().request("mobileApp"),c=!a.bootstrapOn("mobOrTab")&&
d.browserIs(g.BROWSERS.WEBKIT);return(d.browserIs(g.BROWSERS.CHROME)||d.isAndroidWebViewBrowser()||c||d.browserIs(g.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&d.hasIntersectionObserver()&&a.on("chromeNativeIO")}}},Ob=function(){var d,a,b=!1,c=k.getAggregator().request("mPage"),e=function(){!b&&a&&d&&!c.isHidden()&&(b=!0,k.getAggregator().trigger("sendDt",g.DT_CODES.LARGE_BILLABLE))};k.getAggregator().on("primaryadfound",function(a){d=a.getDims().area()>=g.MRC_LARGE_AD_SIZE;e()});k.getAggregator().on("impressionsent",
function(){a=!0;e()});c.onHiddenChange(e)},ub=function(){var m=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};k.getAggregator().on("newScreenEvent",function(c){c=d(c).selectProperties(d(b).keys());c=d(c).asStrings();var e=d(c).compareTo(a);e&&(e.t=t.getTagTime(),m.push(e));d(a).mixin(c)});return{toString:function(){return d(m).toION(b)}}},ua=function(){var m=new bc,a=new E;return d(m).mixin(a)},E=function(){var m={},a={},b=function(b,c,h){if((b=a[b])&&0!==b)return h&&(b=b.slice(0,
1)),d(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){m[a]=m[a]||new ea;m[a].push(b,c)};return{on:function(a,f){var h={};f?h[a]=f:h=a;d(h).each(c);d(h).each(b)},once:function(a,f){b(a,f,!0)||c(a,f,1)},trigger:function(a){var b=d(arguments).toArray();b.shift();var c;(c=m[a])&&c.run.apply({},b)},persistentTrigger:function(b){var c=d(arguments).toArray();c.shift();var h=b;a[h]=a[h]||[];a[h].push(c);(h=m[b])&&h.run.apply({},c)}}},fa=function(){var m=function(a,c,e){var f,h=c.length,u=s.isWindow(a)?
a.frames:s.getChildWindowsOf(a);e&&e(a,c);if(u&&u.length){for(a=0;a<u.length;a++)(f=u[a])&&s.isWindow(f)&&(c[h]=a,m(f,c,e));c.pop()}},a=function(a,c){try{m(c||top,[0],a)}catch(e){}};return{traverse:a,getFrames:function(b,c){var e=[];a(function(a){var b;if(b=s.isWindow(a)){var c=!0;for(b=0;b<e.length;b++)if(e[b]===a){c=!1;break}b=c}b&&e.push(a)},c);return d(e).filter(b)}}},ea=function(){var m=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;m[m.length]=function(){c<b&&(c++,a.apply({},arguments))}},
run:function(){var a=arguments;d(m).each(function(b,c){c.apply({},a)})}}},eb=function(m){var a={};return{doEligibleJobs:function(b){d(m).each(function(c,e){var f=e&&e.getTime();d.isDef(f)&&b>=f&&!a[f]&&(e.getTask().call(),a[f]=!0)})}}},va=function(){var m,a=new ga,b=function(b,e,f,h){var u,n,p,q;if(JSON&&JSON.parse)try{u=JSON.parse(b.data),n=b.source,q=d.noop,e(u)&&(h&&(p=h(n,u))&&(q=function(){a.send(function(){return p},n)}),f(b,u,q))}catch(m){u&&k.getAggregator().trigger("error",g.ERROR_CODES.MESSAGE_LISTENER)}};
return{listen:function(a,e,f){m=function(h){b(h,a,e,f)};z.addEvent(x,"message",m)},stop:function(){m&&z.removeEvent(x,"message",m);m=null}}},ga=function(){var m=function(a){return d(a).isObj()?[a]:(new fa).getFrames(a)},a=function(a){return d(a).mapToObj(function(a,b){var f;d.isFunction(b)||(f={},f[a]=b);return f})};return{send:function(b,c){if(JSON&&JSON.stringify){var e=m(c);d(e).each(function(c,e){var u;u=d.resolve(b,e)||{};u.sentTime=r.now();u=a(u);e.postMessage(d(u).JSONStringify(),"*")})}}}},
cc=function(m,a){return{onAll:function(b){var c={};d(a).each(function(e,f){m.on(f,function(){c[f]=1;d(c).keys().length===a.length&&(c={},b())})})}}},qb=function(m){var a=0,b={},c=function(b,c,e){if(d.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||++a;this.props=e||{};this.output=function(){var a=d.resolve(b.output);this.props.asION&&(a=d(a).toION());return a}},e=function(a){var c,e,f=[];for(c in b)b.hasOwnProperty(c)&&(e=a(c,b[c]))&&f.push(e);
return f},f=function(a,e,f){f=f||e;f="string"!==typeof f?f:{};var p=function(a,e,f){a=new c(a,e,f);b[a.id]=a};d(a.output).isObj()&&!f.asION?d(a.output).each(function(a,b){p({output:b},a,f)}):p(a,e,f)};m.on("addOutputItem",function(a,b,c){f(a,b,c)});return{addItem:f,filterOutput:function(a,b){return e(function(c,e){var f=e.props,m;a(f)&&(m=e.output(),f.encode&&(c=encodeURIComponent(c),m=encodeURIComponent(m)),d.isFunction(b)?b(c,m):b[c]=m)})},iterate:e,cleanup:function(){e(function(a,c){c.props.flagForRemoval&&
delete b[a]})},getItem:function(a){return b[a]}}},bc=function(){var m={},a=function(a,c){m[a]=c};return{request:function(a){var c,e=m[a],f=d(arguments).toArray();f.shift();d.isUndef(e)||(c=d.isFunction(e)?e.apply({},f):e);return c},provide:function(b,c){c?m[b]=c:d(b).each(a);return c}}},Fb=function(){return{createInstance:function(d,a,b,c){return t.isDomless()?new dc:new ec(d,a,b,c)}}},ec=function(m,a,b,c){var e;return{collect:function(){var a=m.find(),h=a.getOutOfViewReasons(),u=b.isHidden(),n=c.isDeviceTypeGroupMobile()&&
e?e:K(s.calcWinDims()),p=a.getDims();e=n;if(!a.hasAd()||!n.hasValidDims()||!p.hasValidDims())return{viewState:g.NA,posViewState:g.NA,embedded:t.embedded,winDimensions:n,adDimensions:p};!0===u&&h.push(g.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:n,adDimensions:p,containerDimensions:a.getContainerDims(),method:a.getDetectionMethod(),viewState:h.length?g.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),reason:h.join("."),obstructed:d.stringifyTriState(a.isObstructed()),isHidden:d.stringifyTriState(a.isHidden()),
tabHidden:d.stringifyTriState(u),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},dc=function(){return{collect:function(){return{}}}},fc=function(m){m=m||d.identity;var a=[],b=r.now(),c=function(){var c=r.now();a.length&&(a[a.length-1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var f=a[a.length-1];b=m(b);c();0!==a.length&&
b===f.state||a.push({state:b,duration:0})}}},wa=function(d,a){var b=d||1,c=0,e=0,f,h=0;return{start:function(){0===c%b&&(f=r.now())},stop:function(){var d=f||a;0===c%b&&(h+=r.now()-d,e++);c++},getTime:function(){return h},getCount:function(){return e}}},xa=function(){var m,a=0,b=0,c=new E(!0),e=function(){m&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(e):f())},f=function(){m=!1;a=0};return{onTick:function(a,e){var f=d.collapseArgsIntoHash(a,e);d(f).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(f)},
start:function(){m||(m=!0,r.execAtEndOfThread(e))},kill:f,isActive:function(){return m}}},gc=function(d,a){var b,c=a,e=function(a){b||(a&&d(),b=r.setInterval(d,c))},f=function(a){a&&d();r.clearInterval(b);b=null};return{start:e,stop:f,updateFrequency:function(a,b){c=a;f();e(b)}}},ca=function(d){var a,b,c=0,e=t.getTagTime(),f=0,h=!1;return{getTotalTime:function(){return f},stop:function(){c=0;e=t.getTagTime();h=!1},mark:function(){a=h?t.getTagTime()-e:0;c+=a;c>=d&&(b=c-a<d,f+=b?c:a);e=t.getTagTime();
h=!0}}},S=function(m,a){var b=m||l.adsafeSrc||l.requrl;b&&0===b.indexOf("http")||(b=0===b.indexOf("//")?l.protocol+":"+b:l.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],e=b[2],f=b[3],h=b[4],u=b[5],n=m?b[6]:"",p=a?b[7]:"",q={},w=function(a){d.isDef(a)&&(h=a);return h},C=function(a){d.isDef(a)&&(u=a);return u},v=function(a,b){return a+"="+d(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var e,f;(e=q[b])?q[b]=
e+c:a&&p.length&&(e=p.split(b),f=1<e.length)&&(f=e[1].split("&")[0],e=[e[0],f].join(b),p=p.replace(e,e+c))},fullDom:c,hostname:f,sub:w,master:C,setParam:function(a,b){q[a]=q[a]||{};d(b).isObj()?d(q[a]).mixin(b):q[a]=b},path:function(a){n=a},toString:function(){var a=w()?w()+".":"",b=n?"/"+n:"",c;p||!d(q).isEmpty()?(c=d(q).isEmpty()?"":d(q).stringify(v,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return e+"://"+a+C()+b+c}}},Wb=function(){var m=function(a){var c=[];d(a).each(function(a,b){400>=c.concat(b).join("").length&&
c.push(b)});return c},a=function(a,c){var e;c&&c.id&&(e=c.id.replace(/[^\w-_.>\/]/g,""));return e};return function(){var b,c;try{if(t.friendly&&!t.isMobileApp())if(b=k.getAggregator().request("adSlotIds"))c=b;else{var e,f;if(e=s.getOurNodeInTop()){var h=s.getAncestorNodes(e);f=d(h).map(a)}if(b=f=f&&m(f))k.getAggregator().trigger("addOutputItem",{output:b},"slid",{type:g.DT_CODES.ADTALK,asION:!0}),k.getAggregator().provide("adSlotIds",b),c=b}return c}catch(u){k.getAggregator().trigger("error",g.ERROR_CODES.AD_SLOT_ID)}}()};
k("AdRefreshDetection",[],function(){var d=[30,45,60,90],a={start:function(){var a=this,c=l.asid,e=this.getChanId(),f=l&&l.contextNode&&l.contextNode.nextSibling&&l.contextNode.nextSibling.id;c&&e&&(this.recordAdSlotImpression(c,e,f,function(c,e){c?k.getAggregator().trigger("error",g.ERROR_CODES.AD_REFRESH):a.sendRefreshSession(e)}),a.registerInternalViewabilityListener(e,f))},adRefreshIntervalIsValid:function(a){return-1!==d.indexOf(a)},getChanId:function(){for(var a=l.reqquery.split("&"),c,e=/(\S+)=(\S+)/g,
f=0;f<a.length;f+=1){e.lastIndex=0;var d=e.exec(a[f]);d&&3===d.length&&"chanId"===d[1]&&(c=d[2])}return c},sendRefreshSession:function(a){a=(0===a.refreshCount?"self":a.refreshSessionId)+"."+a.refreshCount;k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"ar",a)},recordAdSlotImpression:function(a,c,e,f){var d=r.getTop();a={requestTop:"recordAdSlotImpression",asid:a,adUnitId:c,cacheId:e};window.addEventListener("message",function(a){if(/refreshSession/g.test(a.data))try{var b=a&&
a.data&&JSON.parse(a.data);f(null,b)}catch(c){f(c)}},!1);d.postMessage(JSON.stringify(a),"*")},registerInternalViewabilityListener:function(a,c){var e=this,f=l.adRefreshThreshold&&parseInt(l.adRefreshThreshold)||null,d=r.getTop();if(f&&this.adRefreshIntervalIsValid(f))k.getAggregator().on("sendDt",function(u,n){u===g.DT_CODES.PING&&n===f&&(r.execAtEndOfThread(function(){d.postMessage(JSON.stringify({requestTop:"refreshAd",adUnitId:a,cacheId:c}),"*")}),e.sendAutoRefreshProp(f))})},sendAutoRefreshProp:function(a){k.getAggregator().trigger("addThrottledProp",
g.DT_SLOT.ENVIRONMENT,"ir",a);k.getAggregator().trigger("adSessionComplete")}};t.isRefreshable(function(b,c){var e;if(!b&&c)try{e=JSON.parse(c),e.isRefreshable&&e.adServerName&&a.start()}catch(f){k.getAggregator().trigger("error",g.ERROR_CODES.AD_REFRESH)}});return a},{tier:g.TIERS.ENVIRONMENT,applies:function(d,a,b){return b.isPossiblyRefreshable()}});var xb=function(){var m,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,
f){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&b.on("ancestor")&&f.xDomainIframe},isStarted:function(){return!!a},start:function(){try{m=r.getWindow().location.ancestorOrigins,a=!0}catch(b){k.getAggregator().trigger("error",g.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return m&&m.length||0},getTopDomain:function(){return d.last(m)},sendOriginList:function(){var a;a="ao:"+(m?d(m).map(b).reverse():[]).join(",");k.getAggregator().trigger("addOutputItem",{output:a},"tpiLookup",
{type:g.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});k.getAggregator().trigger("sendDt",g.DT_CODES.THIRD_PARTY)}}},Ub=function(m,a,b,c,e){var f=function(a,b,c){e.addItem({output:a+"."+b+"."+c},"ctpl")},h=function(e){try{a.diagnostic("c");var h=e.length,p=0,q=0;f(h,0,0);d(e).each(function(a,b){m.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){f(h,p,++q)},!0);f(h,++p,q)})}catch(w){b.add(g.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new S).fullDom;"/"!==a.slice(-1)&&(a+="/");a+=
"tpl?asId="+l.asid;m.jsonp(a,h)}catch(c){b.add(g.ERROR_CODES.AT_INIT)}}}},Ib=function(d,a,b,c){return{enabled:"true"===l.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===l.accountForSadImps&&c.measure(a),l._onAPIResult&&l._onAPIResult(a)}catch(f){d.add(g.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},ob=function(){return{createInstance:function(d,a,b,c){return t.isDomless()?new hc:new ic}}},ic=function(){var m=g.BROWSERS,a=function(a){return b()===a},b=function(){var a=
"u",b=r.getWindow();try{d.isDef(b.opera)&&d.isDef(b.opera.buildNumber)?a=m.OPERA:d.isDef(b.mozInnerScreenY)?a=m.GECKO:d.isDef(b.chrome)&&d.isDef(b.chrome.csi)?a=m.CHROME:d.isDef(b.msWriteProfilerMark)&&d.isDef(b.crypto)?a=m.MSEDGE:d.isDef(b.attachEvent)||d.isDef(b.msCrypto)?a=m.IE:d.isDef(b.WebKitPoint)&&(a=m.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=r.getWindow();d.isDef(b.navigator)&&d.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===
typeof IntersectionObserver},hasAncestorOrigins:function(){var a=r.getWindow().location;return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!d.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:g.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),f;f=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var h=g.NA,u=
r.getDoc(),n=u.createElement("div");if(a(m.IE))try{if("-ms-ime-align"in u.documentElement.style)h="11";else for(n.style.behavior="url(#default#clientcaps)",u=0;u<f.length&&!(h=n.getComponentVersion(f[u],"componentid").replace(/,/g,"."));u++);}catch(p){}f=h;h=g.NA;n=r.getWindow();d.isDef(n.navigator)&&d.isDef(n.navigator.appName)&&(h=n.navigator.appName.toLowerCase()[0]);return{br:c,abv:f,an:h}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],h=function(){return d(b).findFirst(function(b,
c){return P.contains(a,c)})};return P.contains(a,"Android")&&h()},getIOSVersion:function(){var a,b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},hc=function(){var d=function(){return!1},a=function(){return g.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:d,getUserAgent:d,hasPostMessage:d,hasAncestorOrigins:d,hasIntersectionObserver:d,
isAndroidWebViewBrowser:d}},Sa=function(){return{createInstance:function(d,a){return t.isDomless()?new jc(a):new kc(d,a)}}},lc=function(){var d,a=function(a,c){var e="",f="",d=r.getDoc().getElementsByTagName("ins");if(d&&0<d.length){f=d[0];e="<ins";for(d=0;d<f.attributes.length;d++)e+=" "+f.attributes[d].nodeName+'="'+f.attributes[d].nodeValue+'"';e+=">";f="</ins>"}return'<!doctype html><html><head></head><body style="margin:0px;border:0px;padding:0px;font-size:0px"><script>var IASid = "'+a+'", largestSize = 0;var IASmonitorDom = function () {  var DOM_MONITOR_PERIOD = 100;  var i, us, thisSize, thisWidth, thisHeight;  var elems = document.body.getElementsByTagName("*");  for (i = 0; i < elems.length; i++) {    if (elems[i].tagName && elems[i].tagName.toLowerCase() === "ins")      continue;    thisWidth = elems[i].offsetWidth;    thisHeight = elems[i].offsetHeight;    thisSize = thisWidth * thisHeight;    if (thisSize > largestSize) {      largestSize = thisSize;      us = parent.document.getElementById(IASid);      if (us) {        us.setAttribute("CreativeLoaded","true");        if (elems[i].style.left !== "") {          us.style.left = elems[i].style.left;          elems[i].style.left = "0px";        }        if (elems[i].style.top !== "") {          us.style.top = elems[i].style.top;          elems[i].style.top = "0px";        }      }    }  }  setTimeout(IASmonitorDom, DOM_MONITOR_PERIOD);};setTimeout(IASmonitorDom,50);\x3c/script>'+
e+'<script src="'+c+'">\x3c/script>'+f+"</body></html>"};return{isApplicable:function(a){d=k.getAggregator().request("omidAdSessionContext");var c=!(!d.app||!d.isDisplay||d.isWeb);a=a&&-1<a.indexOf("/blocking/")&&!t.integratedBlockingApplies(a);return c&&a},deployBlockingScriptIntoIframe:function(b){d=k.getAggregator().request("omidAdSessionContext");var c="iasbi"+l.asid,e;e=l.contextNode.parentNode;var f,h=l.adWidth&&0<l.adWidth?l.adWidth:0,u=l.adHeight&&0<l.adHeight?l.adHeight:0,n=r.getDoc().getElementsByTagName("ins"),
p;p=f=0;n&&0<n.length&&(p=n[0],f=parseInt(p.style.width),p=parseInt(p.style.height));h=f||h||window.innerWidth;u=p||u||window.innerHeight;"complete"===r.getDoc().readyState&&(l.forceAppend="true");"true"===l.forceAppend?(f=r.getDoc().createElement("IFRAME"),f.id=c,f.src="about:blank",e.appendChild(f)):r.getDoc().write('<iframe id="'+c+'" src="about:blank"></iframe>');if(e=r.getDoc().getElementById(c))e.style.width=h+"px",e.style.height=u+"px",e.scrolling="no",e.frameborder=0,e.style.position="absolute",
e.style.padding=e.style.margin=e.style.border="0px";e&&(e=e.contentWindow.document)&&(e.open().write(a(c,b)),e.close())}}},kc=function(m,a){var b=function(a,b){function c(a,b,e){"script"!==a?(b=M.createElement("DIV"),b.innerHTML=e,e=b.childNodes[0]):(e=M.createElement("SCRIPT"),e.src=b);l.contextNode.parentNode.appendChild(e)}var e,f;b=b||a;a=1<arguments.length?a:"script";e={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="',
'"></iframe>'],img:['<img src="','"/>']}[a];e=e[0]+b+e[1];t.isOmid()?(f=new lc,f.isApplicable(b)?f.deployBlockingScriptIntoIframe(b):c(a,b,e)):"true"===l.forceAppend?c(a,b,e):M.write(e)},c=function(a,b,c){var e=!c&&z.getXHR2();e?(e.open("POST",a),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&b&&b()},e.send()):(c=s.createImage(),b&&(c.onload=b),c.src=a)},e=function(a,b,c,e){var f=M.createElement("script");c=c||l.contextNode.parentNode;f.type="text/javascript";f.src=a;b&&(f.onload=
b);e&&(f.setAttribute("defer",""),f.setAttribute("async",""));d.isDef(c)&&c.appendChild(f)},f=function(a){d.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),c(a,void 0,!0))},h=function(b,c,f,d){e(a.wrap(b,c,f,d))};k.getAggregator().on({addNode:b,send:c,exec:e,notify:f,jsonp:h});return{addNode:b,send:c,exec:e,notify:f,jsonp:h}},jc=function(m){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";k.getAggregator().request("omidVerificationClient")["script"===
a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);k.getAggregator().request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){k.getAggregator().request("omidVerificationClient").injectJavaScriptResource(a,b||function(){})},e=function(a){d.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&(a=(new S(a,!0)).toString(),b(a))},f=function(a,b,e,f){c(m.wrap(a,b,e,f))};k.getAggregator().on({addNode:a,send:b,exec:c,notify:e,jsonp:f});
return{addNode:a,send:b,exec:c,notify:e,jsonp:f}},t=function(){var m="undefined"===typeof window,a="undefined"!==typeof x&&"undefined"!==typeof top&&x!==top,b=function(){var a=!1;if(m)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return m||d.isDef(r.getWindow().mraid)},e=function(){return!m&&d.isDef(r.getWindow().mraid)},f=function(){var a=!1;if(!m)var b=(a=r.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&d.isFunction(b.addVideoEventListener),a=e()&&!!a;return a},h=function(){var a;
if(!(a=-1!==l.mode.indexOf("jsvid"))){var b;a=!1;var c=k.getAggregator();if(!m&&(c=c.request("avidJsClient"),c.isAvidAvailable()))try{b=c.getAvidAdSessionContext(),a=b.mediaType===g.MEDIA_TYPE.VIDEO}catch(e){}(b=a)||(c=k.getAggregator(),b=c.request("omidVerificationClient"),a=!1,c=c.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===g.MEDIA_TYPE.VIDEO),b=a||f());a=b}return a},u=function(){return l.mobOrTab},n=function(a){return!1===d(l.customViewability).isArray()?!1:0<d(l.customViewability).filter(function(b,
c){return P.contains(c.id,a)}).length},p=function(){return n("grpm")||l.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(m)a=!0;else{try{c=S(a.document.referrer),b=c.hostname===a.location.hostname}catch(e){}a=b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return r.now()-l.birthdate},getPageTime:function(){var a=g.NA;!m&&d.isDef(x.chrome)&&d.isDef(x.chrome.csi)&&d.isFunction(x.chrome.csi)&&(a=r.round(x.chrome.csi().pageT));return a},isVideo:h,
isMobileApp:c,isSpecifiedAd:function(){var a=!1;m||(a=(a=l._cl_adpath)&&d.isStr(a));return a},isCompoundAd:function(){var a=!1,b=/\[(.*)\]/;m||(a=b.exec(l._cl_adpath),a=null!==a&&0!==a[1].length&&1<a[1].split(",").length);return a},isAvid:function(){return!m&&d.isDef(r.getWindow().avid)},isOmid:function(){var a=k.getAggregator().request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new da).accepts()},isOmidForWeb:function(){return(new ya).accepts()},isDomless:function(){return m},
isAvidNative:function(){var a=!1,b=k.getAggregator();m||(b=b.request("avidJsClient"),b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===g.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===g.AVID.AD_SESSION_TYPE.MANAGED_VIDEO));return a},isBustedIframe:function(){var a=!1;m||(a=void 0!==ha());return a},isMraid:e,isSafeFrame:function(){var a=!1;m||(a=d(r.getWindow().$sf).isObj(!1)&&d(r.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:f,isDeviceTypeGroupMobile:u,usesIASFullyInViewCustomMetric:function(){return n("fiv")||
l.use100v||!p()},usesGroupMCustomMetric:p,isCeltra:function(){var a=!1;m||(a=za().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return p()&&u()},usesZeroPivCustomMetric:function(){return!1===d(l.customViewability).isArray()?!1:0<d(l.customViewability).filter(function(a,b){return d(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},isRefreshable:function(a){try{var b=r.getTop();window.addEventListener("message",function(b){/isRefreshable/g.test(b.data)&&
a(null,b&&b.data)},!1);b.postMessage(JSON.stringify({requestTop:"isRefreshable"}),"*")}catch(c){a(c)}},isPossiblyRefreshable:function(){return!m&&!c()&&!h()&&a&&"jload"===l.mode},integratedBlockingApplies:function(a){var b,c;l.contextNode&&d.isFunction(l.contextNode.getAttribute)&&(b=l.contextNode.getAttribute("data-ias-check-tag"),c=l.contextNode.getAttribute("data-ias-check-done"));return l.integration&&!(!0===l.fwMonitoring||"true"===l.fwMonitoring)&&d.isDef(JSON)&&d.isFunction(JSON.parse)&&"true"===
b&&"false"===c&&(0<a.indexOf("skeleton.js")||0<a.indexOf("/internal/"))}}}(),z={addEvent:function(m,a,b,c){d.isDef(m.addEventListener)?"mouseenter"===a?m.addEventListener("mouseover",z.mouseEnter(b),c):"mouseleave"===a?m.addEventListener("mouseout",z.mouseEnter(b),c):m.addEventListener(a,b,c):d.isDef(m.attachEvent)&&("DOMContentLoaded"===a&&(a="load"),m.attachEvent("on"+a,b))},removeEvent:function(m,a,b){d.isDef(m.removeEventListener)?("mouseenter"===a?(a="mouseover",b=z.mouseEnter):"mouseleave"===
a&&(a="mouseout",b=z.mouseEnter),m.removeEventListener(a,b)):d.isDef(m.detachEvent)&&m.detachEvent("on"+a,b)},mouseEnter:function(d){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||d.call(this,b)}},isAChildOf:function(d,a){if(d===a)return!1;for(;a&&a!==d;)a=a.parentNode;return a===d},getStyle:function(d,a,b){var c="",e=M.defaultView&&M.defaultView.getComputedStyle;b=b||"";e?c=(d=M.defaultView.getComputedStyle(d,b))?d.getPropertyValue(a):c:d.currentStyle&&(a=a.replace(/\-(\w)/g,
function(a,b){return b.toUpperCase()}),c=d.currentStyle[a]);return c},getXHR2:function(m,a){var b,c;d.isDef(x.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):d.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(m,a){if(t.isDomless())r.setTimeout(function(){m()},50);else{var b=a||(t.xDomainIframe?M:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},e=this;(function(a){var h=function(){a(!0)};d.isFunction(M.addEventListener)?
"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(h):e.addEvent(b,"DOMContentLoaded",h,!1):c(a)})(m)}},isSandboxed:function(d){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(e){}if(a)d=a.hasAttribute("sandbox");else{a=!1;b=r.getDoc();if(d.browserIs(g.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(f){/Assignment is forbidden for sandboxed iframes/.test(f.message)&&(a=!0)}d=a}c=d}return c},styleElement:function(m,
a){if(m&&d(m.style).isObj()&&d(a).isObj()){var b="";d(a).each(function(a,e){b+=a+": "+e+" !important;"});m.style.cssText=b}},nodeIsAbsolutelyPositioned:function(d){return"absolute"===z.getStyle(d,"position")||d.style&&"absolute"===d.style.position}},Z=function(m){var a,b=Z.callTypeCounter,c=[g.DT_CODES.ADTALK],e={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},f=function(){var a={},b=g.DT_CODES;d("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,
f){a[b[f]]=e[f]});return a};a=function(){var a=f()[m],e=b&&b[m];d.isDef(e)&&0!==e&&d(c).contains(m)&&(a=a+"."+e);e=b[m];b[m]=d.isDef(e)?e+1:1;return a}();return{callType:m,enumerator:a}};Z.callTypeCounter={};var Hb=function(m,a,b,c,e,f,h,u){var n=0,p=0,q=!1,w=function(a,f,u,m,w,C){u=u||!b.on("postDts");var t=a===g.DT_CODES.DIAGNOSTIC||a===g.DT_CODES.ADTALK||a===g.DT_CODES.SCA||a===g.DT_CODES.XSCA||a===g.DT_CODES.EXTERNAL||a===g.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==h.getCurrentLoc()))try{var s=
l.dtBaseURL,J=new S(s,!0),x=r.now();k.getAggregator().trigger("preSendDt",a);s||(J.path("dt"),b.on("usedtdomain")&&J.sub("dt"));v(J,a,f);w&&w.field&&J.setParam(w.field,w.value);m||H(J,a);k.getAggregator().trigger("send",J,function(){p+=1;n=r.now()-x;d.isFunction(C)&&C()},u);a===g.DT_CODES.UNLOAD&&(q=!0);e.cleanup()}catch(z){__IntegralASDiagnosticCall("dt-"+a,z),k.getAggregator().trigger("error",g.ERROR_CODES.PHONE_HOME)}};m=function(){q||w(g.DT_CODES.UNLOAD,-1,!0)};var C=function(a,c){var e={bapi:"a",
bapiClient:"b",jload:"c",jss:"d",jsi:"e"},f=l.mode,e=e[a]||e[f];b.on(c||f+"Diag")&&e&&w(g.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:e})},v=function(a,b,f){var h=new Z(b);f=d.isDef(f)?f:h.enumerator;a.setParam("asId",l.asid);f={c:c.getCacheBustId(),pingTime:f,time:t.getTagTime(),type:b};e.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},f);a.setParam("tv",f)},H=function(c,d){var q,m={};e.filterOutput(function(a){return a.standalone&&
!a.minDt&&a.type===d},function(a,b){c.setParam(a,b.replace("%3A",":"))});h.fastForward();if(d===g.DT_CODES.CUSTOM||d===g.DT_CODES.UNLOAD||d===g.DT_CODES.VIDEO_EVENTS||d===g.DT_CODES.FULLY_INVIEW||d===g.DT_CODES.PING||d===g.DT_CODES.VIEWABILITY_READY||d===g.DT_CODES.ADTALK)m.clog=u,t.isVideo()&&(q=t.isOmid()&&!t.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(q=k.getAggregator().request(q))&&!q.isEmpty()&&(m.ve=q));d===g.DT_CODES.UNLOAD&&(m.ndt=p);-1!==l.mode.indexOf("jsvid")&&(m.vv=k.getAggregator().request("videoVersion"));
m.NULL1=b.output();m.NULL2=h.stringify(10);m.em=t.embedded;m.fr=t.friendly;m.e=a.toString();m.tt=l.mode;m.dtt=n;e.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===d);b&&a.oneTime&&(a.flagForRemoval=!0);return b},m);c.setParam("tv",m);c.setParam("br",f.getBrowserType())};k.getAggregator().on({sendDt:function(a,b,c){w(a,d.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){w(a,b,void 0,!0)},sendDiag:C,updateDtCount:function(){p++},unload:m});return{send:w,unload:m,
diagnostic:C,setViewabilityMod:function(a){}}},K=function(m){var a={},b=!1,c=function(){var a=1===m.nodeType?s.nodeIsHidden(m):0===m.width||0===m.height;return b?!1:a},e=function(){var b={};d(a).each(function(a,c){b[a]=r.round(c)});return b},f=function(a){return d.isNumeric(a)||d.isUndef(a)},h=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;m!==x.parent&&(1!==m.nodeType?a=m:d.isDef(m.getBoundingClientRect)&&(b=s.getRect(m),d(a).mixin({x:d.useIfDef(b.x)||b.scrX,y:d.useIfDef(b.y)||
b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return f(a.scrX)&&f(a.scrY)&&d.isNumeric(a.width)&&d.isNumeric(a.height)},toString:function(){var a=e();return[a.scrX,a.scrY,a.width,a.height].join(".")},getRounded:e,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:h,isMrcLarge:function(){return h()>=g.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=h()}}},s={findElementsWithSize:function(m){var a=[],b=function(c){1>
s.getNodeArea(c)?d(c.children).each(function(a,c){b(c)}):a.push(c)};b(m);return a},nodeIsHidden:function(d){var a=this.getRect(d),b=0!==parseInt(z.getStyle(d,"width"))&&0===a.width,a=0===a.width||0===a.height;d="hidden"===z.getStyle(d,"visibility");return b||a||d},calcWinDims:function(){var d,a,b;try{a=s.browserWindowPosition(),b=s.windowSize(),d={scrX:r.round(a.scrX),scrY:r.round(a.scrY),width:r.round(b.width),height:r.round(b.height)}}catch(c){k.getAggregator().trigger("error",g.ERROR_CODES.GET_WIN_DIMENSIONS),
d={}}return d},windowSize:function(){var m={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,d.isDef(top.innerWidth))m.width=top.innerWidth,m.height=top.innerHeight;else if(d.isDef(b.clientWidth))m.width=b.clientWidth,m.height=b.clientHeight;else if(d.isDef(a.clientWidth))m.width=a.clientWidth,m.height=a.clientHeight;else throw m.width=m.height=0,"";else d.isDef(x.outerWidth)&&(m.width=x.outerWidth,m.height=x.outerHeight);return m},browserWindowPosition:function(){var m=
0,a=0;d.isDef(x.screenX)?(m=x.screenX,a=x.screenY):d.isDef(x.screenLeft)&&(m=x.screenLeft,a=x.screenTop);return{scrX:m,scrY:a}},getNodeArea:function(d){var a=-1;d&&(d=s.getRect(d),a=d.width*d.height);return a},getRect:function(m){var a={},b=s.browserWindowPosition();m=m.getBoundingClientRect();d.isUndef(m.x)&&(a.x=m.left,a.y=m.top);d.isUndef(m.width)&&(a.width=m.right-m.left,a.height=m.bottom-m.top);d(a).mixin(m,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(m){m=m.document;
return m.documentElement&&d.isDef(m.documentElement.clientWidth)&&m.documentElement||m.body},getPlaceholderSpan:function(){var m=M.createElement("span");d(m.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});m.innerHTML=".";return m},createImage:function(){var m=t.friendly&&r.getTop().Image;return d.isFunction(m)?new m:new Image},createHiddenIframe:function(d){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",
top:"-10000px",left:"-10000px"};z.styleElement(a,d?{display:"none"}:b);return a},tagNameIs:function(d,a){return d.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(d,a){var b,c,e,f=1E4,h=1E4;b=z.nodeIsAbsolutelyPositioned(d);e=!s.tagNameIs(d,"OBJECT");if(null!==d.parentNode&&!b&&e&&!s.tagNameIs(a,"BODY")){e=d;do e=e.parentNode,b=!s.tagNameIs(e,"OBJECT"),c="inline"!==z.getStyle(e,"display"),b&&c&&(b=s.getRect(e),f=b.width<f?b.width:f,h=b.height<h?b.height:h);while(e.parentNode!==
M&&e!==a)}return{width:r.round(f),height:r.round(h)}},hasBackgroundImage:function(d){d=z.getStyle(d,"background-image");return""!==d&&"none"!==d},findChildWithLargestContent:function(d,a){var b=k.getAggregator().request("mobileApp").isMobileAppEnvironment(),c=this.hasBackgroundImage,e=function(a){for(var c=a;a.parentNode!==d&&"inline"!==z.getStyle(a.parentNode,"display");){var e;if(!(e=!b)){e=a.parentNode;var f=!0;if("visible"===z.getStyle(e,"overflow")||"visible"===z.getStyle(e,"overflowX")&&"visible"===
z.getStyle(e,"overflowY"))f=!1;e=f}e&&(c=a.parentNode);a=a.parentNode}return c},f=null,h=function(a){var b,e,f=null,h=-1;if(a.length)for(b=0,e=a.length;b<e;b++){var g=a[b],v=s.getNodeArea(g),k;if(k=v>h){k=g;var l=void 0;if(l=k.parentNode===d)if(l=void 0,l="DIV"===k.nodeName)if(l=void 0,l=!c(k))if(l=void 0,!(l="0"===z.getStyle(k,"opacity")||"hidden"===z.getStyle(k,"visibility"))){var r=l=void 0;k=k.childNodes;for(l=0;l<k.length;l++)1===k[l].nodeType&&(r=!0);l=!r}k=!l}k&&(f=g,h=v)}f&&(f.hasValidSizeForMobileApp=
1<h);return f}(function(b){var c,e,f,d,h=[],m=a||"iframe img a object embed div".split(" ");c=0;for(e=m.length;c<e;c++){f=m[c].toLowerCase();var g=b.getElementsByTagName&&b.getElementsByTagName(f);if(g&&g.length)for(f=0,d=g.length;f<d;f++)h.push(g[f])}return h}(d));h&&(f=e(h),f.hasValidSizeForMobileApp=h.hasValidSizeForMobileApp);return f},screenSize:function(){if(t.isDomless())return{width:0,height:0};var m={width:-1,height:-1};try{d.isDef(x.screen)&&(m={width:x.screen.width,height:x.screen.height})}catch(a){}return m},
calcMonDims:function(){var m=d(s.screenSize()).mixin({scrX:0,scrY:0});d.isDef(screen.availLeft)&&(m={scrX:x.screen.availLeft,scrY:x.screen.availTop,width:x.screen.availWidth,height:x.screen.availHeight});return m},getOurIFrameInTop:function(){for(var d,a=r.getTop(),b=r.getWindow();b!=a;)d=b,b=d.parent;return d},getOurNodeInTop:function(){var d;t.friendly&&(d=t.embedded?(d=s.getOurIFrameInTop())&&d.frameElement:l.contextNode);return d},getAncestorNodes:function(d){var a=[],b=d.ownerDocument&&d.ownerDocument.documentElement;
if(b)for(;d.parentNode!==b;)a.push(d),d=d.parentNode;return a},getTagsNamed:function(d,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(d)}catch(e){b=null}return b},containsScriptTagWithSrc:function(m){return!!d(s.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return d.isFunction(m)?m(c):c===m})},contains:function(m,a){var b=!1;try{b=d.isDef(m)&&d.isFunction(m.contains)&&m.contains(a)}catch(c){}return b},querySelector:function(d,a){var b;try{b=d.querySelector(a)}catch(c){b=null}return b},
nodeIsInWindow:function(d,a){return d.ownerDocument&&(d.ownerDocument.defaultView||d.ownerDocument.parentWindow)===a},setAttributeOf:function(g,a,b){g&&d.isFunction(g.setAttribute)&&g.setAttribute(a,b)},removeAttributeOf:function(g,a){g&&d.isFunction(g.removeAttribute)&&g.removeAttribute(a)},crossQuerySelector:function(g,a){var b,c,e=[l.contextNode.parentNode,r.getDoc()];t.friendly&&e.push(r.getTop().document);if(a&&t.embedded)try{e.push(r.getWindow().frameElement.ownerDocument)}catch(f){}d(e).each(function(a,
e){try{c=s.querySelector(e,g)}catch(f){}!b&&c&&(b=c)});return b},getNodeName:function(d){return d&&d.nodeName},isWindow:function(d){var a=!1;try{a=d&&"object"===typeof d&&"setInterval"in d}catch(b){a=!0}return!!a},getChildWindowsOf:function(g){var a=[];(g=s.getTagsNamed("iframe",g))&&(a=d(g).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var d=r.getWindow().frameElement;return d&&d.id},isViewportVisible:function(d,a){var b=d.innerWidth,c=d.innerHeight,e=b>a.width&&c>a.height;
return b*c>a.width*a.height&&e},getTagName:function(d){return d.tagName.toLowerCase()},getAttribute:function(d,a){return d.getAttribute(a)},attributeMatches:function(d,a,b){d=d&&s.getAttribute(d,a);return b.test(d)},isImageTag:function(d){return d&&d.src&&s.tagNameIs(d,"img")},getDimensionFromStyle:function(g){var a,b=z.getStyle(g,"width");g=z.getStyle(g,"height");b&&g&&(a={width:d.getNum(b),height:d.getNum(g)});return a},getDimensionFromAttributes:function(g){var a,b=s.getAttribute(g,"width");g=
s.getAttribute(g,"height");b&&g&&(a={width:d.getNum(b),height:d.getNum(g)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var e,d,h;if(c(b))d=b;else if(h=b.children)for(e=0;e<h.length&&!(d=a(h[e],c));e++);return d},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,e="fixed"===z.getStyle(a,"position"),d="hidden"!==z.getStyle(b,"overflow")&&!e;t.isSpecifiedAd()&&(e||d)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||
a},getElementsWindow:function(a){var b=s.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return s.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===s.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},Ra=function(){var a={},b=function(b){d.isDef(a[b])?a[b]++:a[b]=1};k.getAggregator().on("error",
function(a){a=d(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",e;for(e in a)a.hasOwnProperty(e)&&(b+=e);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},Mb=function(){return{createInstance:function(a,b){return t.isDomless()?new mc:new nc(a,b)}}},nc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=d(a).map(function(a,b){return b.val}),b.push(l.adsafeSrc,l.requrl,l.reqquery);else throw Error("Unexpected data type in ExchangeParser.getUrlList");
return b};return{parse:function(e){try{var f,h=c(e),u=h&&h.length&&h.join("|"),n=l.exchList;u&&(f=d(n).map(function(a,b){return 0<=u.indexOf(P.rot(b))?a:void 0}),f.length&&b.addItem({output:f.join(".")},"ex",{type:g.IMPRESSION_EVENT}))}catch(p){a.add(g.ERROR_CODES.EXCHANGE_PARSING)}}}},mc=function(){return{parse:function(a){}}},lb=function(){var a={},b=function(b){var c;d.isUndef(a[b])&&(c=l.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],
a[b]=!c||c>100*r.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},e={gmnp:"groupm_native_publisher","for":"forceAppend",b11:"b11",cnod:"cnod"};l.integration&&(e.intblk="integration");var f=function(){var b,f;b=d(c).mapToObj(function(b,c){var e={};e[b]=d.fromBoolToNum(a[c]);return e});f=d(e).mapToObj(function(a,b){var c={};c[a]=d.fromBoolToNum(h(b));return c});f.gm=d.fromBoolToNum(t.usesGroupMCustomMetric());return d(b).mixin(f)},h=function(a){var b=l[a];return d(["integration"]).contains(a)?
!!b:!0===b||"true"===b||d.isFunction(b)};d(c).each(function(a,c){b(c)});return{on:b,bootstrapOn:h,bootstrapperHas:function(a){a=d.isStr(a)?[a]:a;return d(a).map(function(a,b){if(d.isDef(l[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=l.sp_cdnScripts&&l.sp_cdnScripts[a];return c&&a},output:function(){return d(f()).toParams()}}},Bb=function(){return{calcInitialViewState:function(a,b){var c;c={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var e={IN_VIEW:75,OUT_OF_VIEW:25,
PARTIAL_VIEW:50},f=g.NA;c=b?c:e;d.isDef(a)&&a!==g.NA&&-1<a&&(f=a>=c.IN_VIEW?g.IN_VIEW:a<=c.OUT_OF_VIEW?g.OUT_OF_VIEW:a>=c.PARTIAL_VIEW?g.PARTIAL_VIEW_PLUS:g.PARTIAL_VIEW_MINUS);return f},calcPercentInView:function(a,b,c,e){var f=0,h=a;a.hasValidDims()&&!a.isHidden()&&(d([b,c,e]).each(function(a,b){if(b.hasValidDims()){var c=h.getRounded(),e=b.getRounded(),d=Math.max(c.scrX,e.scrX),f=Math.max(c.scrY,e.scrY),g=Math.min(c.scrX+c.width,e.scrX+e.width),c=Math.min(c.scrY+c.height,e.scrY+e.height),g=g-d,
c=c-f;h=K({scrX:d,scrY:f,width:0<g?g:0,height:0<c?c:0})}}),f=r.round(h.area()/a.area()*100));return f}}},pb=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=x.Uint32Array&&x.crypto&&x.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),x.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,
32)}catch(e){k.getAggregator().trigger("error",g.ERROR_CODES.UID_GENERATION)}return a}());var e=function(){return l.anId};return{getAsid:function(){return l.asid},getAnId:e,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return d.toBase(a,62)},getFwId:function(){return e()||l.advEntityId+"-"+l.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},ib=function(a,
b){return{init:function(c){a.jsonp(c,function(a){b.send(g.DT_CODES.THIRD_PARTY,void 0,!1,!0,{field:"tpiLookup",value:a})},!1,"callback")}}},oc=function(a,b,c,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return function(){var f=a.getTimeInViewInSeconds(),h=a.getTimeInViewForRts();d.isDef(e)&&(k.getAggregator().trigger("addOutputItem",{output:e},"metricId",{type:b}),k.getAggregator().trigger("addOutputItem",{output:"t"},"cmr",{type:b}));k.getAggregator().trigger("sendDt",
b,f);if(c[h])c[h]()}}}},Gb=function(){return{createPingJobs:function(a,b,c,e){return d(b.getTimeThresholds()).map(function(b,d){return new oc(d,a,c,e)})}}},Aa=function(){var a,b=[],c=function(a){return{type:a.tp||a.type||"",time:a.t||a.timestamp&&a.timestamp-l.birthdate||""}},e=function(){a||(a=k.getAggregator().request("viewabilityDefinitions"));a&&0==b.length&&d(a).each(function(a,c){c.qivThreshold&&b.push(c)})},f=function(a){var e=new c(a);a=["_","firstQuartile","midpoint","thirdQuartile","complete"];
var f=a.indexOf(d(a).findFirst(function(a,b){return-1!==e.type.toLowerCase().indexOf(b.toLowerCase())})),p=k.getAggregator().request("mScreenEvents").getCurrentEvent(),q=Math.floor(e.time/1E3);d(b).each(function(a,b){var c=!1,c=b.qivThreshold.indexOf(f);-1!==c&&b.isInView(p)&&0<b.qivThreshold.length&&(b.qivThreshold.splice(c,1),c=0==b.qivThreshold.length)&&(k.getAggregator().trigger("addOutputItem",{output:b.metricId},"metricId",{type:g.DT_CODES.CUSTOM}),k.getAggregator().trigger("addOutputItem",
{output:"q"},"cmr",{type:g.DT_CODES.CUSTOM}),k.getAggregator().trigger("sendDt",g.DT_CODES.CUSTOM,q),b.rtsCallbacks&&d.isFunction(b.rtsCallbacks[g.RTS_KEY_FOR_VQ])&&b.rtsCallbacks[g.RTS_KEY_FOR_VQ]())})};return{init:function(){e();k.getAggregator().on("videoQuartileEvent",function(a){e();f(a)})}}},ma=function(){var a=function(a,b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var d=a.indexOf("?");b=b+"="+c;if(-1===d)return a+"?"+b;d++;return a.slice(0,d)+b+"&"+a.slice(d)},
c=function(){var a=l.asid;return"__IntegralAS_"+(a&&a.replace(/\-/g,"")||"")+"_"+r.round(1E4*Math.random())};return{wrap:function(e,d,h,u){var n=c(),p,q,g;u=u||"ias_callback";e=""+e;RegExp(u).test(e)&&(p=RegExp("("+u+"=)(.[^&]*)").exec(e)[0],q=p.split("=")[1],g=P.stringToFn(q),e=a(e,p));x[n]=function(a){d(a);h&&g&&g(a);x[n]=void 0};return e=b(e,u,n)},wrapToGlobal:function(a){var b=c();x[b]=function(c){a(c);x[b]=void 0};return b}}},Jb=function(a,b,c){var e=function(a,b){var c=a,e;b&&(e=","+d(b).stringify(function(a,
b){return a+":"+b},","),c=S(a,!0),c.appendToParamValue("adsafe_jsinfo",e),c=c.toString());return c},f={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?k.getAggregator().trigger("jsonp",c,a.callback,!0):k.getAggregator().trigger("send",c,function(){k.getAggregator().trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){var c=a.enabled?a.callback:d.noop,
e=a.enabled?!0:!1;k.getAggregator().trigger("jsonp",b,c,e)}},jsapi:{isFW:!0,impressionMethod:function(b){var c=a.enabled?a.callback:d.noop,e=a.enabled?!0:!1;k.getAggregator().trigger("jsonp",b,c,e)}},jsvid:{manualDefer:!0,impressionMethod:function(c){k.getAggregator().on("adImpression",function(f,n){var p;try{p=e(c,n),a.enabled?k.getAggregator().trigger("jsonp",p,a.callback,!0):k.getAggregator().trigger("send",p,d.noop,!b.on("postMon"))}catch(q){__IntegralASDiagnosticCall("jsvidimp",q,l)}})}},fwjsvid:{isFW:!0,
manualDefer:!0,impressionMethod:function(a){var b="false"===l.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&k.getAggregator().trigger("jsonp",c(a),function(a){k.getAggregator().trigger("videoBlockResult",a)});k.getAggregator().on("adImpression",function(c,f){var n;try{var g;if(g=b)g=c&&d.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;g&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));
n=e(a,f);k.getAggregator().trigger("send",n,d.noop,!0)}catch(v){__IntegralASDiagnosticCall("fwjsvidimp",v,l)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=f[l.mode],e=!!b.isFW,d=function(a){var b;b=k.getAggregator().request("mobileApp").isMobileAppEnvironment()&&l.mobFwUrl?l.mobFwUrl:a?l.adsafeSrc:l.requrl;a||(b+="?"+l.reqquery);return b}(e),q=d.indexOf("BEGIN__ADSAFE"),g=-1!==q,C=g?d.slice(q):"",a=g?d.slice(0,q):a(d);return{isFW:e,
baseUrl:a,macroUrl:C,sendImpression:function(a){var e=function(){b.nodeType?k.getAggregator().trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)e(a);else if(!b.manualDefer)k.getAggregator().on("adImpression",function(){e(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},
min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,arguments)},getWindow:function(){return x},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?k.getAggregator().request("omidVerificationClient"):x},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},
getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},getDoc:function(){t.isDomless();return M},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},wb=function(){return{createInstance:function(){return t.isDomless()?new pc:new qc}}},qc=function(){var a,b=!1,c=!1,e=k.getAggregator().request("features"),f=new ea,h=function(){var b;b=923747==l.anId||925955==l.anId;e.on("blur")||e.on("abcAudit")&&
b?(b=r.getWindow(),b=t.friendly&&b.top.document&&(d.isFunction(b.top.document.hasFocus)||d(b.top.document.hasFocus).isObj())&&!b.top.document.hasFocus()||(d.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=d.isDef(a.prop)?r.getDoc()[a.prop]:null;return b},u=function(){var b=r.getWindow(),c=function(){f.run(h())};z.addEvent(b,"focus",c,!0);z.addEvent(b,"blur",c,!0);a.event&&z.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",e=r.getDoc();d.isUndef(e.hidden)?d(["moz","ms",
"webkit"]).each(function(f,h){var u=h+"Hidden";d.isDef(e[u])&&(a=u,c=h+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:h,onHiddenChange:function(a){f.push(a);c||(c=!0,u())},supportsVisAPI:function(){return b}}},pc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},yb=function(){return{createInstance:function(a,b){return t.isDomless()?new rc:new sc(a,b)}}},sc=function(a,b){var c,e=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=
a[b];(""===c||"null"===c||"undefined"===c||null===c||d.isUndef(c))&&delete a[b]}return a},f=function(a){var b={},c,e;for(e in a)a.hasOwnProperty(e)&&(c=a[e],d.isUndef(b[c])?b[c]=e:b[c]+=e);a={};for(e in b)b.hasOwnProperty(e)&&(c=b[e],a[c]=e);return a},h=function(){var h,n=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var e=c.message,e=e.substring(e.lastIndexOf("<")+1,e.lastIndexOf(">")),f;if(f=d.isDef(e)){var h=
b.getWindow();f=!1;d.isDef(h.navigator)&&d.isDef(h.navigator.userAgent)&&(h=h.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==h&&2==h.length&&(h=h[1].split("."),3==parseInt(h[0],10)&&6>=parseInt(h[1],10)&&(3==h.length?13>=parseInt(h[2],10)&&(f=!0):f=!0)))}f&&(a.g=e)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(q){}try{p.b=encodeURIComponent(parent.location.href)}catch(g){}if(t.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(k){}try{p.e=encodeURIComponent(x.document.referrer)}catch(v){}}try{"jsi"!==
l.mode&&(p.d=encodeURIComponent(x.location.href))}catch(r){}try{p.f=encodeURIComponent(l.jsref)}catch(O){}try{h=n(),p.g=encodeURIComponent(h.g||""),p.q=encodeURIComponent(h.q||""),a.isStarted()&&!h.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(A){}p=e(p);p=f(p);h=[];for(var D in p)p.hasOwnProperty(D)&&h.push({key:D,val:p[D]});h.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=h};return{detectTopURL:h,getDetectedURLs:function(){return c?
c:h()}}},rc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},vb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",l._onSuspicious)},skipAsFraudulent:function(){return b}}},zb=function(){var a=[],b={},c={sl:"n"},e=0,f,h,u,n={i:0,o:0,n:0,pp:0,pm:0},p=function(a){var b={},c=a.winDimensions,e=a.adDimensions;d.isDef(c)&&c.hasValidDims()&&(b.wc=c);d.isDef(e)&&e.hasValidDims()&&(b.ac=e,b.am=a.method,b.cc=a.containerDimensions);d({piv:"percentInView",
obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,e){var f=a[e];d.isDef(f)&&(b[c]=f)});c=d(b).toParams();return""===c?"":","+c},q=function(a,c){var e=new fc(c);return b[a]=e},w=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},C=function(){d(c).each(function(b,c){n[c]+=a.length?u-e:u});e=u},v=function(b){a.length&&C();d(b).each(function(a,b){var e=c[a];e!==b&&"n"===e&&(n[b]+=n.n);c[a]=b});a.length||C()},l=function(a){var c,
e=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=p(a);var f={sl:w(a.viewState)};u=t.getTagTime();v(f);f.t=u;c=d({toString:function(){d(b).each(function(a,b){b.fastForward()});return"{"+d(f).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+d(this.piv).stringify(b)+"]");a+=",as:["+d(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(f);d(c).mixin(a);c.width=e.width;
c.height=e.height;d.isUndef(c.percentInView)&&(c.percentInView=g.PIV_NA);d.isUndef(c.reason)&&(c.reason="");return h=c};(function(){q("piv",function(a){var b,c=a.percentInView,e=[1,25,30,50,75];100===c||0===c?b=c:(d(e).each(function(a,f){d.isUndef(b)&&c<f&&(b=e[a-1])}),d.isUndef(b)&&(b=e[e.length-1]));return b});q("as",function(a){var b=g.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){u=t.getTagTime();C()},registerLocation:function(e){var h,
p=!1;c.sl==w(e.viewState)&&a.length?(h=new l(e),a[a.length-1].details=h.details):(h=new l(e),a.push(h),f=e.viewState,p=!0);k.getAggregator().trigger("newScreenEvent",h);d(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(h),a[a.length-1].breakdowns[b]=c.get()):c.addState(h)});return h},stringify:function(b){var c="";a.length&&(c=d({slTimes:"{"+d(n).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:q,getCurrentLoc:function(){return w(f)},
getCurrentEvent:function(){return h}}},P={hashCode:function(a){var b=0,c,e,d;if(0===a.length)return b;c=0;for(d=a.length;c<d;c++)e=a.charCodeAt(c),b=(b<<5)-b+e,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=x,e=a.split(".");for(a=0;a<e.length;a++)if(b=c,c=c[e[a]],d.isUndef(c)||a===e.length-1&&!d.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=
r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!d.isUndef(b));a++);return b},contains:function(a,b){return d.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return d.isFunction(a.trim)?a.trim():a.replace(" ","")}},tc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=s.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var e;(e=b(c))||(c=s.getDimensionFromStyle(c),e=a(c));return e},hasValidDimentionAttributes:b}}(),
b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,e=/doubleclick.net\/pcs\/click?/,d=/_blank/,h=function(a){var e=s.tagNameIs(a,"div"),d=s.attributeMatches(a,"class",b);a=s.attributeMatches(a,"id",c);return e&&d&&a};return{getDFPGoogleDiv:function(a){return s.traverseAndFindFirstMatchingNode(a,h)},getClickableImage:function(b){var c,h=(b=s.getFirstChildElement(b))&&s.tagNameIs(b,"a"),q=s.attributeMatches(b,"href",e),g=s.attributeMatches(b,"target",d);h&&q&&g&&(b=s.getFirstChildElement(b),s.isImageTag(b)&&
a.hasValidDimentionAttributes(b)&&(c=b));return c},getNodeMatchingMinimumSize:function(b){return s.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},uc=function(){var a=tc(),b=function(a,b){b.tag=s.getTagName(a);b.size=s.getDimensionFromAttributes(a)||s.getDimensionFromStyle(a)};return{getDFPValue:function(c){var e;if(e=a.getDFPGoogleDiv(c)){var d;c={type:0};if(e)if(c.type=1,d=a.getClickableImage(e))c.type=2,b(d,c);else if(e=a.getNodeMatchingMinimumSize(e))c.type=3,b(e,c);e=c}else if(e=
{type:0},c=a.getNodeMatchingMinimumSize(c))e.type=4,b(c,e);return e}}};k("viewport",[],function(){var a={width:4,height:4},b=function(c,e){if(c!==e&&!s.isViewportVisible(c,a))return c;if(c!==e&&t.isFriendlyToParent(c))return b(c.parent,e)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},e=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:e,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();s.isViewportVisible(c,a)?e()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});
var vc=function(a){var b,c,e=function(e){b=a.setInterval(e,100);c=a.setTimeout(function(){d()},42E4)},d=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,n=a.innerHeight,p=!1;e(function(){var e;e=a.innerHeight;(e=a.innerWidth!==c||e!==n)&&(p=!0);p&&!e&&(b(),d(),p=!1);c=a.innerWidth;n=a.innerHeight})}}};k("AS_Finder",["viewport"],function(a,b){var c,e=function(){try{var e=a.isHidden(),h,u={};e!==c&&(h=d.stringifyTriState(e),u.res1=
h,u.ps=h,u.ts=r.now(),u.psfr=d.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",u));c=e}catch(n){k.getAggregator().trigger("error",g.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){e();var b=a.getWindowWithHiddenViewport();if(b)vc(b).onResize(e)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});k("hA",["AS_Finder"],function(a){var b=0,c=function(a,b){k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.FF,
a,d(b).toION())},e=function(a){2>b&&c("ha1",a);b++};(function(){var b,d;if(t.embedded)try{d=l.contextNode.parentNode,b=uc().getDFPValue(d),d={},d.df=b.type,b.size&&(d.sz=b.size.width+"."+b.size.height),b.tag&&(d.dom=b.tag),c("dfp",d),b.size&&a&&(a.events.on("newState",e),a.start())}catch(u){k.getAggregator().trigger("error",g.ERROR_CODES.HIDDEN)}})()},{tier:g.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});var Ba=function(a,b,c,e){var f,h=0,u=0,n=!1,p=function(){f=Math.round(s.getNodeArea(a.body));
if(f>=e){for(var p,q=f+20*f/100,v=a.querySelectorAll("iframe"),v=d.fromNodeListToArray(v);v.length&&(u<q||h<c);)p=v.shift(),p=Math.round(s.getNodeArea(p)),p>=e&&(h++,u+=p);u>=q&&h>=c&&(q={va:f,bia:u,bin:h},k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.FF,b,d(q).toION()),n=!0)}},q=function(){var b;b=new MutationObserver(function(a){n?b.disconnect():r.execAtEndOfThread(function(){d(a).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&s.isElement(c)&&s.tagNameIs(c,"IFRAME")&&
d.debounce(p,10)}})})});b.observe(a.body,{attributes:!1,childList:!0,characterData:!1})};a&&a.body&&(r.execAtEndOfThread(p),!n&&d.isDef(x.MutationObserver)&&q())};k("BS_InApp",[],function(){var a=r.getWindow().document;k.getAggregator().request("mobileApp").isMobileAppEnvironment()&&Ba(a,"bs1",3,100)},{tier:g.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("bas")&&b&&c&&a.bootstrapOn("app")}});k("BS_Browser",[],
function(){var a=r.getWindow().document,b=a.body?Math.round(s.getNodeArea(a.body)):null;!k.getAggregator().request("mobileApp").isMobileAppEnvironment()&&b&&Ba(a,"bs2",10,b)},{tier:g.TIERS.VIEWABILITY,applies:function(a,b,c){b=!a.bootstrapOn("app")&&!c.isDomless();return a.on("bbs")&&c.embedded&&b}});var tb=function(){return{createInstance:function(a){return t.isDomless()?new wc:new xc(a)}}},xc=function(a){var b,c,e,f=new ua,h=new fa,u=new yc(f),n=new zc,p=new Ac,q=new Bc(f,a),g=function(){d.isUndef(e)&&
(e=new Cc(f));return e},C=function(){f.provide({frameCollection:function(){return u},adProxy:function(){return p},adTalkMessage:function(a){return new Dc(a,f)},adTalkMessageCollection:function(){return n},idMapModule:g,interFrameQuerySelector:function(a){return new Ec(a)}})};return{isApplicable:function(a){return d.isDef(x.JSON)&&d.isDef(x.postMessage)&&!a.isAvid()&&!a.isOmidNative()},start:function(){C();h.traverse(u.addFrame);q.startListening();q.sendToKnownFrames();k.getAggregator().once("stopAdTalk",
function(){q.stopListening()});k.getAggregator().provide("adTalkEventAggregator",f)},sendAdTalkCall:q.sendAdTalkCall,getFrameMap:function(){d.isUndef(b)&&(b=new Ca(f));return b},getFrameMapIncludingPeerCase:function(){d.isUndef(c)&&(c=new Ca(f,!0));return c},getIdMap:g}},wc=function(){return{isApplicable:function(){return!1},start:function(){}}},Dc=function(a,b){var c,e=b.request("adProxy").myIdCard,d=b.request("frameCollection").getMe().getStringifiedPosition();c=k.getAggregator().request("features").on("swapids")?
l.oid:l.asid;var h=a||{},u=l.asid,e=e.tagId,n=t.embedded,p=t.friendly,q=l.birthdate;c=c.split("-")[2];var w;t.friendly?w="["+g.AD_IDENTIFIER+"-"+l.asid+"]":(w=r.getWindow(),w=w.location&&w.location.href,w='iframe[src*="'+(w&&w.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:h,srcAsid:u,srcTagId:e,srcIsEmbedded:n,srcIsFriendly:p,srcBirthdate:q,iasCommonId:c,nodeSelector:w,positionStr:d,version:"0.1"}},zc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return d(a).map(b)},
has:function(b){return a[b&&b.srcAsid]}}},Fc=function(a,b,c,e){var f,h=a==x;f={position:b.slice(0),id:b.join("-"),isMe:h,isLeaf:!a.frames.length,adProxies:h?c:[],selfDescription:void 0,unifiedId:l.birthdate,srcIsEmbedded:e?e.srcIsEmbedded:void 0,inbox:e?[e]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return d(f.position).map(function(a,b){return d.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return f.isLeaf||f.isMe||d.isDef(f.selfDescription)}};var u=function(a){var b=
f.adProxies;a=a.adProxies;var c=[];b.length&&a.length?d(a).each(function(a,e){n(b,e)&&c.push(e)}):c=a;f.adProxies=b.concat(c)},n=function(a,b){return!d(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){d(f.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||f.inbox.push(a)};f.addInformationFromSrc=function(a,b){u(b);p(a);f.srcIsEmbedded=a.srcIsEmbedded;f.selfDescription=b};return f},yc=function(a){var b=[],c={},e={noMe:!0};return{addFrame:function(d,
h,u){var n=a.request("adProxy").getAll();d=new Fc(d,h,n,u);b.push(d);c[d.id]=d;d.isMe&&(e=d);return d},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return e}}},Ca=function(a,b){var c=function(a,c){var d=c.adProxies,n="";if(c.isValidForMapping()){if(b)n+=e(d,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=d.length?"."+d[0].tagId:"";n+=p}return n}},e=function(a,b){var c="";return c=a.length?c+d(a).stringify(function(a,c){return b+
(l.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),e=d(b.list).stringify(c,"|");return d.toBase(b.getMe().unifiedId,62)+"+"+e}}},Cc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=l.contextNode.parentNode,e=a.request("interFrameQuerySelector",c),d=function(a){return a&&a.substr(0,120)+".of"+a.length},h=function(a){var d=!1,d=!t.embedded,f="BODY"!==s.getNodeName(c)&&"HEAD"!==s.getNodeName(c),h;if(h=a.srcIsEmbedded){h=
"0.1"!==a.version;var w=a.nodeSelector&&-1===a.nodeSelector.indexOf(g.AD_IDENTIFIER);h=!(h?w:!a.srcIsFriendly)}d&&f&&!h?d=!!e.queryFor(a.nodeSelector):(d=a.positionStr,a=a.srcIsEmbedded&&t.embedded,d=0===b.indexOf(d)||0===d.indexOf(b),d=!(!a||!d));return d};return{output:function(){var c,e=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==l.asid&&h(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(e);c=c.join("|");120<c.length&&(c=d(c),
k.getAggregator().trigger("stopAdTalk"));return c},isCandidateForMyIdMap:h}},Ec=function(a){var b=new fa,c=function(a){var b=a,c="IFRAME"===s.getNodeName(a),e=s.isWindow(a);c?b=a.contentWindow.document:e&&(b=a.document);return b},e=function(a,b){return s.querySelector(c(a),b)},f=function(c,f){var n,p,q;try{p=e(c,f),p||(n=b.getFrames(!0,a),d(n).findFirst(function(a,b){return q=e(b,f)}))}catch(g){}return p||q||null};return{queryFor:function(b){var c=null;b&&(c=f(a,b));return c}}},Bc=function(a){var b=
!1,c,e;e=k.getAggregator().request("features").on("swapids")?l.oid:l.asid;var f=function(b){var c=e.split("-")[2],d=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==l.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&d},h=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},u=function(){var c=g.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);k.getAggregator().trigger("sendDt",c)},n=function(c,e,f){var h,
n,l,t,A;try{h=a.request("frameCollection");n=a.request("adTalkMessageCollection");l=e.messageContent.self;n.add(e);var s=h.getMe();s.unifiedId>l.unifiedId&&(s.unifiedId=l.unifiedId);var L;L=r.now()-e.sentTime;e.transferDuration=L;n=t=h.getFrame(l.id);d.isUndef(n)||d.isUndef(n.selfDescription)?(t=t||h.addFrame(c.source,l.id.split("-"),e),t.addInformationFromSrc(e,l),f()):t.addInformationFromSrc(e,l);(A=b&&a.request("idMapModule").isCandidateForMyIdMap(e))&&u()}catch(B){k.getAggregator().trigger("error",
g.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:u,sendToKnownFrames:function(){(new ga).send(h)},startListening:function(){c=new va;c.listen(f,n,h)},stopListening:function(){c&&c.stop()},validateMessage:f,processMessage:n,createMessage:h}},Gc=function(){var a=k.getAggregator().request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},Ac=function(){var a,b=[],c=function(a){a=new Gc(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Ab=function(a){var b,
c,e=!1,d=function(a){var d=!0;e&&(e=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,d=!1);return d};a.browserIs(g.BROWSERS.IE)&&z.addEvent(r.getDoc().documentElement,"click",d,!0);return{determineFramePosition:function(){a.browserIs(g.BROWSERS.IE)&&(e=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},Hc=function(a,b){var c,e=g.NA,f=e,h=!1,u=!1,n=!1,p=!b,q=function(){var b=r.getIntersectionObserver(function(a){a=
a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);e=Math.min(b,100);c=a.boundingClientRect;e!==f&&r.execAtEndOfThread(function(){k.getAggregator().trigger("IOPivChange",e)});f=e},{threshold:g.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});p&&r.execAtEndOfThread(function(){e===g.NA&&(e=0)});b.observe(w(a));p&&r.execAtEndOfThread(function(){t.isBustedIframe()||k.getAggregator().trigger("delayedViewabilityReady")});
h=!0},w=function(b){if(!d.isUndef(b)){if(n){b=a.document;var c=b.createElement("div");d(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[g.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return e},start:function(){var b;try{a.document&&(n=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){u=!0}b&&null!==b.bodyElement?q():b&&b.document?z.whenReady(q,b.document):u?k.getAggregator().request("errors").add(g.ERROR_CODES.BUSTED_IFRAME_IN_IO):
q()},isStarted:function(){return h},getAdNodeDimensions:function(){var a;c&&(a=K({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return e!==g.NA}}},ra=function(){var a=!1;(function(){z.whenReady(function(){k.getAggregator().trigger("startViewabilityLoop");a=!0})})();return{loopStarted:function(){return a}}};k("loopDelay",[],ra,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:g.TIERS.VIEWABILITY});var Ic=function(){return{start:function(a){k.getAggregator().on("measurable",
function(){a()})},isApplicable:function(a,b){return!b.browserIs(g.BROWSERS.WEBKIT)||!a.isImmediatelyMeasurable()}}},Jc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Tb=function(a,b,c){var e=!1,f=function(){b.impressionIsIdentifiable()&&!e&&(e=!0,k.getAggregator().trigger("notify",l._onMeasurable))};return{start:function(){var b;b=[Kc(),Lc(),Jc(),Ic()];(b=d(b).findFirst(function(b,e){return e.isApplicable(c,a)}))&&b.start(f)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&
d.isDef(l._onMeasurable)}}},Lc=function(){return{start:function(a){cc(k.getAggregator(),["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(g.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},Kc=function(){return{start:function(a){k.getAggregator().once("adImpression",function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},Mc=function(a,b,c){var e=["rjss","jss","jload"],f=function(){var b=!1,c=a.getAvidAdSessionContext();
d.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.DISPLAY)&&a},isImmediate:f,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){f()||a.addEventListener("ready",function(){k.getAggregator().trigger("adImpression")})}}},Nc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},
isMediaType:function(b){var c,e=a.getAvidAdSessionContext();a.isAvidAvailable()&&d.isDef(e)&&(c=e.mediaType||g.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();d.isDef(c)&&(b=c.avidJsVersion,(c=d.isUndef(b))||(c=d.getNum(b.split(".")[0]),b=d.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Oc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&
b.isMediaType(g.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&k.getAggregator().trigger("adImpression")})}catch(b){}}}},Pc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.DISPLAY)&&
a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},ba=function(a){var b=r.getWindow(),b=b&&b.omid3p,c=k.getAggregator().request("omidAdSessionContext"),e=!!(a&&a.isSupported&&a.isSupported()),f=!!(b&&d.isFunction(b.registerSessionObserver)&&d.isFunction(b.addEventListener));return{accepts:function(){return e||f},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},
Qc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(g.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){a.addEventListener("start",function(a){k.getAggregator().trigger("adImpression")})}}},Wa=function(a){return{resolve:function(){return d(a).findFirst(function(a,
c){return c.environment.accepts()})}}},Ta=function(a){var b=!1,c=!1,e=k.getAggregator().request("omidAdSessionContext"),f=k.getAggregator().request("omidAdSessionVerificationParameters"),h=r.getWindow(),g=(h=h&&h.omid3p)&&d.isFunction(h.registerSessionObserver)&&d.isFunction(h.addEventListener)?h:a,n=function(){return f&&f.IAS&&0<Object.keys(f.IAS).length?f.IAS:f},p=function(){var a,d;b&&c&&(x.omidSupported=!0,a=e.app&&e.isDisplay&&!e.isWeb,(d=l.mobFwUrl&&-1<l.mobFwUrl.indexOf("/blocking/"))&&e.isLimitedSandbox&&
"1"===l.adWidth&&"1"===l.adHeight&&(e.isLimitedSandbox=!1),a&&d&&(e.delayingViewabilityEvents=!0),k.getAggregator().trigger("tryToCallContinueMain",n()))},q=function(a){if("sessionStart"===a.type){e.adSessionType=a.data.context.adSessionType;e.environment=a.data.context.environment;e.omidNativeInfo=a.data.context.omidNativeInfo;e.omidJsInfo=a.data.context.omidJsInfo;e.deviceInfo=a.data.context.deviceInfo;e.app=a.data.context.app;a.data.hasOwnProperty("contentUrl")&&(e.contentUrl=a.data.contentUrl);
e.isNative="native"===e.adSessionType;e.isLimitedSandbox=t.embedded;e.isHtml="html"===a.data.context.adSessionType;e.isWeb="web"===a.data.context.environment;f=a.data.verificationParameters;a=e.isHtml&&e.isWeb;e.queuedOutputItems=[];for(var c=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},
{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],d,h,q,g=0;g<c.length;g++)d=c[g].root,h=c[g].field,q=c[g].code,"object"===typeof e[d]&&"undefined"!==typeof e[d][h]&&e.queuedOutputItems.push({code:q,value:e[d][h]});e.queuedOutputItems.push({code:"oast",value:e.adSessionType});
e.queuedOutputItems.push({code:"oenv",value:e.environment});e.hasOwnProperty("contentUrl")&&e.queuedOutputItems.push({code:"ocon",value:encodeURIComponent(e.contentUrl||"")});a?k.getAggregator().trigger("tryToCallContinueMain",n()):(b=!0,p())}},w=function(a){e.mediaType=a.data.mediaType;e.queuedOutputItems.push({code:"omtp",value:e.mediaType});a.data.viewport&&a.data.adView&&(e.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}});e.isNativeVideo=e.isNative&&"video"===
a.data.mediaType;e.isDisplay="display"===a.data.mediaType;c=!0;p()};return{start:function(){g.registerSessionObserver(q,"IAS");g.addEventListener("impression",w)}}},Ua=function(){return{accepts:function(){return!0}}},ya=function(){var a=k.getAggregator().request("omidAdSessionContext"),b=k.getAggregator().request("omidVerificationClient"),c=new ba(b),e=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&e}}},Va=function(){return{start:function(){k.getAggregator().trigger("tryToCallContinueMain",
"")}}},Rc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Sc=function(a,b){var c,e=function(a){var e,d,n;try{e=a.eventData.percentageInView,d=c&&75<=e,n={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:d,
isMeasurable:0===e||75<=e,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:e,detectionMethod:"av"},b.trigger("screenLocationChanged",n)}catch(p){}};return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",e)}catch(d){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Tc=function(a,b){var c=[],e=(new Date).getTime(),f=0,h=0,u=!1,n=new Aa,p={isEmpty:function(){return 0===
c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var e=c[b],a=a+((0<b?",{":"{")+("t:"+e.t+",")+("tp:"+e.tp+",")+("sl:"+e.sl+",")+("ad_duration:"+e.ad_duration+",")+("volume:"+e.volume)+"}");return a+"]}"}},q=function(){u=!0},w=function(a){try{var p="",n=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime(),q="n",w=!1;switch(a.type){case "start":p="adVideoStart";e=n;h=a.data.duration;1E3<h&&(h/=1E3);f=a.data.videoPlayerVolume;break;case "volumeChange":p=
"volumeChanged";f=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":p="adVideo"+a.type.substring(0,1).toUpperCase()+a.type.substring(1);w=!0;k.getAggregator().trigger("videoQuartileEvent",a);break;case "pause":case "bufferStart":p="pauseAd";break;case "resume":case "bufferFinish":p="resumeAd";break;case "skipped":p="adSkipped"}if(""!==p){var l=k.getAggregator().request("mScreenEvents");l&&(q=l.getCurrentLoc());c.push({t:n-e,tp:p,sl:q,ad_duration:h,
volume:f})}if("loaded"===a.type&&d.isDef(a.data)){var r=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),p=-1!==r?r+1:void 0,t=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===u?(d.isDef(p)&&k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"vbp",p),k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,"vps",t)):(d.isDef(p)&&k.getAggregator().trigger("addOutputItem",{output:p},"vbp",{type:g.IMPRESSION_EVENT}),k.getAggregator().trigger("addOutputItem",
{output:t},"vps",{type:g.IMPRESSION_EVENT}))}"start"===a.type&&k.getAggregator().trigger("omidAdDuration",{ad_duration:h});var s;"playerStateChange"===a.type?s="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?s="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&(s="AdPaused");d.isDef(s)&&b.trigger("videoPlaybackEvent",{eventType:s,eventData:null});w&&k.getAggregator().trigger("sendDt",
g.DT_CODES.VIDEO_EVENTS)}catch(F){__IntegralASDiagnosticCall("omidvideo",F,x.bootstrapper)}};return{start:function(){k.getAggregator().on("impressionsent",q);k.getAggregator().provide({omidVideoEventsString:p});a.addEventListener("video",w);n.init()},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Da=function(a,b){var c=!1,e=function(a){var e=a.percentageInView;c=!0;a.viewState=50<=e?g.IN_VIEW:g.OUT_OF_VIEW;a.outOfViewReason=50<=e?"":g.OUT_OF_VIEW_REASONS.GEOM;b.trigger("measurementChanged",
a)};return{start:function(){k.getAggregator().trigger("addOutputItem",{output:g.MEDIA_TYPE.DISPLAY_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addScreenLocationChangedListener(e);a.start()},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Uc=function(a,b,c){var e=d.isDef(a)?a.environment:void 0,f=d.isDef(a)?a.measurementStrategy:void 0,h=function(){return d.isDef(f)};
d.isDef(b)&&b.start();return{hasMeasurementStrategy:h,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return h()?e.isImmediate():!0},isMeasurable:function(){return h()?f.isMeasurable():!1},isMediaType:function(a){return h()?e.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){h()&&e.start()},requiresDelayedViewabilityEvent:function(){h()&&b.requiresDelayedViewabilityEvent()}}},rb=function(a,b,
c){var e=k.getAggregator().request("mobileApp");return{create:function(){var d=[],d=d.concat(a.getOmidMeasurementStrategies()),d=d.concat(a.getAvidMeasurementStrategies()),d=d.concat(a.getMraidMeasurementStrategies());(d=(new ia(d)).resolve())||k.getAggregator().trigger("addOutputItem",{output:"0"},"oam",{type:"impression"});var h=new Vc(d),g=new Ea(b,c,t,e);return!d&&g.accepts()?new Wc(t.isVideo(),new E):new Uc(d,h,e.isMobileAppEnvironment())}}},sb=function(a){var b=k.getAggregator().request("mobileApp");
return{getOmidMeasurementStrategies:function(){var a=k.getAggregator().request("omidVerificationClient"),b=new ba(a),d=new ya,h=[];if(b.accepts()&&!d.accepts()){var g=new da,n=new Xc,d=new Yc(a,new E),g=[{environment:g,measurementStrategy:new Zc(a,new E)},{environment:n,measurementStrategy:new Fa(new ja,r.getWindow(),new E)}],g=(g=(new ia(g)).resolve())?g.measurementStrategy:{},p=new Ga(new Ha(new V),new V,n.accepts()),n=new Pc(a,b,l.mode),q=new Ia(d,g,new E,p),b=new Qc(a,b,l.mode),a=new Ja(d,g,new Tc(a,
new E),new E,p);h.push({environment:n,measurementStrategy:q});h.push({environment:b,measurementStrategy:a})}return h},getAvidMeasurementStrategies:function(){var b=k.getAggregator().request("avidJsClient"),e=new Nc(b),d=[];if(e.accepts()){var h=new Mc(b,e,l.mode),g=new Oc(b,e,l.mode),n;n=new Rc(b,new E);if(e.supportsAdContainerGeometry()){var p=new $c,q=new ad,w=new Fa(new ja,r.getWindow(),new E),C=new bd(b,new E),p=(p=(new ia([{environment:p,measurementStrategy:C},{environment:q,measurementStrategy:w}])).resolve())?
p.measurementStrategy:{},q=new Ga(new Ha(new V),new V,q.accepts()),w=new cd(b,new E),b=new Ia(w,p,new E,q);n=new Ja(w,p,n,new E,q)}else q=new Sc(b,new E),b=new Da(q,new E),n=new Ka(q,n,new E);d.push({environment:h,measurementStrategy:b});d.push({environment:g,measurementStrategy:n});a.setAvidAdSessionContext(e.getAvidAdSessionContext())}return d},getMraidMeasurementStrategies:function(){var a=[],e=b.isSafeToInjectMraid(),e=new dd(r.getWindow(),e,b.isMobileAppEnvironment());if(e.accepts()){var d=k.getAggregator().request("context"),
d=new ed(r.getWindow(),d),h=new fd(r.getWindow(),new E);d.accepts()?(e=new gd(r.getWindow(),new E),e=new Ka(h,e,new E),e={environment:d,measurementStrategy:e}):(d=new Da(h,new E),e={environment:e,measurementStrategy:d});a.push(e)}return a}}},ia=function(a){return{resolve:function(){var b=d(a).findFirst(function(a,b){return b.environment.accepts()});if(d.isDef(b))return b}}},Vc=function(a){var b=!1,c,e={winDimensions:K({scrX:0,scrY:0,width:0,height:0}),adDimensions:K({scrX:0,scrY:0,width:0,height:0}),
containerDimensions:K({scrX:0,scrY:0,width:0,height:0}),method:g.NA,viewState:g.NA,percentInView:g.PIV_NA,reason:"",obstructed:g.NA,isHidden:g.NA,tabHidden:g.NA,posViewState:g.NA,adCompCount:1},f=function(a){return a?new K({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):K({scrX:0,scrY:0,width:0,height:0})},h=function(a){c={winDimensions:f(a.windowDimensions),adDimensions:f(a.adDimensions),containerDimensions:f(a.containerDimensions),method:a.detectionMethod||g.NA,viewState:a.viewState||g.NA,percentInView:d.isDef(a.percentageInView)?
a.percentageInView:g.PIV_NA,reason:a.outOfViewReason||"",obstructed:d.stringifyTriState(a.isObstructed),isHidden:g.NA,tabHidden:g.NA,posViewState:a.viewState||g.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,k.getAggregator().trigger("delayedViewabilityReady"))};return{create:function(b){var f=
e;if(d.isDef(c))if(a.environment.supportsAdContainerGeometry())f=c;else if(c.shouldDelegateToDomBasedViewability)f=b,f.method=c.method;else if(0===c.percentInView||75<=c.percentInView)f=c;return f},start:function(){var b;d.isDef(a)&&d.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(h),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},Ka=function(a,b,c){var e=!1,f=!1,h=!1,u,n,p,q,w=function(){if(!d.isUndef(n)){var a=[],b,k;e?(f?(k=!1,b=100):(k=q,
b=p),50>b&&a.push(g.OUT_OF_VIEW_REASONS.GEOM)):(k=!1,b=0,a.push(g.OUT_OF_VIEW_REASONS.VIDEO));h=!0;n.shouldDelegateToDomBasedViewability=k;n.percentageInView=b;n.viewState=50>b?g.OUT_OF_VIEW:g.IN_VIEW;n.outOfViewReason=a.join(".");u=n;c.trigger("measurementChanged",u)}},l=function(a){n=a;p=a.percentageInView;q=a.shouldDelegateToDomBasedViewability;w()},v=function(a){a=a.eventType;"AdEnteredFullscreen"===a?f=!0:"AdExitedFullscreen"===a?f=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?e=!0:-1!==
"AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(e=!1);w()};return{start:function(){k.getAggregator().trigger("addOutputItem",{output:g.MEDIA_TYPE.VIDEO_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addScreenLocationChangedListener(l);a.start();b.addVideoPlaybackEventListener(v);b.start()},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return h}}},ed=function(a,
b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==a.type||b||(b=!0,k.getAggregator().trigger("adImpression"))})}catch(e){}}}},gd=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},
addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},cd=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:g.DETECTION_METHODS.AVID,outOfViewReason:e(a.eventData.reasons)};b.trigger(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,
a)},e=function(a){var b={inactive:g.OUT_OF_VIEW_REASONS.FOCUS,viewport:g.OUT_OF_VIEW_REASONS.GEOM,clipped:g.OUT_OF_VIEW_REASONS.GEOM,obstructed:g.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:g.OUT_OF_VIEW_REASONS.FOCUS,notFound:g.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";d(a).each(function(a,e){var d=b[e];d&&0>c.indexOf(c)&&c.push(d)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,
a)},translateAvidOutOfViewReasons:e}},Ga=function(a,b,c){function e(a,b,c){c=n(b,c);a=h(a,b,c);return a.width*a.height}var f=function(a,b){var c=Math.max(a.x,b.x),e=Math.max(a.y,b.y),d=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+a.height,b.y+b.height),d=d-c,f=f-e;return{x:c,y:e,width:0<d?d:0,height:0<f?f:0}},h=function(a,b,c){a=f(b,a);return f(c,{x:0,y:0,width:a.width,height:a.height})},u=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},n=function(a,b){return{x:b.x-a.x,
y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(f,q){if(d.isDef(f)&&d.isDef(q)){var k=f.viewport,l=f.computedAdContainer,v=l.obstructions,t=v&&0<v.length,s=f.originalAdContainer,A=q.adGeometry,D=q.adFound,L=f.detectionMethod,B=0,k={x:0,y:0,width:k.width,height:k.height},I=u(s,A),F=f.outOfViewReason,x=0,J=0,z=t||!1,x=1>=A.width*A.height;c&&x&&(D=!1,F=F||"",D||-1!==F.indexOf(g.OUT_OF_VIEW_REASONS.GEOM)||(F=g.OUT_OF_VIEW_REASONS.GEOM+(""!==F?"."+F:"")));if(D&&
0<f.percentageInView){x=e(k,l,I);t?(B=n(l,I),B=h(k,l,B),B=u(l,B),B=a.calculateObstructedArea(B,v)):B=0;J=B;B=Math.round((x-J)/(I.width*I.height)*100);t&&0===J&&(z=!1);for(var A=z,y,t=0,D=b.getConfig(I).numberOfSlices,J=r.floor(I.height/D)||1,v=[],x=A?a.getObstructionStatusBySlice(D):[],Q,t=0;t<D;t++)y=I.y+J*t,t==D-1&&(J=I.y+I.height-y),y={x:I.x,y:y,width:I.width,height:J},Q=e(k,l,y),y=1==Q/(y.width*y.height),v.push(y);if(A)for(l=r.min(x.length,D),t=0;t<l;t++)v[t]=v[t]&&!x[t];l=v}else l=b.getConfig(A).defaultSliceArray;
return{windowDimensions:k,containerDimensions:s,adDimensions:I,percentageInView:B,viewState:50<=B?g.IN_VIEW:g.OUT_OF_VIEW,outOfViewReason:50<=B?"":F||g.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:L,isObstructed:z,sliceStatus:l}}}}},$c=function(){return{accepts:function(){return t.isAvidNative()}}},bd=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",
c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},ad=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},Ia=function(a,b,c,e){var f,h,u,n=function(){if(d.isDef(f)&&d.isDef(h)){var a=e.calculateGeometricMeasurement(f,h);u=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},p=function(a){f=a;n()},q=function(a){h=a;n()};return{start:function(){k.getAggregator().trigger("addOutputItem",{output:g.MEDIA_TYPE.DISPLAY_CODE},g.MEDIA_TYPE_CODE,
{type:g.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(q);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",a)},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return u}}},Ha=function(a){var b=[],c;return{calculateObstructedArea:function(e,f){var h,g,n,p;g=f&&0<f.length;var q;if(g){q=Math.round(e.width);var k=Math.round(e.height);h=Array(q);for(n=
0;n<q;n++)h[n]=Array(k);q={matrix:h,obscuredPixelCount:0,x:Math.round(e.x),y:Math.round(e.y),width:q,height:k}}else q={};h=q;k=q=0;if(g){for(;q<f.length;q++){g=f[q];n=k=h;var l=g;h=Math.max(n.x,l.x);g=Math.max(n.y,l.y);p=Math.min(n.x+n.width,l.x+l.width);l=Math.min(n.y+n.height,l.y+l.height);n=p-h;p=l-g;n=0<n?n:0;p=0<p?p:0;h-=k.x;g-=k.y;n=h+n;p=g+p;for(h=Math.round(h);h<Math.round(n);h++)for(l=Math.round(g);l<Math.round(p);l++)void 0!==k.matrix[h]&&void 0===k.matrix[h][l]&&(k.matrix[h][l]=1,k.obscuredPixelCount+=
1);h=k}k=h.obscuredPixelCount;q=h;if(d.isUndef(q.matrix)||0===q.matrix.length)c=[];else{g=0;p=!1;h=q.matrix[0].length;n=q.matrix.length;p=a.getConfig({height:h}).numberOfSlices;for(var l=r.floor(h/p)||1,v=[],t=0;t<h;t++){p=!1;for(var s=0;s<n;s++)if(1===q.matrix[s][t]){p=!0;break}g++;p&&(t+=l-g,g=l);if(g==l||t===h-1)v.push(p),g=0}c=v}}else c=b;return k},getObstructionStatusBySlice:function(){return c}}},Yc=function(a,b){var c=k.getAggregator().request("omidAdSessionContext"),e=null,f=!1,h=function(){var a=
r.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(f=c.delayingViewabilityEvents=!1,e&&(u(e),e=null)):r.setTimeout(h,50)},u=function(a){var d=a.data.adView,k=!!(d.measuringElement&&d.containerGeometry&&d.onScreenContainerGeometry);c.delayingViewabilityEvents?(e=a,f||(f=!0,h())):(k&&d.onScreenGeometry.obstructions&&0<d.onScreenGeometry.obstructions.length&&(d.onScreenContainerGeometry.obstructions=d.onScreenGeometry.obstructions),a={viewport:a.data.viewport||{width:0,height:0},
originalAdContainer:d[k?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0},computedAdContainer:d["onScreen"+(k?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0},percentageInView:d.percentageInView,detectionMethod:g.DETECTION_METHODS.OMID,outOfViewReason:n(d.reasons)},b.trigger(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a))},n=function(a){var b={inactive:g.OUT_OF_VIEW_REASONS.FOCUS,viewport:g.OUT_OF_VIEW_REASONS.GEOM,clipped:g.OUT_OF_VIEW_REASONS.GEOM,obstructed:g.OUT_OF_VIEW_REASONS.OBSTRUCTION,
backgrounded:g.OUT_OF_VIEW_REASONS.FOCUS,notFound:g.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";d(a).each(function(a,e){var d=b[e];d&&0>c.indexOf(c)&&c.push(d)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&u(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",u)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on(g.CONTAINER_GEOMETRY_MEASUREMENT_CHANGED,a)},translateOmidOutOfViewReasons:n}},da=function(){var a=k.getAggregator().request("omidAdSessionContext");
return{accepts:function(){return a&&(a.isNative||a.isLimitedSandbox)}}},Zc=function(a,b){var c=k.getAggregator().request("omidAdSessionContext"),e=null,d=!1,h=function(){var a=r.getDoc().getElementById("iasbi"+l.asid);a&&a.hasAttribute("CreativeLoaded")?(d=c.delayingViewabilityEvents=!1,e&&(u(e),e=null)):r.setTimeout(h,50)},u=function(a){if(a&&a.data&&a.data.adView)if(c.delayingViewabilityEvents)e=a,d||(d=!0,h());else{var p=a.data.adView.geometry,q=a.data.adView.containerGeometry,k=!!p;a=a.data.adView.measuringElement&&
!!q;b.trigger(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:{x:k&&a?p.x-q.x:0,y:k&&a?p.y-q.y:0,width:k?p.width:0,height:k?p.height:0},adFound:k})}};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&u(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",u)},addAdGeometryMeasurementChangedListener:function(a){b.on(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,a)}}},Xc=function(){var a=k.getAggregator().request("omidAdSessionContext");return{accepts:function(){return a&&
!a.isNative}}},Ja=function(a,b,c,e,f){var h=!1,u=!1,n,p,q,l,r,v=function(){if(!(d.isUndef(p)||d.isUndef(q)||d.isUndef(l))){r=!0;var a=f.calculateGeometricMeasurement(p,q),b=h&&u,c=h&&50<=a.percentageInView,k={windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:h,isVideoPlayingInFullscreen:b,
isSoundOn:!0};b&&(k.percentageInView=100);b||c?k.viewState=g.IN_VIEW:(k.viewState=g.OUT_OF_VIEW,k.outOfViewReason=a.outOfViewReason||g.OUT_OF_VIEW_REASONS.VIDEO);n=k;e.trigger("videoGeometryMeasurementChanged",n)}},t=function(a){p=a;v()},s=function(a){q=a;v()},A=function(a){l=a;a=a.eventType;"AdEnteredFullscreen"===a?u=!0:"AdExitedFullscreen"===a?u=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?h=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(h=!1);
v()};return{start:function(){k.getAggregator().trigger("addOutputItem",{output:g.MEDIA_TYPE.VIDEO_CODE},g.MEDIA_TYPE_CODE,{type:g.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(t);a.start();b.addAdGeometryMeasurementChangedListener(s);b.start();c.addVideoPlaybackEventListener(A);c.start()},getStrategyName:function(){return g.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){e.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return r}}},Fa=
function(a,b,c){var e,f=function(){var b=a.find(),f,n,p=!1;d.isDef(b)?(n=!0,f=b.getBoundingClientRect(),f={x:f.left,y:f.top,width:f.width,height:f.height},b.hasOwnProperty("adWasClipped")&&(f.adWasClipped=!0)):(e&&(p=!0,f={x:0,y:0,width:0,height:0}),n=!1);if(b=n)b=f,b=!d.isDef(e)||!1!==d(b).compareTo(e);if(b||p)e=f,c.trigger(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,{adGeometry:f,adFound:n})};return{start:function(){f();b.setInterval(f,50)},addAdGeometryMeasurementChangedListener:function(a){c.on(g.MOBILE_APP_GEOMETRY_MEASUREMENT_CHANGED,
a)}}},dd=function(a,b,c){return{accepts:function(){var e=d(a.mraid).isObj();return c&&(e||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},fd=function(a,b){var c=!1,e=function(){var c,e,d;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,height:0};d=100===c?[!0]:[!1];e={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:g.DETECTION_METHODS.MRAID,
sliceStatus:d};b.trigger("mraidScreenLocationChanged",e)}catch(h){}},f=function(){var b=a.mraid;return d(b).isObj()&&d.isFunction(b.isViewable)},h=function(){var b=a.mraid;e();b.addEventListener("viewableChange",e)},l=function(){var b=a.mraid;f()&&(c=!0,"loading"===b.getState()?b.addEventListener("ready",function(){h()}):h())},n=function(){c||l()};return{start:function(){var b=!0;if(d.isDef(a.mraid)||s.containsScriptTagWithSrc("mraid.js"))b=!1;k.getAggregator().trigger("addOutputItem",{output:d.stringifyTriState(b)},
"mi",{type:"impression"});b?k.getAggregator().trigger("exec","mraid.js",n):l()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},db=function(a,b,c){var e={},f=function(c){var e=d.noop;b.bootstrapOn("useViewabilityNotification")&&(e=function(){a.skipAsFraudulent()||k.getAggregator().trigger("notify",c)});return e};(function(){c&&d(c).map(function(a,b){e[a]=f(b)})})();return{getCallbacks:function(){return e}}},Ya=function(){var a=new R({tiv:[1E4]}),b=d([g.IN_VIEW,
g.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:g.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var e=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===e},applies:function(a,b){return a.on("abcAudit")&&925955==l.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},Xa=function(a,b){var c,e,d;c=a.on("everySecond");var h=b.isVideo();e=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];d=[1E3,5E3,15E3,3E4,45E3,6E4,
9E4];var k=[2E3,5E3,15E3];c?(c=new R({tiv:e}),e=e[0]):h?(c=new R({tiv:k}),e=k[0]):(c=new R({tiv:d}),e=d[0]);d={5E3:l._onInViewMRC5,15E3:l._onInViewMRC15};d[e]=l._onInViewMRC;return{timeInViewThresholds:c,type:g.DT_CODES.PING,rts:d,isInView:function(a){return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},applies:!0,minUnit:1E3,shouldIncludeSound:!1}},$a=function(a,b){var c;c=a.on("everySecond");var e=b.isVideo(),d=b.usesIASFullyInViewCustomMetric(),h=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,
9E3,1E4,11E3,12E3,13E3,14E3,15E3],l=[1E3,5E3,15E3],n=[2E3,5E3,15E3],p=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new R({tiv:h}):e?new R({tiv:n}):new R({tiv:l});k.getAggregator().provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,type:g.DT_CODES.FULLY_INVIEW,isInView:p,applies:function(){return d},minUnit:1E3,shouldIncludeSound:!1}},Za=function(a,b){return{timeInViewThresholds:new R({tiv:[0]}),
type:g.DT_CODES.FULLY_INVIEW,rts:{0:l._onInViewFull},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(g.IN_VIEW+"|"+g.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3,shouldIncludeSound:!1}},bb=function(a,b){var c,e,f,h=r.getMaxNumber(),k=b.isVideo(),n=a.id;e=a.sound&&"on"===a.sound;var p=!(a.soundExcl&&"groupm_native"===a.soundExcl&&l.groupm_native_publisher)&&e;c=new R(a);e=a.qiv;(function(){f=
{};var a;d.isDef(l.rts)&&d.isDef(l.rts[n])&&(a=c&&d.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=d.isDef(a)?d.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts():g.RTS_KEY_FOR_VQ,f[a]=l.rts[n])})();return{timeInViewThresholds:c,qivThreshold:e,type:g.DT_CODES.CUSTOM,rts:f,isInView:function(b){if(!b.adDimensions)return!1;var c,e,f,n=b.adDimensions.area(),l=1===b.tabHidden,t=r.max(b.fullPercentInView||0,b.percentInView);c=d(a.thresholds).findFirst(function(a,b){e=b.lb||0;f=b.ub||
h;if(n>=e&&n<=f)return!0});c=!l&&t>=c.piv;b.method==g.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(c=!1);k&&(c=c&&b.isVideoPlaying,p&&(c=c&&b.isSoundOn));return c},metricId:n,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType,shouldIncludeSound:p}},ab=function(a,b,c){var e=b.isVideo()?"video":"display",f=b.isMobileApp()?"app":"web",h=b.isDeviceTypeGroupMobile()?"mobile":"desktop",g=d(a.customViewability).isArray()&&0<a.customViewability.length,n=c.on("customMetric"),p=c.on("groupmCM"),
q=function(a,b){var c,g,n,q,k;c=d(b.mediaTypes).contains(e);g=d(b.distributionChannels).contains(f);n=d.isDef(b.deviceGroups)?d(b.deviceGroups).contains(h):!0;q=P.contains(b.id,"fiv");k=P.contains(b.id,"groupmCM");q=!q;k&&(q=p);return q&&c&&g&&n};return{resolve:function(){var b=[],c;n&&g&&(c=d(a.customViewability).filter(q),d(c).each(function(a,c){b.push(c)}));return b}}},R=function(a){var b=[];if(d(a.tiv).isArray())d(a.tiv).each(function(a,c){b.push(new ka(c))});else if("string"===typeof a.tiv){a=
a.tiv.split("|");var c=new hd;b.push(new id(c,parseInt(a[1].replace("%"))));b.push(new ka(1E3*parseInt(a[0])))}else d.isDef(a.tiv)&&b.push(new ka(1E3*a.tiv));return{getTimeThresholds:function(){return b}}},hd=function(){var a=-1,b=function(b){0<a||(b=d.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};k.getAggregator().on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<
a}}},ka=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},id=function(a,b){var c=0,e=!1,d=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};d(15);return{getTimeInViewInSeconds:function(){!e&&a.isVideoDurationResolved()&&(e=!0,d(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},gb=function(a,b,c){var e=function(e){a.isInView(e)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(e)}}},
fb=function(a,b,c,e){var f,h,g,n,p,q,l=function(a,b){return!b&&a},r=function(a,b,c,e){return e?!0:!b&&(a||e)&&c},v=function(a){var k=0,l=1===a.tabHidden,v=a.isVideoPlaying,w=a.isSoundOn,s=a.isVideoPlayingInFullscreen;d(a.sliceStatus).each(function(a,b){g(b,l,v,s)?f[a].mark():f[a].stop();n[a]=f[a].getTotalTime()});t("slcVt",n);e&&(d(a.sliceStatus).each(function(a,b){r(b,l,v,s)&&w?h[a].mark():h[a].stop();p[a]=h[a].getTotalTime()}),t("slcVtVol",p));q=e&&b&&b.shouldIncludeSound?p:n;a=d(q).findFirst(function(a,
b){k=Math.max(k,b);return 0>=b});d.isUndef(a)&&c.doEligibleJobs(k)},t=function(a,b){var c={};c[a]=b;k.getAggregator().trigger("addOutputItem",{output:c},{minDt:!1})},s=function(a){!f&&a.sliceStatus&&(f=[],h=[],n=[],p=[],d(a.sliceStatus).each(function(a){f.push(new ca(1));n.push(0);e&&(h.push(new ca(1)),p.push(0))}))},A=function(a){d.isUndef(a.sliceStatus)||(f||s(a),v(a))};return{start:function(){g=e?r:l;a.addMeasurementChangedListener(A)}}},cb=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},
Kb=function(a,b,c,e,d,h,k,n,p,q){var l=!1,s=t.isVideo(),v=h.request("mobileApp"),H=Y().applies(c,d),x=c.browserIs(g.BROWSERS.GECKO)||c.browserIs(g.BROWSERS.IE)&&d.on("rattie")||H,A=t.xDomainIframe&&!x,D=new wa(10),L=function(){d.on("viewabilityready")&&!l&&(e.send(g.DT_CODES.VIEWABILITY_READY),h.trigger("measurable"),l=!0)};h.on("delayedViewabilityReady",function(){B();L()});h.on("delayedViewabilityReadyCallOnly",L);var B=function(c){c=c||!1;try{D.start();var e,d;b.hasMeasurementStrategy()?d=v.isMobileAppEnvironment()&&
b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(n.collect(),c):(d=n.collect(),v.isMobileAppEnvironment()?(d.viewState=g.NA,d.method=g.NA,d.percentInView=g.NA):A&&(d.viewState=g.NA,d.percentInView=g.PIV_NA),s&&!t.isAvid()&&q.setVideoSpecificScreenEventFields(d));e=p.registerLocation(d);c||a.trigger("measurementChanged",d);D.stop();var f=r.round(D.getTime()/D.getCount());k.addItem({output:f},"lt",{type:g.DT_CODES.UNLOAD});return e}catch(l){h.trigger("error",g.ERROR_CODES.CHECK_SCREEN_LOC)}};
return{checkScreenLoc:B,stringifyPingTimes:function(){return d.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":s?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,e=a&&c.browserIs(g.BROWSERS.WEBKIT),d=a&&c.browserIs(g.BROWSERS.MSEDGE),a=a&&H,e=!e&&!d&&!a;return v.isMobileAppEnvironment()?b.isMeasurable():e},requiresDelayedViewabilityEvent:function(){v.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",
b)}}};k("viewabilityLoopLifecycle",["viewability","features","context","browser"],function(a,b,c,e){var f,h=jd(c),u=[new kd,new ld(h)],n=function(){return d(u).findFirst(function(a,d){return d.applies(e,b,c)?d:void 0})},p=function(a){"sessionFinish"===a.type&&k.getAggregator().trigger("adSessionComplete")},q=function(a){z.addEvent(x,a,function(){k.getAggregator().trigger("adSessionComplete")},!1)},w=function(){var a=new Z(g.DT_CODES.VIDEO_EVENTS);k.getAggregator().trigger("sendDt",a.callType,a.enumerator,
function(){var a={id:l.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};k.getAggregator().once("startViewabilityLoop",function(){var b,c=k.getAggregator().request("mobileApp").isMobileAppEnvironment();k.getAggregator().request("ids").impressionIsIdentifiable()&&(f=gc(a.checkScreenLoc,h.getPollingFrequency()),(b=n())?b.start(f):f.start(!0),c?t.isOmid()?k.getAggregator().request("omidVerificationClient").registerSessionObserver(p,"IAS"):q("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):
q("beforeunload"))});k.getAggregator().once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||w();k.getAggregator().trigger("unload");f&&f.stop();k.getAggregator().trigger("endAdSession");k.getAggregator().trigger("stopAdTalk")})},{tier:g.TIERS.VIEWABILITY});var jd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},ld=function(a){var b,c,e,d,h,g=function(p){e&&!h&&1>p?(h=!0,r.setTimeout(function(){g(p)},
1E3)):(d=1>p,!c&&d?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency(),!0)):c&&!d&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},n=function(a){g(a.percentInView)};return{applies:function(a,b,c){var d=k.getAggregator().request("mobileApp");a=(new Ea(b,a,c,d)).accepts();b=b.on("viewabilityOptimization")&&!a;e=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);k.getAggregator().on("IOPivChange",g);k.getAggregator().on("newScreenEvent",n)}}},kd=function(){var a,b,c,
e=!1,d=function(h){if(c&&!e&&1>h)e=!0,r.setTimeout(function(){d(h)},1E3);else return 1>h?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,e){c=e.usesZeroPivCustomMetric();var d=Y();return b.on("viewabilityOptimization")&&d.applies(a,b,e)&&e.isDeviceTypeGroupMobile()},start:function(a){b=a;b.start(!0);k.getAggregator().on("IOPivChange",d)}}},td=function(a,b,c,e,f,h){var u,n,p,q,w,C,v,H,O,A=s.getElementsWindow(b);s.getElementsDocument(b);k.getAggregator().provide("iframeCalculatorHelper",
md(A));var D=nd(b,e),L=g.AD_IDENTIFIER+"-"+l.asid,B=!1,I=K({}),F=t.isDeviceTypeGroupMobile(),y=t.usesGroupMCustomMetricMobilePassThru(),J,$=function(){if(!u)if(u=D.calcDims(b,e,p),c===g.DETECTION_METHODS.VIDEO&&t.embedded){var a=u,d=(new K(b)).getRounded();try{a.set("width",d.width),a.set("height",d.height)}catch(f){k.getAggregator().trigger("error",g.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===g.DETECTION_METHODS.AD_PLACEHOLDER&&u.treatAsPlaceholder();return u},E=function(){var b,e=t.xDomainIframe&&
B;b=F&&B&&p.isReady();b=e||b;e=D.getClippedDims&&(c===g.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?n=p.getPiv():d.isUndef(n)&&(b=!F&&(t.friendly||d.isDef(x.mozInnerScreenX))&&f.on("offscreen"),H=$(),v=new K(s.calcWinDims()),C=new K(b?s.calcMonDims():{}),O=e?D.getClippedDims():I,n=a.calcPercentInView(H,v,C,O));return n},Q=function(){return a.calcInitialViewState(E())},La=function(){return b===x?!1:$().isHidden()},G=function(a,b){return t.isVideo()?r.getDoc().body:a.document&&a.document.body?
a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=r.getWindow(),d=r.getDoc(),f=b===c,h=d.body,g=k.getAggregator(),n=new Y,l=g.request("browser"),u=g.request("features"),v=g.request("context"),s=!t.xDomainIframe,g=G(b,e),d=f&&h?d.body:b;J=t.friendlyIframe?c.frameElement:d;z.addEvent(d,"click",function(){k.getAggregator().trigger("adComponentClicked")});z.addEvent(d,"mouseover",function(){k.getAggregator().trigger("adComponentMousedOver")});n.applies(l,
u,v)?(p=Hc(b,s),p.start(),B=!0,y&&(c=new od($().getRounded()),n=new pd,g=new qd(g,n),q=new rd(c.getSlices(),g))):y&&(w=new sd(a))})();return{mark:function(){s.setAttributeOf(J,L,"")},cleanup:function(){s.removeAttributeOf(J,L)},isNode:function(a){return b===a},isHidden:La,isObstructed:function(){return!1},getDims:$,getPercentInView:E,getLocationState:Q,getOnPageViewability:function(){return La()?g.OUT_OF_VIEW:Q()},getDetectionMethod:function(){return c},getContainerDims:function(){return D.allowsOptimization?
u:K(e)},refresh:function(){O=H=v=C=n=u=void 0;if(h){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==x&&c&&c!==M&&!a;)a=c===e,c=c.parentNode;a||(e=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;q&&q.isReadyToMeasure()?a=q.getSliceStatus():t.friendly&&w&&d.isDef(H)&&(a=w.getSliceStatus(H,v,C,O));return a}}},ud=function(a,b){var c=[],e,f=d([]),h=function(){return c[0]&&c[0].getDetectionMethod()===g.DETECTION_METHODS.AD_PLACEHOLDER},l=function(p,n,q,l){var u=h()||
0===c.length;p=td(a,p,n,q,b,l);h()&&(q=c.shift(),f=d(c),q.cleanup(),e=void 0);c.push(p);f=d(c);u&&p.mark();u&&n!==g.DETECTION_METHODS.AD_PLACEHOLDER&&k.getAggregator().trigger("primaryadfound",p)},n=function(){if(e)return e;var a,b=!1,c=0,d=0;f.each(function(e,f){var h;h=f.getDims();h.hasValidDims()&&(a=f.getPercentInView(),b=a!==g.NA,h=h.area(),c+=h,d+=a/100*h)});return e={totalArea:c,totalInView:d,hasMeasurement:b}},p=function(){var a;a=n();a=a.hasMeasurement?r.round(a.totalInView/a.totalArea*100):
g.PIV_NA;isNaN(a)&&(a=0);return a},q=function(){var c=b.bootstrapOn("mobOrTab"),c=n().totalArea>=g.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!c&&!t.isVideo();return a.calcInitialViewState(p(),c)},w=function(a){var b=-1;f.each(function(c,e){e.isNode(a)&&(b=c)});return b},s=function(a){return function(){return c[0]&&c[0][a]()}};k.getAggregator().on("adComponentAdded",function(a){d(a).each(function(a,b){-1===w(b)&&l(b,g.DETECTION_METHODS.MUTATION)})});k.getAggregator().on("adComponentRemoved",function(a){d(a).each(function(a,
b){var e=w(b);-1<e&&c.splice(e,1)})});return{getDims:s("getDims"),isObstructed:s("isObstructed"),getDetectionMethod:s("getDetectionMethod"),getContainerDims:s("getContainerDims"),getViewState:q,getPercentInView:p,isHidden:s("isHidden"),isUsingPlaceholder:h,hasAd:function(){return!!c.length},refresh:function(){e=void 0;f.each(function(a,b){b.refresh()})},addAdComponent:l,getOutOfViewReasons:function(){var a,b=[],d=c[0],f=g.OUT_OF_VIEW_REASONS;d&&(a=e||q(),a!==g.OUT_OF_VIEW&&a!==g.PARTIAL_VIEW_MINUS||
b.push(f.GEOM),d.isHidden()&&b.push(f.HIDDEN),d.isObstructed()&&b.push(f.OBSTRUCTION));return b},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:s("getSliceStatus")}},vd=function(a){var b=!1;if(!d.isUndef(x.MutationObserver)){var c=new x.MutationObserver(function(a){r.execAtEndOfThread(function(){b&&d(a).each(function(a,b){b.addedNodes.length&&k.getAggregator().trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&k.getAggregator().trigger("adComponentRemoved",
b.removedNodes)})})}),e=function(){b=!0;r.setTimeout(function(){b=!1},40)};k.getAggregator().on("adComponentClicked",e);k.getAggregator().on("adComponentMousedOver",e);z.whenReady(function(){try{c.observe(M.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(g.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},Dd=function(a,b){var c=[wd(),xd()],e=[ja(),yd(),zd(),Ad(),Bd(),Cd()],c=c.concat(e);return d(c).findFirst(function(c,e){return e.isApplicable(a,b)})},zd=function(){var a,b,c,e=function(a){a?
a&&c&&(r.execAtEndOfThread(function(){k.getAggregator().trigger("delayedViewabilityReadyCallOnly")}),c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ha();var c=s.crossQuerySelector(ha().getCssSelector(),!0);a=c?c.parentNode:a;e(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},U=function(a,b){var c,e=s.findChildWithLargestContent(a||l.contextNode.parentNode,b);1<s.getNodeArea(e)&&
!e[g.IAS_DETECTOR]&&(c=e);return c},Bd=function(){return{detectionMethod:g.DETECTION_METHODS.IFRAME,find:function(){return x},isApplicable:function(){return t.embedded},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},Ed=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=d(b).findFirst(function(a,b){return P.contains(b.src,"servedby.flashtalking")}));return a},e=function(){var b,e=a||c(),d=/;(\d+);/;e&&e.src&&(b=e.src.match(d)[1]);return b};return{detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,
isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var a,b=e();try{a=d(["#ftdiv"+b,"#ftframe"+b]).findFirst(function(a,b){return s.crossQuerySelector(b,!0)})}catch(c){}return a}}},Fd=function(){return{isApplicable:function(a,b){var c;try{c=s.getFrameId()}catch(e){}return b.on("yieldmo")&&c&&P.contains(c,"_tpi")&&s.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+s.getFrameId().replace("_tpi","")+
"']"},detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Gd=function(){var a,b,c=r.getDoc(),e=function(){var b;a||(a=(b=(b=s.querySelector(c,"div[id*='ebDiv']"))&&b.id)&&b.split("ebDiv")[1]);return a},f=function(){var a;b||(b=(a=(a=s.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+e()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:g.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),g=a.friendlyIframe&&r.getWindow().frameElement,g=g&&
K(g).isOneByOne(),k=function(){var a=r.getDoc().scripts;return d(a).findFirst(function(a,b){return P.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&c.EBG.ads&&!d(c.EBG.ads).isEmpty();return b.on("sizmek")&&k&&c&&g&&e()&&f()},getCssSelector:f}},ha=function(){var a,b=k.getAggregator().request("features");a||(a=[Gd(),Fd(),Ed()]);return d(a).findFirst(function(a,e){return e.isApplicable(t,b)})},Ad=function(){var a,b=function(){r.execAtEndOfThread(function(){k.getAggregator().trigger("delayedViewabilityReadyCallOnly")})};
return{usePlaceholder:!1,detectionMethod:g.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,e=za().find();e&&e.celtra&&e.celtra.loaded&&(c=e.celtra.viewabilityObservee,a=s.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},za=function(){var a,b=function(){var b;(b=l.contextNode.parentNode)&&P.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&s.querySelector(b,
".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ja=function(){var a=k.getAggregator().request("mobileApp");return{usePlaceholder:!0,detectionMethod:g.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=s.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[g.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},xd=function(){var a;
return{detectionMethod:g.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var b=s.crossQuerySelector(l._cl_adpath);b&&(a=s.getParent(b),1>s.getNodeArea(b)&&(a=b,b=s.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},wd=function(){var a;return{detectionMethod:g.DETECTION_METHODS.SPECIFIED_AD_COMPOUND,isApplicable:function(){return t.isCompoundAd()},find:function(){var b=[],c;/\[(.*)\]/.exec(l._cl_adpath)[1].split(",").forEach(function(e){if(c=
s.crossQuerySelector(e))a=s.getParent(c),1>s.getNodeArea(c)&&(a=c,c=s.findElementsWithSize(c));b.push(c)});return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Cd=function(){return{usePlaceholder:!0,detectionMethod:g.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:U,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},yd=function(){return{detectionMethod:g.DETECTION_METHODS.VIDEO,find:k.getAggregator().request("video").findAdNode,
isApplicable:t.isVideo,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},nd=function(a,b){var c,e;c=[Hd(),Id(),Jd()];e=d(c).findFirst(function(c,e){return e.isApplicable(a,b)});c=Kd();c.isApplicable(b)&&(c.setBaseStrategy(e),e=c);return e},Jd=function(){return{calcDims:function(a,b){var c,e,d=new K(a);s.isClippable(a,b)&&(c=s.getClippedDimensions(a,b),e=d.getRounded(),d.set("height",c.height<e.height?c.height:e.height||1),d.set("width",c.width<e.width?c.width:
e.width||1));return d},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||t.isBustedIframe())&&s.nodeIsInWindow(a,r.getTop());a=!s.elementIsEmbedded(a);return b||a}}},Id=function(){var a=k.getAggregator().request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&s.elementIsEmbedded(a)}}},Hd=function(){var a=k.getAggregator().request("iframeCalculatorHelper");
return{calcDims:function(b){var c=a.calcDims();b=(new K(b)).getRounded();c.set("height",b.height);c.set("width",b.width);return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var e=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!s.nodeIsInWindow(c,r.getTop()),d=t.isCeltra()&&s.elementIsEmbedded(a);return e||d}}},Kd=function(){var a;return{calcDims:function(b,c,e){e=d.isDef(e)?e.getAdNodeDimensions():void 0;a&&d.isUndef(e)&&(e=a.calcDims(b,c));return e},isApplicable:function(a){a=
Y();var c=k.getAggregator(),e=c.request("browser"),d=c.request("features"),c=c.request("context");return c.isDeviceTypeGroupMobile()&&a.applies(e,d,c)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},md=function(a){var b,c,e,f=k.getAggregator().request("features"),h=k.getAggregator().request("browser");a=a||r.getWindow();var l=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var e,d=b.parent.frames,f=!1,h=0,n=d.length;h<n;h++)if(d[h]==b){e=d[h];
f=!0;break}if(f){e=s.getRect(e.frameElement);c.left+=e.left;c.top+=e.top;try{c.width=r.min(c.width,e.width),c.height=r.min(c.height,e.height)}catch(t){k.getAggregator().trigger("error",g.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&l(b.parent,c)}return c},n=function(){var n,q={};try{var w,C,v,H,x,A,D=r.getMaxNumber(),z=r.getMaxNumber();t.friendly?(w=l(),v=w.left,H=w.top,D=w.width,z=w.height,C=s.browserWindowPosition(),x=C.scrX+v,A=C.scrY+H):f.on("rattie")&&h.browserIs(g.BROWSERS.IE)?(e=e||k.getAggregator().request("ieXDomainViewability"),
c=e.determineFramePosition(),x=c.scrX,A=c.scrY):d.isDef(a.mozInnerScreenX)&&(x=r.round(a.mozInnerScreenX),A=r.round(a.mozInnerScreenY));var q={scrX:x,scrY:A,iFrameClippingWidth:D,iFrameClippingHeight:z},B,I,F=b||s.getIeDimObj(a);b=F;d.isDef(a.innerWidth)?(B=a.innerWidth,I=a.innerHeight):F&&d.isDef(F.clientWidth)?(B=F.clientWidth,I=F.clientHeight,0===B&&0<F.offsetWidth&&(B=F.offsetWidth),0===I&&0<F.offsetHeight&&(I=F.offsetHeight)):a.frameElement&&d.isDef(a.frameElement.clientWidth)&&(B=a.frameElement.clientWidth,
I=a.frameElement.clientHeight);n=B;q.height=I;q.width=n}catch(y){k.getAggregator().trigger("error",g.ERROR_CODES.GET_AD_DIMENSIONS)}return q};return{calcDims:function(){return new K(n())},getClippedDims:function(){var a=n();return new K({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Eb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new Ld:new Md(a,b,c)}}},Md=function(a,b,c){var e,f=l&&l.contextNode&&l.contextNode.parentNode?l.contextNode.parentNode:
null,h=ud(b,c),k=function(){var a,b,f;e=e||Dd(t,c);a=e.find();!a&&e.usePlaceholder?n():a&&(a=d(a).isArray()?a:[a],b=e.getAdContainer(),f=e.allowForAdContainerChange,d(a).each(function(a,c){h.addAdComponent(c,d.resolve(e.detectionMethod),b,f)}))},n=function(){var a;h.hasAd()||(a=s.getPlaceholderSpan(),f.insertBefore(a,l.contextNode.nextSibling),h.addAdComponent(a,g.DETECTION_METHODS.AD_PLACEHOLDER,s.getParent(a)))};vd(a);return{find:function(){h.isUsingPlaceholder()||!h.hasAd()?k():h.refresh();return h},
getDetectionMethod:function(){}}},Ld=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},nb=function(a){var b,c=[],e=a||x,d=function(){return"stub"===g().mode};a=function(){d()&&(b=e.setInterval(function(){if("stub"!==g().mode){e.clearInterval(b);for(var a=0;a<c.length;a++)e.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var h=function(){return void 0!==e.avid},g=function(){var a,b={};if(h())if(a=e.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=
JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,x.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:h,getAvidAdSessionContext:g,addEventListener:function(a,b){d()?c.push({type:a,functionToExecute:b}):e.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(d())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return e.avid.getHtmlVideoAvidAdSessionListener()}}},mb=function(a){var b=
new Nd,c=new Od;(function(){var e="";try{if(a.bootstrapOn("mobOrTab")||t.isDomless())e=b.detect(),b.hasDetectedMobileApp()&&(c.detect(),k.getAggregator().trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"}),k.getAggregator().trigger("addOutputItem",{output:e},"drul",{type:"impression"}))}catch(d){k.getAggregator().trigger("error",g.ERROR_CODES.MOBILE_APP)}})();return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},
Pd={url:{STRINGIFIED_METHOD:"u",detect:function(a){if(t.isDomless())return!1;var b=r.getWindow().location.href,c=[b];try{c.push(top.location.href)}catch(e){}try{c.push(parent.location.href)}catch(f){}if(t.embedded){try{c.push(parent.document.referrer)}catch(h){}try{c.push(M.referrer)}catch(g){}}try{"jsi"!==l.mode&&c.push(x.location.href)}catch(n){}try{c.push(l.jsref)}catch(k){}c.sort(function(a,b){return a.length>b.length?1:a.length<b.length?-1:0});return!!d(a).findFirst(function(a,e){var f=!1,h,
g,n="mobfox"===e?c:[b];for(g=0;g<n.length;g++){h=n[g];var k="string"===typeof e?[e]:e;if(d(k).isArray()&&(k[0].substring(0,4),k))for(var p=0;p<k.length&&(f=-1<h.indexOf(k[p]),!1!==f);p++);}return f})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){var e;e=!1;var f=r.getWindow();d.isDef(f.navigator)&&d.isDef(f.navigator.userAgent)&&(e=(e=f.navigator.userAgent)&&-1!==e.indexOf(c));return e})}},javascript:{STRINGIFIED_METHOD:"j",detect:function(a){return!!d(a).findFirst(function(a,
c){var e=!1;return e=d.isDef(P.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){return s.containsScriptTagWithSrc(function(a){var b=!1;return b=d.isDef(a)&&-1!==a.indexOf(c)})})}}},Ma=function(){var a=function(a,c){var e,d=Pd[a];d.detect(c)&&(e=d.STRINGIFIED_METHOD);return e};return{process:function(b){return d(b).map(a).join("")}}},Qd=[{STRINGIFIED_APPDET:"omid",detectionRules:{javascript:["omidSupported"]}},{STRINGIFIED_APPDET:"avid",
detectionRules:{javascript:["avid.getAvidAdSessionContext"]}},{STRINGIFIED_APPDET:"file",detectionRules:{url:["file:"],scriptSrc:["file:"]}},{STRINGIFIED_APPDET:"cont",detectionRules:{url:["content:"]}},{STRINGIFIED_APPDET:"appl",detectionRules:{url:["applewebdata:"]}},{STRINGIFIED_APPDET:"adma",detectionRules:{javascript:["ADMARVEL"]}},{STRINGIFIED_APPDET:"admb",detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_APPDET:"imbi",detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_APPDET:"mopb",
detectionRules:{url:["ads.mopub.com"],javascript:["mopubFinishLoad"]}},{STRINGIFIED_APPDET:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_APPDET:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_APPDET:"ogry",detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_APPDET:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_APPDET:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_APPDET:"innr",
detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_APPDET:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_APPDET:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_APPDET:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],Nd=function(){var a,b=function(){return void 0!==a&&""!==a},c=function(a,b){var c,d=Ma().process(b.detectionRules);d&&(c=d+"_"+b.STRINGIFIED_APPDET);return c};return{detect:function(){l.hasOwnProperty("serverSideAppDetection")&&0!==l.serverSideAppDetection.length?
a="s_serv":(a=d(Qd).map(c),a=0<a.length?a[0]:"");return a},hasDetectedMobileApp:b,setMobileAppDetectionRuleToSdk:function(){b()||(a="s_sdks");return a}}},Od=function(){var a=[],b=[],c=function(b,c){var d,g=Ma().process(c.detectionRules);g&&(a.push(c.STRINGIFIED_SDK+"*"+g),d=c);return d};return{detect:function(){b=d(Rd).map(c);0<b.length&&k.getAggregator().trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"});return 0<b.length},isSafeToInjectMraid:function(){return 1==
b.length&&d.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Rd=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],
url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"],
url:["smartadserver.com"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"],scriptSrc:["OguryFR"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}},{STRINGIFIED_SDK:"mobf",safeToInjectMraid:!0,detectionRules:{url:["mobfox"]}},{STRINGIFIED_SDK:"innr",detectionRules:{url:["inner-active.mobi"]}},{STRINGIFIED_SDK:"apnx",detectionRules:{javascript:["anjam"]}},{STRINGIFIED_SDK:"aers",safeToInjectMraid:!0,detectionRules:{userAgent:["AerServ"]}},
{STRINGIFIED_SDK:"tapj",detectionRules:{url:[["tapjoyads","app_id"]]}},{STRINGIFIED_SDK:"quan",detectionRules:{userAgent:["QuantcastSDK"]}}],od=function(a){var b=[],c=function(a,b,c){a*=c;return new W(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new W(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var e=a.height/10,d=0;10>d;d++)b.push({geometry:c(d,a.width,e),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},V=function(){var a=
g.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=g.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],e;return{getConfig:function(d){if(e)return e;d.height<a&&(a=1,b=[100]);for(d=0;d<a;d++)c.push(!1);return e={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Sd=function(){var a,b,c=0,e=-1,f=0,h=k.getAggregator().request("browser"),g=function(){var a,b;a=k.getAggregator().request("pageUrls").getDetectedURLs();a=d(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&
null!==b.match(/(insider)|(bustle)|(wikia)/i)});return d.isDef(a)};b=r.setInterval(function(){var a=r.now();e=a-f;f=a;c++;10<=c&&b&&r.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var d;c=c.getRounded().height;var f=s.calcMonDims().height,k=h.getUserAgent(),k=k&&null!==k.match(/(FBAN)/)?1:0,l=h.getUserAgent(),l=l&&null!==l.match(/(iPad)/)?1:0,v=g()?1:0,t=h.getUserAgent(),t=t&&null!==t.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;d=r.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*k-0.874412*
l+0.646972*v+0.28118*t+2.987259*(1E3<e?1:0)-2.463292);d/=1+d;a={mbah:c,mbsh:f,mbfb:k,mbip:l,mbhs:v,mbbr:t,mblr:e,mbp:d};b&&r.clearInterval(b);return 0.15<d},getDebugState:function(){return a}}},Wc=function(a,b,c){var e,f,h,u,n,p=[],q=l.contextNode.parentNode,w=0,s=0,v=!1,x=!1,y=new Sd,A=function(){var a=p.length-1,b=-1;-1<a&&(b=p[a].piv);return b},D=function(){k.getAggregator().trigger("delayedViewabilityReadyCallOnly")},L=function(a){z.whenReady(function(){f=new Td(a,r.getDoc().body)})},B=function(){f.removePixels()},
I=function(){var a=y.getDebugState(),b=A();d.isUndef(a)&&(a={});a.mbm=d.fromBoolToNum(x);a.mbrd=d.fromBoolToNum(v);a.mbtg=d.isDef(q.tagName)?q.tagName:"na";a.mbaf=d.isDef(h)?h:"na";a.mbad=d.isDef(e)?e.getRounded().width+"_"+e.getRounded().height:"na";a.piv=d.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{k.getAggregator().trigger("addOutputItem",{output:a},b),k.getAggregator().trigger("addOutputItem",{output:-101},"pingTime",b),k.getAggregator().trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,
c){var l;l=d.isDef(e);if(c||!b.adDimensions)return b;l||(h=b.method,e=b.adDimensions,L(e));if(d.isUndef(f)||!f.isReadyToMeasure())l=!1;d.isUndef(u)&&l&&(u=y.isLikelyToProduceFalsePositive(e));if(x=!u&&l){var q;l=f.getPercentInView();var B=A(),Q=1===b.tabHidden;s=r.now()-w;q=0<w?900>s:!0;w=r.now();0===b.adDimensions.area()&&(l=0);q||(l=0);var z=l;p.push({tm:t.getTagTime(),piv:z});3<p.length&&p.shift();0===l&&0<B&&(q&&(q=p.length-1,z=!0,2<=p.length&&-1<q&&(z=0===p[q].piv&&0===p[q-1].piv),q=!z),q&&(l=
B));a?(d.isUndef(n)&&(n=k.getAggregator().request("video")),n.setVideoSpecificScreenEventFields(b),l=b.isVideoPlayingInFullscreen?!0:!Q&&50<=l&&b.isVideoPlaying):l=!Q&&50<=l;b.viewState=l?g.IN_VIEW:g.OUT_OF_VIEW;b.percentInView=A();B=[];Q=d(b.reason);q=g.OUT_OF_VIEW_REASONS;l||B.push(q.GEOM);Q.contains(q.HIDDEN)&&B.push(q.HIDDEN);Q.contains(q.OBSTRUCTION)&&B.push(q.OBSTRUCTION);b.reason=B;b.sliceStatus=f.getSliceStatus();v||(v=!0,r.execAtEndOfThread(D))}else b.viewState=g.NA,b.percentInView=-1;return b},
start:function(){k.getAggregator().on("endAdSession",B);c&&r.setTimeout(I,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return x},isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},Ea=function(a,b,c,d){return{accepts:function(){var f=c.xDomainIframe,h=a.bootstrapOn("mobOrTab"),k=a.on("ios"),n=b.browserIs(g.BROWSERS.WEBKIT),p=9<=b.getIOSVersion(),l=d.isMobileAppEnvironment();return f&&h&&k&&n&&p&&!l},isImmediate:function(){return!1},
start:function(){}}},Ud=function(a,b,c,e,f,h,k){var n,p=l.birthdate+""+r.round(1E6*r.random()),q=101,w,t,v,s=!1,x=function(){return'<html><body><script type="text/javascript">'+("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,h=(new Date).getTime(),g=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(g)};a.requestAnimationFrame(g);b.body.isInView=function(a){return{isInView:c,
rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-h}}catch(k){b.body.setAttribute("data-err",k.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+")(window);")+"\x3c/script></body></html>"},A=function(a,b){v||(q=a,v=b)},z=function(){var a,b,c;if(v)return!1;if(t)return!0;try{if(w.contentWindow&&w.contentWindow.document&&w.contentWindow.document.body){c=w.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);
"iasInit"===c.getAttribute("data-st")&&A(104);(b=c.isReady?c.isReady():!1)&&(t=c.isInView?c.isInView:void 0)&&A(105)}}catch(e){A(106,e)}return d.isDef(t)},y=function(a,b,c){var h=M.createElement("iframe");h.id=p;d(h.style).mixin({position:"absolute",width:e+"px",height:f+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var k=h.style;h[g.IAS_DETECTOR]="true";k.left=b;k.top=c;a.appendChild(h);w=h;A(102);a=w;try{var n=a.contentWindow,l=x();n.document.open();
a.contentWindow.document.write(l);n.document.close()}catch(q){A(103,q)}return h}(a,b,c);return{isInView:function(){var a,b,c=!1;r.now();z()&&(a=t(!0),c=a.isInView,s=!1,n&&(b=20*n.rate+n.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,s=!0)),A(107),n=a);return c},isNotReadyToReport:function(){return!z()},createdElement:w,remove:function(){y.parentNode&&y.parentNode.removeChild(y)},getStatus:function(){return q},getError:function(){return v},isReadingInvalid:function(){return s},getRate:function(){return w.contentWindow&&
w.contentWindow.document&&w.contentWindow.document.body&&w.contentWindow.document.body.getRate?w.contentWindow.document.body.getRate():-1},percentInView:h}},Td=function(a,b,c){var e,f=a.getRounded(),h=[],g=!1;a=V().getConfig(f);var k=a.percentInViewSliceArray,p=1==a.numberOfSlices,l={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},w=function(){var a;if(!g)for(g=!0,a=0;a<h.length;a++)if(h[a].isNotReadyToReport()){g=!1;break}return g},s=function(a){var b=[],c=0;r.floor(a.height/k.length);var e=
r.floor(a.width/2-1);d(k).each(function(d,f){c=r.floor(a.height*f);c===a.height&&(c-=2);b.push({y:r.floor(c)+"px",x:r.floor(e)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},v=function(a){var b=[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},x=function(a,b){var c=0;b&&(a.reverse(),d(a).map(function(a,b){b.percentInView=100-b.percentInView}));d(a).findFirst(function(a,b){b.isInView&&(c=r.max(c,b.percentInView));
return!b.isInView});return c},z=function(){var a,b,c,e=[];l.mbs=[];d(h).each(function(b,c){a=c.isInView();l.mbs.push(a);e.push({isInView:a,percentInView:c.percentInView})});b=x(e,!1);c=x(e,!0);return r.max(b,c)};(function(){e=p?v(f):s(f);var a=e.get();d(a).each(function(a,d){var e=new Ud(b,d.x,d.y,d.width,d.height,d.percentInView,c);h.push(e)})})();return{getPercentInView:function(){var a=w(),b=z();l.mbrd=a?1:0;b!=l.mbp&&l.mbivs.push([t.getTagTime(),b]);l.mbp=b;return a?b:-1},removePixels:function(){void 0!==
c&&c.stop();d(h).each(function(a,b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){l.mbm=1;h&&0<h.length&&(l.mbpr=[],l.mbir=[],d(h).each(function(a,b){l.mbpr.push(b.getRate());l.mbir.push(b.isReadingInvalid()?1:0)}));return l},isReadyToMeasure:w,getSliceStatus:function(){var a;h&&0<h.length&&(a=[],d(h).each(function(b,c){a.push(c.isInView())}));return a}}},rd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},e=function(a,b){var c=[],e=a.geometry.value();d(b).each(function(b,
d){if(a.geometry.doesIntersect(d)){var f=d.value(),h=Math.max(e.leftX,f.leftX),g=Math.min(e.rightX,f.rightX),k=Math.max(e.topY,f.topY),f=Math.min(e.bottomY,f.bottomY);c.push(new W(h,g,k,f))}});return c},f=function(a,b){var c=0,f=e(a,b),h;d(f).each(function(a,b){h=b.value();c+=h.area});return c},h=function(){var b=0;c.mbs=[];d(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){d(a).each(function(a,c){c.isInView=f(c,b)>=
c.geometry.value().area})});return{getPercentInView:function(){var a=h();c.mbrd=1;a!==c.mbp&&c.mbivs.push([t.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=1;c.mbpr=[];c.mbir=[];d(a).each(function(a,b){c.mbpr.push(g.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];d(a).each(function(a,c){b.push(c.isInView)});return b}}},sd=function(a){var b=V();return{getSliceStatus:function(c,
d,f,h){var g,k=[];g=c.getRounded();c=g.height;var l=g.scrY,q=new K({scrX:g.scrX,width:g.width}),t=b.getConfig(g).numberOfSlices;q.set("height",r.floor(c/t));for(var s=0;s<t;s++)q.set("scrY",r.ceil(l+c/t*s)),g=100===a.calcPercentInView(q,d,f,h),k.push(g);return k}}},W=function(a,b,c,d){var f=Math.ceil(a),g=Math.ceil(b),k=Math.ceil(c),l=Math.ceil(d),p=g-f,q=l-k,r=p*q,t=function(){return{leftX:f,rightX:g,topY:k,bottomY:l,width:p,height:q,area:r}};return{value:t,doesIntersect:function(a){var b=t();a=
a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},pd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},qd=function(a,b){var c,e=[],f=[],g=function(){d(e).each(function(a,b){b(f)})},k=function(){var a=[];d(f).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=
b.pop(),e=d.boundingClientRect;b=e.width;var l=d.intersectionRatio,d=d.intersectionRect,r=d.left-e.left,e=d.top-e.top,e=new W(r,r+d.width,e,e+d.height);f.push(e);e=k();f=[];for(d=0;e.length>d&&e.length!==d+1;d++)f.push(new W(0,b,e[d],e[d+1]));g();1===l&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){e.push(a)}}},Vd=function(){return{listenForResult:function(){k.getAggregator().on("videoBlockResult",function(a){var b=
k.getAggregator().request("adNode"),c=!1,e="blockAd"+l.videoId;"failed"===a.action&&(c=!0);if(b&&d.isDef(b.blockAd))b.blockAd(c);else if(b&&d.isDef(b[e]))b[e](c)})}}},Wd=function(a,b){var c,e,f,g,u;f=k.getAggregator().request("videoTranslator").translate(a.messageType);g=function(a){a=a.eventData||{};a=d({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);u=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};a&&(b=d(a).mapToObj(c));
return b}(a);e={t:a.time-l.birthdate,tp:f,sl:b};d(e).mixin(g);d(e).mixin(u);return c=d({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(f)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(f)},indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===f||"initAd"===f)&&("fullscreen"===g.viewMode||g.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===f&&"normal"===g.viewMode},indicatesQuartile:function(){return-1!==
"adVideoFirstQuartile|adVideoMidpoint|adVideoThirdQuartile|adVideoComplete".indexOf(f)},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(f)},getVolume:function(a){return a.getVolumeFromContext(g)},updateScreenLoc:function(a){e.sl=a;c.sl=a},trigger:function(){"adImpression"===f?k.getAggregator().persistentTrigger(f,g,u):k.getAggregator().trigger(f,g,u)},toString:function(){return"{"+d(e).toParams()+"}"}}).mixin(e)},Xd=function(){var a=[];return{registerEvent:function(b,
c,d){b=new Wd(b,c,d);a.push(b);return b},toString:function(){return"{"+d({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+"}"},isEmpty:function(){return 0===a.length}}},Yd=function(){var a,b,c,e=function(e){c=d.isDef(e)?0===e:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},f=function(){a&&a.hasAlwaysBeen(!0)&&k.getAggregator().trigger("sendDt",g.DT_CODES.QUARTILE_FULLY_INVIEW)},h=function(){b=!0;e()},l=function(a){a=(new Na).getVolumeFromContext(a);e(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},
start:function(c){k.getAggregator().on({adVideoStart:h,adImpression:h,volumeChanged:l,adVideoMidpoint:f});a=c.createViewabilityTracker("mpt",function(a){var c=k.getAggregator().request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Zd=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Na=function(){return{getVolumeFromContext:function(a){var b,
c=-1;d.isDef(a)&&(d.isDef(a.volume)?c=a.volume:d.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},hb=function(a,b,c){var e="IASid"+a,f="getIasVidBridgeVersion"+a,h,u,n,p=[],q=g.OUT_OF_VIEW,s=!1,x=!1,v=!1,y=!0,O=new Xd,A=Yd(),D=new Vd,E=new Na,B=new Aa,I=function(b){var d;s=!0;var e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=O.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(x=!0,q=v?g.IN_VIEW:!1):d.indicatesNotPlaying()?(x=!1,q=g.OUT_OF_VIEW):d.indicatesFullscreen()?
(v=!0,q=x?g.IN_VIEW:g.OUT_OF_VIEW):d.indicatesNormalSize()&&(v=!1,q=x?!1:g.OUT_OF_VIEW),b=parseFloat(d.getVolume(E)),0<b?y=!0:0===b&&(y=!1));p.push(d);n&&M();return d},F=function(b){var c,g,h=ma().wrapToGlobal(I),n=function(a){d.isStr(a)&&(k.getAggregator().provide("vc",function(){return a}),k.getAggregator().trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{g=b[f]||b.getIasVidBridgeVersion,c=d.isFunction(g)&&"2"===g.call(b)?unescape(b[e].call(b,a,h)):unescape(b[e].call(b,a)),s=!0,
n(c||"n")}catch(p){__IntegralASDiagnosticCall("handshakefailure",p,l)}},G=function(){var c=function(a){return d(d(a).toArray()).findFirst(function(a,b){return d.isFunction(b[e])})};h||(d(["*[data-integralas-vid-"+a+"]",".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);return h=c(d)}),!h&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},l));return h},J=function(){var a=G();a&&!s&&F(a);return a},K=function(a){a=E.getVolumeFromContext(a);
y=d.isDef(a)?0<a:!1},M=function(){B.init();d(p).each(function(a,b){b&&(d.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&k.getAggregator().trigger("adSessionComplete"),b.indicatesQuartile()&&("adVideoComplete"!==b.tp&&k.getAggregator().trigger("sendDt",g.DT_CODES.VIDEO_EVENTS),k.getAggregator().trigger("videoQuartileEvent",b)))});p=[];n=!0};(function(){z.addEvent(r.getWindow(),"message",function(a){I(a)});k.getAggregator().on({volumeChanged:K});k.getAggregator().provide({videoEventsString:O,
videoVersion:function(){var a,b=J();try{a=b.getVersion()}catch(c){a=-1,k.getAggregator().trigger("error",g.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return u=u||new Zd},adNode:J});J();D.listenForResult();A.isApplicable(t)&&A.start(c)})();return{findAdNode:J,getViewStateOverride:function(){return q},isHandshakeComplete:function(){return s},triggerInitializationEvents:M,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===g.NA;a.isVideoPlaying=!0;a.isSoundOn=
y;a.isVideoPlayingInFullscreen=!1;if(q){if(q===g.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=g.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:q;a.isVideoPlaying=q===g.IN_VIEW}v&&x&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},$d=function(){return new aa(g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Sb=function(){var a,b,c={},e=0,f=function(c){if(c||a)e+=5,b.onTick(e,function(){a?f():k.getAggregator().trigger("sendDt",
g.DT_CODES.PERFORMANCE)}),a=!1},h=function(){b=new xa;e=0;f(!0);b.start()},l=function(e,f,g,k){e=c[e];k?(d.isDef(e[f])||(e[f]=[]),e[f].push(g)):e[f]=g;b&&b.isActive()||h();a=!0},n=function(c,d,e){k.getAggregator().trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||h();a=!0},p=function(b){d(c).each(function(e,f){var g=c[e],h={type:b,oneTime:!0,minDt:!0,asION:!0};d(g).isEmpty()||(k.getAggregator().trigger("addOutputItem",{output:g},e,h),c[e]={});a=!1})};return{start:function(){k.getAggregator().on("preSendDt",
function(a){p(a);b&&b.kill()});k.getAggregator().on("addThrottledProp",l);k.getAggregator().on("addThrottledOutputItem",n)},addFieldTypes:function(a){d(a).each(function(a,b){c[b]={}})}}},Xb=function(){var a={},b=function(b){a[b]||(a[b]=new wa(1,l.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();k.getAggregator().trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){k.getAggregator().on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},
ae=function(){return new aa(g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Cb=function(a){var b={},c=a instanceof Array&&0<a.length;c&&(d(a).each(function(a,c){b[c.getType()]=c}),k.getAggregator().on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.IM,"pci",c.toString())}catch(d){}}));k.getAggregator().provide("perfActive",function(){return c});return{isActive:c}},
aa=function(a,b){var c=0,e=[],f=function(){e.sort(function(a,b){return a.timestamp-b.timestamp})},g=function(){var a,b={};f();d(e).each(function(d,e){a&&(b[e.code]=e.timestamp-a);d===c&&(a=e.timestamp)});return b};return{addPoint:function(a){e.push(a)},toString:function(){return d(g()).toION()},getType:function(){return a},setBaseOrdinal:function(a){c=a},isFinished:function(){return e.length===b}}},Db=function(){function a(){}a.build=function(){var a=[];a.push(new aa(g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.TYPE,
g.PERF_TIMELINE_TRACKER_CONFIG.RENDER.COUNT));var c;c=k.getAggregator().request("vc");var d={jv3:Oa,av3:Oa,jvw:ae,avw:$d};(c=c?d[c]:void 0)&&a.push(c());return a};return a}(),Oa=function(){return new aa(g.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,g.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},T={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){k.getAggregator().trigger("measureTime",T.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){z.addEvent(x,"load",function(){k.getAggregator().trigger("measureTime",
T.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new xa;a.onTick({4:function(){k.getAggregator().trigger("markTime",T.IDS.IN_BROWSER_DELAY)},5:function(){k.getAggregator().trigger("measureTime",T.IDS.IN_BROWSER_DELAY)}});a.start()}},N={isFrameworkAvailable:function(a,b){var c,d,f=r.getTop(),g=r.getWindow();try{c=f[a]}catch(k){for(;!d;){try{g.frames[b]&&(d=frame)}catch(l){}if(g===f)break;g=g.parent}}return c||d},getMessageHandler:function(a,b){var c=N.getCallId(),d=function(f){try{f&&f.data&&
f.data[a]&&f.data[a].callId===c&&f.data[a].returnValue&&(b(f.data[a].returnValue),z.removeEvent(r.getWindow(),"message",d))}catch(h){k.getAggregator().trigger("error",g.ERROR_CODES.GDPR)}};return d},getCallId:function(){return"ias_"+l.asid},send:function(a,b){k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.ENVIRONMENT,a,b)}};k("CCPAConsentDetector",[],function(){function a(a){a&&N.send(b,d(a).toION())}var b="ccd";(function(){var b=N.isFrameworkAvailable("__uspapi","__uspapiLocator");N.send("cca",
!!b);if(b){var e,f;d.isFunction(b)?b("getUSPData",1,a):(e={__uspapiCall:{command:"getUSPData",version:1,callId:N.getCallId()}},f=N.getMessageHandler("__uspapiReturn",a),z.addEvent(r.getWindow(),"message",f),b.postMessage(e,"*"))}})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});k("GDPRConsentDetector",[],function(){function a(a){var f=d.isDef(a)&&d.isDef(a.vendorConsents)&&d.isDef(a.vendorConsents[b])?a.vendorConsents[b]:void 0;a={appl:d.stringifyTriState(a.gdprApplies),
cnst:d.stringifyTriState(f),glbl:d.stringifyTriState(a.hasGlobalScope),mtdt:encodeURIComponent(a.metadata)};N.send(c,d(a).toION())}var b=278,c="gcd";(function(){var c=N.isFrameworkAvailable("__cmp","__cmpLocator");N.send("gca",!!c);if(c){var f,g;d.isFunction(c)?c("getVendorConsents",[b],a):(f={__cmpCall:{command:"getVendorConsents",parameter:[b],callId:N.getCallId()}},g=N.getMessageHandler("__cmpReturn",a),z.addEvent(r.getWindow(),"message",g),c.postMessage(f,"*"))}})()},{tier:g.TIERS.ENVIRONMENT,
applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});k("GDPRV2ConsentDetector",[],function(){function a(a){var f=d.isDef(a)&&d.isDef(a.vendor)&&d.isDef(a.vendor.consents)&&d.isDef(a.vendor.consents[b])?a.vendor.consents[b]:void 0;a={appl:d.stringifyTriState(a.gdprApplies),cnst:d.stringifyTriState(f)};N.send(c,d(a).toION())}var b=278,c="gcd2";(function(){var c=N.isFrameworkAvailable("__tcfapi","__tcfapiLocator");N.send("gca2",!!c);if(c){var f,g;d.isFunction(c)?c("getTCData",2,a):(f=
{__tcfapiCall:{command:"getTCData",parameter:[b],callId:N.getCallId(),version:2}},g=N.getMessageHandler("__tcfapiReturn",a),z.addEvent(r.getWindow(),"message",g),c.postMessage(f,"*"))}})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});k("postMessageDetector",[],function(){var a=!1,b="pmdetector"+l.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var e=r.getWindow();z.addEvent(e,"message",c);e.postMessage(b,"*");r.execAtEndOfThread(function(){k.getAggregator().trigger("addThrottledProp",
g.DT_SLOT.IM,"pom",d.stringifyTriState(a));z.removeEvent(e,"message",c)})})()},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("pmdetect")&&b.hasPostMessage()}});k("safeFrameDetector",[],function(){k.getAggregator().trigger("addThrottledProp",g.DT_SLOT.IM,"sf",d.stringifyTriState(t.isSafeFrame()))},{tier:g.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Pb=function(){var a=l.asid,b=l.cookieBaseURL,c=l.protocol,e=function(a){d(a).each(function(a,b){k.getAggregator().trigger("notify",
b)})},f=function(){var d;d=new S(c+"://"+b,!0);d.setParam("asid",a);d=d.toString();k.getAggregator().trigger("jsonp",d,e,!0);k.getAggregator().trigger("updateDtCount")};return{start:function(){k.getAggregator().on("sendCookie",f)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},Rb=function(a,b,c,d,f,h,r){var n=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var q,s=d.baseUrl,x,v,z=h.getDocumentMode();
"number"===typeof z?(v=2E3,8===z?v=4E3:8<z&&(v=8E3)):v=n(l.sp_imp_maxLength,2E3);x=v;if(t.integratedBlockingApplies(s)){v=s;var y=k.getAggregator().request("mobileApp"),A=y&&y.isMobileAppEnvironment&&y.isMobileAppEnvironment(),D=l.contextNode.getAttribute("data-ias-container"),E=l.contextNode.getAttribute("data-ias-callback"),y=v+"adContainerId="+D+"&cbFunctionName="+E,y=A?y.replace("monitoring","blocking"):y.replace("skeleton.js",l.integration+".js"),B=l.protocol+":"+l.staticServer+l.integration+
"a.js",I=l.protocol+":"+l.staticServer+l.integration+".js",s=y+"&true_pb="+encodeURIComponent(l.passback)+(A?"&redirectUrl="+encodeURIComponent(I):"")+(A?"&passback=":"&adsafe_pb=")+encodeURIComponent(B)+"&"}var A=s=s.replace(g.UNIQUE_ID_TOKEN,l.asid),F=s.length,G,J,K=n(l.sp_imp_jsInfo_minLength,0),B="";try{G=x-F-K,0<G&&(J=be(p,G,14,b.on("partialUrls")),B+=J.join("&"))}catch(M){a.add(g.ERROR_CODES.IMPRESSION_URLS)}s=A+B;p=s+="&"===s.slice(-1)?"":"&";var N,F="";try{N=x-s.length,F+=ce(N,"adsafe_jsinfo=",
a,b,c,f,h,r)}catch(P){a.add(g.ERROR_CODES.JSINFO),F+="adsafe_jsinfo=e:"+a.toString()}s=p+F;d.macroUrl&&(s+="&"===s.slice(-1)?"":"&",s+=d.macroUrl);q=s;d.sendImpression(q);l.impUrl=q;k.getAggregator().trigger("impressionsent")}catch(R){__IntegralASDiagnosticCall("impsend",R,l)}}}},ce=function(a,b,c,e,f,h,s,n){return function(c){var e=c.primary.join(","),g=b,h=0,k=function(a){if(a)return","+a};g.length+e.length+5<=a&&(g+=k(e),f.impressionIsIdentifiable(!0),d(c.secondary).each(function(b,c){g.length+
c.length+5<=a?g+=k(c):h+=1}));return g+=",ov:"+h}(function(){var a,b;b=a={viewState:g.NA};t.isDomless()?b=n.checkScreenLoc(!0)||a:e.on("impFailSafe")?r.getDoc().body&&(b=(b=n.checkScreenLoc(!0))?b:a):d.isDef(r.getDoc().body)&&(b=n.checkScreenLoc(!0));n.isImmediatelyMeasurable()||n.requiresDelayedViewabilityEvent();a=b;var w=a.viewState;b=f.getAvidIds();w=["id:"+l.asid,"c:"+f.getCacheBustId(),"sl:"+w,"em:"+t.embedded,"fr:"+t.friendly];e.on("avidPropertiesInImpression")&&d.isDef(b)&&(w.push("abi:"+
b.bundleIdentifier),w.push("apn:"+b.partner),w.push("apv:"+b.partnerVersion));a=de(a,c,e,f,h,s,n);k.getAggregator().trigger("eligiblerender");return{primary:w,secondary:a}}())},de=function(a,b,c,e,f,h,u){var n=[],p=k.getAggregator().request("mPage");n.push("mn:"+l.mn);n.push("pt:"+function(){var b=u.stringifyPingTimes();a.viewState!==g.NA&&(b+=a.details);return b}());n.push(d(h.params()).toParams());c.on("mrcAudit")&&!t.isDomless()&&n.push("dvs:"+r.getDoc().visibilityState);f.iterate(function(a,b){var c=
!b.props||d.isUndef(b.props.type),e=!b.props||b.props.type===g.IMPRESSION_EVENT;(c||e)&&n.push(a+":"+b.output())});b.toString()&&n.push("e:"+b.toString());n.push(c.output());n.push("tt:"+l.mode);n.push("thd:"+d.stringifyTriState(p.supportsVisAPI()));n.push("et:"+(r.now()-l.birthdate));l.perf.mark("si");c.on("swapids")?n.push("oid:"+l.oid):n.push("uid:"+e.unq);n.push("v:19.8.76");n.push("sp:"+(l.isSplitMode?1:0));n.push("fwm:"+("true"===l.fwMonitoring?1:0));c.on("resolution")&&(n.push("wr:"+d(s.windowSize()).toArray().join(".")),
n.push("sr:"+d(s.screenSize()).toArray().join(".")));b=function(){var a;a=String(l.scriptUrl).toLowerCase();var b=a.indexOf("ias_xpc");-1<b?(a=a.substring(b+7+1),b=a.indexOf("&"),a=-1<b?a.substring(0,b):a):a="NotFound";return a||""}();"NotFound"!==b&&n.push("x_xpc:"+b);return n},be=function(a,b,c,e){var f,g=[],k=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(f=d(a).map(function(a,b){if(k(b))return b}),a=d(a).map(function(a,b){if(!k(b))return b}),d(f.concat(a)).each(function(a,
d){var f;f=d.val;var k=d.key,l;l=24+g.join("&").length+k.length+c;l=b-l;e&&l<f.length&&0<l&&(f=f.substr(0,l));if(f.length||""===d.val||""===d.type)f="adsafe_url="+f+"&adsafe_type="+k,k=g.join("&").length,f.length+k<=b&&g.push(f)}));return g},Nb=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=ee(a.navigator.plugins);var b=a.hash(),c=b.join(".");k.getAggregator().trigger("addOutputItem",{output:c},"pl",{type:g.IMPRESSION_EVENT});
b.length&&(a=a.decode(b),a=a.join("."),k.getAggregator().trigger("addOutputItem",{output:a},"pd",{type:g.DT_CODES.ADTALK}))}}},he=function(a,b){return{start:function(){try{var c=fe(),d=c.getMethodName(a),f=new S(b.getEnabledScriptUrl(a)),h=ge,l=r.getDoc();(new h(l.body||l.head||l.documentElement,f)).getWindow()[d]=c.getMethod(b)}catch(n){k.getAggregator().trigger("error",g.ERROR_CODES.FEATURE_SCRIPT)}}}},fe=function(){var a=function(a,c,d){a===l.asid&&(d.unshift(c),k.getAggregator().trigger.apply(null,
d))};return{getMethod:function(b){return function(c){var d={asid:l.asid,constant:g,features:b,context:t,dtBaseURL:l.dtBaseURL,spg:Pa};"function"===typeof c&&c(a,d)}},getMethodName:function(a){return"register_"+a}}},Vb=function(){return{start:function(a,b){d(a).each(function(a,d){b.getEnabledScriptUrl(d)&&he(d,b).start()})}}},ee=function(a){return{hash:function(){for(var b=0,c=a.length,e=[],f;b<c;b++)f=a[b].filename.replace(/\.plugin$/,""),f=P.hashCode(f),f=d.toBase(f,62).slice(-4),e.push(f);return e},
decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},ge=function(a,b){var c,d=/MSIE [1-9][^0-9]/g;(function(b){var g;c=s.createHiddenIframe();c.setAttribute("src","about:blank");(a||l.contextNode.parentNode).appendChild(c);g=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var k,n;k=(new Date).getTime();n=Math.floor(1E5*Math.random());b=b+"?t="+k+"&r="+
n}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");g.open().write(b);g.close()})(b);return{getWindow:function(){return c.contentWindow}}},Pa=function(a){var b=new va;(function(){b.listen(function(b){return b&&b.scaInfoOriginatorASID&&b.scaInfoOriginatorASID!==l.asid&&b.cache&&a.allExpectedKeysPresent(b.cache)},function(c,e){b.stop();r.setTimeout(function(){a.isDtCallAlreadySent()||(k.getAggregator().trigger("addThrottledProp",
g.DT_SLOT.FF,"spg",e.scaInfoOriginatorASID),d(e.cache).each(function(b,c){a.addToCache(b,c)}))},r.round(1E3*r.random()))})})();(function(){k.getAggregator().on("addToSpg",function(b,d){a.addToCache(d,b);a.isFull()&&(a.sendToOtherTags(),r.setInterval(function(){a.sendToOtherTags()},1E3))})})()};k("spg",["spgCache"],Pa,{tier:g.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("spg")}});k("spgCache",[],function(){var a=["asp","fsc","mvn","no","sd"],b={},c=!1,e=function(){return f(b)},f=
function(b){return d(b).keys().sort().toString()===a.toString()},h=function(){c||(c=!0,d(b).each(function(a,b){k.getAggregator().trigger("addOutputItem",b,a,{type:g.DT_CODES.SCA,minDt:!0,sendOnce:!0})}),k.getAggregator().trigger("sendMinDt",g.DT_CODES.SCA))};return{allExpectedKeysPresent:f,isDtCallAlreadySent:function(){return c},addToCache:function(a,c){c&&c.output&&!e()&&(b[a]=c);e()&&h()},isFull:e,sendToOtherTags:function(){(new ga).send({scaInfoOriginatorASID:l.asid,cache:b})}}},{});try{Qa()}catch(ie){__IntegralASDiagnosticCall("main",
ie,l)}};try{(function(){var l=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
