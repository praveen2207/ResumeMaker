<div class = "ml-5 mt-3">
    <cfscript>
        function displayFiles(){
            var recurse = false;
            var listInfo = "query";
            function filter(path){
                return FindNoCase(".pdf",path);
            }
            var list = DirectoryList("C:\ColdFusion11\cfusion\wwwroot\formToPDF",recurse,listInfo,filter);
            return list;
        }
        fileList = displayFiles();
    </cfscript>
    <h1 style = "color:seagreen">Your Resumes</h1>
    <table border = "0" class = "mt-3">
    <cfoutput>
    <cfloop query = "#fileList#">
        <tr><td style = "padding:15px"><a href = "#Name#">#Name#</a></td><td style = "padding:15px">#DateFormat(DateLastModified)#  #TimeFormat(DateLastModified)#</td></tr>
    </cfloop>
    </cfoutput>
    </table>
</div>