
function dv_rolloutManager(handlersDefsArray, baseHandler) {
    this.handle = function () {
        var errorsArr = [];

        var handler = chooseEvaluationHandler(handlersDefsArray);
        if (handler) {
            var errorObj = handleSpecificHandler(handler);
            if (errorObj === null) {
                return errorsArr;
            }
            else {
                var debugInfo = handler.onFailure();
                if (debugInfo) {
                    for (var key in debugInfo) {
                        if (debugInfo.hasOwnProperty(key)) {
                            if (debugInfo[key] !== undefined || debugInfo[key] !== null) {
                                errorObj[key] = encodeURIComponent(debugInfo[key]);
                            }
                        }
                    }
                }
                errorsArr.push(errorObj);
            }
        }

        var errorObjHandler = handleSpecificHandler(baseHandler);
        if (errorObjHandler) {
            errorObjHandler['dvp_isLostImp'] = 1;
            errorsArr.push(errorObjHandler);
        }
        return errorsArr;
    };

    function handleSpecificHandler(handler) {
        var request;
        var errorObj = null;

        try {
            request = handler.createRequest();
            if (request && !request.isSev1) {
                var url = request.url || request;
                if (url) {
                    if (!handler.sendRequest(url)) {
                        errorObj = createAndGetError('sendRequest failed.',
                            url,
                            handler.getVersion(),
                            handler.getVersionParamName(),
                            handler.dv_script);
                    }
                } else {
                    errorObj = createAndGetError('createRequest failed.',
                        url,
                        handler.getVersion(),
                        handler.getVersionParamName(),
                        handler.dv_script,
                        handler.dvScripts,
                        handler.dvStep,
                        handler.dvOther
                    );
                }
            }
        }
        catch (e) {
            errorObj = createAndGetError(e.name + ': ' + e.message, request ? (request.url || request) : null, handler.getVersion(), handler.getVersionParamName(), (handler ? handler.dv_script : null));
        }

        return errorObj;
    }

    function createAndGetError(error, url, ver, versionParamName, dv_script, dvScripts, dvStep, dvOther) {
        var errorObj = {};
        errorObj[versionParamName] = ver;
        errorObj['dvp_jsErrMsg'] = encodeURIComponent(error);
        if (dv_script && dv_script.parentElement && dv_script.parentElement.tagName && dv_script.parentElement.tagName == 'HEAD') {
            errorObj['dvp_isOnHead'] = '1';
        }
        if (url) {
            errorObj['dvp_jsErrUrl'] = url;
        }
        if (dvScripts) {
            var dvScriptsResult = '';
            for (var id in dvScripts) {
                if (dvScripts[id] && dvScripts[id].src) {
                    dvScriptsResult += encodeURIComponent(dvScripts[id].src) + ":" + dvScripts[id].isContain + ",";
                }
            }
            
            
            
        }
        return errorObj;
    }

    function chooseEvaluationHandler(handlersArray) {
        var config = window._dv_win.dv_config;
        var index = 0;
        var isEvaluationVersionChosen = false;
        if (config.handlerVersionSpecific) {
            for (var i = 0; i < handlersArray.length; i++) {
                if (handlersArray[i].handler.getVersion() == config.handlerVersionSpecific) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }
        else if (config.handlerVersionByTimeIntervalMinutes) {
            var date = config.handlerVersionByTimeInputDate || new Date();
            var hour = date.getUTCHours();
            var minutes = date.getUTCMinutes();
            index = Math.floor(((hour * 60) + minutes) / config.handlerVersionByTimeIntervalMinutes) % (handlersArray.length + 1);
            if (index != handlersArray.length) { 
                isEvaluationVersionChosen = true;
            }
        }
        else {
            var rand = config.handlerVersionRandom || (Math.random() * 100);
            for (var i = 0; i < handlersArray.length; i++) {
                if (rand >= handlersArray[i].minRate && rand < handlersArray[i].maxRate) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }

        if (isEvaluationVersionChosen == true && handlersArray[index].handler.isApplicable()) {
            return handlersArray[index].handler;
        }
        else {
            return null;
        }
    }
}

function doesBrowserSupportHTML5Push() {
    "use strict";
    return typeof window.parent.postMessage === 'function' && window.JSON;
}

function dv_GetParam(url, name, checkFromStart) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = (checkFromStart ? "(?:\\?|&|^)" : "[\\?&]") + name + "=([^&#]*)";
    var regex = new RegExp(regexS, 'i');
    var results = regex.exec(url);
    if (results == null)
        return null;
    else
        return results[1];
}

function dv_Contains(array, obj) {
    var i = array.length;
    while (i--) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}

function dv_GetDynamicParams(url, prefix) {
    try {
        prefix = (prefix != undefined && prefix != null) ? prefix : 'dvp';
        var regex = new RegExp("[\\?&](" + prefix + "_[^&]*=[^&#]*)", "gi");
        var dvParams = regex.exec(url);

        var results = [];
        while (dvParams != null) {
            results.push(dvParams[1]);
            dvParams = regex.exec(url);
        }
        return results;
    }
    catch (e) {
        return [];
    }
}

function dv_createIframe() {
    var iframe;
    if (document.createElement && (iframe = document.createElement('iframe'))) {
        iframe.name = iframe.id = 'iframe_' + Math.floor((Math.random() + "") * 1000000000000);
        iframe.width = 0;
        iframe.height = 0;
        iframe.style.display = 'none';
        iframe.src = 'about:blank';
    }

    return iframe;
}

function dv_GetRnd() {
    return ((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 16);
}

function dv_SendErrorImp(serverUrl, errorsArr) {

    for (var j = 0; j < errorsArr.length; j++) {
        var errorObj = errorsArr[j];
        var errorImp = dv_CreateAndGetErrorImp(serverUrl, errorObj);
        dv_sendImgImp(errorImp);
    }
}

function dv_CreateAndGetErrorImp(serverUrl, errorObj) {
    var errorQueryString = '';
    for (key in errorObj) {
        if (errorObj.hasOwnProperty(key)) {
            if (key.indexOf('dvp_jsErrUrl') == -1) {
                errorQueryString += '&' + key + '=' + errorObj[key];
            }
            else {
                var params = ['ctx', 'cmp', 'plc', 'sid'];
                for (var i = 0; i < params.length; i++) {
                    var pvalue = dv_GetParam(errorObj[key], params[i]);
                    if (pvalue) {
                        errorQueryString += '&dvp_js' + params[i] + '=' + pvalue;
                    }
                }
            }
        }
    }

    var windowProtocol = 'https:';
    var sslFlag = '&ssl=1';

    var errorImp = windowProtocol + '//' + serverUrl + sslFlag + errorQueryString;
    return errorImp;
}

function dv_sendImgImp(url) {
    (new Image()).src = url;
}

function dv_sendScriptRequest(url) {
    document.write('<scr' + 'ipt type="text/javascript" src="' + url + '"></scr' + 'ipt>');
}

function dv_getPropSafe(obj, propName) {
    try {
        if (obj)
            return obj[propName];
    } catch (e) {
    }
}

function dvBsType() {
    var that = this;
    var eventsForDispatch = {};
    this.t2tEventDataZombie = {};

    this.processT2TEvent = function (data, tag) {
        try {
            if (tag.ServerPublicDns) {
                data.timeStampCollection.push({"beginProcessT2TEvent": getCurrentTime()});
                data.timeStampCollection.push({'beginVisitCallback': tag.beginVisitCallbackTS});
                var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;

                if (!tag.uniquePageViewId) {
                    tag.uniquePageViewId = data.uniquePageViewId;
                }

                tpsServerUrl += '&dvp_upvid=' + tag.uniquePageViewId;
                tpsServerUrl += '&dvp_numFrames=' + data.totalIframeCount;
                tpsServerUrl += '&dvp_numt2t=' + data.totalT2TiframeCount;
                tpsServerUrl += '&dvp_frameScanDuration=' + data.scanAllFramesDuration;
                tpsServerUrl += '&dvp_scene=' + tag.adServingScenario;
                tpsServerUrl += '&dvp_ist2twin=' + (data.isWinner ? '1' : '0');
                tpsServerUrl += '&dvp_numTags=' + Object.keys($dvbs.tags).length;
                tpsServerUrl += '&dvp_isInSample=' + data.isInSample;
                tpsServerUrl += (data.wasZombie) ? '&dvp_wasZombie=1' : '&dvp_wasZombie=0';
                tpsServerUrl += '&dvp_ts_t2tCreatedOn=' + data.creationTime;
                if (data.timeStampCollection) {
                    if (window._dv_win.t2tTimestampData) {
                        for (var tsI = 0; tsI < window._dv_win.t2tTimestampData.length; tsI++) {
                            data.timeStampCollection.push(window._dv_win.t2tTimestampData[tsI]);
                        }
                    }

                    for (var i = 0; i < data.timeStampCollection.length; i++) {
                        var item = data.timeStampCollection[i];
                        for (var propName in item) {
                            if (item.hasOwnProperty(propName)) {
                                tpsServerUrl += '&dvp_ts_' + propName + '=' + item[propName];
                            }
                        }
                    }
                }
                $dvbs.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
            }
        } catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tProcess=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (ex) {
            }
        }
    };

    this.processTagToTagCollision = function (collision, tag) {
        var i;
        var tpsServerUrl = tag.dv_protocol + '//' + tag.ServerPublicDns + '/event.gif?impid=' + tag.uid;
        var additions = [
            '&dvp_collisionReasons=' + collision.reasonBitFlag,
            '&dvp_ts_reporterDvTagCreated=' + collision.thisTag.dvTagCreatedTS,
            '&dvp_ts_reporterVisitJSMessagePosted=' + collision.thisTag.visitJSPostMessageTS,
            '&dvp_ts_reporterReceivedByT2T=' + collision.thisTag.receivedByT2TTS,
            '&dvp_ts_collisionPostedFromT2T=' + collision.postedFromT2TTS,
            '&dvp_ts_collisionReceivedByCommon=' + collision.commonRecievedTS,
            '&dvp_collisionTypeId=' + collision.allReasonsForTagBitFlag
        ];
        tpsServerUrl += additions.join("");

        for (i = 0; i < collision.reasons.length; i++) {
            var reason = collision.reasons[i];
            tpsServerUrl += '&dvp_' + reason + "MS=" + collision[reason + "MS"];
        }

        if (tag.uniquePageViewId) {
            tpsServerUrl += '&dvp_upvid=' + tag.uniquePageViewId;
        }
        $dvbs.domUtilities.addImage(tpsServerUrl, tag.tagElement.parentElement);
    };

    var messageEventListener = function (event) {
        try {
            var timeCalled = getCurrentTime();
            var data = window.JSON.parse(event.data);
            if (!data.action) {
                data = window.JSON.parse(data);
            }
            if (data.timeStampCollection) {
                data.timeStampCollection.push({messageEventListenerCalled: timeCalled});
            }
            var myUID;
            var visitJSHasBeenCalledForThisTag = false;
            if ($dvbs.tags) {
                for (var uid in $dvbs.tags) {
                    if ($dvbs.tags.hasOwnProperty(uid) && $dvbs.tags[uid] && $dvbs.tags[uid].t2tIframeId === data.iFrameId) {
                        myUID = uid;
                        visitJSHasBeenCalledForThisTag = true;
                        break;
                    }
                }
            }

            switch (data.action) {
                case 'uniquePageViewIdDetermination' :
                    if (visitJSHasBeenCalledForThisTag) {
                        $dvbs.processT2TEvent(data, $dvbs.tags[myUID]);
                        $dvbs.t2tEventDataZombie[data.iFrameId] = undefined;
                    }
                    else {
                        data.wasZombie = 1;
                        $dvbs.t2tEventDataZombie[data.iFrameId] = data;
                    }
                    break;
                case 'maColl':
                    var tag = $dvbs.tags[myUID];
                    
                    tag.AdCollisionMessageRecieved = true;
                    if (!tag.uniquePageViewId) {
                        tag.uniquePageViewId = data.uniquePageViewId;
                    }
                    data.collision.commonRecievedTS = timeCalled;
                    $dvbs.processTagToTagCollision(data.collision, tag);
                    break;
            }

        } catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.tpsErrAddress + '/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&jsver=0&dvp_ist2tListener=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (ex) {
            }
        }
    };

    if (window.addEventListener)
        addEventListener("message", messageEventListener, false);
    else
        attachEvent("onmessage", messageEventListener);

    this.pubSub = new function () {

        var subscribers = [];

        this.subscribe = function (eventName, uid, actionName, func) {
            if (!subscribers[eventName + uid])
                subscribers[eventName + uid] = [];
            subscribers[eventName + uid].push({Func: func, ActionName: actionName});
        };

        this.publish = function (eventName, uid) {
            var actionsResults = [];
            if (eventName && uid && subscribers[eventName + uid] instanceof Array)
                for (var i = 0; i < subscribers[eventName + uid].length; i++) {
                    var funcObject = subscribers[eventName + uid][i];
                    if (funcObject && funcObject.Func && typeof funcObject.Func == "function" && funcObject.ActionName) {
                        var isSucceeded = runSafely(function () {
                            return funcObject.Func(uid);
                        });
                        actionsResults.push(encodeURIComponent(funcObject.ActionName) + '=' + (isSucceeded ? '1' : '0'));
                    }
                }
            return actionsResults.join('&');
        };
    };

    this.domUtilities = new function () {

        this.addImage = function (url, parentElement, trackingPixelCompleteCallbackName) {
            var image = parentElement.ownerDocument.createElement("img");
            image.width = 0;
            image.height = 0;
            image.style.display = 'none';
            if (trackingPixelCompleteCallbackName && typeof window[trackingPixelCompleteCallbackName] === "function") {
                image.addEventListener("load", window[trackingPixelCompleteCallbackName]);
            }
            image.src = appendCacheBuster(url);
            parentElement.insertBefore(image, parentElement.firstChild);
        };

        this.addScriptResource = function (url, parentElement) {
            if (parentElement) {
                var scriptElem = parentElement.ownerDocument.createElement("script");
                scriptElem.type = 'text/javascript';
                scriptElem.src = appendCacheBuster(url);
                parentElement.insertBefore(scriptElem, parentElement.firstChild);
            }
            else {
                addScriptResourceFallBack(url);
            }
        };

        function addScriptResourceFallBack(url) {
            var scriptElem = document.createElement('script');
            scriptElem.type = "text/javascript";
            scriptElem.src = appendCacheBuster(url);
            var firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(scriptElem, firstScript);
        }

        this.addScriptCode = function (srcCode, parentElement) {
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.innerHTML = srcCode;
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addHtml = function (srcHtml, parentElement) {
            var divElem = parentElement.ownerDocument.createElement("div");
            divElem.style = "display: inline";
            divElem.innerHTML = srcHtml;
            parentElement.insertBefore(divElem, parentElement.firstChild);
        };
    };

    this.resolveMacros = function (str, tag) {
        var viewabilityData = tag.getViewabilityData();
        var viewabilityBuckets = viewabilityData && viewabilityData.buckets ? viewabilityData.buckets : {};
        var upperCaseObj = objectsToUpperCase(tag, viewabilityData, viewabilityBuckets);
        var newStr = str.replace('[DV_PROTOCOL]', upperCaseObj.DV_PROTOCOL);
        newStr = newStr.replace('[PROTOCOL]', upperCaseObj.PROTOCOL);
        newStr = newStr.replace(/\[(.*?)\]/g, function (match, p1) {
            var value = upperCaseObj[p1];
            if (value === undefined || value === null)
                value = '[' + p1 + ']';
            return encodeURIComponent(value);
        });
        return newStr;
    };

    this.settings = new function () {
    };

    this.tagsType = function () {
    };

    this.tagsPrototype = function () {
        this.add = function (tagKey, obj) {
            if (!that.tags[tagKey])
                that.tags[tagKey] = new that.tag();
            for (var key in obj)
                that.tags[tagKey][key] = obj[key];
        };
    };

    this.tagsType.prototype = new this.tagsPrototype();
    this.tagsType.prototype.constructor = this.tags;
    this.tags = new this.tagsType();

    this.tag = function () {
    };
    this.tagPrototype = function () {
        this.set = function (obj) {
            for (var key in obj)
                this[key] = obj[key];
        };

        this.getViewabilityData = function () {
        };
    };

    this.tag.prototype = new this.tagPrototype();
    this.tag.prototype.constructor = this.tag;

    this.getTagObjectByService = function (serviceName) {

        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] === 'object'
                && this.tags[impressionId].services
                && this.tags[impressionId].services[serviceName]
                && !this.tags[impressionId].services[serviceName].isProcessed) {
                this.tags[impressionId].services[serviceName].isProcessed = true;
                return this.tags[impressionId];
            }
        }


        return null;
    };

    this.addService = function (impressionId, serviceName, paramsObject) {

        if (!impressionId || !serviceName)
            return;

        if (!this.tags[impressionId])
            return;
        else {
            if (!this.tags[impressionId].services)
                this.tags[impressionId].services = {};

            this.tags[impressionId].services[serviceName] = {
                params: paramsObject,
                isProcessed: false
            };
        }
    };

    this.Enums = {
        BrowserId: {Others: 0, IE: 1, Firefox: 2, Chrome: 3, Opera: 4, Safari: 5},
        TrafficScenario: {OnPage: 1, SameDomain: 2, CrossDomain: 128}
    };

    this.CommonData = {};

    var runSafely = function (action) {
        try {
            var ret = action();
            return ret !== undefined ? ret : true;
        } catch (e) {
            return false;
        }
    };

    var objectsToUpperCase = function () {
        var upperCaseObj = {};
        for (var i = 0; i < arguments.length; i++) {
            var obj = arguments[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    upperCaseObj[key.toUpperCase()] = obj[key];
                }
            }
        }
        return upperCaseObj;
    };

    var appendCacheBuster = function (url) {
        if (url !== undefined && url !== null && url.match("^http") == "http") {
            if (url.indexOf('?') !== -1) {
                if (url.slice(-1) == '&')
                    url += 'cbust=' + dv_GetRnd();
                else
                    url += '&cbust=' + dv_GetRnd();
            }
            else
                url += '?cbust=' + dv_GetRnd();
        }
        return url;
    };

    
    var messagesClass = function () {
        var waitingMessages = [];

        this.registerMsg = function(dvFrame, data) {
            if (!waitingMessages[dvFrame.$frmId]) {
                waitingMessages[dvFrame.$frmId] = [];
            }

            waitingMessages[dvFrame.$frmId].push(data);

            if (dvFrame.$uid) {
                sendWaitingEventsForFrame(dvFrame, dvFrame.$uid);
            }
        };

        this.startSendingEvents = function(dvFrame, impID) {
            sendWaitingEventsForFrame(dvFrame, impID);
            
        };

        function sendWaitingEventsForFrame(dvFrame, impID) {
            if (waitingMessages[dvFrame.$frmId]) {
                var eventObject = {};
                for (var i = 0; i < waitingMessages[dvFrame.$frmId].length; i++) {
                    var obj = waitingMessages[dvFrame.$frmId].pop();
                    for (var key in obj) {
                        if (typeof obj[key] !== 'function' && obj.hasOwnProperty(key)) {
                            eventObject[key] = obj[key];
                        }
                    }
                }
                that.registerEventCall(impID, eventObject);
            }
        }

        function startMessageManager() {
            for (var frm in waitingMessages) {
                if (frm && frm.$uid) {
                    sendWaitingEventsForFrame(frm, frm.$uid);
                }
            }
            setTimeout(startMessageManager, 10);
        }
    };
    this.messages = new messagesClass();

    this.dispatchRegisteredEventsFromAllTags = function () {
        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] !== 'function' && typeof this.tags[impressionId] !== 'undefined')
                dispatchEventCalls(impressionId, this);
        }
    };

    var dispatchEventCalls = function (impressionId, dvObj) {
        var tag = dvObj.tags[impressionId];
        var eventObj = eventsForDispatch[impressionId];
        if (typeof eventObj !== 'undefined' && eventObj != null) {
            var url = tag.protocol + '//' + tag.ServerPublicDns + "/bsevent.gif?impid=" + impressionId + '&' + createQueryStringParams(eventObj);
            dvObj.domUtilities.addImage(url, tag.tagElement.parentElement);
            eventsForDispatch[impressionId] = null;
        }
    };

    this.registerEventCall = function (impressionId, eventObject, timeoutMs) {
        addEventCallForDispatch(impressionId, eventObject);

        if (typeof timeoutMs === 'undefined' || timeoutMs == 0 || isNaN(timeoutMs))
            dispatchEventCallsNow(this, impressionId, eventObject);
        else {
            if (timeoutMs > 2000)
                timeoutMs = 2000;

            var dvObj = this;
            setTimeout(function () {
                dispatchEventCalls(impressionId, dvObj);
            }, timeoutMs);
        }
    };

    var dispatchEventCallsNow = function (dvObj, impressionId, eventObject) {
        addEventCallForDispatch(impressionId, eventObject);
        dispatchEventCalls(impressionId, dvObj);
    };

    var addEventCallForDispatch = function (impressionId, eventObject) {
        for (var key in eventObject) {
            if (typeof eventObject[key] !== 'function' && eventObject.hasOwnProperty(key)) {
                if (!eventsForDispatch[impressionId])
                    eventsForDispatch[impressionId] = {};
                eventsForDispatch[impressionId][key] = eventObject[key];
            }
        }
    };

    if (window.addEventListener) {
        window.addEventListener('unload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
        window.addEventListener('beforeunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
        window.attachEvent('onbeforeunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
    }
    else {
        window.document.body.onunload = function () {
            that.dispatchRegisteredEventsFromAllTags();
        };
        window.document.body.onbeforeunload = function () {
            that.dispatchRegisteredEventsFromAllTags();
        };
    }

    var createQueryStringParams = function (values) {
        var params = '';
        for (var key in values) {
            if (typeof values[key] !== 'function') {
                var value = encodeURIComponent(values[key]);
                if (params === '')
                    params += key + '=' + value;
                else
                    params += '&' + key + '=' + value;
            }
        }

        return params;
    };
}

function dv_baseHandler(){function z(b){try{var d=new URL(b);return!d.pathname||""==d.pathname||"/"==d.pathname}catch(f){}}function E(b){var d=window._dv_win,f=0;try{for(;10>f;){if(d[b]&&"object"===typeof d[b])return!0;if(d==d.parent)break;f++;d=d.parent}}catch(e){}return!1}function F(){var b="http:";"http:"!=window._dv_win.location.protocol&&(b="https:");return b}function A(b,d){var f=document.createElement("iframe");f.name=window._dv_win.dv_config.emptyIframeID||"iframe_"+w();f.width=0;f.height=
0;f.id=d;f.style.display="none";f.src=b;return f}function x(b,d,f){f=f||150;var e=window._dv_win||window;if(e.document&&e.document.body)return d&&d.parentNode?d.parentNode.insertBefore(b,d):e.document.body.insertBefore(b,e.document.body.firstChild),!0;if(0<f)setTimeout(function(){x(b,d,--f)},20);else return!1}function G(b){var d=window._dv_win.dv_config=window._dv_win.dv_config||{};d.cdnAddress=d.cdnAddress||"cdn.doubleverify.com";return'<html><head><script type="text/javascript">('+function(){try{window.$dv=
window.$dvbs||parent.$dvbs,window.$dv.dvObjType="dvbs"}catch(f){}}.toString()+')();\x3c/script></head><body><script type="text/javascript">('+(b||"function() {}")+')("'+d.cdnAddress+'");\x3c/script><script type="text/javascript">setTimeout(function() {document.close();}, 0);\x3c/script></body></html>'}function B(b){var d=0,f;for(f in b)b.hasOwnProperty(f)&&++d;return d}function H(b,d){a:{var f={};try{if(b&&b.performance&&b.performance.getEntries){var e=b.performance.getEntries();for(b=0;b<e.length;b++){var c=
e[b],p=c.name.match(/.*\/(.+?)\./);if(p&&p[1]){var k=p[1].replace(/\d+$/,""),l=d[k];if(l){for(var g=0;g<l.stats.length;g++){var r=l.stats[g];f[l.prefix+r.prefix]=Math.round(c[r.name])}delete d[k];if(!B(d))break}}}}var h=f;break a}catch(u){}h=void 0}if(h&&B(h))return h}function I(b,d){var f,e=window._dv_win.document.visibilityState;window[b.tagObjectCallbackName]=function(c){var p=window._dv_win.$dvbs;if(p){var k=d?"https:":F();f=c.ImpressionID;p.tags.add(c.ImpressionID,b);p.tags[c.ImpressionID].set({tagElement:b.script,
impressionId:c.ImpressionID,dv_protocol:b.protocol,protocol:k,uid:b.uid,serverPublicDns:c.ServerPublicDns,ServerPublicDns:c.ServerPublicDns});b.script&&b.script.dvFrmWin&&(b.script.dvFrmWin.$uid=c.ImpressionID,p.messages&&p.messages.startSendingEvents&&p.messages.startSendingEvents(b.script.dvFrmWin,c.ImpressionID));(function(){function b(){var f=window._dv_win.document.visibilityState;"prerender"===e&&"prerender"!==f&&"unloaded"!==f&&(e=f,window._dv_win.$dvbs.registerEventCall(c.ImpressionID,{prndr:0}),
window._dv_win.document.removeEventListener(d,b))}if("prerender"===e)if("prerender"!==window._dv_win.document.visibilityState&&"unloaded"!==visibilityStateLocal)window._dv_win.$dvbs.registerEventCall(c.ImpressionID,{prndr:0});else{var d;"undefined"!==typeof window._dv_win.document.hidden?d="visibilitychange":"undefined"!==typeof window._dv_win.document.mozHidden?d="mozvisibilitychange":"undefined"!==typeof window._dv_win.document.msHidden?d="msvisibilitychange":"undefined"!==typeof window._dv_win.document.webkitHidden&&
(d="webkitvisibilitychange");window._dv_win.document.addEventListener(d,b,!1)}})()}if("1"!=b.foie)try{var l=H(window,{verify:{prefix:"vf",stats:[{name:"duration",prefix:"dur"}]}});l&&window._dv_win.$dvbs.registerEventCall(c.ImpressionID,l)}catch(g){}};window[b.callbackName]=function(c){var d=window._dv_win.$dvbs&&"object"==typeof window._dv_win.$dvbs.tags[f]?window._dv_win.$dvbs.tags[f]:b;var e=window._dv_win.dv_config.bs_renderingMethod||function(c){document.write(c)};switch(c.ResultID){case 1:d.tagPassback?
e(d.tagPassback):c.Passback?e(decodeURIComponent(c.Passback)):c.AdWidth&&c.AdHeight&&e(decodeURIComponent("%3Cdiv%20style%3D%22display%3A%20flex%3B%20align-items%3A%20center%3B%20justify-content%3A%20center%3B%20width%3A%20"+c.AdWidth+"px%3B%20height%3A%20"+c.AdHeight+"px%3B%20outline-offset%3A%20-1px%3B%20background%3A%20url('data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAAGWvHq%2BAAAABmJLR0QA%2FwD%2FAP%2BgvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQBECEbFuFN7gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAFBklEQVRo3uUby3arOEzxAbxIyKLt%2F%2F9gIQtIF4aFZ5ERVxhJyIbcnjmjTZLast4vQ%2BG762OMMX53fQzTFIfxGenfKvgXvj4%2FoOsfy3eECgBgmmcYhnFZ6PoHeO%2F%2FbBiGEQAAxufPghlC%2BLOBYqa%2FHezAJcYYOUz87QAA7vd2g4lMAsrLfQJ%2BQeUM43PZsMJEwN8L58gMfgIAAMVKv6syX4bxGVF9qTiuvV2Byouf7e0Kl%2B%2Buj6kJU8aktV07aFClTkThfm9hGMbNGu53dCNd%2FPr8gBCm5TsnAivz%2BPwBqkHvPaDiVvpAW6Nh0FBhmpagSdfQV0Q7oVySPrz3LyO3t%2BvCKrJIHTtdG58%2FvLycZk%2Bzr1uFkgFWuYHKZHHNEMIr4lMb0pO5v7e3qyyj983KATYydv1jswFZneZ5wzaKVaEMVnNgjsw2B8pcbMdLmKbY1PVG5dTl0rVpnsGlSDReOcfo%2Bgc0df3SagrTPC8m4aDrH1ClaR4AgHKRmgN%2FL9HBbeI4wdKVitXUtYpLGXPSgpUg1lBaPzWCWW6wJ4lkB9aFUL1pQkXOvW9WBDltULNM8wwhTEtIcQn88t31kdpEU7FmOwsemqiiqtPsQvufXMCmCulUSKy9XaG9XYGrLhbv1iSlWU0NGdyQqlPKBHQfh0vxVkQ1abSQybX3oQ7nUPWUpEQ1oaokLVAnSfG4cy8xxpjrEFyVtuCJNt3rETDgu%2F6xiT9zRqKSci0DxzHdZ5E0zXabjGTtwSxr9FyqjazSJkmTi%2Bckb01BS5HaGnems%2BZWzdb62qQTfQdwDDl2Wj0RuKnYpX1sDrJljcvHTqow4%2FNn5SBNXYuzPD0Y8agDsRlpr3NIg1vyYGnSS%2BPUURVIcRhC2A0ZyYPxTKqNyuo8IYRlpMSGLYRJDRdOYyEEqEpDIIfY5qYhhLBrL0s%2BLS7imqq995tijYVdCxlx0EMnaW9XlvD93m4aZ0s4cZ3gqspYOjppRKcMcXipGZyU7Ju63iXIhVOKx53trCWqtMpwZzor8n%2BqynBnnlJlNGa5M51VSmlksBSDlOHlKk%2FzUq0KcVVEYgidytz3coS19lPrFh1y2fUP1Xu1HKsRxHWakao9hLNglZHeESaal3vvocKx3zKP7BXnLJtaxgNkjKY1Wp1y7inYUVG7Akg79vSeKefKwHJ1kEtTikBxJrYkmpIBr1TgPdgbrZ1WkPbuz84UEiNZG1ZLhdydE0sqeqlytGG2pEt4%2B0Ccc9H8zs4kS1Br0542F0fqR0lesOCwyehoIioZq86gqcWq6XbZwrTGqMSAhmOhKWVpjp74PObIsLt3R3g0g1oETs8R32woFbLEHUuEs9CiZa6SslZJmpcuf%2F4GcNc0tDf9lYcxvwGVrI3mkDVeY0NjbumOui9XCtkYlZJIbjt3pF8tzQ0czZTvTXnJSdlHSstRXAlPUpQ4vRy1TK4nnNEwaDTd2ZNE6fQSQiieevBiprjXLamjpco5Mv1YSuH%2Fpry4o%2BMPN70cgZI4tYyG7h3J4evzI1tJ%2BIynBLTHMdnlpXQKsTQCkoAaPakZEctL%2BpbK0Y7FMkloCnrXHMsKileMpS0ZR3zvveez2kDJG6szRiSuJqaulfbOaQJ5KfcYH5wnLK82v2uMCmHaPDz%2BDVj%2BfSNNBGdZmIu9v6EIKWbVZHTmVYrl9clSRVsS0urOKDdlW1J%2B6SubFoH3SiF13X8A3uobUgsAG3MAAAAASUVORK5CYII%3D')%20repeat%3B%20outline%3A%20solid%201px%20%23969696%3B%22%3E%3C%2Fdiv%3E"));
break;case 2:case 3:d.tagAdtag&&e(d.tagAdtag);break;case 4:c.AdWidth&&c.AdHeight&&e(decodeURIComponent("%3Cstyle%3E%0A.dvbs_container%20%7B%0A%09border%3A%201px%20solid%20%233b599e%3B%0A%09overflow%3A%20hidden%3B%0A%09filter%3A%20progid%3ADXImageTransform.Microsoft.gradient(startColorstr%3D%27%23315d8c%27%2C%20endColorstr%3D%27%2384aace%27)%3B%0A%7D%0A%3C%2Fstyle%3E%0A%3Cdiv%20class%3D%22dvbs_container%22%20style%3D%22width%3A%20"+c.AdWidth+"px%3B%20height%3A%20"+c.AdHeight+"px%3B%22%3E%09%0A%3C%2Fdiv%3E"))}}}
function J(b){var d=null,f=null,e=function(c){var d=dv_GetParam(c,"cmp");c=dv_GetParam(c,"ctx");return"919838"==c&&"7951767"==d||"919839"==c&&"7939985"==d||"971108"==c&&"7900229"==d||"971108"==c&&"7951940"==d?"</scr'+'ipt>":/<\/scr\+ipt>/g}(b.src);"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var c=function(b){!(b=b.previousSibling)||"#text"!=b.nodeName||null!=b.nodeValue&&void 0!=b.nodeValue&&0!=b.nodeValue.trim().length||(b=b.previousSibling);
if(b&&"SCRIPT"==b.tagName&&b.getAttribute("type")&&("text/adtag"==b.getAttribute("type").toLowerCase()||"text/passback"==b.getAttribute("type").toLowerCase())&&""!=b.innerHTML.trim()){if("text/adtag"==b.getAttribute("type").toLowerCase())return d=b.innerHTML.replace(e,"\x3c/script>"),{isBadImp:!1,hasPassback:!1,tagAdTag:d,tagPassback:f};if(null!=f)return{isBadImp:!0,hasPassback:!1,tagAdTag:d,tagPassback:f};f=b.innerHTML.replace(e,"\x3c/script>");b=c(b);b.hasPassback=!0;return b}return{isBadImp:!0,
hasPassback:!1,tagAdTag:d,tagPassback:f}};return c(b)}function C(b,d,f,e,c,p,k,l,g,r,h,u){void 0==d.dvregion&&(d.dvregion=0);try{e.depth=K(e);var q=L(e);var m="&aUrl="+encodeURIComponent(q.url);var n="&aUrlD="+q.depth;var v=e.depth+c;p&&e.depth--}catch(M){n=m=v=e.depth=""}void 0!=d.aUrl&&(m="&aUrl="+d.aUrl);a:{try{if("object"==typeof window.$ovv||"object"==typeof window.parent.$ovv){var t=1;break a}}catch(M){}t=0}p=function(){function b(c){d++;var e=c.parent==c;return c.mraid||e?c.mraid:20>=d&&b(c.parent)}
var c=window._dv_win||window,d=0;try{return b(c)}catch(V){}}();c=d.script.src;t="&ctx="+(dv_GetParam(c,"ctx")||"")+"&cmp="+(dv_GetParam(c,"cmp")||"")+"&plc="+(dv_GetParam(c,"plc")||"")+"&sid="+(dv_GetParam(c,"sid")||"")+"&advid="+(dv_GetParam(c,"advid")||"")+"&adsrv="+(dv_GetParam(c,"adsrv")||"")+"&unit="+(dv_GetParam(c,"unit")||"")+"&isdvvid="+(dv_GetParam(c,"isdvvid")||"")+"&uid="+d.uid+"&tagtype="+(dv_GetParam(c,"tagtype")||"")+"&adID="+(dv_GetParam(c,"adID")||"")+"&app="+(dv_GetParam(c,"app")||
"")+"&sup="+(dv_GetParam(c,"sup")||"")+"&isovv="+t+"&gmnpo="+(dv_GetParam(c,"gmnpo")||"")+"&crt="+(dv_GetParam(c,"crt")||"");"1"==dv_GetParam(c,"foie")&&(t+="&foie=1");p&&(t+="&ismraid=1");(p=dv_GetParam(c,"xff"))&&(t+="&xff="+p);h&&(t+="&dvp_sfr=1");u&&(t+="&dvp_sfe=1");(h=dv_GetParam(c,"useragent"))&&(t+="&useragent="+h);t+="&dup="+dv_GetParam(c,"dup");void 0!=window._dv_win.$dvbs.CommonData.BrowserId&&void 0!=window._dv_win.$dvbs.CommonData.BrowserVersion&&void 0!=window._dv_win.$dvbs.CommonData.BrowserIdFromUserAgent?
h={ID:window._dv_win.$dvbs.CommonData.BrowserId,version:window._dv_win.$dvbs.CommonData.BrowserVersion,ID_UA:window._dv_win.$dvbs.CommonData.BrowserIdFromUserAgent}:(h=N(h?decodeURIComponent(h):navigator.userAgent),window._dv_win.$dvbs.CommonData.BrowserId=h.ID,window._dv_win.$dvbs.CommonData.BrowserVersion=h.version,window._dv_win.$dvbs.CommonData.BrowserIdFromUserAgent=h.ID_UA);t+="&brid="+h.ID+"&brver="+h.version+"&bridua="+h.ID_UA;(h=dv_GetParam(c,"turl"))&&(t+="&turl="+h);(h=dv_GetParam(c,"tagformat"))&&
(t+="&tagformat="+h);t+=O();r=r?"&dvf=0":"";h=E("maple")?"&dvf=1":"";d=(window._dv_win.dv_config.verifyJSURL||d.protocol+"//"+(window._dv_win.dv_config.bsAddress||"rtb"+d.dvregion+".doubleverify.com")+"/verify.js")+"?jsCallback="+d.callbackName+"&jsTagObjCallback="+d.tagObjectCallbackName+"&num=6"+t+"&srcurlD="+e.depth+"&ssl="+d.ssl+r+h+"&refD="+v+d.tagIntegrityFlag+d.tagHasPassbackFlag+"&htmlmsging="+(k?"1":"0");(e=dv_GetDynamicParams(c,"dvp").join("&"))&&(d+="&"+e);(e=dv_GetDynamicParams(c,"dvpx").join("&"))&&
(d+="&"+e);if(!1===l||g)d=d+("&dvp_isBodyExistOnLoad="+(l?"1":"0"))+("&dvp_isOnHead="+(g?"1":"0"));f="srcurl="+encodeURIComponent(f);(l=P())&&(f+="&ancChain="+encodeURIComponent(l));l=4E3;/MSIE (\d+\.\d+);/.test(navigator.userAgent)&&7>=new Number(RegExp.$1)&&(l=2E3);if(g=dv_GetParam(c,"referrer"))g="&referrer="+g,d.length+g.length<=l&&(d+=g);(g=dv_GetParam(c,"prr"))&&(d+="&prr="+g);(g=dv_GetParam(c,"iframe"))&&(d+="&iframe="+g);(g=dv_GetParam(c,"gdpr"))&&(d+="&gdpr="+g);(g=dv_GetParam(c,"gdpr_consent"))&&
(d+="&gdpr_consent="+g);m.length+n.length+d.length<=l&&(d+=n,f+=m);(m=Q())&&(d+="&m1="+m);(m=R())&&0<m.f&&(d+="&bsig="+m.f,d+="&usig="+m.s);navigator&&navigator.hardwareConcurrency&&(d+="&noc="+navigator.hardwareConcurrency);d+=S();m=T();d+="&vavbkt="+m.vdcd;d+="&lvvn="+m.vdcv;""!=m.err&&(d+="&dvp_idcerr="+encodeURIComponent(m.err));"prerender"===window._dv_win.document.visibilityState&&(d+="&prndr=1");(m=dv_GetParam(c,"wrapperurl"))&&1E3>=m.length&&d.length+m.length<=l&&(d+="&wrapperurl="+m);d+=
"&"+b.getVersionParamName()+"="+b.getVersion();b="&eparams="+encodeURIComponent(y(f));d=d.length+b.length<=l?d+b:d+"&dvf=3";return{isSev1:!1,url:d}}function O(){var b="";try{var d=window._dv_win.parent;b+="&chro="+(void 0===d.chrome?"0":"1");b+="&hist="+(d.history?d.history.length:"");b+="&winh="+d.innerHeight;b+="&winw="+d.innerWidth;b+="&wouh="+d.outerHeight;b+="&wouw="+d.outerWidth;d.screen&&(b+="&scah="+d.screen.availHeight,b+="&scaw="+d.screen.availWidth)}catch(f){}return b}function T(){var b=
[],d=function(c){e(c,null!=c.AZSD,9);e(c,c.location.hostname!=c.encodeURIComponent(c.location.hostname),10);e(c,null!=c.cascadeWindowInfo,11);e(c,null!=c._rvz,32);e(c,null!=c.FO_DOMAIN,34);e(c,null!=c.va_subid,36);e(c,c._GPL&&c._GPL.baseCDN,40);e(c,f(c,"__twb__")&&f(c,"__twb_cb_"),43);e(c,null!=c.landingUrl&&null!=c.seList&&null!=c.parkingPPCTitleElements&&null!=c.allocation,45);e(c,f(c,"_rvz",function(c){return null!=c.publisher_subid}),46);e(c,null!=c.cacildsFunc&&null!=c.n_storesFromFs,47);e(c,
c._pcg&&c._pcg.GN_UniqueId,54);e(c,f(c,"__ad_rns_")&&f(c,"_$_"),64);e(c,null!=c.APP_LABEL_NAME_FULL_UC,71);e(c,null!=c._priam_adblock,81);e(c,c.supp_ads_host&&c.supp_ads_host_overridden,82);e(c,c.uti_xdmsg_manager&&c.uti_xdmsg_manager.cb,87);e(c,c.LogBundleData&&c.addIframe,91);e(c,c.xAdsXMLHelperId||c.xYKAffSubIdTag,95);e(c,c.__pmetag&&c.__pmetag.uid,98);e(c,c.CustomWLAdServer&&/(n\d{1,4}adserv)|(1ads|cccpmo|epommarket|epmads|adshost1)/.test(c.supp_ads_host_overridden),100)},f=function(c,b,d){for(var e in c)if(-1<
e.indexOf(b)&&(!d||d(c[e])))return!0;return!1},e=function(c,d,e){d&&-1==b.indexOf(e)&&b.push((c==window.top?-1:1)*e)};try{return function(){for(var c=window,b=0;10>b&&(d(c),c!=window.top);b++)try{c.parent.document&&(c=c.parent)}catch(k){break}}(),{vdcv:28,vdcd:b.join(","),err:void 0}}catch(c){return{vdcv:28,vdcd:"-999",err:c.message||"unknown"}}}function K(b){for(var d=0;10>d&&b!=window._dv_win.top;)d++,b=b.parent;return d}function L(b){try{if(1>=b.depth)return{url:"",depth:""};var d=[];d.push({win:window._dv_win.top,
depth:0});for(var f,e=1,c=0;0<e&&100>c;){try{if(c++,f=d.shift(),e--,0<f.win.location.toString().length&&f.win!=b)return 0==f.win.document.referrer.length||0==f.depth?{url:f.win.location,depth:f.depth}:{url:f.win.document.referrer,depth:f.depth-1}}catch(l){}var p=f.win.frames.length;for(var k=0;k<p;k++)d.push({win:f.win.frames[k],depth:f.depth+1}),e++}return{url:"",depth:""}}catch(l){return{url:"",depth:""}}}function P(){var b=window._dv_win[y("=@42E:@?")][y("2?46DE@C~C:8:?D")];if(b&&0<b.length){var d=
[];d[0]=window._dv_win.location.protocol+"//"+window._dv_win.location.hostname;for(var f=0;f<b.length;f++)d[f+1]=b[f];return d.reverse().join(",")}return null}function y(b){new String;var d=new String,f;for(f=0;f<b.length;f++){var e=b.charAt(f);var c="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(e);0<=c&&(e="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((c+47)%94));d+=e}return d}
function w(){return Math.floor(1E12*(Math.random()+""))}function N(b){for(var d=[{id:4,brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},{id:1,brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7|Edge/|Edg/",verRegex:"(MSIE |rv:| Edge/|Edg/)"},{id:2,brRegex:"Firefox",verRegex:"Firefox/"},{id:0,brRegex:"Mozilla.*Android.*AppleWebKit(?!.*Chrome.*)|Linux.*Android.*AppleWebKit.* Version/.*Chrome",verRegex:null},{id:0,brRegex:"AOL/.*AOLBuild/|AOLBuild/.*AOL/|Puffin|Maxthon|Valve|Silk|PLAYSTATION|PlayStation|Nintendo|wOSBrowser",
verRegex:null},{id:3,brRegex:"Chrome",verRegex:"Chrome/"},{id:5,brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}],f=0,e="",c=0;c<d.length;c++)if(null!=b.match(new RegExp(d[c].brRegex))){f=d[c].id;if(null==d[c].verRegex)break;b=b.match(new RegExp(d[c].verRegex+"[0-9]*"));null!=b&&(e=b[0].match(new RegExp(d[c].verRegex)),e=b[0].replace(e[0],""));break}d=U();4==f&&(d=f);return{ID:d,version:d===f?e:"",ID_UA:f}}function U(){try{if(null!=window._phantom||null!=window.callPhantom)return 99;
if(document.documentElement.hasAttribute&&document.documentElement.hasAttribute("webdriver")||null!=window.domAutomation||null!=window.domAutomationController||null!=window._WEBDRIVER_ELEM_CACHE)return 98;if(void 0!=window.opera&&void 0!=window.history.navigationMode||void 0!=window.opr&&void 0!=window.opr.addons&&"function"==typeof window.opr.addons.installExtension)return 4;if(void 0!=document.uniqueID&&"string"==typeof document.uniqueID&&(void 0!=document.documentMode&&0<=document.documentMode||
void 0!=document.all&&"object"==typeof document.all||void 0!=window.ActiveXObject&&"function"==typeof window.ActiveXObject)||window.document&&window.document.updateSettings&&"function"==typeof window.document.updateSettings||Object.values&&navigator&&Object.values(navigator.plugins).some(function(b){return-1!=b.name.indexOf("Edge PDF")}))return 1;if(void 0!=window.chrome&&"function"==typeof window.chrome.csi&&"function"==typeof window.chrome.loadTimes&&void 0!=document.webkitHidden&&(1==document.webkitHidden||
0==document.webkitHidden))return 3;if(void 0!=window.mozInnerScreenY&&"number"==typeof window.mozInnerScreenY&&void 0!=window.mozPaintCount&&0<=window.mozPaintCount&&void 0!=window.InstallTrigger&&void 0!=window.InstallTrigger.install)return 2;var b=!1;try{var d=document.createElement("p");d.innerText=".";d.style="text-shadow: rgb(99, 116, 171) 20px -12px 2px";b=void 0!=d.style.textShadow}catch(f){}return(0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")||window.webkitAudioPannerNode&&
window.webkitConvertPointFromNodeToPage)&&b&&void 0!=window.innerWidth&&void 0!=window.innerHeight?5:0}catch(f){return 0}}function Q(){try{var b=0,d=function(c,d){d&&32>c&&(b=(b|1<<c)>>>0)},f=function(c,b){return function(){return c.apply(b,arguments)}},e="svg"===document.documentElement.nodeName.toLowerCase(),c=function(){return"function"!==typeof document.createElement?document.createElement(arguments[0]):e?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,
arguments)},p=["Moz","O","ms","Webkit"],k=["moz","o","ms","webkit"],l={style:c("modernizr").style},g=function(b,d){function e(){h&&(delete l.style,delete l.modElem)}var f;for(f=["modernizr","tspan","samp"];!l.style&&f.length;){var h=!0;l.modElem=c(f.shift());l.style=l.modElem.style}var g=b.length;for(f=0;f<g;f++){var k=b[f];~(""+k).indexOf("-")&&(k=cssToDOM(k));if(void 0!==l.style[k])return e(),"pfx"==d?k:!0}e();return!1},r=function(b,c,d){var e=b.charAt(0).toUpperCase()+b.slice(1),h=(b+" "+p.join(e+
" ")+e).split(" ");if("string"===typeof c||"undefined"===typeof c)return g(h,c);h=(b+" "+k.join(e+" ")+e).split(" ");for(var l in h)if(h[l]in c){if(!1===d)return h[l];b=c[h[l]];return"function"===typeof b?f(b,d||c):b}return!1};d(0,!0);d(1,r("requestFileSystem",window));d(2,window.CSS?"function"==typeof window.CSS.escape:!1);d(3,r("shapeOutside","content-box",!0));return b}catch(h){return 0}}function D(){var b=window,d=0;try{for(;b.parent&&b!=b.parent&&b.parent.document&&!(b=b.parent,10<d++););}catch(f){}return b}
function R(){try{var b=D(),d=0,f=0,e=function(b,c,e){e&&(d+=Math.pow(2,b),f+=Math.pow(2,c))},c=b.document;e(14,0,b.playerInstance&&c.querySelector('script[src*="ads-player.com"]'));e(14,1,(b.CustomWLAdServer||b.DbcbdConfig)&&(a=c.querySelector('p[class="footerCopyright"]'),a&&a.textContent.match(/ MangaLife 2016/)));e(15,2,b.zpz&&b.zpz.createPlayer);e(15,3,b.vdApp&&b.vdApp.createPlayer);e(15,4,c.querySelector('body>div[class="z-z-z"]'));e(16,5,b.xy_checksum&&b.place_player&&(b.logjwonready&&b.logContentPauseRequested||
b.jwplayer));e(17,6,b==b.top&&""==c.title?(a=c.querySelector('body>object[id="player"]'),a&&a.data&&1<a.data.indexOf("jwplayer")&&"visibility: visible;"==a.getAttribute("style")):!1);e(17,7,c.querySelector('script[src*="sitewebvideo.com"]'));e(17,8,b.InitPage&&b.cef&&b.InitAd);e(17,9,b==b.top&&""==c.title?(a=c.querySelector("body>#player"),null!=a&&null!=(null!=a.querySelector('div[id*="opti-ad"]')||a.querySelector('iframe[src="about:blank"]'))):!1);e(17,10,b==b.top&&""==c.title&&b.InitAdPlayer?(a=
c.querySelector('body>div[id="kt_player"]'),null!=a&&null!=a.querySelector('div[class="flash-blocker"]')):!1);e(17,11,null!=b.clickplayer&&null!=b.checkRdy2);e(19,12,b.instance&&b.inject&&c.querySelector('path[id="cp-search-0"]'));e(20,13,function(){try{if(b.top==b&&0<b.document.getElementsByClassName("asu").length)for(var c=b.document.styleSheets,d=0;d<c.length;d++)for(var e=b.document.styleSheets[d].cssRules,f=0;f<e.length;f++)if("div.kk"==e[f].selectorText||"div.asu"==e[f].selectorText)return!0}catch(n){}}());
a:{try{var p=null!=c.querySelector('div[id="kt_player"][hiegth]');break a}catch(h){}p=void 0}e(21,14,p);a:{try{var k=b.top==b&&null!=b.document.querySelector('div[id="asu"][class="kk"]');break a}catch(h){}k=void 0}e(22,15,k);a:{try{var l=c.querySelector('object[data*="/VPAIDFlash.swf"]')&&c.querySelector('object[id*="vpaid_video_flash_tester_el"]')&&c.querySelector('div[id*="desktopSubModal"]');break a}catch(h){}l=void 0}e(25,16,l);var g=navigator.userAgent;if(g&&-1<g.indexOf("Android")&&-1<g.indexOf(" wv)")&&
b==window.top){var r=c.querySelector('img[src*="dealsneartome.com"]')||(b.__cads__?!0:!1)||0<c.querySelectorAll('img[src*="/tracker?tag="]').length;e(28,17,r||!1)}return{f:d,s:f}}catch(h){return null}}function S(){try{var b="&fcifrms="+window.top.length;window.history&&(b+="&brh="+window.history.length);var d=D(),f=d.document;if(d==window.top){b+="&fwc="+((d.FB?1:0)+(d.twttr?2:0)+(d.outbrain?4:0)+(d._taboola?8:0));try{f.cookie&&(b+="&fcl="+f.cookie.length)}catch(e){}d.performance&&d.performance.timing&&
0<d.performance.timing.domainLookupStart&&0<d.performance.timing.domainLookupEnd&&(b+="&flt="+(d.performance.timing.domainLookupEnd-d.performance.timing.domainLookupStart));f.querySelectorAll&&(b+="&fec="+f.querySelectorAll("*").length)}return b}catch(e){return""}}this.createRequest=function(){var b=!1,d=window._dv_win,f=0,e=!1,c;try{for(c=0;10>=c;c++)if(null!=d.parent&&d.parent!=d)if(0<d.parent.location.toString().length)d=d.parent,f++,b=!0;else{b=!1;break}else{0==c&&(b=!0);break}}catch(v){b=!1}a:{try{var p=
d.$sf;break a}catch(v){}p=void 0}if(0==d.document.referrer.length)b=d.location;else if(b)b=d.location;else{b=d.document.referrer;if(z(b)){a:{try{var k=d.$sf&&d.$sf.ext&&d.$sf.ext.hostURL&&d.$sf.ext.hostURL();break a}catch(v){}k=void 0}if(k&&!z(k)&&0==k.indexOf(b)){b=k;var l=!0}}e=!0}if(!window._dv_win.dvbsScriptsInternal||!window._dv_win.dvbsProcessed||0==window._dv_win.dvbsScriptsInternal.length)return{isSev1:!1,url:null};c=window._dv_win.dv_config&&window._dv_win.dv_config.isUT?window._dv_win.dvbsScriptsInternal[window._dv_win.dvbsScriptsInternal.length-
1]:window._dv_win.dvbsScriptsInternal.pop();k=c.script;this.dv_script_obj=c;this.dv_script=k;window._dv_win.dvbsProcessed.push(c);window._dv_win._dvScripts.push(k);var g=k.src;this.dvOther=0;this.dvStep=1;var r=window._dv_win.dv_config?window._dv_win.dv_config.bst2tid?window._dv_win.dv_config.bst2tid:window._dv_win.dv_config.dv_GetRnd?window._dv_win.dv_config.dv_GetRnd():w():w();c=window.parent.postMessage&&window.JSON;var h=!0,u=!1;if("0"==dv_GetParam(g,"t2te")||window._dv_win.dv_config&&1==window._dv_win.dv_config.supressT2T)u=
!0;if(c&&0==u)try{var q=A(window._dv_win.dv_config.bst2turl||"https://cdn3.doubleverify.com/bst2tv3.html","bst2t_"+r);h=x(q)}catch(v){}q={};try{u=/[\?&]([^&]*)=([^&#]*)/gi;for(var m=u.exec(g);null!=m;)"eparams"!==m[1]&&(q[m[1]]=m[2]),m=u.exec(g);var n=q}catch(v){n=q}n.perf=this.perf;n.uid=r;n.script=this.dv_script;n.callbackName="__verify_callback_"+n.uid;n.tagObjectCallbackName="__tagObject_callback_"+n.uid;n.tagAdtag=null;n.tagPassback=null;n.tagIntegrityFlag="";n.tagHasPassbackFlag="";0==(null!=
n.tagformat&&"2"==n.tagformat)&&(m=J(n.script),n.tagAdtag=m.tagAdTag,n.tagPassback=m.tagPassback,m.isBadImp?n.tagIntegrityFlag="&isbadimp=1":m.hasPassback&&(n.tagHasPassbackFlag="&tagpb=1"));(m=(/iPhone|iPad|iPod|\(Apple TV|iOS|Coremedia|CFNetwork\/.*Darwin/i.test(navigator.userAgent)||navigator.vendor&&"apple, inc."===navigator.vendor.toLowerCase())&&!window.MSStream)?q="https:":(q=n.script.src,g="http:",r=window._dv_win.location.toString().match("^http(?:s)?"),"https"!=q.match("^https")||"https"!=
r&&"http"==r||(g="https:"),q=g);n.protocol=q;n.ssl="0";"https:"===n.protocol&&(n.ssl="1");q=n;(g=window._dv_win.dvRecoveryObj)?("2"!=q.tagformat&&(g=g[q.ctx]?g[q.ctx].RecoveryTagID:g._fallback_?g._fallback_.RecoveryTagID:1,1===g&&q.tagAdtag?document.write(q.tagAdtag):2===g&&q.tagPassback&&document.write(q.tagPassback)),q=!0):q=!1;if(q)return{isSev1:!0};this.dvStep=2;I(n,m);k=k&&k.parentElement&&k.parentElement.tagName&&"HEAD"===k.parentElement.tagName;this.dvStep=3;return C(this,n,b,d,f,e,c,h,k,m,
l,p)};this.sendRequest=function(b){var d=dv_GetParam(b,"tagformat");d&&"2"==d?$dvbs.domUtilities.addScriptResource(b,document.body):dv_sendScriptRequest(b);try{if("1"!=dv_GetParam(b,"foie")){var f=G(this.dv_script_obj&&this.dv_script_obj.injScripts),e=A("about:blank");e.id=e.name;var c=e.id.replace("iframe_","");e.setAttribute&&e.setAttribute("data-dv-frm",c);x(e,this.dv_script);if(this.dv_script){var p=this.dv_script;a:{b=null;try{if(b=e.contentWindow){var k=b;break a}}catch(h){}try{if(b=window._dv_win.frames&&
window._dv_win.frames[e.name]){k=b;break a}}catch(h){}k=null}p.dvFrmWin=k}a:{var l;if(e&&(l=e.contentDocument||e.contentWindow&&e.contentWindow.document)){var g=l;break a}g=(l=window._dv_win.frames&&window._dv_win.frames[e.name]&&window._dv_win.frames[e.name].document)?l:null}if(g)g.open(),g.write(f);else{try{document.domain=document.domain}catch(h){}var r=encodeURIComponent(f.replace(/'/g,"\\'").replace(/\n|\r\n|\r/g,""));e.src='javascript: (function(){document.open();document.domain="'+window.document.domain+
"\";document.write('"+r+"');})()"}}}catch(h){f=(window._dv_win.dv_config=window._dv_win.dv_config||{}).tpsAddress||"rtb0.doubleverify.com",e=[this.getVersionParamName(),this.getVersion()].join("="),f+=["/verify.js?ctx=818052&cmp=1619415&num=6",e].join("&"),dv_SendErrorImp(f,[{dvp_jsErrMsg:"DvFrame: "+encodeURIComponent(h)}])}return!0};this.isApplicable=function(){return!0};this.onFailure=function(){};window.debugScript&&(window.CreateUrl=C);this.getVersionParamName=function(){return"ver"};this.getVersion=
function(){return"126"}};


function dvbs_src_main(dvbs_baseHandlerIns, dvbs_handlersDefs) {

    this.bs_baseHandlerIns = dvbs_baseHandlerIns;
    this.bs_handlersDefs = dvbs_handlersDefs;

    this.exec = function () {
        try {
            window._dv_win = (window._dv_win || window);
            window._dv_win.$dvbs = (window._dv_win.$dvbs || new dvBsType());

            window._dv_win.dv_config = window._dv_win.dv_config || {};
            window._dv_win.dv_config.bsErrAddress = window._dv_win.dv_config.bsAddress || 'rtb0.doubleverify.com';

            var errorsArr = (new dv_rolloutManager(this.bs_handlersDefs, this.bs_baseHandlerIns)).handle();
            if (errorsArr && errorsArr.length > 0)
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verify.js?ctx=818052&cmp=1619415&num=6', errorsArr);
        }
        catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verify.js?ctx=818052&cmp=1619415&num=6&dvp_isLostImp=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (e) {
            }
        }
    };
};

try {
    window._dv_win = window._dv_win || window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];
    (new dvbs_src_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
} catch (e) { }