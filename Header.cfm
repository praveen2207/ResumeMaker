<cfif cgi.script_name eq "/formToPDF/formToPDF.cfm">
    <html>
        <head>
            <cfif IsDefined("form.Submit")><title><cfoutput>#form.nameText#</cfoutput></title></cfif>
        </head>
    </html>
</cfif>
<link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">