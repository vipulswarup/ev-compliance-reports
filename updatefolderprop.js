var typesvalue="BLK";
var typesno=0;

var doc = document;
var parent = document.parent;

	for each (m in parent.children)
	{
		if(m.isDocument)
		{
		
          if(m.isSubType("empfm:resume"))
			{
				if(typesvalue.indexOf("resume") < 0)
			  {
			   typesvalue=typesvalue+",resume";
			   typesno=typesno+1;
			  }
			}

		if(m.isSubType("empfm:pf2"))
		{
		
	        if(typesvalue.indexOf("pf2") < 0)
			  {
			   typesvalue=typesvalue+",pf2";
			   typesno=typesno+1;
			  }
		 
	     }

		if(m.isSubType("empfm:pf10"))
		{
			if(typesvalue.indexOf("pf10")  < 0)
			 {
		          typesvalue=typesvalue+",pf10";
		          typesno=typesno+1;
			 }
	     }

		if(m.isSubType("empfm:esicform"))
		{
		    if(typesvalue.indexOf("esicform")  < 0)
	         {
		      typesvalue=typesvalue+",esicform";
	          typesno=typesno+1;
		     }
	     }
			
	
        } 

   }

        parent.properties["empfm:alltypetext"]=typesvalue;
        parent.properties["empfm:alltypes"]=typesno;      
	parent.save();
