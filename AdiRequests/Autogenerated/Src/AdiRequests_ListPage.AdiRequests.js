define("AdiRequests_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_AdiName",
							"caption": "#ResourceString(PDS_AdiName)#",
							"dataValueType": 1,
							"width": 114
						},
						{
							"id": "8b97c04b-01c5-6fe0-4565-ca17b966e913",
							"code": "PDS_AdiStatus",
							"path": "AdiStatus",
							"caption": "#ResourceString(PDS_AdiStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "AdiRequestStatus",
							"width": 114
						},
						{
							"id": "97e5b77b-2c06-57f0-6f94-253be696185d",
							"code": "PDS_AdiCategory",
							"path": "AdiCategory",
							"caption": "#ResourceString(PDS_AdiCategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "AdiRequestCategory",
							"width": 114
						},
						{
							"id": "763f5b60-a00a-bf9e-c547-f3f80303557b",
							"code": "PDS_AdiSubcategory",
							"path": "AdiSubcategory",
							"caption": "#ResourceString(PDS_AdiSubcategory)#",
							"dataValueType": 10,
							"referenceSchemaName": "AdiSubcategory",
							"width": 127
						},
						{
							"id": "f9c23dfe-99f7-6f18-ee27-7e12b3cae018",
							"code": "PDS_AdiCode",
							"path": "AdiCode",
							"caption": "#ResourceString(PDS_AdiCode)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 135
						},
						{
							"id": "d0f92303-97fe-fad2-e775-e54b63c654ae",
							"code": "PDS_AdiCodeType",
							"path": "AdiCode.Type",
							"caption": "#ResourceString(PDS_AdiCodeType)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContactType",
							"width": 114
						},
						{
							"id": "295039cd-1bcf-dc1c-4062-32160a1f21fe",
							"code": "PDS_AdiExpensesAdiRequestIdCount7c190867",
							"path": "[AdiExpenses:AdiRequest].Id",
							"caption": "#ResourceString(PDS_AdiExpensesAdiRequestIdCount7c190867)#",
							"dataValueType": 4,
							"referenceSchemaName": "AdiExpenses",
							"width": 197
						},
						{
							"id": "1d5ca528-1f1b-0262-901c-5e0cbdfd20cc",
							"code": "PDS_AdiExpensesAdiRequestAdiAmountSum4ca0fc80",
							"path": "[AdiExpenses:AdiRequest].AdiAmount",
							"caption": "#ResourceString(PDS_AdiExpensesAdiRequestAdiAmountSum4ca0fc80)#",
							"dataValueType": 6,
							"referenceSchemaName": "AdiExpenses",
							"width": 165
						},
						{
							"id": "fb19f2bf-d46d-b9b1-c93d-2d4b1b630913",
							"code": "PDS_AdiExpensesAdiRequestAdiAmountAvg863e7131",
							"path": "[AdiExpenses:AdiRequest].AdiAmount",
							"caption": "#ResourceString(PDS_AdiExpensesAdiRequestAdiAmountAvg863e7131)#",
							"dataValueType": 6,
							"referenceSchemaName": "AdiExpenses"
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'",
					"selectedRows": "$DataTable_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "DataTable_SelectedRows"
					}
				}
			},
			{
				"operation": "insert",
				"name": "MainFilterContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeftFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_caption)#",
					"folderTree": "FolderTree"
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QuickFilter_giln6x5",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_giln6x5_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "[#currentUserContact#]",
								"checkedState": true
							}
						],
						"entitySchemaName": "Contact",
						"recordsFilter": null
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_giln6x5_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "AdiCode"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_giln6x5_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QuickFilter_379utfc",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_379utfc_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon",
						"defaultValue": "[#currentWeek#]"
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_379utfc_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_379utfc_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_wubccd3",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_wubccd3_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_wubccd3_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"f6b603f8-4e7a-4176-b9b6-314f3bb03008": {
																"filterType": 1,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "AdiStatus.Name"
																},
																"isAggregative": false,
																"dataValueType": 1,
																"rightExpression": {
																	"expressionType": 2,
																	"parameter": {
																		"dataValueType": 1,
																		"value": "New"
																	}
																}
															},
															"ec80b1c3-a33b-4170-a9a5-21852c8e74d7": {
																"filterType": 1,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "AdiStatus.Name"
																},
																"isAggregative": false,
																"dataValueType": 1,
																"rightExpression": {
																	"expressionType": 2,
																	"parameter": {
																		"dataValueType": 1,
																		"value": "In progress"
																	}
																}
															}
														},
														"logicalOperation": 1,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "AdiRequests"
													}
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilter_wubccd3_config_caption)#",
													"hint": "",
													"defaultValue": false,
													"approachState": true,
													"icon": "settings-button-icon",
													"iconPosition": "left-icon"
												}
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_wubccd3_Value"
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RightFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "none",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"targetAttributes": [
						"Items"
					]
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RefreshButtonCaption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "PDS"
						}
					},
					"iconPosition": "only-icon",
					"icon": "reload-button-icon",
					"clickMode": "default"
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_caption)#",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "AdiRequests",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					]
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_i09yg5l",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_lbone6h",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_lbone6h_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_lbone6h_e2f70dae80760e38c3745080f3924b7c",
								"schemaName": "AdiRequests",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "AdiRequests"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "AdiRequests",
							"attributes": {
								"AdiName": {
									"path": "AdiName"
								},
								"AdiStatus": {
									"path": "AdiStatus"
								},
								"AdiCategory": {
									"path": "AdiCategory"
								},
								"AdiSubcategory": {
									"path": "AdiSubcategory"
								},
								"AdiCode": {
									"path": "AdiCode"
								},
								"AdiCodeType": {
									"type": "ForwardReference",
									"path": "AdiCode.Type"
								},
								"AdiExpensesAdiRequestIdCount7c190867": {
									"type": "Aggregation",
									"path": "[AdiExpenses:AdiRequest].Id",
									"aggregationConfig": {
										"aggregationFunction": "Count",
										"filter": null
									}
								},
								"AdiExpensesAdiRequestAdiAmountSum4ca0fc80": {
									"type": "Aggregation",
									"path": "[AdiExpenses:AdiRequest].AdiAmount",
									"aggregationConfig": {
										"aggregationFunction": "Sum"
									}
								},
								"AdiExpensesAdiRequestAdiAmountAvg863e7131": {
									"type": "Aggregation",
									"path": "[AdiExpenses:AdiRequest].AdiAmount",
									"aggregationConfig": {
										"aggregationFunction": "Avg",
										"filter": {
											"items": {
												"fe4398c9-ca1c-4cdb-a631-d4864e6a3859": {
													"filterType": 2,
													"comparisonType": 2,
													"isEnabled": true,
													"trimDateTimeParameterToDate": false,
													"leftExpression": {
														"expressionType": 0,
														"columnPath": "AdiType.Name"
													},
													"isAggregative": false,
													"dataValueType": 1,
													"isNull": false
												}
											},
											"logicalOperation": 0,
											"isEnabled": true,
											"filterType": 6,
											"rootSchemaName": "AdiExpenses"
										}
									}
								}
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_lbone6h_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "green"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id",
					"layoutConfig": {
						"height": 190.44140625
					}
				},
				"parentName": "FlexContainer_i09yg5l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GaugeWidget_bc0rqtd",
				"values": {
					"type": "crt.GaugeWidget",
					"config": {
						"title": "#ResourceString(GaugeWidget_bc0rqtd_title)#",
						"data": {
							"providing": {
								"attribute": "GaugeWidget_bc0rqtd_42fefb93dbae0f573562775ef1fe044a",
								"schemaName": "AdiRequests",
								"filters": {
									"filter": {
										"items": {
											"cd5734a5-f4fd-4695-8791-4c58d38ec5fe": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "AdiStatus.Name"
												},
												"isAggregative": false,
												"dataValueType": 1,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 1,
														"value": "Completed"
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "AdiRequests"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "AdiRequests",
							"attributes": {
								"AdiName": {
									"path": "AdiName"
								},
								"AdiStatus": {
									"path": "AdiStatus"
								},
								"AdiCategory": {
									"path": "AdiCategory"
								},
								"AdiSubcategory": {
									"path": "AdiSubcategory"
								},
								"AdiCode": {
									"path": "AdiCode"
								},
								"AdiCodeType": {
									"type": "ForwardReference",
									"path": "AdiCode.Type"
								},
								"AdiExpensesAdiRequestIdCount7c190867": {
									"type": "Aggregation",
									"path": "[AdiExpenses:AdiRequest].Id",
									"aggregationConfig": {
										"aggregationFunction": "Count",
										"filter": null
									}
								},
								"AdiExpensesAdiRequestAdiAmountSum4ca0fc80": {
									"type": "Aggregation",
									"path": "[AdiExpenses:AdiRequest].AdiAmount",
									"aggregationConfig": {
										"aggregationFunction": "Sum"
									}
								},
								"AdiExpensesAdiRequestAdiAmountAvg863e7131": {
									"type": "Aggregation",
									"path": "[AdiExpenses:AdiRequest].AdiAmount",
									"aggregationConfig": {
										"aggregationFunction": "Avg",
										"filter": {
											"items": {
												"fe4398c9-ca1c-4cdb-a631-d4864e6a3859": {
													"filterType": 2,
													"comparisonType": 2,
													"isEnabled": true,
													"trimDateTimeParameterToDate": false,
													"leftExpression": {
														"expressionType": 0,
														"columnPath": "AdiType.Name"
													},
													"isAggregative": false,
													"dataValueType": 1,
													"isNull": false
												}
											},
											"logicalOperation": 0,
											"isEnabled": true,
											"filterType": 6,
											"rootSchemaName": "AdiExpenses"
										}
									}
								}
							}
						},
						"text": {
							"template": "#ResourceString(GaugeWidget_bc0rqtd_template)#",
							"metricMacros": "{0}"
						},
						"layout": {
							"color": "green"
						},
						"theme": "partial-fill",
						"thresholds": {
							"0": {
								"color": "#00c853"
							},
							"2": {
								"color": "#0058ef"
							},
							"8": {
								"color": "#ff3e13"
							},
							"10": {
								"color": "#ff3e13"
							}
						},
						"min": 0,
						"max": 10,
						"orderDirection": 2
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "FlexContainer_i09yg5l",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_j7z81ey",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Items": {
					"viewModelConfig": {
						"attributes": {
							"PDS_AdiName": {
								"modelConfig": {
									"path": "PDS.AdiName"
								}
							},
							"PDS_AdiStatus": {
								"modelConfig": {
									"path": "PDS.AdiStatus"
								}
							},
							"PDS_AdiCategory": {
								"modelConfig": {
									"path": "PDS.AdiCategory"
								}
							},
							"PDS_AdiSubcategory": {
								"modelConfig": {
									"path": "PDS.AdiSubcategory"
								}
							},
							"PDS_AdiCode": {
								"modelConfig": {
									"path": "PDS.AdiCode"
								}
							},
							"PDS_AdiCodeType": {
								"modelConfig": {
									"path": "PDS.AdiCodeType"
								}
							},
							"PDS_AdiExpensesAdiRequestIdCount7c190867": {
								"modelConfig": {
									"path": "PDS.AdiExpensesAdiRequestIdCount7c190867"
								}
							},
							"PDS_AdiExpensesAdiRequestAdiAmountSum4ca0fc80": {
								"modelConfig": {
									"path": "PDS.AdiExpensesAdiRequestAdiAmountSum4ca0fc80"
								}
							},
							"PDS_AdiExpensesAdiRequestAdiAmountAvg863e7131": {
								"modelConfig": {
									"path": "PDS.AdiExpensesAdiRequestAdiAmountAvg863e7131"
								}
							},
							"PDS_Id": {
								"modelConfig": {
									"path": "PDS.Id"
								}
							}
						}
					},
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting",
							"default": [
								{
									"direction": "asc",
									"columnName": "AdiExpensesAdiRequestAdiAmountSum4ca0fc80"
								}
							]
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							},
							{
								"name": "QuickFilter_giln6x5_Items",
								"loadOnChange": true
							},
							{
								"name": "QuickFilter_379utfc_Items",
								"loadOnChange": true
							},
							{
								"name": "QuickFilter_wubccd3_Items",
								"loadOnChange": true
							}
						]
					}
				},
				"ItemsSorting": {},
				"FolderTree_visible": {
					"value": false
				},
				"FolderTree_items": {
					"isCollection": true,
					"viewModelConfig": {
						"attributes": {
							"Id": {
								"modelConfig": {
									"path": "FolderTree_items_DS.Id"
								}
							},
							"Name": {
								"modelConfig": {
									"path": "FolderTree_items_DS.Name"
								}
							},
							"ParentId": {
								"modelConfig": {
									"path": "FolderTree_items_DS.Parent.Id"
								}
							},
							"FilterData": {
								"modelConfig": {
									"path": "FolderTree_items_DS.FilterData"
								}
							}
						}
					},
					"modelConfig": {
						"path": "FolderTree_items_DS",
						"filterAttributes": [
							{
								"name": "FolderTree_items_DS_filter",
								"loadOnChange": true
							}
						]
					},
					"embeddedModel": {
						"name": "FolderTree_items_DS",
						"config": {
							"type": "crt.EntityDataSource",
							"config": {
								"entitySchemaName": "FolderTree"
							}
						}
					}
				},
				"FolderTree_active_folder_id": {},
				"FolderTree_active_folder_name": {},
				"FolderTree_active_folder_filter": {
					"value": {}
				},
				"FolderTree_items_DS_filter": {
					"value": {
						"isEnabled": true,
						"trimDateTimeParameterToDate": false,
						"filterType": 6,
						"logicalOperation": 0,
						"items": {
							"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
								"isEnabled": true,
								"trimDateTimeParameterToDate": false,
								"filterType": 1,
								"comparisonType": 3,
								"leftExpression": {
									"expressionType": 0,
									"columnPath": "EntitySchemaName"
								},
								"rightExpression": {
									"expressionType": 2,
									"parameter": {
										"dataValueType": 1,
										"value": "AdiRequests"
									}
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
					"hiddenInPageDesigner": true,
					"config": {
						"entitySchemaName": "AdiRequests",
						"attributes": {
							"AdiName": {
								"path": "AdiName"
							},
							"AdiStatus": {
								"path": "AdiStatus"
							},
							"AdiCategory": {
								"path": "AdiCategory"
							},
							"AdiSubcategory": {
								"path": "AdiSubcategory"
							},
							"AdiCode": {
								"path": "AdiCode"
							},
							"AdiCodeType": {
								"type": "ForwardReference",
								"path": "AdiCode.Type"
							},
							"AdiExpensesAdiRequestIdCount7c190867": {
								"type": "Aggregation",
								"path": "[AdiExpenses:AdiRequest].Id",
								"aggregationConfig": {
									"aggregationFunction": "Count",
									"filter": null
								}
							},
							"AdiExpensesAdiRequestAdiAmountSum4ca0fc80": {
								"type": "Aggregation",
								"path": "[AdiExpenses:AdiRequest].AdiAmount",
								"aggregationConfig": {
									"aggregationFunction": "Sum"
								}
							},
							"AdiExpensesAdiRequestAdiAmountAvg863e7131": {
								"type": "Aggregation",
								"path": "[AdiExpenses:AdiRequest].AdiAmount",
								"aggregationConfig": {
									"aggregationFunction": "Avg",
									"filter": {
										"items": {
											"fe4398c9-ca1c-4cdb-a631-d4864e6a3859": {
												"filterType": 2,
												"comparisonType": 2,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "AdiType.Name"
												},
												"isAggregative": false,
												"dataValueType": 1,
												"isNull": false
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "AdiExpenses"
									}
								}
							}
						}
					},
					"scope": "viewElement"
				}
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});