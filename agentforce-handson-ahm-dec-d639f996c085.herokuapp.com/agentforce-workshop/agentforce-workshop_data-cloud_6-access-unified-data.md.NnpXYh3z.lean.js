import{_ as e,c as a,a1 as o,o as l}from"./chunks/framework.BRP8cXOc.js";const i="/agentforce-workshop/data-cloud-rl-no-list.DnoVTS3R.webp",r="/agentforce-workshop/data-cloud-rl-setup.R1dzeTGW.webp",s="/agentforce-workshop/data-cloud-rl-new-dcrl-object.4-ZlqKMR.webp",n="/agentforce-workshop/data-cloud-rl-new-dcrl-name.D8Uf0n-k.webp",c="/agentforce-workshop/data-cloud-rl-new-dcrl-label.CeFxCIhB.webp",d="/agentforce-workshop/data-cloud-rl-page-layout.Bfp4yyzq.webp",p="/agentforce-workshop/data-cloud-rl-fields.DWp_HxbP.webp",h="/agentforce-workshop/data-cloud-rl-dynamic-related-list.D39ntf5l.webp",g="/agentforce-workshop/data-cloud-rl-dynamic-related-list-filter.C5DcZPC3.webp",u="/agentforce-workshop/data-cloud-rl-dynamic-related-list-final.JzQvgO95.webp",R=JSON.parse('{"title":"Exercise 6: Access Unified Data from Salesforce","description":"","frontmatter":{},"headers":[],"relativePath":"agentforce-workshop/data-cloud/6-access-unified-data.md","filePath":"agentforce-workshop/data-cloud/6-access-unified-data.md"}'),f={name:"agentforce-workshop/data-cloud/6-access-unified-data.md"};function m(b,t,k,y,C,w){return l(),a("div",null,t[0]||(t[0]=[o('<h1 id="exercise-6-access-unified-data-from-salesforce" tabindex="-1">Exercise 6: Access Unified Data from Salesforce <a class="header-anchor" href="#exercise-6-access-unified-data-from-salesforce" aria-label="Permalink to &quot;Exercise 6: Access Unified Data from Salesforce&quot;">​</a></h1><p>Now that you consolidated Guest and Reservation data in Data Cloud, you can empower Coral Cloud Resorts&#39; staff with a unified view of their customers in Salesforce.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can continue with this exercise, but data will not appear in the related list you create until the identity resolution job you started in the previous exercise completes.</p></div><h2 id="step-1-create-a-data-cloud-related-list-for-reservations" tabindex="-1">Step 1: Create a Data Cloud Related List for reservations <a class="header-anchor" href="#step-1-create-a-data-cloud-related-list-for-reservations" aria-label="Permalink to &quot;Step 1: Create a Data Cloud Related List for reservations&quot;">​</a></h2><p>In this step, you’ll create a Data Cloud Related List to display Reservations on the Salesforce Contact record page.</p><ol><li><p>Using the App Launcher, open the <strong>Coral Cloud</strong> application.</p></li><li><p>Search for <strong>Sofia Rodriguez</strong>, and click the Sofia Rodriguez Contact.</p></li><li><p>Click the <strong>Related</strong> tab. Notice that there is currently no related list for Reservations.</p><p><img src="'+i+'" alt="" data-zoomable="true"></p></li><li><p>Open the <strong>Setup</strong> menu and click <strong>Edit Object</strong>.</p></li><li><p>Click <strong>Data Cloud Related List</strong> in the left sidebar.</p><p><img src="'+r+'" alt="" data-zoomable="true"></p></li><li><p>Click <strong>New</strong>.</p></li><li><p>In the <strong>Data Cloud Object</strong> field, select the <strong>Reservation</strong> object, and click <strong>Next</strong>.</p><p><img src="'+s+'" alt="" data-zoomable="true"></p></li><li><p>Keep <strong>Reservation</strong> as the <strong>Child Relationship Name</strong>, and click <strong>Next</strong>.</p><p><img src="'+n+'" alt="" data-zoomable="true"></p></li><li><p>Change the Related list label to <strong>Reservations</strong> (plural).</p></li><li><p>Check the <strong>Contact Layout</strong> checkbox.</p></li><li><p>Check the <strong>Add related list to users’ existing record page customizations</strong> checkbox.</p><p><img src="'+c+'" alt="" data-zoomable="true"></p></li><li><p>Click <strong>Next</strong>.</p></li></ol><h2 id="step-2-add-the-related-list-to-the-contact-page-layout" tabindex="-1">Step 2: Add the related list to the Contact page layout <a class="header-anchor" href="#step-2-add-the-related-list-to-the-contact-page-layout" aria-label="Permalink to &quot;Step 2: Add the related list to the Contact page layout&quot;">​</a></h2><ol><li><p>Click <strong>Page Layouts</strong> in the left sidebar.</p><p><img src="'+d+'" alt="" data-zoomable="true"></p></li><li><p>Click <strong>Contact Layout</strong>.</p></li><li><p>Scroll to the bottom of the page layout until you see the <strong>Reservations</strong> related list.</p></li><li><p>Click the <strong>wrench icon</strong>.</p></li><li><p>Add the following fields to the Selected Fields:</p><ul><li>Reservation ID</li><li>Check-in Date</li><li>Check-out Date</li><li>Total Price</li></ul><p><img src="'+p+'" alt="" data-zoomable="true"></p></li><li><p>Click <strong>OK</strong> to save your field selection.</p></li><li><p>Click <strong>Save</strong> to save your changes to the Page Layout.</p></li><li><p>In the Coral Cloud Resorts app, navigate to the Contact record page for <strong>Sofia Rodriguez</strong>.</p></li><li><p>Refresh the Page.</p></li><li><p>Click the <strong>Related</strong> tab.</p></li><li><p>Make sure that you can see the <strong>Reservations</strong> related list.</p></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You may notice that the list is empty. That’s because you categorized Reservation as a high-scale engagement object in Data Cloud. By default, this type of object will only show data for the last seven days.</p></div><h2 id="step-3-create-a-dynamic-related-list" tabindex="-1">Step 3: Create a dynamic related list <a class="header-anchor" href="#step-3-create-a-dynamic-related-list" aria-label="Permalink to &quot;Step 3: Create a dynamic related list&quot;">​</a></h2><p>In this step, you’ll add a dynamic related list to the Contact record page. Dynamic related lists allow you to specify custom filters and control how much data is returned by Data Cloud.</p><ol><li><p>Make sure you’re on the Contact record page for <strong>Sofia Rodriguez</strong>.</p></li><li><p>Open the <strong>Setup</strong> menu and click <strong>Edit Page</strong> to open App Builder.</p></li><li><p>Click the <strong>Related</strong> tab.</p></li><li><p>Drag the <strong>Dynamic Related List - Single</strong> component to the top of the page under the Related tab.</p><p><img src="'+h+'" alt="" data-zoomable="true"></p></li><li><p>Make sure the Dynamic Related List component is selected. In the <strong>Related List</strong> field (right sidebar), select <strong>Reservations</strong>.</p></li><li><p>Under <strong>Related List Fields</strong>, click the <strong>Add Field</strong> button, select the <strong>Reservation ID</strong> field and click <strong>Done</strong>.</p></li><li><p>Repeat the previous step to add the following fields:</p><ul><li>Check-in Date</li><li>Check-out Date</li><li>Total Price</li></ul></li><li><p>Under <strong>Related List Filters</strong>, click the <strong>Add Filter</strong> button and add the following filter:</p><ul><li>Field = Creation Date</li><li>Operator=not equal to</li><li>Value=&lt;leave blank&gt;</li></ul><p><img src="'+g+'" alt="" data-zoomable="true"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you don’t specify a filter, only the last seven days worth of data will be shown. For most contacts, this would result in an empty related list.</p></div></li><li><p>Click <strong>Done</strong>.</p></li><li><p>Click <strong>Save</strong> (upper right corner) to save your changes to the page.</p></li><li><p>Click the <strong>back arrow button</strong> (upper left corner) to leave App Builder and go back to the Contact record.</p></li><li><p>On the Contact record page, click the <strong>Related</strong> tab.</p></li><li><p>Make sure that you can see the <strong>Reservations</strong> dynamic related list. This time, the list shows all the reservation records for Sofia Rodriguez.</p><p><img src="'+u+'" alt="" data-zoomable="true"></p></li></ol><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>In this exercise, you created a Data Cloud Related List, enabling users to view a Contact&#39;s reservations directly within the Contact record page. The magic behind this functionality lies in identity resolution. This process uses matching and reconciliation rules to link Guest records (associated with reservations) in Data Cloud to their corresponding Contact records in Salesforce. When you navigate to a Contact record, Data Cloud looks up any linked individual then traverses the linked data to retrieve the related reservations.</p>',14)]))}const D=e(f,[["render",m]]);export{R as __pageData,D as default};
