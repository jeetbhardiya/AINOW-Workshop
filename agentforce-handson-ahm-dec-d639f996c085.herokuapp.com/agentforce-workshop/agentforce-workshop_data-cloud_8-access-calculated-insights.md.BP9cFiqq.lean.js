import{_ as e,c as o,a1 as s,o as a}from"./chunks/framework.BRP8cXOc.js";const i="/agentforce-workshop/data-cloud-copyfields-insights-status.D1IOgu12.webp",n="/agentforce-workshop/data-cloud-copyfields-setup.DcFl_EWf.webp",l="/agentforce-workshop/data-cloud-copyfields-select-object.WAZ7glzo.webp",r="/agentforce-workshop/data-cloud-copyfields-select-fields.ClhmrmyN.webp",c="/agentforce-workshop/data-cloud-copyfields-select-label.jV0l8Wyg.webp",p="/agentforce-workshop/data-cloud-copyfields-field-mapping.CnHE96pK.webp",d="/agentforce-workshop/data-cloud-copyfields-sync.CLBjNQ79.webp",h="/agentforce-workshop/data-cloud-copyfields-contact-record.CTEzazRy.webp",S=JSON.parse('{"title":"Exercise 9 (Optional): Access Calculated Insights in Salesforce","description":"","frontmatter":{},"headers":[],"relativePath":"agentforce-workshop/data-cloud/8-access-calculated-insights.md","filePath":"agentforce-workshop/data-cloud/8-access-calculated-insights.md"}'),g={name:"agentforce-workshop/data-cloud/8-access-calculated-insights.md"};function u(m,t,f,b,C,y){return a(),o("div",null,t[0]||(t[0]=[s('<h1 id="exercise-9-optional-access-calculated-insights-in-salesforce" tabindex="-1">Exercise 9 (Optional): Access Calculated Insights in Salesforce <a class="header-anchor" href="#exercise-9-optional-access-calculated-insights-in-salesforce" aria-label="Permalink to &quot;Exercise 9 (Optional): Access Calculated Insights in Salesforce&quot;">​</a></h1><p>In this exercise, you&#39;ll use CRM Enrichment to copy values from Data Cloud to Salesforce. You&#39;ll copy the calculated insights you created in the previous exercise (Lifetime Reservations and the Lifetime Customer Value) to fields in the Contact object.</p><h2 id="step-1-configure-permissions" tabindex="-1">Step 1: Configure permissions <a class="header-anchor" href="#step-1-configure-permissions" aria-label="Permalink to &quot;Step 1: Configure permissions&quot;">​</a></h2><p>In this step, you’ll set up the permissions needed to access the default data space (where your calculated insights reside) and copy values into the Contact object.</p><h3 id="modify-the-data-cloud-admin-permission-set" tabindex="-1">Modify the Data Cloud Admin permission set <a class="header-anchor" href="#modify-the-data-cloud-admin-permission-set" aria-label="Permalink to &quot;Modify the Data Cloud Admin permission set&quot;">​</a></h3><p>To add permissions to access the default Data Space:</p><ol><li><p>Open the <strong>Setup Menu</strong> and click <strong>Setup</strong>.</p></li><li><p>In the Quick Find, search for <strong>Permission Sets</strong> and click <strong>Permission Sets</strong>.</p></li><li><p>Click the <strong>Data Cloud Admin</strong> permission set.</p></li><li><p>In the <strong>Apps</strong> section, click <strong>Data Cloud Data Space Management</strong>.</p></li><li><p>In the <strong>Data Spaces</strong> panel, click <strong>Edit</strong>.</p></li><li><p>Check the <strong>Enabled</strong> checkbox for the <strong>default</strong> data space and click <strong>Save</strong>.</p></li><li><p>Click <strong>OK</strong> in the confirmation dialog.</p></li></ol><h3 id="modify-the-customer-360-data-platform-integration-permission-set" tabindex="-1">Modify the Customer 360 Data Platform Integration permission set <a class="header-anchor" href="#modify-the-customer-360-data-platform-integration-permission-set" aria-label="Permalink to &quot;Modify the Customer 360 Data Platform Integration permission set&quot;">​</a></h3><p>To add permissions required for Data Cloud to copy values into Contact object fields:</p><ol><li><p>In Permission Sets, select the <strong>Customer 360 Data Platform Integration</strong> permission set.</p></li><li><p>In the Apps section, click <strong>Object Settings</strong>.</p></li><li><p>Click <strong>Contacts</strong>.</p></li><li><p>Click the <strong>Edit</strong> button.</p></li><li><p>Check the <strong>Modify All</strong> checkbox. This will automatically check the <strong>Delete</strong> checkbox as well.</p></li><li><p>Scroll down the page into the <strong>Field Permissions</strong> section and check the <strong>Edit Access</strong> checkbox for the <strong>Lifetime_Reservations__c</strong> and <strong>Lifetime_Value__c</strong> fields.</p></li><li><p>Scroll back up to the top and click <strong>Save</strong>.</p></li></ol><h2 id="step-2-verify-the-status-of-the-calculated-insights-job" tabindex="-1">Step 2: Verify the status of the calculated insights job <a class="header-anchor" href="#step-2-verify-the-status-of-the-calculated-insights-job" aria-label="Permalink to &quot;Step 2: Verify the status of the calculated insights job&quot;">​</a></h2><p>Before moving forward with this exercise, make sure that the calculated insights job (Exercise 7) has completed. To check the status of your calculated insights job:</p><ol><li><p>In the Data Cloud app, click the <strong>Calculated Insights</strong> tab.</p></li><li><p>Check the value of the <strong>Last Run</strong> column for the <strong>Spend Profile by Guest</strong> insight. The value will be <strong>Success</strong> if the job completed successfully.</p></li></ol><p><img src="'+i+'" alt="" data-zoomable="true"></p><h2 id="step-3-create-a-data-cloud-copy-field-enrichment-in-salesforce" tabindex="-1">Step 3: Create a Data Cloud Copy Field enrichment in Salesforce <a class="header-anchor" href="#step-3-create-a-data-cloud-copy-field-enrichment-in-salesforce" aria-label="Permalink to &quot;Step 3: Create a Data Cloud Copy Field enrichment in Salesforce&quot;">​</a></h2><p>In this step, you&#39;ll leverage the Data Cloud <strong>Copy Fields</strong> feature to copy calculated insights into Contact object fields.</p><ol><li><p>Using the App Launcher, open the <strong>Coral Cloud</strong> application.</p></li><li><p>Navigate to the <strong>Sofia Rodriguez</strong> Contact record page.</p></li><li><p>Open the <strong>Setup Menu</strong> and click <strong>Edit Object</strong>.</p></li><li><p>Click <strong>Data Cloud Copy Field</strong> in the left sidebar.</p><p><img src="'+n+'" alt="" data-zoomable="true"></p></li><li><p>Click <strong>New</strong>.</p></li><li><p>In the <strong>Data Cloud Object</strong> field, select the <strong>Spend Profile By Guest</strong> Calculated Insight, and click <strong>Next</strong>.</p><p><img src="'+l+'" alt="" data-zoomable="true"></p></li><li><p>Select the <strong>Lifetime Reservations</strong> and <strong>Lifetime Value</strong> fields, and click <strong>Next</strong>.</p><p><img src="'+r+'" alt="" data-zoomable="true"></p></li><li><p>Change the <strong>Label</strong> to <strong>Spend Profile By Guest</strong> (remove &quot;default&quot;), keep the default API name, and click <strong>Next</strong>.</p><p><img src="'+c+'" alt="" data-zoomable="true"></p></li><li><p>In the <strong>Field Mapping</strong> tab, map Data Cloud measures to Contact fields as follows:</p><table tabindex="0"><thead><tr><th><strong>Data Cloud: Spend Profile By Guest</strong></th><th>→</th><th><strong>Contact</strong></th></tr></thead><tbody><tr><td>Lifetime Reservations</td><td>→</td><td><strong>Lifetime Reservations</strong></td></tr><tr><td>Lifetime Value</td><td>→</td><td><strong>Lifetime Value</strong></td></tr></tbody></table><p><img src="'+p+'" alt="" data-zoomable="true"></p></li><li><p>Click <strong>Save and Start Sync</strong>.</p></li><li><p>In the dialog box, click <strong>Save and Start Sync</strong>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This process can take up to 15 minutes to complete.</p></div></li><li><p>After a few minutes, click the <strong>Sync History</strong> tab in the Spend Profile By Guest Data Cloud Copy Field enrichment. Verify the <strong>Sync Status</strong> is <strong>Complete</strong>. If not, wait until it completes.</p><p><img src="'+d+'" alt="" data-zoomable="true"></p></li></ol><h2 id="step-4-check-out-the-data-cloud-calculated-insights-on-the-contact-page" tabindex="-1">Step 4: Check out the Data Cloud calculated insights on the Contact page <a class="header-anchor" href="#step-4-check-out-the-data-cloud-calculated-insights-on-the-contact-page" aria-label="Permalink to &quot;Step 4: Check out the Data Cloud calculated insights on the Contact page&quot;">​</a></h2><ol><li><p>Navigate to the Contact record page for <strong>Sofia Rodriguez</strong>.</p></li><li><p>On the <strong>Details</strong> tab, scroll down to view the new values for <strong>Lifetime Value</strong> and <strong>Lifetime Reservations</strong>.</p><p><img src="'+h+'" alt="" data-zoomable="true"></p></li></ol><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>In this exercise, you used CRM enrichment to copy calculated insights from Data Cloud to the Salesforce Contact object fields.</p>',21)]))}const w=e(g,[["render",u]]);export{S as __pageData,w as default};
