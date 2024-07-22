# VishalRana2015GithubIo

##   Project Page
Data on Project Page is rendered from projects.json file. This file contains a JSON object with key "projects". This attribute contains array of project details. <br/>
A project detail structure is as follows:

```
{
      "title" : "Project Title ",
      "tech" : "Java, Spring Boot",
      "description" : "Mandlebrot Renderer is a Java application that visually renders teh Mandelbrot set using JFrame. This prooject offers an interactive experience for exploring one of the most famous fractals in mathematics. The Mandelbrot set is a set of complex numbers that produces intricate and infinitely detailed patterns, showcasing the beauty and complexity of mathematical structures.",
      "readmeUrl" : "../assets/readme/mandelbrot.md"
    }
```

**title:** Project Title
**tech:** Tech stack and framework used on the project.
**description** A brief description about the project
**readMeUrl:** A link to read me file. No project is complete without a Readme file. A Readme file contains complete information about your project. If someone's wants to know more about the project without even leaving your website, you can provide a readme file. This readme file will shown in a dialog when user clicks on the **Click to View More** button in the Project Details Section. 


## Awards and Recognition Page / Why Page

This page showcase your achievements, certifications, and academic awards and other personal achievenments. Data on this page is rendered from **/assets/awards.json** file. This file contains a JSON object with attribute **awards**. This attribute's value is a JSON object. Each key under the JSON object corresponds to different category of awards/achievements.


1. **Professional Achievements**
This section displays the various awards and recognitions the user has received while working in an organization or company. It highlights the user's contributions and excellence in their professional career. <br/>
Data on this sub-section is rendered from the **Professional Awards** attribute. This attribute contains an array of objects. Each object follow the following structure.
```
{
        "icon": "/assets/images/rewardExcellence.png",
        "title": "Spot Award: Database Queries Optimization",
        "date": "March 2024",
        "issuedBy": "Hashedin by Deloitte",
        "description": "Description about award",
        "links": [
          {
            "url": "/assets/awards/2024-03 March Spot Award.pdf",
            "text": "Award Certificate"
          }
        ]
      },
```
Note: Make sure the url which you have provided for the icon attribute is valid. 


