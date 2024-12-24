import{_ as t,c as o,a1 as n,o as i}from"./chunks/framework.BRP8cXOc.js";const r="/agentforce-workshop/service-agent-architecture_coral-cloud-agent.BHFoxQjG.webp",a="/agentforce-workshop/service-agent-action-refresh.BEH_hRlu.webp",f=JSON.parse('{"title":"Exercise 1: Create a new service agent","description":"","frontmatter":{},"headers":[],"relativePath":"agentforce-workshop/service-agents/1-create-a-service-agent.md","filePath":"agentforce-workshop/service-agents/1-create-a-service-agent.md"}'),s={name:"agentforce-workshop/service-agents/1-create-a-service-agent.md"};function c(l,e,d,p,g,h){return i(),o("div",null,e[0]||(e[0]=[n('<h1 id="exercise-1-create-a-new-service-agent" tabindex="-1">Exercise 1: Create a new service agent <a class="header-anchor" href="#exercise-1-create-a-new-service-agent" aria-label="Permalink to &quot;Exercise 1: Create a new service agent&quot;">​</a></h1><p>In this exercise, you will use your new Agentforce skills to create a new agent that you can distribute directly to your customers using Agentforce Service Agents. Creating a new agent is the first step in exposing an agent to your customers.</p><p><img src="'+r+'" alt="" data-zoomable="true"></p><h2 id="step-1-create-a-new-agent" tabindex="-1">Step 1: Create a new agent <a class="header-anchor" href="#step-1-create-a-new-agent" aria-label="Permalink to &quot;Step 1: Create a new agent&quot;">​</a></h2><p>While the default Einstein Copilot Agent is available for you to distribute to your internal Salesforce users, you can also create custom agents that you can use just about anywhere else. Adding a new agent is as simple as clicking a button and adding details.</p><ol><li><p>In the Setup Quick Find, search for and select <strong>Agents</strong>.</p></li><li><p>Click <strong>+New Agent</strong>.</p></li><li><p>Leave <strong>Agentforce Service Agent</strong> selected and click <strong>Next</strong>.</p></li><li><p>Deselect all of the pre-created topics and click <strong>Next</strong>.</p></li><li><p>Set field values as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Label</td><td><code>Coral Cloud Agent</code></td></tr><tr><td>Description</td><td><code>This is the Coral Cloud Agent that helps customers learn more about Experiences as well as book sessions.</code></td></tr><tr><td>Role</td><td><code>The agent&#39;s job is to assist users in navigating and managing bookings for different experiences offered by Coral Cloud Resorts, ensuring a seamless customer service experience by providing accurate information and resolving issues promptly.</code></td></tr><tr><td>Company</td><td><code>Coral Cloud Resorts is a fictitious seaside resort that manages guests and their reservations. It offers a rich set of experiences.</code></td></tr><tr><td>Agent user</td><td>New Agent User</td></tr><tr><td>Enrich event logs with conversation data</td><td>True</td></tr></tbody></table></li><li><p>Click <strong>Next</strong>.</p></li><li><p>Click <strong>Create</strong>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Each agent has a designated running user and will have access to all of the data and metadata that that user can see. Ensure that you start with a <a href="https://help.salesforce.com/s/articleView?id=release-notes.rn_forcecom_general_new_profile.htm&amp;release=226&amp;type=5" target="_blank" rel="noreferrer">minimum access profile</a> and only give the agent access to the data that it needs.</p></div></li></ol><h2 id="step-2-configure-the-coral-cloud-agent" tabindex="-1">Step 2: Configure the Coral Cloud Agent <a class="header-anchor" href="#step-2-configure-the-coral-cloud-agent" aria-label="Permalink to &quot;Step 2: Configure the Coral Cloud Agent&quot;">​</a></h2><p>Configure the agent with topics and actions that it can use to support your customers.</p><ol><li><p>In Agent Builder, click on the <strong>New</strong> drop down and click on <strong>New Topic</strong>.</p></li><li><p>Configure the topic as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Topic Label</td><td><code>Customer Experience Support</code></td></tr><tr><td>Classification Description</td><td><code>This topic addresses customer inquiries and issues related to booking experiences at Coral Cloud Resorts, including making reservations, modifying bookings, and answering queries about experience details.</code></td></tr><tr><td>Scope</td><td><code>The agent&#39;s job is to assist users in navigating and managing bookings for different experiences offered by Coral Cloud Resorts, ensuring a seamless customer service experience by providing accurate information and resolving issues promptly.</code></td></tr><tr><td>Instruction</td><td><code>If a customer would like more information on Activities or Experiences, you should run the action &#39;Get Experience Details&#39; and then summarize the results with improved readability. Always ensure you know the customer before running this action.</code></td></tr></tbody></table></li><li><p>Click on <strong>Next</strong>.</p></li><li><p>Do <strong>not</strong> select any actions.</p></li><li><p>Click <strong>Finish</strong>.</p></li></ol><h2 id="step-3-create-custom-service-agent-actions" tabindex="-1">Step 3: Create custom service agent actions <a class="header-anchor" href="#step-3-create-custom-service-agent-actions" aria-label="Permalink to &quot;Step 3: Create custom service agent actions&quot;">​</a></h2><p>Create custom actions for your agent to access data in Salesforce.</p><h3 id="create-the-get-experience-details-action" tabindex="-1">Create the Get Experience Details action <a class="header-anchor" href="#create-the-get-experience-details-action" aria-label="Permalink to &quot;Create the Get Experience Details action&quot;">​</a></h3><ol><li><p>In Agent Builder, select the <strong>Customer Experience Support</strong> topic.</p></li><li><p>Click on the <strong>This Topic&#39;s Actions</strong> tab in the topic details.</p></li><li><p>Click on the <strong>New</strong> drop down and click on <strong>New Action</strong>.</p></li><li><p>Configure the action as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Reference Action Type</td><td><code>Flow</code></td></tr><tr><td>Reference Action</td><td><code>Get Experience Details</code></td></tr><tr><td>Agent Action Label</td><td>Keep default</td></tr><tr><td>Agent Action API Name</td><td>Keep default</td></tr></tbody></table></li><li><p>Click <strong>Next</strong>.</p></li><li><p>Leave the default instructions in.</p></li><li><p>Check <strong>Require input</strong> for the <code>experienceName</code> input.</p></li><li><p>Check <strong>show</strong> in <strong>Show in Conversation</strong> for the <code>experienceDetails</code> output.</p></li><li><p>Click <strong>Finish</strong>.</p></li><li><p>Test out the instructions in the Conversation Preview. If prompted that you are about to use Einstein, click on <strong>Got It</strong>.</p></li><li><p>Click on the <strong>refresh</strong> button to reset the conversation.</p><p><img src="'+a+'" alt="" data-zoomable="true"></p></li><li><p>Enter this prompt in the dialog box:</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki Codey High Noon vp-code" tabindex="0"><code><span class="line"><span>Can you let me know more about the full moon beach party experience?</span></span></code></pre></div></li></ol><h3 id="create-the-get-customer-details-action" tabindex="-1">Create the Get Customer Details action <a class="header-anchor" href="#create-the-get-customer-details-action" aria-label="Permalink to &quot;Create the Get Customer Details action&quot;">​</a></h3><ol><li><p>Click on the <strong>New</strong> drop down and click on <strong>New Action</strong>.</p></li><li><p>Configure the action as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Reference Action Type</td><td><code>Flow</code></td></tr><tr><td>Reference Action</td><td><code>Get Customer Details</code></td></tr><tr><td>Agent Action Label</td><td>Keep default</td></tr><tr><td>Agent Action API Name</td><td>Keep default</td></tr></tbody></table></li><li><p>Click <strong>Next</strong>.</p></li><li><p>Leave the default instructions in.</p></li><li><p>Check <strong>Require input</strong> for both inputs (<code>email</code> and <code>membershipNumber</code>).</p></li><li><p>Check show in <strong>Show in Conversation</strong> for the <code>contactDetails</code> output.</p></li><li><p>Click <strong>Finish</strong>.</p></li></ol><h3 id="create-the-get-sessions-action" tabindex="-1">Create the Get Sessions action <a class="header-anchor" href="#create-the-get-sessions-action" aria-label="Permalink to &quot;Create the Get Sessions action&quot;">​</a></h3><ol><li><p>Click <strong>New Agent Action</strong>.</p></li><li><p>Configure the action as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Reference Action Type</td><td><code>Flow</code></td></tr><tr><td>Reference Action</td><td><code>Get Sessions</code></td></tr><tr><td>Agent Action Label</td><td>Keep default</td></tr><tr><td>Agent Action API Name</td><td>Keep default</td></tr></tbody></table></li><li><p>Click <strong>Next</strong>.</p></li><li><p>Leave the default instructions in.</p></li><li><p>Check <strong>Require input</strong> for both inputs (<code>experienceId</code> and <code>startDate</code>).</p></li><li><p>Check <strong>show</strong> in <strong>Show in Conversation</strong> for the <code>sessions</code> output.</p></li><li><p>Click <strong>Finish</strong>.</p></li></ol><h3 id="create-the-create-booking-action" tabindex="-1">Create the Create Booking action <a class="header-anchor" href="#create-the-create-booking-action" aria-label="Permalink to &quot;Create the Create Booking action&quot;">​</a></h3><ol><li><p>Click <strong>New Agent Action</strong>.</p></li><li><p>Configure the action as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Reference Action Type</td><td><code>Flow</code></td></tr><tr><td>Reference Action</td><td><code>Create Booking</code></td></tr><tr><td>Agent Action Label</td><td>Keep default</td></tr><tr><td>Agent Action API Name</td><td>Keep default</td></tr></tbody></table></li><li><p>Click <strong>Next</strong>.</p></li><li><p>Leave the default instructions in.</p></li><li><p>Check <strong>Require input</strong> for all three inputs (<code>contactId</code>, <code>numberOfGuests</code>, and <code>instructions</code>).</p></li><li><p>Check <strong>show</strong> in <strong>Show in Conversation</strong> for the <code>createdBooking</code> output.</p></li><li><p>Click <strong>Finish</strong>.</p></li></ol><h2 id="step-4-add-actions-to-coral-cloud-agent" tabindex="-1">Step 4: Add actions to Coral Cloud Agent <a class="header-anchor" href="#step-4-add-actions-to-coral-cloud-agent" aria-label="Permalink to &quot;Step 4: Add actions to Coral Cloud Agent&quot;">​</a></h2><ol><li><p>Click on the <strong>Topic Configuration</strong> tab in the Topic Details.</p></li><li><p>Click on the <strong>New Instruction</strong> Button to create a new instruction, repeat for each of the following instructions:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Customer Validation Instructions</td><td><code>If the customer is not known, you must always ask for their email address and their membership number. Get their Contact record by running the action &#39;Get Customer Details&#39; before running any other actions.</code></td></tr><tr><td>Session Query Instructions</td><td><code>If asked to get sessions for the experience use the &#39;Get Sessions&#39; action. Ask for the date of the sessions if not provided. Use the Id of the Experience__c from the &#39;Get Experience Details&#39;.</code></td></tr><tr><td>Create Booking Instructions</td><td><code>If asked to book, use the action &#39;Create Booking&#39;. The Contact__c is the contact ID from the &#39;Get Customer Details&#39;. The Session__c is the ID of the session from the action &#39;Get Sessions&#39;. If multiple sessions are present ask to select one of the sessions and use that Session as the ID for the Session__c. Prompt for the Number of Guests and use that for the Number_of_Guests__c</code>.</td></tr></tbody></table></li><li><p>Click <strong>Save</strong>.</p></li><li><p>Test out the instructions in the Conversation Preview. If prompted that you are about to use Einstein, click on <strong>Got It</strong>.</p></li><li><p>Enter this prompt:</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki Codey High Noon vp-code" tabindex="0"><code><span class="line"><span>Can you let me know more about the full moon beach party experience?</span></span></code></pre></div></li><li><p>Press your Return/Enter key and notice the response, asking you to validate your identity before proceeding.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki Codey High Noon vp-code" tabindex="0"><code><span class="line"><span>My email address is sofiarodriguez@example.com and my membership number is 10008155</span></span></code></pre></div></li><li><p>Follow the prompts to create a booking.</p></li><li><p>Click on <strong>Activate</strong> to activate the agent.</p></li></ol><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>You have just created a custom service agent that can be used to interact with your customers. Next, we will use the service deployment capabilities in Service Cloud to deploy the agent to a customer-facing Experience Cloud site.</p>',23)]))}const m=t(s,[["render",c]]);export{f as __pageData,m as default};
