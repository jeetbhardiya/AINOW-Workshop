import{_ as e}from"./chunks/agents-flow-topic-action-tab.DgDFYXli.js";import{_ as o,c as n,a1 as a,o as s}from"./chunks/framework.BRP8cXOc.js";const i="/agentforce-workshop/agents-prompt-create-action.BGgyBvXo.webp",r="/agentforce-workshop/agents-prompt-create-action-2.DOLKPCfb.webp",p="/agentforce-workshop/agents-prompt-add-action.D_t8xev7.webp",c="/agentforce-workshop/agents-prompt-builder.BdLCpZHk.webp",k=JSON.parse('{"title":"Exercise 5 (Optional): Extend Agents with Prompt Template Actions","description":"","frontmatter":{},"headers":[],"relativePath":"agentforce-workshop/agents/5-prompt-template-actions.md","filePath":"agentforce-workshop/agents/5-prompt-template-actions.md"}'),l={name:"agentforce-workshop/agents/5-prompt-template-actions.md"};function d(g,t,h,m,u,b){return s(),n("div",null,t[0]||(t[0]=[a('<h1 id="exercise-5-optional-extend-agents-with-prompt-template-actions" tabindex="-1">Exercise 5 (Optional): Extend Agents with Prompt Template Actions <a class="header-anchor" href="#exercise-5-optional-extend-agents-with-prompt-template-actions" aria-label="Permalink to &quot;Exercise 5 (Optional): Extend Agents with Prompt Template Actions&quot;">​</a></h1><p>Now, let’s make the Flex prompt template that you created in the Prompt Builder section available to agents in a conversational fashion.</p><h2 id="step-1-create-the-agent-custom-action" tabindex="-1">Step 1: Create the agent custom action <a class="header-anchor" href="#step-1-create-the-agent-custom-action" aria-label="Permalink to &quot;Step 1: Create the agent custom action&quot;">​</a></h2><ol><li><p>From Setup, open <strong>Agent Actions</strong>.</p></li><li><p>Click <strong>New Agent Action</strong>, and configure the action as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Reference Action Type</td><td>Prompt Template</td></tr><tr><td>Reference Action</td><td>Generate Personalized Schedule</td></tr><tr><td>Agent Action Label</td><td>Keep default</td></tr><tr><td>Agent Action API Name</td><td>Keep default</td></tr></tbody></table><p><img src="'+i+'" alt="" data-zoomable="true"></p></li><li><p>Click <strong>Next</strong>.</p></li><li><p>For the Agent Action instructions, type:</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki Codey High Noon vp-code" tabindex="0"><code><span class="line"><span>This action is used to generate a personalized schedule for a contact. The personalized schedule includes a list of resort experiences the contact may be interested in and a suggested schedule for the day. You must use the QueryRecords action to fetch the contact before executing the action.</span></span></code></pre></div><p>It’s important to add this last sentence, so the agent can pass the contact in the correct format to the prompt template.</p></li><li><p>For the <strong>Contact Input</strong>, set the Instructions to:</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki Codey High Noon vp-code" tabindex="0"><code><span class="line"><span>Contact for which the personalized schedule should be generated. Must be a valid JSON representing the contact info, chained from having executed the QueryRecords action.</span></span></code></pre></div></li><li><p>For the <strong>Prompt Response</strong> Output, check <strong>Show in conversation</strong>.</p><p><img src="'+r+'" alt="" data-zoomable="true"></p></li><li><p>Click <strong>Finish</strong>.</p></li></ol><h2 id="step-2-add-the-action-to-your-agent" tabindex="-1">Step 2: Add the action to your agent <a class="header-anchor" href="#step-2-add-the-action-to-your-agent" aria-label="Permalink to &quot;Step 2: Add the action to your agent&quot;">​</a></h2><p>Next, let&#39;s add the custom action to your Agent:</p><ol><li><p>From Setup, open <strong>Agents</strong> (under Agent Studio).</p></li><li><p>Click on <strong>Einstein Copilot</strong> in the agent list.</p></li><li><p>Click <strong>Open in Builder</strong>.</p></li><li><p>In the <strong>Topics</strong> sidebar, click the <strong>CustomerServiceAssistant</strong> topic.</p></li><li><p>Click the <strong>This Topic&#39;s Actions</strong> tab.</p><p><img src="'+e+'" alt="" data-zoomable="true"></p></li><li><p>Click the <strong>New</strong> button, and click <strong>Add from Asset Library</strong> to add an action.</p></li><li><p>Check the <strong>Generate Personalized Schedule</strong> action and click <strong>Finish</strong>.</p><p><img src="'+p+'" alt="" data-zoomable="true"></p></li><li><p>In the Conversation Preview panel, enter the following prompt:</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki Codey High Noon vp-code" tabindex="0"><code><span class="line"><span>Generate a personalized schedule for contact named Sofia Rodriguez.</span></span></code></pre></div><p><img src="'+c+'" alt="" data-zoomable="true"></p></li></ol>',7)]))}const A=o(l,[["render",d]]);export{k as __pageData,A as default};
