/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2016. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @param tag: a topic such as MobileFirst_Platform, Bluemix, Cordova.
 * @returns json list of items.
 */

function getCountryList(tag) {
    var path = "agent/country/7841007849990001/147021566652945";
    var input = {
        method: "GET",
        path: path,
        params: null
    };
    return MFP.Server.invokeHttp(input);
}

function getBeneficiaryList(tag) {
    var path = "customer/beneficiary/list/7841007849990001/148250160857558?customernumber=1000279279&instrumenttype=LuluRemit&lastserialno=0";
    var input = {
        method: "GET",
        path: path,
        params: null
    }
    return MFP.Server.invokeHttp(input);
}