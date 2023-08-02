define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "MrktLeadExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(MrktLeadExpansionPanel_title)#",
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
				"parentName": "MarketingTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MrktLeadToolsContainer",
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
				"parentName": "MrktLeadExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MrktLeadToolsFlexContainer",
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
				"parentName": "MrktLeadToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MrktLeadAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(MrktLeadAddButton_caption)#",
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
									"attributeName": "QualifiedContact",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "MrktLeadToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MrktLeadRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(MrktLeadRefreshButton_caption)#",
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
							"dataSourceName": "MrktLeadListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "MrktLeadToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MrktLeadSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(MrktLeadSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "MrktLeadToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MrktLeadExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MrktLeadExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "MrktLeadList"
						}
					},
					"visible": true
				},
				"parentName": "MrktLeadSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MrktLeadImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MrktLeadImportDataButton_caption)#",
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
				"parentName": "MrktLeadSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MrktLeadSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(MrktLeadSearchFilter_placeholder)#",
					"targetAttributes": [
						"MrktLeadList"
					],
					"iconOnly": true
				},
				"parentName": "MrktLeadToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MrktLeadListContainer",
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
				"parentName": "MrktLeadExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MrktLeadList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$MrktLeadList",
					"primaryColumnName": "MrktLeadListDS_Id",
					"columns": [
						{
							"id": "84637c76-0499-63cc-dcbc-f89d9b1161a1",
							"code": "MrktLeadListDS_LeadName",
							"caption": "#ResourceString(MrktLeadListDS_LeadName)#",
							"dataValueType": 30,
							"width": 272
						},
						{
							"id": "5ed1f472-2c22-d04a-a432-0e4e8c930261",
							"code": "MrktLeadListDS_LeadType",
							"path": "LeadType",
							"caption": "#ResourceString(MrktLeadListDS_LeadType)#",
							"dataValueType": 10,
							"referenceSchemaName": "LeadType"
						},
						{
							"id": "877c99f9-2170-aa89-1abc-a6a6a85f5741",
							"code": "MrktLeadListDS_QualifyStatus",
							"path": "QualifyStatus",
							"caption": "#ResourceString(MrktLeadListDS_QualifyStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "QualifyStatus",
							"width": 159
						},
						{
							"id": "8cdb144b-d14e-cff9-699e-17921bef7997",
							"code": "MrktLeadListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(MrktLeadListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 181
						},
						{
							"id": "5bb7529f-6cff-3b7a-6574-2dd3a33983f5",
							"code": "MrktLeadListDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(MrktLeadListDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 126
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
				"parentName": "MrktLeadListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmittedFormExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SubmittedFormExpansionPanel_title)#",
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
				"parentName": "MarketingTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubmittedFormToolContainer",
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
				"parentName": "SubmittedFormExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmittedFormToolFlexContainer",
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
				"parentName": "SubmittedFormToolContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmittedFormRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubmittedFormRefreshButton_caption)#",
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
							"dataSourceName": "SubmittedFormListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "SubmittedFormToolFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmittedFormSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubmittedFormSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "SubmittedFormToolFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubmittedFormExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SubmittedFormExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "SubmittedFormList"
						}
					},
					"visible": true
				},
				"parentName": "SubmittedFormSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmittedFormImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SubmittedFormImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "FormSubmit"
						}
					},
					"visible": true
				},
				"parentName": "SubmittedFormSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubmittedFormSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SubmittedFormSearchFilter_placeholder)#",
					"targetAttributes": [
						"SubmittedFormList"
					],
					"iconOnly": true
				},
				"parentName": "SubmittedFormToolFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SubmittedFormListContainer",
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
				"parentName": "SubmittedFormExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmittedFormList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$SubmittedFormList",
					"primaryColumnName": "SubmittedFormListDS_Id",
					"columns": [
						{
							"id": "a0c83ea5-85f0-34de-bd00-bf9bfdc19a1a",
							"code": "SubmittedFormListDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(SubmittedFormListDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 144
						},
						{
							"id": "e446f777-a51a-f58d-70e9-cc03c4bdc155",
							"code": "SubmittedFormListDS_WebForm",
							"path": "WebForm",
							"caption": "#ResourceString(SubmittedFormListDS_WebForm)#",
							"dataValueType": 10,
							"referenceSchemaName": "GeneratedWebForm",
							"width": 169
						},
						{
							"id": "cfd5a7e5-5511-47f6-6e32-f8dabdd91b2f",
							"code": "SubmittedFormListDS_WebFormExternalURL",
							"path": "WebForm.ExternalURL",
							"caption": "#ResourceString(SubmittedFormListDS_WebFormExternalURL)#",
							"dataValueType": 29,
							"width": 155
						},
						{
							"id": "323f2f9b-ff52-5d01-d32d-9192ceb256a4",
							"code": "SubmittedFormListDS_FullName",
							"path": "FullName",
							"caption": "#ResourceString(SubmittedFormListDS_FullName)#",
							"dataValueType": 28,
							"width": 158
						},
						{
							"id": "54f933b7-f0f8-c87d-62c5-3e81e96ab6d3",
							"code": "SubmittedFormListDS_Email",
							"path": "Email",
							"caption": "#ResourceString(SubmittedFormListDS_Email)#",
							"dataValueType": 28,
							"width": 130
						},
						{
							"id": "0912425e-8d1c-21c1-77e3-feb6399ca4b9",
							"code": "SubmittedFormListDS_PhoneNumber",
							"path": "PhoneNumber",
							"caption": "#ResourceString(SubmittedFormListDS_PhoneNumber)#",
							"dataValueType": 28,
							"width": 185
						},
						{
							"id": "ef271c34-52a4-cead-0673-33531c713e5f",
							"code": "SubmittedFormListDS_Account",
							"path": "Account",
							"caption": "#ResourceString(SubmittedFormListDS_Account)#",
							"dataValueType": 28,
							"width": 202
						},
						{
							"id": "ca081920-369e-e13c-db35-3fd9f19cd358",
							"code": "SubmittedFormListDS_Country",
							"path": "Country",
							"caption": "#ResourceString(SubmittedFormListDS_Country)#",
							"dataValueType": 10,
							"referenceSchemaName": "Country",
							"width": 133
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
				"parentName": "SubmittedFormListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebSessionExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(WebSessionExpansionPanel_title)#",
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
				"parentName": "MarketingTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WebSessionToolContainer",
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
				"parentName": "WebSessionExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebSessionToolFlexContainer",
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
				"parentName": "WebSessionToolContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebSessionRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WebSessionRefreshButton_caption)#",
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
							"dataSourceName": "WebSessionListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "WebSessionToolFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebSessionSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WebSessionSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "WebSessionToolFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebSessionExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(WebSessionExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "WebSessionList"
						}
					},
					"visible": true
				},
				"parentName": "WebSessionSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_tz82vh6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_tz82vh6_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Touch"
						}
					},
					"visible": true
				},
				"parentName": "WebSessionSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebSessionSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(WebSessionSearchFilter_placeholder)#",
					"targetAttributes": [
						"WebSessionList"
					],
					"iconOnly": true
				},
				"parentName": "WebSessionToolFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WebSessionListContainer",
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
				"parentName": "WebSessionExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebSessionList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$WebSessionList",
					"primaryColumnName": "WebSessionListDS_Id",
					"columns": [
						{
							"id": "50a6c11c-2ff6-db63-c5a7-7a9b693ba3c6",
							"code": "WebSessionListDS_StartDate",
							"path": "StartDate",
							"caption": "#ResourceString(WebSessionList_50a6c11c)#",
							"dataValueType": 7,
							"width": 138
						},
						{
							"id": "bb96b5ea-67f4-ad9e-c4ee-42790cd6649f",
							"code": "WebSessionListDS_CountryStr",
							"path": "CountryStr",
							"caption": "#ResourceString(WebSessionList_bb96b5ea)#",
							"dataValueType": 28,
							"width": 154
						},
						{
							"id": "439c70ce-057f-adec-4a34-61db494b54ef",
							"code": "WebSessionListDS_CityStr",
							"path": "CityStr",
							"caption": "#ResourceString(WebSessionList_439c70ce)#",
							"dataValueType": 28,
							"width": 140
						},
						{
							"id": "b36f9897-6449-081f-18ad-51eace598bb4",
							"code": "WebSessionListDS_Source",
							"path": "Source",
							"caption": "#ResourceString(WebSessionListDS_Source)#",
							"dataValueType": 10,
							"referenceSchemaName": "LeadSource",
							"width": 147
						},
						{
							"id": "67d0266a-9808-5ad4-2b1c-c194f51d77be",
							"code": "WebSessionListDS_Channel",
							"path": "Channel",
							"caption": "#ResourceString(WebSessionListDS_Channel)#",
							"dataValueType": 10,
							"referenceSchemaName": "LeadMedium",
							"width": 132
						},
						{
							"id": "f96e40f1-35c1-48a5-e427-e46e6b5e65d5",
							"code": "WebSessionListDS_PageReferrer",
							"path": "PageReferrer",
							"caption": "#ResourceString(WebSessionListDS_PageReferrer)#",
							"dataValueType": 29,
							"width": 167
						},
						{
							"id": "1259aaa8-04c5-f8d1-1afa-403dbd4217f9",
							"code": "WebSessionListDS_Duration",
							"path": "Duration",
							"caption": "#ResourceString(WebSessionList_1259aaa8)#",
							"dataValueType": 4,
							"width": 134
						},
						{
							"id": "fa5fb4d8-881c-a5dd-96df-6de651b6f145",
							"code": "WebSessionListDS_TouchActionTouchIdCountd3601bf8",
							"path": "[TouchAction:Touch].Id",
							"caption": "#ResourceString(WebSessionList_fa5fb4d8)#",
							"dataValueType": 4,
							"referenceSchemaName": "TouchAction",
							"width": 114
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
				"parentName": "WebSessionListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(WebActionExpansionPanel_title)#",
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
				"parentName": "MarketingTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "WebActionToolContainer",
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
				"parentName": "WebActionExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionToolFlexContainer",
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
				"parentName": "WebActionToolContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WebActionRefreshButton_caption)#",
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
							"dataSourceName": "WebActionListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "WebActionToolFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(WebActionSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "WebActionToolFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebActionExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(WebActionExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "WebActionList"
						}
					},
					"visible": true
				},
				"parentName": "WebActionSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(WebActionImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "TouchAction"
						}
					},
					"visible": true
				},
				"parentName": "WebActionSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WebActionSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(WebActionSearchFilter_placeholder)#",
					"targetAttributes": [
						"WebActionList"
					],
					"iconOnly": true
				},
				"parentName": "WebActionToolFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "WebActionListContainer",
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
				"parentName": "WebActionExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "WebActionList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$WebActionList",
					"primaryColumnName": "WebActionListDS_Id",
					"columns": [
						{
							"id": "a9a6f0cb-2944-3af8-3136-257f50d08da5",
							"code": "WebActionListDS_ActionDate",
							"path": "ActionDate",
							"caption": "#ResourceString(WebActionList_a9a6f0cb)#",
							"dataValueType": 7,
							"width": 144
						},
						{
							"id": "e5a6a989-a26d-887c-2b23-6d683afff463",
							"code": "WebActionListDS_Type",
							"path": "Type",
							"caption": "#ResourceString(WebActionListDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "TouchActionType",
							"width": 154
						},
						{
							"id": "bc5102ac-fd60-b847-c1ec-62a2fed4b22f",
							"code": "WebActionListDS_WebPage",
							"path": "WebPage",
							"caption": "#ResourceString(WebActionListDS_WebPage)#",
							"dataValueType": 10,
							"referenceSchemaName": "WebPage",
							"width": 282
						},
						{
							"id": "f312b329-0a07-35f5-24e8-d92d1e022770",
							"code": "WebActionListDS_WebPageUrl",
							"path": "WebPage.Url",
							"caption": "#ResourceString(WebActionList_f312b329)#",
							"dataValueType": 29
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
				"parentName": "WebActionListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"MrktLeadList": {
					"isCollection": true,
					"modelConfig": {
						"path": "MrktLeadListDS"
					},
					"viewModelConfig": {
						"attributes": {
							"MrktLeadListDS_LeadName": {
								"modelConfig": {
									"path": "MrktLeadListDS.LeadName"
								}
							},
							"MrktLeadListDS_LeadType": {
								"modelConfig": {
									"path": "MrktLeadListDS.LeadType"
								}
							},
							"MrktLeadListDS_QualifyStatus": {
								"modelConfig": {
									"path": "MrktLeadListDS.QualifyStatus"
								}
							},
							"MrktLeadListDS_Owner": {
								"modelConfig": {
									"path": "MrktLeadListDS.Owner"
								}
							},
							"MrktLeadListDS_CreatedOn": {
								"modelConfig": {
									"path": "MrktLeadListDS.CreatedOn"
								}
							},
							"MrktLeadListDS_Id": {
								"modelConfig": {
									"path": "MrktLeadListDS.Id"
								}
							}
						}
					}
				},
				"SubmittedFormList": {
					"isCollection": true,
					"modelConfig": {
						"path": "SubmittedFormListDS"
					},
					"viewModelConfig": {
						"attributes": {
							"SubmittedFormListDS_CreatedOn": {
								"modelConfig": {
									"path": "SubmittedFormListDS.CreatedOn"
								}
							},
							"SubmittedFormListDS_WebForm": {
								"modelConfig": {
									"path": "SubmittedFormListDS.WebForm"
								}
							},
							"SubmittedFormListDS_WebFormExternalURL": {
								"modelConfig": {
									"path": "SubmittedFormListDS.WebFormExternalURL"
								}
							},
							"SubmittedFormListDS_FullName": {
								"modelConfig": {
									"path": "SubmittedFormListDS.FullName"
								}
							},
							"SubmittedFormListDS_Email": {
								"modelConfig": {
									"path": "SubmittedFormListDS.Email"
								}
							},
							"SubmittedFormListDS_PhoneNumber": {
								"modelConfig": {
									"path": "SubmittedFormListDS.PhoneNumber"
								}
							},
							"SubmittedFormListDS_Account": {
								"modelConfig": {
									"path": "SubmittedFormListDS.Account"
								}
							},
							"SubmittedFormListDS_Country": {
								"modelConfig": {
									"path": "SubmittedFormListDS.Country"
								}
							},
							"SubmittedFormListDS_Id": {
								"modelConfig": {
									"path": "SubmittedFormListDS.Id"
								}
							}
						}
					}
				},
				"WebSessionList": {
					"isCollection": true,
					"modelConfig": {
						"path": "WebSessionListDS",
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "WebSessionList_PredefinedFilter"
							}
						],
						"sortingConfig": {
							"default": [
								{
									"direction": "asc",
									"columnName": "StartDate"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"WebSessionListDS_StartDate": {
								"modelConfig": {
									"path": "WebSessionListDS.StartDate"
								}
							},
							"WebSessionListDS_CountryStr": {
								"modelConfig": {
									"path": "WebSessionListDS.CountryStr"
								}
							},
							"WebSessionListDS_CityStr": {
								"modelConfig": {
									"path": "WebSessionListDS.CityStr"
								}
							},
							"WebSessionListDS_Source": {
								"modelConfig": {
									"path": "WebSessionListDS.Source"
								}
							},
							"WebSessionListDS_Channel": {
								"modelConfig": {
									"path": "WebSessionListDS.Channel"
								}
							},
							"WebSessionListDS_PageReferrer": {
								"modelConfig": {
									"path": "WebSessionListDS.PageReferrer"
								}
							},
							"WebSessionListDS_Duration": {
								"modelConfig": {
									"path": "WebSessionListDS.Duration"
								}
							},
							"WebSessionListDS_TouchActionTouchIdCountd3601bf8": {
								"modelConfig": {
									"path": "WebSessionListDS.TouchActionTouchIdCountd3601bf8"
								}
							},
							"WebSessionListDS_Id": {
								"modelConfig": {
									"path": "WebSessionListDS.Id"
								}
							}
						}
					}
				},
				"WebSessionList_PredefinedFilter": {
					"value": null
				},
				"WebActionList": {
					"isCollection": true,
					"modelConfig": {
						"path": "WebActionListDS",
						"filterAttributes": [
							{
								"name": "WebActionList_PredefinedFilter",
								"loadOnChange": true
							}
						],
						"sortingConfig": {
							"default": [
								{
									"direction": "asc",
									"columnName": "ActionDate"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"WebActionListDS_ActionDate": {
								"modelConfig": {
									"path": "WebActionListDS.ActionDate"
								}
							},
							"WebActionListDS_Type": {
								"modelConfig": {
									"path": "WebActionListDS.Type"
								}
							},
							"WebActionListDS_WebPage": {
								"modelConfig": {
									"path": "WebActionListDS.WebPage"
								}
							},
							"WebActionListDS_WebPageUrl": {
								"modelConfig": {
									"path": "WebActionListDS.WebPageUrl"
								}
							},
							"WebActionListDS_Id": {
								"modelConfig": {
									"path": "WebActionListDS.Id"
								}
							}
						}
					}
				},
				"WebActionList_PredefinedFilter": {
					"value": null
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"MrktLeadListDS": {
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
				},
				"SubmittedFormListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "FormSubmit",
						"attributes": {
							"CreatedOn": {
								"path": "CreatedOn"
							},
							"WebForm": {
								"path": "WebForm"
							},
							"WebFormExternalURL": {
								"path": "WebForm.ExternalURL",
								"type": "ForwardReference"
							},
							"FullName": {
								"path": "FullName"
							},
							"Email": {
								"path": "Email"
							},
							"PhoneNumber": {
								"path": "PhoneNumber"
							},
							"Account": {
								"path": "Account"
							},
							"Country": {
								"path": "Country"
							}
						}
					}
				},
				"WebSessionListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "Touch",
						"attributes": {
							"StartDate": {
								"path": "StartDate"
							},
							"CountryStr": {
								"path": "CountryStr"
							},
							"CityStr": {
								"path": "CityStr"
							},
							"Source": {
								"path": "Source"
							},
							"Channel": {
								"path": "Channel"
							},
							"PageReferrer": {
								"path": "PageReferrer"
							},
							"Duration": {
								"path": "Duration"
							},
							"TouchActionTouchIdCountd3601bf8": {
								"path": "[TouchAction:Touch].Id",
								"type": "Aggregation",
								"aggregationConfig": {
									"aggregationFunction": "Count",
									"filter": null
								}
							}
						}
					}
				},
				"WebActionListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "TouchAction",
						"attributes": {
							"ActionDate": {
								"path": "ActionDate"
							},
							"Type": {
								"path": "Type"
							},
							"WebPage": {
								"path": "WebPage"
							},
							"WebPageUrl": {
								"path": "WebPage.Url",
								"type": "ForwardReference"
							}
						}
					}
				}
			},
			"dependencies": {
				"MrktLeadListDS": [
					{
						"attributePath": "QualifiedContact",
						"relationPath": "PDS.Id"
					}
				],
				"SubmittedFormListDS": [
					{
						"attributePath": "Contact",
						"relationPath": "PDS.Id"
					}
				],
				"WebSessionListDS": [
					{
						"attributePath": "Contact",
						"relationPath": "PDS.Id"
					}
				],
				"WebActionListDS": [
					{
						"attributePath": "Touch.Contact",
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