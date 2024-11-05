import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommandsService {
  exec(command: string) {
    if (command.toLowerCase() === 'clear') {
      return {
        commandOutput: '',
        isHtml: false
      };
    } else if (command.toLowerCase() === 'ls') {
      return {
        commandOutput: '<ul><li>Desktop</li><li>Documents</li><li>Downloads</li><li>Music</li></ul>',
        isHtml: true
      };
    } else if (command.toLowerCase() === 'help') {
      return {
        commandOutput: `<ul><li class="text-yellow-400">Available commands:</li><li>1. show projects - List projects</li><li>2. show skills - Display skillset</li><li>3. show my projects</li><li>4. clear - Clear the terminal screen</li><li>and more...</li></ul>`,
        isHtml: true
      };
    } else if (command.toLowerCase() === 'show projects') {
      return {
        commandOutput: `<ul><li><p>1. Led a team of 3 and developed a file-based integration system for exporting invoices to SFTP server, enabling seamless integration with multiple ERP systems. This solution contributed to onboarding over <span class="text-green-500">3 new customers</span>.</p><p class="text-green-500">Tech used: Node.js, Express, Mongodb, Kafka, Azure</p></li>
        <li><p>2. Implemented anasynchronous, scalable system for importing master data from ERP systems into the Accounts Payable system database, ensuring graceful k8s pod shutdown.</p><p class="text-green-500">Tech used: Node.js, Express, Mongodb, Kafka, Azure, kubernetes</p></li>
        <li><p>3. Implemented caching mechanism in invoice validation engine which reduced invoice posting time by approx <span class="text-yellow-500">30 mins per 10k invoices</span>.</p><p class="text-green-500">Tech used: Node.js, Express, Mongodb, Mingo</p></li>
        <li><p>4. Built udChalo Holidays and Housing line of business in udchalo application to boost sales and customer engagement</p><p class="text-green-500">Tech used: Angular, Angular material, SASS, Node.js, koa.js, AWS serverless, dynamodb, AWS lambda</p></li>
        <li><p>5. Built product named Suraksha for flight insurance to boost sales and customer engagement, becoming the 2nd highest revenue-generating LOB in udchalo</p><p class="text-green-500">Tech used: Angular, Angular material, SASS, Node.js, Koa.js, AWS serverless, Dynamodb, AWS lambda</p></li>
        <li><p>6. Integrated ButterCMS, a content management system in udChalo app. Reduced the number of api calls to butterCms from <span class="text-orange-500">2.8 Million to 2.4 Thousand (per month) using api gateway caching</span>.</p><p class="text-green-500">Tech used: Angular, Cordova, ButterCMS, Cloudflare</p></li>
        <li><p>7. Key member to migrate the system from monolithic architecture to micro-service serviceless architecture.</p><p class="text-green-500">Tech used: Node.js, Typescript, AWS serverless, dynamodb, lambda functions, docker</p></li>
        <li><p>8. Developed Fauji Family feature, driving a consistent monthly average onboarding of <span class="text-red-500">4.5k+</span> users and steadily increasing platform engagement.</p><p class="text-green-500">Tech used: Node.js, Express, Mongodb, AWS services</p></li></ul>`,
        isHtml: true
      };
    } else if (command.toLowerCase() === 'show skills') {
      return {
        commandOutput: `
        <table class="w-full text-left border-collapse border border-green-500 bg-gray-900">
          <thead>
            <tr>
              <th class="border border-green-500 px-4 py-2 text-green-300 bg-gray-800">Skill</th>
              <th class="border border-green-500 px-4 py-2 text-green-300 bg-gray-800">Level</th>
              <th class="border border-green-500 px-4 py-2 text-green-300 bg-gray-800">Experience (Years)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">Javascript</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Intermediate</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">4</td>
            </tr>
            <tr class="bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">Angular</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Advanced</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">4</td>
            </tr>
            <tr class="bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">Typescript</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Intermediate</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">2</td>
            </tr>
            <tr class="bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">PWA</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Intermediate</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">1</td>
            </tr>
            <tr class="bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">Rxjs</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Intermediate</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">4</td>
            </tr>
            <tr class="bg-gray-800 hover:bg-gray-700 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">Flutter</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Beginner</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">1</td>
            </tr>
            <tr class="bg-gray-800 hover:bg-gray-700 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">Node.js</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Advanced</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">4</td>
            </tr>
            <tr class="bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">MongoDB</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Intermediate</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">2</td>
            </tr>
            <tr class="bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">AWS</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Intermediate</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">2</td>
            </tr>
            <tr class="bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">Kafka</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Begineer</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">1</td>
            </tr>
            <tr class="bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">HTML 5</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Intermediate</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">4</td>
            </tr>
            <tr class="bg-gray-900 hover:bg-gray-800 transition-all duration-300">
              <td class="border border-green-500 px-4 py-2 text-green-100">CSS/SCSS</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">Intermediate</td>
              <td class="border border-green-500 px-4 py-2 text-green-100">4</td>
            </tr>
          </tbody>
        </table>
        `,
        isHtml: true
      };
    } else if (command.toLowerCase() === 'whoami') {
      return {
        commandOutput: `<p><b>Hello there!</b> <span style='font-size:50px;'>&#128512;</span></p> <p>I am <span class="text-blue-300">Swagar</span><span class="text-green-400">OS</span> version 2.0</p>`,
        isHtml: true
      };
    } else if (command.toLowerCase() === 'show my projects') {
      return {
        commandOutput: `<ul>
        <li><p>1. udChalo’s mobile application built using <span class="text-green-400">flutter</span> for demonstration and comparison purposes.</p></li>
        <li><p>2. <span class="text-green-400">Code Buddy</span> is a platform which helps competitive coders to find coding problems based on different difficulty levels. Single platform to view upcoming contests on different websites(cf, hackerrank,hackerearth,etc) and add reminder for contests. Save problems to todos if user wants to solve them late. Write Editorials/Posts on some Problem/topic. When a user submits an Editorial, it is first reviewed by admin and if admin approves/rejects it, then user gets notified that his editorial is accepted/rejected and the editorial is publicly visible</p><p>Tech used: MEAN stack, redis for caching, puppeter for scraping, Jest for integration testing, travis CI for continous integration</p></li>
        <li><p>3. Built a web application which allows users to capture and share their moments. Its a <span class="text-green-400">PWA</span> and acts as a native application as it can be downloaded, works offline, Web Push notifications and Background sync which allows users to add the posts even if they are offline.</p><p>Tech used: Javascript, PWA features like static/dynamic caching, background synchronization, push notifications, integrated media devices (camera), Firebase</p></li>
        <li><p>4. Built a platform that helps alumni's to be in touch with each other and has features like filtering based on company name,batch, searching other alumni's, gallery section including images of past events,Alumni's get notified when events are added.They can view event blogs, comment on them and invite their friends.Alumni's can add posts, can update their profiles; Admin panel includes features like adding, deleting and editing events,deleting suspecious user, add pictures and notifying alumni's</p><p>Servlets, JSP, JDBC, HTML-5,CSS-3,JavaScript,Ajax,Jquery,Bootstrap</p></li>
        </ul>`,
        isHtml: true
      };
    } else if (command.toLowerCase() === 'show achievements') {
      return {
        commandOutput: `<ul>
        <li><p>1. Received <span class="text-orange-400">’Star Perfomer of the quarter’</span> award at udChalo.</p></li>
        <li><p>2. Received <span class="text-orange-400">’The value enabler’</span> award at udChalo.</p></li>
        <li><p>3. Received <span class="text-orange-400">’Best Project’</span> award at udChalo.</p></li>
        <li><p>4. <span class="text-orange-400">Bug bash Winner</span> twice at udChalo</p></li>
        </ul>`,
        isHtml: true
      };
    } else if (command.toLowerCase() === 'show hobbies') {
      return {
        commandOutput: `<ul>
        <li><p>1. Gyming <span style='font-size:100px;'>&#127947;</span></p></li>
        <li><p>2. Listening songs <span style='font-size:100px;'>&#127926;</span></p></li>
        <li><p>3. Cricket <span style='font-size:100px;'>&#127951;</span></p></li>
        </ul>`,
        isHtml: true
      };
    }
    return null;
  }
}
