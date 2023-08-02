define("AdiRequests_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"visible": true,
					"styleType": "fullyColored",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "#000000",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "crt-color-primary-white",
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "AdiRequests"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "8806a7dd-3cb7-4bd7-bc68-3178560ca4fb",
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
				"name": "Button_a33tlpr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_a33tlpr_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "PDS"
						}
					},
					"clickMode": "default",
					"icon": "reload-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_dzzovmi",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "medium"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EntityStageProgressBar_z1gzz9f",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": true,
					"askUserToChangeSchema": true,
					"entityName": "AdiRequests",
					"visible": true
				},
				"parentName": "GridContainer_dzzovmi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdiName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.AdiName",
					"control": "$AdiName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ah2v1yp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_mizvhuz",
					"labelPosition": "auto",
					"control": "$LookupAttribute_mizvhuz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ControlAction_kpx7j46",
				"values": {
					"code": "goToRecordList",
					"type": "crt.ComboboxAction",
					"icon": "combobox-go-to-source",
					"caption": "ComboBox.IsGoToSourceAllowedTooltip",
					"clicked": {
						"request": "crt.OpenLookupSourceRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ah2v1yp",
				"propertyName": "controlActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_9mfw4lu",
				"values": {
					"for": "TabPanel_wsug6ju",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"fitContent": true,
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_pt0lz7l",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_f518h1k",
					"labelPosition": "auto",
					"control": "$LookupAttribute_f518h1k",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ControlAction_ab8sdp4",
				"values": {
					"code": "goToRecordList",
					"type": "crt.ComboboxAction",
					"icon": "combobox-go-to-source",
					"caption": "ComboBox.IsGoToSourceAllowedTooltip",
					"clicked": {
						"request": "crt.OpenLookupSourceRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_pt0lz7l",
				"propertyName": "controlActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_4n7e8qt",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_nhs92o3",
					"labelPosition": "auto",
					"control": "$NumberAttribute_nhs92o3",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Approval_5gwmqvv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Approval",
					"activeColor": "white",
					"inactiveColor": "white",
					"items": [],
					"entityName": "AdiRequests",
					"approvalEntityName": "SysApproval",
					"visible": true,
					"hiddenWhenNoData": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TabPanel_wsug6ju",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": true,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_253k4mq",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_253k4mq_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "default-tab-icon"
				},
				"parentName": "TabPanel_wsug6ju",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_n9j2xau",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_253k4mq",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_tmz3wv1",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_tmz3wv1_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_n9j2xau",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile_mun5m8l",
				"values": {
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$LookupAttribute_mizvhuz"
				},
				"parentName": "TabContainer_253k4mq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mdoijai",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "TabContainer_253k4mq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmailInput_jfop4ro",
				"values": {
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.AdiCodeEmail",
					"control": "$AdiCodeEmail",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(EmailInput_jfop4ro_caption)#",
					"readonly": true
				},
				"parentName": "FlexContainer_mdoijai",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_0097zms",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_bti7qrp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_hzf68v5",
					"labelPosition": "auto",
					"control": "$LookupAttribute_hzf68v5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_0097zms",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ss8wjj0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ifpeedy",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ifpeedy",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_0097zms",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_gbvb3a3",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gbvb3a3_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ss8wjj0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_st6rtwl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_kg0tkvr",
					"labelPosition": "auto",
					"control": "$LookupAttribute_kg0tkvr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GridContainer_0097zms",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_4tleqxt",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4tleqxt_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_st6rtwl",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_wxk5px7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 2
					},
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.StringAttribute_khn62f8",
					"labelPosition": "auto",
					"control": "$StringAttribute_khn62f8",
					"multiline": false,
					"visible": true,
					"placeholder": "#ResourceString(Input_wxk5px7_placeholder)#",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_bzvfmfp",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_Feedback",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Label_77ekkdj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_77ekkdj_caption)#)#",
					"labelType": "caption-large",
					"labelThickness": "bold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GridContainer_Feedback",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_c20jk9y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_qklhr6e",
					"labelPosition": "above",
					"control": "$LookupAttribute_qklhr6e",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_Feedback",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_egrazjk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_egrazjk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_c20jk9y",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_ogcu91i",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_vyh1adp",
					"labelPosition": "above",
					"control": "$StringAttribute_vyh1adp",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "",
					"multiline": false
				},
				"parentName": "GridContainer_Feedback",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_pyhwkoi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
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
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_Feedback",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Button_tjhqxm9",
				"values": {
					"layoutConfig": {},
					"type": "crt.Button",
					"caption": "#ResourceString(Button_tjhqxm9_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "right-icon",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "AdiProcess_7eafffa",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RequestId"
						}
					},
					"clickMode": "default",
					"icon": "horn-button-icon"
				},
				"parentName": "FlexContainer_pyhwkoi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_c3jodbk",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_c3jodbk_title)#",
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
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_1ykr0al",
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
				"parentName": "ExpansionPanel_c3jodbk",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_a0mk76x",
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
				"parentName": "GridContainer_1ykr0al",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_4nkda6i",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_4nkda6i_caption)#",
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
							"dataSourceName": "ApprovalList_ilxu2g2DS"
						}
					}
				},
				"parentName": "FlexContainer_a0mk76x",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SearchFilter_39vwjwy",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_39vwjwy_placeholder)#",
					"targetAttributes": [
						"ApprovalList_ilxu2g2"
					]
				},
				"parentName": "FlexContainer_a0mk76x",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ApprovalList_ilxu2g2",
				"values": {
					"type": "crt.ApprovalList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "RecordId",
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"features": {
						"editable": false
					},
					"entityName": "AdiRequests",
					"approvalEntityName": "SysApproval",
					"items": "$ApprovalList_ilxu2g2",
					"primaryColumnName": "ApprovalList_ilxu2g2DS_Id",
					"columns": [
						{
							"id": "a52253df-ac5f-9d6e-b6b6-cd5316c69db6",
							"code": "ApprovalList_ilxu2g2DS_VisaOwner",
							"caption": "#ResourceString(ApprovalList_ilxu2g2DS_VisaOwner)#",
							"dataValueType": 10,
							"width": 175
						},
						{
							"id": "c34c8c4c-e639-7679-a488-6ea3d99ea6ca",
							"code": "ApprovalList_ilxu2g2DS_Objective",
							"caption": "#ResourceString(ApprovalList_ilxu2g2DS_Objective)#",
							"dataValueType": 30,
							"width": 175
						},
						{
							"id": "878b2c8e-55ed-ba88-4a11-7106dda730f7",
							"code": "ApprovalList_ilxu2g2DS_CreatedOn",
							"caption": "#ResourceString(ApprovalList_ilxu2g2DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 175
						},
						{
							"id": "aff1f850-26e7-4444-4842-5943517cfaaf",
							"code": "ApprovalList_ilxu2g2DS_SetDate",
							"caption": "#ResourceString(ApprovalList_ilxu2g2DS_SetDate)#",
							"dataValueType": 7,
							"width": 175
						},
						{
							"id": "a0ac0b35-ad34-9b4f-f527-cd0e0485484f",
							"code": "ApprovalList_ilxu2g2DS_SetBy",
							"caption": "#ResourceString(ApprovalList_ilxu2g2DS_SetBy)#",
							"dataValueType": 10,
							"width": 175
						},
						{
							"id": "5ebf6aad-a26e-922c-4a75-fa8413d2fe04",
							"code": "ApprovalList_ilxu2g2DS_Status",
							"caption": "#ResourceString(ApprovalList_ilxu2g2DS_Status)#",
							"dataValueType": 10,
							"width": 175
						}
					],
					"visible": true
				},
				"parentName": "ExpansionPanel_c3jodbk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_673g25i",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_673g25i_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_my8tm3e",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
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
				"parentName": "TabContainer_673g25i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_bedbthg",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_bedbthg_title)#",
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
				"parentName": "TabContainer_673g25i",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_foxdyvz",
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
				"parentName": "ExpansionPanel_bedbthg",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_hxy5nbq",
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
				"parentName": "GridContainer_foxdyvz",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_n0ljmpg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_n0ljmpg_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AdiExpenses",
							"defaultValues": [
								{
									"attributeName": "AdiRequest",
									"value": "$Id"
								}
							]
						}
					},
					"menuItems": [],
					"clickMode": "default",
					"visible": true
				},
				"parentName": "FlexContainer_hxy5nbq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_et23i5x",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_et23i5x_caption)#",
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
							"dataSourceName": "GridDetail_u41zrewDS"
						}
					}
				},
				"parentName": "FlexContainer_hxy5nbq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_r7q5yw5",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_r7q5yw5_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_hxy5nbq",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_hagrtms",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_hagrtms_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_u41zrew"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_r7q5yw5",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ep4bo1s",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ep4bo1s_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AdiExpenses"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_r7q5yw5",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_7847uct",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_7847uct_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_u41zrew"
					]
				},
				"parentName": "FlexContainer_hxy5nbq",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_19esddn",
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
				"parentName": "ExpansionPanel_bedbthg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_u41zrew",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"selectedRows": "$GridDetail_u41zrew_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "GridDetail_u41zrew_SelectedRows"
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_u41zrew",
					"primaryColumnName": "GridDetail_u41zrewDS_Id",
					"columns": [
						{
							"id": "ba02eef7-c9bd-83d6-8594-72552f886ba2",
							"code": "GridDetail_u41zrewDS_AdiComment",
							"caption": "#ResourceString(GridDetail_u41zrewDS_AdiComment)#",
							"dataValueType": 27
						},
						{
							"id": "b35920f1-1e1a-7355-1af2-6364b4f07191",
							"code": "GridDetail_u41zrewDS_AdiType",
							"path": "AdiType",
							"caption": "#ResourceString(GridDetail_u41zrewDS_AdiType)#",
							"dataValueType": 10,
							"referenceSchemaName": "AdiRequestExpenseType",
							"width": 165.984375
						},
						{
							"id": "2641da01-5910-5cbf-0641-df77a65197f0",
							"code": "GridDetail_u41zrewDS_AdiAmount",
							"path": "AdiAmount",
							"caption": "#ResourceString(GridDetail_u41zrewDS_AdiAmount)#",
							"dataValueType": 6,
							"width": 218
						},
						{
							"id": "ac96f9ba-3b25-a046-3fa4-2b2517e7ba41",
							"code": "GridDetail_u41zrewDS_AdiImported",
							"path": "AdiImported",
							"caption": "#ResourceString(GridDetail_u41zrewDS_AdiImported)#",
							"dataValueType": 12
						}
					]
				},
				"parentName": "GridContainer_19esddn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_ohxtf3c",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(TabContainer_ohxtf3c_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "open-book-tab-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_tjw938y",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "TabContainer_ohxtf3c",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_h1t9md9",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_h1t9md9_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "FlexContainer_tjw938y",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddNextStepBtn_c0sfdvh",
				"values": {
					"type": "crt.Button",
					"caption": "NextSteps.Caption",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"layoutConfig": {}
				},
				"parentName": "FlexContainer_tjw938y",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreateTaskBtn_w28xn6w",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateTaskBtn_w28xn6w_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddNextStepRequest",
						"params": {
							"entityName": "Activity"
						}
					}
				},
				"parentName": "GridDetailAddNextStepBtn_c0sfdvh",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateEmailBtn_l699oaz",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateEmailBtn_l699oaz_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateEmailRequest"
					}
				},
				"parentName": "GridDetailAddNextStepBtn_c0sfdvh",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NextSteps_frrvath",
				"values": {
					"type": "crt.NextSteps",
					"masterSchemaId": "$Id",
					"layoutConfig": {},
					"masterSchemaName": "AdiRequests"
				},
				"parentName": "TabContainer_ohxtf3c",
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
				"AdiName": {
					"modelConfig": {
						"path": "PDS.AdiName"
					}
				},
				"StringAttribute_khn62f8": {
					"modelConfig": {
						"path": "PDS.AdiColumn2"
					}
				},
				"LookupAttribute_mizvhuz": {
					"modelConfig": {
						"path": "PDS.AdiCode"
					}
				},
				"LookupAttribute_f518h1k": {
					"modelConfig": {
						"path": "PDS.AdiOwner"
					}
				},
				"LookupAttribute_hzf68v5": {
					"modelConfig": {
						"path": "PDS.AdiStatus"
					}
				},
				"LookupAttribute_ifpeedy": {
					"modelConfig": {
						"path": "PDS.AdiCategory"
					}
				},
				"LookupAttribute_kg0tkvr": {
					"modelConfig": {
						"path": "PDS.AdiSubcategory"
					}
				},
				"NumberAttribute_nhs92o3": {
					"modelConfig": {
						"path": "PDS.AdiExpencesTotl"
					}
				},
				"AdiCodeEmail": {
					"modelConfig": {
						"path": "PDS.AdiCodeEmail"
					}
				},
				"GridDetail_u41zrew": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_u41zrewDS"
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_u41zrewDS_AdiComment": {
								"modelConfig": {
									"path": "GridDetail_u41zrewDS.AdiComment"
								}
							},
							"GridDetail_u41zrewDS_AdiType": {
								"modelConfig": {
									"path": "GridDetail_u41zrewDS.AdiType"
								}
							},
							"GridDetail_u41zrewDS_AdiAmount": {
								"modelConfig": {
									"path": "GridDetail_u41zrewDS.AdiAmount"
								}
							},
							"GridDetail_u41zrewDS_AdiImported": {
								"modelConfig": {
									"path": "GridDetail_u41zrewDS.AdiImported"
								}
							},
							"GridDetail_u41zrewDS_Id": {
								"modelConfig": {
									"path": "GridDetail_u41zrewDS.Id"
								}
							}
						}
					}
				},
				"ApprovalList_ilxu2g2": {
					"isCollection": true,
					"modelConfig": {
						"path": "ApprovalList_ilxu2g2DS",
						"sortingConfig": {
							"default": [
								{
									"columnName": "CreatedOn",
									"direction": "desc"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"ApprovalList_ilxu2g2DS_VisaOwner": {
								"modelConfig": {
									"path": "ApprovalList_ilxu2g2DS.VisaOwner"
								}
							},
							"ApprovalList_ilxu2g2DS_Objective": {
								"modelConfig": {
									"path": "ApprovalList_ilxu2g2DS.Objective"
								}
							},
							"ApprovalList_ilxu2g2DS_CreatedOn": {
								"modelConfig": {
									"path": "ApprovalList_ilxu2g2DS.CreatedOn"
								}
							},
							"ApprovalList_ilxu2g2DS_SetDate": {
								"modelConfig": {
									"path": "ApprovalList_ilxu2g2DS.SetDate"
								}
							},
							"ApprovalList_ilxu2g2DS_SetBy": {
								"modelConfig": {
									"path": "ApprovalList_ilxu2g2DS.SetBy"
								}
							},
							"ApprovalList_ilxu2g2DS_Status": {
								"modelConfig": {
									"path": "ApprovalList_ilxu2g2DS.Status"
								}
							},
							"ApprovalList_ilxu2g2DS_Id": {
								"modelConfig": {
									"path": "ApprovalList_ilxu2g2DS.Id"
								}
							}
						}
					}
				},
				"LookupAttribute_qklhr6e": {
					"modelConfig": {
						"path": "PDS.AdiFedbackScore"
					}
				},
				"StringAttribute_vyh1adp": {
					"modelConfig": {
						"path": "PDS.AdiComment"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "AdiRequests",
						"attributes": {
							"AdiCodeEmail": {
								"path": "AdiCode.Email",
								"type": "ForwardReference"
							}
						}
					},
					"scope": "page"
				},
				"GridDetail_u41zrewDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "AdiExpenses",
						"attributes": {
							"AdiComment": {
								"path": "AdiComment"
							},
							"AdiType": {
								"path": "AdiType"
							},
							"AdiAmount": {
								"path": "AdiAmount"
							},
							"AdiImported": {
								"path": "AdiImported"
							}
						}
					}
				},
				"ApprovalList_ilxu2g2DS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "SysApproval",
						"attributes": {
							"VisaOwner": {
								"path": "VisaOwner"
							},
							"Objective": {
								"path": "Objective"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							},
							"SetDate": {
								"path": "SetDate"
							},
							"SetBy": {
								"path": "SetBy"
							},
							"Status": {
								"path": "Status"
							}
						}
					}
				},
				"GridDetail_dl0x5frDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "AdiEntity_6662a68",
						"attributes": {
							"AdiName": {
								"path": "AdiName"
							}
						}
					}
				},
				"GridDetail_dp0003pDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "VisaStatus",
						"attributes": {
							"Name": {
								"path": "Name"
							},
							"VwVisaStatusCreatedOnTopOne7fee7e7c": {
								"type": "Aggregation",
								"path": "[VwVisa:Status].CreatedOn",
								"aggregationConfig": {
									"aggregationFunction": "Min",
									"sortByColumn": "CreatedOn",
									"sortByDirection": 1,
									"filter": null
								}
							},
							"ModifiedOn": {
								"path": "ModifiedOn"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_u41zrewDS": [
					{
						"attributePath": "AdiRequest",
						"relationPath": "PDS.Id"
					}
				],
				"ApprovalList_ilxu2g2DS": [
					{
						"attributePath": "EntityId",
						"relationPath": "PDS.Id"
					}
				],
				"GridDetail_dl0x5frDS": [
					{
						"attributePath": "Id",
						"relationPath": "ApprovalList_ilxu2g2DS.Status"
					}
				],
				"GridDetail_dp0003pDS": [
					{
						"attributePath": "Id",
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