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



