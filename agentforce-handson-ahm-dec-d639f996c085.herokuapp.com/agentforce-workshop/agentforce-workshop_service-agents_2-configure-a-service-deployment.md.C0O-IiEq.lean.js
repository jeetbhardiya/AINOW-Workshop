import{_ as e,c as o,a1 as n,o as r}from"./chunks/framework.BRP8cXOc.js";const a="/agentforce-workshop/service-agent-architecture_omni-channel-architecture.yFsXV5_T.webp",d="/agentforce-workshop/service-agent-connections.DG5_B1qN.webp",b=JSON.parse('{"title":"Exercise 2: Configure a Service Deployment","description":"","frontmatter":{},"headers":[],"relativePath":"agentforce-workshop/service-agents/2-configure-a-service-deployment.md","filePath":"agentforce-workshop/service-agents/2-configure-a-service-deployment.md"}'),s={name:"agentforce-workshop/service-agents/2-configure-a-service-deployment.md"};function i(l,t,g,c,h,u){return r(),o("div",null,t[0]||(t[0]=[n('<h1 id="exercise-2-configure-a-service-deployment" tabindex="-1">Exercise 2: Configure a Service Deployment <a class="header-anchor" href="#exercise-2-configure-a-service-deployment" aria-label="Permalink to &quot;Exercise 2: Configure a Service Deployment&quot;">​</a></h1><p>In this exercise you will configure a Service deployment that will expose the Coral Cloud Agent to your customers directly. There are quite a few pieces that need to come together to expose an agent, and this is brought together using Omni-Channel in Service Cloud.</p><p><img src="'+a+'" alt="" data-zoomable="true"></p><h2 id="step-1-enable-messaging-and-configure-omni-channel" tabindex="-1">Step 1: Enable messaging and configure Omni-Channel <a class="header-anchor" href="#step-1-enable-messaging-and-configure-omni-channel" aria-label="Permalink to &quot;Step 1: Enable messaging and configure Omni-Channel&quot;">​</a></h2><p>Messaging enables you to create channels to handle messages received from your customers. In this example, we will use messaging to enable customers to engage with the Coral Cloud Agent.</p><h3 id="enable-messaging" tabindex="-1">Enable messaging <a class="header-anchor" href="#enable-messaging" aria-label="Permalink to &quot;Enable messaging&quot;">​</a></h3><ol><li><p>In the Setup Quick Find, search for and select <strong>Messaging Settings</strong>.</p></li><li><p>Set Messaging to <strong>On</strong>.</p></li></ol><h3 id="create-a-routing-configuration" tabindex="-1">Create a routing configuration <a class="header-anchor" href="#create-a-routing-configuration" aria-label="Permalink to &quot;Create a routing configuration&quot;">​</a></h3><ol><li><p>In the Setup Quick Find, search for and select <strong>Routing Configurations</strong>.</p></li><li><p>Click on <strong>New</strong>.</p></li><li><p>Set field values as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Routing Configuration Name</td><td><code>Agent Routing Configuration</code></td></tr><tr><td>Developer Name</td><td><code>Agent_Routing_Configuration</code></td></tr><tr><td>Overflow Assignee</td><td>Leave Blank</td></tr><tr><td>Routing Priority</td><td><code>1</code></td></tr><tr><td>Routing Model</td><td><code>Most Available</code></td></tr><tr><td>Push Time-out(seconds)</td><td>Leave Blank</td></tr><tr><td>Capacity Type</td><td>Keep default: <code>Inherited</code></td></tr><tr><td>Units of Capacity</td><td><code>2</code></td></tr><tr><td>Percentage of Capacity</td><td>Leave Blank</td></tr></tbody></table></li><li><p>Click on <strong>Save</strong>.</p></li></ol><h3 id="create-a-queue" tabindex="-1">Create a queue <a class="header-anchor" href="#create-a-queue" aria-label="Permalink to &quot;Create a queue&quot;">​</a></h3><ol><li><p>In the Setup Quick Find, search for and select <strong>Queues</strong>.</p></li><li><p>Click on <strong>New</strong>.</p></li><li><p>Set field values as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Label</td><td><code>Messaging Queue</code></td></tr><tr><td>Queue Name</td><td>Messaging_Queue</td></tr><tr><td>Queue Email</td><td>Leave Blank</td></tr><tr><td>Send Email to Members</td><td>Keep default: <code>False</code></td></tr><tr><td>Routing Configuration</td><td><code>Agent_Routing_Configuration</code></td></tr><tr><td>Selected Objects</td><td><code>Messaging Session</code></td></tr><tr><td>Selected Members</td><td><code>Admin User</code></td></tr></tbody></table></li><li><p>Click on <strong>Save</strong>.</p></li></ol><h3 id="create-presence-status" tabindex="-1">Create presence status <a class="header-anchor" href="#create-presence-status" aria-label="Permalink to &quot;Create presence status&quot;">​</a></h3><ol><li><p>In the Setup Quick Find, search for and select <strong>Presence Statuses</strong>.</p></li><li><p>Click on <strong>New</strong>.</p></li><li><p>Set field values as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Label</td><td><code>Available</code></td></tr><tr><td>Developer Name</td><td><code>Available</code></td></tr><tr><td>Status Options</td><td>Keep default: <code>Online</code></td></tr><tr><td>Selected Channels</td><td><code>Messaging</code></td></tr></tbody></table></li><li><p>Click on <strong>Save</strong>.</p></li></ol><h3 id="create-a-presence-status-permission-set" tabindex="-1">Create a presence status permission set <a class="header-anchor" href="#create-a-presence-status-permission-set" aria-label="Permalink to &quot;Create a presence status permission set&quot;">​</a></h3><ol><li><p>In the Setup Quick Find, search for and select <strong>Permission Sets</strong>.</p></li><li><p>Click on <strong>New</strong>.</p></li><li><p>Set field values as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Label</td><td><code>Coral Cloud Service Agent</code></td></tr><tr><td>API Name</td><td><code>Coral_Cloud_Service_Agent</code></td></tr><tr><td>Description</td><td><code>This permission set grants access to messaging and the Available Messaging Status.</code></td></tr><tr><td>License</td><td>Keep default: <code>None</code></td></tr></tbody></table></li><li><p>Click on <strong>Save</strong>.</p></li><li><p>Under Apps, click on <strong>Service Presence Statuses Access</strong>.</p></li><li><p>Click on <strong>Edit</strong>.</p></li><li><p>Add <strong>Available</strong> to <strong>Enabled Service Presence Statuses</strong>.</p></li><li><p>Click on <strong>Save</strong>.</p></li><li><p>Click on <strong>Manage Assignments</strong>.</p></li><li><p>Click on <strong>Add Assignments</strong>.</p></li><li><p><strong>Check</strong> the box next to Admin User.</p></li><li><p>Click on <strong>Save</strong>.</p></li><li><p>Click on <strong>Done</strong>.</p></li></ol><h3 id="create-a-presence-configuration" tabindex="-1">Create a presence configuration <a class="header-anchor" href="#create-a-presence-configuration" aria-label="Permalink to &quot;Create a presence configuration&quot;">​</a></h3><ol><li><p>In the Setup Quick Find, search for and select <strong>Presence Configuration</strong>.</p></li><li><p>Click on <strong>New</strong>.</p></li><li><p>Set field values as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Presence Configuration Name</td><td><code>Messaging Presence Configuration</code></td></tr><tr><td>Developer Name</td><td><code>Messaging_Presence_Configuration</code></td></tr><tr><td>Capacity</td><td><code>20</code></td></tr></tbody></table></li><li><p>Every other value should be left to the defaults.</p></li><li><p>Click on <strong>Save</strong>.</p></li></ol><h3 id="create-a-messaging-channel" tabindex="-1">Create a messaging channel <a class="header-anchor" href="#create-a-messaging-channel" aria-label="Permalink to &quot;Create a messaging channel&quot;">​</a></h3><ol><li><p>In the Setup Quick Find, search for and select <strong>Messaging Settings</strong>.</p></li><li><p>Click on <strong>New Channel</strong>.</p></li><li><p>Click on <strong>Start</strong>.</p></li><li><p>Select <strong>Messaging for In-App and Web</strong>.</p></li><li><p>Set field values as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Channel Name</td><td><code>Agent Channel</code></td></tr><tr><td>Developer Name</td><td><code>Agent_Channel</code></td></tr></tbody></table></li><li><p>Click on <strong>Save</strong>.</p></li></ol><h2 id="step-2-create-omni-channel-routing-flows" tabindex="-1">Step 2: Create Omni-Channel routing flows <a class="header-anchor" href="#step-2-create-omni-channel-routing-flows" aria-label="Permalink to &quot;Step 2: Create Omni-Channel routing flows&quot;">​</a></h2><p>Use Flow to route customers to an Agentforce Agent directly from your Experience Cloud site.</p><h3 id="create-the-route-to-agent-flow" tabindex="-1">Create the Route to Agent flow <a class="header-anchor" href="#create-the-route-to-agent-flow" aria-label="Permalink to &quot;Create the Route to Agent flow&quot;">​</a></h3><ol><li><p>In <strong>Setup</strong>, search for <strong>Flow</strong> in Quick Find and select <strong>Flows</strong>.</p></li><li><p>Click <strong>New Flow</strong>.</p></li><li><p>Click on <strong>Start From Scratch</strong>.</p></li><li><p>Click on <strong>Next</strong>.</p></li><li><p>Select <strong>Omni-Channel Flow</strong> and click <strong>Create</strong>.</p></li><li><p>Open the Toolbox on the right hand side of the builder and Click on <strong>New Resource</strong>.</p></li><li><p>Open the <strong>Resources</strong> panel, by clicking the sidebar icon to the left of the Select Elements button.</p></li><li><p>Using the <strong>New Resource</strong> button, create a variables defined as follows:</p><table tabindex="0"><thead><tr><th><strong>Resource Type</strong></th><th><strong>API Name</strong></th><th><strong>Description</strong></th><th><strong>Data Type</strong></th><th><strong>Available for input</strong></th><th><strong>Available for output</strong></th></tr></thead><tbody><tr><td>Variable</td><td><code>recordId</code></td><td><code>The recordId is used to assign a messaging session to an Agent.</code></td><td>Text</td><td>✅</td><td>Unchecked</td></tr></tbody></table></li><li><p>Mouse over the circle under the <strong>Start</strong> element, click <strong>+</strong>, and select <strong>Get Records</strong>.</p></li><li><p>In the right panel, configure the Get Records action as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Label</td><td><code>Get Messaging Session</code></td></tr><tr><td>API Name</td><td><code>Get_Messaging_Session</code></td></tr><tr><td>Description</td><td>Get the related messaging session that you would like to route to an agent.</td></tr><tr><td>Object</td><td><code>Messaging Session</code></td></tr><tr><td>Condition Requirements</td><td>All Conditions Are Met (AND)</td></tr></tbody></table></li><li><p>Define the condition below:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Operator</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Id</td><td>Equals</td><td>$recordId</td></tr></tbody></table></li><li><p>Leave <strong>How Many Records to Store</strong> and <strong>How to Store Record Data</strong> to their defaults.</p></li><li><p>Mouse over the circle under the <strong>Start</strong> element, click <strong>+</strong>, and select <strong>Route Work</strong>.</p></li><li><p>In the right panel, configure the Get Records action as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Label</td><td><code>Route to Agent</code></td></tr><tr><td>API Name</td><td><code>Route_to_Agent</code></td></tr><tr><td>Description</td><td>Route the messaging session to the Coral Cloud Agent</td></tr><tr><td>How Many Work Records to Route?</td><td>Keep default: <code>Single</code></td></tr><tr><td>Record Id Variable</td><td><code>$recordId</code></td></tr><tr><td>Service Channel</td><td><code>Messaging</code></td></tr><tr><td>Route To</td><td><code>Agentforce Service Agent</code></td></tr><tr><td>Agentforce Service Agent</td><td><code>Coral Cloud Agent</code></td></tr><tr><td>Fallback Queue</td><td><code>Select Queue</code></td></tr><tr><td>Fallback Queue Id</td><td><code>Messaging Queue</code></td></tr></tbody></table></li><li><p>Click on <strong>Save</strong>.</p></li><li><p>Set the values as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Flow Label</td><td><code>Route to Agent</code></td></tr><tr><td>Flow API Name</td><td><code>Route_to_Agent</code></td></tr></tbody></table></li><li><p>Click on <strong>Activate</strong>.</p></li></ol><h2 id="step-3-update-the-queue-routing-flow" tabindex="-1">Step 3: Update the Queue Routing flow <a class="header-anchor" href="#step-3-update-the-queue-routing-flow" aria-label="Permalink to &quot;Step 3: Update the Queue Routing flow&quot;">​</a></h2><p>Use a flow to route the conversation to a queue.</p><h3 id="create-the-queue-routing-flow" tabindex="-1">Create the Queue Routing flow <a class="header-anchor" href="#create-the-queue-routing-flow" aria-label="Permalink to &quot;Create the Queue Routing flow&quot;">​</a></h3><ol><li><p>In <strong>Setup</strong>, search for <strong>Flow</strong> in Quick Find and select <strong>Flows</strong>.</p></li><li><p>Open the <strong>Route to Queue</strong> Flow.</p></li></ol><p>This flow is looking up a default contact, Sofia Rodriguez, for the workshop, so that we can illustrate how the agent is connected to a Contact and Case who may be starting the chat. In a real implementation, you should follow best practices to authenticate a contact and look them up in the flow before creating the case and session.</p><h3 id="update-the-messaging-session" tabindex="-1">Update the messaging session <a class="header-anchor" href="#update-the-messaging-session" aria-label="Permalink to &quot;Update the messaging session&quot;">​</a></h3><ol><li><p>Mouse over the circle under the <strong>Get Default Case</strong> element, click <strong>+</strong>, and select <strong>Update Records</strong>.</p></li><li><p>In the right panel, configure the Update Records action as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Label</td><td><code>Update Messaging Session</code></td></tr><tr><td>API Name</td><td><code>Update_Messaging_Session</code></td></tr><tr><td>Description</td><td><code>Update the messaging session with the created Case Id.</code></td></tr><tr><td>How to Find Records to Update and Set Their Values</td><td>Specify conditions to identify records, and set fields individually</td></tr><tr><td>Object</td><td>Messaging Session</td></tr></tbody></table></li><li><p>Define the condition below:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Operator</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Id</td><td>Equals</td><td><code>$recordId</code></td></tr></tbody></table></li><li><p>Set the following field values:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>CaseId</td><td><code>{!Create_Case}</code></td></tr></tbody></table></li></ol><h3 id="add-the-route-work-element" tabindex="-1">Add the Route Work element <a class="header-anchor" href="#add-the-route-work-element" aria-label="Permalink to &quot;Add the Route Work element&quot;">​</a></h3><ol><li><p>Mouse under the circle under the <strong>Update Messaging Session</strong> element, click <strong>+</strong>, and select <strong>Route Work</strong>.</p></li><li><p>In the right panel, configure the Get Records action as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Label</td><td><code>Route to Queue</code></td></tr><tr><td>API Name</td><td><code>Route_to_Queue</code></td></tr><tr><td>Description</td><td>Route the messaging session to the default queue</td></tr><tr><td>How Many Work Records to Route?</td><td>Keep default: <code>Single</code></td></tr><tr><td>Record Id Variable</td><td><code>$recordId</code></td></tr><tr><td>Service Channel</td><td><code>Messaging</code></td></tr><tr><td>Route To</td><td><code>Queue</code></td></tr><tr><td>Queue</td><td><code>Select Queue</code></td></tr><tr><td>Queue Id</td><td><code>Messaging Queue</code></td></tr></tbody></table></li><li><p>Click on <strong>Save As</strong>.</p></li><li><p>Click on <strong>Save</strong>.</p></li><li><p>Click on <strong>Activate</strong>.</p></li></ol><h2 id="step-4-update-the-agent-and-messaging-channel-with-flows" tabindex="-1">Step 4: Update the agent and messaging channel with flows <a class="header-anchor" href="#step-4-update-the-agent-and-messaging-channel-with-flows" aria-label="Permalink to &quot;Step 4: Update the agent and messaging channel with flows&quot;">​</a></h2><p>Associate the Coral Cloud Agent to the newly created routing flows.</p><h3 id="add-the-route-to-queue-flow-to-your-agent" tabindex="-1">Add the Route to Queue flow to your agent <a class="header-anchor" href="#add-the-route-to-queue-flow-to-your-agent" aria-label="Permalink to &quot;Add the Route to Queue flow to your agent&quot;">​</a></h3><ol><li><p>Click the <strong>back arrow</strong> to return to Setup.</p></li><li><p>In the Setup Quick Find, search for and select <strong>Agents</strong>.</p></li><li><p>Open the <strong>Coral Cloud Agent</strong>.</p></li><li><p>Click on the <strong>Connections</strong> tab.</p></li><li><p>Click on the <strong>Edit icon</strong> to Choose a Flow under the Outbound Omni-Channel Flow settings.</p><p><img src="'+d+'" alt="" data-zoomable="true"></p></li><li><p>Select the <strong>Route to Queue</strong> flow.</p></li><li><p>Click on <strong>Save</strong>.</p></li></ol><h3 id="add-the-route-to-agent-flow-to-the-messaging-configuration" tabindex="-1">Add the Route to Agent flow to the messaging configuration <a class="header-anchor" href="#add-the-route-to-agent-flow-to-the-messaging-configuration" aria-label="Permalink to &quot;Add the Route to Agent flow to the messaging configuration&quot;">​</a></h3><ol><li><p>In the Setup Quick Find, search for and select <strong>Messaging Settings</strong>.</p></li><li><p>Open the <strong>Agent Channel</strong>.</p></li><li><p>Click on the <strong>Edit</strong> button under Omni-Channel Settings.</p></li><li><p>Configure the settings as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Routing Type</td><td><code>Omni-Flow</code></td></tr><tr><td>Flow Definition</td><td><code>Route to Agent</code></td></tr><tr><td>Fallback Queue</td><td><code>Messaging Queue</code></td></tr></tbody></table></li><li><p>Click on <strong>Save</strong>.</p></li><li><p>Click on <strong>Activate</strong>.</p></li><li><p><strong>Accept</strong> the Terms and Conditions.</p></li></ol><h2 id="step-5-create-an-embedded-service-deployment" tabindex="-1">Step 5: Create an Embedded Service deployment <a class="header-anchor" href="#step-5-create-an-embedded-service-deployment" aria-label="Permalink to &quot;Step 5: Create an Embedded Service deployment&quot;">​</a></h2><p>Create an Embedded Service deployment that can be used to distribute your agent.</p><ol><li><p>In the Setup Quick Find, search for and select <strong>Embedded Service Deployments</strong>.</p></li><li><p>Click on <strong>New Deployment</strong>.</p></li><li><p>Select <strong>Messaging for In-App and Web</strong>.</p></li><li><p>Click on <strong>Next</strong>.</p></li><li><p>Select <strong>Web</strong>.</p></li><li><p>Configure the deployment as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Embedded Service Deployment Name</td><td><code>Agent Web Deployment</code></td></tr><tr><td>API Name</td><td><code>Agent_Web_Deployment</code></td></tr><tr><td>Domain</td><td><code>my.site.com</code></td></tr><tr><td>Messaging Channel</td><td><code>Agent Channel</code></td></tr></tbody></table></li><li><p>Click on <strong>Save</strong>.</p></li><li><p>Once the save has been completed, Click on <strong>Publish</strong>.</p></li></ol><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>You have just created a custom service agent that can be used to interact with your customers. Next, we will use the service deployment capabilities in Service Cloud to deploy the Agent to a customer-facing Experience Cloud site.</p>',43)]))}const f=e(s,[["render",i]]);export{b as __pageData,f as default};
