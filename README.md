# VishalRana2015GithubIo

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
