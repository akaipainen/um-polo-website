
# THE readme, by Matthew Ferrari:
  

In this document, you will learn about the structure of the website, how it is hosted, how to open the website on a local machine, how to deploy it to Apache, and how modify the sites content!

## Background
The website was designed and developed by Matthew Ferrari with contributions from Alex Kaipainen and Sid Murthy.

The project has no back end because we can simply use React Router to eliminate what would be this massive headache with Apache.

Working with the front end on Apache is no easy task either, however. In order to successfully deploy to Apache, we need a .htaccess file to route all requests to our index.html. We also use a .htaccess to rewrite all http requests to our https site. This is also how we get our SSL encryption. The private folder comes with a certificate so we simply disable Cosign Auth and send all traffic to the private folder.  

If you are just looking to update the roster, schedule, Eboard, fundraising chair, slideshow pictures, awards, or news, this is very simple. Moreover, this can be done with basically zero knowledge of code and just takes the most basic of pattern recognition skills. If you are looking to change something else, this will take knowledge of HTML, CSS, and/or React.

## Getting Started
The project repository can be found at this link: https://github.com/akaipainen/um-polo-website

The project is coded in Node.js with the React framework. To run the application on a local host, you must first install node.js from the Node website. Once you have node, clone the repo: `git clone`

Once the repo is on your local machine, navigate to the folder in the Node.js command prompt. To open the project, you will first have to enter the following command:`npm install`

This will install all of the the project's dependencies. You can find a list of the dependencies in package.json but running npm install will install all of them for you.

Once that is finished, you can run the following command to serve the site on your local network on the default port, port 3000: `npm start`

And just like that, you have the project up and running. 

## Making a simple change
A simple change is defined as any change that has to do with the content on the roster, schedule, Eboard, fundraising chair, slideshow pictures, awards, or news. To change one of these, simply load navigate to Project>src> Data. The data is served to the website through the JSON files in this folder. To make a change, simply add/alter/remove object in the appropriate file. Simply read the first couple of entries to understand how the modifications must be formatted. To upload images for the files (should it be necessary for the section you are modifying), upload the image into project>public>folder that matches desire. Use SVGs when possible and always optimize images with imageoptim or svgo.

## Making a non-simple change
Welp, not quite sure what you are looking to change, but good luck! 

## Deployment
To deploy the site, run the following command in the node terminal to create a build folder:`npm run build`
Now, upload the entire contents of the build folder to the private UMpolo sub-directory. This can be done either manually or through SFTP.

Happy Coding!