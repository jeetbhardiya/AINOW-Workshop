import{_ as t,c as a,a1 as r,o}from"./chunks/framework.BRP8cXOc.js";const g=JSON.parse('{"title":"Exercise 7: Ingest Unstructured Data from local files","description":"","frontmatter":{},"headers":[],"relativePath":"agentforce-workshop/data-cloud/7-ingest-unstructured-data-index.md","filePath":"agentforce-workshop/data-cloud/7-ingest-unstructured-data-index.md"}'),i={name:"agentforce-workshop/data-cloud/7-ingest-unstructured-data-index.md"};function s(n,e,l,c,d,p){return o(),a("div",null,e[0]||(e[0]=[r('<h1 id="exercise-7-ingest-unstructured-data-from-local-files" tabindex="-1">Exercise 7: Ingest Unstructured Data from local files <a class="header-anchor" href="#exercise-7-ingest-unstructured-data-from-local-files" aria-label="Permalink to &quot;Exercise 7: Ingest Unstructured Data from local files&quot;">​</a></h1><p>Coral Cloud Resorts stores various types of information as PDFs locally. Download the PDFs below, and familiarize yourself with their content:</p><ul><li><a href="https://coral-cloud.s3.amazonaws.com/agentforce-rag/hotel-policies.pdf" target="_blank" rel="noreferrer">hotel-policies.pdf</a></li><li><a href="https://coral-cloud.s3.amazonaws.com/agentforce-rag/valet-services-policies.pdf" target="_blank" rel="noreferrer">valet-services-policies.pdf</a></li><li><a href="https://coral-cloud.s3.amazonaws.com/agentforce-rag/wedding-planning-guide.pdf" target="_blank" rel="noreferrer">wedding-planning-guide.pdf</a></li><li><a href="/agentforce-workshop/external-pdfs/Getting_There_Directions_to_Coral_Cloud_Resorts.pdf" target="_blank">getting-there-directions.pdf</a></li></ul><p>In this exercise, you&#39;ll ingest the unstructured data from those PDFs into Data Cloud.</p><h2 id="step-1-create-a-file-based-einstein-data-library" tabindex="-1">Step 1: Create a file based Einstein Data Library <a class="header-anchor" href="#step-1-create-a-file-based-einstein-data-library" aria-label="Permalink to &quot;Step 1: Create a file based Einstein Data Library&quot;">​</a></h2><ol><li><p>From Setup, navigate to <strong>Einstein Data Library</strong>.</p></li><li><p>Click on <strong>New Library</strong>.</p></li><li><p>Give the library a name like <code>Coral Cloud PDFs</code>.</p></li><li><p>Upload the above files and click <strong>Save</strong>.</p></li></ol><h2 id="step-2-examine-the-data-streams-and-search-index" tabindex="-1">Step 2: Examine the Data Streams and Search Index <a class="header-anchor" href="#step-2-examine-the-data-streams-and-search-index" aria-label="Permalink to &quot;Step 2: Examine the Data Streams and Search Index&quot;">​</a></h2><ol><li><p>Using the <strong>App Launcher</strong>, open the <strong>Data Cloud</strong> application.</p></li><li><p>Click the <strong>Data Streams</strong> tab.</p></li><li><p>Open the <strong>AiGroundingFileRef_Home</strong> data stream and click the <strong>Refresh Now</strong> button.</p></li><li><p>Click the <strong>Data Model</strong> tab.</p></li><li><p>Notice that a Data Model Object named <strong>RagFileUDMO</strong> gets created automatically. This contains the ingested files.</p></li><li><p>Click the <strong>Search Index</strong> tab.</p></li><li><p>Notice that a search index named <strong>RagFileUDMO_SI</strong> gets created. This search index is responsible to chunk and vectorize your data.</p></li><li><p>Keep an eye on <strong>Search Index Last Run Status</strong> field. A status of <code>Ready</code> indicates that the chunking and vectorization process is complete.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The chunking and vectorization process takes up to 20 mins to complete. Click on Rebuild in case the status is blank or fails.</p></div></li><li><p>Use the <strong>Data Explorer</strong> tab to see the records populated in the <code>RagFileUDMO</code> and <code>RagFileUDMO Chunk</code> objects.</p></li></ol>',8)]))}const u=t(i,[["render",s]]);export{g as __pageData,u as default};
