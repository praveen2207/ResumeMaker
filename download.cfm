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
			<img src="#form.picInput#" alt="" />
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
		<section>
			<div class="sectionTitle">
				<h1>Work Experience</h1>
			</div>
			<div class="sectionContent">
				<article>
					<h2>#form.JobTitle#</h2>
					<!---<p class="subDetails">April 2011 - Present</p>--->
					<p>#form.WorkExperience#</p>
				</article>
				<!---<article>
					<h2>Job Title at Company</h2>
					<p class="subDetails">Janruary 2007 - March 2011</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
				</article>
				<article>
					<h2>Job Title at Company</h2>
					<p class="subDetails">October 2004 - December 2006</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
				</article>--->
			</div>
			<div class="clear"></div>
		</section>
		<section>
			<div class="sectionTitle">
				<h1>Key Skills</h1>
			</div>
			<div class="sectionContent">
				<ul class="keySkills">
					<li>#form.skill_1#</li>
					<li>#form.skill_2#</li>
					<li>#form.skill_3#</li>
					<li>#form.skill_4#</li>
					<li>#form.skill_5#</li>
				</ul>
			</div>
			<div class="clear"></div>
		</section>	
		<section>
			<div class="sectionTitle">
				<h1>Education</h1>
			</div>			
			<div class="sectionContent">
				<!---<article>
					<h2>College/University</h2>
					<p class="subDetails">Qualification</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
				</article>				
				<article>
					<h2>College/University</h2>
					<p class="subDetails">Qualification</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
				</article>--->
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