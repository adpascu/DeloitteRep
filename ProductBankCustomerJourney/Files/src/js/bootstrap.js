(function() {
	require.config({
		paths: {
			"NGBankProductSelection": Terrasoft.getFileContentUrl("ProductBankCustomerJourney", "src/js/ng-bank-product-selection/main.js"),
			"NGBankProductSelectionStyles": Terrasoft.getFileContentUrl("ProductBankCustomerJourney", "src/js/ng-bank-product-selection/styles.css")
		},
		shim: {
			"NGBankProductSelection": {
				deps: ["ng-core", "css-ltr!NGBankProductSelectionStyles"]
			}
		}
	});
}());
