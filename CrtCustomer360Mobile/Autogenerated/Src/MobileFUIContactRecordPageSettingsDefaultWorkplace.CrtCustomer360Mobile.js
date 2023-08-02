[
	{
		"operation": "insert",
		"name": "settings",
		"values": {
			"entitySchemaName": "Contact",
			"settingsType": "RecordPage",
			"localizableStrings": {},
			"columnSets": [],
			"operation": "insert",
			"details": [],
			"diffV2": "[{\"operation\":\"merge\",\"name\":\"ViewConfig\",\"values\":{\"header\":{\"name\":\"Contact_Header\",\"type\":\"ContactCompactProfile\"}}},{\"operation\":\"insert\",\"name\":\"Contact_Model_Column_Name\",\"parentName\":\"Contact_Model\",\"propertyName\":\"columns\",\"values\":{\"alias\":\"Contact.Name\",\"orderDirection\":0,\"orderPosition\":-1,\"isVisible\":true,\"expression\":{\"expressionType\":0,\"columnPath\":\"Name\"}}},{\"operation\":\"insert\",\"name\":\"Contact_Model_Column_City_TimeZone\",\"parentName\":\"Contact_Model\",\"propertyName\":\"columns\",\"values\":{\"alias\":\"Contact.City.TimeZone\",\"orderDirection\":0,\"orderPosition\":-1,\"isVisible\":true,\"expression\":{\"expressionType\":0,\"columnPath\":\"City.TimeZone\"}}},{\"operation\":\"insert\",\"name\":\"Contact_Model_Column_Country\",\"parentName\":\"Contact_Model\",\"propertyName\":\"columns\",\"values\":{\"alias\":\"Contact.Country\",\"orderDirection\":0,\"orderPosition\":-1,\"isVisible\":true,\"expression\":{\"expressionType\":0,\"columnPath\":\"Country\"}}},{\"operation\":\"insert\",\"name\":\"Contact_Model_Column_BirthDate\",\"parentName\":\"Contact_Model\",\"propertyName\":\"columns\",\"values\":{\"alias\":\"Contact.BirthDate\",\"orderDirection\":0,\"orderPosition\":-1,\"isVisible\":true,\"expression\":{\"expressionType\":0,\"columnPath\":\"BirthDate\"}}},{\"operation\":\"insert\",\"name\":\"Contact_Model_Column_Photo\",\"parentName\":\"Contact_Model\",\"propertyName\":\"columns\",\"values\":{\"alias\":\"Contact.Photo\",\"orderDirection\":0,\"orderPosition\":-1,\"isVisible\":true,\"expression\":{\"expressionType\":0,\"columnPath\":\"Photo\"}}},{\"operation\":\"merge\",\"name\":\"Contact_RelatedTab\",\"values\":{\"position\":3}},{\"operation\":\"insert\",\"name\":\"FileDetailV2EmbeddedDetail_Tab\",\"parentName\":\"Contact_Tabs\",\"propertyName\":\"items\",\"values\":{\"visible\":\"#Not($_isNew)\",\"position\":2,\"text\":\"#ResourceSystemString(Tab.Attachments)\",\"body\":{}}},{\"operation\":\"insert\",\"name\":\"FileDetailV2EmbeddedDetail_Tab_Body\",\"parentName\":\"FileDetailV2EmbeddedDetail_Tab\",\"propertyName\":\"body\",\"values\":{\"type\":\"Attachments\",\"controller\":\"$Contact.ContactFile\"}},{\"operation\":\"merge\",\"name\":\"Contact_Controllers\",\"values\":{\"ContactFile\":{}}},{\"operation\":\"insert\",\"name\":\"Contact_FileDetailV2EmbeddedDetail_Controller\",\"parentName\":\"Contact_Controllers\",\"propertyName\":\"ContactFile\",\"values\":{\"type\":\"AttachmentsController\",\"editColumns\":[],\"model\":{}}},{\"operation\":\"insert\",\"name\":\"Contact_FileDetailV2EmbeddedDetail_Model\",\"parentName\":\"Contact_FileDetailV2EmbeddedDetail_Controller\",\"propertyName\":\"model\",\"values\":{\"type\":\"AttachmentsModel\",\"parentColumnName\":\"Contact\",\"masterColumnName\":\"Id\",\"entityName\":\"ContactFile\",\"columns\":[]}},{\"operation\":\"insert\",\"name\":\"ContactFeed_Tab\",\"parentName\":\"Contact_Tabs\",\"propertyName\":\"items\",\"values\":{\"visible\":\"#Not($_isNew)\",\"position\":1,\"text\":\"#ResourceSystemString(Tab.Feed)\",\"body\":{}}},{\"operation\":\"insert\",\"name\":\"ContactFeed_Tab_Body\",\"parentName\":\"ContactFeed_Tab\",\"propertyName\":\"body\",\"values\":{\"type\":\"Messaging\",\"controller\":\"$Contact.SocialMessage\"}},{\"operation\":\"merge\",\"name\":\"Contact_Controllers\",\"values\":{\"SocialMessage\":{}}},{\"operation\":\"insert\",\"name\":\"ContactFeed_Tab_Controller\",\"parentName\":\"Contact_Controllers\",\"propertyName\":\"SocialMessage\",\"values\":{\"type\":\"MessagingController\",\"editColumns\":[],\"model\":{}}},{\"operation\":\"insert\",\"name\":\"ContactFeed_Tab_Model\",\"parentName\":\"ContactFeed_Tab_Controller\",\"propertyName\":\"model\",\"values\":{\"type\":\"EsnMessagingModel\",\"parentRecordId\":\"$Id\",\"entityName\":\"Contact\"}},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_Address\"},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_AddressType\"},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_City\"},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_Region\"},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_Country\"},{\"operation\":\"remove\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout_Zip\"},{\"operation\":\"merge\",\"name\":\"ContactAddressDetailV2EmbeddedDetail_ItemLayout\",\"values\":{\"type\":\"AddressPreview\"}},{\"operation\":\"merge\",\"name\":\"ContactAddressDetailV2EmbeddedDetail\",\"values\":{\"useSeparator\":false}}]"
		}
	},
	{
		"operation": "insert",
		"name": "primaryColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "Contact",
			"caption": "primaryColumnSetContact_caption",
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
			"entitySchemaName": "Contact",
			"caption": "profileColumnSetContact_caption",
			"position": 1,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "ae49deae-4969-4aa8-be3f-488cb1f5a118",
		"values": {
			"row": 0,
			"content": "Account",
			"columnName": "Account",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "614857c5-ac09-464e-a95e-491bcae473dc",
		"values": {
			"row": 1,
			"content": "Full job title",
			"columnName": "JobTitle",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "be4a8fa1-fcdd-4f65-972d-a29fcc609677",
		"values": {
			"row": 2,
			"content": "Mobile phone",
			"columnName": "MobilePhone",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "88756a66-0c04-4e00-ac4a-4f26f4098dba",
		"values": {
			"row": 3,
			"content": "Email",
			"columnName": "Email",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "profileColumnSet",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "infoColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "Contact",
			"caption": "infoColumnSetContact_caption",
			"position": 2,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "7d399357-4ec4-4620-add1-3bc0ed64b5d1",
		"values": {
			"row": 0,
			"content": "Type",
			"columnName": "Type",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "ab4086f1-4187-4a47-a544-3755e4c264b0",
		"values": {
			"row": 1,
			"content": "Owner",
			"columnName": "Owner",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "da2f6e19-8b72-4412-9d08-0ce0da5d8d51",
		"values": {
			"row": 2,
			"content": "Recipient's name",
			"columnName": "Dear",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "0a9cc091-caaf-4661-8b2c-104a5243a666",
		"values": {
			"row": 3,
			"content": "Gender",
			"columnName": "Gender",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "7269bdc7-ffc1-43ee-ac28-440bd5c914a6",
		"values": {
			"row": 4,
			"content": "Title",
			"columnName": "SalutationType",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "e3e5dead-8eda-430a-a899-0623b3579e85",
		"values": {
			"row": 5,
			"content": "Preferred language",
			"columnName": "Language",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "infoColumnSet",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "ContactAddressDetailV2EmbeddedDetail",
		"values": {
			"items": [],
			"rows": 1,
			"isDetail": true,
			"filter": {
				"detailColumn": "Contact",
				"masterColumn": "Id"
			},
			"detailSchemaName": "ContactAddressDetailV2",
			"entitySchemaName": "ContactAddress",
			"caption": "ContactAddressDetailV2EmbeddedDetailContact_caption",
			"operation": "insert",
			"position": 3
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "43f1ac43-ddd2-4389-8ccf-782a89bf47c9",
		"values": {
			"row": 0,
			"content": "Address type",
			"columnName": "AddressType",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "df7d53ec-885a-43b7-99ec-14f0e9f36d78",
		"values": {
			"row": 1,
			"content": "Address",
			"columnName": "Address",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "7af60027-7759-456d-848f-de3a7bbd727a",
		"values": {
			"row": 2,
			"content": "City",
			"columnName": "City",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "0bc9e17d-d39b-4082-886c-0693181175a4",
		"values": {
			"row": 3,
			"content": "State/province",
			"columnName": "Region",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "7fd1d967-c76d-4523-87b8-ea32b6f6da3c",
		"values": {
			"row": 4,
			"content": "Country",
			"columnName": "Country",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "322bdac5-8965-4571-8ef1-180e1da25634",
		"values": {
			"row": 5,
			"content": "ZIP/postal code",
			"columnName": "Zip",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "ContactAddressDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 5
	},
	{
		"operation": "insert",
		"name": "ContactCareerDetailV2EmbeddedDetail",
		"values": {
			"items": [],
			"rows": 1,
			"isDetail": true,
			"filter": {
				"detailColumn": "Contact",
				"masterColumn": "Id"
			},
			"detailSchemaName": "ContactCareerDetailV2",
			"entitySchemaName": "ContactCareer",
			"caption": "ContactCareerDetailV2EmbeddedDetailContact_caption",
			"position": 4,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 4
	},
	{
		"operation": "insert",
		"name": "69408512-b350-418f-b20b-f179111f7a43",
		"values": {
			"row": 0,
			"content": "Account",
			"columnName": "Account",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactCareerDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "69615518-7147-4d17-b151-8443617f9407",
		"values": {
			"row": 1,
			"content": "Job title",
			"columnName": "Job",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactCareerDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "df355c94-5f74-479c-9556-03d996ed794b",
		"values": {
			"row": 2,
			"content": "Department",
			"columnName": "Department",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "ContactCareerDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "0405ec0b-491c-4c84-a279-35e0346f7a1b",
		"values": {
			"row": 3,
			"content": "Primary",
			"columnName": "Primary",
			"dataValueType": 12,
			"operation": "insert"
		},
		"parentName": "ContactCareerDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 3
	},
	{
		"operation": "insert",
		"name": "f205e9a5-7b91-4f8e-bfa1-8322a3a2571b",
		"values": {
			"row": 4,
			"content": "Start",
			"columnName": "StartDate",
			"dataValueType": 8,
			"operation": "insert"
		},
		"parentName": "ContactCareerDetailV2EmbeddedDetail",
		"propertyName": "items",
		"index": 4
	}
]