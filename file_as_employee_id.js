// Author: Vipul Swarup - 15 October 2015
// Purpose: Rename a file based on Employee ID entered. Then file it in the correct employee folder 
var currentDocument = document;
var currentParent = document.parent;


//If document is of type Employee Doc or a subtype
if(currentDocument.isDocument && currentDocument.isSubType("empfm:empdoc"))
{

	//Get employee ID from the current document
	var employeeID = currentDocument.properties["empfm:EmployeeId"];
	
	//Get document name
	var docName = currentDocument.properties["cm:name"];
	
	//Add employee ID to end of name	
	docName = docName.concat("-",employeeID);

	//If document is a Resume
	if(currentDocument.isSubType("empfm:empdoc"))
	{
		//Add "resume" to end of name
		docName = docName.concat("- resume");
	}
	//If document is an esic form
	if(currentDocument.isSubType("empfm:esicform"))
	{
		//Add "esicform" to end of name
		docName = docName.concat("- esicform");
	}
	//If document is a PF2 form
	if(currentDocument.isSubType("empfm:pf2"))
	{
		//Add "pf2" to end of name
		docName = docName.concat("- pf2");
	}
	//If document is a PF10 form
	if(currentDocument.isSubType("empfm:pf10"))
	{
		//Add "pf10" to end of name
		docName = docName.concat("- pf10");
	}

} 

currentDocument.save();
