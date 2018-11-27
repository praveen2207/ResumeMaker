<cfif cgi.script_name eq "/formToPDF/formToPDF.cfm">
    <html>
        <head>
            <cfif IsDefined("form.Submit")><title><cfoutput>#form.nameText#</cfoutput></title></cfif>
        </head>
    </html>
</cfif>
<link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300' rel='stylesheet' type='text/css'>