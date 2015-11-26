![alt tag](http://i.imgur.com/1VdeiBO.png)

Get Started
-------------

  Install Sails & Bower globally :
  ```
  sudo npm -g install sails
  npm install -g bower
  ```
  
  Install Dependencies for Sails & Bower :
  ```
  npm install
  bower install
  ```
  
  Install Sails Adapter for use MongoDB Database :
  ```
  npm install sails-mongo
  ```
  
  Launch Sails server : `sails lift` or with the debug mode : `sails debug`

Troubleshooting
-------------

  This project is configured with npm 3.4.0.
  
  If you have `package deprecated` with `npm install`, check your npm with `npm -v` and if you have npm < 3.4.0, 
  install the latest version :
  ```
  npm install -g npm
  ```
    
  If you have `bower not cached` with `bower install`, run :
  ```
  git config --global url."https://".insteadOf git://
  ```
  then run `bower install` successfully

  In case of 'Grunt :: Error: listen EADDRINUSE :::5858'
  ```
  You can apply it yourself by replacing your Sails' /lib/hooks/grunt/index.js file with the contents of     https://raw.githubusercontent.com/balderdashy/sails/88ffc0ed9949f8c74ea390efb5610b0e378fa02c/lib/hooks/grunt/index.js; this is the file that will be in the next release, so it's safe to use now.
  ```

