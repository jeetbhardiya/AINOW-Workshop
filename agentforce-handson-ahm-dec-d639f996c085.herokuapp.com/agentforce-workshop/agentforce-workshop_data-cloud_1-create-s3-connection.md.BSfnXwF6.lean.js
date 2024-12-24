import{_ as e,c as o,a1 as a,o as n}from"./chunks/framework.BRP8cXOc.js";const r="/agentforce-workshop/data-cloud-s3-data-cloud-setup.CiOh5x7R.webp",c="/agentforce-workshop/data-cloud-s3-add-connection.-lsKHU6F.webp",s="/agentforce-workshop/data-cloud-s3-test-connection.-q7Sx95j.webp",f=JSON.parse('{"title":"Exercise 1: Create an Amazon S3 Connection","description":"","frontmatter":{},"headers":[],"relativePath":"agentforce-workshop/data-cloud/1-create-s3-connection.md","filePath":"agentforce-workshop/data-cloud/1-create-s3-connection.md"}'),d={name:"agentforce-workshop/data-cloud/1-create-s3-connection.md"};function i(l,t,p,m,u,g){return n(),o("div",null,t[0]||(t[0]=[a('<h1 id="exercise-1-create-an-amazon-s3-connection" tabindex="-1">Exercise 1: Create an Amazon S3 Connection <a class="header-anchor" href="#exercise-1-create-an-amazon-s3-connection" aria-label="Permalink to &quot;Exercise 1: Create an Amazon S3 Connection&quot;">​</a></h1><p>You can use Data Cloud to seamlessly unify data from various enterprise systems. As an example, Coral Cloud Resorts stores guest and reservation data in Amazon S3. To ingest data from Amazon S3, you first need to create an Amazon S3 connection.</p><p>To create an Amazon S3 connection:</p><ol><li><p>Open the <strong>Setup menu</strong> and select <strong>Data Cloud Setup</strong>.</p><p><img src="'+r+'" alt="" data-zoomable="true"></p></li><li><p>In the left sidebar, click <strong>Other Connectors</strong>.</p></li><li><p>Click <strong>New</strong>.</p></li><li><p>Select <strong>Amazon S3</strong> and click <strong>Next</strong>.</p><p><img src="'+c+'" alt="" data-zoomable="true"></p></li><li><p>Configure your Amazon S3 connection as follows:</p><table tabindex="0"><thead><tr><th><strong>Field</strong></th><th><strong>Value</strong></th></tr></thead><tbody><tr><td>Connection Name</td><td><code>Coral Cloud Resorts S3 Connection</code></td></tr><tr><td>Connection API Name</td><td>Keep default</td></tr><tr><td>Authentication Option</td><td>Access Key/Secret Based (default)</td></tr><tr><td>AWS access key</td><td><code>AKIA47CRZ7L5P7VBV3LD</code></td></tr><tr><td>AWS secret access key</td><td><code>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</code></td></tr><tr><td>Bucket Name</td><td><code>coral-cloud</code></td></tr><tr><td>Parent Directory</td><td>Keep default value: <code>/</code></td></tr></tbody></table></li><li><p>Click <strong>Test Connection</strong> to validate the connection.</p><p><img src="'+s+'" alt="" data-zoomable="true"></p></li><li><p>Click <strong>Save</strong>.</p></li></ol><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>In this exercise, you created a connection to an Amazon S3 bucket. You can now use that connection to create data streams that ingest data stored in Amazon S3.</p>',6)]))}const C=e(d,[["render",i]]);export{f as __pageData,C as default};