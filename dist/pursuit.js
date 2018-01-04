/*
 * pursuit.js [v1.0.0]
 * http://www.pursuitjs.com 
 * Copyright (c) 20117-2018, Federico Guzman <federico@weblantropia.com> 
 * Licensed under the MIT License
 */
/* 
 * find-in-json.js 
 * Searching through JSON, iwek https://gist.github.com/iwek/3924925
 * 
 * Copyright (c) 2013-2015, Iwek https://github.com/iwek 
 * Licensed under the MIT License 
 */ 

(function (window) {
    'use strict';

    var Pursuit = {
        env     : 'development',
        Validate: function (data) {

            var obj = JSON.parse(data);
            if (obj && typeof obj === "object") {
                return obj;
            }            
            return false;
        },
        Objects: function (data, key, val) {            
            var objects = [];
            for (var i in data) {
                if (!data.hasOwnProperty(i)) continue;
                if (typeof data[i] === 'object') {
                    objects = objects.concat(Pursuit.Objects(data[i], key, val));
                } else 
                if (i == key && data[i] == val || i == key && val == '') {
                    objects.push(data);
                } else if (data[i] == val && key == ''){
                    if (objects.lastIndexOf(data) == -1){
                        objects.push(data);
                    }
                }
            }            
            return objects;
        },
        Values: function (data, key) {
            var objects = [];
            for (var i in data) {
                if (!data.hasOwnProperty(i)) continue;
                if (typeof data[i] === 'object') {
                    objects = objects.concat(Pursuit.Values(data[i], key));
                } else if (i == key) {
                    objects.push(data[i]);
                }
            }
            return objects;
        },
        Keys: function (data, val) {
            var objects = [];
            for (var i in data) {
                if (!data.hasOwnProperty(i)) continue;
                if (typeof data[i] === 'object') {
                    objects = objects.concat(Pursuit.Keys(data[i], val));
                } else if (data[i] == val) {
                    objects.push(i);
                }
            }
            return objects;
        }
    }//Pursuit()

    if(typeof(window.Pursuit) === 'undefined'){
        window.Pursuit = Pursuit;
    }
    
    if (Pursuit.env === 'development') {
        console.log(Pursuit);
    }
    
})(window);