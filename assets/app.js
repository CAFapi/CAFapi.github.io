angular.module('cafapi', ['cafapi.templates'])
.service('$localizeService', localizeService)
.controller('MainCtrl', ['$localizeService', '$templateCache', '$sce', MainCtrl]);

function MainCtrl(localizeService, $templateCache, $sce) {
    var vm = this;

    // get some of the json values
    var json = localizeService.getJson();
    var active_language = localizeService.getActiveLanguage();

    // get a localized version of the header
    var localized_header = localizeService.getLocalised(json.header, active_language);

    // get the header markdown
    var header_md = $templateCache.get(localized_header);

    // parse markdown
    vm.header = $sce.trustAsHtml(markdown.toHTML( header_md ));

    // get localized versions of all the services
    vm.services = Object.keys(json.services).map(function(index) {
        // get an localized version of the service
        var localized = localizeService.getLocalised(json.services[index], active_language);

        // get the markdown
        var md = $templateCache.get(localized.content);

        // parse markdown
        localized.content = $sce.trustAsHtml(markdown.toHTML( md )); 

        return localized;
    });


}

function localizeService() {
    var vm = this;

    // find the script element containing the json
    var script_tag = document.querySelector('#showcase_json');

    // get the contents of the script tag
    var json = JSON.parse(script_tag.innerHTML);

    // store the default language
    var default_language = 'en-us';

    // store the active language
    var active_language = null;

    // check if a language has been previously selected
    if(localStorage.getItem('cafapi_language')) {
        // get the stored previously selected language
        active_language = localStorage.getItem('cafapi_language');
    } else {
        // if no language has previously been selected, use the default
        active_language = default_language;
    }

    vm.getJson = function() {
        return json;
    };

    vm.getActiveLanguage = function() {
        return active_language;
    };

    vm.setActiveLanguage = function(language) {
        // store the active language
        active_language = language;

        // store new language in local storage
        localStorage.setItem('cafapi_language', language);
    };

    vm.getLocalised = function(path, language) {
        
        // if a localized version exists
        if(path.hasOwnProperty(language)) return path[language];

        // otherwise return the default language
        return path[default_language];  
    };
    
}