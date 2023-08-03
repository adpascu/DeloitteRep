define("AdiPage_k8rwtig", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"alignItems": "flex-end"
				}
			},
			{
				"operation": "merge",
				"name": "ActionButtonsContainer",
				"values": {
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"alignItems": "flex-end",
					"gap": "small",
					"wrap": "wrap"
				}
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"caption": "#ResourceString(CloseButton_caption)#"
				}
			},
			{
				"operation": "insert",
				"name": "Checkbox_jz1wusg",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.BooleanAttribute_dhclxwd_hgppfr0",
					"labelPosition": "right",
					"control": "$BooleanAttribute_dhclxwd_hgppfr0",
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_bjhamx2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_kao3yo2",
					"labelPosition": "above",
					"control": "$LookupAttribute_kao3yo2",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_m2v7ifa",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_m2v7ifa_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_bjhamx2",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_2tqnxh3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_2v8jnpj",
					"labelPosition": "above",
					"control": "$NumberAttribute_2v8jnpj"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_8yjfe88",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_1dalbdg",
					"labelPosition": "above",
					"control": "$LookupAttribute_1dalbdg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_rfis84r",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_vzrndjg",
					"labelPosition": "above",
					"control": "$StringAttribute_vzrndjg"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"LookupAttribute_kao3yo2": {
					"modelConfig": {
						"path": "AdiExpensesDS.AdiRequest"
					}
				},
				"NumberAttribute_2v8jnpj": {
					"modelConfig": {
						"path": "AdiExpensesDS.AdiAmount"
					}
				},
				"StringAttribute_vzrndjg": {
					"modelConfig": {
						"path": "AdiExpensesDS.AdiComment"
					}
				},
				"LookupAttribute_1dalbdg": {
					"modelConfig": {
						"path": "AdiExpensesDS.AdiType"
					}
				},
				"BooleanAttribute_dhclxwd_hgppfr0": {
					"modelConfig": {
						"path": "AdiExpensesDS.AdiImported"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"AdiExpensesDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "AdiExpenses"
					}
				}
			},
			"primaryDataSourceName": "AdiExpensesDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});