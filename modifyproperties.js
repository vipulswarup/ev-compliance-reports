 
var doc = document;
var parent = document.parent;

var typesvalue="delete";
var typesno=0;

var typesvalue1="delete";


typesvalue1=parent.properties["empfm:alltypetext"];
typesno= parent.properties["empfm:alltypes"];
var counter=0;


if(doc.isDocument)
		{
		counter=counter+1;
          if(doc.isSubType("empfm:resume"))
			{
				if(typesvalue.indexOf("resume") < 0)
			  {
			   typesvalue=",resume";
			
			  }
			}

		if(doc.isSubType("empfm:pf2"))
		{
		
	        if(typesvalue.indexOf("pf2") < 0)
			  {
			   typesvalue=",pf2";
			  
			  }
		 
	     }

		if(doc.isSubType("empfm:pf10"))
		{
			if(typesvalue.indexOf("pf10")  < 0)
			 {
		          typesvalue=",pf10";
		         
			 }
	     }

		if(doc.isSubType("empfm:esicform"))
		{
		    if(typesvalue.indexOf("esicform")  < 0)
	         {
		      typesvalue=",esicform";
	       
		     }
	     }
			
	
        } 

if(typesvalue != "delete" )
{
   parent.properties["empfm:alltypetext"]=typesvalue1.replace(typesvalue,"");

        parent.properties["empfm:alltypes"]=typesno-1;      
	    parent.save();
}
else
{
parent.properties["empfm:alltypetext"]=typesvalue1;

        parent.properties["empfm:alltypes"]=typesno;      
	    parent.save();
}
