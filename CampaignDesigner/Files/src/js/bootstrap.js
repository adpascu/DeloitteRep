(function () {
	require.config({
		paths: {
			"SimpleDiagram": Terrasoft.getFileContentUrl("CampaignDesigner", "src/js/cytoscape.min.js"),
			"CampaignDesignerComponent": Terrasoft.getFileContentUrl("CampaignDesigner", "src/js/campaign-designer-component/main.js"),
			"CampaignDesignerComponentStyles": Terrasoft.getFileContentUrl("CampaignDesigner", "src/js/campaign-designer-component/styles.css"),
			"SvgRenderer": Terrasoft.getFileContentUrl("CampaignDesigner", "src/js/canvg.min.js"),
			"CampaignGallery": Terrasoft.getFileContentUrl("CampaignDesigner", 	"src/js/campaign-gallery-element/main.js"),
			"CampaignGalleryStyles": Terrasoft.getFileContentUrl("CampaignDesigner", 	"src/js/campaign-gallery-element/styles.css"),
		},
		shim: {
			"SimpleDiagram": {
				deps: [""]
			},
			"CampaignDesignerComponent": {
				deps: ["ng-core", "css-ltr!CampaignDesignerComponentStyles"]
			},
			"CampaignGallery": {
				deps: ["ng-core", "css-ltr!CampaignGalleryStyles"]
			},
			"SvgRenderer": {
				deps: [""]
			}
		}
	});
})();
