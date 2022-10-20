---
title: "Web Application Examples"
excerpt: "Add the MetaMap button to your web app"
slug: "web-demos"
category: 61ae8e8dba577a0010791480
---

# Web Applications

MetaMap offers the example applications for the following frameworks to show how you can add the MetaMap button to your existing web applications:

* [JavaScript](#javascript)
* [Angular](#angular)
* [React](#react)
* [Vue](#vue)


## JavaScript

The JavaScript example uses no framework to add the button to your site.

To run this example, you will need to:
1. Download the <a href="https://github.com/GetMetaMap/metamap-demo-web-apps/tree/main/no-frameworks" target="_blank">files</a>
1. Add your Client ID and Metamap (Flow) ID for your <a href="https://dashbard.getmati.com/dev" target="_blank">MetaMap</a> to the `body` tag in the `index.html` file:

   ```html
   <div class="container">
     <metamap-button clientid="YOUR_CLIENT_ID" flowid="YOUR_FLOW_ID"></metamap-button>
   </div>
   ```
1. Open the `index.html` file in your browser.

## Angular

The Angular example uses the Angular CLI. To run this example:
1. Download the <a href="https://github.com/GetMetaMap/demo-web-app/tree/main/angular" target="_blank">Angular files</a>
1. Add your Client ID and Metamap (Flow) ID for your <a href="https://dashbard.getmati.com/dev" target="_blank">MetaMap</a> to the `src/app/app.component.html` file:

   ```html
   <div class="container">
     <metamap-button
       appVerification
       [attr.clientid]="YOUR_CLIENT_ID"
       [attr.flowid]="YOUR_FLOW_ID"
     >
     </metamap-button>
   </div>
   ```
1. In the Angular CLI, run the following command:
   `npm run start`


## React

The React example uses the React CLI. To run this example:
1. Download the <a href="https://github.com/GetMetaMap/demo-web-app/tree/main/react" target="_blank">React files</a>
1. Add your Client ID and Metamap (Flow) ID for your <a href="https://dashbard.getmati.com/dev" target="_blank">MetaMap</a> to the `src/App.js` file in the `App()` function:

   ```
   function App() {
      const button = useRef(null);
      const [clientid] = useState('YOUR_CLIENT_ID');
      const [flowid] = useState('YOUR_FLOW_ID');
   ```
1. In the React CLI, run the following command:
   `npm run start`

## Vue

The Vue example uses the Vue CLI. To run this example:
1. Download the <a href="https://github.com/GetMetaMap/demo-web-app/tree/main/vue" target="_blank">React files</a>
1. Add your Client ID and Metamap (Flow) ID for your <a href="https://dashbard.getmati.com/dev" target="_blank">MetaMap</a> to the `src/components/MetamapButton.vue` file in the `data()` function:

   ```
   data() {
     return {
       clientid: 'YOUR_CLIENT_ID',
       flowid: 'YOUR_FLOW_ID',
     };
   }
   ```
1. In the Vue CLI, run the following command:
   `npm run dev`
