var localTime = new Date();
var date = localTime.getDate();
var hours = localTime.getHours();
var minutes = localTime.getMinutes();
var seconds = localTime.getSeconds();
var Tdatetime=date+" "+hours+"-"+minutes+"-"+seconds;
var path="Reports";
var path2="Reports";

var nodeReports = companyhome.childByNamePath(path);
var filename="Report-"+space.name+Tdatetime+".csv";
var CSVFile=null;
//nodeReports.createFile(filename);
var mainnode=space;
var str=" ";
var str2= " ";

var header="Employee File,Path,Resume,Provident Form 2,Provident Form 10,ESIC FORM"+'\r\n';

var sitesname="Sites";
var newsite="Sites";
var counter = 0;
var lastsitechk = "";
var lastfilename = "";

iteratenode(mainnode.children);
/*path="Reports";

nodeReports = companyhome.childByNamePath(path);
filename="Report-"+space.name+Tdatetime+counter+sitesname+".csv";
CSVFile=nodeReports.createFile(filename);
CSVFile.content=header+str2;
CSVFile.save();
*/

function iteratenode(childarray){
	
	for each (m in childarray)
	{
		++counter;
		if(m.isContainer){
			var fprop=" ";
			var resume= "yes";
			var pf2="yes";
			var pf10="yes";
			var esicform="yes";
			if(m.isSubType("empfm:empfile"))
			{
				fprop+=m.properties["empfm:alltypetext"];


				if(fprop.indexOf("resume") < 0)
				{
					resume="no";	   
				}

				if(fprop.indexOf("pf2") < 0)
				{
					pf2="no";	   
				}

				if(fprop.indexOf("pf10") < 0)
				{
					pf10="no";	   
				}

				if(fprop.indexOf("esicform") < 0)
				{
					esicform="no";	   
				}	

			}
			
			var nodepath=m.displayPath.replace("/Company Home/","");
			var strname="";
			var res = nodepath.split("/");
			/*if(res.length<2)
				{
				str=" ";
				}
			else
				{*/
				//}
				sitesname=res[1];
				strname=res[res.length-1].replace(" ","");
				
				if( nodepath != "Sites")
					str+=m.name+"----"+nodepath+","+resume+"-"+pf2+"-"+pf10+"-"+esicform+'\r\n';
				
				if(sitesname!=newsite && sitesname != "Sites" ){
					path2="Reports";
					
					//+sitesname+"/documentLibrary/Compliance Reports";
					var chkt = m.name.replace(" ","");
					nodeReports = companyhome.childByNamePath(path2); 
					//if(strname == "ComplianceReports")
					//{ 
						str2=str;
						str=" ";
						nodeReports = companyhome.childByNamePath(path2);
						lastsitechk = path2;
						var stri = path2.split("/");
						var res1 = stri[stri.length-1];
						var temp=newsite;
						filename="Report-"+space.name+Tdatetime+counter+newsite+".csv";
                                                 var file2="Sites/"+newsite+"/documentLibrary/Compliance Reports";
                                                //   file2="Sites/site3/Compliance Reports";
                                                  var nodeReports3=companyhome.childByNamePath(file2);
						newsite=sitesname;
						if(sitesname == null && temp != "Sites")
						{
						lastfilename = filename;
						CSVFile=nodeReports.createFile(filename);
						CSVFile.content=header+str2;
						str=" ";
						str2=" ";
						CSVFile.save();	
                                                 CSVFile.move(nodeReports3);
						}
                                           
						
					//}else
					//{
					//iteratenode(m.children);
					//}
				}
			
			else
			{
				path=nodepath;
				nodeReports = companyhome.childByNamePath(path); 
				iteratenode(m.children);

			}

		}
		
		iteratenode(m.children);


	}
}