# Adapted Micro Front-End on Angular Test

This project is an adapted micro front-end architecture implemented using Angular.

## Installation

To set up the project, you need to install the necessary dependencies. Run the following command:

```bash
npm install
```

This will start the micro front-end services, making them available for development and testing.

## Creating a New Application

To create a new application within this architecture, use the Angular CLI with specific options for routing and styling. Run the command:

```bash
ng generate application "name_app" --routing=true --style=scss
```


Replace `"name_app"` with the desired name for your new application.

## Setting Up a Host for a New App

To set up a host for your new application, you need to add module federation capabilities. Use the following Angular CLI command:

```bash
ng add @angular-architects/module-federation --project "name_app" --port 5000
```


Again, replace `"name_app"` with the name of your application. The `--port 5000` option specifies the port on which the app will run.

## Setting Up a Remote for a New App

To set up a remote for your new application, add module federation capabilities with a different port. Use the following Angular CLI command:

```bash
ng add @angular-architects/module-federation --project "name_app" --port 3000
```


Replace `"name_app"` with the name of your application. The `--port 3000` option specifies the port for the remote application.

## App Preview

To preview the application:

### Dashboard Application

[![App Preview](https://ik.imagekit.io/idfthljas/Screen%20Shot%202023-12-19%20at%2013.40.18_a3SRJytfc.png?updatedAt=1702968034023)](URL_of_your_image_here)

## Admin Application

[![App Preview](https://ik.imagekit.io/idfthljas/Screen%20Shot%202023-12-19%20at%2013.41.43_Dh0-PURQ_.png?updatedAt=1702968117225)](URL_of_your_image_here)

## Further Assistance

For more information and assistance on using Angular CLI and Angular's micro front-end architecture, you can refer to the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