The above data is rendered as shown in the below given screenshot.<br/>
![image](https://github.com/user-attachments/assets/2e71f888-6ad8-4b7d-8e8a-844c9ce2a868)

If the user clicks on the icon or title of the award they will taken to first link provided in the **links** array. **links** object must always contain at least one link.

Make sure you prvovide data in chronological order to showcase your most recent achievement on the top.

3. **Certification**

   Here, the user can showcase their professional certifications. This includes industry-recognized certifications such as Cloud Certifications, demonstrating their expertise and continous learning in their field. <br/>
   Data on this sub-section is rendered from **Professional Certification** attribute. This attribute contains a set of JSON objects where each object contains data for a certification.

   ```
    {
        "icon": "/assets/images/awsDeveloperAssociate.png",
        "title": "AWS Certified Cloud Practitioner",
        "issuedOn": "2022",
        "issuedBy": "AWS",
        "description": "AWS Certified Cloud Practioner - This certification validates foundational understanding on AWS cloud concepts, services and terminology. This certification demonstrate my knowledge of AWS's core services, cloud economics, billing, pricing models, and best security practices. Provides ability to effectively communicate cloud solutions and participate in cloud-relate projects. Highlights my commitment to cloud proficiency and my readiness to leverage AWS Services in various roles.",
        "credlyBadge": {
          "dataShareBadgeId": "18f28d73-6ae0-48ff-9d11-e736435ac348",
          "dataShareBadgeHost": "https://www.credly.com"
        },
        "links": [
          {
            "url": "/assets/awards/AWS Certified Cloud Practitioner certificate.pdf",
            "text": "Original Certificate"
          },
          {
            "url": "/assets/awards/AWS Certified Cloud Practitione - Score Report.pdf",
            "text": "Score Report"
          }
        ]
      },
   ```
This will be rendered as 
![image](https://github.com/user-attachments/assets/f95e4eaa-666b-4796-8ceb-c6d67c8d1f1c)

Most of things are self explanatory, so I will focus only on credlyBadge. <br/>
Most of the Certification Provider provides digital badges. These badges then can be embed in code, for example, you can embed these digital badges in your email. These digital badges are easily verifiable. If the person just clicks on the digital badge, they will taken to original badge, where they can check authenticity of the badge. Credly is one such Digital Badge provider. <br/>
AWS Certification Provider provides digital badges for the certifications through Credly. <br/>
If you want to show your digital badge instead of icon, you need to include **credlyBadge** atribute with value as 
```
{
          "dataShareBadgeId": "18f28d73-6ae0-48ff-9d11-e736435ac348",
          "dataShareBadgeHost": "https://www.credly.com"
}
```
Currently I have support for only Credly. To find out dataShareBadgeId and dataShareBadgeHost, go to your Badge in Credly website and click on share. It will provides you various options to share. Look for **Embed Code**. This code would contain the above given attributes with their values.

5. **Academic Achievements**
   This section is dedicated to the user's academic accomplishments. It includes awards and honors received during thier time in school or college, highlighting their achivements.

   See **Academic Awards** attribute. It is just a list of strings.
   
7. **Personal Achievement**
   In this section, the user can showcase any other personal achievements outside of their professional and academic career. Examples include completing a marathon, volunteering awards, or any other notable personal milestone.

   
## Skills Page
This page uses **/assets/skills.json** document to render skills page. <br/>
Default Template is available.<br/><br/>
There is an object under **skillCategories** key. This object contains key-value pairs. Each key presents the skill Category, for example: backend, frontend etc. <br/>
Under each category, there is list of JSON objects describing each skill. Each skill has the following structure.
```
{
        "src" : "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
        "alt": "Java Image",
        "height": 70,
        "width": 70,
        "level" : 3
}
```
* src: Skill Logo
* alt: The text that will be shown when the user hovers the mouse over that skill logo.
* height: Height of the logo. If no height is specified then default 70 will be used.
* width: Width of the logo to use while rendering. If no width is specified then default 70 will be used.
* level: A number between 1 to 4. Represents your confidence level in that skill. 
  * 4 - You use it daily
  * 3 - You are quite confident, but you don't use it daily.
  * 2 - You have worked on it, but don't have in-depth knowledge.
  * 1 - Begineer.

For some skills, it might not make sense to display confidence level, for such skills just set level either to -1 or 0.

See the following screenshot to understand visually

![image](https://github.com/user-attachments/assets/7cb5c209-6f7d-440a-b90f-c87bdeb8a546)

**Corresponding Code**
```
"Databases" : [
        {
          "src" : "/assets/images/oracle-svgrepo-com.svg",
          "alt" : "Oracle",
          "level" : 4
        },
        {
          "src" : "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png",
          "alt" : "Postgresql",
          "level" : 4
        },
        {
          "src" : "https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png",
          "alt" : "MySql",
          "level" : 4
        }
    ],
```

## Education Page

This page shows your education information. See file **/assets/education.json**.
```
{
      "icon" : "/assets/images/college-pu.jpg",
      "institutionName" : "Punjab University",
      "institutionLink" : "https://www.sggscollege.ac.in/",
      "course" : "Bachelor of Science in Computer Science - BSC (CS)",
      "field" : "Computer Science",
      "attendedDates" : "2015 - 2018",
      "achievements" : [],
      "marks" : ""
}
```
![image](https://github.com/user-attachments/assets/0e0ab3c2-3666-4f16-a155-5745153678db)


## Contact Page

### Contact Form
There is a user-friendly Contact Form included from where visitors can enter their Name, Email, Subject and Message. Once they click the submit butto, their message will be sent directly to the configured email address. This makes it easy and secure for anyone to get in touch with you.
To configure contact form to be able send messagse directly to your mail inbox, you need to follow following steps. 
1. Create an account at emailjs

### /assets/contact.json
A JSON file, containing your contact information. Template is available at /assets/contact.json. Just edit this file to reflect data specific to you.

It contains three keys
1. emailAddress: If the user has provided their emailAddress (i.e non-empty string) in contact.json file, then it will be shown in the Contact Me Page.
2. contactWithMe: It provides a list of objects, each containing a link to a social media platform where visitors can connect with me. These are displayed under **Contact With Me** sub-section under the **Contact Me** Page.
3. followMeOn: It provides a list of objects with links to your profile on coding and competitive programming platforms where people can follow you. These are displayed under **Follow Me On** container in the **Contact Me** Page.

Each JSON object in contactWithMe and followMeOn array has the following structure
```
{
      "icon": "/assets/images/svg/linkedin-svgrepo-com.svg",
      "url": "https://www.linkedin.com/in/vishal-rana-072854109/",
      "title": "Linkedin"
}
```
If you don't a want a particular object to be visible, for example you don't want to provide your facebook profile, you need to just remove the url key from that Facebook object. Objects without **url** key will not be displayed.

See the following image for your screenshot.
![image](https://github.com/user-attachments/assets/884cae3f-8806-40bd-b1af-34f6377b7a2f)

On click on any icon, the user will be taken to the configured url.

Each object has following structure




<hr/>
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
