![alt tag](http://i.imgur.com/1VdeiBO.png)

Get Started
-------------
  ## Compatibility

  This project is configured with `node 4.2.2` and `npm 3.5.0`.

  ## Installation

  Install Sails & Bower globally :
  ```
  npm -g install sails
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

  In case of `Grunt :: Error: listen EADDRINUSE :::5858`, 

  you can apply it yourself by replacing your Sails `/lib/hooks/grunt/index.js` file with the contents of [this file](https://raw.githubusercontent.com/balderdashy/sails/88ffc0ed9949f8c74ea390efb5610b0e378fa02c/lib/hooks/grunt/index.js).
  This is the file that will be in the next release, so it's safe to use now.
  
If the error " listen EADDRINUSE :::5858 is still here it can be your sails in background, you need to kill it for continue.

Find the ID process of sails 
  ```
  ps -aux | grep sails
  ```
And kill it with the ID (usr/bin/sails) (Example for id 2815)
  ```
  kill -9 2815
  ```


