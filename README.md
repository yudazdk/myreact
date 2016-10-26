# myreact
A react exercise

First install node js

1. First install webpack
   npm init
   
   #It might take to long so you can
   #Run the following command

   npm init -f
   
   npm install -S webpack
   
   npm install -g webpack
   
2. package.json 
   #set each dependency to *
   #Example: "react": "*"
   
   #Run the following command
   npm update --save

3. For routing
   #npm install -S react-router
   #npm install -S history@1


Errors
------
1. ERROR in Entry module not found: Error: Cannot resolve module 'babel-loader' in C:\xampp\htdocs\myreact
   Fix: npm install babel-core babel-loader --save-dev
2. ReferenceError: Unknown plugin "react-html-attrs"
   Fix: npm install --save-dev babel-plugin-react-html-attrs
3. ReferenceError: Unknown plugin "transform-decorators-legacy"
   Fix: npm install babel-plugin-transform-decorators-legacy
4. ReferenceError: Unknown plugin "transform-class-properties"
   Fix: npm install babel-plugin-transform-class-properties --save
5. Error: Couldn't find preset "react" relative to directory
   Fix: npm install --save-dev babel-preset-react
6. Couldn't find preset "es2015"
   Fix: npm install babel-preset-es2015 --save
7. Error: Couldn't find preset "stage-2"
   Fix: npm install --save-dev babel-preset-stage-2
8. Error:  Cannot resolve module 'react-dom'
   Fix: