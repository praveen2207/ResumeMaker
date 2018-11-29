<cffile action = "upload" destination = "C:\ColdFusion11\cfusion\wwwroot\formToPDF" nameconflict = "overwrite">
<cfdocument format = "PDF" overwrite = "yes" saveAsName = "#form.nameText#_Resume.pdf">
<cfoutput>
<html>
<head>
<title>#form.nameText# Resume</title>
<link type="text/css" rel="stylesheet" href="style.css">
</head>
<body id="top">
<div id="cv">
	<div class="mainDetails">
		<div id="headshot">
			<cfimage source = "#form.picInput#" action = "writeToBrowser">
		</div>
		<div id="name">
			<h1>#form.nameText#</h1>
			<h2>#form.jobText#</h2>
		</div>
		<div id="contactDetails">
			<ul>
				<li>Email:&nbsp;&nbsp;#form.emailText#</li>
				<li>Website:&nbsp;&nbsp;#form.websiteText#</li>
				<li>Mobile:&nbsp;&nbsp;#form.phoneText#</li>
			</ul>
		</div>
		<div class="clear"></div>
	</div>
	<div id="mainArea">
		<section>
			<article>
				<div class="sectionTitle">
					<h1>Personal Profile</h1>
				</div>
				<div class="sectionContent">
					<p>#form.personalSection#</p>
				</div>
			</article>
			<div class="clear"></div>
		</section>
		<hr>
		<section>
			<div class="sectionTitle">
				<h1>Work Experience</h1>
			</div>
			<div class="sectionContent">
				<cfloop list = "#form.fieldnames#" index = "i">
					<article>
						<cfif FindNoCase("JobTitle",i) gt 0>
							<h3>#form[i]#</h3>
						</cfif>
						<cfif FindNoCase("Work", i) gt 0>
							<p>#form[i]#</p>
						</cfif>
					</article>
				</cfloop>
			</div>
			<div class="clear"></div>
		</section>
		
		<section>
			<div class="sectionTitle">
				<h1>Key Skills</h1>
			</div>
			<div class="sectionContent">
				<ul class="keySkills">
					<cfloop list = "#form.fieldnames#" index = "i">
						<cfif FindNoCase("Skill", i) gt 0>
							<li>#form[i]#</li>
						</cfif>
					</cfloop>
				</ul>
			</div>
			<div class="clear"></div>
		</section>	
		<section>
			<div class="sectionTitle">
				<h1>Education</h1>
			</div>			
			<div class="sectionContent">
				<cfloop index = "i" list = "#form.fieldnames#">
					<article>
						<cfif FindNoCase("College", i) gt 0>
							<h3>#form[i]#</h3>
						</cfif>
						<cfif FindNoCase("Qualification", i) gt 0>
							<p class="subDetails">#form[i]#</p>
						</cfif>
					</article>
				</cfloop>
			</div>
			<div class="clear"></div>
		</section>		
	</div>
</div>
</body>
</html>

</cfoutput>
</cfdocument>
<cfheader name="Content-Disposition" value="attachment;filename=file.pdf">
<cfcontent type="application/octet-stream" file="#expandPath('.')#\file.pdf" deletefile="Yes">