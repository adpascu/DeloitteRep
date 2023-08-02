define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "SalesTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(SalesTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LeadExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(LeadExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "SalesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "LeadExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "LeadToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LeadAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Lead",
							"defaultValues": [
								{
									"attributeName": "QualifiedAccount",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "LeadToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LeadRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "LeadListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "LeadToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LeadSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "LeadToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LeadExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(LeadExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "LeadList"
						}
					},
					"visible": true
				},
				"parentName": "LeadSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(LeadImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Lead"
						}
					},
					"visible": true
				},
				"parentName": "LeadSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(LeadSearchFilter_placeholder)#",
					"targetAttributes": [
						"LeadList"
					],
					"iconOnly": true
				},
				"parentName": "LeadToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LeadListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "LeadExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$LeadList",
					"primaryColumnName": "LeadListDS_Id",
					"columns": [
						{
							"id": "93de4e11-2c1e-7899-6e02-403469b97955",
							"code": "LeadListDS_LeadName",
							"caption": "#ResourceString(LeadListDS_LeadName)#",
							"dataValueType": 30
						},
						{
							"id": "8d63000d-6268-7c1f-7f7b-75cfe6d0ff96",
							"code": "LeadListDS_LeadType",
							"path": "LeadType",
							"caption": "#ResourceString(LeadListDS_LeadType)#",
							"dataValueType": 10,
							"referenceSchemaName": "LeadType"
						},
						{
							"id": "cc442fde-a2f7-59e4-596e-26740cc9ea1a",
							"code": "LeadListDS_QualifyStatus",
							"path": "QualifyStatus",
							"caption": "#ResourceString(LeadListDS_QualifyStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "QualifyStatus"
						},
						{
							"id": "7f33395b-6a1b-604f-5f4c-2f0c3acb52bd",
							"code": "LeadListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(LeadListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "a2a738d8-6640-2ddb-686e-4b0f74adc105",
							"code": "LeadListDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(LeadListDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "LeadListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(DocumentExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "SalesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DocumentToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "DocumentExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "DocumentToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Document",
							"defaultValues": [
								{
									"attributeName": "Account",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "DocumentToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "DocumentListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "DocumentToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DocumentSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "DocumentToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DocumentExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DocumentExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DocumentList"
						}
					},
					"visible": true
				},
				"parentName": "DocumentSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentmportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DocumentmportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Document"
						}
					},
					"visible": true
				},
				"parentName": "DocumentSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DocumentSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(DocumentSearchFilter_placeholder)#",
					"targetAttributes": [
						"DocumentList"
					],
					"iconOnly": true
				},
				"parentName": "DocumentToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DocumentListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "DocumentExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$DocumentList",
					"primaryColumnName": "DocumentListDS_Id",
					"columns": [
						{
							"id": "625a5d56-367b-bd5e-753d-37dd439c5b9e",
							"code": "DocumentListDS_Number",
							"caption": "#ResourceString(DocumentListDS_Number)#",
							"dataValueType": 28
						},
						{
							"id": "af5c3cd1-533f-c700-b752-88b478bd5e42",
							"code": "DocumentListDS_Type",
							"path": "Type",
							"caption": "#ResourceString(DocumentListDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "DocumentType"
						},
						{
							"id": "0404accd-d1e9-b9c1-0f6b-c33de963554c",
							"code": "DocumentListDS_State",
							"path": "State",
							"caption": "#ResourceString(DocumentListDS_State)#",
							"dataValueType": 10,
							"referenceSchemaName": "DocumentState"
						},
						{
							"id": "4342e4de-dc59-6359-08e9-6b7ee5c85936",
							"code": "DocumentListDS_Date",
							"path": "Date",
							"caption": "#ResourceString(DocumentListDS_Date)#",
							"dataValueType": 8
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "DocumentListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"DocumentList": {
					"isCollection": true,
					"modelConfig": {
						"path": "DocumentListDS",
						"filterAttributes": [
							{
								"name": "DocumentList_PredefinedFilter",
								"loadOnChange": true
							}
						]
					},
					"viewModelConfig": {
						"attributes": {
							"DocumentListDS_Number": {
								"modelConfig": {
									"path": "DocumentListDS.Number"
								}
							},
							"DocumentListDS_Type": {
								"modelConfig": {
									"path": "DocumentListDS.Type"
								}
							},
							"DocumentListDS_State": {
								"modelConfig": {
									"path": "DocumentListDS.State"
								}
							},
							"DocumentListDS_Date": {
								"modelConfig": {
									"path": "DocumentListDS.Date"
								}
							},
							"DocumentListDS_Id": {
								"modelConfig": {
									"path": "DocumentListDS.Id"
								}
							}
						}
					}
				},
				"LeadList": {
					"isCollection": true,
					"modelConfig": {
						"path": "LeadListDS",
						"filterAttributes": [
							{
								"name": "LeadList_PredefinedFilter",
								"loadOnChange": true
							}
						]
					},
					"viewModelConfig": {
						"attributes": {
							"LeadListDS_LeadName": {
								"modelConfig": {
									"path": "LeadListDS.LeadName"
								}
							},
							"LeadListDS_LeadType": {
								"modelConfig": {
									"path": "LeadListDS.LeadType"
								}
							},
							"LeadListDS_QualifyStatus": {
								"modelConfig": {
									"path": "LeadListDS.QualifyStatus"
								}
							},
							"LeadListDS_Owner": {
								"modelConfig": {
									"path": "LeadListDS.Owner"
								}
							},
							"LeadListDS_CreatedOn": {
								"modelConfig": {
									"path": "LeadListDS.CreatedOn"
								}
							},
							"LeadListDS_Id": {
								"modelConfig": {
									"path": "LeadListDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"DocumentListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "Document",
						"attributes": {
							"Number": {
								"path": "Number"
							},
							"Type": {
								"path": "Type"
							},
							"State": {
								"path": "State"
							},
							"Date": {
								"path": "Date"
							}
						}
					}
				},
				"LeadListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "Lead",
						"attributes": {
							"LeadName": {
								"path": "LeadName"
							},
							"LeadType": {
								"path": "LeadType"
							},
							"QualifyStatus": {
								"path": "QualifyStatus"
							},
							"Owner": {
								"path": "Owner"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							}
						}
					}
				}
			},
			"dependencies": {
				"DocumentListDS": [
					{
						"attributePath": "Account",
						"relationPath": "PDS.Id"
					}
				],
				"LeadListDS": [
					{
						"attributePath": "QualifiedAccount",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});