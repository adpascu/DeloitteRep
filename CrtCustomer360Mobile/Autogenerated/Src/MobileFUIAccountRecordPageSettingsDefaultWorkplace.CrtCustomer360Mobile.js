[
	{
		"operation": "insert",
		"name": "settings",
		"values": {
			"entitySchemaName": "Account",
			"settingsType": "RecordPage",
			"localizableStrings": {},
			"columnSets": [],
			"operation": "insert",
			"details": [],
			"diffV2": "[{\"operation\":\"merge\",\"name\":\"ViewConfig\",\"values\":{\"header\":{\"name\":\"Account_Header\",\"type\":\"AccountCompactProfile\"}}},{\"operation\":\"insert\",\"name\":\"Account_Model_Column_Name\",\"parentName\":\"Account_Model\",\"propertyName\":\"columns\",\"values\":{\"alias\":\"Account.Name\",\"orderDirection\":0,\"orderPosition\":-1,\"isVisible\":true,\"expression\":{\"expressionType\":0,\"columnPath\":\"Name\"}}},{\"operation\":\"insert\",\"name\":\"Account_Model_Column_City_TimeZone\",\"parentName\":\"Account_Model\",\"propertyName\":\"columns\",\"values\":{\"alias\":\"Account.City.TimeZone\",\"orderDirection\":0,\"orderPosition\":-1,\"isVisible\":true,\"expression\":{\"expressionType\":0,\"columnPath\":\"City.TimeZone\"}}},{\"operation\":\"insert\",\"name\":\"Account_Model_Column_Country\",\"parentName\":\"Account_Model\",\"propertyName\":\"columns\",\"values\":{\"alias\":\"Account.Country\",\"orderDirection\":0,\"orderPosition\":-1,\"isVisible\":true,\"expression\":{\"expressionType\":0,\"columnPath\":\"Country\"}}},{\"operation\":\"insert\",\"name\":\"Account_Model_Column_AccountLogo\",\"parentName\":\"Account_Model\",\"propertyName\":\"columns\",\"values\":{\"alias\":\"Account.AccountLogo\",\"orderDirection\":0,\"orderPosition\":-1,\"isVisible\":true,\"expression\":{\"expressionType\":0,\"columnPath\":\"AccountLogo\"}}},{\"operation\":\"merge\",\"name\":\"Account_RelatedTab\",\"values\":{\"position\":3}},{\"operation\":\"insert\",\"name\":\"FileDetailV2EmbeddedDetail_Tab\",\"parentName\":\"Account_Tabs\",\"propertyName\":\"items\",\"values\":{\"visible\":\"#Not($_isNew)\",\"position\":2,\"text\":\"#ResourceSystemString(Tab.Attachments)\",\"body\":{}}},{\"operation\":\"insert\",\"name\":\"FileDetailV2EmbeddedDetail_Tab_Body\",\"parentName\":\"FileDetailV2EmbeddedDetail_Tab\",\"propertyName\":\"body\",\"values\":{\"type\":\"Attachments\",\"controller\":\"$Account.AccountFile\"}},{\"operation\":\"merge\",\"name\":\"Account_Controllers\",\"values\":{\"AccountFile\":{}}},{\"operation\":\"insert\",\"name\":\"Account_FileDetailV2EmbeddedDetail_Controller\",\"parentName\":\"Account_Controllers\",\"propertyName\":\"AccountFile\",\"values\":{\"type\":\"AttachmentsController\",\"editColumns\":[],\"model\":{}}},{\"operation\":\"insert\",\"name\":\"Account_FileDetailV2EmbeddedDetail_Model\",\"parentName\":\"Account_FileDetailV2EmbeddedDetail_Controller\",\"propertyName\":\"model\",\"values\":{\"type\":\"AttachmentsModel\",\"parentColumnName\":\"Account\",\"masterColumnName\":\"Id\",\"entityName\":\"AccountFile\",\"columns\":[]}},{\"operation\":\"insert\",\"name\":\"AccountFeed_Tab\",\"parentName\":\"Account_Tabs\",\"propertyName\":\"items\",\"values\":{\"visible\":\"#Not($_isNew)\",\"position\":1,\"text\":\"#ResourceSystemString(Tab.Feed)\",\"body\":{}}},{\"operation\":\"insert\",\"name\":\"AccountFeed_Tab_Body\",\"parentName\":\"AccountFeed_Tab\",\"propertyName\":\"body\",\"values\":{\"type\":\"Messaging\",\"controller\":\"$Account.SocialMessage\"}},{\"operation\":\"merge\",\"name\":\"Account_Controllers\",\"values\":{\"SocialMessage\":{}}},{\"operation\":\"insert\",\"name\":\"AccountFeed_Tab_Controller\",\"parentName\":\"Account_Controllers\",\"propertyName\":\"SocialMessage\",\"values\":{\"type\":\"MessagingController\",\"editColumns\":[],\"model\":{}}},{\"operation\":\"insert\",\"name\":\"AccountFeed_Tab_Model\",\"parentName\":\"AccountFeed_Tab_Controller\",\"propertyName\":\"model\",\"values\":{\"type\":\"EsnMessagingModel\",\"parentRecordId\":\"$Id\",\"entityName\":\"Account\"}},{\"operation\":\"remove\",\"name\":\"AccountAddressDetailV2EmbeddedDetail_ItemLayout_Address\"},{\"operation\":\"remove\",\"name\":\"AccountAddressDetailV2EmbeddedDetail_ItemLayout_AddressType\"},{\"operation\":\"remove\",\"name\":\"AccountAddressDetailV2EmbeddedDetail_ItemLayout_City\"},{\"operation\":\"remove\",\"name\":\"AccountAddressDetailV2EmbeddedDetail_ItemLayout_Region\"},{\"operation\":\"remove\",\"name\":\"AccountAddressDetailV2EmbeddedDetail_ItemLayout_Country\"},{\"operation\":\"remove\",\"name\":\"AccountAddressDetailV2EmbeddedDetail_ItemLayout_Zip\"},{\"operation\":\"merge\",\"name\":\"AccountAddressDetailV2EmbeddedDetail_ItemLayout\",\"values\":{\"type\":\"AddressPreview\"}},{\"operation\":\"merge\",\"name\":\"AccountAddressDetailV2EmbeddedDetail\",\"values\":{\"useSeparator\":false}}]"
		}
	},
	{
		"operation": "insert",
		"name": "primaryColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "Account",
			"caption": "primaryColumnSetAccount_caption",
			"operation": "insert",
			"position": 0
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "profileColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "Account",
			"caption": "profileColumnSetAccount_caption",
			"position": 1,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "f6bd64d1-8b2c-41e1-b5d4-8fba11d9d9b3",
		"values": {
			"row": 0,
			"content": "Owner",
			"columnName": "Owner",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "e98bb874-5238-496c-a45c-ba4569db1fcd",
		"values": {
			"row": 1,
			"content": "Primary contact",
			"columnName": "PrimaryContact",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "89f0dff5-d5bd-415d-909d-70bf03f4eb8c",
		"values": {
			"row": 2,
			"content": "Category",
			"columnName": "AccountCategory",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "07858e5f-8c46-4c35-8e9e-f2ecdae05842",
		"values": {
			"row": 3,
			"content": "Industry",
			"columnName": "Industry",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "73919f80-ed3e-4ee3-9b93-6a48d9c2a591",
		"values": {
			"row": 4,
			"content": "Web",
			"columnName": "Web",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "121919f7-3dea-4805-86a3-c11628c99f51",
		"values": {
			"row": 5,
			"content": "Primary phone",
			"columnName": "Phone",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "infoColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "Account",
			"caption": "infoColumnSetAccount_caption",
			"position": 2,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "a8db2568-a43c-4707-83ec-3fe2235bc89e",
		"values": {
			"row": 0,
			"content": "Also known as",
			"columnName": "AlternativeName",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "c212d8cf-1072-4a81-8c8f-fc1a59c9af61",
		"values": {
			"row": 1,
			"content": "Annual revenue",
			"columnName": "AnnualRevenue",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "7740f494-5644-4391-a13c-6eec539dba30",
		"values": {
			"row": 2,
			"content": "Business entity",
			"columnName": "Ownership",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "ca8771cb-e42c-4b7b-98d3-195a367b022e",
		"values": {
			"row": 3,
			"content": "No. of employees",
			"columnName": "EmployeesNumber",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "AccountAddressDetailV2EmbeddedDetail",
		"values": {
			"items": [],
			"rows": 1,
			"isDetail": true,
			"filter": {
				"detailColumn": "Account",
				"masterColumn": "Id"
			},
			"detailSchemaName": "AccountAddressDetailV2",
			"entitySchemaName": "AccountAddress",
			"caption": "AccountAddressDetailV2EmbeddedDetailAccount_caption",
			"operation": "insert",
			"position": 3
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "2da5f545-7bfa-4f5d-b942-d63e9c5216d9",
		"values": {
			"row": 0,
			"content": "Address type",
			"columnName": "AddressType",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "AccountAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "2c336ff5-e1dd-4326-8ebd-f1c686f13720",
		"values": {
			"row": 1,
			"content": "Address",
			"columnName": "Address",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "AccountAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "47a73d75-a377-4ac6-94f3-cdf09a97d9be",
		"values": {
			"row": 2,
			"content": "City",
			"columnName": "City",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "AccountAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "efcbf76a-e861-4c55-85ff-d3583a198517",
		"values": {
			"row": 3,
			"content": "State/province",
			"columnName": "Region",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "AccountAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "c600f9a4-0eb7-44f4-b61a-d75fecedcbec",
		"values": {
			"row": 4,
			"content": "Country",
			"columnName": "Country",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "AccountAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "3a455e66-d474-4113-ad0f-972cdf0d0841",
		"values": {
			"row": 5,
			"content": "ZIP/postal code",
			"columnName": "Zip",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "AccountAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "AccountContactsDetailV2EmbeddedDetail",
		"values": {
			"items": [],
			"rows": 1,
			"isDetail": true,
			"filter": {
				"detailColumn": "Account",
				"masterColumn": "Id"
			},
			"detailSchemaName": "AccountContactsDetailV2",
			"entitySchemaName": "Contact",
			"caption": "AccountContactsDetailV2EmbeddedDetailAccount_caption",
			"position": 4,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "03fe5849-97b5-4363-8e5d-9fddb8b6f59a",
		"values": {
			"row": 0,
			"content": "Full name",
			"columnName": "Name",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "AccountContactsDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "40a08f6f-624b-4b6e-9cc0-a8f85f88e55d",
		"values": {
			"row": 1,
			"content": "Job title",
			"columnName": "Job",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "AccountContactsDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "c227d1e0-77a6-40bf-9717-ff03cd4175cb",
		"values": {
			"row": 2,
			"content": "Mobile phone",
			"columnName": "MobilePhone",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "AccountContactsDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "3a300039-6a98-4a35-90a3-587b7eba304e",
		"values": {
			"row": 3,
			"content": "Email",
			"columnName": "Email",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "AccountContactsDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "6e8483a2-6385-4ec1-96d1-a88b17079663",
		"values": {
			"row": 4,
			"content": "Address",
			"columnName": "Address",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "AccountContactsDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 4
	}
]