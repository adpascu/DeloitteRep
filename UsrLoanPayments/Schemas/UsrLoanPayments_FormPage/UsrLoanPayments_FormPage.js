define("UsrLoanPayments_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrLoanPayments"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "ab43b6ab-296b-4454-9ee9-b1855fb46d8d",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_zfd92os",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_zfd92os_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "right-icon",
					"layoutConfig": {},
					"visible": true,
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default",
					"icon": "back-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrLoanPaymentAmount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_prmrhxp",
					"labelPosition": "auto",
					"control": "$NumberAttribute_prmrhxp",
					"visible": true,
					"placeholder": "#ResourceString(NumberInput_21mwkgm_placeholder)#",
					"tooltip": "#ResourceString(NumberInput_21mwkgm_tooltip)#"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrNumberOfPayments",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_clwtssk",
					"labelPosition": "auto",
					"control": "$NumberAttribute_clwtssk"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrMonthlyPayment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_yf363og",
					"labelPosition": "auto",
					"control": "$NumberAttribute_yf363og",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_qkvb0ct",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_jhb1tsp",
					"labelPosition": "auto",
					"control": "$LookupAttribute_jhb1tsp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_opau6ie",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_opau6ie_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_qkvb0ct",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_us34sgv",
					"labelPosition": "auto",
					"control": "$StringAttribute_us34sgv",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_7j4uemq",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_7j4uemq_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_lnf7tc0",
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
				"parentName": "ExpansionPanel_7j4uemq",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_m483jee",
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
				"parentName": "GridContainer_lnf7tc0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_q2q8f7e",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_q2q8f7e_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrLoanPaymentSignature",
							"defaultValues": [
								{
									"attributeName": "UsrParentLoanPayment",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_m483jee",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_0et65nt",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_0et65nt_caption)#",
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
							"dataSourceName": "GridDetail_il7v19uDS"
						}
					}
				},
				"parentName": "FlexContainer_m483jee",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_uu46k9o",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_uu46k9o_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_m483jee",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_rg8ftxq",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_rg8ftxq_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_il7v19u"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_uu46k9o",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ng8ffjl",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ng8ffjl_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrLoanPaymentSignature"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_uu46k9o",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_u999s3j",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_u999s3j_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_il7v19u"
					]
				},
				"parentName": "FlexContainer_m483jee",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_lta6k6l",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
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
				"parentName": "ExpansionPanel_7j4uemq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_il7v19u",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"selectedRows": "$GridDetail_il7v19u_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "GridDetail_il7v19u_SelectedRows"
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_il7v19u",
					"primaryColumnName": "GridDetail_il7v19uDS_Id",
					"columns": [
						{
							"id": "434a48d8-037b-9387-d121-5e7a093d6bb6",
							"code": "GridDetail_il7v19uDS_UsrContact",
							"path": "UsrContact",
							"caption": "#ResourceString(GridDetail_il7v19uDS_UsrContact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "6c6f5016-0e83-50a7-cedc-669589fae77d",
							"code": "GridDetail_il7v19uDS_UsrSignatureSet",
							"path": "UsrSignatureSet",
							"caption": "#ResourceString(GridDetail_il7v19uDS_UsrSignatureSet)#",
							"dataValueType": 12
						},
						{
							"id": "da5c2ba2-7885-d19c-8023-b288130787bb",
							"code": "GridDetail_il7v19uDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_il7v19uDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				},
				"parentName": "GridContainer_lta6k6l",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"UsrName": {
					"modelConfig": {
						"path": "PDS.UsrName"
					}
				},
				"NumberAttribute_prmrhxp": {
					"modelConfig": {
						"path": "PDS.UsrLoanPaymentAmount"
					},
					"validators": {
						"MySuperValidator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 100,
								"message": "Price cannot be less than 100"
							}
						}
					}
				},
				"LookupAttribute_jhb1tsp": {
					"modelConfig": {
						"path": "PDS.UsrPaymentStatus"
					}
				},
				"StringAttribute_us34sgv": {
					"modelConfig": {
						"path": "PDS.UsrComment"
					}
				},
				"NumberAttribute_clwtssk": {
					"modelConfig": {
						"path": "PDS.UsrNumberOfPayments"
					},
					"validators": {
						"MySuperValidator": {
							"type": "usr.DGValidator",
							"params": {
								"minValue": 1,
								"message": "Number of payments cannot be less than 1"
							}
						}
					}
				},
				"NumberAttribute_yf363og": {
					"modelConfig": {
						"path": "PDS.UsrMonthlyPayment"
					}
				},
				"GridDetail_il7v19u": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_il7v19uDS"
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_il7v19uDS_UsrContact": {
								"modelConfig": {
									"path": "GridDetail_il7v19uDS.UsrContact"
								}
							},
							"GridDetail_il7v19uDS_UsrSignatureSet": {
								"modelConfig": {
									"path": "GridDetail_il7v19uDS.UsrSignatureSet"
								}
							},
							"GridDetail_il7v19uDS_CreatedOn": {
								"modelConfig": {
									"path": "GridDetail_il7v19uDS.CreatedOn"
								}
							},
							"GridDetail_il7v19uDS_Id": {
								"modelConfig": {
									"path": "GridDetail_il7v19uDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "UsrLoanPayments"
					},
					"scope": "page"
				},
				"GridDetail_il7v19uDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "UsrLoanPaymentSignature",
						"attributes": {
							"UsrContact": {
								"path": "UsrContact"
							},
							"UsrSignatureSet": {
								"path": "UsrSignatureSet"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_il7v19uDS": [
					{
						"attributePath": "UsrParentLoanPayment",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if(request.attributeName === 'NumberAttribute_prmrhxp' || request.attributeName === 'NumberAttribute_clwtssk'){
						var amount  = await request.$context.NumberAttribute_prmrhxp;
						var numberOfPayments = await request.$context.NumberAttribute_clwtssk;
						var monthlyPayment = 0;
						if(numberOfPayments > 0){
							monthlyPayment = amount / numberOfPayments;
						}
						request.$context.NumberAttribute_yf363og = monthlyPayment;
					}
					return next?.handle(request);
				}
			},
			{
				request: "usr.MyButtonRequest",
				handler: async (request, next) => {
					this.console.log("Buttons works...");
					Terrasoft.showInformation("My button was pressed.");
					var amount = await request.$context.NumberAttribute_prmrhxp;
					this.console.log("Amount = " + amount);
					/*Example of read lookup*/
					var paymentStatusObject = await request.$context.LookupAttribute_jhb1tsp;
					if(paymentStatusObject){
						var paymentStatusId = paymentStatusObject.value;
						var paymentStatusName = paymentStatusObject.displayValue;
						this.console.log('Status id: '+ paymentStatusId);
						this.console.log('Status name: '+ paymentStatusName);
					}
					
					return next?.handle(request);
				}
		}]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.DGValidator":{
				validator: function (config){
					return function(control){
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if(valueIsCorrect){
							result = null;
						} else{
							result = {
								"usr.DGValidator":{
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name:"minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});