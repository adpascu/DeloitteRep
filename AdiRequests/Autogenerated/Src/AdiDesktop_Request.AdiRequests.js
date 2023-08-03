define("AdiDesktop_Request", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Label_5u2gd0p",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 6,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_5u2gd0p_caption)#)#",
					"labelType": "large-4",
					"labelThickness": "bold",
					"labelEllipsis": false,
					"labelColor": "#FFFFFF",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FixedGridSlot_qwe4asds",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_gmjk7l2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_gmjk7l2_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AdiRequests"
						}
					},
					"clickMode": "default"
				},
				"parentName": "FixedGridSlot_qwe4asds",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChartWidget_lk0me7h",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 6,
						"rowSpan": 8
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_lk0me7h_title)#",
						"color": "green",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"type": "doughnut",
								"label": "#ResourceString(ChartWidget_lk0me7h_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_lk0me7h_fa9fdc04560f581d763ba8624a22c869",
										"schemaName": "AdiExpenses",
										"filters": {
											"filter": {
												"items": {
													"6829625a-0c4e-48be-b7ed-9779d22a0eca": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "AdiRequest.AdiCode"
														},
														"isAggregative": false,
														"dataValueType": 0,
														"referenceSchemaName": "Contact",
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 2
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "AdiRequest.AdiSubcategory"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "AdiExpenses"
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
														"columnPath": "AdiAmount"
													},
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "AdiRequest.AdiSubcategory"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": null
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "FixedGridSlot_qwe4asds",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});