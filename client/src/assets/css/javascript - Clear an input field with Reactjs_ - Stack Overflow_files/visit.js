try{var dv_win = window._dv_win || window.parent._dv_win; dv_win['dvCallback_1588703384979476']($dv,window,'d2f4e96bc0bd4ee59589f1d13ddf2168','tps10233.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});$dv.tags[$uid].set({"cvmSettings":{"adArea":"100","duration":"5000","measureType":"Consecutive","focus":"1"}});$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":100,"ic":1,"fc":1,"adc":5000},"rp":{"pt":"iscvmvms","pr":"CustomViewabilityViewable","eid":6}});$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForMA', function() {var tag = $dv.tags[$uid];var targetWin = tag.t2tIframeWindow;if(!targetWin){var t2tIframeId = tag.t2tIframeId;if(t2tIframeId){var iFrame = window.parent.getElementById(t2tIframeId);if(iFrame){targetWin = iFrame.contentWindow;}}}if(targetWin){var dateNow = 0;if(Date.now){dateNow = Date.now();} else {dateNow = +new Date();}var message = {action : 'notifyMultipleAdsAdEntityInformationReady',adEntityInformation : {comparisonItems : [{name : 'cmp', value : 18091245, bitFlag : 1, maxTimeMS : 5000, eventToFire : 'CampaignMultipleAd'},{name : 'clcd', value : 589953, bitFlag : 2, maxTimeMS : 5000},{name : 'plmt', value : 18389864, bitFlag : 4, maxTimeMS : 5000},{name : 'mp', value : 7047, bitFlag : 8, maxTimeMS : 5000},{name : 'adv', value : 868983, bitFlag : 16, maxTimeMS : 5000, eventToFire : 'LobMultipleAd'},{name : 'cmpMP', value : 5427373549329, bitFlag : 32, maxTimeMS : 5000}],dvTagCreatedTS : tag.t2tIframeCreationTime,visitJSPostMessageTS : dateNow}};var stringifyFunc = null;if(window.JSON){stringifyFunc = window.JSON.stringify;} else {if(window.parent && window.parent.JSON){stringifyFunc = window.parent.JSON.stringify;}}if(!stringifyFunc){return;}var msgString = stringifyFunc(message);targetWin.postMessage(msgString, '*');setTimeout(function(){targetWin.postMessage(msgString, '*');}, 100);setTimeout(function(){targetWin.postMessage(msgString, '*');}, 500);}});    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
            'use strict';
            var stringifyFunc = null;
			if(window.JSON){
				stringifyFunc = window.JSON.stringify;
			} else {
				if(window.parent && window.parent.JSON){
					stringifyFunc = window.parent.JSON.stringify;
				}
			}
			if(!stringifyFunc){
				return;
			}
            var targetWin;
            var tag = $dv.tags[$uid];
            var bsmsg = {
                action : 'notifyBrandShieldAdEntityInformation',
                bsAdEntityInformation : {
                    comparisonItems : [{name : 'cmp', value : 18091245},{name : 'plmt', value : 18389864}], verboseReporting : false  }
            };
            var bsstring = stringifyFunc(bsmsg);

            var findAndSend = function(){
                if(!targetWin) {
                    if (tag) {
                        targetWin = tag.t2tIframeWindow;
                        if (!targetWin) {
                            var t2tIframeId = tag.t2tIframeId;
                            //get t2t window and post the AdEntities to it.
                            if (t2tIframeId) {
                                var iFrame = window.parent.getElementById(t2tIframeId);
                                if (iFrame) {
                                    targetWin = iFrame.contentWindow;
                                }
                            }
                        }
                    }
                }

                if(targetWin){
                    targetWin.postMessage(bsstring, '*');
                }
            };

            findAndSend();
            setTimeout(findAndSend, 100);
            setTimeout(findAndSend, 500);
        });var dvObj = $dv;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};if (a['pltfrm'])dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("d2f4e96bc0bd4ee59589f1d13ddf2168",false);$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":1000,"mla":false,"ldav":30},"rp":{"mt":"ismms","pt":"ispmxpms"}});$dv.pubSub.subscribe('ImpressionServed', $uid, 'OperaVendorChecker', function(){var eventData = {};var mraidObject = $dv.getMraid();var execMrSaf = function(func) {		var rv;		try {			if (typeof func === 'function') {rv = func.call(mraidObject)}		}catch (e) {			eventData = {'dvp_operr': 1}						}		return rv;};try{	if(mraidObject)	{		var vendor = execMrSaf(mraidObject.getVendor);		var vendor_version = execMrSaf(mraidObject.getVendorVersion);		if(vendor != null && vendor_version != null)		{			eventData = {				dvp_sspv: vendor,				dvp_sspvv: vendor_version			};		}	}}catch (e){	eventData = {		dvp_operr: 2	};}$dv.registerEventCall($uid, eventData);});$dv.CommonData.deviceType = 1;$dv.CommonData.detectedDeliveryType = 1;$dv.tags[$uid].deviceType = 1;$dv.tags[$uid].detectedDeliveryType = 1;try{$dv.pubSub.publish('ImpressionServed', $uid);$dv.pubSub.publish('ImpressionServed', $frmId);}catch(e){}