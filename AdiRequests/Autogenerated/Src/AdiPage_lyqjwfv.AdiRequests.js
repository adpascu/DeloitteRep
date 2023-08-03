define("AdiPage_lyqjwfv", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "ComboBox_qjuiy3p",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_zyega4c",
					"labelPosition": "above",
					"control": "$LookupAttribute_zyega4c",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ldsea96",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_qyxhzqp",
					"labelPosition": "above",
					"control": "$LookupAttribute_qyxhzqp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RichTextEditor_arrh4nk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.StringAttribute_5nabxmm",
					"labelPosition": "above",
					"control": "$StringAttribute_5nabxmm"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"LookupAttribute_zyega4c": {
					"modelConfig": {
						"path": "AdiRequestsDS.AdiCategory"
					}
				},
				"LookupAttribute_qyxhzqp": {
					"modelConfig": {
						"path": "AdiRequestsDS.AdiSubcategory"
					}
				},
				"StringAttribute_5nabxmm": {
					"modelConfig": {
						"path": "AdiRequestsDS.AdiColumn2"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"AdiRequestsDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "AdiRequests"
					}
				}
			},
			"primaryDataSourceName": "AdiRequestsDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});