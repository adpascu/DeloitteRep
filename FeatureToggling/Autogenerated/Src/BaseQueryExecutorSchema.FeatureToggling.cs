namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: BaseQueryExecutorSchema

	/// <exclude/>
	public class BaseQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public BaseQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public BaseQueryExecutorSchema(BaseQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7d0b9ea3-e9cd-412e-bbed-f37d017a5c6e");
			Name = "BaseQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("84b09f59-6bd7-4f07-9626-7a5c32da980f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,147,219,78,195,48,12,134,175,139,196,59,88,226,102,72,83,31,128,169,32,152,182,105,23,32,208,128,91,100,90,119,139,148,38,37,7,68,133,120,119,156,118,140,30,182,222,213,201,111,251,139,127,23,20,22,100,75,76,9,158,201,24,180,58,119,241,109,89,46,9,157,55,100,207,207,190,207,207,34,111,133,218,194,166,178,142,138,217,33,254,79,152,107,67,167,206,227,133,114,194,9,178,44,96,201,133,161,173,208,10,230,18,173,189,130,59,180,244,228,201,84,139,47,74,189,211,166,22,9,229,200,40,148,128,239,214,25,76,29,164,65,126,76,29,125,215,25,135,186,75,65,50,227,194,143,70,124,162,163,230,178,108,2,48,132,153,86,178,130,154,169,218,164,59,42,16,222,168,21,205,142,234,95,44,153,185,86,138,82,23,154,188,249,78,60,219,35,144,202,26,138,46,18,11,249,21,62,101,222,26,76,59,78,163,236,15,109,31,14,31,55,233,117,237,54,157,2,23,13,227,110,211,63,176,155,151,16,44,139,162,30,36,36,48,160,14,170,118,58,107,186,61,227,246,160,238,81,225,150,76,188,34,183,230,23,161,74,233,174,10,29,39,3,132,186,246,207,248,88,120,16,37,153,176,25,35,67,233,141,160,23,38,215,39,172,248,47,208,113,186,19,132,228,158,243,99,184,247,228,118,58,27,99,125,215,90,66,24,142,229,229,43,208,84,115,45,125,161,94,81,122,90,10,201,43,61,169,253,109,190,215,42,215,144,31,62,167,160,189,131,149,23,25,148,131,236,63,75,135,55,236,88,70,57,122,233,26,59,13,241,111,171,90,117,111,106,187,236,134,55,69,82,43,113,241,225,81,218,61,86,123,46,113,7,62,14,118,78,235,210,81,0,60,198,150,36,192,235,77,35,158,55,167,221,67,62,251,5,195,97,76,120,125,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7d0b9ea3-e9cd-412e-bbed-f37d017a5c6e"));
		}

		#endregion

	}

	#endregion

}

