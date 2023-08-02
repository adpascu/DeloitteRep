(function() {
    require.config({
        paths: {
            "EmailTemplateLookupGalleryElement": Terrasoft.getFileContentUrl("MarketingCampaign", "src/js/marketing-campaign-ng-elements/main.js"),
            "EmailTemplateLookupGalleryElementStyles": Terrasoft.getFileContentUrl("MarketingCampaign", "src/js/marketing-campaign-ng-elements/styles.css")
		},
        shim: {
            "EmailTemplateLookupGalleryElement": {
                deps: ["ng-core", "css-ltr!EmailTemplateLookupGalleryElementStyles"]
            }
        }
    });
})();